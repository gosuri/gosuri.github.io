import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontMatter, formatDate, postPermalink, externalHost } from './card_data.mjs';

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
