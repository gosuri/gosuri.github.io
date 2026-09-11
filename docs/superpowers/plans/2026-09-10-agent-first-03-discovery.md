# Agent-first Site: Discovery and Citation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every published HTML page's markdown twin discoverable and give humans and agents one authored citation contract.

**Architecture:** Jekyll emits the citation page, links, robots file, and its supported sitemap plugin's output. Plans 01 and 02 own all post-build markdown and inventory generation; this plan connects those artifacts to existing pages and verifies the assembled production build. The predictions index link belongs to its shared layout, guarded to the index URL, so regeneration cannot erase it.

**Tech Stack:** Jekyll 3.10 / GitHub Pages, Liquid, Markdown, `jekyll-sitemap` 1.4.0, existing Ruby/Bundler and Node 20 toolchains, Python standard library for build assertions.

**Spec:** `docs/superpowers/specs/2026-09-10-agent-first-site-design.md`

## Execution record

Implemented and verified locally on 2026-09-10. All tasks below are complete.

- The official Pages Jekyll 3.10 build succeeds. All 1,736 public HTML pages have a canonical URL, nonempty markdown alternate, and matching sitemap entry; private-source exclusions remain intact. Supported date fallbacks are verified, while undated pages omit unknown `lastmod`. The footer script is unchanged and `CLAUDE.md` remains a symlink.
- All 54 card/agent tests pass under CI's Node 20.20.2 runtime, and all 26 Python exporter tests pass, with no skips.
- `make preview` completed build, all 1,730 social cards, agent documents, and LAN-bound serving. Local Jekyll 4 emits 1,733 twins because it omits the three Pages pagination routes.
- Desktop/mobile inspection, citation-link placement, JavaScript-disabled navigation, and the existing clipboard behavior pass. The three-fetch home-GPU lookup preserves the quotation, 6 October 2022 date, source URL, and `00:12:25` timestamp.
- Scoped task reviews and the final cross-plan review found no outstanding issues. No push or deployment was performed.

## Global Constraints

- “Nothing existing moves or changes URL.”
- “No MCP server, no search API, no hosted service. The site stays static on GitHub Pages behind Cloudflare.”
- “No new content published. Transcripts (13 MB) and the 357-entry video catalog remain excluded from the site, as they are today.” The spec explicitly permits the new authored `/citing/` policy page.
- “No bulk-export or training-corpus surface. Optimising for retrieval, not ingestion.”
- “No JavaScript. `_includes/footer.html` keeps the site's only script.” Preserve its external-link and copy-link behavior byte-for-byte.
- “Jekyll 3.10 via `github-pages`, safe mode, no arbitrary plugins.” `jekyll-sitemap` is the spec's explicit supported build-plugin exception to adding dependencies; no browser/runtime dependency is added.
- “Everything an agent reads is a post-build artifact in `_site`, never committed.” The stated exceptions are authored source `citing.md`, static `robots.txt`, and plugin-generated `sitemap.xml`.
- “Python generates committed site source, Node generates uncommitted build artifacts.” Do not hand-edit `_predictions/` or `predictions/` and do not commit `_site`.
- Keep `site.url` exactly `https://www.gregosuri.com`.
- Use existing `page` layout, paragraph/link markup and existing classes. No changes to `design/*.html`, `_sass/_tokens.scss`, `_sass/_components.scss`, spacing, typography, or tokens are planned. If execution expands into visual design, first follow `AGENTS.md`'s DesignSync pull/diff procedure; make preview changes before Sass changes and push both afterward.
- Any server started during implementation binds to `0.0.0.0`; display both localhost and LAN URLs. Plan 02 preserves this in `make preview`.
- Do not add model attribution trailers to commits. Commit steps below are future execution instructions; writing this plan does not authorize implementing it now.

---

## Prerequisites and evidence-backed clarifications

Execute after plans 01 and 02. Plan 02 provides `node research/render_agents.mjs --site-dir <directory>`, `make agents`, generator tests through `make test`, preview integration, and unconditional CI generation after cards. This plan does not edit those files.

The existing `_site/posts/index.html` contains a `/posts/` canonical path, although its source is named `posts.html`. Its current host is the development host, so this observation is only evidence of the route. Do not rename the source, add a permalink, or publish `/posts.html/index.md`. Verify the `/posts/` route again with the real builder below. The home page gets `/index.md`; it must not produce `/index.htmlindex.md`.

