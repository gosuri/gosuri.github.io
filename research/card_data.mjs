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
