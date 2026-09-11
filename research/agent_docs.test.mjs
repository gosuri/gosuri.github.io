import test from 'node:test';
import assert from 'node:assert/strict';
import { readDocument, siteSettings, canonicalUrl, predictionTwin } from './agent_docs.mjs';
import { predictionIndex, postsIndex } from './agent_docs.mjs';
import { postTwin, pageTwin, homeTwin } from './agent_docs.mjs';
import { llmsIndex } from './agent_docs.mjs';

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

test('postTwin gives external-only essays an explicit pointer, date and canonical URL', () => {
  const md = postTwin({ fm: { title: 'External essay', link: 'https://example.com/essay/' }, body: '\n', date: '2020-01-02', permalink: '/2020/01/02/external/' }, site);
  assert.ok(md.includes('- **Date:** 2020-01-02'));
  assert.ok(md.includes('- **Canonical:** https://www.gregosuri.com/2020/01/02/external/'));
  assert.ok(md.includes('published externally; no local body is available.'));
  assert.ok(md.includes('Original: https://example.com/essay/'));
});

test('republished essays keep their original canonical while index links stay local with a baseurl', () => {
  const post = {
    fm: {
      title: 'Republished essay', original_publisher: 'Akash Network',
      original_url: 'https://akash.network/blog/original/',
      canonical_url: 'https://akash.network/blog/original/',
      link: 'https://example.com/obsolete/',
    },
    body: 'The complete essay.', date: '2020-01-02', permalink: '/2020/01/02/republished/',
  };
  const previewSite = { ...site, baseurl: '/preview' };
  const twin = postTwin(post, previewSite);
  assert.ok(twin.includes('- **Canonical:** https://akash.network/blog/original/'));
  assert.ok(twin.includes('Original: [Akash Network](https://akash.network/blog/original/)'));
  assert.ok(twin.includes('The complete essay.'));
  assert.ok(!twin.includes('no local body'));
  assert.ok(!twin.includes('https://example.com/obsolete/'));

  const index = postsIndex([post], previewSite);
  assert.ok(index.includes('[Republished essay](https://www.gregosuri.com/preview/2020/01/02/republished/index.md)'));
  assert.ok(index.includes('Original: [Akash Network](https://akash.network/blog/original/)'));
  assert.ok(!index.includes('https://example.com/obsolete/'));
});

test('postTwin keeps a local canonical when source attribution has no canonical override', () => {
  const twin = postTwin({
    fm: { title: 'Recovered essay', original_url: 'https://example.com/original/' },
    body: 'Recovered text.', date: '2020-01-02', permalink: '/2020/01/02/recovered/',
  }, { ...site, baseurl: '/preview' });
  assert.ok(twin.includes('- **Canonical:** https://www.gregosuri.com/preview/2020/01/02/recovered/'));
  assert.ok(twin.includes('Original: https://example.com/original/'));
  assert.ok(twin.includes('Recovered text.'));
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

test('markdown root-relative images and links are absolute without rewriting code or external destinations', () => {
  const body = [
    '![Diagram](/assets/img/essays/diagram.png "Caption")',
    '[Essay](/2020/01/02/essay/)',
    '[External](https://example.com/essay/)',
    '![External image](//cdn.example.com/image.png)',
    '`![Literal](/assets/literal.png)`',
    '\\[Literal link](/literal/)',
    '```markdown\n![Code](/assets/code.png)\n```',
  ].join('\n\n');
  const twin = postTwin({ fm: { title: 'Pictures' }, body, date: '2020-01-02', permalink: '/2020/01/02/pictures/' }, { ...site, baseurl: '/preview' });
  assert.ok(twin.includes('![Diagram](https://www.gregosuri.com/assets/img/essays/diagram.png "Caption")'));
  assert.ok(twin.includes('[Essay](https://www.gregosuri.com/2020/01/02/essay/)'));
  assert.ok(twin.includes('[External](https://example.com/essay/)'));
  assert.ok(twin.includes('![External image](//cdn.example.com/image.png)'));
  assert.ok(twin.includes('`![Literal](/assets/literal.png)`'));
  assert.ok(twin.includes('\\[Literal link](/literal/)'));
  assert.ok(twin.includes('```markdown\n![Code](/assets/code.png)\n```'));
});

test('pageTwin retains mixed markdown and HTML about content, dates and destinations', () => {
  const body = 'Intro **emphasis**.\n\n### Selected\n\n<ul class="row-list">\n<li><time datetime="2025-05-21">May 2025</time> <a href="https://example.com/testimony?a=1&amp;b=2">Testimony</a> <span>House &amp; Committee</span></li>\n</ul>\n\n[Predictions]({{ "/predictions/" | prepend: site.baseurl }})';
  const md = pageTwin({ title: 'About', body, permalink: '/about/' }, { ...site, baseurl: '/preview' });
  assert.ok(md.includes('Intro **emphasis**.'));
  assert.ok(md.includes('- May 2025 [Testimony](https://example.com/testimony?a=1&b=2) House & Committee'));
  assert.ok(md.includes('[Predictions](https://www.gregosuri.com/preview/predictions/)'));
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
