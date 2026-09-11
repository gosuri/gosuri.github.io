// Post-build agent documents. No browser dependencies and no writes to source.
import { readFile, readdir, mkdir, writeFile, access } from 'node:fs/promises';
import { resolve, join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { postDate, postPermalink, sourceCount } from './card_data.mjs';
import {
  readDocument, siteSettings, predictionTwin, predictionIndex, postTwin,
  postsIndex, pageTwin, homeTwin, llmsIndex,
} from './agent_docs.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

async function collect(dir, extension) {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) paths.push(...await collect(path, extension));
    else if (entry.isFile() && extension.test(entry.name)) paths.push(path);
  }
  return paths.sort();
}

async function exists(path) {
  try { await access(path); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

function destination(siteDir, permalink, name) {
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(permalink)) {
    throw new Error(`Unsafe directory permalink: ${permalink}`);
  }
  return join(siteDir, permalink.slice(1), name);
}

async function document(path) {
  const result = readDocument(await readFile(path, 'utf8'));
  if (!result.fm) throw new Error(`Missing front matter: ${path}`);
  return result;
}

export async function renderAgents({ root = ROOT, siteDir = join(root, '_site') } = {}) {
  root = resolve(root);
  siteDir = resolve(siteDir);
  if (siteDir === root) throw new Error('Build destination must differ from source root');
  if (!await exists(join(siteDir, 'index.html'))) {
    throw new Error(`Missing built HTML: ${siteDir}/index.html; run Jekyll first`);
  }
  const site = siteSettings(await readFile(join(root, '_config.yml'), 'utf8'));
  const documents = [];
  const permalinks = new Set();

  function add(permalink, markdown, kind) {
    destination(siteDir, permalink, 'index.md');
    if (permalinks.has(permalink)) throw new Error(`Duplicate twin: ${permalink}`);
    if (typeof markdown !== 'string' || !markdown.trim()) {
      throw new Error(`Empty markdown twin: ${permalink}`);
    }
    permalinks.add(permalink);
    documents.push({ permalink, markdown, kind });
  }

  const predictions = [];
  for (const path of await collect(join(root, '_predictions'), /\.md$/)) {
    const { fm } = await document(path);
    destination(siteDir, fm.permalink, 'index.md');
    predictions.push(fm);
    add(fm.permalink, predictionTwin(fm, site), 'prediction');
  }
  if (!predictions.length) throw new Error('No predictions found');

  for (const path of await collect(join(root, 'predictions'), /\.md$/)) {
    const { fm } = await document(path);
    if (fm.permalink === '/predictions/') {
      add(fm.permalink, predictionIndex(predictions, { site }), 'prediction-index');
      continue;
    }
    const match = fm.permalink?.match(/^\/predictions\/([a-z0-9-]+)\/(?:(\d{4})\/)?$/);
    if (!match) throw new Error(`Unsupported prediction index: ${path}`);
    const [, theme, year] = match;
    const items = predictions.filter(p => p.theme === theme && (!year || String(p.year) === year));
    if (!items.length) throw new Error(`Empty prediction index: ${fm.permalink}`);
    add(fm.permalink, predictionIndex(predictions, { site, theme, year: year || null }),
      year ? 'year-index' : 'theme-index');
  }

  const posts = [];
  for (const path of await collect(join(root, '_posts'), /\.(md|markdown)$/)) {
    const { fm, body } = await document(path);
    const basename = path.split(sep).at(-1);
    const permalink = postPermalink(basename, fm);
    if (!permalink) throw new Error(`Cannot derive post permalink: ${path}`);
    const post = { fm, body, date: postDate(basename, fm), permalink };
    posts.push(post);
    add(permalink, postTwin(post, site), 'post');
  }
  add('/posts/', postsIndex(posts, site), 'posts-index');

  for (const filename of ['about.md', 'citing.md']) {
    const path = join(root, filename);
    if (filename === 'citing.md' && !await exists(path)) continue;
    const { fm, body } = await document(path);
    add(fm.permalink, pageTwin({ title: fm.title, body, permalink: fm.permalink }, site), 'page');
  }
  add('/', homeTwin({ html: await readFile(join(siteDir, 'index.html'), 'utf8'), site }), 'home');

  // Jekyll 3.10 can emit paginated homepage routes that local Jekyll 4 omits.
  // They are the same published homepage content, but each route needs its own
  // markdown twin and canonical URL.
  for (const path of await collect(siteDir, /\.html$/)) {
    const route = '/' + relative(siteDir, path).split(sep).join('/').replace(/index\.html$/, '');
    const page = route.match(/^\/page([1-9]\d*)\/$/);
    if (!page || Number(page[1]) < 2) continue;
    const html = await readFile(path, 'utf8');
    add(route, homeTwin({ html, site, permalink: route }), 'page');
  }

  // Validate everything before starting writes: no successful-looking partial inventory.
  for (const doc of documents) {
    const html = destination(siteDir, doc.permalink, 'index.html');
    if (!await exists(html)) throw new Error(`Missing built HTML: ${html}; rebuild Jekyll first`);
  }
  for (const path of await collect(siteDir, /\.html$/)) {
    const html = await readFile(path, 'utf8');
    if (!/<main\b[^>]*\bclass=["'][^"']*\bpage-content\b/.test(html)) continue;
    const route = '/' + relative(siteDir, path).split(sep).join('/').replace(/index\.html$/, '');
    if (!permalinks.has(route)) throw new Error(`No markdown twin for built page: ${route}`);
  }
  const sources = sourceCount(await readFile(join(root, 'predictions/index.md'), 'utf8'));
  if (!sources) throw new Error('Cannot read source count from predictions/index.md');
  const inventory = llmsIndex({ site, predictions, posts, documents, sources });
  for (const doc of documents) {
    const path = destination(siteDir, doc.permalink, 'index.md');
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, doc.markdown, 'utf8');
  }
  await writeFile(join(siteDir, 'llms.txt'), inventory, 'utf8');
  return { twins: documents.length, predictions: predictions.length, posts: posts.length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { 'site-dir': { type: 'string' } }, strict: true });
  const result = await renderAgents({ siteDir: values['site-dir'] || join(ROOT, '_site') });
  console.log(`agents: ${result.twins} twins, ${result.predictions} predictions, ${result.posts} essays; llms.txt`);
}
