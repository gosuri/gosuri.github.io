# Agent-first gregosuri.com — design

_Design date: 2026-09-10. Status: approved, pending implementation plan._

## Problem

The site holds 1,689 dated predictions extracted from 240 talks and podcasts, each
carrying a theme, a date, a verbatim quote, an editorial context note, a source title,
a `source_url` and a `timestamp` that deep-links to the spoken moment. Twenty essays,
an about page, and `_data/{talks,press,projects}.yml` sit alongside it.

Almost none of it is machine-addressable:

- No `robots.txt`, no `sitemap.xml`, no `llms.txt`, no JSON, no machine-readable index.
- `feed.xml` carries ten posts and zero predictions.
- The 1,689 richest pages are reachable only by crawling HTML.
- A theme page such as `/predictions/cloud-decentralization/` renders 461 statements
  inline — roughly 126k tokens, mostly markup.

An agent asked "what does Greg think about home GPUs, and when did he say it?" has no
efficient path to the answer and no stated contract for how to cite it.

## Goal

**Retrieve and cite.** A web-browsing agent should reach the right quotes — with date,
source and timestamp — in a small number of cheap fetches, and should cite them without
garbling attribution.

## Non-goals

- No MCP server, no search API, no hosted service. The site stays static on GitHub Pages
  behind Cloudflare.
- No new content published. Transcripts (13 MB) and the 357-entry video catalog remain
  excluded from the site, as they are today.
- No bulk-export or training-corpus surface. Optimising for retrieval, not ingestion.
- No JavaScript. `_includes/footer.html` keeps the site's only script.

## Constraints

- Jekyll 3.10 via `github-pages`, safe mode, no arbitrary plugins. Verify anything
  touching `_config.yml`, `_data` or layouts against the real builder with the Docker
  command in `CLAUDE.md`.
- Jekyll cannot emit two outputs per document. Prediction documents already spend their
  one output on HTML, so per-item markdown twins require a post-build step.
- `research/export_blog.py` regenerates the entire prediction surface from
  `PREDICTIONS.md` on every batch: `predictions/index.md`, every
  `predictions/<theme>.md`, every `predictions/<theme>/<year>.md`, and all 1,689
  `_predictions/**/*.md`. Anything committed under those paths is destroyed by the next
  content update.
- `jekyll build` and `jekyll server` wipe `_site`, taking post-build artifacts with them.

## Approach

A **markdown twin site**: every URL gains a plain-markdown twin, plus a documented
retrieval funnel and an authored citation contract.

Rejected alternatives:

- **Discoverable as-is** (`robots.txt` + `sitemap.xml` + JSON-LD + semantic HTML only) —
  makes the site findable but leaves agents paying HTML tax on 126k-token theme pages.
  Roughly a third of the value; retained as the hygiene baseline inside this design.
- **Precomputed answer surface** (LLM-generated keyword indexes at `/agents/topics/*`) —
  best first-fetch precision, but the topic list is a bet on a fixed query vocabulary
  and drifts with every new batch. The title index gets most of the precision without
  the bet.

### Why titles carry the retrieval

Prediction titles are already descriptive sentences — "Machines will schedule other
machines", "The Supermini pays for itself in year one — ~110% ROI". All 1,689 of them,
one line each, cost ~40k tokens. An agent can read the entire corpus index in a single
fetch and choose precisely, with no search infrastructure. This is the load-bearing
observation of the whole design.

### Retrieval path

| Hop | URL | Cost |
|---|---|---|
| 1 | `/llms.txt` | ~2k tok — inventory and budgets |
| 2 | `/predictions/index.md` or `/predictions/<theme>/index.md` | ~40k / ~5k tok — titles |
| 3 | `/predictions/<theme>/<id>/index.md` | ~400 tok — the citable quote |

## URL surface

Nothing existing moves or changes URL.

| Path | Origin | Contents |
|---|---|---|
| `/robots.txt` | committed static | Welcomes `GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Google-Extended`; points at sitemap and `llms.txt` |
| `/sitemap.xml` | `jekyll-sitemap` | All ~1,730 page URLs with `lastmod` |
| `/llms.txt` | generated | Generated inventory: file list, current counts, token budgets, URL rules, pointer to `/citing/` |
| `/citing/` | committed page | Authored citation contract and navigation guide (human-readable) |
| `<permalink>index.md` | generated | Markdown twin of every page |
| `/predictions/index.md` | generated | All 1,689 as one line each, grouped by theme, sorted by date |
| `/predictions/<theme>/index.md` | generated | One theme's titles, with year counts |
| `/posts/index.md` | generated | The twenty essays |

