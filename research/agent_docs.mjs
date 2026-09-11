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
