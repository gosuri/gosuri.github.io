# Single-Page Prediction Theme Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every prediction theme page (e.g. `/predictions/decentralized-ai/`) renders all of its predictions on one page; the year-by-year link index and the 52 per-year sub-pages are removed, with redirects preserving the old year URLs.

**Architecture:** `research/export_blog.py` generates all committed prediction pages. Today large themes are "split": the theme page becomes a list of year links and each year gets its own sub-page. We delete the split machinery so `theme_pages()` always emits the existing single-page form (a Liquid loop over the `site.predictions` collection), and emit `redirect_from` front matter for the old year URLs (served by the GitHub-Pages-whitelisted `jekyll-redirect-from` plugin). The agent-docs layer (`research/agent_docs.mjs`, `research/render_agents.mjs`) drops the `year-index` twin kind, and authored copy (`citing.md`, `CLAUDE.md`) stops mentioning theme-year pages. Finally the exporter is re-run to regenerate `predictions/` and `_predictions/`, and everything is verified against the real GitHub Pages builder.

**Tech Stack:** Python 3 stdlib (exporter + unittest), Node built-in test runner, Jekyll 3.10 via the `ghcr.io/actions/jekyll-build-pages` Docker image, Liquid templates.

**Spec (inline):** User request: "remove the year by year index in prediction categories and have them render on a single page https://www.gregosuri.com/predictions/decentralized-ai/". Derived requirements:
1. `/predictions/<theme>/` lists every prediction for the theme directly (the current "unsplit" page shape: `_N statements · YYYY–YYYY_` intro + Liquid loop sorted by `slug_id`).
2. No `predictions/<theme>/<year>.md` source files and no `/predictions/<theme>/<year>/` published index pages.
3. Old year URLs redirect to the theme page (jekyll-redirect-from) rather than 404.
4. Prediction leaf pages' `theme_page` front matter points at `/predictions/<theme>/` (their back-crumb anchor must exist).
5. Agent surface (`llms.txt`, markdown twins) no longer advertises year indexes; the renderer fails closed if a year page ever reappears.
6. `make test` passes; the real GitHub Pages Docker build succeeds; `render_agents.mjs` succeeds against that build.

## Global Constraints

- GitHub Pages builds with Jekyll 3.10 (`github-pages` gem), not local Jekyll 4 — verify with the Docker builder command from `CLAUDE.md` before declaring success.
- `site.url` stays `https://www.gregosuri.com`; never commit rendered cards/twins; `predictions/` and `_predictions/` are exporter-owned (never hand-edit generated files).
- No new JS, no build-step dependencies; only the whitelisted `jekyll-redirect-from` plugin may be added to `_config.yml`.
- Do NOT commit or push — the user has not asked for a commit. Leave changes in the working tree. (Deviation from the usual per-task commit steps, per harness rule.)
- Do NOT touch `_includes/metadata.html` / `_includes/structured-data.html` `page.year` branches: prediction *leaf* pages keep `year` in front matter and still use them.
- Temp/build output goes under `/private/tmp/claude-501/-Users-gosuri-code-gosuri-github-io/6e90e58f-632c-4e95-a4df-cd57435c8c39/scratchpad`.

---

### Task 1: Exporter always emits one page per theme

**Files:**
- Modify: `research/export_blog.py` (lines 13–17 constants; 172–257 `render_theme_page`/`title_index_bytes`/`theme_is_split`/`entry_theme_page`/`theme_pages`; 456–462 in `main`)
- Test: `research/test_export_blog.py` (replace `test_split_by_year` at :176 and `test_split_by_year_when_title_index_exceeds_budget` at :187)

**Interfaces:**
- Produces: `theme_pages(theme, entries) -> {f"{slug}.md": content}` (single entry, no size kwargs); `entry_theme_page(e) -> f"/predictions/{slug}/"` (no `split` arg); `render_theme_page(theme, entries, permalink, redirect_years=())` (drops `title=`/`year=` kwargs). `main()` no longer computes `split_themes`.
- Theme page front matter gains, when `redirect_years` is non-empty:
  ```yaml
  redirect_from:
    - "/predictions/<slug>/<year>/"
  ```

- [ ] **Step 1: Replace the two split tests with single-page tests**

In `research/test_export_blog.py`, delete `test_split_by_year` and `test_split_by_year_when_title_index_exceeds_budget` (both in `TestRender`) and add:

