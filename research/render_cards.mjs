// Renders the site's 1200x630 social cards into _site/. Reads the generated
// collection docs and page front matter, so it needs no Jekyll internals.
// Pure logic lives in card_data.mjs / card_templates.mjs; this file is the
// filesystem + Playwright driver.
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { chromium } from 'playwright';
import { parseFrontMatter, postPermalink, externalHost } from './card_data.mjs';
import { predictionCard, postCard } from './card_templates.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const COLL = join(ROOT, '_predictions');
const POSTS = join(ROOT, '_posts');
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

let n = 0;
for (const f of files) {
  const fm = parseFrontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.permalink) continue;
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
    date: name.slice(0, 10),
    host: externalHost(fm.link),
  }, fonts), join(SITE, url, 'card.png'));
  posts++;
}
console.log(`posts: ${posts}`);

await browser.close();
