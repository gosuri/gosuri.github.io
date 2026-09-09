# Sharable predictions — design

Implements the Claude Design handoff in `docs/design/2026-09-09-sharable-predictions.md`,
and consolidates the `gosuri-predictions` pipeline into this repo.

Three outcomes:

1. Every one of the 1,689 predictions gets a stable permalink, a `§` hover anchor, and a
   copy-link action.
2. Every prediction page gets its own 1200×630 `og:image`.
3. Datelines become prominent — own line, accent, small caps, tabular figures.

## Decisions

| Decision | Choice |
|---|---|
| Prediction ID | `date` + truncated title slug + 4-char hash of `vid`+`stamp_url` |
| Social cards | Rendered in CI, never committed |
| Theme pages | Keep `SPLIT_BYTES` year-splitting for oversized themes |
| Consolidation | Everything moves in except raw transcripts |

## Corrections to the handoff

The handoff was written without knowledge of the upstream generator. Four of its
instructions are wrong for this repo and are superseded here.

1. **"Write a one-off script to split the existing `predictions/*.md`."** Those files are
   generated output. `export_blog.py` parses `PREDICTIONS.md` into exactly the fields the
   collection needs. Extend the generator; never regex the rendered markdown.
2. **`permalink: /predictions/:theme/:slug/`.** `:theme` is custom front matter, and
   Jekyll 3.10 — what GitHub Pages runs — only supports built-in placeholders in
   collection permalinks. Write an explicit `permalink:` into each generated file.
3. **`https://gregosuri.com/...` in og tags.** The apex only redirects. Build every URL
   from `site.url` (`https://www.gregosuri.com`) so scrapers get a 200.
4. **Theme pages render all entries.** True, but Cloud Decentralization has 461. Keep the
   existing year-split so page weight stays bounded and current URLs keep working.

## Repo consolidation

```
gosuri.github.io/
  PREDICTIONS.md              source of truth, 1,689 entries    [excluded from site]
  CATALOG.md                                                     [excluded]
  videos/<id>.md              357 per-video pages                [excluded]
  catalog/                    TSVs, discovery results            [excluded]
  transcripts/<id>.md         355 files — GITIGNORED, local only [excluded]
  research/                   pipeline scripts                   [excluded]
    export_blog.py            extended with collection output
    test_export_blog.py       extended
    discover.sh  merge_catalog.py  fetch_captions.sh
    clean_vtt.py  whisper_*.sh  compile.py  pod_transcripts.py
  _predictions/<theme>/<id>.md   1,689 generated files           [PUBLISHED]
  predictions/<theme>.md         generated theme pages           [PUBLISHED]
```

`scripts/` is renamed `research/` — a bare `scripts/` at the root of a Jekyll site reads
like site assets.

`site/` does not come over. Its `build.py` renders `videos/*.md` into a 1.6 MB static
archive page, which is what the predictions section now does. If the searchable archive is
wanted later, rebuild it against the collection.

### Two-layer exclusion

These are different mechanisms guarding different risks. Conflating them is how ~700
unintended pages ship.

- `.gitignore` gets `transcripts/` — governs what becomes **public**.
- `_config.yml` `exclude` gets everything else above — governs what gets **served**.

`jekyll-optional-front-matter` is active (GitHub Pages loads it by default; the build log
shows `JekyllOptionalFrontMatter::Generator`). Every `.md` file becomes a page unless
excluded. `videos/` alone is 357 of them.

### History

The upstream repo has 3 commits and no history worth preserving: copy files, one commit,
no subtree merge. Keep `gosuri-predictions` private and untouched until the consolidated
pipeline runs green once, then archive it. That also covers the git-backup gap for
transcripts.

## Content model

### ID generation

```python
def make_id(e):
    slug = slugify(e["title"])[:50].rstrip("-")
    h    = b32(sha256(f"{e['vid']}|{e['stamp_url']}"))[:4]
    return f"{e['date']}-{slug}-{h}"
```

Verified against the full corpus: **1,689 unique IDs, zero collisions**, max length 66
characters (down from 118 for a bare title slug).

The hash derives from `vid` + `stamp_url` and never from the title. A future re-analysis
that rewords titles changes only the readable half, leaving the hash as a stable join key
for issuing redirects. The generator asserts global uniqueness and fails the build on
collision rather than silently overwriting.

Neither component is sufficient alone — measured on real data: title slugs collide 9
times, `(vid, timestamp)` collides 41 times (193 podcast entries carry no `t` param). The
combination is unique.

### Parsing details

`parse_predictions` already yields
`{theme, date, title, source, quote, stamp, context, vid}`. Three details corrupt output
if missed:

1. The `> — [00:43:16](url)` line lands in **both** `stamp` and `quote[]`. Strip it from
   the quote or every quote ends with a duplicated timestamp.
2. `context` retains its literal `**Context:**` prefix. The template supplies that label;
   strip the prefix or it renders twice.
3. Quotes contain curly quotes, em-dashes, colons, and newlines. Front matter must use
   YAML block scalars. The current `_fm()` wraps values in double quotes and breaks on the
   first `"`.

### Generated file

```yaml
---
layout: prediction
theme: local-compute
theme_title: Local Compute
date: 2023-09-28
title: "Every home will have a supercomputer"
permalink: /predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/
source: "Building the Super Cloud of GPUs… (Frictionless)"
source_url: https://www.youtube.com/watch?v=GVrfHDg30-M&t=2596s
timestamp: "00:43:16"
vid: GVrfHDg30-M
quote: |
  I envision a world where every home will have a supercomputer…
context: |
  Asked where Akash's end state lands…
---
```

`vid` is carried through so the archive stays re-derivable.

### Theme pages

Keep current URLs and `SPLIT_BYTES` splitting. Bodies become a loop over the collection
filtered by theme. Standfirst counts (`_159 statements · 2018–2026_`) are computed from the
collection rather than hardcoded, so they cannot drift.

## Templates, styles, behavior

New: `_includes/prediction.html` (one entry, the handoff's markup verbatim) and
`_layouts/prediction.html` (single-prediction page).

`_sass/_components.scss` lines 206–263 (the `---- prediction entries ----` block, ending
at `.predictions hr`) are descendant-selector based precisely because
kramdown emitted no classes. The new model emits explicit classes, so that block is
replaced, not extended — including its now-false header comment.

Three existing rules are reused rather than duplicated:

- `.crumb` (line 134) — as-is.
- `.post-nav` (line 197) — its selector is `.post .post-nav a`; the prediction page is not
  inside `.post`, so widen the selector rather than copy the rule.
- `.post-link.external::after` (line 50) — generalize to a shared `.external::after` so the
  share row and essay links stay identical by construction.

### JavaScript

One delegated `click` listener, inlined in `_includes/footer.html`. No file, no request.
This is the site's **only** script — record that in `AGENTS.md` so it does not quietly
become a bundle.

Degradation: without JS the control is a plain `<a>` to the page; without a clipboard API
it navigates instead.

### Head

og/twitter block guarded by `{% if page.collection == "predictions" %}`, every URL built
from `site.url`.

## Build pipeline

```yaml
# .github/workflows/deploy.yml  — replaces managed pages-build-deployment
build:
  - actions/jekyll-build-pages@v1     # the image we already verify against
  - actions/cache: key = hash(PREDICTIONS.md + social-preview template)
  - node: render uncached cards → _site/predictions/<theme>/<id>/card.png
  - actions/upload-pages-artifact
deploy:
  - actions/deploy-pages
```

Cards render after Jekyll, writing into `_site/`, so images never enter git. Use one
persistent browser context for all cards — the measured 2.4 s was a cold launch; warm
renders are a fraction of that. Measured card weight is 86 KB, so 1,689 cards would be
~145 MB if committed, against a repo currently 412 KiB packed. That is why they are not.

### Landing it safely

This replaces GitHub's managed build. If the workflow is wrong, the site stops deploying.
Land it in two steps:

1. Workflow reproducing today's output with **no** card generation; verify byte-identical.
2. Add card rendering.

## Verification

"It built" is not evidence. Gates:

1. Page count equals today's count plus 1,689, with nothing from `research/`, `videos/`,
   or `catalog/`.
2. All 1,689 permalinks resolve — no 404s, no collisions.
3. Existing `/predictions/cloud-decentralization/2021/` URLs still resolve.
4. A spot-check card validates in X's card validator and a Slack unfurl.
5. `feed.xml` unchanged.

Tests hang off the existing `test_export_blog.py`: ID uniqueness across the real corpus,
ID stability (same input → same ID), stamp-line stripping, context-prefix stripping, and
YAML round-tripping of a quote containing `"`, `:` and `—`.

## Sequencing

1. Consolidation — move files, exclusions, gitignore
2. Generator + tests — collection output, ID function
3. Templates and styles
4. Workflow, bare — no cards, byte-identical output
5. Workflow, with cards

Each step is independently verifiable. The risky pipeline swap comes last, after the
content model is proven.

## Out of scope

- Redirects from any future title rewording. The hash makes them possible; nothing needs
  them yet.
- Extending `feed.xml` to include predictions — the handoff lists it as optional.
- Rebuilding the `site/` searchable archive against the collection.