```python
    def test_theme_pages_always_single_page(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        pages = eb.theme_pages("Local Compute", local)
        # one page per theme, regardless of size — no year sub-pages
        self.assertEqual(sorted(pages), ["local-compute.md"])
        page = pages["local-compute.md"]
        self.assertIn('theme_slug: "local-compute"', page)
        self.assertIn("_2 statements · 2018–2019_", page)
        self.assertIn('sort: "slug_id"', page)
        self.assertNotIn("by year", page)

    def test_theme_page_redirects_old_year_urls(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        page = eb.theme_pages("Local Compute", local)["local-compute.md"]
        head = page.split("---")[1]
        self.assertIn("redirect_from:", head)
        self.assertIn('  - "/predictions/local-compute/2018/"', head)
        self.assertIn('  - "/predictions/local-compute/2019/"', head)

    def test_theme_page_has_no_year_filter(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        page = eb.render_theme_page(
            "Local Compute", local, "/predictions/local-compute/")
        self.assertNotIn("page.year", page)
        self.assertNotIn("year:", page.split("---")[1])

    def test_entry_theme_page_is_the_theme_url(self):
        _, entries = eb.parse_predictions(FIXTURE)
        e = entries[0]
        self.assertEqual(eb.entry_theme_page(e), "/predictions/local-compute/")
```

Also remove the now-unused `import os` ONLY if nothing else in the file uses it (it is used only by `TestRealCorpusIds`/`TestAttributionTemplates` path joins — keep it).

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `cd /Users/gosuri/code/gosuri.github.io && python3 -m unittest discover -s research -p 'test_*.py' -v 2>&1 | tail -20`
Expected: the four new tests FAIL (`theme_pages` still splits / takes different args; `entry_theme_page` requires 2 args; no `redirect_from`).

- [ ] **Step 3: Implement in `research/export_blog.py`**

Delete lines 13 (`SPLIT_BYTES = 300_000`), 15–16 (`INDEX_BUDGET_TOKENS`, `INDEX_BUDGET_BYTES`), the whole `title_index_bytes` (:201–204) and `theme_is_split` (:207–216) functions.

Replace `render_theme_page` (:172–198) with (only signature, front-matter block, and dropped Liquid `if page.year` change — intro/loop otherwise identical):

```python
def render_theme_page(theme, entries, permalink, redirect_years=()):
    entries = sorted(entries, key=lambda e: e["date"])
    years = f"{entries[0]['date'][:4]}–{entries[-1]['date'][:4]}"
    pairs = [
        ("layout", "predictions"),
        ("title", f"{theme} — Predictions"),
        ("theme", theme),
        ("theme_slug", theme_slug(theme)),
        ("permalink", permalink),
    ]
    head_lines = _fm(pairs).split("\n")
    if redirect_years:
        block = ["redirect_from:"] + [
            f'  - "{permalink}{y}/"' for y in redirect_years
        ]
        head_lines = head_lines[:-1] + block + [head_lines[-1]]
    head = "\n".join(head_lines)
    intro = f"_{len(entries)} statements · {years}_"
    loop = "\n".join([
        '{%- assign items = site.predictions '
        '| where: "theme", page.theme_slug -%}',
        '{%- assign items = items | sort: "slug_id" -%}',
        "{%- for item in items -%}",
        "{%- if forloop.index > 1 %}<hr>{% endif %}",
        "{% include prediction.html item=item %}",
        "{%- endfor -%}",
    ])
    return f"{head}\n\n{intro}\n\n{loop}\n"
```

Replace `entry_theme_page` (:219–224) with:

```python
def entry_theme_page(e):
    """Permalink of the theme page that lists this entry."""
    return f"/predictions/{theme_slug(e['theme'])}/"
```

Replace `theme_pages` (:227–257) with:

```python
def theme_pages(theme, entries):
    """Return {relative_path: content} for one theme — always a single page.

    Old per-year sub-page URLs are preserved as redirects to the theme page.
    """
    slug = slugify(theme)
    years = sorted({e["date"][:4] for e in entries})
    return {f"{slug}.md": render_theme_page(
        theme, entries, f"/predictions/{slug}/", redirect_years=years)}
```

In `main()`, replace lines 456–462:

```python
    split_themes = {
        t: theme_is_split([e for e in entries if e["theme"] == t])
        for t in themes
    }
    for e in entries:
        rel, content = render_collection_entry(
            e, entry_theme_page(e, split_themes[e["theme"]]))
```

