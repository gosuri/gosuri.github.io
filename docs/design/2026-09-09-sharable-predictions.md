# Handoff: Sharable prediction entries + social preview images

Target: `gosuri/gosuri.github.io` (Jekyll, master). Implement in the existing site — `_layouts/`, `_includes/`, `_sass/`, `predictions/*.md`.

## About the design files
The HTML files in this folder are **design references** built to show intended look and behavior. Do not ship them. Recreate them in the Jekyll site using its existing patterns: tokens in `_sass/_tokens.scss`, component rules in `_sass/_components.scss`, layouts in `_layouts/`. Fidelity is **high** — match colors, type, spacing, and states exactly; all values come from the locked tokens already in `_tokens.scss`.

## Overview
Three changes to the Predictions section:

1. **Every prediction becomes sharable.** Each entry gets a stable id and its own page (permalink), the date is the permalink, a `§` anchor appears on hover, and a "Copy link" action sits in the source line.
2. **Each prediction page gets a unique social preview image** (`og:image`, 1200×630) rendered from a template — quote-first.
3. **The date is more prominent** on entries: its own line above the title, accent color, small caps, tabular figures.

## Files in this bundle
- `prediction-card.html` — the entry anatomy (two entries, one `<hr>` between). Reference for `.prediction` styles and the copy-link script.
- `page-theme.html` — the theme page (`/predictions/<theme>/`) with the new entries in context.
- `page-prediction.html` — the single prediction page a shared link opens, with full `<head>` meta.
- `social-preview.html` — the 1200×630 og:image card.

---

## 1. Content model (breaking change to the markdown)

Today entries are positional kramdown output (`### date — title`, `_source_`, `> quote`, `**Context:**`, `---`). The new markup needs ids, permalinks, and structured fields, so move each prediction to a **Jekyll collection**:

```
_config.yml
collections:
  predictions:
    output: true
    permalink: /predictions/:theme/:slug/
```

One file per prediction, `_predictions/<theme-slug>/<YYYY-MM-DD>-<slug>.md`:

```yaml
---
theme: local-compute            # matches predictions/<theme>.md
theme_title: Local Compute
date: 2023-09-28
title: Every home will have a supercomputer
source: Building the Super Cloud of GPUs with Akash Founder Greg Osuri, Ep. 102 (Frictionless)
source_url: https://www.youtube.com/watch?v=GVrfHDg30-M&t=2596s
timestamp: "00:43:16"
quote: >
  I envision a world where every home will have a supercomputer… no doubt about it.
  As AI gets more penetration, we’re going to realize there are privacy implications for AI.
context: >
  Asked where Akash’s end state lands — regional GPU clusters or dispersed GPUs —
  Greg jumps past both to home supercomputers driven by AI privacy concerns.
---
```

- `slug` = filename without date, e.g. `home-supercomputer`. **Entry id** = `YYYY-MM-DD-slug` (`2023-09-28-home-supercomputer`), used for the `id` attribute and hash link on the theme page.
- Permalink: `/predictions/local-compute/2023-09-28-home-supercomputer/`.
- Write a one-off script to split the existing `predictions/*.md` (and `predictions/cloud-decentralization/*.md`) into collection files. Existing content is regular enough to parse: `### (\d{4}-\d{2}-\d{2}) — (.+)`, `_(.+)_`, `> "…"` + `> — [ts](url)`, `**Context:** …`.
- Theme pages (`predictions/<theme>.md`) keep their front matter and standfirst (`_34 statements · 2022–2026_`) but the body becomes a loop: `{% assign items = site.predictions | where: "theme", page.theme_slug | sort: "date" %}` rendering `_includes/prediction.html` per item with `<hr>` between.

## 2. Entry markup — `_includes/prediction.html`

Exactly this structure (no extra wrappers; classes are styled in `_components.scss`):

```html
<article class="prediction" id="{{ id }}">
  <p class="dateline">
    <a class="permalink" href="{{ url }}"><time datetime="{{ date | date: '%Y-%m-%d' }}">{{ date | date: '%-d %b %Y' }}</time></a>
    <a class="anchor" href="#{{ id }}" aria-label="Link to this prediction">§</a>
  </p>
  <h3><a href="{{ url }}">{{ title }}</a></h3>
  <p class="source"><em>{{ source }}</em><span class="share-wrap"><span class="sep">·</span><a class="share" href="{{ url }}" data-copy>Copy link</a></span></p>
  <blockquote><p>“{{ quote }}” — <a href="{{ source_url }}">{{ timestamp }}</a></p></blockquote>
  <p class="context"><strong>Context:</strong> {{ context }}</p>
</article>
```

Date display format: `10 Nov 2018`, `6 Aug 2019` (no leading zero). `datetime` attr stays ISO.

### Entry styles (replace the existing `.predictions h3 / h3 + p / blockquote / blockquote + p` block)

