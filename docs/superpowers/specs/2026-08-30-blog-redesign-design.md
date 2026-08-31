# gregosuri.com redesign + predictions archive — design spec

**Date:** 2026-08-30
**Repos:** `gosuri/gosuri.github.io` (this repo, implementation target) and `~/code/gosuri-predictions` (data source, exporter lives there).
**Companion doc:** `~/code/gosuri-predictions/docs/2026-08-30-blog-redesign-findings.md` (survey findings).

## Goal

Redesign gregosuri.com in an editorial-minimal direction and add a Predictions section rendering the extracted-predictions archive (1,496 dated statements from 334 videos/podcasts). Design iteration happens visually in claude.ai/design via DesignSync; the approved system is applied to the existing Jekyll site. No stack migration.

## Locked decisions

1. **Design iteration in claude.ai/design** — component library built locally, synced to a design-system project, iterated there, then translated into Jekyll.
2. **Direction: editorial minimal** — type-driven, generous whitespace, restrained single accent.
3. **Predictions IA: landing + theme pages** — `/predictions/` landing plus one page per theme. No per-video pages; transcripts stay repo-only. Quotes deep-link to YouTube timestamps.
4. **Keep Jekyll + GitHub Pages** — must build with stock GitHub Pages (safe mode, no custom plugins). Work lands on the `redesign` branch; `master` (live site) untouched until the user merges.

## 1. Design system

**Tokens**

- Type: serif display for headings (self-hosted webfont — Newsreader or Source Serif 4, woff2 in `assets/fonts/`), same serif or system sans for body; 4–5 step modular scale; measure ~65ch.
- Color: near-black ink (`#1a1a1a`-ish) on warm paper white (`#faf8f5`-ish), one muted accent (rust/oxblood family) for links and marks. Light-only in v1; tokens structured so dark mode is a later variable swap.
- Spacing: small scale (4/8-based), generous section rhythm.

**Components** (each a self-contained preview HTML in `design/`, first line `<!-- @dsCard group="…" -->` so claude.ai/design builds its card index):

| Component | Group |
|---|---|
| Type & color tokens sheet | Foundations |
| Header/nav + footer | Navigation |
| Post-list item (title, date, external-link variant) | Content |
| Homepage section block (Talks / Press / Open Source rows) | Content |
| Prediction quote card (quote, date, source title+channel, timestamped YouTube link, context note) | Predictions |
| Theme index card (theme name, count, date range, sample quote) | Predictions |
| Page shells: home, post, generic page, predictions landing, theme page | Pages |

`design/` is committed to this repo as the living source of truth; claude.ai/design is the review surface. Preview files are plain HTML with inline CSS (no build step, no external requests).

## 2. Claude Design sync workflow

1. `DesignSync list_projects` → reuse a project if the user has one for this, else `create_project` ("gregosuri.com").
2. `finalize_plan` with `localDir` = this repo, writes = `design/**`.
3. `write_files` from disk.
4. User iterates in claude.ai/design. Pulling changes back: `list_files` → `get_file` per changed component → translate deltas into `_sass` tokens/components. (Pull-back is a follow-up session's work; v1 ships the initial system.)

## 3. Jekyll rebuild

Files touched: `_layouts/default.html`, `_layouts/page.html`, `_layouts/post.html`, new `_layouts/predictions.html` (landing) and `_layouts/theme.html` (theme page) if shell differences warrant it — otherwise reuse `page`; `_includes/head.html`, `_includes/header.html`, `_includes/footer.html`; `_sass/*` (rewritten as `_tokens.scss`, `_base.scss`, `_layout.scss`, `_components.scss`, `_syntax-highlighting.scss` kept); `css/main.scss`; `index.html`; `posts.html`; `assets/fonts/`.

Preserved behavior: `_data/{talks,press,projects}.yml` keep driving homepage sections; nav stays auto-generated from pages with `title` front matter (plus the art.gregosuri.com link); `feed.xml`, permalinks, pagination config unchanged.

## 4. Predictions integration

**Exporter:** `scripts/export_blog.py` in gosuri-predictions. Input: `PREDICTIONS.md` (canonical structure: `## Theme` → `### YYYY-MM-DD — Title` → `_Source (Channel)_` line → `> quote` lines → `> — [HH:MM:SS](youtube-url)` → optional `**Context:** …`). Output into the blog repo:

- `predictions/index.md` — front matter (`layout`, `title: Predictions`, `permalink: /predictions/`), intro line (counts), theme index (name, entry count, date range) linking to theme pages.
- `predictions/<theme-slug>.md` — front matter (`layout`, `title`, `permalink: /predictions/<theme-slug>/`), all entries for that theme in date order, each rendered with the prediction-card markup (kramdown-compatible HTML/markdown mix).
- Links to `videos/<id>.md` are dropped (repo-only); the YouTube timestamp link is the canonical source link.

**Parsing contract:** exporter fails loudly if the parsed entry count doesn't match the count declared in the file header (1,496) or if any entry lacks a date, quote, or timestamp link. Pure parse function separated from file I/O so it's unit-testable.

**Page weight:** if a theme's generated markdown exceeds ~300KB, the exporter splits that theme by year into `<theme-slug>/<year>.md` sub-pages with an index. (Current largest theme ≈ 3,400 lines of source; expected to stay under the bar in v1.)

**Nav:** `predictions/index.md` has a `title`, so the existing header include lists it automatically.

## 5. Verification

- `jekyll build` locally (Bundler; fall back to the repo's Docker/Makefile if the local Ruby toolchain fights back).
- Exporter tests pass (parse counts, malformed-entry rejection).
- Sample-check 10 random timestamp deep links resolve to the right video ID + `t=` param.
- Serve locally on `0.0.0.0`, print localhost + LAN URLs for review.

## Out of scope (v1)

Dark mode; publishing transcripts; per-video pages; RSS changes; stack migration; automating the claude.ai/design pull-back.
