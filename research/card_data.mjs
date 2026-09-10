// Pure derivations for the social card renderer: no fs, no Playwright, so
// every export here is unit-testable with `node --test`. The front-matter
// parser is deliberately minimal — the collection is machine-generated, so it
// only ever has to handle scalars and `|` block scalars.

export function parseFrontMatter(text) {
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

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

// `permalink: pretty` in _config.yml expands to /:categories/:year/:month/:day/:title/.
// None of the current posts set categories, a slug, or their own permalink, so the
// filename is the whole URL — but bail loudly rather than guess if one ever does.
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
