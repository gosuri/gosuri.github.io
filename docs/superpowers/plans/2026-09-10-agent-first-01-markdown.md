# Agent-first Site: Markdown Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate faithful markdown strings for every existing page category, compact prediction indexes, and a measured retrieval inventory.

**Architecture:** Keep `research/agent_docs.mjs` pure and dependency-free, reusing the existing front-matter and date helpers. A small, explicitly bounded conversion handles this site's existing Markdown, Liquid highlight blocks, and HTML fragments; the separate delivery plan supplies filesystem reads, writes, and build integration. Generate the homepage twin from the built `<main>` so its recent-post list matches Jekyll's output.

**Tech Stack:** Node.js 20 (CI target; Node.js 22 used for local plan validation), ES modules, Node's built-in test runner, existing Jekyll source files; no browser code or added package.

---

## Execution record

Implemented and verified locally on 2026-09-10. All tasks below are complete.

- Full-corpus checks preserve all 1,689 quotations, 20 essays, 47 code blocks, and nine external-only pointers, plus About links and built homepage content. The implemented `homeTwin` also accepts an optional `permalink`, defaulting to `/`, for existing Pages pagination. Counts and token budgets are derived from generated content.
- All 54 card/agent tests pass under CI's Node 20.20.2 runtime, and all 26 Python exporter tests pass, with no skips.
- `make preview` completed build, all 1,730 social cards, agent documents, and LAN-bound serving. Local Jekyll 4 emits 1,733 twins because it omits the three Pages pagination routes.
- Desktop/mobile inspection, citation-link placement, JavaScript-disabled navigation, and the existing clipboard behavior pass. The three-fetch home-GPU lookup preserves the quotation, 6 October 2022 date, source URL, and `00:12:25` timestamp.
- Scoped task reviews and the final cross-plan review found no outstanding issues. No push or deployment was performed.

## Scope and order

Read the approved [spec](../specs/2026-09-10-agent-first-site-design.md) before executing. This is plan **01**, followed by [02: generation and delivery](2026-09-10-agent-first-02-delivery.md) and [03: discovery and citation](2026-09-10-agent-first-03-discovery.md). Implement these pure functions first. This plan changes no generated prediction source, design preview, Sass, HTML template, or published artifact.

Current source differs from one illustrative spec detail: there are **20 posts, 9 external-only pointers**, including non-Akash destinations. Derive the behavior from each post's `link` and body, never from those counts or an external-host allowlist. The proposed functions were exercised against all 1,689 predictions, all 20 posts, `about.md`, and the current built homepage while preparing this plan. Those are current observations, not implementation constants.

## File map and shared API

| File | Responsibility |
|---|---|
| Modify `research/card_data.mjs` | Narrowly fix the existing front-matter parser to retain unindented blank lines within literal blocks read CRLF input, and decode the existing exporter's escaped quotes/backslashes. Preserve all other helpers. |
| Modify `research/card_data.test.mjs` | Regressions for actual multiline-quote shapes. |
| Create `research/agent_docs.mjs` | Pure document parsing and markdown generation; no filesystem access. |
| Create `research/agent_docs.test.mjs` | Citation integrity, grouping, content fidelity, URL construction, and dynamic budget tests. |

The delivery plan uses these exact exports:

```text
readDocument(text) -> { fm, body }
siteSettings(configText) -> { url, baseurl, title, description }
canonicalUrl(site, permalink) -> absolute URL
predictionTwin(fm, site) -> markdown
predictionIndex(items, { site, theme = null, year = null }) -> markdown
postTwin({ fm, body, date, permalink }, site) -> markdown
postsIndex(posts, site) -> markdown
pageTwin({ title, body, permalink }, site) -> markdown
homeTwin({ html, site }) -> markdown
llmsIndex({ site, predictions, posts, documents, sources }) -> markdown
```