`index.md` rather than `<permalink>.md` because permalinks are already directories
(`permalink: pretty`), so no URL rewriting is needed and no collision with a real page
is possible. It also matches the existing `card.png` convention, giving one rule:
**append a filename to any URL to get a machine view of it.**

### What a twin contains: leaf pages versus index pages

The table above assigns `/predictions/index.md` and `/predictions/<theme>/index.md` to
both "twin of a page" and "corpus index". That is intentional, and the resolving rule is:

- **Leaf pages** — a prediction, an essay, `/about/`, `/citing/` — get a twin that is the
  page's full content reformatted as markdown.
- **Index pages** — `/predictions/`, `/predictions/<theme>/`, `/predictions/<theme>/<year>/`,
  `/posts/` — get a twin that is a retrieval-optimised listing, not a literal
  transcription of the HTML.

The distinction is load-bearing for theme pages specifically. `/predictions/<theme>/`
renders every statement's full quote inline — 126k tokens for the largest theme. Its twin
deliberately carries **titles and IDs only** (~5k tokens), because an agent choosing what
to read should not have to buy the whole theme to do it. Full quotes come from item twins,
one cheap fetch each. `llms.txt` and `/citing/` both state this so an agent knows the
theme twin is an index, not the content.

### Discovery

`_includes/head.html` already advertises the RSS feed with `<link rel="alternate">`. One
more line does the same for the twin:

```html
<link rel="alternate" type="text/markdown" href="{{ page.url | append: 'index.md' }}">
```

This matters more than `llms.txt` does. An agent handed any page URL finds the cheap
version from the page itself, with no convention to know and nothing to guess.

Honest limitation: no major agent auto-discovers `llms.txt`. Its value is as a URL a
human hands to an agent, and as documentation of the convention. The mechanisms that get
used unprompted are the sitemap, the alternate link, and the twins themselves.

## Generation

One generator, mirroring the card pipeline:

```
research/agent_docs.mjs      pure: source -> markdown strings   (unit-tested)
research/render_agents.mjs   driver: reads sources, writes into _site
```

It reuses `parseFrontMatter` and `postPermalink` from `card_data.mjs` rather than
re-deriving permalink logic, and reads `_predictions/**` — the same source the card
renderer reads. No Playwright, so it completes in about a second and runs in CI
**unconditionally**, outside the card cache, immediately after the card render step.

Everything an agent reads is a post-build artifact in `_site`, never committed. This is
what keeps `export_blog.py` from clobbering the agent surface on the next prediction
batch, and it means new predictions flow through automatically with no second step to
remember. The pipeline's existing split holds: **Python generates committed site source,
Node generates uncommitted build artifacts.**

Two deliberate exceptions:

- `robots.txt` — six static lines, no dynamic content. Committed at the repo root;
  Jekyll passes it through.
- `sitemap.xml` — the official `jekyll-sitemap` plugin, which is on the GitHub Pages
  whitelist and gets `lastmod` right for free. It touches `_config.yml`, so it must be
  verified against the Jekyll 3.10 Docker builder before shipping. Twins are added
  post-build and so are absent from the sitemap by construction; they are alternates,
  not separate documents, and the alternate link is their discovery path.

### Make targets

| Target | Behaviour |
|---|---|
| `make agents` | Renders the agent surface into an existing `_site` |
| `make test` | Extended to run `agent_docs.test.mjs` |
| `make preview` | Extended to render the agent surface alongside cards |

### Local-work caveat

As with cards, `jekyll build` and `jekyll server` wipe `_site`, so twins 404 under
`make server`. `make preview` is how to see them. This goes into `CLAUDE.md` and
`AGENTS.md` next to the existing card note.

## Content formats

### Item twin

Built around one integrity problem: `context:` is site annotation, not speech. An agent
that conflates the two attributes the site's gloss to Greg as a quotation. The twin
labels them unambiguously and supplies a pre-formatted citation, removing the agent's
opportunity to garble it.

```markdown
# Machines will schedule other machines

- **Speaker:** Greg Osuri
- **Said:** 2022-11-03
- **Theme:** AI Agents — /predictions/ai-agents/
- **Source:** Akash Weekly, 2 November 2022 (Akash Network)
- **Watch at:** 00:10:54 — https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s
- **Canonical:** https://www.gregosuri.com/predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4/
- **Cite as:** Greg Osuri, "Machines will schedule other machines," Akash Weekly,
  3 Nov 2022, 00:10:54. https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s

## Quote — verbatim

> Akash being a sovereign compute platform, it doesn't deny anybody compute.
> Tomorrow when you have machines, they'll be able to schedule other machines. [...]

## Context — site annotation, not spoken

Early (2022) articulation of the permissionless machine-to-machine compute economy
later central to his AI-agent framing.
```

