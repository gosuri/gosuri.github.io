import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontMatter, formatDate, postPermalink, externalHost, sourceCount, sentence, configDescription, themeStats } from './card_data.mjs';

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

test('parseFrontMatter preserves real blank lines inside literal blocks', () => {
  const source = '---\r\nquote: |\r\n  First.\r\n\r\n  Third.\r\ncontext: |\r\n  Editorial.\r\n\r\n  More.\r\nempty:\r\n---\r\nbody';
  const fm = parseFrontMatter(source);
  assert.equal(fm.quote, 'First.\n\nThird.');
  assert.equal(fm.context, 'Editorial.\n\nMore.');
  assert.equal(fm.empty, '');
});

test('parseFrontMatter preserves leading blank quote lines without swallowing later fields', () => {
  const fm = parseFrontMatter('---\nquote: |\n\n  Spoken.\n  \n  Again.\ntitle: x\n---\n');
  assert.equal(fm.quote, '\nSpoken.\n\nAgain.');
  assert.equal(fm.title, 'x');
});

test('parseFrontMatter decodes only generated scalar quote and slash escapes', () => {
  const fm = parseFrontMatter(String.raw`---
title: "A \\ path and \"quoted\" title"
---
`);
  assert.equal(fm.title, 'A \\ path and "quoted" title');
});

test('parseFrontMatter returns null without front matter', () => {
  assert.equal(parseFrontMatter('no front matter here'), null);
});

test('formatDate renders day-month-year in UTC', () => {
  assert.equal(formatDate('2019-10-07'), '7 Oct 2019');
  assert.equal(formatDate('2022-11-03'), '3 Nov 2022');
});

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

test('configDescription returns null when the description field is absent', () => {
  assert.equal(configDescription('title: Greg Osuri\nbaseurl: ""\n'), null);
});

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