`items` and `predictions` contain parsed prediction front matter. A post record has `fm`, `body`, ISO `date`, and `permalink`; the driver calls existing `postPermalink()` to derive that permalink. `html` is built `_site/index.html`, not source `index.html`. `sources` is the count string returned by existing `sourceCount()` (or a number). Each document is `{ permalink, markdown, kind }`, where `kind` is `prediction`, `prediction-index`, `theme-index`, `year-index`, `post`, `posts-index`, `page`, or `home`. Inventory input includes every generated twin and excludes `llms.txt` itself, avoiding a circular self-budget. Themes come from predictions; no second theme schema is needed.

All canonical paths end with `/`; homepage is `/`. `site.url` stays the configured serving host, and optional `baseurl` is applied once. The converter handles the current site's tags only and rejects unfamiliar HTML or Liquid, preserving content instead of silently discarding it. Native fenced code, inline code, and Liquid highlight code are protected before markup conversion.

### Task 1: Preserve multiline front-matter quotes

**Files:**
- Modify: `research/card_data.mjs` (`parseFrontMatter` only)
- Modify/test: `research/card_data.test.mjs`

- [x] **Step 1: Write the failing tests.**

Append these three tests to `research/card_data.test.mjs`; its existing imports already provide `test`, `assert`, and `parseFrontMatter`.

````javascript
test('parseFrontMatter preserves real blank lines inside literal blocks', () => {
  const source = '---\r\nquote: |\r\n  First.\r\n\r\n  Third.\r\ncontext: |\r\n  Editorial.\r\n\r\n  More.\r\nempty:\r\n---\r\nbody';
  const fm = parseFrontMatter(source);
  assert.equal(fm.quote, 'First.\n\nThird.');
  assert.equal(fm.context, 'Editorial.\n\nMore.');
  assert.equal(fm.empty, '');
});

test('parseFrontMatter preserves leading blank quote lines without swallowing later fields', () => {
  const fm = parseFrontMatter('---\nquote: |\n\n  Spoken.\n  \n  Again.\ntitle: x\n---\n');
  assert.equal(fm.quote, '\nSpoken.\n\nAgain.');
  assert.equal(fm.title, 'x');
});

test('parseFrontMatter decodes only generated scalar quote and slash escapes', () => {
  const fm = parseFrontMatter(String.raw`---
title: "A \\ path and \"quoted\" title"
---
`);
  assert.equal(fm.title, 'A \\ path and "quoted" title');
});
````

- [x] **Step 2: Confirm the intended failure.**

```bash
node --test --test-name-pattern='parseFrontMatter (preserves|decodes)' research/card_data.test.mjs
```

Expected: FAIL: the existing parser either drops unindented blank lines or cannot parse CRLF input.

- [x] **Step 3: Implement the smallest complete behavior.**

Replace only the existing `parseFrontMatter` function in `research/card_data.mjs` with this implementation. Keep every other export intact.

````javascript
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
````

- [x] **Step 4: Verify the tests pass.**

```bash
node --test research/card_data.test.mjs
```

Expected: PASS: all existing parser/card-data tests plus all three new regressions.

- [x] **Step 5: Commit only this task's files.**

```bash
git add research/card_data.mjs research/card_data.test.mjs
git commit -m "fix: preserve blank lines in front matter blocks"
```

### Task 2: Render citable prediction twins and canonical URLs

**Files:**
- Create: `research/agent_docs.mjs`
- Create/test: `research/agent_docs.test.mjs`

- [x] **Step 1: Write the failing tests.**

Create `research/agent_docs.test.mjs` with this content.

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readDocument, siteSettings, canonicalUrl, predictionTwin } from './agent_docs.mjs';

const site = { url: 'https://www.gregosuri.com', baseurl: '', title: 'Greg Osuri', description: 'I build things.' };
const prediction = {
  title: 'Machines will schedule other machines', date: '2022-11-03',
  theme: 'ai-agents', theme_title: 'AI Agents', theme_page: '/predictions/ai-agents/',
  slug_id: '2022-11-03-machines-will-schedule-other-machines-rya4',
  permalink: '/predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4/',
  source: 'Akash Weekly - November 2nd 2022 (Akash Network)',
  source_url: 'https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s', timestamp: '00:10:54',
  quote: 'Machines will schedule other machines.\n\nPermissionless compute.',
  context: 'An editorial note.',
};

