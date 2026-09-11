# Agent-first Build Delivery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate the complete markdown surface after every Jekyll build, locally and in GitHub Pages CI, without publishing private source material or depending on the card cache.

**Architecture:** A small Node filesystem driver reads the same committed prediction and essay sources as the card renderer, calls the pure functions from Plan 01, checks its output inventory against the built HTML, and writes only into the build destination. Make and CI run it after cards and before serving/uploading; no generated markdown is committed.

**Tech Stack:** Node 20 built-ins, Jekyll 3.10/GitHub Pages, Make, GitHub Actions. No new npm dependencies and no browser JavaScript.

**Spec:** [Approved design](../specs/2026-09-10-agent-first-site-design.md).

## Execution order and boundaries

1. [Plan 01 — markdown](2026-09-10-agent-first-01-markdown.md): pure transformations and content-fidelity tests.
2. **This plan:** filesystem driver, automated integration tests, Make and CI delivery.
3. [Plan 03 — discovery](2026-09-10-agent-first-03-discovery.md): authored citation contract, discovery links, robots/sitemap, documentation, real-builder and retrieval acceptance checks.

Plans 01 and 03's authored content can be developed independently, but run the final acceptance checks only after all three are integrated. Before Plan 03 creates `citing.md`, this driver omits that optional page; once it exists, it is required to have built HTML and a twin. Do not ship the partially integrated feature.

This is a planning deliverable. The commands and code below are for later implementation, not actions already performed. Keep changes scoped; commits have no model-attribution trailers. Do not edit `design/` or Sass for this plan.

## Current repository facts

- `research/render_cards.mjs` is a Playwright driver with side effects. Import helpers from `research/card_data.mjs`, never the renderer.
- The source is 1,689 predictions, 20 essays (nine external-only), ten theme roots and nine year pages. These are observations, not constants to put in the generator.
- A split theme root can lack `theme_slug`; identify its theme from its explicit `/predictions/<theme>/` permalink. Read the generated page inventory to decide which year pages exist instead of creating new HTML routes.
- `posts.html` produces `/posts/`. `index.html` produces `/`. Both need twins. `about.md` has an explicit permalink.
- Jekyll's output is cleared on rebuild. The driver requires an existing successful build, and refuses missing/mismatched HTML rather than publishing a partial twin set. Rebuild before rerendering after removing source pages.
- The CI card cache holds PNGs only. It must remain PNG-only. The generator has no `CARD_LIMIT` behavior.
- `_config.yml` already excludes `research`, `docs`, `design`, `videos`, `catalog`, `transcripts`, and `PREDICTIONS.md`; `.gitignore` already ignores `_site*`.

## File map and shared interfaces

| File | Responsibility |
| --- | --- |
| Create `research/render_agents.mjs` | Read allowlisted sources, validate built-page coverage, emit twins and inventory |
| Create `research/render_agents.test.mjs` | Test actual filesystem output using disposable fixtures, without Jekyll or Playwright |
| Modify `Makefile` | Add generator tests and `agents`; run the generator in `preview` |
| Modify `.github/workflows/deploy.yml` | Run the generator unconditionally after card rendering |

Plan 01 supplies these functions from `research/agent_docs.mjs`:

```js
readDocument(text); // { fm, body }
siteSettings(configText); // { url, baseurl, title, description }
predictionTwin(fm, site);
predictionIndex(predictions, { site, theme: null, year: null });
postTwin({ fm, body, date, permalink }, site);
postsIndex(posts, site); // same post record shape
pageTwin({ title, body, permalink }, site);
homeTwin({ html, site }); // built homepage HTML, not unrendered Liquid
llmsIndex({ site, predictions, posts, documents, sources });
// documents: [{ permalink, markdown, kind }], excludes llms.txt itself
```

The driver also imports existing `postPermalink` and `sourceCount` from `card_data.mjs`. It preserves `site.url` from config even when the HTML build came from a development server. Output paths use permalinks, never the canonical hostname or `baseurl`.

---

### Task 1: Specify filesystem delivery with isolated integration tests

**Files:**
- Create: `research/render_agents.test.mjs`
- Test: `research/render_agents.test.mjs`

