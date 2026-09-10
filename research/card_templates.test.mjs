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