test('readDocument separates body and literal front matter', () => {
  const result = readDocument('---\ntitle: "A title"\nquote: |\n  first\n\n  third\n---\n\nBody\n');
  assert.equal(result.fm.quote, 'first\n\nthird');
  assert.equal(result.body, '\nBody\n');
  assert.throws(() => readDocument('body only'), /front matter/);
});

test('siteSettings handles actual quoted comments and folded description', () => {
  const config = 'title: Greg Osuri\nurl: "https://www.gregosuri.com" # matches CNAME\nbaseurl: "/preview/" # optional\ndescription: > # folded\n  I build things\n  for people\nnext: value\n';
  assert.deepEqual(siteSettings(config), { url: site.url, baseurl: '/preview', title: 'Greg Osuri', description: 'I build things for people' });
  assert.equal(siteSettings('url: "https://example.com/"\nbaseurl: "" # comment\n').baseurl, '');
  assert.throws(() => siteSettings('url: relative\n'), /absolute origin/);
});

test('canonicalUrl preserves the configured host and optional baseurl', () => {
  assert.equal(canonicalUrl(site, '/about/'), 'https://www.gregosuri.com/about/');
  assert.equal(canonicalUrl({ ...site, baseurl: '/preview' }, '/'), 'https://www.gregosuri.com/preview/');
  for (const bad of ['about/', '/about', '/../about/', '/about/?x']) assert.throws(() => canonicalUrl(site, bad), /directory permalink/);
});

test('predictionTwin separates the quote from annotation and formats the known citation', () => {
  const md = predictionTwin(prediction, site);
  assert.ok(md.includes('> Machines will schedule other machines.\n>\n> Permissionless compute.'));
  assert.ok(md.includes('## Context — site annotation, not spoken\n\nAn editorial note.'));
  assert.ok(md.includes('- **Cite as:** Greg Osuri, "Machines will schedule other machines," Akash Weekly - November 2nd 2022 (Akash Network), 3 Nov 2022, 00:10:54. https://www.youtube.com/watch?v=XQVGt-fdKPY&t=654s'));
  assert.ok(md.includes(`- **Canonical:** ${site.url}${prediction.permalink}`));
});

test('predictionTwin escapes markdown without rewriting spoken punctuation', () => {
  const md = predictionTwin({ ...prediction, quote: '[literal] *stars* _under_ `code` <tag> & “smart”—dash\n- bullet\n1. numbered\n~~~\n===\n---' }, site);
  assert.ok(md.includes('> \\[literal\\] \\*stars\\* \\_under\\_ \\`code\\` \\<tag\\> &amp; “smart”—dash'));
  assert.ok(md.includes('> \\- bullet\n> 1\\. numbered'));
  assert.ok(md.includes('> \\~\\~\\~\n> \\=\\=\\=\n> \\---'));
});

test('predictionTwin omits missing, empty and whitespace-only context', () => {
  for (const context of [undefined, '', '   \n']) assert.ok(!predictionTwin({ ...prediction, context }, site).includes('## Context'));
});
````

- [x] **Step 2: Confirm the intended failure.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: FAIL: `agent_docs.mjs` does not exist.

- [x] **Step 3: Implement the smallest complete behavior.**

Create `research/agent_docs.mjs` with this content. Quoted text is escaped for Markdown rendering without changing its spoken words; annotation stays in its own section.

