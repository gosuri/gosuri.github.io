// Renders one 1200x630 card.png per prediction into _site/.
// Reads the generated collection docs so it needs no Jekyll internals.
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { chromium } from 'playwright';

const ROOT = new URL('..', import.meta.url).pathname;
const COLL = join(ROOT, '_predictions');
const SITE = join(ROOT, '_site');

function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const out = {};
  let key = null;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+): (.*)$/);
    if (kv && kv[2] !== '|') { key = null; out[kv[1]] = kv[2].replace(/^"|"$/g, '').replace(/\\"/g, '"'); }
    else if (kv && kv[2] === '|') { key = kv[1]; out[key] = ''; }
    else if (key && line.startsWith('  ')) { out[key] += (out[key] ? '\n' : '') + line.slice(2); }
  }
  return out;
}

function quoteSize(q) {
  if (q.length <= 120) return 52;
  if (q.length <= 260) return 44;
  return 38;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(fm, fontRoman, fontItalic) {
  const date = new Date(fm.date + 'T00:00:00Z').toLocaleDateString('en-GB',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";font-style:normal;font-weight:200 800;src:url("data:font/woff2;base64,${fontRoman}") format("woff2")}
@font-face{font-family:"Newsreader";font-style:italic;font-weight:200 800;src:url("data:font/woff2;base64,${fontItalic}") format("woff2")}
*{box-sizing:border-box}html,body{margin:0}
.og{width:1200px;height:630px;background:#faf8f4;color:#211f1a;font-family:"Newsreader",Georgia,serif;padding:72px 80px 64px;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden}
.og::before{content:"";position:absolute;left:0;top:0;right:0;height:6px;background:#9c4221}
.meta{display:flex;align-items:baseline;gap:20px;font-size:24px;letter-spacing:.08em;text-transform:uppercase;color:#9c4221;font-weight:520;font-variant-numeric:tabular-nums;margin:0}
.meta .theme{color:#6e6759;font-weight:450}
blockquote{margin:0;align-self:center;font-style:italic;font-weight:340;font-size:${quoteSize(fm.quote)}px;line-height:1.3;letter-spacing:-0.008em;text-indent:-0.42ch;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}
.foot{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid #e4ddd0;padding-top:22px;font-size:24px;color:#6e6759;margin:0}
.foot .name{color:#211f1a;font-weight:520}
.foot .title{font-style:italic;max-width:760px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
</style></head><body><div class="og">
<p class="meta"><time>${esc(date)}</time><span class="theme">${esc(fm.theme_title)}</span></p>
<blockquote>“${esc(fm.quote.replace(/\n/g, ' ').trim())}”</blockquote>
<p class="foot"><span class="name">Greg Osuri</span><span class="title">${esc(fm.title)}</span><span>gregosuri.com</span></p>
</div></body></html>`;
}

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

const roman = await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf.woff2'));
const italic = await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf-italic.woff2'));
let files = await collect(COLL);

const LIMIT = process.env.CARD_LIMIT ? Number(process.env.CARD_LIMIT) : null;
if (LIMIT) files = files.slice(0, LIMIT);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

let n = 0;
for (const f of files) {
  const fm = frontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.permalink) continue;
  const dest = join(SITE, fm.permalink, 'card.png');
  await mkdir(dirname(dest), { recursive: true });
  await page.setContent(html(fm, roman, italic), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.og').screenshot({ path: dest });
  if (++n % 100 === 0) console.log(`rendered ${n}/${files.length}`);
}
await browser.close();
console.log(`rendered ${n} cards`);