- [ ] **Step 1: Write the fixtures and tests below.** These exercise the real driver, not a second copy of its rendering logic. Every temporary tree is removed through the test cleanup hook.

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { renderAgents } from './render_agents.mjs';

const itemPath = '/predictions/ai-agents/2022-11-03-machines-rya4/';
const postPath = '/2020/02/18/external/';
const sourceUrl = 'https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s';
const built = '<main class="page-content"><p>Built page</p></main>';

async function put(root, name, text) {
  const path = join(root, name);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text);
}

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'agent-delivery-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const siteDir = join(root, '_site');
  await put(root, '_config.yml', [
    'title: Greg Osuri',
    'description: >',
    '  I build things for people that build things',
    'baseurl: ""',
    'url: "https://www.gregosuri.com"',
    '',
  ].join('\n'));
  await put(root, '_predictions/ai-agents/item.md', [
    '---', 'layout: prediction', 'title: Machines will schedule other machines',
    'theme: ai-agents', 'theme_title: AI Agents', 'date: 2022-11-03',
    'year: "2022"', 'slug_id: 2022-11-03-machines-rya4',
    `permalink: ${itemPath}`, 'theme_page: /predictions/ai-agents/',
    'source: Akash Weekly (Akash Network)', `source_url: ${sourceUrl}`,
    'timestamp: "00:10:54"', 'quote: |', '  Machines will schedule machines.',
    'context: |', '  Editorial annotation.', '---', '',
  ].join('\n'));
  await put(root, 'predictions/index.md', [
    '---', 'permalink: /predictions/', '---',
    '_1 statements from 1 videos and podcasts, 2022–2022._', '',
  ].join('\n'));
  // Deliberately no theme_slug: the real split theme root lacks this field.
  await put(root, 'predictions/ai-agents.md', [
    '---', 'theme: AI Agents', 'permalink: /predictions/ai-agents/', '---', '',
  ].join('\n'));
  await put(root, 'predictions/ai-agents/2022.md', [
    '---', 'theme: AI Agents', 'theme_slug: ai-agents', 'year: "2022"',
    'permalink: /predictions/ai-agents/2022/', '---', '',
  ].join('\n'));
  await put(root, '_posts/2020-02-18-external.md', [
    '---', 'layout: post', 'title: External essay',
    'link: https://example.org/essay/', '---', '',
  ].join('\n'));
  await put(root, 'about.md', [
    '---', 'title: About', 'permalink: /about/', '---', 'Public biography.', '',
  ].join('\n'));
  for (const path of ['/', '/posts/', '/about/', '/predictions/',
    '/predictions/ai-agents/', '/predictions/ai-agents/2022/', itemPath, postPath]) {
    await put(siteDir, `${path.slice(1)}index.html`, built);
  }
  await put(siteDir, `${itemPath.slice(1)}card.png`, 'existing card');
  await put(siteDir, 'feed.xml', '<feed/>');
  await put(root, 'transcripts/private.md', 'DO_NOT_EXPORT_TRANSCRIPTS');
  await put(root, '_data/talks.yml', 'DO_NOT_EXPORT_DATA');
  await put(root, 'docs/private.md', 'DO_NOT_EXPORT_DOCS');
  return { root, siteDir };
}

