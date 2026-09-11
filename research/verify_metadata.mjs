// Verify the actual Jekyll output, including externally canonical essays and
// prediction attribution. No DOM package or local Jekyll version assumption.
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { parseFrontMatter, postPermalink, postDate } from './card_data.mjs';
import { siteSettings } from './agent_docs.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

async function files(dir, pattern) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await files(path, pattern));
    else if (pattern.test(entry.name)) result.push(path);
  }
  return result.sort();
}

function unescapeHtml(text) {
  return text.replace(/&(?:quot|apos|amp|lt|gt|#39|#x27);/g, entity =>
    ({ '&quot;': '"', '&apos;': "'", '&#39;': "'", '&#x27;': "'", '&amp;': '&', '&lt;': '<', '&gt;': '>' })[entity]);
}

function attribute(html, name, value, target = 'content') {
  for (const match of html.matchAll(/<(?:meta|link)\b[^>]*>/g)) {
    const attrs = Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)]
      .map(([, key, val]) => [key, unescapeHtml(val)]));
    if (attrs[name] === value) return attrs[target];
  }
}

export async function verifyMetadata({ root = ROOT, siteDir = join(root, '_site') } = {}) {
  const site = siteSettings(await readFile(join(root, '_config.yml'), 'utf8'));
  const origin = site.url + site.baseurl;
  const predictions = new Map();
  for (const path of await files(join(root, '_predictions'), /\.md$/)) {
    const fm = parseFrontMatter(await readFile(path, 'utf8'));
    predictions.set(fm.permalink, fm);
  }
  const posts = new Map();
  for (const path of await files(join(root, '_posts'), /\.(md|markdown)$/)) {
    const fm = parseFrontMatter(await readFile(path, 'utf8'));
    const basename = path.split(sep).at(-1);
    posts.set(postPermalink(basename, fm), { ...fm, date: postDate(basename, fm) });
  }
  let pages = 0;
  const seen = new Set();
  for (const path of await files(siteDir, /\.html$/)) {
    const html = await readFile(path, 'utf8');
    if (!/<main\b[^>]*\bclass="[^"]*\bpage-content\b/.test(html)) continue;
    const route = '/' + relative(siteDir, path).split(sep).join('/').replace(/index\.html$/, '');
    try {
      const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
      assert.equal(blocks.length, 1, 'expected one JSON-LD graph');
      assert.ok(!blocks[0][1].includes('<'), 'JSON-LD contains unescaped HTML markup');
      const data = JSON.parse(blocks[0][1]);
      assert.equal(data['@context'], 'https://schema.org');
      const graph = data['@graph'];
      assert.ok(Array.isArray(graph), 'missing graph');
      const typed = type => graph.find(node => node['@type'] === type);
      const person = graph.find(node => node['@id'] === origin + '/#person');
      assert.equal(person?.name, 'Greg Osuri', 'missing stable person identity');
      assert.equal(typed('WebSite')?.publisher?.['@id'], person['@id']);
      const description = attribute(html, 'name', 'description');
      assert.ok(description && description.length > 20, 'missing useful description');
      assert.notEqual(description, site.description, 'description fell back to site tagline');
      assert.equal(attribute(html, 'property', 'og:description'), description);
      assert.equal(attribute(html, 'name', 'twitter:description'), description);
      const localUrl = origin + route;
      const webpage = graph.find(node => node['@id'] === localUrl + '#webpage');
      assert.equal(webpage?.description, description, 'schema/meta description drift');
      if (route === '/about/') assert.equal(webpage?.mainEntity?.['@id'], person['@id']);
      const title = unescapeHtml(html.match(/<title>([^<]*)<\/title>/)?.[1] || '');
      assert.ok(title.length > site.title.length, 'undifferentiated page title');
      const prediction = predictions.get(route);
      const post = posts.get(route);
      const canonical = attribute(html, 'rel', 'canonical', 'href');
      assert.equal(canonical, post?.canonical_url || localUrl, 'canonical URL changed');
      if (prediction) {
        const quote = typed('Quotation');
        assert.ok(quote, 'missing quotation');
        assert.equal(quote.text, prediction.quote.trim(), 'quotation altered or mixed with annotation');
        assert.equal(quote.isBasedOn, prediction.source_url, 'source timestamp lost');
        assert.equal(quote.dateCreated, prediction.date);
        if (prediction.speaker_status === 'attributed') {
          assert.equal(quote.creator?.name, prediction.speaker, 'wrong creator');
          assert.ok(description.includes(prediction.speaker), 'description missing speaker');
          if (prediction.speaker !== 'Greg Osuri') assert.notEqual(quote.creator?.['@id'], person['@id']);
        } else {
          assert.equal(prediction.speaker_status, 'uncertain', 'unrecognized attribution');
          assert.equal(quote.creator, undefined, 'uncertain speaker given definitive creator');
          assert.match(description, /uncertain/i);
        }
      } else if (post) {
        const article = typed('BlogPosting');
        assert.equal(article?.url, canonical);
        assert.equal(article?.mainEntityOfPage, canonical);
        assert.equal(article?.datePublished?.slice(0, 10), post.date.slice(0, 10));
        assert.equal(article?.author?.['@id'], person['@id']);
        assert.equal(attribute(html, 'property', 'article:published_time')?.slice(0, 10), post.date.slice(0, 10));
        const modified = post.last_modified_at;
        if (!modified) {
          assert.equal(article?.dateModified, undefined, 'invented modification date');
          assert.equal(attribute(html, 'property', 'article:modified_time'), undefined);
        }
      } else if (route.startsWith('/predictions/')) {
        assert.equal(webpage['@type'], 'CollectionPage');
        assert.ok(typed('BreadcrumbList'), 'missing breadcrumbs');
      }
      seen.add(route);
      pages++;
    } catch (error) {
      throw new Error(`${route}: ${error.message}`, { cause: error });
    }
  }
  for (const route of [...predictions.keys(), ...posts.keys(), '/', '/about/', '/citing/', '/posts/']) {
    assert.ok(seen.has(route), `Missing built page: ${route}`);
  }
  return { pages, predictions: predictions.size, posts: posts.size };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { 'site-dir': { type: 'string' } }, strict: true });
  const result = await verifyMetadata({ siteDir: values['site-dir'] || join(ROOT, '_site') });
  console.log(`metadata: ${result.pages} pages, ${result.predictions} predictions, ${result.posts} essays verified`);
}
