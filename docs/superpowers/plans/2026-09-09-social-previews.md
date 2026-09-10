# Site-wide Social Preview Cards — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every URL on gregosuri.com a 1200×630 `og:image` rendered from the four templates in the social-previews handoff, extending the existing per-prediction card pipeline instead of replacing it.

**Architecture:** `research/render_cards.mjs` today is a single script that walks `_predictions/`, builds an HTML string, and screenshots it with Playwright. This plan splits the pure parts out into two dependency-free, unit-testable modules — `research/card_data.mjs` (front-matter parsing, permalink derivation, theme statistics) and `research/card_templates.mjs` (the shared 1200×630 shell plus one function per card type) — and leaves `render_cards.mjs` as the fs + Playwright driver that now emits five kinds of card. `_includes/head.html` gains a branch table that points every page at the right image.

**Tech Stack:** Jekyll 3.10 (GitHub Pages builder), Liquid, Node 20, Playwright 1.49.1, `node:test` (built in — no new dependencies).

**Spec:** `docs/design/2026-09-09-social-previews.md` (handoff). Design references: `design/social-site.html`, `design/social-predictions.html`, `design/social-theme.html`, `design/social-post.html`, `design/social-preview.html`, contact sheet `design/social-previews.html`.

## Global Constraints

- **No new runtime dependencies.** `research/package.json` stays at `{ "playwright": "1.49.1" }`. Tests use Node 20's built-in `node:test` and `node:assert/strict`.
- **Cards are never committed.** 1,689+ PNGs against a ~2 MB repo. Everything renders into `_site/` at build time, including the two "static" cards. This deviates from the handoff's "commit to `assets/img/og/site.png`" — see Task 3, Deviation note.
- **Design files are references, not shipping code.** Do not add `design/*.html` to the build. `_config.yml` already excludes `design` and `docs`.
- **Tokens are locked.** `--paper #faf8f4` · `--ink #211f1a` · `--ink-soft #6e6759` · `--accent #9c4221` · `--rule #e4ddd0` · Newsreader variable 200–800, roman + italic. No radii, no shadows. Do not redefine or approximate.
- **Every card is exactly 1200×630**, background `#faf8f4`, padding `72px 80px 64px`, `grid-template-rows:auto 1fr auto`, 6px `#9c4221` bar across the top.
- **The renderer must `await document.fonts.ready`** before every screenshot, or Newsreader falls back to Georgia and the metrics are wrong.
- **Verify against the real builder before pushing** anything touching `_data`, layouts, or `_config.yml`:
  ```
  docker run --rm -v "$PWD":/github/workspace -v /tmp/out:/out \
    -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
    -e INPUT_SOURCE=. -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true \
    ghcr.io/actions/jekyll-build-pages:v1.0.13
  ```
- **`site.url` is `https://www.gregosuri.com`.** All `og:` URLs are absolute against it.
- **Commit messages carry no model-attribution trailer.**

## Inventory (what actually exists, counted from the repo)

| Source | Count | Output |
| --- | --- | --- |
| `_predictions/**/*.md` | 1,689 | `<permalink>card.png` — existing, unchanged output |
| `predictions/*.md` with `theme_slug` | 10 | `_site/predictions/<slug>/card.png` |
| `predictions/cloud-decentralization/*.md` (year pages, have `theme_slug` **and** `year`) | 9 | `_site/predictions/cloud-decentralization/<year>/card.png` |
| `_posts/*.md` | 20 (9 with `link:`, 11 on-site) | `_site/<permalink>card.png` |
| static | 2 | `_site/assets/img/og/{site,predictions}.png` |

The 9 year pages are **not** in the handoff's table but they carry `theme_slug`, so the head.html branch in the spec advertises `card.png` for them. They must be rendered or those pages ship a 404 `og:image`. They use the theme template with the year as the soft meta label.

## File Structure

- **Create `research/card_data.mjs`** — pure derivations. No `fs`, no Playwright; every export takes text or plain objects. Owns: front-matter parsing, date formatting, theme statistics, post permalink derivation, external hostname, source count, sentence normalisation.
- **Create `research/card_templates.mjs`** — pure HTML. Owns the shared shell CSS, the `doc()` wrapper that inlines base64 fonts, the per-template size rules, and one function per card type. Imports `formatDate` from `card_data.mjs`.
- **Create `research/card_data.test.mjs`**, **`research/card_templates.test.mjs`** — `node --test`.
- **Modify `research/render_cards.mjs`** — becomes the driver only: read fonts, walk the four sources, screenshot. Keeps the `CARD_LIMIT` escape hatch.
- **Modify `_includes/head.html:25-37`** — replace the predictions-only og block with the site-wide branch table.
- **Modify `Makefile`** — add a `test` target; wire it into `cards`/`preview`.
- **Modify `.github/workflows/deploy.yml:36-53`** — widen the cache key, run tests, copy the static cards into the cache.
- **Modify `README.md`** — the social-cards section describes predictions only.

---

### Task 1: Extract the prediction card into pure, tested modules

No new cards yet. This is a refactor whose acceptance gate is that the rendered PNG does not change.

**Files:**
- Create: `research/card_data.mjs`
- Create: `research/card_templates.mjs`
- Create: `research/card_data.test.mjs`
- Create: `research/card_templates.test.mjs`
- Modify: `research/render_cards.mjs` (whole file)

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `card_data.mjs`: `parseFrontMatter(text) -> object|null`, `formatDate(iso: string) -> string` ("7 Oct 2019")
  - `card_templates.mjs`: `TOKENS: string`, `SHELL_CSS: string`, `esc(s) -> string`, `doc({css, body}, fonts) -> string`, `quoteSize(q) -> 52|44|38`, `predictionCard(fm, fonts) -> string`
  - `fonts` is `{ roman: string, italic: string }`, both base64 woff2.

- [ ] **Step 1: Capture the golden PNG before touching anything**

```bash
cd /Users/gosuri/code/gosuri.github.io
bundle exec jekyll build
CARD_LIMIT=3 node research/render_cards.mjs
find _site -name card.png | sort > /tmp/card-list.txt
rm -rf /tmp/card-golden
while read -r f; do mkdir -p "/tmp/card-golden/$(dirname "$f")"; cp "$f" "/tmp/card-golden/$f"; done < /tmp/card-list.txt
wc -l < /tmp/card-list.txt
```
Expected: `3`. If `_site` is missing or the render errors, fix that before continuing — the gate in Step 10 depends on these files. (`cp --parents` is GNU coreutils and is not on macOS, hence the explicit loop.)

- [ ] **Step 2: Write the failing tests for `card_data.mjs`**