test('writes each published page twin, scoped indexes and live inventory', async t => {
  const opts = await fixture(t);
  const result = await renderAgents(opts);
  assert.equal(result.twins, 8);
  assert.equal(result.predictions, 1);
  assert.equal(result.posts, 1);
  const read = path => readFile(join(opts.siteDir, path), 'utf8');
  const leaf = await read(`${itemPath.slice(1)}index.md`);
  assert.ok(leaf.includes(sourceUrl));
  assert.ok(leaf.includes('00:10:54'));
  assert.ok(leaf.includes(`https://www.gregosuri.com${itemPath}`));
  assert.ok(leaf.includes('Quote — verbatim'));
  assert.ok(leaf.includes('Context — site annotation, not spoken'));
  for (const path of ['index.md', 'posts/index.md', 'about/index.md',
    'predictions/index.md', 'predictions/ai-agents/index.md',
    'predictions/ai-agents/2022/index.md', `${postPath.slice(1)}index.md`]) {
    assert.ok((await read(path)).trim(), path);
  }
  const index = await read('predictions/ai-agents/index.md');
  assert.ok(index.includes('2022-11-03-machines-rya4'));
  assert.ok(!index.includes('Editorial annotation.'));
  assert.ok(!index.includes('Machines will schedule machines.'));
  assert.ok((await read(`${postPath.slice(1)}index.md`)).includes('https://example.org/essay/'));
  const inventory = await read('llms.txt');
  assert.ok(inventory.includes('/predictions/index.md'));
  assert.ok(inventory.includes('/posts/index.md'));
  assert.ok(!inventory.includes('DO_NOT_EXPORT'));
  await assert.rejects(access(join(opts.siteDir, 'transcripts/index.md')));
  await assert.rejects(access(join(opts.siteDir, 'docs/index.md')));
  await assert.rejects(access(join(opts.siteDir, '_data/index.md')));
  assert.equal(await read(`${itemPath.slice(1)}card.png`), 'existing card');
  assert.equal(await read('feed.xml'), '<feed/>');
  const again = await renderAgents(opts);
  assert.deepEqual(again, result);
  assert.equal(await read('llms.txt'), inventory);
});

test('new source and its built HTML enter indexes without an allowlist edit', async t => {
  const opts = await fixture(t);
  await renderAgents(opts);
  const original = await readFile(join(opts.root, '_predictions/ai-agents/item.md'), 'utf8');
  const nextPath = itemPath.replace('2022-11-03-machines-rya4', '2023-01-01-home-next');
  const next = original.replaceAll('2022-11-03-machines-rya4', '2023-01-01-home-next')
    .replace('date: 2022-11-03', 'date: 2023-01-01')
    .replace('year: "2022"', 'year: "2023"')
    .replace('title: Machines will schedule other machines', 'title: Home GPUs earn income');
  await put(opts.root, '_predictions/ai-agents/new.md', next);
  await put(opts.siteDir, `${nextPath.slice(1)}index.html`, built);
  const result = await renderAgents(opts);
  assert.equal(result.predictions, 2);
  const flat = await readFile(join(opts.siteDir, 'predictions/index.md'), 'utf8');
  assert.ok(flat.includes('2023-01-01-home-next'));
  const year = await readFile(join(opts.siteDir, 'predictions/ai-agents/2022/index.md'), 'utf8');
  assert.ok(!year.includes('2023-01-01-home-next'));
  const theme = await readFile(join(opts.siteDir, 'predictions/ai-agents/index.md'), 'utf8');
  assert.ok(theme.includes('2023-01-01-home-next'));
});

test('authored citing page is included as soon as it exists', async t => {
  const opts = await fixture(t);
  await put(opts.root, 'citing.md', '---\ntitle: Citing\npermalink: /citing/\n---\nQuote verbatim.\n');
  await put(opts.siteDir, 'citing/index.html', built);
  assert.equal((await renderAgents(opts)).twins, 9);
  const twin = await readFile(join(opts.siteDir, 'citing/index.md'), 'utf8');
  assert.ok(twin.includes('Quote verbatim.'));
});

test('fails before writes if the HTML build is missing a source page', async t => {
  const opts = await fixture(t);
  await rm(join(opts.siteDir, `${itemPath.slice(1)}index.html`));
  await assert.rejects(renderAgents(opts), /Missing built HTML/);
  await assert.rejects(access(join(opts.siteDir, 'llms.txt')));
});

test('fails on an unhandled public HTML page instead of leaving a broken alternate', async t => {
  const opts = await fixture(t);
  await put(opts.siteDir, 'new-page/index.html', built);
  await assert.rejects(renderAgents(opts), /No markdown twin for built page/);
  await assert.rejects(access(join(opts.siteDir, 'llms.txt')));
});

