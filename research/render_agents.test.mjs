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

test('preserves built pagination pages as route-specific homepage twins', async t => {
  const opts = await fixture(t);
  await put(opts.siteDir, 'page2/index.html', '<main class="page-content"><p>Page two writing.</p></main>');
  await put(opts.siteDir, 'page10/index.html', '<main class="page-content"><p>Page ten writing.</p></main>');
  const result = await renderAgents(opts);
  assert.equal(result.twins, 10);
  const page2 = await readFile(join(opts.siteDir, 'page2/index.md'), 'utf8');
  const page10 = await readFile(join(opts.siteDir, 'page10/index.md'), 'utf8');
  assert.ok(page2.includes('Page two writing.'));
  assert.ok(page2.includes('- **Canonical:** https://www.gregosuri.com/page2/'));
  assert.ok(page10.includes('Page ten writing.'));
  assert.ok(page10.includes('- **Canonical:** https://www.gregosuri.com/page10/'));
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
