// Renders the site's 1200x630 social cards into _site/. Reads the generated
// collection docs and page front matter, so it needs no Jekyll internals.
// Pure logic lives in card_data.mjs / card_templates.mjs; this file is the
// filesystem + Playwright driver.
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { chromium } from 'playwright';
import { parseFrontMatter, postDate, postPermalink, externalHost, sourceCount, sentence, configDescription, themeStats } from './card_data.mjs';
import { predictionCard, postCard, siteCard, predictionsCard, themeCard } from './card_templates.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const COLL = join(ROOT, '_predictions');
const POSTS = join(ROOT, '_posts');
const PAGES = join(ROOT, 'predictions');
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

let posts = 0;
for (const name of (await readdir(POSTS)).sort()) {
  if (!name.endsWith('.md') && !name.endsWith('.markdown')) continue;
  const fm = parseFrontMatter(await readFile(join(POSTS, name), 'utf8'));
  if (!fm) continue;
  const url = postPermalink(name, fm);
  if (!url) { console.warn(`skipped post (cannot derive permalink): ${name}`); continue; }
  await shoot(postCard({
    title: fm.title.trim(),
    date: postDate(name, fm),
    host: externalHost(fm.original_url || fm.link),
  }, fonts), join(SITE, url, 'card.png'));
  posts++;
}
console.log(`posts: ${posts}`);

if (LIMIT) console.warn('CARD_LIMIT set: static card counts are not real');
const years = all.map(fm => String(fm.date).slice(0, 4)).sort();
if (years.length === 0) throw new Error('render_cards.mjs: no predictions parsed — cannot derive firstYear/lastYear for predictions.png');
const firstYear = years[0];
const lastYear = years[years.length - 1];

const indexMd = await readFile(join(ROOT, 'predictions/index.md'), 'utf8');
const configYml = await readFile(join(ROOT, '_config.yml'), 'utf8');

const sources = sourceCount(indexMd);
if (!sources) throw new Error('render_cards.mjs: sourceCount() found no match in predictions/index.md — did the standfirst wording change?');

const tagline = configDescription(configYml);
if (!tagline) throw new Error('render_cards.mjs: configDescription() found no match in _config.yml — did the description field change shape?');

await shoot(siteCard({ tagline: sentence(tagline) }, fonts),
  join(SITE, 'assets/img/og/site.png'));
await shoot(predictionsCard({
  count: all.length.toLocaleString('en-US'),
  firstYear,
  lastYear,
  sources,
}, fonts), join(SITE, 'assets/img/og/predictions.png'));
console.log('static: 2');

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

await browser.close();