with:

```python
    for e in entries:
        rel, content = render_collection_entry(e, entry_theme_page(e))
```

Update `render_collection_entry`'s docstring (:389–394): the sentence "— the year page for split themes, the theme page otherwise" becomes "— always the theme page".

- [ ] **Step 4: Run Python tests, verify all pass**

Run: `cd /Users/gosuri/code/gosuri.github.io && python3 -m unittest discover -s research -p 'test_*.py'`
Expected: OK (all tests pass, including `TestRealCorpusIds` against the real `PREDICTIONS.md`).

### Task 2: Agent docs drop the year-index kind

**Files:**
- Modify: `research/agent_docs.mjs` (`predictionIndex` :64–85, `llmsIndex` :223–257)
- Modify: `research/render_agents.mjs` (:82–88)
- Test: `research/agent_docs.test.mjs` (:94–101, :246–283), `research/render_agents.test.mjs` (fixture :52–55, :63–64, counts :78, :90, :130–131, :156, :166)

**Interfaces:**
- Consumes: nothing from Task 1 (pure Node layer; operates on committed files only at render time).
- Produces: `predictionIndex(items, { site, theme = null })` — no `year` option; `renderAgents` emits kinds `prediction | prediction-index | recent-index | theme-index | post | posts-index | page | home` (no `year-index`); a `predictions/**.md` permalink that is not `/predictions/`, `/predictions/recent/`, or `/predictions/<slug>/` throws `Unsupported prediction index`.

- [ ] **Step 1: Update the unit tests to the new contract**

In `research/agent_docs.test.mjs`:

Replace the test at :94–101 with:

```js
test('predictionIndex scopes a theme with measured year counts', () => {
  const entries = [prediction, { ...prediction, date: '2024-01-01', slug_id: '2024-01-01-x', title: 'New title' }];
  const md = predictionIndex(entries, { site, theme: 'ai-agents' });
  assert.ok(md.startsWith('# AI Agents 2 predictions'));
  assert.ok(md.includes('Years: 2022 (1); 2024 (1)'));
  assert.ok(md.includes('2024-01-01-x — New title'));
  assert.ok(predictionIndex([], { site }).startsWith('# All 0 predictions'));
});
```

In the big `llmsIndex` test (:246–273): delete the `year-index` document line (:253), change the expected twin count `8 markdown twins.` → `7 markdown twins.`, delete the `/predictions/ai-agents/2022/index.md` assertion (:261) and the `Theme-year indexes: 1 files` assertion (:267), and add:

```js
  assert.ok(md.includes('https://www.gregosuri.com/predictions/ai-agents/index.md — ~1 tokens'));
  assert.ok(!md.includes('Theme-year'));
  assert.ok(!md.includes('Year index:'));
```

(`'ééé'` is 6 UTF-8 bytes → ~2 tokens; verify the exact number the run reports and pin it.)

Replace the fail-closed year test (:275–283) with:

```js
test('llmsIndex fails closed when the recent index exceeds 5000 tokens', () => {
  const documents = [
    { permalink: '/predictions/recent/', markdown: 'x'.repeat(20001), kind: 'recent-index' },
  ];
  assert.throws(
    () => llmsIndex({ site, predictions: [], posts: [], documents, sources: 0 }),
    /Recommended index exceeds 5,000 tokens.*recent/s,
  );
});
```

In `research/render_agents.test.mjs`:
- Delete the `predictions/ai-agents/2022.md` fixture block (:52–55) and remove `'/predictions/ai-agents/2022/'` from the built-HTML loop list (:63–64).
- First test: `result.twins` 9 → 8 (:78); remove `'predictions/ai-agents/2022/index.md'` from the read-back list (:90).
- Second test: delete the two year-index assertions (:130–131 — the `predictions/ai-agents/2022/index.md` read and its `!year.includes` check).
- Citing test: twins 10 → 9 (:156). Pagination test: twins 11 → 10 (:166).
- Add one new test that a year page fails closed:

```js
test('rejects a resurrected theme-year page instead of publishing it', async t => {
  const opts = await fixture(t);
  await put(opts.root, 'predictions/ai-agents/2022.md', [
    '---', 'theme: AI Agents', 'theme_slug: ai-agents', 'year: "2022"',
    'permalink: /predictions/ai-agents/2022/', '---', '',
  ].join('\n'));
  await assert.rejects(renderAgents(opts), /Unsupported prediction index/);
});
```

