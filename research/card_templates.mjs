// The 1200×630 card family. Every card is the same shell — accent rule,
// uppercase meta row, centred body, hairline footer — plus a per-template CSS
// block. Pixel type throughout: these render to PNG once and never reflow.
//
// Mirrors design/social-{site,predictions,theme,post,preview}.html. Change the
// design preview first, then mirror it here (see CLAUDE.md, "Design system sync").

import { formatDate } from './card_data.mjs';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const TOKENS = ':root{--paper:#faf8f4;--ink:#211f1a;--ink-soft:#6e6759;--accent:#9c4221;--rule:#e4ddd0;--font-serif:"Newsreader","Iowan Old Style",Georgia,serif}';

export const SHELL_CSS = `
*{box-sizing:border-box}
html,body{margin:0}
.og{width:1200px;height:630px;background:var(--paper);color:var(--ink);font-family:var(--font-serif);padding:72px 80px 64px;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden;font-feature-settings:"kern"}
.og::before{content:"";position:absolute;left:0;top:0;right:0;height:6px;background:var(--accent)}
.og .meta{margin:0;display:flex;align-items:baseline;gap:20px;font-size:24px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:520;font-variant-numeric:tabular-nums}
.og .meta .soft{color:var(--ink-soft);font-weight:450}
.og .foot{margin:0;display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--rule);padding-top:22px;font-size:24px;color:var(--ink-soft)}
.og .foot .name{color:var(--ink);font-weight:520}
.og .body{align-self:center;margin:0}
`;

export function doc({ css = '', body }, fonts) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";font-style:normal;font-weight:200 800;src:url("data:font/woff2;base64,${fonts.roman}") format("woff2")}
@font-face{font-family:"Newsreader";font-style:italic;font-weight:200 800;src:url("data:font/woff2;base64,${fonts.italic}") format("woff2")}
${TOKENS}${SHELL_CSS}${css}
</style></head><body><div class="og">${body}</div></body></html>`;
}

export function quoteSize(q) {
  if (q.length <= 120) return 52;
  if (q.length <= 260) return 44;
  return 38;
}

export function predictionCard(fm, fonts) {
  const quote = String(fm.quote).replace(/\n/g, ' ').trim();
  return doc({
    css: `.og blockquote{font-style:italic;font-weight:340;font-size:${quoteSize(quote)}px;line-height:1.3;letter-spacing:-0.008em;text-indent:-0.42ch;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}
.og .foot .title{font-style:italic;max-width:760px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`,
    body: `<p class="meta"><time>${esc(formatDate(fm.date))}</time><span class="soft">${esc(fm.theme_title)}</span></p>
<blockquote class="body">“${esc(quote)}”</blockquote>
<p class="foot"><span class="name">Greg Osuri</span><span class="title">${esc(fm.title)}</span><span>gregosuri.com</span></p>`,
  }, fonts);
}
