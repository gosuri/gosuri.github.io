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