Create `research/card_data.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontMatter, formatDate } from './card_data.mjs';

test('parseFrontMatter reads scalar keys and strips quotes', () => {
  const fm = parseFrontMatter('---\ntheme: ai-agents\ntitle: "Machines will schedule"\n---\nbody');
  assert.equal(fm.theme, 'ai-agents');
  assert.equal(fm.title, 'Machines will schedule');
});

test('parseFrontMatter reads block scalars', () => {
  const fm = parseFrontMatter('---\nquote: |\n  first line\n  second line\ntitle: x\n---\n');
  assert.equal(fm.quote, 'first line\nsecond line');
  assert.equal(fm.title, 'x');
});

test('parseFrontMatter returns null without front matter', () => {
  assert.equal(parseFrontMatter('no front matter here'), null);
});

test('formatDate renders day-month-year in UTC', () => {
  assert.equal(formatDate('2019-10-07'), '7 Oct 2019');
  assert.equal(formatDate('2022-11-03'), '3 Nov 2022');
});
```

- [ ] **Step 3: Run the tests to verify they fail**

Run: `node --test research/card_data.test.mjs`
Expected: FAIL — `Cannot find module '.../research/card_data.mjs'`.

- [ ] **Step 4: Write `research/card_data.mjs`**

`parseFrontMatter` and `formatDate` are lifted verbatim from the current `render_cards.mjs:11-30` — do not "improve" the parser, its quirks are load-bearing for 1,689 existing files.

```js
// Pure derivations for the social card renderer: no fs, no Playwright, so
// every export here is unit-testable with `node --test`. The front-matter
// parser is deliberately minimal — the collection is machine-generated, so it
// only ever has to handle scalars and `|` block scalars.

export function parseFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const out = {};
  let key = null;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+): (.*)$/);
    if (kv && kv[2] !== '|') { key = null; out[kv[1]] = kv[2].replace(/^"|"$/g, '').replace(/\\"/g, '"'); }
    else if (kv && kv[2] === '|') { key = kv[1]; out[key] = ''; }
    else if (key && line.startsWith('  ')) { out[key] += (out[key] ? '\n' : '') + line.slice(2); }
  }
  return out;
}

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `node --test research/card_data.test.mjs`
Expected: PASS, 4 tests.

- [ ] **Step 6: Write the failing tests for `card_templates.mjs`**

Create `research/card_templates.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { esc, doc, quoteSize, predictionCard } from './card_templates.mjs';

const FONTS = { roman: 'ROMAN64', italic: 'ITALIC64' };

test('esc escapes the three markup characters', () => {
  assert.equal(esc('a & b < c > d'), 'a &amp; b &lt; c &gt; d');
});

test('doc inlines both fonts as base64 and wraps the body in .og', () => {
  const out = doc({ body: '<p>hi</p>' }, FONTS);
  assert.match(out, /base64,ROMAN64/);
  assert.match(out, /base64,ITALIC64/);
  assert.match(out, /<div class="og"><p>hi<\/p><\/div>/);
  assert.match(out, /width:1200px;height:630px/);
});

test('quoteSize steps down with quote length', () => {
  assert.equal(quoteSize('x'.repeat(120)), 52);
  assert.equal(quoteSize('x'.repeat(121)), 44);
  assert.equal(quoteSize('x'.repeat(260)), 44);
  assert.equal(quoteSize('x'.repeat(261)), 38);
});

test('predictionCard puts date and theme in the meta row and the quote in a blockquote', () => {
  const html = predictionCard({
    date: '2022-11-03',
    theme_title: 'AI Agents',
    title: 'Machines will schedule other machines',
    quote: 'Tomorrow when you have machines,\nthey will schedule other machines.',
  }, FONTS);
  assert.match(html, /<time>3 Nov 2022<\/time>/);
  assert.match(html, /<span class="soft">AI Agents<\/span>/);
  assert.match(html, /they will schedule other machines\./);
  assert.doesNotMatch(html, /\n\s*they will/); // newlines collapsed to spaces
  assert.match(html, /Machines will schedule other machines/);
});
```

- [ ] **Step 7: Run the tests to verify they fail**

Run: `node --test research/card_templates.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 8: Write `research/card_templates.mjs`**

The shell CSS is copied from `design/social-site.html` (identical in all four new templates). The prediction card's own rules come from the current `render_cards.mjs:37-41`, re-scoped under `.og` and with the middle grid row renamed to the shared `.body` contract.

```js
// The 1200×630 card family. Every card is the same shell — accent rule,
// uppercase meta row, centred body, hairline footer — plus a per-template CSS
// block. Pixel type throughout: these render to PNG once and never reflow.
//
// Mirrors design/social-{site,predictions,theme,post,preview}.html. Change the
// design preview first, then mirror it here (see CLAUDE.md, "Design system sync").

import { formatDate } from './card_data.mjs';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const TOKENS = ':root{--paper:#faf8f4;--ink:#211f1a;--ink-soft:#6e6759;--accent:#9c4221;--rule:#e4ddd0;--font-serif:"Newsreader","Iowan Old Style",Georgia,serif}';

export const SHELL_CSS = `
*{box-sizing:border-box}
html,body{margin:0}
.og{width:1200px;height:630px;background:var(--paper);color:var(--ink);font-family:var(--font-serif);padding:72px 80px 64px;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;font-feature-settings:"kern"}
.og::before{content:"";position:absolute;left:0;top:0;right:0;height:6px;background:var(--accent)}
.og .meta{margin:0;display:flex;align-items:baseline;gap:20px;font-size:24px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:520;font-variant-numeric:tabular-nums}
.og .meta .soft{color:var(--ink-soft);font-weight:450}
.og .foot{margin:0;display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--rule);padding-top:22px;font-size:24px;color:var(--ink-soft)}
.og .foot .name{color:var(--ink);font-weight:520}
.og .body{align-self:center;margin:0}
`;

export function doc({ css = '', body }, fonts) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";font-style:normal;font-weight:200 800;src:url("data:font/woff2;base64,${fonts.roman}") format("woff2")}
@font-face{font-family:"Newsreader";font-style:italic;font-weight:200 800;src:url("data:font/woff2;base64,${fonts.italic}") format("woff2")}
${TOKENS}${SHELL_CSS}${css}
</style></head><body><div class="og">${body}</div></body></html>`;
}

export function quoteSize(q) {
  if (q.length <= 120) return 52;
  if (q.length <= 260) return 44;
  return 38;
}

export function predictionCard(fm, fonts) {
  const quote = String(fm.quote).replace(/\n/g, ' ').trim();
  return doc({
    css: `.og blockquote{font-style:italic;font-weight:340;font-size:${quoteSize(quote)}px;line-height:1.3;letter-spacing:-0.008em;text-indent:-0.42ch;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}
.og .foot .title{font-style:italic;max-width:760px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`,
    body: `<p class="meta"><time>${esc(formatDate(fm.date))}</time><span class="soft">${esc(fm.theme_title)}</span></p>
<blockquote class="body">“${esc(quote)}”</blockquote>
<p class="foot"><span class="name">Greg Osuri</span><span class="title">${esc(fm.title)}</span><span>gregosuri.com</span></p>`,
  }, fonts);
}
```

- [ ] **Step 9: Rewrite `research/render_cards.mjs` as a driver over the new modules**

Replace the whole file:

```js
// Renders the site's 1200x630 social cards into _site/. Reads the generated
// collection docs and page front matter, so it needs no Jekyll internals.
// Pure logic lives in card_data.mjs / card_templates.mjs; this file is the
// filesystem + Playwright driver.
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { chromium } from 'playwright';
import { parseFrontMatter } from './card_data.mjs';
import { predictionCard } from './card_templates.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const COLL = join(ROOT, '_predictions');
const SITE = join(ROOT, '_site');