```scss
.predictions > p:first-child { color: var(--ink-soft); margin: 0 0 var(--s4); }
.prediction { scroll-margin-top: var(--s4); }

.dateline {
  display: flex; align-items: baseline; gap: var(--s2);
  margin: 0 0 var(--s1);
  font-size: var(--step-0); font-weight: 520;
  font-variant-numeric: tabular-nums; letter-spacing: .06em; text-transform: uppercase;
  color: var(--accent);
}
.dateline a.permalink {
  color: inherit; text-decoration: underline; text-decoration-color: transparent;
  text-decoration-thickness: 1px; text-underline-offset: .3em;
  transition: text-decoration-color .15s ease;
}
.dateline a.permalink:hover, .prediction:target .dateline a.permalink { text-decoration-color: var(--accent); }
.dateline a.anchor {
  color: var(--ink-soft); text-decoration: none;
  letter-spacing: 0; text-transform: none; font-weight: 400;
  opacity: 0; transition: opacity .15s ease, color .15s ease;
}
.prediction:hover .dateline a.anchor, .dateline a.anchor:focus-visible { opacity: 1; }
.dateline a.anchor:hover { color: var(--accent); }

.prediction h3 { font-size: var(--step-1); font-weight: 560; line-height: 1.3; letter-spacing: -0.008em; margin: 0 0 var(--s2); }
.prediction h3 a { text-decoration: none; transition: color .15s ease; }
.prediction h3 a:hover { color: var(--accent); }

.source { display: flex; flex-wrap: wrap; gap: 0 var(--s2); font-size: var(--step--1); color: var(--ink-soft); margin: 0 0 var(--s3); }
.share-wrap { white-space: nowrap; }          // “·” always travels with “Copy link”
.share-wrap .sep { margin-right: var(--s2); user-select: none; }
.source a.share {
  color: var(--ink-soft); font-style: normal;
  text-decoration: underline; text-decoration-color: var(--rule);
  text-decoration-thickness: 1px; text-underline-offset: .25em; white-space: nowrap;
  transition: color .15s ease, text-decoration-color .15s ease;
}
.source a.share:hover { color: var(--accent); text-decoration-color: var(--accent); }
.source a.share[data-copied] { color: var(--accent); text-decoration-color: transparent; }

.prediction blockquote { margin: var(--s3) 0; padding: 0; font-style: italic; line-height: 1.65; }
.prediction blockquote p { margin: 0 0 var(--s2); text-indent: -0.42ch; }
.prediction blockquote a { font-style: normal; font-size: var(--step--1); font-variant-numeric: tabular-nums; letter-spacing: .05em; color: var(--accent); text-decoration: none; white-space: nowrap; }
.prediction blockquote a:hover { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .25em; }

.context { font-size: var(--step--1); color: var(--ink-soft); margin: 0; }
.context strong { font-weight: 580; }
.context a { color: var(--accent); text-decoration: none; }
.context a:hover { text-decoration: underline; }

.predictions hr { border: 0; border-top: 1px solid var(--rule); width: var(--s5); margin: var(--s4) auto; }
```

### Copy-link behavior (one small script, load in `_includes/footer.html` or `default.html`)

```js
document.addEventListener('click', e => {
  const a = e.target.closest('a.share[data-copy]'); if (!a) return;
  e.preventDefault();
  const url = new URL(a.getAttribute('href'), location.href).href;
  const done = () => { a.textContent = 'Copied'; a.setAttribute('data-copied', '');
    setTimeout(() => { a.textContent = 'Copy link'; a.removeAttribute('data-copied'); }, 1600); };
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(done, () => { location.href = url; });
});
```
Copies the **absolute** URL. On failure (no clipboard API / insecure context) it navigates to the page instead. No-JS fallback: the link is a plain `<a>` to the page.

## 3. Single prediction page — `_layouts/prediction.html`

Uses `default` layout. Structure (see `page-prediction.html`):

```html
<p class="crumb"><a href="/predictions/{{ page.theme }}/">← {{ page.theme_title }}</a></p>
<article class="prediction-page">
  <p class="dateline"><time datetime="…">28 Sep 2023</time></p>
  <h1>{{ page.title }}</h1>
  <p class="source"><em>{{ page.source }}</em></p>
  <blockquote><p>“{{ quote }}” — <a href="{{ source_url }}">{{ timestamp }}</a></p></blockquote>
  <p class="context"><strong>Context:</strong> {{ context }}</p>
  <p class="share-row">
    <a class="share" href="{{ page.url }}" data-copy>Copy link</a>
    <a class="external" href="https://x.com/intent/post?text={{ share_text | url_encode }}&url={{ abs_url | url_encode }}">Post on X</a>
  </p>
</article>
<p class="post-nav"><a href="/predictions/{{ page.theme }}/#{{ id }}">See it among all {{ page.theme_title }} predictions →</a></p>
```