- [ ] **Step 2: Run Node tests to verify they fail**

Run: `cd /Users/gosuri/code/gosuri.github.io && node --test research/agent_docs.test.mjs research/render_agents.test.mjs 2>&1 | tail -15`
Expected: FAIL (year option still changes titles; `year-index` still produced; twin counts still 9/10/11; year page still accepted).

- [ ] **Step 3: Implement**

`research/agent_docs.mjs`:
- `predictionIndex` (:64): signature `(items, { site, theme = null })`; selection filter drops the year clause (`items.filter(item => !theme || item.theme === theme)`); title drops the year suffix (`theme ? (selected[0]?.theme_title || theme) : 'All'`). Keep the per-theme `Years:` summary line.
- `llmsIndex`:
  - :223 → `const requiredSmall = documents.filter(doc => doc.kind === 'recent-index');`
  - :231 → `` `1. Start with the recent index or the narrowest recommended theme index below.`, ``
  - :238 → `'Append `index.md` to a page URL for its markdown twin. Append `card.png` to a prediction, essay or theme URL for its social card.',`
  - Delete :239 (`Year index: ...` line).
  - Delete the `- Theme-year indexes: ${range('year-index')}.` item at :257.

`research/render_agents.mjs` (:82–88) →

```js
    const match = fm.permalink?.match(/^\/predictions\/([a-z0-9-]+)\/$/);
    if (!match) throw new Error(`Unsupported prediction index: ${path}`);
    const theme = match[1];
    const items = predictions.filter(p => p.theme === theme);
    if (!items.length) throw new Error(`Empty prediction index: ${fm.permalink}`);
    add(fm.permalink, predictionIndex(predictions, { site, theme }), 'theme-index');
```

- [ ] **Step 4: Run the full test suite, verify green**

Run: `cd /Users/gosuri/code/gosuri.github.io && make test`
Expected: Python suite OK and all five Node test files pass. (`theme_card_integration.test.mjs` still reads the OLD committed `predictions/local-compute.md` — it parses front matter only, so it passes both before and after regeneration.)

### Task 3: Config, authored copy, and card-script comment

**Files:**
- Modify: `_config.yml` (:16–17 plugins list)
- Modify: `citing.md` (:49–54, :70)
- Modify: `CLAUDE.md` (social-cards paragraph)
- Modify: `research/render_cards.mjs` (:100–111 comment + theme-page filter)

**Interfaces:**
- Consumes: `redirect_from` front matter emitted by Task 1 (requires `jekyll-redirect-from`).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Enable jekyll-redirect-from**

In `_config.yml`:

```yaml
plugins:
  - jekyll-sitemap
  - jekyll-redirect-from
```

(Whitelisted by the `github-pages` gem; verified against the real builder in Task 4.)

- [ ] **Step 2: Update citing.md**

- :49–50 `Choose the\nsmallest relevant theme or year index listed in the inventory.` → `Choose the\nsmallest relevant theme index listed in the inventory.`
- :53–54 `Year indexes use \`/predictions/{theme}/{year}/index.md\`; the essay index is\n[/posts/index.md](/posts/index.md).` → `The essay index is\n[/posts/index.md](/posts/index.md).`
- :70 `Social preview images for prediction, essay, theme, and theme-year pages use the same` → `Social preview images for prediction, essay, and theme pages use the same`

- [ ] **Step 3: Update CLAUDE.md**

In the "Social preview cards" section: `each prediction, essay, theme page, and theme\nyear sub-page gets its own PNG` → `each prediction, essay, and theme page gets its own PNG`. Scan the file for any other `theme-year`/`year sub-page` mention and fix likewise (CLAUDE.md is a symlink — edit the target once, preserve the link).

- [ ] **Step 4: Simplify render_cards.mjs theme-page pass**

At :100–111, the comment describes year sub-pages and the filter tolerates `fm.year`. Update the comment to describe theme pages only, and simplify:

```js
const items = all.filter(p => p.theme === fm.theme_slug);
```
with `soft: 'Theme'` (drop the `fm.year ||` fallback). Redirect stubs are plugin-generated (not source `.md` files), so the discovery glob never sees them.

- [ ] **Step 5: Run make test**