const b64 = async p => (await readFile(p)).toString('base64');

async function collect(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await collect(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const fonts = {
  roman: await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf.woff2')),
  italic: await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf-italic.woff2')),
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

async function shoot(html, dest) {
  await mkdir(dirname(dest), { recursive: true });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.og').screenshot({ path: dest });
}

let files = await collect(COLL);
const LIMIT = process.env.CARD_LIMIT ? Number(process.env.CARD_LIMIT) : null;
if (LIMIT) files = files.slice(0, LIMIT);

let n = 0;
for (const f of files) {
  const fm = parseFrontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.permalink) continue;
  await shoot(predictionCard(fm, fonts), join(SITE, fm.permalink, 'card.png'));
  if (++n % 100 === 0) console.log(`predictions ${n}/${files.length}`);
}
console.log(`predictions: ${n}`);

await browser.close();
```

- [ ] **Step 10: Re-render the same three cards and diff the bytes**

```bash
cd /Users/gosuri/code/gosuri.github.io
CARD_LIMIT=3 node research/render_cards.mjs
while read -r f; do cmp "/tmp/card-golden/$f" "$f" && echo "same: $f"; done < /tmp/card-list.txt
```
Expected: three `same:` lines and exit 0.

If `cmp` reports a difference, the refactor changed rendering. Diff the HTML, don't eyeball the PNG: the two candidate causes are (a) `font-feature-settings:"kern"` on `.og`, which is new relative to the old prediction CSS — remove it from `SHELL_CSS` and re-test if so; (b) the `.body` class on `<blockquote>` replacing the old inline `align-self:center;margin:0` — confirm `.og .body` supplies both. Do not proceed to Task 2 until the bytes match.

- [ ] **Step 11: Commit**

```bash
git add research/card_data.mjs research/card_templates.mjs research/card_data.test.mjs research/card_templates.test.mjs research/render_cards.mjs
git commit -m "Split the card renderer into pure modules and a driver"
```

---

### Task 2: Post cards

**Files:**
- Modify: `research/card_data.mjs`
- Modify: `research/card_templates.mjs`
- Modify: `research/card_data.test.mjs`
- Modify: `research/card_templates.test.mjs`
- Modify: `research/render_cards.mjs`

**Interfaces:**
- Consumes: `doc`, `esc`, `formatDate`, `shoot` from Task 1.
- Produces:
  - `card_data.mjs`: `postPermalink(basename: string, fm: object) -> string|null`, `externalHost(link: string|undefined) -> string|null`
  - `card_templates.mjs`: `titleSize(t: string) -> 84|68|56`, `postCard({title, date, host}, fonts) -> string` where `date` is `YYYY-MM-DD` and `host` is a bare hostname or `null`.

- [ ] **Step 1: Write the failing data tests**

Append to `research/card_data.test.mjs` (and extend the import at the top to `{ parseFrontMatter, formatDate, postPermalink, externalHost }`):

```js
test('postPermalink mirrors Jekyll pretty permalinks', () => {
  assert.equal(
    postPermalink('2019-10-07-bootstrapping-a-free-market-by-borrowing-from-the-future.md', {}),
    '/2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/');
});

test('postPermalink prefers an explicit front-matter permalink', () => {
  assert.equal(postPermalink('2019-10-07-x.md', { permalink: '/essays/x/' }), '/essays/x/');
});

test('postPermalink refuses posts whose URL it cannot derive', () => {
  assert.equal(postPermalink('not-a-post.md', {}), null);
  assert.equal(postPermalink('2019-10-07-x.md', { categories: 'notes' }), null);
  assert.equal(postPermalink('2019-10-07-x.md', { slug: 'other' }), null);
});

test('externalHost strips the scheme and a leading www.', () => {
  assert.equal(externalHost('https://akash.network/blog/the-economics/'), 'akash.network');
  assert.equal(externalHost('https://www.airpair.com/devops/devops-tools'), 'airpair.com');
  assert.equal(externalHost(undefined), null);
});
```

- [ ] **Step 2: Run them and watch them fail**

Run: `node --test research/card_data.test.mjs`
Expected: FAIL — `postPermalink is not a function`.

- [ ] **Step 3: Add the two functions to `research/card_data.mjs`**

```js
// `permalink: pretty` in _config.yml expands to /:categories/:year/:month/:day/:title/.
// None of the current posts set categories, a slug, or their own permalink, so the
// filename is the whole URL — but bail loudly rather than guess if one ever does.
export function postPermalink(basename, fm = {}) {
  if (fm.permalink) return fm.permalink;
  if (fm.categories || fm.category || fm.slug) return null;
  const m = basename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.(md|markdown|html)$/);
  return m ? `/${m[1]}/${m[2]}/${m[3]}/${m[4]}/` : null;
}

export function externalHost(link) {
  if (!link) return null;
  return new URL(link).hostname.replace(/^www\./, '');
}
```

- [ ] **Step 4: Run them and watch them pass**

Run: `node --test research/card_data.test.mjs`
Expected: PASS.

- [ ] **Step 5: Write the failing template tests**

Append to `research/card_templates.test.mjs` (extend the import with `titleSize, postCard`):

```js
test('titleSize steps 84 / 68 / 56 at 40 and 75 characters', () => {
  assert.equal(titleSize('x'.repeat(40)), 84);
  assert.equal(titleSize('x'.repeat(41)), 68);
  assert.equal(titleSize('x'.repeat(75)), 68);
  assert.equal(titleSize('x'.repeat(76)), 56);
});

test('postCard credits the external host and dates the meta row', () => {
  const html = postCard({
    title: 'Bootstrapping a Free Market by Borrowing from the Future',
    date: '2019-10-07',
    host: 'akash.network',
  }, FONTS);
  assert.match(html, /<time datetime="2019-10-07">7 Oct 2019<\/time>/);
  assert.match(html, /<span class="soft">Writing<\/span>/);
  assert.match(html, /Published on akash\.network/);
  assert.match(html, /font-size:68px/);
});

test('postCard omits the middle footer slot for on-site essays', () => {
  const html = postCard({ title: 'Here\'s to the crazy ones', date: '2011-10-05', host: null }, FONTS);
  assert.doesNotMatch(html, /Published on/);
  assert.match(html, /font-size:84px/);
});
```

- [ ] **Step 6: Run them and watch them fail**

Run: `node --test research/card_templates.test.mjs`
Expected: FAIL — `titleSize is not a function`.

- [ ] **Step 7: Add `titleSize` and `postCard` to `research/card_templates.mjs`**

```js
export function titleSize(t) {
  if (t.length <= 40) return 84;
  if (t.length <= 75) return 68;
  return 56;
}

export function postCard({ title, date, host }, fonts) {
  const middle = host ? `<span class="title">Published on ${esc(host)}</span>` : '';
  return doc({
    css: `.og h1{margin:0;font-size:${titleSize(title)}px;line-height:1.12;letter-spacing:-0.015em;font-weight:400;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-wrap:balance}
.og .foot .title{font-style:italic}`,
    body: `<p class="meta"><time datetime="${esc(date)}">${esc(formatDate(date))}</time><span class="soft">Writing</span></p>
<div class="body"><h1>${esc(title)}</h1></div>
<p class="foot"><span class="name">Greg Osuri</span>${middle}<span>gregosuri.com</span></p>`,
  }, fonts);
}
```

- [ ] **Step 8: Run them and watch them pass**

Run: `node --test research/card_templates.test.mjs`
Expected: PASS.

- [ ] **Step 9: Render post cards from the driver**

In `research/render_cards.mjs`, extend the imports:

```js
import { parseFrontMatter, postPermalink, externalHost } from './card_data.mjs';
import { predictionCard, postCard } from './card_templates.mjs';
```

Add `const POSTS = join(ROOT, '_posts');` beside the other path constants, and insert this block after the predictions loop and before `await browser.close();`:

```js
let posts = 0;
for (const name of (await readdir(POSTS)).sort()) {
  if (!name.endsWith('.md') && !name.endsWith('.markdown')) continue;
  const fm = parseFrontMatter(await readFile(join(POSTS, name), 'utf8'));
  if (!fm) continue;
  const url = postPermalink(name, fm);
  if (!url) { console.warn(`skipped post (cannot derive permalink): ${name}`); continue; }
  await shoot(postCard({
    title: fm.title.trim(),
    date: name.slice(0, 10),
    host: externalHost(fm.link),
  }, fonts), join(SITE, url, 'card.png'));
  posts++;
}
console.log(`posts: ${posts}`);
```

`fm.title.trim()` matters: `_posts/2018-04-09-assembly-testimony.md` has a trailing space in its title.

- [ ] **Step 10: Render just the post cards and look at three of them**

```bash
cd /Users/gosuri/code/gosuri.github.io
bundle exec jekyll build
CARD_LIMIT=1 node research/render_cards.mjs
open _site/2011/10/05/heres-to-the-crazy-ones/card.png \
     _site/2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/card.png \
     _site/2018/04/09/assembly-testimony/card.png
```
Expected: 20 post cards written (`posts: 20` in the output). The three opened are the 40-, 75- and 120-character cases: "Here's to the crazy ones" at 84px with no middle footer slot; the Bootstrapping title at 68px with "Published on akash.network"; the assembly-testimony title at 56px, clamped to 3 lines, no clipped descender on the last line, "Published on hackernoon.com".

- [ ] **Step 11: Commit**

```bash
git add research/card_data.mjs research/card_templates.mjs research/card_data.test.mjs research/card_templates.test.mjs research/render_cards.mjs
git commit -m "Render a social card per essay"
```

---

### Task 3: The two static cards — site default and predictions index

**Files:**
- Modify: `research/card_data.mjs`
- Modify: `research/card_templates.mjs`
- Modify: `research/card_data.test.mjs`
- Modify: `research/card_templates.test.mjs`
- Modify: `research/render_cards.mjs`

**Deviation from the spec:** the handoff says render `site.png` once and commit it. This plan renders both static cards in CI like every other card. Reason: the repo's stated rule is that generated cards are never committed (`CLAUDE.md`, "Social preview cards"), and a committed binary would silently drift from `social-site.html` and from `site.description`. Cost is two extra screenshots on a run that already does 1,718.

**Interfaces:**
- Consumes: `doc`, `esc`, `parseFrontMatter` from Tasks 1–2.
- Produces:
  - `card_data.mjs`: `sourceCount(indexMd: string) -> string|null`, `sentence(s: string) -> string`, `configDescription(configYml: string) -> string|null`
  - `card_templates.mjs`: `siteCard({tagline}, fonts) -> string`, `predictionsCard({count, firstYear, lastYear, sources}, fonts) -> string` (all four fields pre-formatted strings, e.g. `count: '1,689'`)

- [ ] **Step 1: Write the failing data tests**

Append to `research/card_data.test.mjs` (extend the import with `sourceCount, sentence, configDescription`):

```js
test('sourceCount reads the talk count out of the predictions standfirst', () => {
  const md = '_1,689 statements from 240 videos and podcasts, 2015–2026._\n';
  assert.equal(sourceCount(md), '240');
  assert.equal(sourceCount('no standfirst here'), null);
});

test('sentence adds a full stop only when one is missing', () => {
  assert.equal(sentence('I build things for people that build things'),
    'I build things for people that build things.');
  assert.equal(sentence('Already punctuated.'), 'Already punctuated.');
});

test('configDescription reads the folded block from _config.yml', () => {
  const yml = 'title: Greg Osuri\ndescription: > # ignore newlines\n  I build things for people\n  that build things\nbaseurl: ""\n';
  assert.equal(configDescription(yml), 'I build things for people that build things');
});
```

- [ ] **Step 2: Run them and watch them fail**

Run: `node --test research/card_data.test.mjs`
Expected: FAIL — `sourceCount is not a function`.

- [ ] **Step 3: Add the three functions to `research/card_data.mjs`**

```js
// "_1,689 statements from 240 videos and podcasts, 2015–2026._" — the source
// count is prose in predictions/index.md, so read it rather than hardcode it.
export function sourceCount(indexMd) {
  const m = indexMd.match(/from\s+([\d,]+)\s+videos and podcasts/i);
  return m ? m[1] : null;
}

export function sentence(s) {
  const t = s.trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

// site.description is a folded (`>`) block; the parser in parseFrontMatter only
// handles `|`, and pulling in a YAML dependency for one field is not worth it.
export function configDescription(configYml) {
  const m = configYml.match(/^description: >[^\n]*\n((?:[ \t]+\S.*\n)+)/m);
  return m ? m[1].trim().replace(/\s+/g, ' ') : null;
}
```

- [ ] **Step 4: Run them and watch them pass**

Run: `node --test research/card_data.test.mjs`
Expected: PASS.

- [ ] **Step 5: Write the failing template tests**

Append to `research/card_templates.test.mjs` (extend the import with `siteCard, predictionsCard`):

```js
test('siteCard is the name over the tagline', () => {
  const html = siteCard({ tagline: 'I build things for people that build things.' }, FONTS);
  assert.match(html, /<p class="meta">gregosuri\.com<\/p>/);
  assert.match(html, /<h1>Greg Osuri<\/h1>/);
  assert.match(html, /I build things for people that build things\./);
  assert.match(html, /font-size:132px/);
  assert.match(html, /Founder, Akash Network/);
  assert.match(html, /Writing · Predictions · Art/);
});

test('predictionsCard leads with the count and carries the year range in the meta row', () => {
  const html = predictionsCard(
    { count: '1,689', firstYear: '2015', lastYear: '2026', sources: '240' }, FONTS);
  assert.match(html, /<span class="soft">2015–2026<\/span>/);
  assert.match(html, /<p class="num">1,689<small>dated claims about compute<\/small><\/p>/);
  assert.match(html, /From 240 talks and podcasts\./);
  assert.match(html, /font-size:168px/);
  assert.match(html, /gregosuri\.com\/predictions/);
});
```

- [ ] **Step 6: Run them and watch them fail**

Run: `node --test research/card_templates.test.mjs`
Expected: FAIL — `siteCard is not a function`.

- [ ] **Step 7: Add both templates to `research/card_templates.mjs`**

```js
export function siteCard({ tagline }, fonts) {
  return doc({
    css: `.og h1{margin:0;font-size:132px;line-height:1;letter-spacing:-0.02em;font-weight:380}
.og .tag{margin:28px 0 0;font-size:44px;line-height:1.25;font-style:italic;font-weight:340;color:var(--ink-soft);max-width:900px;text-wrap:pretty}`,
    body: `<p class="meta">gregosuri.com</p>
<div class="body"><h1>Greg Osuri</h1><p class="tag">${esc(tagline)}</p></div>
<p class="foot"><span class="name">Founder, Akash Network</span><span>Writing · Predictions · Art</span></p>`,
  }, fonts);
}

export function predictionsCard({ count, firstYear, lastYear, sources }, fonts) {
  return doc({
    css: `.og .num{margin:0;font-size:168px;line-height:.95;letter-spacing:-0.03em;font-weight:300;font-variant-numeric:tabular-nums lining-nums}
.og .num small{font-size:56px;font-weight:340;font-style:italic;letter-spacing:-0.01em;margin-left:20px;color:var(--ink)}
.og .sub{margin:26px 0 0;font-size:34px;line-height:1.3;font-weight:380;color:var(--ink-soft);max-width:980px;text-wrap:pretty}`,
    body: `<p class="meta">Predictions<span class="soft">${esc(firstYear)}–${esc(lastYear)}</span></p>
<div class="body"><p class="num">${esc(count)}<small>dated claims about compute</small></p>
<p class="sub">From ${esc(sources)} talks and podcasts. Every one links to the exact moment it was said. Some were wrong.</p></div>
<p class="foot"><span class="name">Greg Osuri</span><span>gregosuri.com/predictions</span></p>`,
  }, fonts);
}
```

- [ ] **Step 8: Render both from the driver**

This needs the parsed prediction front matter, so restructure the predictions loop to keep what it parsed. In `research/render_cards.mjs`, extend the imports:

```js
import { parseFrontMatter, postPermalink, externalHost, sourceCount, sentence, configDescription } from './card_data.mjs';
import { predictionCard, postCard, siteCard, predictionsCard } from './card_templates.mjs';
```

Change the predictions loop to collect as it goes:

```js
const all = [];
let n = 0;
for (const f of files) {
  const fm = parseFrontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.permalink) continue;
  all.push(fm);
  await shoot(predictionCard(fm, fonts), join(SITE, fm.permalink, 'card.png'));
  if (++n % 100 === 0) console.log(`predictions ${n}/${files.length}`);
}
console.log(`predictions: ${n}`);
```

Then add this block before `await browser.close();`:

```js
const years = all.map(fm => String(fm.date).slice(0, 4)).sort();
const indexMd = await readFile(join(ROOT, 'predictions/index.md'), 'utf8');
const configYml = await readFile(join(ROOT, '_config.yml'), 'utf8');

await shoot(siteCard({ tagline: sentence(configDescription(configYml)) }, fonts),
  join(SITE, 'assets/img/og/site.png'));
await shoot(predictionsCard({
  count: all.length.toLocaleString('en-US'),
  firstYear: years[0],
  lastYear: years[years.length - 1],
  sources: sourceCount(indexMd),
}, fonts), join(SITE, 'assets/img/og/predictions.png'));
console.log('static: 2');
```

The static cards read `all`, so they are only correct on a full run. Note in the console output that `CARD_LIMIT` skews them — add `if (LIMIT) console.warn('CARD_LIMIT set: static card counts are not real');` next to the block.

- [ ] **Step 9: Render and check both**

```bash
cd /Users/gosuri/code/gosuri.github.io
bundle exec jekyll build && node research/render_cards.mjs
open _site/assets/img/og/site.png _site/assets/img/og/predictions.png
```
Expected: `predictions: 1689`, `posts: 20`, `static: 2`. The site card reads "Greg Osuri" over "I build things for people that build things." The predictions card reads "1,689 dated claims about compute", meta row "PREDICTIONS 2015–2026", sub line "From 240 talks and podcasts…". Both compare cleanly against `design/social-site.html` and `design/social-predictions.html` opened in a browser.

- [ ] **Step 10: Commit**

```bash
git add research/card_data.mjs research/card_templates.mjs research/card_data.test.mjs research/card_templates.test.mjs research/render_cards.mjs
git commit -m "Render the site and predictions-index social cards"
```

---

### Task 4: Theme cards, including the year sub-pages

**Files:**
- Modify: `research/card_data.mjs`
- Modify: `research/card_templates.mjs`
- Modify: `research/card_data.test.mjs`
- Modify: `research/card_templates.test.mjs`
- Modify: `research/render_cards.mjs`

**Interfaces:**
- Consumes: `all` (the array of parsed prediction front matter) from Task 3, `doc`/`esc` from Task 1.
- Produces:
  - `card_data.mjs`: `themeStats(items: object[]) -> {count: number, firstYear: string, lastYear: string, latestTitle: string}`
  - `card_templates.mjs`: `themeTitleSize(t: string) -> 104|88`, `themeCard({title, soft, count, firstYear, lastYear, latestTitle, url}, fonts) -> string`

- [ ] **Step 1: Write the failing data test**

Append to `research/card_data.test.mjs` (extend the import with `themeStats`):

```js
test('themeStats counts, ranges, and takes the newest title', () => {
  const items = [
    { date: '2020-01-02', slug_id: '2020-01-02-b', title: 'Middle' },
    { date: '2018-05-05', slug_id: '2018-05-05-a', title: 'Oldest' },
    { date: '2026-07-29', slug_id: '2026-07-29-c', title: 'Newest' },
  ];
  assert.deepEqual(themeStats(items), {
    count: 3, firstYear: '2018', lastYear: '2026', latestTitle: 'Newest',
  });
});

test('themeStats survives an empty theme', () => {
  assert.deepEqual(themeStats([]), {
    count: 0, firstYear: '', lastYear: '', latestTitle: '',
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `node --test research/card_data.test.mjs`
Expected: FAIL — `themeStats is not a function`.

- [ ] **Step 3: Add `themeStats` to `research/card_data.mjs`**

```js
// Same numbers the theme standfirst quotes: "159 statements · 2018–2026", and
// the newest entry's title. Theme pages sort by slug_id, which is date-first.
export function themeStats(items) {
  if (!items.length) return { count: 0, firstYear: '', lastYear: '', latestTitle: '' };
  const years = items.map(i => String(i.date).slice(0, 4)).sort();
  const newest = [...items].sort((a, b) => (a.slug_id < b.slug_id ? -1 : a.slug_id > b.slug_id ? 1 : 0)).at(-1);
  return {
    count: items.length,
    firstYear: years[0],
    lastYear: years.at(-1),
    latestTitle: newest.title,
  };
}
```

- [ ] **Step 4: Run it and watch it pass**

Run: `node --test research/card_data.test.mjs`
Expected: PASS.

- [ ] **Step 5: Write the failing template tests**

Append to `research/card_templates.test.mjs` (extend the import with `themeTitleSize, themeCard`):

```js
test('themeTitleSize drops to 88px past 24 characters', () => {
  assert.equal(themeTitleSize('Cloud Decentralization'), 104); // 22 chars
  assert.equal(themeTitleSize('x'.repeat(24)), 104);
  assert.equal(themeTitleSize('x'.repeat(25)), 88);
});

test('themeCard carries the stat line, the latest title, and a slash-free footer URL', () => {
  const html = themeCard({
    title: 'Local Compute',
    soft: 'Theme',
    count: 159,
    firstYear: '2018',
    lastYear: '2026',
    latestTitle: 'Homes are the least understood compute resource',
    url: '/predictions/local-compute/',
  }, FONTS);
  assert.match(html, /<span class="soft">Theme<\/span>/);
  assert.match(html, /<h1>Local Compute<\/h1>/);
  assert.match(html, /<p class="stat">159 statements · 2018–2026<\/p>/);
  assert.match(html, /<b>Latest<\/b>Homes are the least understood compute resource/);
  assert.match(html, /<span>gregosuri\.com\/predictions\/local-compute<\/span>/);
  assert.match(html, /font-size:104px/);
});

test('themeCard labels a year sub-page with its year', () => {
  const html = themeCard({
    title: 'Cloud Decentralization', soft: '2018', count: 31,
    firstYear: '2018', lastYear: '2018', latestTitle: 'Something',
    url: '/predictions/cloud-decentralization/2018/',
  }, FONTS);
  assert.match(html, /<span class="soft">2018<\/span>/);
  assert.match(html, /31 statements · 2018–2018/);
  assert.match(html, /gregosuri\.com\/predictions\/cloud-decentralization\/2018/);
});
```

- [ ] **Step 6: Run them and watch them fail**

Run: `node --test research/card_templates.test.mjs`
Expected: FAIL — `themeTitleSize is not a function`.

- [ ] **Step 7: Add both to `research/card_templates.mjs`**

```js
// "Cloud Decentralization" (22 chars) is the longest theme today and fits on one
// line at 104px in the 1040px body. Anything longer steps down.
export function themeTitleSize(t) {
  return t.length <= 24 ? 104 : 88;
}

export function themeCard({ title, soft, count, firstYear, lastYear, latestTitle, url }, fonts) {
  return doc({
    css: `.og h1{margin:0;font-size:${themeTitleSize(title)}px;line-height:1;letter-spacing:-0.02em;font-weight:380}
.og .stat{margin:26px 0 0;font-size:34px;line-height:1.3;color:var(--ink-soft);font-variant-numeric:tabular-nums}
.og .latest{margin:34px 0 0;font-size:30px;line-height:1.35;font-style:italic;font-weight:340;max-width:1000px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-wrap:pretty}
.og .latest b{font-style:normal;font-weight:520;color:var(--accent);letter-spacing:.06em;text-transform:uppercase;font-size:22px;margin-right:12px;vertical-align:2px}`,
    body: `<p class="meta">Predictions<span class="soft">${esc(soft)}</span></p>
<div class="body"><h1>${esc(title)}</h1>
<p class="stat">${esc(count)} statements · ${esc(firstYear)}–${esc(lastYear)}</p>
<p class="latest"><b>Latest</b>${esc(latestTitle)}</p></div>
<p class="foot"><span class="name">Greg Osuri</span><span>gregosuri.com${esc(url).replace(/\/$/, '')}</span></p>`,
  }, fonts);
}
```

- [ ] **Step 8: Render theme cards from the driver**

Extend the imports in `research/render_cards.mjs` with `themeStats` and `themeCard`, add `const PAGES = join(ROOT, 'predictions');` beside the other path constants, and insert this block after the static-card block:

```js
// Theme pages (predictions/<slug>.md) and their year sub-pages
// (predictions/<slug>/<year>.md) both carry theme_slug, and head.html
// advertises card.png for anything that does — so both get rendered.
let themes = 0;
for (const f of await collect(PAGES)) {
  const fm = parseFrontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.theme_slug || !fm.permalink) continue;
  const items = all.filter(p => p.theme === fm.theme_slug && (!fm.year || p.year === fm.year));
  const stats = themeStats(items);
  await shoot(themeCard({
    title: fm.theme,
    soft: fm.year || 'Theme',
    url: fm.permalink,
    ...stats,
  }, fonts), join(SITE, fm.permalink, 'card.png'));
  themes++;
}
console.log(`themes: ${themes}`);
```

`collect()` already recurses, so it picks up `predictions/cloud-decentralization/*.md` as well as `predictions/*.md`, and skips `index.md` (no `theme_slug`).

- [ ] **Step 9: Render and check three themes against their pages**

```bash
cd /Users/gosuri/code/gosuri.github.io
bundle exec jekyll build && node research/render_cards.mjs
open _site/predictions/local-compute/card.png \
     _site/predictions/cloud-decentralization/card.png \
     _site/predictions/cloud-decentralization/2018/card.png
grep -h '^_' predictions/local-compute.md predictions/cloud-decentralization.md predictions/cloud-decentralization/2018.md
```
Expected: `themes: 19`. Each card's stat line matches the standfirst printed by the `grep` — "159 statements · 2018–2026", "461 statements · 2018–2026", "31 statements · 2018–2018". "Cloud Decentralization" sits on one line at 104px. The `LATEST` title on each matches the newest entry on the corresponding page.

If a count disagrees, the standfirst in the markdown is stale rather than the card being wrong — the standfirst is hand-written, the card is computed. Confirm against `ls _predictions/<slug> | wc -l` and fix the markdown, not the renderer.

- [ ] **Step 10: Commit**

```bash
git add research/card_data.mjs research/card_templates.mjs research/card_data.test.mjs research/card_templates.test.mjs research/render_cards.mjs
git commit -m "Render a social card per prediction theme and year page"
```

---

### Task 5: Point every page at its card in `_includes/head.html`

**Files:**
- Modify: `_includes/head.html:25-37`

**Interfaces:**
- Consumes: the output paths established in Tasks 2–4.
- Produces: `og:image` URLs the renderer must satisfy. Any branch added here without a matching renderer source ships a 404.

- [ ] **Step 1: Replace the predictions-only block**

Swap lines 25–37 of `_includes/head.html` (the `{%- if page.collection == "predictions" %}` block, up to and including `{%- endif %}`) for:

```liquid
  {%- comment -%}Every page advertises a 1200×630 card. Predictions, essays and
  theme pages get one rendered per-URL at <permalink>card.png by
  research/render_cards.mjs; everything else falls back to a static card. Adding
  a branch here without a matching source in the renderer ships a 404 og:image.
  {%- endcomment -%}
  {%- capture abs_url %}{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}{% endcapture -%}
  {%- assign og_title = page.title -%}
  {%- if page.collection == "predictions" -%}
    {%- assign og_image = abs_url | append: "card.png" -%}
    {%- capture og_desc %}“{{ page.quote | normalize_whitespace | strip | truncate: 140 }}” — Greg Osuri, {{ page.date | date: '%-d %b %Y' }}{% endcapture -%}
  {%- elsif page.layout == "post" -%}
    {%- assign og_image = abs_url | append: "card.png" -%}
  {%- elsif page.theme_slug -%}
    {%- assign og_image = abs_url | append: "card.png" -%}
    {%- capture og_title %}{{ page.theme }}{% if page.year %} — {{ page.year }}{% endif %}{% endcapture -%}
    {%- assign og_title = og_title | strip -%}
  {%- elsif page.url == "/predictions/" -%}
    {%- assign og_image = "/assets/img/og/predictions.png" | prepend: site.baseurl | prepend: site.url -%}
  {%- else -%}
    {%- assign og_image = "/assets/img/og/site.png" | prepend: site.baseurl | prepend: site.url -%}
  {%- endif -%}
  {%- if og_title == blank -%}{%- assign og_title = site.title -%}{%- endif -%}
  <meta property="og:type" content="{% if page.layout == 'post' or page.collection == 'predictions' %}article{% else %}website{% endif %}">
  <meta property="og:site_name" content="{{ site.title | escape }}">
  <meta property="og:title" content="{{ og_title | escape }}">
  <meta property="og:description" content="{{ og_desc | default: page_description | escape }}">
  <meta property="og:url" content="{{ abs_url }}">
  <meta property="og:image" content="{{ og_image }}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@gregosuri">
```

Branch order is load-bearing: `predictions/index.md` has no `theme_slug`, so it must be tested after the theme branch; theme pages have `theme_slug` and must be tested before the catch-all.

- [ ] **Step 2: Build and check every page shape**

```bash
cd /Users/gosuri/code/gosuri.github.io
bundle exec jekyll build
for p in index.html about/index.html posts/index.html predictions/index.html \
         predictions/local-compute/index.html \
         predictions/cloud-decentralization/2018/index.html \
         2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/index.html; do
  echo "== $p"
  grep -o 'property="og:\(image\|title\|type\)" content="[^"]*"' "_site/$p"
done
```
Expected, in order: `/` and `/about/` and `/posts/` → `…/assets/img/og/site.png`, type `website`; `/predictions/` → `…/assets/img/og/predictions.png`, type `website`; `/predictions/local-compute/` → `…/predictions/local-compute/card.png`, title `Local Compute` (not "Local Compute — Predictions"), type `website`; the 2018 year page → `…/2018/card.png`, title `Cloud Decentralization — 2018`; the essay → `…/bootstrapping-…/card.png`, type `article`.

- [ ] **Step 3: Confirm a prediction page is unchanged**

```bash
grep -o 'property="og:[a-z:]*" content="[^"]*"' \
  _site/predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4/index.html
```
Expected: `og:type article`, `og:image` ending `…-rya4/card.png`, and `og:description` still the truncated quote with the em-dash attribution. The description is the one thing this branch must not regress.

- [ ] **Step 4: Verify against the real GitHub Pages builder**

```bash
cd /Users/gosuri/code/gosuri.github.io
docker run --rm -v "$PWD":/github/workspace -v /tmp/out:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e INPUT_SOURCE=. -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
grep -o 'og:image" content="[^"]*"' /tmp/out/index.html /tmp/out/predictions/local-compute/index.html
```
Expected: the container exits 0, and both greps show the same URLs as Step 2. Jekyll 3.10 is the builder that actually ships; a Liquid construct that works locally under Jekyll 4 and not here is the exact failure this guards against.

- [ ] **Step 5: Commit**

```bash
git add _includes/head.html
git commit -m "Advertise a social card on every page"
```

---

### Task 6: Wire tests and the new outputs into the Makefile and the Action

**Files:**
- Modify: `Makefile`
- Modify: `.github/workflows/deploy.yml:36-53`
- Modify: `README.md`

**Interfaces:**
- Consumes: the test files from Tasks 1–4 and the `_site/assets/img/og/*.png` outputs from Task 3.
- Produces: nothing other code depends on.

- [ ] **Step 1: Add a `test` target to the Makefile**

Insert above the `cards:` target:

```make
# Unit tests for the card renderer's pure modules. Node 20's built-in runner,
# no dependencies — the Playwright driver itself is covered by `make preview`.
test:
	node --test research/card_data.test.mjs research/card_templates.test.mjs
```

Add `test` to the `.PHONY` line, and make `cards` depend on it:

```make
cards: test
	cd research && npm install --silent && npx playwright install chromium
	node research/render_cards.mjs
```

Also add `--host 0.0.0.0` to the `server` and `preview` targets' `jekyll server` invocations so the dev server is reachable from other devices on the LAN, and echo the LAN URL:

```make
server:
	@printf 'Listening on:\n  http://localhost:4000\n  http://%s:4000  (LAN)\n' "$$(ipconfig getifaddr en0 || ipconfig getifaddr en1)"
	bundle exec jekyll server --host 0.0.0.0
```
and the same two changes on `preview`'s `jekyll server --skip-initial-build --no-watch` line.

- [ ] **Step 2: Run it**

Run: `make test`
Expected: PASS, all tests from Tasks 1–4, exit 0.

- [ ] **Step 3: Widen the CI cache key and copy the static cards**

In `.github/workflows/deploy.yml`, replace the cache key with one that covers every input to a card:

```yaml
      - name: Cache rendered cards
        id: cards
        uses: actions/cache@v4
        with:
          path: .card-cache
          key: cards-${{ hashFiles('PREDICTIONS.md', '_predictions/**', '_posts/**', 'predictions/**', '_config.yml', 'research/render_cards.mjs', 'research/card_data.mjs', 'research/card_templates.mjs') }}
```

then add an always-run test step (the cache key does not cover the test files, so a test-only edit must not be able to skip them) and replace the render step so it captures the static cards as well as the per-page ones:

```yaml
      - name: Test the card modules
        run: node --test research/card_data.test.mjs research/card_templates.test.mjs

      - name: Render social cards
        if: steps.cards.outputs.cache-hit != 'true'
        run: |
          cd research && npm install && npx playwright install --with-deps chromium
          cd .. && node research/render_cards.mjs
          mkdir -p .card-cache
          cd _site && find . \( -name card.png -o -path './assets/img/og/*.png' \) \
            -exec cp --parents {} ../.card-cache/ \;
```

The `restore` step (`cp -R .card-cache/. _site/`) already handles both, since it copies the whole tree.

- [ ] **Step 4: Sanity-check the workflow file parses**

Run: `python3 -c "import yaml,sys; yaml.safe_load(open('.github/workflows/deploy.yml')); print('ok')"`
Expected: `ok`.

- [ ] **Step 5: Reproduce the cache round-trip locally**

```bash
cd /Users/gosuri/code/gosuri.github.io
rm -rf /tmp/card-cache && mkdir -p /tmp/card-cache
(cd _site && find . \( -name card.png -o -path './assets/img/og/*.png' \) -exec cp -p --parents {} /tmp/card-cache/ \; 2>/dev/null \
  || (cd _site && find . \( -name card.png -o -path './assets/img/og/*.png' \) | cpio -pdm /tmp/card-cache))
find /tmp/card-cache -name '*.png' | wc -l
find /tmp/card-cache/assets/img/og -name '*.png'
```
Expected: 1,730 PNGs (1,689 predictions + 20 posts + 19 themes + 2 static), and both static cards listed. Note `cp --parents` is GNU coreutils and is not on stock macOS — the `cpio` fallback above is for the local check only; the Action runs on ubuntu-latest where `cp --parents` is correct, so do not change the workflow to match.

- [ ] **Step 6: Update the README's social-cards section**

The section currently describes predictions only. Rewrite it to state: cards cover every page type (prediction, essay, theme and year page, predictions index, site default); the per-page ones land at `<permalink>card.png` and the two static ones at `assets/img/og/`; none are committed; the pure logic is in `research/card_data.mjs` and `research/card_templates.mjs` with `make test` covering them; `make preview` is still the way to see them locally, and `make server` still shows 404s by design. Keep the existing explanation of why `jekyll build` wipes them.

Make the same update to the "Social preview cards" section of `AGENTS.md` (`CLAUDE.md` is a symlink to it), since it makes the same predictions-only claim.

- [ ] **Step 7: Commit**

```bash
git add Makefile .github/workflows/deploy.yml README.md AGENTS.md
git commit -m "Test the card modules and cache every card type in CI"
```

---

### Task 7: Acceptance pass

**Files:** none — this task only verifies.

- [ ] **Step 1: Full clean render**

```bash
cd /Users/gosuri/code/gosuri.github.io
make test
bundle exec jekyll build
time node research/render_cards.mjs
find _site -name card.png | wc -l
ls _site/assets/img/og/
```
Expected: `predictions: 1689`, `posts: 20`, `static: 2`, `themes: 19`; 1,728 `card.png` files; both static PNGs present. Record the wall-clock time — the Action budget is 6 hours per job and the cache means this only runs on a content change, but a run over ~30 minutes is worth flagging.

- [ ] **Step 2: Confirm every advertised og:image exists on disk**

```bash
cd /Users/gosuri/code/gosuri.github.io/_site
grep -rhso 'property="og:image" content="[^"]*"' . \
  | sed 's/.*content="//; s/"$//; s|https://www.gregosuri.com||' \
  | sort -u | while read -r u; do
      [ -f ".${u}" ] || echo "MISSING $u"
    done; echo "checked"
```
Expected: `checked` with no `MISSING` lines. This is the whole acceptance checklist's first item, mechanised.

- [ ] **Step 3: Verify dimensions on one card of each kind**

```bash
cd /Users/gosuri/code/gosuri.github.io/_site
for f in assets/img/og/site.png assets/img/og/predictions.png \
         predictions/local-compute/card.png \
         predictions/cloud-decentralization/2018/card.png \
         2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/card.png \
         predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4/card.png; do
  printf '%s ' "$f"; sips -g pixelWidth -g pixelHeight "$f" | tr -d '\n' | sed 's/.*pixelWidth: //; s/  pixelHeight: /x/'; echo
done
```
Expected: `1200x630` for all six.

- [ ] **Step 4: Look at the essay length cases**

```bash
cd /Users/gosuri/code/gosuri.github.io
open _site/2011/10/05/heres-to-the-crazy-ones/card.png \
     _site/2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/card.png \
     _site/2018/04/09/assembly-testimony/card.png
```
Expected: 84 / 68 / 56px respectively, none clipped mid-descender, the 3-line clamp only engaging on the third. External hostnames read `akash.network` and `hackernoon.com` — no `www.`, no scheme, no path.

- [ ] **Step 5: Serve the finished site and check a card end to end**

```bash
cd /Users/gosuri/code/gosuri.github.io
make preview
```
Then in another shell: `curl -sI http://localhost:4000/predictions/local-compute/card.png | head -2` — expected `200 OK`, `Content-Type: image/png`.

- [ ] **Step 6: Push and validate the live cards**

After the deploy Action completes, paste each of these into the X card validator and into a Slack DM to yourself: `https://www.gregosuri.com/`, `/about/`, `/predictions/`, `/predictions/local-compute/`, `/predictions/cloud-decentralization/2018/`, one prediction permalink, and `/2019/10/07/bootstrapping-a-free-market-by-borrowing-from-the-future/`. Expected: a large image preview on all seven, correct title on each, no "image could not be fetched".

Cloudflare caches aggressively — if a card 404s on first request after deploy, re-check with a cache-busting query string before assuming the render failed.

- [ ] **Step 7: Push the changed design references back to Claude Design**

Nothing in `design/` changed in this plan (the five templates were pulled down at the start of the session). If any preview was edited while implementing, mirror the change into `_sass/` and push it back per `CLAUDE.md` → "Design system sync" before closing out.

---

## Self-Review

**Spec coverage:**
- Shared shell → Task 1 (`SHELL_CSS`, `doc`).
- §1 site default → Task 3.
- §2 predictions index → Task 3 (count and source count computed, not hardcoded).
- §3 theme page → Task 4, extended to the 9 year sub-pages the spec's table omits.
- §4 essay → Task 2 (84/68/56 sizing, `Published on {host}` with `www.` stripped, middle slot omitted on-site).
- §5 head meta → Task 5, with `page.theme` as og:title per the spec's closing note, plus the year suffix the spec doesn't cover.
- §6 rendering → Tasks 2–4 (themes, posts, static) and Task 6 (Makefile / Action).
- Tokens → Global Constraints; no template redefines them.
- Acceptance checklist → Task 7, all six items.

**Known deviations from the spec, both deliberate:**
1. `site.png` is rendered in CI rather than committed (Task 3 rationale).
2. Theme year sub-pages get cards; the spec's table doesn't mention them, but its own head.html branch advertises `card.png` for anything with `theme_slug`.

**Open risk:** the theme standfirsts in `predictions/*.md` are hand-written and the theme cards are computed, so the two can disagree. Task 4 Step 9 makes that a checkable assertion rather than a silent mismatch.