````javascript
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
    const quoted = line.match(/^(["'])(.*?)\1(?:\s+#.*)?$/);
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
````

- [x] **Step 4: Verify the tests pass.**

```bash
node --test research/agent_docs.test.mjs research/card_data.test.mjs
```

Expected: PASS: six agent-document tests and all card-data tests.

- [x] **Step 5: Commit only this task's files.**

```bash
git add research/agent_docs.mjs research/agent_docs.test.mjs
git commit -m "feat: render citable prediction markdown"
```

### Task 3: Generate compact prediction and essay indexes

**Files:**
- Modify: `research/agent_docs.mjs`
- Modify/test: `research/agent_docs.test.mjs`

- [x] **Step 1: Write the failing tests.**

Append this import and these tests to `research/agent_docs.test.mjs`. The `site` and `prediction` fixtures are defined in Task 2.

````javascript
import { predictionIndex, postsIndex } from './agent_docs.mjs';

test('predictionIndex groups themes then sorts dates and IDs, without copying quotes', () => {
  const entries = [
    { ...prediction, date: '2024-01-01', slug_id: '2024-01-01-z', title: 'Latest' },
    { ...prediction, theme: 'z-cloud', theme_title: 'Cloud', date: '2021-01-01', slug_id: '2021-01-01-a', title: 'Cloud title' },
    { ...prediction, date: '2022-11-03', slug_id: '2022-11-03-b', title: 'Second' },
    { ...prediction, date: '2022-11-03', slug_id: '2022-11-03-a', title: 'First' },
  ];
  const copy = structuredClone(entries);
  const md = predictionIndex(entries, { site });
  assert.ok(md.startsWith('# All 4 predictions\n'));
  assert.ok(md.indexOf('## ai-agents') < md.indexOf('## z-cloud'));
  assert.ok(md.indexOf('2022-11-03-a — First') < md.indexOf('2022-11-03-b — Second'));
  assert.ok(md.indexOf('2022-11-03-b — Second') < md.indexOf('2024-01-01-z — Latest'));
  assert.equal(md.match(/https:\/\//g).length, 1);
  assert.ok(!md.includes(prediction.quote));
  assert.deepEqual(entries, copy);
});

test('predictionIndex scopes theme and year, with measured year counts', () => {
  const entries = [prediction, { ...prediction, date: '2024-01-01', slug_id: '2024-01-01-x', title: 'New title' }];
  assert.ok(predictionIndex(entries, { site, theme: 'ai-agents' }).includes('Years: 2022 (1); 2024 (1)'));
  const year = predictionIndex(entries, { site, theme: 'ai-agents', year: '2024' });
  assert.ok(year.startsWith('# AI Agents — 2024 1 predictions'));
  assert.ok(!year.includes(prediction.slug_id));
  assert.ok(predictionIndex([], { site }).startsWith('# All 0 predictions'));
});

test('postsIndex is newest-first and points external essays to a nonempty local twin', () => {
  const posts = [
    { fm: { title: 'Local' }, body: 'Body', date: '2011-01-01', permalink: '/2011/01/01/local/' },
    { fm: { title: 'External', link: 'https://example.com/essay/' }, body: '', date: '2020-01-01', permalink: '/2020/01/01/external/' },
  ];
  const md = postsIndex(posts, site);
  assert.ok(md.indexOf('2020-01-01 —') < md.indexOf('2011-01-01 —'));
  assert.ok(md.includes('[External](https://www.gregosuri.com/2020/01/01/external/index.md) — Original: https://example.com/essay/'));
});
````

- [x] **Step 2: Confirm the intended failure.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: FAIL: `predictionIndex` and `postsIndex` are not exported.

- [x] **Step 3: Implement the smallest complete behavior.**

Append these exports to `research/agent_docs.mjs`. Indices contain one date-first ID/title entry per prediction, not full quote text.

````javascript
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
````

- [x] **Step 4: Verify the tests pass.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: PASS: nine agent-document tests.

- [x] **Step 5: Commit only this task's files.**

```bash
git add research/agent_docs.mjs research/agent_docs.test.mjs
git commit -m "feat: add compact prediction and essay indexes"
```

### Task 4: Keep essay, page, and homepage content faithful

**Files:**
- Modify: `research/agent_docs.mjs`
- Modify/test: `research/agent_docs.test.mjs`

- [x] **Step 1: Write the failing tests.**

Append this import and these tests to `research/agent_docs.test.mjs`. They cover the actual troublesome source constructs: `endhighlight sh`, command placeholders, inline code, iframes, mixed HTML, `site.baseurl`, and the built homepage.

````javascript
import { postTwin, pageTwin, homeTwin } from './agent_docs.mjs';

test('postTwin gives external-only essays an explicit pointer, date and canonical URL', () => {
  const md = postTwin({ fm: { title: 'External essay', link: 'https://example.com/essay/' }, body: '\n', date: '2020-01-02', permalink: '/2020/01/02/external/' }, site);
  assert.ok(md.includes('- **Date:** 2020-01-02'));
  assert.ok(md.includes('- **Canonical:** https://www.gregosuri.com/2020/01/02/external/'));
  assert.ok(md.includes('published externally; no local body is available.'));
  assert.ok(md.includes('Original: https://example.com/essay/'));
});

test('postTwin converts both Liquid highlight terminators and preserves code literals', () => {
  const code = 'usage: terraform <command> [<args>]\necho "{{ literal }} &amp;"\n';
  for (const end of ['{% endhighlight %}', '{% endhighlight sh%}']) {
    const body = ['Intro with `<return>`.', '', '{% highlight sh%}', code + end, '', '~~~text', '<literal> {{ preserved }} &amp;', '~~~', '', '- parent', '  - child'].join('\n');
    const md = postTwin({ fm: { title: 'Code' }, body, date: '2015-01-01', permalink: '/2015/01/01/code/' }, site);
    assert.ok(md.includes('```sh\n' + code + '```'));
    assert.ok(md.includes('~~~text\n<literal> {{ preserved }} &amp;\n~~~'));
    assert.ok(md.includes('`<return>`'));
    assert.ok(md.includes('- parent\n  - child'));
    assert.ok(!md.includes('{%'));
  }
});

test('postTwin replaces iframes with links and preserves surrounding writing', () => {
  const body = 'Before.\n\n<center><iframe src="http://www.youtube.com/embed/X1PNp_YggAA" allowfullscreen></iframe></center>\n<br/>\nAfter.';
  const md = postTwin({ fm: { title: 'Video' }, body, date: '2016-11-23', permalink: '/2016/11/23/video/' }, site);
  assert.ok(md.includes('Before.'));
  assert.ok(md.includes('[Embedded video](http://www.youtube.com/embed/X1PNp_YggAA)'));
  assert.ok(md.includes('After.'));
  assert.ok(!md.includes('<iframe'));
});

test('pageTwin retains mixed markdown and HTML about content, dates and destinations', () => {
  const body = 'Intro **emphasis**.\n\n### Selected\n\n<ul class="row-list">\n<li><time datetime="2025-05-21">May 2025</time> <a href="https://example.com/testimony?a=1&amp;b=2">Testimony</a> <span>House &amp; Committee</span></li>\n</ul>\n\n[Predictions]({{ "/predictions/" | prepend: site.baseurl }})';
  const md = pageTwin({ title: 'About', body, permalink: '/about/' }, { ...site, baseurl: '/preview' });
  assert.ok(md.includes('Intro **emphasis**.'));
  assert.ok(md.includes('- May 2025 [Testimony](https://example.com/testimony?a=1&b=2) House & Committee'));
  assert.ok(md.includes('[Predictions](/preview/predictions/)'));
  assert.ok(!md.includes('<li'));
  assert.ok(!md.includes('{{'));
});

test('homeTwin uses the built main content, including actual recent writing', () => {
  const html = '<header>Do not include nav</header><main class="page-content"><p>Intro.</p><section><h2>Predictions</h2><blockquote><p>“Home GPUs.” — <a href="https://example.com/watch?t=1&amp;x=2">00:00:01</a></p></blockquote><p>Podcast · 2023</p></section><section><h2>Writing</h2><ul><li><time>Feb 2020</time> <a href="/2020/02/01/essay/">A Founder&#39;s Essay</a></li></ul></section></main><footer>Do not include footer</footer>';
  const md = homeTwin({ html, site });
  assert.ok(md.startsWith('# Greg Osuri\n'));
  assert.ok(md.includes('> “Home GPUs.” — [00:00:01](https://example.com/watch?t=1&x=2)'));
  assert.ok(md.includes("Feb 2020 [A Founder's Essay](https://www.gregosuri.com/2020/02/01/essay/)"));
  assert.ok(md.includes('Podcast · 2023'));
  assert.ok(!md.includes('Do not include'));
  assert.throws(() => homeTwin({ html: '<p>Unbuilt</p>', site }), /missing <main>/);
});

test('unrecognized Liquid and HTML fail instead of silently dropping content', () => {
  for (const body of ['{% include secret.html %}', '<table><tr><td>Text</td></tr></table>']) {
    assert.throws(() => pageTwin({ title: 'Future', body, permalink: '/future/' }, site), /Unsupported/);
  }
});
````

- [x] **Step 2: Confirm the intended failure.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: FAIL: `postTwin`, `pageTwin`, and `homeTwin` are not exported.

- [x] **Step 3: Implement the smallest complete behavior.**

Append this bounded converter and the public exports to `research/agent_docs.mjs`. Do not add a generic HTML/Markdown library, dependency, browser script, or a second post renderer.

````javascript
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
````

- [x] **Step 4: Verify the tests pass.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: PASS: fifteen agent-document tests. Code literals retain their markup-like bytes and the homepage excludes header/footer content.

- [x] **Step 5: Commit only this task's files.**

```bash
git add research/agent_docs.mjs research/agent_docs.test.mjs
git commit -m "feat: render faithful essay and page twins"
```

### Task 5: Build a measured inventory without duplicating the archive

**Files:**
- Modify: `research/agent_docs.mjs`
- Modify/test: `research/agent_docs.test.mjs`

- [x] **Step 1: Write the failing tests.**

Append this import and these tests to `research/agent_docs.test.mjs`.

````javascript
import { llmsIndex } from './agent_docs.mjs';

test('llmsIndex measures dynamic file counts and UTF-8 budgets without listing each quote', () => {
  const documents = [
    { permalink: '/', markdown: '# Home\n', kind: 'home' },
    { permalink: '/predictions/', markdown: '12345', kind: 'prediction-index' },
    { permalink: '/predictions/ai-agents/', markdown: 'ééé', kind: 'theme-index' },
    { permalink: '/predictions/ai-agents/2022/', markdown: '123456789', kind: 'year-index' },
    { permalink: prediction.permalink, markdown: '12345678', kind: 'prediction' },
    { permalink: '/citing/', markdown: '# Citing\n', kind: 'page' },
  ];
  const md = llmsIndex({ site, predictions: [prediction], posts: [], documents, sources: '2' });
  assert.ok(md.includes('1 predictions from 2 talks and podcasts; 0 essays; 6 markdown twins.'));
  assert.ok(md.includes('https://www.gregosuri.com/predictions/index.md — ~2 tokens'));
  assert.ok(md.includes('https://www.gregosuri.com/predictions/ai-agents/index.md — ~2 tokens'));
  assert.ok(md.includes('Prediction leaf twins: 1 files; ~2–2 tokens each.'));
  assert.ok(md.includes('Theme-year indexes: 1 files; ~3–3 tokens each.'));
  assert.ok(md.includes('UTF-8 bytes / 4'));
  assert.ok(md.includes('Citation contract and navigation guide: https://www.gregosuri.com/citing/'));
  assert.ok(!md.includes(prediction.slug_id));
  assert.ok(!md.includes(prediction.quote));
  assert.ok(!md.includes('1,689'));
});

test('llmsIndex handles an empty inventory and does not advertise an absent citing page', () => {
  const md = llmsIndex({ site, predictions: [], posts: [], documents: [], sources: 0 });
  assert.ok(md.includes('0 markdown twins.'));
  assert.ok(md.includes('Prediction leaf twins: 0 files.'));
  assert.ok(!md.includes('/citing/'));
  assert.ok(!md.includes('Infinity'));
});
````

- [x] **Step 2: Confirm the intended failure.**

```bash
node --test research/agent_docs.test.mjs
```

Expected: FAIL: `llmsIndex` is not exported.

- [x] **Step 3: Implement the smallest complete behavior.**

Append this export to `research/agent_docs.mjs`. List the small set of navigation/index URLs, summarize leaf and year files with counts and measured size ranges, and link the authored citation contract when its page exists. Keep authored citation rules out of this generated inventory.

````javascript
export function llmsIndex({ site, predictions, posts, documents, sources }) {
  const estimate = markdown => Math.ceil(Buffer.byteLength(markdown, 'utf8') / 4);
  const number = n => n.toLocaleString('en-US');
  const budget = doc => `~${number(estimate(doc.markdown))} tokens`;
  const range = kind => {
    const docs = documents.filter(doc => doc.kind === kind);
    if (!docs.length) return '0 files';
    const sizes = docs.map(doc => estimate(doc.markdown));
    return `${number(docs.length)} files; ~${number(Math.min(...sizes))}–${number(Math.max(...sizes))} tokens each`;
  };
  const lines = [`# ${oneLine(site.title)}`, '', site.description, '',
    `${number(predictions.length)} predictions from ${number(Number(String(sources).replace(/,/g, '')))} talks and podcasts; ${number(posts.length)} essays; ${number(documents.length)} markdown twins.`, '',
    '## Retrieval', '',
    `1. Choose titles in ${canonicalUrl(site, '/predictions/')}index.md or a theme index below.`,
    '2. Fetch the selected prediction twin for its quote, date, source and timestamp.',
    'Index twins contain titles and IDs only; leaf twins contain full content.', '',
    '## URL rules', '',
    `Canonical prediction: ${canonicalUrl(site, '/predictions/{theme}/{id}/')}`,
    '`id` is the date-first `slug_id` printed in the title index; copy it exactly.',
    'Append `index.md` to a page URL for its markdown twin. Append `card.png` to a prediction, essay, theme or theme-year URL for its social card.',
    `Year index: ${canonicalUrl(site, '/predictions/{theme}/{year}/')}index.md`, '',
    '## Inventory and estimated fetch budgets', '',
    'Estimates are UTF-8 bytes / 4, rounded up; this heuristic is not a tokenizer count.',
    'Budgets below describe individual fetched files. This inventory does not include its own size.', '',
  ];
  const listed = documents.filter(doc => ['home', 'page', 'prediction-index', 'theme-index', 'posts-index'].includes(doc.kind))
    .sort((a, b) => compare(a.permalink, b.permalink));
  for (const doc of listed) lines.push(`- ${canonicalUrl(site, doc.permalink)}index.md — ${budget(doc)}`);
  lines.push('', `- Prediction leaf twins: ${range('prediction')}.`,
    `- Theme-year indexes: ${range('year-index')}.`, `- Essay twins: ${range('post')}.`, '');
  if (documents.some(doc => doc.permalink === '/citing/')) {
    lines.push(`Citation contract and navigation guide: ${canonicalUrl(site, '/citing/')}`, '');
  }
  lines.push('Transcripts and the video catalog are not published.');
  return finish(lines);
}
````

- [x] **Step 4: Verify the tests pass.**

```bash
node --test research/card_data.test.mjs research/card_templates.test.mjs research/agent_docs.test.mjs
```

Expected: PASS: all card-data, card-template, and seventeen agent-document tests.

- [x] **Step 5: Commit only this task's files.**

```bash
git add research/agent_docs.mjs research/agent_docs.test.mjs
git commit -m "feat: generate measured agent retrieval inventory"
```

## Verification and handoff

The delivery plan must call these functions for every emitted HTML page category, validate its inputs and destinations, write only under its output directory, and run unconditionally after the optional card renderer. It also connects `make test`, `make agents`, and `make preview`; those changes belong to plan 02.

Budget text is intentionally computed, not copied from the spec's examples. Against the current corpus, the candidate flat index is approximately **52,446 tokens** and the largest theme index **14,162 tokens** under the explicitly labeled UTF-8-bytes/4 heuristic. The spec's approximately 40k/5k figures are illustrative; never present either measurement as a tokenizer-exact count. `/llms.txt` remains compact by listing navigation surfaces and summarizing per-item file families.

Author self-review completed: the plan covers multiline quotes and context; exact citation metadata; empty annotation; Markdown escaping; deterministic theme/year ordering; external-only posts; complete local essays; known Liquid/HTML conversion; homepage content; canonical/base URLs; dynamic inventory and budget sizes. The shared parser retains its existing card-data callers. All proposed pure code and tests were exercised in a disposable directory; 34 pure/parser tests passed and the source-corpus conversion succeeded. No implementation files were changed while writing this plan.