**Working assumption for the spec's `lastmod` mismatch:** retain the supported plugin's truthful behavior. GitHub's dependency list pairs Jekyll 3.10.0 with `jekyll-sitemap` 1.4.0, and GitHub documents enabling supported plugins through `_config.yml`. [GitHub Pages versions](https://pages.github.com/versions/), [GitHub Pages plugin configuration](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins).

The plugin emits a collection document's `last_modified_at`, falling back to `date`; ordinary HTML pages get `lastmod` only when they provide `last_modified_at`. Therefore the spec's claim that every URL receives modification metadata “for free” is inaccurate. Acceptance here is all public HTML pages in the sitemap, dated predictions/posts carrying their date fallback, and undated authored/index pages included without invented `lastmod`. No build timestamp or speech date is presented as an independently known edit date. If the user chooses actual modification dates for every page, revise this plan to define that data source before implementation. [Pinned plugin sitemap template](https://raw.githubusercontent.com/jekyll/jekyll-sitemap/v1.4.0/lib/sitemap.xml).

The pinned plugin considers HTML pages and output collections, plus static files ending in `.htm`, `.html`, `.xhtml`, or `.pdf`. This supports the expected absence of `feed.xml` and static `robots.txt`; assert that behavior in the real output instead of relying on a blanket non-HTML exclusion. Post-build twins and `llms.txt` are absent by build order. [Pinned plugin generator](https://raw.githubusercontent.com/jekyll/jekyll-sitemap/v1.4.0/lib/jekyll/jekyll-sitemap.rb).

`CLAUDE.md` is a symlink to `AGENTS.md`. Edit the target once and preserve the symlink.

## File map

| File | Responsibility |
|---|---|
| Create `citing.md` | Authored citation policy and navigation explanation; no `nav` key |
| Create `robots.txt` | Static permissive crawler policy and discovery pointers |
| Modify `_includes/footer.html` | Add a plain citation link, preserving the existing script |
| Modify `_layouts/predictions.html` | Index-only citation link that survives exporter regeneration |
| Modify `_includes/head.html` | Absolute markdown alternate URL using the established page URL |
| Modify `_config.yml` | Enable the supported sitemap plugin, preserving all exclusions |
| Modify `Gemfile` | Make the same sitemap plugin available in local builds |
| Regenerate local ignored `Gemfile.lock` | Resolve the sitemap gem locally; do not stage this untracked ignored file |
| Modify `README.md`, `AGENTS.md` | Agent build/preview commands and publication boundaries |
| Leave `CLAUDE.md` as a symlink | Automatically receives the `AGENTS.md` documentation |

The layout link is intentionally a smaller implementation than changing `export_blog.py` and committing regenerated predictions. The existing exporter always assigns the `predictions` layout and `/predictions/` permalink; the guarded layout link therefore survives the next batch without touching generated source.

### Task 1: Publish the citation contract and durable links

**Files:**
- Create: `citing.md`
- Modify: `_includes/footer.html`
- Modify: `_layouts/predictions.html`
- Verify without modifying: `_includes/header.html`, `research/export_blog.py`, `predictions/index.md`

**Interfaces:**
- Consumes: existing `layout: page`; generated index front matter with `layout: predictions` and `permalink: /predictions/`; Plan 02's support for the authored citation page when present.
- Produces: `/citing/`, subsequently `/citing/index.md`, a footer link on every page, and a link in the predictions index's main content.

- [x] **Step 1: Establish the current boundary.**

```bash
git status --short
ls -l CLAUDE.md
sed -n '1,90p' _layouts/predictions.html
sed -n '1,110p' _includes/footer.html
```

Preserve unrelated edits. Confirm `CLAUDE.md -> AGENTS.md`. No brittle source-snapshot test is needed for these small content/link changes; Task 3 verifies rendered navigation, both durable links, and the unchanged script.

- [x] **Step 2: Create `citing.md` with this complete content.**

```markdown
---
layout: page
title: Citing this archive
permalink: /citing/
---

## How to cite

The quote block is the citable unit. Reproduce its words verbatim, or clearly label
what you write as a paraphrase. Never put a paraphrase in quotation marks.

Every prediction citation should identify Greg Osuri as the speaker and include the
statement's date, source title, and timestamp. Link to the source URL supplied with
the timestamp: when the source supports timed links, it opens at the spoken moment.
Some podcast URLs open an episode instead; retain the printed timestamp so the
reader can find the passage. Include the archive's canonical page when useful for
locating the extracted quote. Each prediction's markdown twin supplies a `Cite as`
line to make this easier.

A **Context** section is site annotation, not Greg's spoken words. Do not quote it as
speech or merge it into the verbatim quote.

Transcripts are not published here. Do not imply that you have read surrounding
conversation that the archive does not provide. Follow the original source when
more context is needed.

Some of these predictions were wrong. The archive is not curated to flatter;
finding and discussing the misses is welcome. Cite a mistaken prediction with the
same care as a correct one.

## How to navigate

Start with the [agent inventory](/llms.txt) for current counts, available files,
and approximate token budgets. It is a useful starting URL to hand to an agent;
we do not assume agents discover it automatically.

Every public HTML page advertises its markdown twin in a `rel="alternate"` link of
type `text/markdown`. Append `index.md` to the page's canonical directory URL:
`/about/` becomes `/about/index.md`, and the home page's twin is `/index.md`.
The HTML pages remain the canonical URLs to cite.

A prediction, essay, this page, or the about page has a content twin. An essay
published elsewhere is identified as an external pointer, with a link to its
original publication.

An index page has a retrieval listing instead of a transcription of all its HTML.
In particular, theme twins contain titles and IDs, not every quotation. Use the
[flat prediction index](/predictions/index.md) to select a theme and statement,
or fetch `/predictions/{theme}/index.md` for one theme and its year counts.
Year indexes use `/predictions/{theme}/{year}/index.md`; the essay index is
[/posts/index.md](/posts/index.md).

Each prediction ID starts with its date, followed by a title slug and a short
stable suffix. Use the ID exactly as listed; do not reconstruct it from a title.
The canonical page is `/predictions/{theme}/{id}/` and its full quote is at
`/predictions/{theme}/{id}/index.md`.

For a focused question, the usual route is inventory, title index, then the
selected quote. Read the inventory's current token budgets before choosing a full
corpus index or a smaller theme index; estimates are approximate and change with
the archive. Fetch full item twins only for the statements you need.

Social preview images for prediction, essay, theme, and theme-year pages use the
same directory convention: append `card.png`. Other pages use the image advertised
by their `og:image` metadata, including the shared site and predictions-index cards.
```

Do not add `nav: true`, an authored corpus count, a second copy of the generated inventory, or a new script.

- [x] **Step 3: Add the citation link to the footer paragraph.**

Replace only the existing footer paragraph with this line. Keep the rest of the file, especially the entire `<script>` block, unchanged:

```html
  <p>&copy; {{ site.time | date: "%Y" }} {{ site.title }} &middot; <a target="_blank" rel="noopener" href="https://github.com/{{ site.github_username }}">GitHub</a> &middot; <a target="_blank" rel="noopener" href="https://x.com/{{ site.twitter_username }}">X</a> &middot; <a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS</a> &middot; <a href="{{ "/citing/" | prepend: site.baseurl }}">Citing</a></p>
```

- [x] **Step 4: Add the index-only link after the closing `div` in `_layouts/predictions.html`.**

```liquid
{% if page.url == "/predictions/" %}
<p><a href="{{ "/citing/" | prepend: site.baseurl }}">How to cite and navigate this archive →</a></p>
{% endif %}
```

This is ordinary content using existing link styling. It does not change the design system or add a main-nav item.

- [x] **Step 5: Check the exporter contract using fresh temporary output, without rewriting the checkout.**

```bash
python3 - <<'PY'
from pathlib import Path
import subprocess
import tempfile

with tempfile.TemporaryDirectory(prefix="agent-export-") as temporary:
    subprocess.run([
        "python3", "research/export_blog.py", "--blog-dir", temporary
    ], check=True)
    page = (Path(temporary) / "predictions/index.md").read_text()
    front_matter = page.split("---", 2)[1]
    assert 'layout: "predictions"' in front_matter
    assert 'permalink: "/predictions/"' in front_matter
    assert (Path(temporary) / "_predictions").is_dir()
print("A fresh exporter batch still reaches the citation-bearing layout.")
PY
python3 -m unittest discover -s research -p test_export_blog.py -v
```

Expected: fresh exported source selects the same layout and URL; the existing Python suite passes. The real rendered-page assertion in Task 3 proves that this layout actually exposes the link.

- [x] **Step 6: Verify the rendered citation page, index link and footer link.**

```bash
bundle exec jekyll build
make agents
python3 - <<'PY'
from pathlib import Path
import re

for route in ("", "predictions/", "citing/"):
    html = (Path("_site") / route / "index.html").read_text()
    nav = re.search(r'<nav\b[^>]*>(.*?)</nav>', html, re.S).group(1)
    footer = re.search(r'<footer\b[^>]*>(.*?)</footer>', html, re.S).group(1)
    assert 'href="/citing/"' not in nav, route
    assert 'href="/citing/"' in footer, route
index = Path("_site/predictions/index.html").read_text()
main = re.search(r'<main\b[^>]*>(.*?)</main>', index, re.S).group(1)
assert 'href="/citing/"' in main
twin = Path("_site/citing/index.md").read_text()
assert "Some of these predictions were wrong" in twin
assert "site annotation" in twin
assert "Transcripts are not published here" in twin
print("Citation content and non-nav links render successfully.")
PY
```

- [x] **Step 7: Review and commit this complete content change during implementation.**

```bash
git diff --check
git diff -- _includes/footer.html _layouts/predictions.html
git add citing.md _includes/footer.html _layouts/predictions.html
git commit -m "feat: publish citation guidance and archive links"
```

The footer diff must change only its paragraph, with no changes inside `<script>`. This source-diff inspection establishes preservation; the later build check verifies that the unchanged script is emitted once per page.

### Task 2: Add crawler discovery and per-page markdown alternates

**Files:**
- Create: `robots.txt`
- Modify: `_config.yml`
- Modify: `Gemfile`
- Regenerate locally only: ignored, untracked `Gemfile.lock`
- Modify: `_includes/head.html`

**Interfaces:**
- Consumes: `page.url`, `site.url`, `site.baseurl`; all output twins from Plan 02.
- Produces: root `/robots.txt`, plugin `/sitemap.xml`, one absolute `text/markdown` alternate in every rendered HTML head.

- [x] **Step 1: Create the static root `robots.txt` exactly as follows.**

```text
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: CCBot
User-agent: Google-Extended
User-agent: *
Allow: /

Sitemap: https://www.gregosuri.com/sitemap.xml
# Agent inventory: https://www.gregosuri.com/llms.txt
```

No front matter or Liquid is needed. The `llms.txt` pointer is a comment, not an invented robots directive. The explicit agent names and wildcard share the same permissive group. The spec's “six static lines” is an estimate; explicit named agents and both discovery pointers require the complete text above.

- [x] **Step 2: Enable the supported plugin in configuration and the local Gemfile.**

Append this top-level block to `_config.yml`, without changing `url`, `permalink`, `collections`, or `exclude`:

```yaml
plugins:
  - jekyll-sitemap
```

Append to `Gemfile`:

```ruby
gem 'jekyll-sitemap', '1.4.0'
```

Both entries are needed: the production Pages builder uses the configuration, while local Bundler must resolve the gem. [Plugin installation instructions](https://github.com/jekyll/jekyll-sitemap#usage).

- [x] **Step 3: Update the lockfile through Bundler, without unrelated dependency upgrades.**

```bash
bundle install
git diff -- Gemfile Gemfile.lock _config.yml
```

Expected lockfile additions: `jekyll-sitemap (1.4.0)` with its Jekyll dependency and `jekyll-sitemap (= 1.4.0)` under `DEPENDENCIES`. This repository ignores `Gemfile.lock`, and it is not tracked; inspect the file locally, but do not force-add it or change that repository convention. Investigate unrelated version churn instead of including it in this change. Do not create a custom sitemap template or install `jekyll-last-modified-at`.

- [x] **Step 4: Add the alternate immediately after the existing RSS alternate in `_includes/head.html`.**

```html
  <link rel="alternate" type="text/markdown" href="{{ page.url | replace: 'index.html', '' | append: 'index.md' | prepend: site.baseurl | prepend: site.url }}">
```

The `index.html` normalization matches the existing canonical template. The assembled URL must match the driver's path exactly, including `/index.md` for home and `/posts/index.md` for the existing writing index. A future file-style page URL requires an explicit matching generator contract; do not guess or silently rewrite a current route.

- [x] **Step 5: Run a quick local build and inspect concrete discovery output.**

```bash
bundle exec jekyll build
make agents
python3 - <<'PY'
from pathlib import Path
import xml.etree.ElementTree as ET

site = Path("_site")
assert (site / "robots.txt").read_bytes() == Path("robots.txt").read_bytes()
assert (site / "posts/index.html").is_file()
assert not (site / "posts.html").exists()
for route in ("", "posts/", "predictions/", "about/", "citing/"):
    html = (site / route / "index.html").read_text()
    expected = f'https://www.gregosuri.com/{route}index.md'
    assert f'type="text/markdown" href="{expected}"' in html, route
    assert (site / route / "index.md").is_file(), route
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
root = ET.parse(site / "sitemap.xml").getroot()
urls = {node.text for node in root.findall("s:url/s:loc", ns)}
assert "https://www.gregosuri.com/citing/" in urls
assert "https://www.gregosuri.com/robots.txt" not in urls
assert "https://www.gregosuri.com/feed.xml" not in urls
assert not any(url.endswith("index.md") for url in urls)
print("Local discovery smoke passed; production verification remains Task 3.")
PY
```

Expected: every listed alternate resolves to a file; XML parses and points at canonical public HTML pages. Local Jekyll 4 success does not replace the required Jekyll 3.10 validation.

- [x] **Step 6: Review and commit the discovery configuration during implementation.**

```bash
git diff --check
git add robots.txt _config.yml Gemfile _includes/head.html
git commit -m "feat: advertise markdown twins and publish sitemap"
```

### Task 3: Document the pipeline and verify the full production build

**Files:**
- Modify: `README.md`
- Modify: `AGENTS.md` (also read through existing `CLAUDE.md` symlink)
- Verify: built HTML, sitemap, robots, every advertised twin and all nonpublic exclusions

**Interfaces:**
- Consumes: Plans 01 and 02's generator and make targets; Tasks 1 and 2's published discovery surface.
- Produces: accurate contributor guidance and production-build evidence for the complete three-plan feature.

- [x] **Step 1: Update `README.md`'s local command examples and caveat.**

Replace its two local command blocks and intervening card-only caveat with:

````markdown
```sh
make server     # Jekyll at http://localhost:4000; also prints the LAN URL
```

The server binds to `0.0.0.0`. Social cards and markdown twins will 404 under
`make server`: Jekyll regeneration wipes post-build artifacts. Use the finished-site
preview to inspect them:

```sh
make preview    # build + render cards and agent docs + serve without regenerating
make cards      # render social cards into an existing _site
make agents     # render markdown twins and llms.txt into an existing _site
make test       # card and agent generator tests; no browser needed
```
````

When editing the document, retain the inner code fences only; the outer fence above presents the complete replacement text.

- [x] **Step 2: Add this README section before `## Deploying`.**

```markdown
## Agent discovery and citation

Every public HTML page advertises a plain-markdown alternate. Leaf twins contain
content; prediction, theme, year, and essay indexes contain retrieval listings.
Start at `/llms.txt` for current inventory, counts and approximate token budgets,
and `/citing/` for the authored citation contract. Quote blocks are speech;
context notes are site annotations.

`research/agent_docs.mjs` performs the pure transformations and
`research/render_agents.mjs` writes twins and `llms.txt` after Jekyll builds.
The driver reads the same committed prediction documents as the card renderer;
a new exporter batch therefore flows through automatically. Never commit generated
agent output or hand-edit generated prediction source. To inspect an alternate
build destination, run `node research/render_agents.mjs --site-dir /path/to/build`.

`robots.txt` is committed static content. `jekyll-sitemap` 1.4.0 generates the
sitemap during Jekyll's build; post-build twins are discovered as alternates and
are not separate sitemap documents. Dated prediction and essay entries use the
plugin's date fallback for `lastmod`; undated HTML pages omit that field unless
an actual `last_modified_at` is supplied. Do not fabricate modification dates.

`jekyll build` and `jekyll server` erase twins just as they erase cards. Use
`make preview` for both, or `make agents` to restore twins in an existing `_site`.
A normal preview uses the existing card dependencies; the agent renderer itself
adds no package or browser dependency.
```

Also replace the deployment sentence beginning “Pushing to `master` triggers” with:

```markdown
Pushing to `master` triggers `.github/workflows/deploy.yml`: Jekyll build → render
or restore cards → render agent docs unconditionally → upload → deploy to GitHub
Pages. This requires **Settings → Pages → Source = GitHub Actions**; on the older
"Deploy from a branch" setting the post-build artifacts are never rendered.
```

Retain the hosting/Cloudflare paragraphs that follow.

- [x] **Step 3: Append this section to `AGENTS.md`, preserving `CLAUDE.md` as its symlink.**

```markdown
## Agent-readable pages

`research/agent_docs.mjs` is the pure, unit-tested markdown transformation layer;
`research/render_agents.mjs` reads committed source and writes markdown twins and
`llms.txt` into the completed Jekyll build. Run `make agents` for an existing
`_site`, or `node research/render_agents.mjs --site-dir /path/to/build` for a
separate build destination. `make test` covers the generator.

The twins and inventory are never committed. Python's `export_blog.py` owns
committed prediction source; Node owns post-build artifacts. The `/citing/` page
is authored policy, `llms.txt` supplies generated facts, and theme twins are title
indexes rather than complete quotation dumps. The predictions citation link
lives in its shared layout with a `/predictions/` guard, so exporter regeneration
cannot remove it.

`jekyll build` and `jekyll server` wipe twins along with social cards. Missing
`index.md` under `make server` is expected; `make preview` builds, renders cards
and agent docs, then serves without regenerating. CI renders agent docs after
the card step on both cache hits and misses, before uploading the site.

The supported `jekyll-sitemap` plugin runs inside the Jekyll build. It includes
public HTML URLs; post-build twins are alternates and stay out of the sitemap.
Its `lastmod` uses date metadata where present, and is omitted for undated HTML
pages unless `last_modified_at` is explicitly supplied. Do not invent dates or
add unsupported date plugins. Verify configuration/template changes with the
real GitHub Pages builder, then run the agent renderer against that output.

`CLAUDE.md` is a symlink to this file; edit this target once and preserve the link.
```

- [x] **Step 4: Run the required real-builder gate into a fresh temporary destination.**

Execute the following commands in one shell session, retaining `agent_build_dir` for the next step. This does not overwrite a developer's running `_site`:

```bash
agent_build_dir="$(mktemp -d /tmp/agent-first-pages.XXXXXX)"
docker run --rm \
  -v "$PWD":/github/workspace \
  -v "$agent_build_dir":/out \
  -e GITHUB_WORKSPACE=/github/workspace \
  -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out \
  -e INPUT_FUTURE=true \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
docker run --rm \
  -v "$agent_build_dir":/out \
  --entrypoint sh \
  ghcr.io/actions/jekyll-build-pages:v1.0.13 \
  -c 'chown -R "$1:$2" /out' sh "$(id -u)" "$(id -g)"
node research/render_agents.mjs --site-dir "$agent_build_dir"
```

Expected: production Jekyll 3.10 build succeeds; ownership of this new, bounded temporary output permits the host-side post-build writer. If Docker is unavailable, report the gate as blocked and do not claim release validation. Do not substitute local Jekyll 4 evidence.

- [x] **Step 5: Verify every production HTML alternate, sitemap entry, exclusion, citation link, and a known quotation.**

```bash
python3 - "$agent_build_dir" <<'PY'
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import re
import sys
import xml.etree.ElementTree as ET

site = Path(sys.argv[1]).resolve()
origin = "https://www.gregosuri.com"
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.canonicals = []
        self.alternates = []
        self.nav_links = []
        self.main_links = []
        self.footer_links = []
        self.sections = []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {"nav", "main", "footer"}:
            self.sections.append(tag)
        if tag == "link":
            if attrs.get("rel") == "canonical":
                self.canonicals.append(attrs["href"])
            if attrs.get("rel") == "alternate" and attrs.get("type") == "text/markdown":
                self.alternates.append(attrs["href"])
        if tag == "a":
            href = attrs.get("href", "")
            if "nav" in self.sections:
                self.nav_links.append(href)
            if "main" in self.sections:
                self.main_links.append(href)
            if "footer" in self.sections:
                self.footer_links.append(href)
    def handle_endtag(self, tag):
        if tag in self.sections:
            self.sections.remove(tag)

pages = {}
for path in sorted(site.rglob("*.html")):
    html = path.read_text()
    page = Page(html)
    assert len(page.canonicals) == 1, path
    canonical = page.canonicals[0]
    assert canonical.startswith(origin + "/"), (path, canonical)
    rel = path.relative_to(site).as_posix()
    expected_path = "/" + (rel[:-len("index.html")] if rel.endswith("index.html") else rel)
    assert canonical == origin + expected_path, (path, canonical)
    assert canonical not in pages, canonical
    pages[canonical] = page
    assert page.alternates == [canonical + "index.md"], (path, page.alternates)
    twin_url = urlsplit(page.alternates[0])
    twin = site / unquote(twin_url.path).lstrip("/")
    assert twin.is_file() and twin.stat().st_size > 0, twin
    assert "/citing/" not in page.nav_links, path
    assert "/citing/" in page.footer_links, path

assert (site / "posts/index.html").is_file()
assert not (site / "posts.html").exists()
for route in ("/", "/posts/", "/predictions/", "/about/", "/citing/"):
    assert origin + route in pages, route
assert "/citing/" in pages[origin + "/predictions/"].main_links

root = ET.parse(site / "sitemap.xml").getroot()
entries = root.findall("s:url", ns)
sitemap = {entry.findtext("s:loc", namespaces=ns): entry for entry in entries}
assert len(sitemap) == len(entries), "Duplicate sitemap URLs"
assert set(sitemap) == set(pages), (set(sitemap) - set(pages), set(pages) - set(sitemap))
for route in ("/", "/posts/", "/about/", "/predictions/", "/citing/"):
    assert sitemap[origin + route].find("s:lastmod", ns) is None, route
for url in sitemap:
    assert not url.endswith((".md", ".txt", ".xml")), url
    assert not any(f"/{part}/" in url for part in (
        "design", "docs", "research", "videos", "catalog", "transcripts"
    )), url

for source in Path("_predictions").rglob("*.md"):
    text = source.read_text()
    route = re.search(r"^permalink: (.+)$", text, re.M).group(1).strip('"')
    date = re.search(r"^date: (.+)$", text, re.M).group(1).strip('"')[:10]
    lastmod = sitemap[origin + route].findtext("s:lastmod", namespaces=ns)
    assert lastmod and lastmod.startswith(date), (source, lastmod)
for source in Path("_posts").iterdir():
    if not source.is_file() or source.suffix not in {".md", ".markdown", ".html"}:
        continue
    match = re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})-(.+)\.(?:md|markdown|html)", source.name)
    assert match, source
    year, month, day, slug = match.groups()
    url = f"{origin}/{year}/{month}/{day}/{slug}/"
    lastmod = sitemap[url].findtext("s:lastmod", namespaces=ns)
    assert lastmod and lastmod.startswith(f"{year}-{month}-{day}"), (source, lastmod)

for relative in (
    "design", "docs", "research", "videos", "catalog", "transcripts",
    "README.md", "README.html", "AGENTS.md", "AGENTS.html", "CLAUDE.md", "CLAUDE.html",
    "PREDICTIONS.md", "PREDICTIONS.html", "CATALOG.md", "CATALOG.html", "Gemfile",
    "Gemfile.lock", "Makefile", "Dockerfile", "deploy.yml", "vendor",
):
    assert not (site / relative).exists(), relative
assert (site / "robots.txt").read_bytes() == Path("robots.txt").read_bytes()
assert (site / "llms.txt").is_file()
assert "/citing/" in (site / "llms.txt").read_text()

known = Path("_predictions/ai-agents/2022-11-03-machines-will-schedule-other-machines-rya4.md")
text = known.read_text()
route = re.search(r"^permalink: (.+)$", text, re.M).group(1).strip('"')
source_url = re.search(r"^source_url: (.+)$", text, re.M).group(1).strip('"')
timestamp = re.search(r"^timestamp: (.+)$", text, re.M).group(1).strip('"')
twin = (site / route.lstrip("/") / "index.md").read_text()
assert source_url in twin
assert timestamp in twin
assert "Quote — verbatim" in twin
assert "Context — site annotation, not spoken" in twin
assert "Cite as:" in twin

footer = Path("_includes/footer.html").read_text()
script = re.search(r"<script>.*?</script>", footer, re.S).group(0)
for route in ("", "predictions/", "citing/"):
    html = (site / route / "index.html").read_text()
    assert html.count("<script>") == 1, route
    assert script in html, route
assert Path("CLAUDE.md").is_symlink()
assert Path("CLAUDE.md").resolve() == Path("AGENTS.md").resolve()
print(f"Verified {len(pages)} HTML pages, alternates and sitemap URLs; public boundaries intact.")
PY
```

The sitemap equality assertion intentionally measures the current full build rather than pinning the spec's approximate page count. There are currently no public static PDFs; if source content changes before execution, inspect any extra sitemap entry instead of excluding a legitimate asset just to pass the assertion. The date assertions reflect the current corpus, which has no separately authored `last_modified_at`; if such real metadata is introduced, assert that value takes precedence rather than forcing the creation-date fallback.

- [x] **Step 6: Exercise normal preview behavior and the retrieval path.**

```bash
make test
make preview
```

Use the localhost and LAN URLs printed by `make preview`. Confirm `/citing/` remains out of the header nav, appears in the footer and predictions index, and is readable with JavaScript disabled; the pre-existing copy-link remains a normal navigable link when JavaScript is disabled. Inspect the title, spacing, and links using the existing page styling without redesigning it.

In another terminal, reproduce the spec's three-fetch home-GPU question using the served files. Fetch the inventory and the local-compute title index:

```bash
curl --fail --silent http://localhost:4000/llms.txt
curl --fail --silent http://localhost:4000/predictions/local-compute/index.md
```

The index currently lists `2022-10-06-buy-a-gpu-host-it-at-home-lease-it-out-when-idle-epkt`. Fetch that item twin as the third request:

```bash
curl --fail --silent http://localhost:4000/predictions/local-compute/2022-10-06-buy-a-gpu-host-it-at-home-lease-it-out-when-idle-epkt/index.md
```

Expected: the 6 October 2022 quote about buying a GPU, hosting it at home and leasing idle capacity; source `Akash Weekly - October 5th 2022 (Akash Network)`; timestamp `00:12:25`; source link `https://www.youtube.com/watch?v=_NZhdhw5f4s&t=745s`; and separately labeled site annotation. Verify the ID came from the second fetch, not a guessed title slug. This is an editorial acceptance check: do not automatically assert that every source is reachable on the public internet or that any browsing agent will use the documented route. Stop the preview with Ctrl-C after inspection.

- [x] **Step 7: Review scope, publication boundaries, and the final documentation diff, then commit during implementation.**

```bash
git diff --check
git status --short
git diff -- README.md AGENTS.md
ls -l CLAUDE.md
git add README.md AGENTS.md
git commit -m "docs: explain agent discovery and preview workflow"
```

Only source changes in the file map belong to this plan. Do not stage `_site`, temporary builds, unrelated work, or any generated prediction-source churn. Report the production build and complete alternate/sitemap verification results; distinguish any unrun browser or Docker check from passed checks. No push or deployment is part of this implementation plan.

## Self-review

- Spec discovery surfaces are covered by Task 2; authored citation policy and both non-nav links by Task 1; build/exclusion/route/known-item evidence and contributor guidance by Task 3.
- The spec's two imprecise premises are explicit: current `posts.html` already builds to `/posts/`, and the supported sitemap plugin does not synthesize `lastmod` for undated HTML pages.
- The exporter remains the sole writer of committed prediction source. A fresh temporary export verifies that the stable layout/permalink contract still exposes the citation link.
- Interface names match Plan 02's `--site-dir` driver and make targets; this plan adds no duplicate generator or CI step.
- Citation copy distinguishes spoken words from annotation, admits misses, does not claim transcript access, and points current inventory facts to `llms.txt`.
- No design-system edits, extra JavaScript, custom plugin, hosted service, committed build artifacts, or URL migrations are planned.
