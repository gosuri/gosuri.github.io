// Integration test for the parseFrontMatter -> themeStats -> themeCard chain,
// exercised against real files on disk instead of hand-built fixtures.
//
// The field names that hold this chain together are inverted between the two
// file types it joins:
//   predictions/*.md (theme pages)        theme = display title, theme_slug = slug
//   _predictions/**/*.md (collection docs) theme = slug, theme_title = display title
// Every unit test elsewhere in this package builds its own fixture objects, so
// a rename on either side would pass all of them while shipping a blank or
// zero-count card in production. This test reads the real local-compute theme
// page and its real collection entries, so a rename here fails for real.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter, themeStats } from './card_data.mjs';
import { themeCard } from './card_templates.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FONTS = { roman: 'ROMAN64', italic: 'ITALIC64' };

test('local-compute theme page renders the real stat line and title', async () => {
  const themeFm = parseFrontMatter(
    await readFile(join(ROOT, 'predictions/local-compute.md'), 'utf8'));
  assert.equal(themeFm.theme, 'Local Compute'); // display title on the theme page
  assert.equal(themeFm.theme_slug, 'local-compute');

  const dir = join(ROOT, '_predictions/local-compute');
  const entries = [];
  for (const name of await readdir(dir)) {
    if (!name.endsWith('.md')) continue;
    entries.push(parseFrontMatter(await readFile(join(dir, name), 'utf8')));
  }

  // Mirrors render_cards.mjs's own filter: a collection entry's `theme` field
  // is the slug, matched against the theme page's `theme_slug`. If either
  // field were renamed, or the join flipped to compare theme to theme, this
  // list would come back empty.
  const items = entries.filter(fm => fm.theme === themeFm.theme_slug);
  assert.equal(items.length, 159); // matches the hand-written standfirst below

  const stats = themeStats(items);
  const html = themeCard({
    title: themeFm.theme,
    soft: 'Theme',
    url: themeFm.permalink,
    ...stats,
  }, FONTS);

  // predictions/local-compute.md's hand-written standfirst reads
  // "_159 statements · 2018–2026_" — the count and year range the card must
  // reproduce from the real files, not a fixture.
  assert.match(html, /<p class="stat">159 statements · 2018–2026<\/p>/);
  // The theme page's display title (themeFm.theme), not the slug, belongs in the h1.
  assert.match(html, /<h1>Local Compute<\/h1>/);
});
