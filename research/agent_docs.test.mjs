import test from 'node:test';
import assert from 'node:assert/strict';
import { readDocument, siteSettings, canonicalUrl, predictionTwin } from './agent_docs.mjs';
import { predictionIndex, postsIndex } from './agent_docs.mjs';

const site = { url: 'https://www.gregosuri.com', baseurl: '', title: 'Greg Osuri', description: 'I build things.' };
const prediction = {
  title: 'Machines will schedule other machines', date: '2022-11-03',
  theme: 'ai-agents', theme_title: 'AI Agents', theme_page: '/predictions/ai-agents/',
  slug_id: '2022-11-03-machines-will-schedule-other-machines-rya4',
  permalink: '/predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4/',
  source: 'Akash Weekly - November 2nd 2022 (Akash Network)',
  source_url: 'https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s', timestamp: '00:10:54',
  quote: 'Machines will schedule other machines.\n\nPermissionless compute.',
  context: 'An editorial note.',
};

test('readDocument separates body and literal front matter', () => {
  const result = readDocument('---\ntitle: "A title"\nquote: |\n  first\n\n  third\n---\n\nBody\n');
  assert.equal(result.fm.quote, 'first\n\nthird');
  assert.equal(result.body, '\nBody\n');
  assert.throws(() => readDocument('body only'), /front matter/);
});

test('siteSettings handles actual quoted comments and folded description', () => {
  const config = 'title: Greg Osuri\nurl: "https://www.gregosuri.com" # matches CNAME\nbaseurl: "/preview/" # optional\ndescription: > # folded\n  I build things\n  for people\nnext: value\n';
  assert.deepEqual(siteSettings(config), { url: site.url, baseurl: '/preview', title: 'Greg Osuri', description: 'I build things for people' });
  assert.equal(siteSettings('url: "https://example.com/"\nbaseurl: "" # comment\n').baseurl, '');
  assert.throws(() => siteSettings('url: relative\n'), /absolute origin/);
});

test('canonicalUrl preserves the configured host and optional baseurl', () => {
  assert.equal(canonicalUrl(site, '/about/'), 'https://www.gregosuri.com/about/');
  assert.equal(canonicalUrl({ ...site, baseurl: '/preview' }, '/'), 'https://www.gregosuri.com/preview/');
  for (const bad of ['about/', '/about', '/../about/', '/about/?x']) assert.throws(() => canonicalUrl(site, bad), /directory permalink/);
});

test('predictionTwin separates the quote from annotation and formats the known citation', () => {
  const md = predictionTwin(prediction, site);
  assert.ok(md.includes('> Machines will schedule other machines.\n>\n> Permissionless compute.'));
  assert.ok(md.includes('## Context — site annotation, not spoken\n\nAn editorial note.'));
  assert.ok(md.includes('- **Cite as:** Greg Osuri, "Machines will schedule other machines," Akash Weekly - November 2nd 2022 (Akash Network), 3 Nov 2022, 00:10:54. https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s'));
  assert.ok(md.includes(`- **Canonical:** ${site.url}${prediction.permalink}`));
});

test('predictionTwin escapes markdown without rewriting spoken punctuation', () => {
  const md = predictionTwin({ ...prediction, quote: '[literal] *stars* _under_ `code` <tag> & “smart”—dash\n- bullet\n1. numbered\n~~~\n===\n---' }, site);
  assert.ok(md.includes('> \\[literal\\] \\*stars\\* \\_under\\_ \\`code\\` \\<tag\\> &amp; “smart”—dash'));
  assert.ok(md.includes('> \\- bullet\n> 1\\. numbered'));
  assert.ok(md.includes('> \\~\\~\\~\n> \\=\\=\\=\n> \\---'));
});

test('predictionTwin omits missing, empty and whitespace-only context', () => {
  for (const context of [undefined, '', '   \n']) assert.ok(!predictionTwin({ ...prediction, context }, site).includes('## Context'));
});

test('predictionIndex groups themes then sorts dates and IDs, without copying quotes', () => {
  const entries = [
    { ...prediction, date: '2024-01-01', slug_id: '2024-01-01-z', title: 'Latest' },
    { ...prediction, theme: 'z-cloud', theme_title: 'Cloud', date: '2021-01-01', slug_id: '2021-01-01-a', title: 'Cloud title' },
    { ...prediction, date: '2022-11-03', slug_id: '2022-11-03-b', title: 'Second' },
    { ...prediction, date: '2022-11-03', slug_id: '2022-11-03-a', title: 'First' },
  ];
  const copy = structuredClone(entries);
  const md = predictionIndex(entries, { site });
  assert.ok(md.startsWith('# All 4 predictions\n'));
  assert.ok(md.indexOf('## ai-agents') < md.indexOf('## z-cloud'));
  assert.ok(md.indexOf('2022-11-03-a — First') < md.indexOf('2022-11-03-b — Second'));
  assert.ok(md.indexOf('2022-11-03-b — Second') < md.indexOf('2024-01-01-z — Latest'));
  assert.equal(md.match(/https:\/\//g).length, 1);
  assert.ok(!md.includes(prediction.quote));
  assert.deepEqual(entries, copy);
});

test('predictionIndex scopes theme and year, with measured year counts', () => {
  const entries = [prediction, { ...prediction, date: '2024-01-01', slug_id: '2024-01-01-x', title: 'New title' }];
  assert.ok(predictionIndex(entries, { site, theme: 'ai-agents' }).includes('Years: 2022 (1); 2024 (1)'));
  const year = predictionIndex(entries, { site, theme: 'ai-agents', year: '2024' });
  assert.ok(year.startsWith('# AI Agents — 2024 1 predictions'));
  assert.ok(!year.includes(prediction.slug_id));
  assert.ok(predictionIndex([], { site }).startsWith('# All 0 predictions'));
});

test('postsIndex is newest-first and points external essays to a nonempty local twin', () => {
  const posts = [
    { fm: { title: 'Local' }, body: 'Body', date: '2011-01-01', permalink: '/2011/01/01/local/' },
    { fm: { title: 'External', link: 'https://example.com/essay/' }, body: '', date: '2020-01-01', permalink: '/2020/01/01/external/' },
  ];
  const md = postsIndex(posts, site);
  assert.ok(md.indexOf('2020-01-01 —') < md.indexOf('2011-01-01 —'));
  assert.ok(md.includes('[External](https://www.gregosuri.com/2020/01/01/external/index.md) — Original: https://example.com/essay/'));
});
