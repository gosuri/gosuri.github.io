# Handoff: Social preview images for the whole site

Target: `gosuri/gosuri.github.io` (Jekyll, master). Extends the existing per-prediction `card.png` pipeline (`research/render_cards.mjs`, og meta in `_includes/head.html`) to every page type.

## About the design files
The HTML files in this folder are **design references**. Do not ship them. `social-previews.html` shows all five cards side by side; the four `social-*.html` files are the individual 1200×630 templates. Fidelity is **high** — the values below are exact and all come from the locked tokens in `_sass/_tokens.scss`.

## Overview
Every URL on the site gets a 1200×630 og:image. One family, four templates:

| Page | Template | Output |
| --- | --- | --- |
| `/` and any page without its own card | `social-site.html` | `/assets/img/og/site.png` (static, rendered once) |
| `/predictions/` | `social-predictions.html` | `/assets/img/og/predictions.png` |
| `/predictions/<theme>/` | `social-theme.html` | `/predictions/<theme>/card.png` |
| `/predictions/<theme>/<id>/` | (existing) | `<permalink>card.png` — unchanged |
| `/<year>/<slug>/` (essays) | `social-post.html` | `/<permalink>card.png` |

## Shared shell (identical across all templates)
- Canvas 1200×630, background `#faf8f4`, padding `72px 80px 64px`, `display:grid; grid-template-rows:auto 1fr auto; overflow:hidden`.
- 6px accent bar `#9c4221` across the very top.
- **Meta row** (top): Newsreader 24px, weight 520, uppercase, letter-spacing `.08em`, tabular nums, accent color. Secondary token in `#6e6759` weight 450; gap 20px.
- **Body** (middle row): `align-self:center`; content differs per template.
- **Foot**: hairline `#e4ddd0` top border, `padding-top:22px`, Newsreader 24px `#6e6759`, `display:flex; justify-content:space-between; align-items:baseline`. First item (`.name`) is `#211f1a` weight 520.
- Fonts: self-hosted Newsreader variable (roman + italic). Renderer must await `document.fonts.ready`.

## 1. Site default — `social-site.html`
- Meta: `gregosuri.com`.
- Body: `h1` "Greg Osuri" 132px, line-height 1, letter-spacing `-0.02em`, weight 380. Below it the tagline (`site.description`: "I build things for people that build things.") 44px italic, weight 340, line-height 1.25, `#6e6759`, max-width 900px, margin-top 28px.
- Foot: left "Founder, Akash Network"; right "Writing · Predictions · Art".
- Static: render once, commit to `assets/img/og/site.png`.

## 2. Predictions index — `social-predictions.html`
- Meta: `Predictions` + soft `2015–2026` (compute min/max year from the collection).
- Body: the count, 168px, weight 300, line-height .95, letter-spacing `-0.03em`, tabular lining nums, followed inline by `dated claims about compute` at 56px italic weight 340, margin-left 20px, ink color. Below: 34px weight 380 `#6e6759`, max-width 980px, margin-top 26px: "From 240 talks and podcasts. Every one links to the exact moment it was said. Some were wrong."
- Count and source count come from `site.predictions | size` and the standfirst in `predictions/index.md` — do not hardcode.
- Foot: "Greg Osuri" · "gregosuri.com/predictions".

## 3. Theme page — `social-theme.html`
- Meta: `Predictions` + soft `Theme`.
- Body: `h1` = theme title, 104px, line-height 1, letter-spacing `-0.02em`, weight 380. Long titles ("Cloud Decentralization", 22 chars) fit at 104px on one line at 1040px wide; if a future title exceeds ~24 chars drop to 88px.
- Stat line: `{n} statements · {first}–{last}`, 34px, line-height 1.3, `#6e6759`, tabular nums, margin-top 26px. Same values as the theme standfirst.
- Latest: label `LATEST` (22px, weight 520, uppercase, letter-spacing `.06em`, accent, margin-right 12px, `vertical-align:2px`) followed by the newest prediction's **title**, 30px italic weight 340, line-height 1.35, max-width 1000px, clamp 2 lines. Margin-top 34px.
- Foot: "Greg Osuri" · "gregosuri.com/predictions/{theme_slug}".