test('refuses duplicate outputs and traversal permalinks', async t => {
  const opts = await fixture(t);
  const source = await readFile(join(opts.root, '_predictions/ai-agents/item.md'), 'utf8');
  await put(opts.root, '_predictions/ai-agents/copy.md', source);
  await assert.rejects(renderAgents(opts), /Duplicate twin/);
  await rm(join(opts.root, '_predictions/ai-agents/copy.md'));
  await put(opts.root, '_predictions/ai-agents/item.md',
    source.replace(`permalink: ${itemPath}`, 'permalink: /../outside/'));
  await assert.rejects(renderAgents(opts), /Unsafe directory permalink/);
});
```

- [ ] **Step 2: Run the failing tests.**

Run: `node --test research/render_agents.test.mjs`.

Expected: module-not-found for `render_agents.mjs`. After Task 2, the same tests must pass without npm install, Chromium, Docker, or a real `_site`.

### Task 2: Implement the source-to-build driver

**Files:**
- Create: `research/render_agents.mjs`
- Test: `research/render_agents.test.mjs`

- [ ] **Step 1: Add the complete driver.** Its explicit source allowlist is intentional: `research`, `_data`, transcripts, docs and source catalogs are not a markdown export surface. Discover new predictions, posts, themes and year pages within their existing directories automatically. Newly authored page types must be added deliberately; the HTML inventory check makes omissions visible.

```js
// Post-build agent documents. No browser dependencies and no writes to source.
import { readFile, readdir, mkdir, writeFile, access } from 'node:fs/promises';
import { resolve, join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { postPermalink, sourceCount } from './card_data.mjs';
import {
  readDocument, siteSettings, predictionTwin, predictionIndex, postTwin,
  postsIndex, pageTwin, homeTwin, llmsIndex,
} from './agent_docs.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

async function collect(dir, extension) {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) paths.push(...await collect(path, extension));
    else if (entry.isFile() && extension.test(entry.name)) paths.push(path);
  }
  return paths.sort();
}

