// Pure derivations for the social card renderer: no fs, no Playwright, so
// every export here is unit-testable with `node --test`. The front-matter
// parser is deliberately minimal — the collection is machine-generated, so it
// only ever has to handle scalars and `|` block scalars.

export function parseFrontMatter(text) {
  const m = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!m) return null;
  const out = {};
  const blocks = new Map();
  let key = null;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):(?: (.*))?$/);
    if (kv) {
      key = null;
      const value = kv[2] ?? '';
      if (value === '|') {
        key = kv[1];
        blocks.set(key, []);
      } else {
        out[kv[1]] = value.startsWith('"') && value.endsWith('"')
          ? value.slice(1, -1).replace(/\\(["\\])/g, '$1') : value;
      }
    } else if (key && (line.startsWith('  ') || line.trim() === '')) {
      blocks.get(key).push(line.startsWith('  ') ? line.slice(2) : '');
    } else key = null;
  }
  for (const [name, lines] of blocks) out[name] = lines.join('\n').replace(/\n+$/, '');
  return out;
}

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function postDate(basename, fm = {}) {
  return fm.date || basename.slice(0, 10);
}

// `permalink: pretty` in _config.yml expands to /:categories/:year/:month/:day/:title/.
// Explicit permalinks preserve existing URLs when publication dates are corrected.
// Otherwise derive the URL from the filename; reject categories or a custom slug.
export function postPermalink(basename, fm = {}) {
  if (fm.permalink) return fm.permalink;
  if (fm.categories || fm.category || fm.slug) return null;
  const m = basename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.(md|markdown|html)$/);
  return m ? `/${m[1]}/${m[2]}/${m[3]}/${m[4]}/` : null;
}

export function externalHost(link) {
  if (!link) return null;
  return new URL(link).hostname.replace(/^www\./, '');
}

// "_1,689 statements from 240 videos and podcasts, 2015–2026._" — the source
// count is prose in predictions/index.md, so read it rather than hardcode it.
export function sourceCount(indexMd) {
  const m = indexMd.match(/from\s+([\d,]+)\s+videos and podcasts/i);
  return m ? m[1] : null;
}

export function sentence(s) {
  const t = s.trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

// site.description is a folded (`>`) block; the parser in parseFrontMatter only
// handles `|`, and pulling in a YAML dependency for one field is not worth it.
export function configDescription(configYml) {
  const m = configYml.match(/^description: >[^\n]*\n((?:[ \t]+\S.*\n)+)/m);
  return m ? m[1].trim().replace(/\s+/g, ' ') : null;
}

// Same numbers the theme standfirst quotes: "159 statements · 2018–2026", and
// the newest entry's title. Theme pages sort by slug_id, which is date-first.
export function themeStats(items) {
  if (!items.length) return { count: 0, firstYear: '', lastYear: '', latestTitle: '' };
  const years = items.map(i => String(i.date).slice(0, 4)).sort();
  const newest = [...items].sort((a, b) => (a.slug_id < b.slug_id ? -1 : a.slug_id > b.slug_id ? 1 : 0)).at(-1);
  return {
    count: items.length,
    firstYear: years[0],
    lastYear: years.at(-1),
    latestTitle: newest.title,
  };
}
