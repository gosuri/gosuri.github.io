import { parseFrontMatter, formatDate, configDescription } from './card_data.mjs';

export function readDocument(text) {
  text = text.replace(/\r\n/g, '\n');
  const fm = parseFrontMatter(text);
  if (!fm) throw new Error('Expected YAML front matter');
  return { fm, body: text.replace(/^---\n[\s\S]*?\n---(?:\n|$)/, '') };
}

export function siteSettings(config) {
  const scalar = key => {
    const line = config.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1];
    if (line === undefined) return '';
    const quoted = line.match(/^(['"])(.*?)\1(?:\s+#.*)?$/);
    return quoted ? quoted[2] : line.replace(/\s+#.*$/, '').trim();
  };
  const url = scalar('url').replace(/\/+$/, '');
  if (!/^https?:\/\/[^/]+$/.test(url)) throw new Error('site.url must be an absolute origin');
  const base = scalar('baseurl').replace(/^\/+|\/+$/g, '');
  return {
    url, baseurl: base ? `/${base}` : '', title: scalar('title'),
    description: configDescription(config) || scalar('description'),
  };
}

export function canonicalUrl(site, permalink) {
  if (!permalink.startsWith('/') || !permalink.endsWith('/') ||
      /[?#\\]/.test(permalink) || permalink.split('/').some(p => p === '.' || p === '..')) {
    throw new Error(`Expected a directory permalink: ${permalink}`);
  }
  return `${site.url}${site.baseurl}${permalink}`;
}

function escapeText(value) {
  return String(value).replace(/&/g, '&amp;').replace(/[\\`*_[\]<>#|~=]/g, '\\$&')
    .replace(/^([+-])(?=\s|\1{2})/gm, '\\$1')
    .replace(/^(\d+)([.)])(?=\s)/gm, '$1\\$2');
}

function oneLine(value) { return escapeText(String(value).replace(/\s+/g, ' ').trim()); }
function compare(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
function finish(lines) { return `${lines.join('\n').trim()}\n`; }

export function predictionTwin(fm, site) {
  const url = canonicalUrl(site, fm.permalink);
  const lines = [
    `# ${oneLine(fm.title)}`, '',
    '- **Speaker:** Greg Osuri',
    `- **Said:** ${fm.date}`,
    `- **Theme:** ${oneLine(fm.theme_title)} — ${canonicalUrl(site, fm.theme_page)}`,
    `- **Source:** ${oneLine(fm.source)}`,
    `- **Watch at:** ${fm.timestamp} — ${fm.source_url}`,
    `- **Canonical:** ${url}`,
    `- **Cite as:** Greg Osuri, "${oneLine(fm.title)}," ${oneLine(fm.source)}, ${formatDate(fm.date)}, ${fm.timestamp}. ${fm.source_url}`,
    '', '## Quote — verbatim', '',
    ...String(fm.quote).split('\n').map(line => line ? `> ${escapeText(line)}` : '>'),
  ];
  if (fm.context?.trim()) lines.push('', '## Context — site annotation, not spoken', '', fm.context.trim());
  return finish(lines);
}

export function predictionIndex(items, { site, theme = null, year = null }) {
  const selected = items.filter(item => (!theme || item.theme === theme) &&
    (!year || String(item.date).slice(0, 4) === String(year)));
  const names = [...new Set(selected.map(item => item.theme))].sort(compare);
  const title = theme ? `${selected[0]?.theme_title || theme}${year ? ` — ${year}` : ''}` : 'All';
  const lines = [
    `# ${oneLine(title)} ${selected.length.toLocaleString('en-US')} predictions`, '',
    `URL for any entry below: ${canonicalUrl(site, '/predictions/{theme}/{id}/')}`,
    'Markdown twin: append `index.md`.',
    'This is a title index. Full quotes and citation details are in individual twins.', '',
  ];
  for (const name of names) {
    const group = selected.filter(item => item.theme === name)
      .sort((a, b) => compare(a.date, b.date) || compare(a.slug_id, b.slug_id));
    const years = [...new Set(group.map(item => String(item.date).slice(0, 4)))].sort(compare);
    lines.push(`## ${name} — ${group.length} statements, ${years[0]}–${years.at(-1)}`, '');
    if (theme) lines.push(`Years: ${years.map(y => `${y} (${group.filter(i => String(i.date).startsWith(y)).length})`).join('; ')}`, '');
    for (const item of group) lines.push(`${item.slug_id} — ${oneLine(item.title)}`);
    lines.push('');
  }
  return finish(lines);
}

export function postsIndex(posts, site) {
  const lines = [`# ${posts.length} essays`, '',
    'Entries link to local markdown twins; external essays identify their original URL.', ''];
  const sorted = [...posts].sort((a, b) => compare(b.date, a.date) || compare(a.permalink, b.permalink));
  for (const post of sorted) {
    let line = `- ${post.date} — [${oneLine(post.fm.title)}](${canonicalUrl(site, post.permalink)}index.md)`;
    if (post.fm.link) line += ` — Original: ${post.fm.link}`;
    lines.push(line);
  }
  return finish(lines);
}

function decodeEntities(text) {
  const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', middot: '·', copy: '©' };
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (all, name) => {
    if (!name.startsWith('#')) return entities[name] ?? all;
    const point = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1));
    return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : all;
  });
}

function attribute(attrs, name) {
  const value = attrs.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'))?.[2];
  return value === undefined ? '' : decodeEntities(value);
}

function destination(url, site) {
  const absolute = new URL(url, `${site.url}${site.baseurl}/`).href;
  return absolute.replace(/[()<>]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

// Only the markup present in this site's source is supported. Unknown Liquid
// or HTML fails so future content cannot silently lose text or destinations.
function contentMarkdown(body, site) {
  const saved = [];
  const hold = text => `\u0000${saved.push(text) - 1}\u0000`;
  let text = body.replace(/\r\n/g, '\n');
  text = text.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, hold);
  text = text.replace(/{%\s*highlight\s+([\w+-]+)\s*%}\n?([\s\S]*?){%\s*endhighlight(?:\s+[\w+-]+)?\s*%}/g,
    (_, language, code) => {
      const longest = Math.max(2, ...[...code.matchAll(/`+/g)].map(match => match[0].length));
      const fence = '`'.repeat(longest + 1);
      return hold(`${fence}${language}\n${code.replace(/\n$/, '')}\n${fence}`);
    });
  text = text.replace(/(`+)[^`\n][\s\S]*?\1/g, hold);
  text = text.replace(/{{\s*(["'])(.*?)\1\s*\|\s*prepend:\s*site\.baseurl\s*}}/g,
    (_, quote, path) => `${site.baseurl}${path}`);
  if (/{[{%]/.test(text)) throw new Error('Unsupported Liquid in markdown source');
  text = text.replace(/<iframe\b([^>]*)>[\s\S]*?<\/iframe>/gi, (_, attrs) => {
    const src = attribute(attrs, 'src');
    if (!src) throw new Error('Embedded video has no src');
    return `[Embedded video](${destination(src, site)})`;
  });
  text = text.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, label) => {
    const href = attribute(attrs, 'href');
    if (!href) throw new Error('Anchor has no href');
    return `[${escapeText(decodeEntities(label))}](${destination(href, site)})`;
  });
  text = text.replace(/<img\b([^>]*)\/?\s*>/gi, (_, attrs) => {
    const src = attribute(attrs, 'src');
    if (!src) throw new Error('Image has no src');
    return `![${escapeText(attribute(attrs, 'alt'))}](${destination(src, site)})`;
  });
  text = text.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, title) => `\n${'#'.repeat(Number(level))} ${title.trim()}\n\n`)
    .replace(/<\/(?:p|section|div|ul|ol)>/gi, '\n\n')
    .replace(/<(?:p|section|div|ul|ol)\b[^>]*>/gi, '')
    .replace(/<li\b[^>]*>/gi, '\n- ').replace(/<\/li>/gi, '\n')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/?(?:time|span|center)\b[^>]*>/gi, '')
    .replace(/<\/?(?:strong|b)>/gi, '**').replace(/<\/?(?:em|i)>/gi, '*');
  text = text.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,
    (_, quote) => `${quote.trim().split('\n').map(line => `> ${line.trim()}`).join('\n')}\n\n`);
  if (/<\/?[A-Za-z][\w-]*(?:\s[^>]*)?\/?\s*>/.test(text)) {
    throw new Error('Unsupported HTML in markdown source');
  }
  text = decodeEntities(text).replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n').trim();
  return text.replace(/\u0000(\d+)\u0000/g, (_, index) => saved[Number(index)]);
}

export function postTwin({ fm, body, date, permalink }, site) {
  const lines = [`# ${oneLine(fm.title)}`, '', `- **Date:** ${date}`,
    `- **Canonical:** ${canonicalUrl(site, permalink)}`, ''];
  if (fm.link && !body.trim()) lines.push('This essay is published externally; no local body is available.', '', `Original: ${fm.link}`);
  else {
    if (fm.link) lines.push(`Original: ${fm.link}`, '');
    lines.push(contentMarkdown(body, site));
  }
  return finish(lines);
}

export function pageTwin({ title, body, permalink }, site) {
  return finish([`# ${oneLine(title)}`, '', `- **Canonical:** ${canonicalUrl(site, permalink)}`, '', contentMarkdown(body, site)]);
}

export function homeTwin({ html, site }) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!main) throw new Error('Built homepage is missing <main>');
  return pageTwin({ title: site.title, body: main[1], permalink: '/' }, site);
}
