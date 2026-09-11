import test from 'node:test';
import assert from 'node:assert/strict';
import { esc, doc, quoteSize, predictionCard, titleSize, postCard, siteCard, predictionsCard, themeTitleSize, themeCard } from './card_templates.mjs';

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
    speaker: 'Greg Osuri',
  }, FONTS);
  assert.match(html, /<time>3 Nov 2022<\/time>/);
  assert.match(html, /<span class="soft">AI Agents<\/span>/);
  assert.match(html, /they will schedule other machines\./);
  assert.doesNotMatch(html, /\n\s*they will/); // newlines collapsed to spaces
  assert.match(html, /Machines will schedule other machines/);
});

test('predictionCard credits the prediction speaker', () => {
  const html = predictionCard({
    date: '2022-11-03', theme_title: 'AI Agents',
    title: 'Machines will schedule other machines', quote: 'A claim.',
    speaker: 'Sunny Aggarwal', speaker_status: 'attributed',
  }, FONTS);
  assert.match(html, /<span class="name">Sunny Aggarwal<\/span>/);
  assert.doesNotMatch(html, /<span class="name">Greg Osuri<\/span>/);
});

test('predictionCard keeps uncertain attribution neutral', () => {
  const html = predictionCard({
    date: '2022-11-03', theme_title: 'AI Agents', title: 'A claim',
    quote: 'A claim.', speaker: 'Unknown', speaker_status: 'uncertain',
  }, FONTS);
  assert.match(html, /<span class="name">Unknown<\/span>/);
  assert.doesNotMatch(html, /<span class="name">Greg Osuri<\/span>/);
});

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