async function exists(path) {
  try { await access(path); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

function destination(siteDir, permalink, name) {
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(permalink)) {
    throw new Error(`Unsafe directory permalink: ${permalink}`);
  }
  return join(siteDir, permalink.slice(1), name);
}

async function document(path) {
  const result = readDocument(await readFile(path, 'utf8'));
  if (!result.fm) throw new Error(`Missing front matter: ${path}`);
  return result;
}

export async function renderAgents({ root = ROOT, siteDir = join(root, '_site') } = {}) {
  root = resolve(root);
  siteDir = resolve(siteDir);
  if (siteDir === root) throw new Error('Build destination must differ from source root');
  if (!await exists(join(siteDir, 'index.html'))) {
    throw new Error(`Missing built HTML: ${siteDir}/index.html; run Jekyll first`);
  }
  const site = siteSettings(await readFile(join(root, '_config.yml'), 'utf8'));
  const documents = [];
  const permalinks = new Set();
  function add(permalink, markdown, kind) {
    destination(siteDir, permalink, 'index.md');
    if (permalinks.has(permalink)) throw new Error(`Duplicate twin: ${permalink}`);
    if (typeof markdown !== 'string' || !markdown.trim()) {
      throw new Error(`Empty markdown twin: ${permalink}`);
    }
    permalinks.add(permalink);
    documents.push({ permalink, markdown, kind });
  }

  const predictions = [];
  for (const path of await collect(join(root, '_predictions'), /\.md$/)) {
    const { fm } = await document(path);
    destination(siteDir, fm.permalink, 'index.md');
    predictions.push(fm);
    add(fm.permalink, predictionTwin(fm, site), 'prediction');
  }
  if (!predictions.length) throw new Error('No predictions found');

  for (const path of await collect(join(root, 'predictions'), /\.md$/)) {
    const { fm } = await document(path);
    if (fm.permalink === '/predictions/') {
      add(fm.permalink, predictionIndex(predictions, { site }), 'prediction-index');
      continue;
    }
    const match = fm.permalink?.match(/^\/predictions\/([a-z0-9-]+)\/(?:(\d{4})\/)?$/);
    if (!match) throw new Error(`Unsupported prediction index: ${path}`);
    const [, theme, year] = match;
    const items = predictions.filter(p => p.theme === theme && (!year || String(p.year) === year));
    if (!items.length) throw new Error(`Empty prediction index: ${fm.permalink}`);
    add(fm.permalink, predictionIndex(predictions, { site, theme, year: year || null }),
      year ? 'year-index' : 'theme-index');
  }

  const posts = [];
  for (const path of await collect(join(root, '_posts'), /\.(md|markdown)$/)) {
    const { fm, body } = await document(path);
    const basename = path.split(sep).at(-1);
    const permalink = postPermalink(basename, fm);
    if (!permalink) throw new Error(`Cannot derive post permalink: ${path}`);
    const post = { fm, body, date: basename.slice(0, 10), permalink };
    posts.push(post);
    add(permalink, postTwin(post, site), 'post');
  }
  add('/posts/', postsIndex(posts, site), 'posts-index');

  for (const filename of ['about.md', 'citing.md']) {
    const path = join(root, filename);
    if (filename === 'citing.md' && !await exists(path)) continue;
    const { fm, body } = await document(path);
    add(fm.permalink, pageTwin({ title: fm.title, body, permalink: fm.permalink }, site), 'page');
  }
  add('/', homeTwin({ html: await readFile(join(siteDir, 'index.html'), 'utf8'), site }), 'home');

  // Validate everything before starting writes: no successful-looking partial inventory.
  for (const doc of documents) {
    const html = destination(siteDir, doc.permalink, 'index.html');
    if (!await exists(html)) throw new Error(`Missing built HTML: ${html}; rebuild Jekyll first`);
  }
  for (const path of await collect(siteDir, /\.html$/)) {
    const html = await readFile(path, 'utf8');
    if (!/<main\b[^>]*\bclass=["'][^"']*\bpage-content\b/.test(html)) continue;
    const route = '/' + relative(siteDir, path).split(sep).join('/').replace(/index\.html$/, '');
    if (!permalinks.has(route)) throw new Error(`No markdown twin for built page: ${route}`);
  }
  const sources = sourceCount(await readFile(join(root, 'predictions/index.md'), 'utf8'));
  if (!sources) throw new Error('Cannot read source count from predictions/index.md');
  const inventory = llmsIndex({ site, predictions, posts, documents, sources });
  for (const doc of documents) {
    const path = destination(siteDir, doc.permalink, 'index.md');
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, doc.markdown, 'utf8');
  }
  await writeFile(join(siteDir, 'llms.txt'), inventory, 'utf8');
  return { twins: documents.length, predictions: predictions.length, posts: posts.length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { 'site-dir': { type: 'string' } }, strict: true });
  const result = await renderAgents({ siteDir: values['site-dir'] || join(ROOT, '_site') });
  console.log(`agents: ${result.twins} twins, ${result.predictions} predictions, ${result.posts} essays; llms.txt`);
}
```

- [ ] **Step 2: Run the pure and driver tests.**

```sh
node --test research/agent_docs.test.mjs research/render_agents.test.mjs research/card_data.test.mjs research/card_templates.test.mjs research/theme_card_integration.test.mjs
```

Expected: all pass. Tests import the driver without running its CLI; no `_site` in the real checkout is created or modified by the test suite.

- [ ] **Step 3: Exercise the actual corpus after a local build.**

```sh
bundle exec jekyll build
node research/render_agents.mjs
```

Expected: complete output with counts derived from source. If conversion rejects an existing HTML construct, add a narrow preservation fixture and support it in Plan 01's converter; do not suppress the error, silently strip content, or omit the affected page. A local Jekyll 4 build is a smoke check only; Plan 03 verifies the real builder.

- [ ] **Step 4: Commit only the driver and its test.**

```sh
git add research/render_agents.mjs research/render_agents.test.mjs
git commit -m "feat: render agent documents into the built site"
```

### Task 3: Wire Make and CI without coupling documents to the card cache

**Files:**
- Modify: `Makefile`, existing `test`, `preview` and `.PHONY` sections; add `agents`
- Modify: `.github/workflows/deploy.yml`, test label and step after `Render social cards`

- [ ] **Step 1: Replace the test comment/target and add the independent generator target.** Keep the three existing test files and append the two new suites.

```make
# Pure card/agent modules and filesystem delivery tests; Node 20, no dependencies.
test:
	node --test research/card_data.test.mjs research/card_templates.test.mjs research/theme_card_integration.test.mjs research/agent_docs.test.mjs research/render_agents.test.mjs

# Render markdown twins and llms.txt into an existing Jekyll build.
agents: test
	node research/render_agents.mjs
```

- [ ] **Step 2: Replace the preview comment and target.** Preserve the existing LAN binding and address output. `make preview` remains a long-running foreground server; stop it with Ctrl-C after verification.

```make
# Build, render both post-build surfaces, then serve without wiping artifacts.
preview:
	bundle exec jekyll build
	node research/render_cards.mjs
	node research/render_agents.mjs
	@printf 'Listening on:\n  http://localhost:4000\n  http://%s:4000  (LAN)\n' "$$(ipconfig getifaddr en0 || ipconfig getifaddr en1)"
	bundle exec jekyll server --host 0.0.0.0 --skip-initial-build --no-watch
```

The complete `.PHONY` line becomes:

```make
.PHONY: server test cards agents preview installdeps deploy img img-run img-push create remove
```

- [ ] **Step 3: Rename the CI test step and insert the unconditioned render step.** Change `name: Test the card modules` to `name: Test card and agent modules`; its `run: make test` is unchanged. Immediately after the entire existing `Render social cards` step, before `actions/upload-pages-artifact@v3`, insert:

```yaml
      - name: Render agent documents
        run: node research/render_agents.mjs
```

Do not add an `if:` to this step. Do not add markdown to `.card-cache`. Keep the output ownership fix and Node 20 setup before both post-build drivers. No action versions need upgrading for this feature.

- [ ] **Step 4: Run tests and inspect target command order.**

```sh
make test
make -n agents
make -n preview
git diff --check
```

Expected: tests pass; `agents` invokes no npm or Playwright; `preview` orders Jekyll build → cards → agents → server and retains `--host 0.0.0.0 --skip-initial-build --no-watch`.

- [ ] **Step 5: Verify a known prediction after `make preview`.** Install the existing card development dependencies if absent (`cd research && npm ci && npx playwright install chromium`), return to the repo root, and run `make preview`. In another terminal:

```sh
node --input-type=module <<'JS'
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseFrontMatter } from './research/card_data.mjs';
const fm = parseFrontMatter(await readFile(
  '_predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4.md', 'utf8'));