- `share_text` = `“{{ quote }}” — @gregosuri, {{ date }}`. If the quote is long, truncate to ~200 chars with `…` so the post fits with the URL.
- Styles (scoped `.prediction-page`): dateline as above but `margin: var(--s4) 0 var(--s2)`; `h1` = `.page-title` values (`--step-3`, weight 480, `-0.012em`, lh 1.15, `margin: 0 0 var(--s2)`); `.source` margin `0 0 var(--s4)`; **blockquote is one step larger**: `font-size: var(--step-1); font-weight: 360; line-height: 1.55; letter-spacing: -0.004em; margin: var(--s4) 0`.
- `.share-row`: `display:flex; flex-wrap:wrap; gap: var(--s3); margin: var(--s4) 0 0; padding-top: var(--s3); border-top: 1px solid var(--rule); font-size: var(--step--1); color: var(--ink-soft)`. Links same treatment as `.source a.share`. `.external::after` = `"↗"` (`\2197`), `font-size: .72em`, `margin-left: .3em`, `translateY(-.12em)` — same as the existing `.post-link.external`.
- `.post-nav` reuses the existing essay `.post-nav` rules.
- Header nav marks **Predictions** as `aria-current="page"`.

### Head meta (add to `_includes/head.html`, conditional on `page.collection == "predictions"`)

```html
<meta property="og:type" content="article">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:description" content="“{{ quote | truncate: 140 }}” — Greg Osuri, {{ date }}">
<meta property="og:url" content="{{ abs_url }}">
<meta property="og:image" content="{{ abs_url }}card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@gregosuri">
```
Also set `<meta name="description">` to the same og:description. The existing `<title>` pattern gives `Every home will have a supercomputer · Greg Osuri`.

## 4. Social preview image — `card.png` per prediction

Rendered from `social-preview.html`, output to `<permalink>/card.png` (1200×630 PNG). Generate at build time (`Makefile` step or GitHub Action) with Playwright/Puppeteer: render the template per prediction, screenshot the `.og` element. Cache by content hash so unchanged predictions don't re-render.

Layout (fixed pixels, never reflows):
- Canvas 1200×630, background `#faf8f4`, padding `72px 80px 64px`, `display:grid; grid-template-rows: auto 1fr auto`.
- 6px accent (`#9c4221`) bar across the very top.
- **Meta row**: `28 Sep 2023` + theme title. Newsreader 24px, weight 520, uppercase, letter-spacing `.08em`, tabular nums, accent color; theme in `#6e6759` weight 450; gap 20px.
- **Quote**: vertically centered in the middle row. Newsreader italic, weight 340, **44px** / line-height 1.3, letter-spacing `-0.008em`, `text-indent: -0.42ch` (hanging opening quote), clamp to **5 lines** (`-webkit-line-clamp: 5`), `text-wrap: pretty`. Size by quote length: ≤120 chars → 52px, ≤260 → 44px, longer → 38px.
- **Foot**: hairline `#e4ddd0` top border, `padding-top: 22px`, 24px `#6e6759`, `display:flex; justify-content:space-between; align-items:baseline`. Left `Greg Osuri` (`#211f1a`, weight 520), middle prediction title (italic, `max-width: 760px`, single-line ellipsis), right `gregosuri.com`.
- Fonts: self-hosted `assets/fonts/newsreader-latin-vf.woff2` + italic — make sure the renderer waits for `document.fonts.ready`.

## Design tokens (already in `_sass/_tokens.scss` — do not redefine)
`--paper #faf8f4` · `--ink #211f1a` · `--ink-soft #6e6759` · `--accent #9c4221` · `--rule #e4ddd0` · Newsreader variable (200–800, roman + italic) · type scale `--step--1 .8889rem`, `--step-0 1rem`, `--step-1 1.25rem`, `--step-3 1.9531rem` (root 112.5%) · spacing `--s1 .25rem`, `--s2 .5rem`, `--s3 1rem`, `--s4 2rem`, `--s5 4rem` · measure 65ch. No radii, no shadows.

## Acceptance checklist
- [ ] Every prediction has its own URL; theme pages link each entry's date and title to it.
- [ ] `#<id>` on a theme page scrolls to the entry with `scroll-margin-top` and shows the accent underline on the date (`:target`).
- [ ] `§` visible only on hover/focus; keyboard-focusable.
- [ ] "Copy link" copies the absolute URL, reads "Copied" for 1.6s, then reverts; falls back to navigation.
- [ ] "·" never wraps apart from "Copy link" on narrow screens (375px checked).
- [ ] Prediction page has og/twitter meta and a `card.png` that validates in the X card validator and Slack/iMessage previews.
- [ ] `feed.xml` unaffected (or extended to include predictions — optional).
- [ ] Theme standfirst counts (`_34 statements · 2022–2026_`) still correct after migration — compute from the collection instead of hardcoding.