Run: `cd /Users/gosuri/code/gosuri.github.io && make test`
Expected: OK — nothing in the suites reads these files except `theme_card_integration.test.mjs`, which mirrors the (unchanged) join logic.

### Task 4: Regenerate content and verify against the real builder

**Files:**
- Regenerate: `predictions/**` (10 theme pages, index, recent; 52 year files deleted), `_predictions/**` (1,689 docs; `theme_page` changes for previously split themes)

**Interfaces:**
- Consumes: Task 1's exporter, Task 3's config.

- [ ] **Step 1: Run the exporter**

Run: `cd /Users/gosuri/code/gosuri.github.io && python3 research/export_blog.py`
Expected: `wrote 12 pages and 1689 predictions to ...` (12 = index + recent + 10 themes).

- [ ] **Step 2: Inspect the regenerated output**

- `git status` — `predictions/<slug>/<year>.md` files all deleted; no unexpected files.
- `predictions/decentralized-ai.md` — single page: `_165 statements · 2020–2026_`, `redirect_from:` block listing 2020–2026, Liquid loop, no `by year`.
- `git diff _predictions | grep '^[+-]theme_page' | sort -u` — only `/predictions/<slug>/<year>/` → `/predictions/<slug>/` rewrites.
- Run `make test` again (the real-corpus and integration tests now read the regenerated files; `theme_card_integration` expects `_159 statements · 2018–2026_` in spirit — its assertions are count-based and must still pass).

- [ ] **Step 3: Build with the real GitHub Pages builder**

```bash
mkdir -p /private/tmp/claude-501/-Users-gosuri-code-gosuri-github-io/6e90e58f-632c-4e95-a4df-cd57435c8c39/scratchpad/out
docker run --rm -v "$PWD":/github/workspace -v /private/tmp/claude-501/-Users-gosuri-code-gosuri-github-io/6e90e58f-632c-4e95-a4df-cd57435c8c39/scratchpad/out:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e INPUT_SOURCE=. -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
```

Expected: build succeeds. Then verify in the output dir (call it `$OUT`):
- `$OUT/predictions/decentralized-ai/index.html` contains 165 `<article` blocks (`grep -c '<article' ...`).
- `$OUT/predictions/decentralized-ai/2021/index.html` exists and contains `http-equiv="refresh"` (or `Redirecting`) pointing at `/predictions/decentralized-ai/` — the plugin worked.
- `grep -c 'predictions/[a-z-]*/2[0-9][0-9][0-9]/' $OUT/sitemap.xml` → 0 (redirect stubs stay out of the sitemap).
- A prediction leaf page's back-crumb href is the theme page (spot-check one previously-split leaf).

- [ ] **Step 4: Run the agent renderer against the real build**

Run: `cd /Users/gosuri/code/gosuri.github.io && node research/render_agents.mjs --site-dir $OUT`
Expected: succeeds (redirect stubs have no `page-content` main, so the twin-coverage check skips them). Then:
- `grep -i 'year' $OUT/llms.txt` → no `Year index`/`Theme-year` lines (the per-theme `Years:` lines live in theme twins, not llms.txt).
- `$OUT/llms.txt` lists large themes under "Broad indexes (high cost)" and small ones under "Recommended title indexes".
- `test -f $OUT/predictions/decentralized-ai/index.md && ! test -e $OUT/predictions/decentralized-ai/2021/index.md` — wait: the 2021 redirect stub directory EXISTS (index.html) but must have no index.md twin.

- [ ] **Step 5: Run metadata verification**

Run: `cd /Users/gosuri/code/gosuri.github.io && node research/verify_metadata.mjs` (check its `--site-dir`-style interface first; point it at `$OUT` if supported, otherwise skip and note).
Expected: no errors.

## Self-Review Notes

- Spec coverage: req 1–2 → Task 1 + Task 4 step 1; req 3 → Task 1 step 3 + Task 3 step 1 + Task 4 step 3; req 4 → Task 1 (`entry_theme_page`) + Task 4 step 2; req 5 → Task 2; req 6 → Task 4.
- `sourceCount` reads `predictions/index.md`, which the exporter still writes unchanged — no impact.
- `_includes/head.html` advertises `card.png` for any `theme_slug` page; year pages disappear, so fewer cards — `render_cards.mjs` discovery shrinks automatically.
- Leaf pages keep `year:` front matter; `metadata.html`/`structured-data.html` `page.year` branches still serve them — intentionally untouched.