const disk = await readFile(`_site${fm.permalink}index.md`, 'utf8');
assert.ok(disk.includes(fm.source_url));
assert.ok(disk.includes(fm.timestamp));
const response = await fetch(`http://localhost:4000${fm.permalink}index.md`);
assert.equal(response.status, 200);
assert.equal(await response.text(), disk);
assert.ok(disk.includes(`https://www.gregosuri.com${fm.permalink}`));
console.log('Known prediction twin is present and served with its source/timestamp.');
JS
```

Expected: assertion message, no failures. A plain text HTTP MIME type on the local static server is acceptable; the HTML discovery link identifies `text/markdown`. Do not add server routing or Cloudflare configuration solely to change MIME types.

- [ ] **Step 6: Review the cache-hit branch and commit only build wiring.** Verify the agent step has no dependency on `steps.cards.outputs.cache-hit`; both restored-card and freshly-rendered-card paths converge before it. Plan 03's final acceptance renders documents into the real builder's output independently of any card cache.

```sh
git diff -- Makefile .github/workflows/deploy.yml
git add Makefile .github/workflows/deploy.yml
git commit -m "build: generate agent documents before serving and deploying"
```

## Exit criteria

- The driver passes isolated filesystem tests and renders the actual corpus with no content-conversion omissions.
- All built public page routes have twins, and every twin corresponds to built HTML.
- A new prediction plus its HTML automatically enters the global and scoped indexes.
- `make agents` does not require card dependencies; `make preview` serves both surfaces.
- CI runs agent generation on both card-cache paths.
- Generated markdown, `llms.txt`, and `_site` are absent from staged source changes.
- Continue to Plan 03 for complete discovery, documentation, real-builder, and three-fetch acceptance.

## Validation while writing this plan

The proposed JavaScript blocks from Plans 01 and 02 were extracted into a disposable directory: all 40 pure/parser/driver tests passed on Node 22.22.3. The proposed driver also processed the actual committed corpus against a temporary copy of the existing HTML build, emitting 1,732 twins (1,689 predictions, 20 essays, all current index/authored pages). Plan 03 adds the 1,733rd twin for `/citing/`; its proposed content was separately passed through the page converter successfully. No implementation files or real `_site` artifacts were changed during this check. This validates the draft interfaces and current-content conversion; it does not replace the later Node 20 CI and Jekyll 3.10 production checks.