Roughly 400 tokens, against ~1,400 for the same page as HTML. When `context:` is absent
or empty, the section is omitted entirely rather than emitted empty.

### Flat index

`slug_id` already contains the date, and the URL is fully derivable from
`theme/slug_id`. Stating the URL rule once and never repeating a URL removes ~40% of the
file.

```markdown
# All 1,689 predictions

URL for any entry below: https://www.gregosuri.com/predictions/{theme}/{id}/
Markdown twin: append `index.md`.

## ai-agents — 34 statements, 2022-2026

2022-11-03-machines-will-schedule-other-machines-rya4 — Machines will schedule other machines
2023-01-13-computing-is-shifting-from-humans-to-machines-as-i-nbuy — Computing is shifting from humans to machines
```

~40k tokens for the corpus, grouped by theme, sorted by date, greppable. Theme indexes
are the same scoped to one theme, with per-year counts.

### Post and page twins

Essays get title, date, canonical URL and body markdown. Ten of the twenty posts are
`link:`-only pointers to the Akash blog with no local body; their twins state that and
give the external URL rather than emitting a hollow document.

### `/citing/`

A hand-written, nav-adjacent page serving humans and agents equally, in two sections.

**How to cite:**

- The quote block is the citable unit. Quote verbatim or do not present it as a quote;
  never paraphrase into quotation marks.
- Every citation carries date, source and timestamp. The timestamp deep-links to the
  spoken moment, which is the point of the archive.
- `Context` sections are site annotation, not speech.
- Transcripts are not published, so do not imply access to surrounding context.
- Some of these predictions were wrong. The archive is not curated to flatter, and
  surfacing the misses is welcome — stated explicitly so a retrieving agent does not
  assume a selection bias that is not there.

**How to navigate:** the `index.md` twin rule, the `card.png` rule, the flat index,
per-theme indexes, the ID scheme, and token budgets.

Linked from the predictions index and the footer, **not** the main nav — the header is
deliberately spare and a citation page does not earn top-level billing. Concretely:
`_includes/header.html` builds the nav by looping over pages with `nav: true`, so
`/citing/` simply omits that key. As a normal page it gets its own twin at
`/citing/index.md` for free.

### Division of labour

Authored policy lives on `/citing/`; generated facts live in `llms.txt`. `llms.txt`
carries the inventory, counts, budgets and URL rules, and points at `/citing/` for the
contract. Neither restates the other, so there is one source of truth for each.

## Dropped from scope

`/predictions/index.json`. Verified: no JSON exists in the repo beyond npm's own
`package.json`/`package-lock.json`, and nothing in the build reads JSON — the card
renderer takes its counts from `predictions/index.md` via `sourceCount()`. Adding it has
no consumer: browsing agents read markdown, and JSON is ~2x larger here through
structural overhead. Its only real audience is a tool built against the corpus, which is
the MCP option explicitly declined. If an MCP server is ever built, that is when JSON
earns its place.

## Testing

`agent_docs.mjs` is pure string transformation, tested with Node's built-in runner and no
new dependency, following `card_data.test.mjs`. Cases that matter:

- Front matter with multi-line `quote:` and `context:` blocks.
- Quotes containing markdown-significant characters, smart quotes and em dashes.
- Missing or empty `context:` — section omitted, not emitted empty.
- `link:`-only posts — external pointer, not a hollow body.
- Theme and year grouping and ordering in the flat index.
- Absolute canonical URL construction from `site.url` and permalink.
- The `Cite as:` string against a known fixture.

Plus one integration assertion after `make preview`: a known prediction's twin exists in
`_site` and contains its `source_url` and `timestamp`.

## Success criteria

- An agent given only `https://www.gregosuri.com/llms.txt` can answer "what has Greg
  said about home GPUs earning income, and when?" with a verbatim quote, a date and a
  working timestamp link, in three fetches.
- An agent given any single page URL can find that page's markdown twin from the page
  itself.
- A new prediction batch through `export_blog.py` reaches the agent surface with no
  manual step.
- `make test` covers the generator; `make preview` shows the twins locally.
- No new runtime dependency, no JavaScript, no hosted service.