## 4. Essay — `social-post.html`
- Meta: date `7 Oct 2019` (`%-d %b %Y`, ISO in `datetime`) + soft `Writing`.
- Body: `h1` = post title, weight 400, line-height 1.12, letter-spacing `-0.015em`, `text-wrap:balance`, clamp 3 lines. Size by title length: ≤40 chars → 84px, ≤75 → 68px, longer → 56px.
- Foot: "Greg Osuri" · middle (italic) · "gregosuri.com". Middle item: for external posts (front matter `link:` present) show `Published on {hostname}` with `www.` stripped (e.g. "Published on akash.network", "Published on hackernoon.com"); for on-site essays omit the middle span.

## 5. Head meta — `_includes/head.html`
Replace the predictions-only block with one that runs for every page:

```liquid
{%- capture abs_url %}{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}{% endcapture -%}
{%- if page.collection == "predictions" -%}
  {%- assign og_image = abs_url | append: "card.png" -%}
  {%- capture og_desc %}“{{ page.quote | normalize_whitespace | strip | truncate: 140 }}” — Greg Osuri, {{ page.date | date: '%-d %b %Y' }}{% endcapture -%}
{%- elsif page.layout == "post" -%}
  {%- assign og_image = abs_url | append: "card.png" -%}
{%- elsif page.theme_slug -%}
  {%- assign og_image = abs_url | append: "card.png" -%}
{%- elsif page.url == "/predictions/" -%}
  {%- assign og_image = "/assets/img/og/predictions.png" | prepend: site.baseurl | prepend: site.url -%}
{%- else -%}
  {%- assign og_image = "/assets/img/og/site.png" | prepend: site.baseurl | prepend: site.url -%}
{%- endif -%}
<meta property="og:type" content="{% if page.layout == 'post' or page.collection == 'predictions' %}article{% else %}website{% endif %}">
<meta property="og:site_name" content="{{ site.title | escape }}">
<meta property="og:title" content="{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}">
<meta property="og:description" content="{{ og_desc | default: page_description | escape }}">
<meta property="og:url" content="{{ abs_url }}">
<meta property="og:image" content="{{ og_image }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@gregosuri">
```
Theme pages titled "Local Compute — Predictions" should pass `page.theme` as og:title instead of `page.title`.

## 6. Rendering — extend `research/render_cards.mjs`
Same Playwright loop, fonts inlined as base64, screenshot `.og` at 1200×630, cache by content hash. Add three sources:
- **Themes**: iterate `predictions/*.md` (files with `theme_slug`), compute count / year range / latest title from `_predictions/<theme_slug>/`, write `_site/predictions/<theme_slug>/card.png`.
- **Posts**: iterate `_posts/*.md`, derive permalink the same way Jekyll does (`/:year/:month/:day/:title/` or whatever `_config.yml` sets — read it, don't guess), write `_site<permalink>card.png`. Hostname from `link:`.
- **Static**: `site.png`, `predictions.png` → `_site/assets/img/og/`.
Run after `jekyll build` in the Makefile / Action, before deploy.

## Design tokens (already in `_sass/_tokens.scss` — do not redefine)
`--paper #faf8f4` · `--ink #211f1a` · `--ink-soft #6e6759` · `--accent #9c4221` · `--rule #e4ddd0` · Newsreader variable (200–800, roman + italic). No radii, no shadows.

## Acceptance checklist
- [ ] Every page has og/twitter meta; `og:image` resolves to a 1200×630 PNG (check `/`, `/about/`, `/posts/`, `/predictions/`, one theme, one prediction, one essay).
- [ ] Theme cards: count, range, latest title match the rendered theme page.
- [ ] Essay cards: 40-, 75-, and 120-char titles render at 84/68/56px with no clipping; external hostname shown without `www.`.
- [ ] Predictions card count matches `site.predictions | size`.
- [ ] Unchanged pages don't re-render (hash cache); full render of ~1,700 cards stays under the Action's time budget.
- [ ] Cards validate in the X card validator and Slack/iMessage previews.
