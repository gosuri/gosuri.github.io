# Sharable Predictions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each of the 1,689 predictions its own permalink, copy-link action, and social preview image.

**Architecture:** The `gosuri-predictions` pipeline moves into this repo (minus raw transcripts). Its existing generator, `export_blog.py`, gains a second output mode that emits one Jekyll collection document per prediction alongside the theme pages it already writes. New Jekyll templates render those documents. A custom GitHub Actions workflow replaces the managed Pages build so a headless browser can render one `card.png` per prediction into `_site/` without ever committing images.

**Tech Stack:** Jekyll 3.10 (via the `github-pages` gem — *not* the Jekyll 4 in the local `Gemfile`), kramdown, Python 3 + `unittest`, Node + Playwright, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-09-sharable-predictions-design.md`

## Global Constraints

- **Verify every build against the real Pages image**, never local Jekyll. Local is Jekyll 4.4.1; Pages is 3.10.0 and they differ in ways that break builds:
  ```bash
  docker run --rm -v "$PWD":/github/workspace -v /tmp/out:/out \
    -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
    -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
    -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
    ghcr.io/actions/jekyll-build-pages:v1.0.13
  ```
- **All site URLs come from `site.url`** = `https://www.gregosuri.com`. Never hardcode `https://gregosuri.com` — the apex only redirects.
- **`jekyll-optional-front-matter` is active.** Every `.md` file becomes a page unless listed in `_config.yml` `exclude`.
- **Generated files are never hand-edited:** `_predictions/**`, `predictions/**`. Regenerating overwrites them.
- **Design tokens are locked.** Use `var(--paper) #faf8f4`, `var(--ink) #211f1a`, `var(--ink-soft) #6e6759`, `var(--accent) #9c4221`, `var(--rule) #e4ddd0`, steps `--step--1 .8889rem` / `--step-0 1rem` / `--step-1 1.25rem` / `--step-3 1.9531rem`, spacing `--s1 .25rem` / `--s2 .5rem` / `--s3 1rem` / `--s4 2rem` / `--s5 4rem`. Never redefine them.
- **Run Python tests** from `research/`: `cd research && python3 -m unittest test_export_blog -v`
- **Commit after every task.** Never add `Co-Authored-By` or "Generated with Claude Code" trailers.

## File Structure

| File | Responsibility |
|---|---|
| `PREDICTIONS.md` | Source of truth, 1,689 entries (moved in, excluded from site) |
| `research/export_blog.py` | Parses `PREDICTIONS.md`; emits theme pages **and** collection docs |
| `research/test_export_blog.py` | `unittest` suite; 9 existing tests must keep passing |
| `_predictions/<theme>/<id>.md` | 1,689 generated collection documents |
| `predictions/<theme>.md` | Generated theme pages (URLs unchanged) |
| `_includes/prediction.html` | One entry, as listed on a theme page |
| `_layouts/prediction.html` | The single-prediction page |
| `_includes/head.html` | Gains a conditional og/twitter block |
| `_includes/footer.html` | Gains the copy-link listener — the site's only JS |
| `_sass/_components.scss` | Lines 206–263 replaced with class-based rules |
| `.github/workflows/deploy.yml` | Replaces the managed Pages build |
| `research/render_cards.mjs` | Renders `card.png` per prediction |

---

### Task 1: Consolidate the pipeline into this repo

**Files:**
- Create: `research/` (moved from `/Users/gosuri/code/gosuri-predictions/scripts/`)
- Create: `PREDICTIONS.md`, `CATALOG.md`, `videos/`, `catalog/`, `transcripts/` (moved)
- Modify: `_config.yml:20-29` (exclude list)
- Modify: `.gitignore`

**Interfaces:**
- Consumes: nothing
- Produces: `PREDICTIONS.md` at repo root; `research/export_blog.py` importable as `import export_blog` when cwd is `research/`

- [ ] **Step 1: Record the current page count as a baseline**

```bash
rm -rf /tmp/base && mkdir -p /tmp/base
docker run --rm -v "$PWD":/github/workspace -v /tmp/base:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
find /tmp/base -name '*.html' | wc -l   # record this number, call it BASELINE
```

- [ ] **Step 2: Move the pipeline in**

```bash
SRC=/Users/gosuri/code/gosuri-predictions
cp -R "$SRC/scripts" research
cp -R "$SRC/videos" "$SRC/catalog" "$SRC/transcripts" .
cp "$SRC/PREDICTIONS.md" "$SRC/CATALOG.md" .
rm -rf research/__pycache__
```

`site/` is deliberately NOT copied — it is a superseded static archive.

- [ ] **Step 3: Gitignore the transcripts**

Append to `.gitignore`:

```
transcripts/
```

Transcripts are 355 third-party recordings. They stay local so the pipeline runs, but never become public.

- [ ] **Step 4: Exclude everything non-site from the build**

Replace the `exclude:` block in `_config.yml` (currently lines 20-29) with:

```yaml
exclude:
  - design
  - docs
  - README.md
  - Makefile
  - Dockerfile
  - deploy.yml
  - Gemfile
  - Gemfile.lock
  - vendor
  - research
  - videos
  - catalog
  - transcripts
  - PREDICTIONS.md
  - CATALOG.md
```

- [ ] **Step 5: Verify the build is unchanged**

```bash
rm -rf /tmp/after && mkdir -p /tmp/after
docker run --rm -v "$PWD":/github/workspace -v /tmp/after:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
find /tmp/after -name '*.html' | wc -l   # MUST equal BASELINE (48)

# Compare builds. A plain `diff -rq` can NEVER pass here: _includes/head.html
# fingerprints the stylesheet with the build time (?v=<epoch>) and feed.xml
# embeds pubDate/lastBuildDate, so all 49 html files differ between any two
# builds. This normalizer strips exactly those two values and nothing else.
diff <(/Users/gosuri/code/gosuri.github.io/.superpowers/sdd/2026-09-09-sharable-predictions/normbuild.sh /tmp/base) \
     <(/Users/gosuri/code/gosuri.github.io/.superpowers/sdd/2026-09-09-sharable-predictions/normbuild.sh /tmp/after)   # MUST print nothing
```

Expected: page count 48 and no normalized diff. A larger count means an exclude is missing and hundreds of `videos/*.md` pages are shipping.

- [ ] **Step 6: Verify the existing tests still pass**

```bash
cd research && python3 -m unittest test_export_blog -v
```
Expected: 9 tests, OK.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Move the predictions pipeline into this repo

Transcripts are gitignored rather than published: they are 355
third-party recordings. Everything else the pipeline needs is
committed and excluded from the Jekyll build."
```

---

### Task 2: Stable prediction IDs

**Files:**
- Modify: `research/export_blog.py`
- Test: `research/test_export_blog.py`

**Interfaces:**
- Consumes: `slugify(name) -> str` and `parse_predictions(text) -> (meta, entries)` (existing)
- Produces:
  - `make_id(entry: dict) -> str` — e.g. `2023-09-28-every-home-will-have-a-supercomputer-zved`
  - `theme_slug(theme: str) -> str` — e.g. `Local Compute` → `local-compute`

- [ ] **Step 1: Write the failing tests**

Append to `research/test_export_blog.py`:

```python
class TestMakeId(unittest.TestCase):
    def _entry(self, title, vid, url):
        return {"date": "2023-09-28", "title": title, "vid": vid,
                "stamp": ("00:43:16", url)}

    def test_id_shape(self):
        e = self._entry("Every home will have a supercomputer", "GVrfHDg30-M",
                        "https://www.youtube.com/watch?v=GVrfHDg30-M&t=2596s")
        self.assertEqual(
            eb.make_id(e),
            "2023-09-28-every-home-will-have-a-supercomputer-zved")

    def test_id_is_stable(self):
        e = self._entry("Every home will have a supercomputer", "GVrfHDg30-M",
                        "https://www.youtube.com/watch?v=GVrfHDg30-M&t=2596s")
        self.assertEqual(eb.make_id(e), eb.make_id(e))

    def test_title_truncated_to_50_chars(self):
        long_title = ("Next 12 months managed services marketplace makes Akash "
                      "a network of networks and pays open source creators")
        e = self._entry(long_title, "abc", "https://x.test/?t=1")
        slug_part = eb.make_id(e)[len("2023-09-28-"):-5]
        self.assertLessEqual(len(slug_part), 50)
        self.assertFalse(slug_part.endswith("-"))

    def test_hash_ignores_title(self):
        a = self._entry("One title", "vid1", "https://x.test/?t=1")
        b = self._entry("A completely different title", "vid1",
                        "https://x.test/?t=1")
        self.assertEqual(eb.make_id(a)[-4:], eb.make_id(b)[-4:])

    def test_hash_distinguishes_sources(self):
        a = self._entry("Same title", "vid1", "https://x.test/?t=1")
        b = self._entry("Same title", "vid2", "https://x.test/?t=1")
        self.assertNotEqual(eb.make_id(a), eb.make_id(b))


class TestThemeSlug(unittest.TestCase):
    def test_slugs(self):
        self.assertEqual(eb.theme_slug("Local Compute"), "local-compute")
        self.assertEqual(eb.theme_slug("Crypto & DePIN"), "crypto-depin")
        self.assertEqual(eb.theme_slug("Energy & AI"), "energy-ai")
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
cd research && python3 -m unittest test_export_blog.TestMakeId -v
```
Expected: FAIL — `module 'export_blog' has no attribute 'make_id'`

- [ ] **Step 3: Implement**

Add near the top of `research/export_blog.py`, after the existing imports:

```python
import base64
import hashlib

ID_SLUG_MAX = 50


def theme_slug(theme):
    """URL slug for a theme name: 'Crypto & DePIN' -> 'crypto-depin'."""
    return slugify(theme)


def make_id(e):
    """Stable, readable, collision-free id for one prediction.

    The hash is derived from the source (video id + timestamp URL) and never
    from the title, so re-wording a title changes only the readable half and
    leaves the hash usable as a join key for redirects.
    """
    slug = slugify(e["title"])[:ID_SLUG_MAX].rstrip("-")
    seed = f"{e['vid']}|{e['stamp'][1]}".encode()
    h = base64.b32encode(hashlib.sha256(seed).digest()).decode().lower()[:4]
    return f"{e['date']}-{slug}-{h}"
```

- [ ] **Step 4: Run the tests to verify they pass**

```bash
cd research && python3 -m unittest test_export_blog -v
```
Expected: 15 tests, OK.

- [ ] **Step 5: Prove uniqueness across the real corpus**

Append to `research/test_export_blog.py`:

```python
class TestRealCorpusIds(unittest.TestCase):
    def test_all_ids_unique(self):
        path = os.path.join(os.path.dirname(os.path.dirname(
            os.path.abspath(__file__))), "PREDICTIONS.md")
        with open(path) as f:
            _, entries = eb.parse_predictions(f.read())
        ids = [eb.make_id(e) for e in entries]
        self.assertEqual(len(ids), 1689)
        self.assertEqual(len(set(ids)), len(ids))
        self.assertLessEqual(max(len(i) for i in ids), 70)
```

```bash
cd research && python3 -m unittest test_export_blog.TestRealCorpusIds -v
```
Expected: PASS — 1,689 unique ids.

- [ ] **Step 6: Commit**

```bash
git add research/export_blog.py research/test_export_blog.py
git commit -m "Add stable prediction ids

Readable title slug plus a 4-char hash of video id and timestamp URL.
The hash ignores the title so a future re-analysis that rewords titles
leaves a stable join key. Verified unique across all 1,689 entries."
```

---

### Task 3: Emit collection documents

**Files:**
- Modify: `research/export_blog.py`
- Test: `research/test_export_blog.py`

**Interfaces:**
- Consumes: `make_id`, `theme_slug` (Task 2)
- Produces:
  - `clean_source(raw: str) -> str` — strips the wrapping `_`
  - `clean_context(raw: str | None) -> str` — strips the `**Context:** ` prefix; `""` when absent
  - `clean_quote(quote_lines: list[str]) -> str` — drops the stamp line and `> ` prefixes
  - `render_collection_entry(e: dict, theme_page: str) -> (relpath: str, content: str)` where relpath is `<theme-slug>/<id>.md`

- [ ] **Step 1: Write the failing tests**

Append to `research/test_export_blog.py`:

```python
class TestCleaners(unittest.TestCase):
    def test_clean_source_strips_underscores(self):
        self.assertEqual(
            eb.clean_source("_CEO of Overclock Labs (CoinBundle)_"),
            "CEO of Overclock Labs (CoinBundle)")

    def test_clean_context_strips_prefix(self):
        self.assertEqual(
            eb.clean_context("**Context:** His closing argument."),
            "His closing argument.")

    def test_clean_context_handles_missing(self):
        self.assertEqual(eb.clean_context(None), "")

    def test_clean_quote_drops_stamp_line(self):
        lines = ['> "We\'re moving to decentralized infrastructure."',
                 '> — [00:25:36](https://www.youtube.com/watch?v=x&t=1s)']
        self.assertEqual(eb.clean_quote(lines),
                         "We're moving to decentralized infrastructure.")

    def test_clean_quote_joins_multiple_lines(self):
        lines = ['> "This device sits in your house."',
                 '> "It becomes part of the Akash network."',
                 '> — [00:10:22](https://www.youtube.com/watch?v=y&t=2s)']
        self.assertEqual(
            eb.clean_quote(lines),
            'This device sits in your house."\n"It becomes part of the '
            'Akash network.')


class TestCollectionEntry(unittest.TestCase):
    def _entry(self):
        _, entries = eb.parse_predictions(FIXTURE)
        return entries[0]

    def test_relpath(self):
        relpath, _ = eb.render_collection_entry(self._entry(), "/predictions/local-compute/")
        self.assertTrue(relpath.startswith("local-compute/"))
        self.assertTrue(relpath.endswith(".md"))

    def test_front_matter_fields(self):
        _, content = eb.render_collection_entry(self._entry(), "/predictions/local-compute/")
        for key in ("layout: prediction", "theme: local-compute",
                    'theme_title: "Local Compute"', "date: 2018-11-10",
                    "permalink: /predictions/local-compute/",
                    "timestamp:", "vid: Don1slbJlMQ",
                    "quote: |", "context: |"):
            self.assertIn(key, content)

    def test_quote_has_no_stamp_and_no_marker(self):
        _, content = eb.render_collection_entry(self._entry(), "/predictions/local-compute/")
        self.assertNotIn("00:25:36](", content.split("quote: |")[1])
        self.assertNotIn("**Context:**", content)

    def test_yaml_round_trips_awkward_characters(self):
        e = self._entry()
        e["title"] = 'A title with "quotes", a colon: and an — em dash'
        _, content = eb.render_collection_entry(e, "/predictions/local-compute/")
        body = content.split("---")[1]
        try:
            import yaml
        except ImportError:
            self.skipTest("pyyaml not installed")
        data = yaml.safe_load(body)
        self.assertEqual(data["title"], e["title"])
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
cd research && python3 -m unittest test_export_blog.TestCleaners -v
```
Expected: FAIL — `no attribute 'clean_source'`

- [ ] **Step 3: Implement**

Add to `research/export_blog.py`:

```python
CONTEXT_PREFIX = "**Context:**"


def clean_source(raw):
    """'_Foo (Bar)_' -> 'Foo (Bar)'. The template supplies the emphasis."""
    return raw.strip().strip("_").strip()


def clean_context(raw):
    """Strip the literal '**Context:**' label; the template renders it."""
    if not raw:
        return ""
    return raw.strip()[len(CONTEXT_PREFIX):].strip()


def clean_quote(lines):
    """Quote text with the '> ' prefixes and the trailing stamp line removed.

    parse_predictions puts the stamp line in BOTH `stamp` and `quote`, so it
    must be dropped here or every quote ends with a duplicated timestamp.
    The outermost straight quotes are stripped because the template adds
    curly ones.
    """
    body = [l[1:].strip() for l in lines if not STAMP_RE.match(l)]
    text = "\n".join(body).strip()
    if text.startswith('"'):
        text = text[1:]
    if text.endswith('"'):
        text = text[:-1]
    return text.strip()


def _yaml_block(key, text, indent="  "):
    """Emit a YAML literal block scalar. Quotes contain ", : and newlines, so
    quoted scalars are not safe here."""
    lines = text.split("\n") if text else [""]
    body = "\n".join(f"{indent}{l}" if l else "" for l in lines)
    return f"{key}: |\n{body}"


def _yaml_str(key, value):
    """Double-quoted scalar with embedded quotes and backslashes escaped."""
    esc = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'{key}: "{esc}"'


def render_collection_entry(e, theme_page):
    """One Jekyll collection document. Returns (relpath, content).

    `theme_page` is the permalink of the theme page that lists this entry —
    the year page for split themes, the theme page otherwise. The single
    prediction page links back to it, so it must be the page the anchor
    actually exists on.
    """
    tslug = theme_slug(e["theme"])
    eid = make_id(e)
    permalink = f"/predictions/{tslug}/{eid}/"
    head = "\n".join([
        "---",
        "layout: prediction",
        f"theme: {tslug}",
        _yaml_str("theme_title", e["theme"]),
        f"date: {e['date']}",
        _yaml_str("year", e["date"][:4]),
        _yaml_str("title", e["title"]),
        f"permalink: {permalink}",
        f"slug_id: {eid}",
        f"theme_page: {theme_page}",
        _yaml_str("source", clean_source(e["source"])),
        f"source_url: {e['stamp'][1]}",
        _yaml_str("timestamp", e["stamp"][0]),
        f"vid: {e['vid']}",
        _yaml_block("quote", clean_quote(e["quote"])),
        _yaml_block("context", clean_context(e["context"])),
        "---",
        "",
    ])
    return f"{tslug}/{eid}.md", head
```

- [ ] **Step 4: Run the tests to verify they pass**

```bash
cd research && python3 -m unittest test_export_blog -v
```
Expected: all tests OK.

- [ ] **Step 5: Commit**

```bash
git add research/export_blog.py research/test_export_blog.py
git commit -m "Emit one collection document per prediction

Strips the stamp line that parse_predictions duplicates into the quote,
the literal Context label, and the emphasis underscores around sources.
Front matter uses block scalars because quotes contain quote marks,
colons and em dashes."
```

---

### Task 4: Wire the generator and regenerate

**Files:**
- Modify: `research/export_blog.py` (`render_theme_page`, `main`)
- Modify: `_config.yml` (collections block)
- Create: `_predictions/**` (generated, 1,689 files)

**Interfaces:**
- Consumes: `render_collection_entry` (Task 3)
- Produces: `_predictions/<theme-slug>/<id>.md` × 1,689; theme pages whose bodies are Liquid loops

- [ ] **Step 1: Declare the collection**

Add to `_config.yml` after the `exclude:` block:

```yaml
collections:
  predictions:
    output: true
```

No `permalink:` key — each document carries an explicit `permalink`, because Jekyll 3.10 cannot expand custom front matter like `:theme` in a collection permalink.

- [ ] **Step 2: Base the year-split on entry size, not page size**

`theme_pages` decides to split by measuring the *rendered page*:
`if len(full.encode()) <= split_bytes`. Once a theme page becomes a short Liquid
loop every page is tiny, so the split would never fire — the nine
`/predictions/cloud-decentralization/<year>/` URLs would 404 and all 461 entries
would land on one page. Measure the entries instead.

Add above `theme_pages` in `research/export_blog.py`:

```python
def theme_is_split(entries, split_bytes=SPLIT_BYTES):
    """Whether a theme is large enough to split into year pages.

    Measures entry content, NOT the rendered page: the page is now a short
    Liquid loop whose size says nothing about how much it renders.
    """
    return sum(len(render_entry(e).encode()) for e in entries) > split_bytes


def entry_theme_page(e, split):
    """Permalink of the theme page that lists this entry."""
    slug = theme_slug(e["theme"])
    if split:
        return f"/predictions/{slug}/{e['date'][:4]}/"
    return f"/predictions/{slug}/"
```

In `theme_pages`, replace these three lines:

```python
    full = render_theme_page(theme, entries, f"/predictions/{slug}/")
    if len(full.encode()) <= split_bytes:
        return {f"{slug}.md": full}
```

with:

```python
    if not theme_is_split(entries, split_bytes):
        return {f"{slug}.md": render_theme_page(
            theme, entries, f"/predictions/{slug}/")}
```

Verified against the real corpus: this splits exactly the theme that splits today
(Cloud Decentralization, 320,633 bytes of entries against the 300,000 threshold)
and leaves the other nine whole.

- [ ] **Step 3: Make theme pages loop over the collection**

Replace `render_theme_page`. Copy the en-dash characters from the existing
function rather than retyping them — only the body changes:

```python
def render_theme_page(theme, entries, permalink, title=None, year=None):
    entries = sorted(entries, key=lambda e: e["date"])
    years = f"{entries[0]['date'][:4]}\u2013{entries[-1]['date'][:4]}"
    pairs = [
        ("layout", "predictions"),
        ("title", title or f"{theme} \u2014 Predictions"),
        ("theme", theme),
        ("theme_slug", theme_slug(theme)),
        ("permalink", permalink),
    ]
    if year:
        pairs.append(("year", year))
    head = _fm(pairs)
    intro = f"_{len(entries)} statements \u00b7 {years}_"
    loop = "\n".join([
        '{%- assign items = site.predictions '
        '| where: "theme", page.theme_slug -%}',
        '{%- if page.year -%}'
        '{%- assign items = items | where: "year", page.year -%}'
        '{%- endif -%}',
        '{%- assign items = items | sort: "slug_id" -%}',
        "{%- for item in items -%}",
        "{%- if forloop.index > 1 %}<hr>{% endif %}",
        "{% include prediction.html item=item %}",
        "{%- endfor -%}",
    ])
    return f"{head}\n\n{intro}\n\n{loop}\n"
```

**Sort on `slug_id`, never on `date`.** `slug_id` begins with the ISO date so the
order is identical, but it is a plain string. Sorting a collection on `date` risks
Jekyll comparing a `Date` against a `String` — the exact failure that broke this
site's build once already (see `AGENTS.md`).

Pass the year through when `theme_pages` renders a year page:

```python
        pages[os.path.join(slug, f"{y}.md")] = render_theme_page(
            theme, sub, f"/predictions/{slug}/{y}/",
            title=f"{theme} \u2014 {y}", year=y
        )
```

- [ ] **Step 4: Write the collection files from `main()`**

Replace `main()` in `research/export_blog.py` with:

```python
def main():
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ap = argparse.ArgumentParser()
    ap.add_argument("--blog-dir", default=repo)
    args = ap.parse_args()
    src = os.path.join(repo, "PREDICTIONS.md")
    with open(src) as f:
        meta, entries = parse_predictions(f.read())

    ids = [make_id(e) for e in entries]
    if len(set(ids)) != len(ids):
        raise SystemExit("duplicate prediction ids; refusing to overwrite")

    themes = {e["theme"] for e in entries}
    out_dir = os.path.join(args.blog_dir, "predictions")
    if os.path.isdir(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)
    pages = {"index.md": render_index(meta, entries)}
    for t in sorted(themes):
        pages.update(theme_pages(t, [e for e in entries if e["theme"] == t]))
    for rel, content in pages.items():
        path = os.path.join(out_dir, rel)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as f:
            f.write(content)

    coll_dir = os.path.join(args.blog_dir, "_predictions")
    if os.path.isdir(coll_dir):
        shutil.rmtree(coll_dir)
    split_themes = {
        t: theme_is_split([e for e in entries if e["theme"] == t])
        for t in themes
    }
    for e in entries:
        rel, content = render_collection_entry(
            e, entry_theme_page(e, split_themes[e["theme"]]))
        path = os.path.join(coll_dir, rel)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as f:
            f.write(content)

    print(f"wrote {len(pages)} pages and {len(entries)} predictions "
          f"to {args.blog_dir}")
```

The `--blog-dir` default changes from the sibling repo to this repo, now that
both live together.

- [ ] **Step 5: Regenerate**

```bash
cd research && python3 export_blog.py
```
Expected: `wrote N pages and 1689 predictions to /Users/gosuri/code/gosuri.github.io`

- [ ] **Step 6: Verify the output shape**

```bash
find _predictions -name '*.md' | wc -l          # expect 1689
ls _predictions                                  # expect 10 theme dirs
head -20 _predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved.md
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Generate a Jekyll collection of all 1,689 predictions

Theme pages keep their URLs and year-splitting but now loop over the
collection. Each document carries an explicit permalink because Jekyll
3.10 cannot expand custom front matter in collection permalinks."
```

---

### Task 5: Prediction templates

**Files:**
- Create: `_includes/prediction.html`
- Create: `_layouts/prediction.html`
- Reference: `design/prediction-card.html`, `design/page-prediction.html`

**Interfaces:**
- Consumes: collection documents from Task 4 (`item.slug_id`, `item.title`, `item.quote`, `item.context`, `item.source`, `item.source_url`, `item.timestamp`, `item.theme`, `item.theme_title`, `item.url`)
- Produces: `.prediction` and `.prediction-page` markup that Task 6 styles

- [ ] **Step 1: Create the entry include**

`_includes/prediction.html`:

```html
{%- assign item = include.item -%}
<article class="prediction" id="{{ item.slug_id }}">
  <p class="dateline">
    <a class="permalink" href="{{ item.url | prepend: site.baseurl }}"><time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%-d %b %Y' }}</time></a>
    <a class="anchor" href="#{{ item.slug_id }}" aria-label="Link to this prediction">§</a>
  </p>
  <h3><a href="{{ item.url | prepend: site.baseurl }}">{{ item.title | escape }}</a></h3>
  <p class="source"><em>{{ item.source | escape }}</em><span class="share-wrap"><span class="sep">·</span><a class="share" href="{{ item.url | prepend: site.baseurl }}" data-copy>Copy link</a></span></p>
  <blockquote><p>“{{ item.quote | strip | escape }}” — <a href="{{ item.source_url | escape }}">{{ item.timestamp }}</a></p></blockquote>
  {%- if item.context and item.context != "" %}
  <p class="context"><strong>Context:</strong> {{ item.context | strip | escape }}</p>
  {%- endif %}
</article>
```

- [ ] **Step 2: Create the single-prediction layout**

`_layouts/prediction.html`:

```html
---
layout: default
---
<p class="crumb"><a href="{{ page.theme_page | prepend: site.baseurl }}">← {{ page.theme_title | escape }}</a></p>
<article class="prediction-page">
  <p class="dateline"><time datetime="{{ page.date | date: '%Y-%m-%d' }}">{{ page.date | date: '%-d %b %Y' }}</time></p>
  <h1>{{ page.title | escape }}</h1>
  <p class="source"><em>{{ page.source | escape }}</em></p>
  <blockquote><p>“{{ page.quote | strip | escape }}” — <a href="{{ page.source_url | escape }}">{{ page.timestamp }}</a></p></blockquote>
  {%- if page.context and page.context != "" %}
  <p class="context"><strong>Context:</strong> {{ page.context | strip | escape }}</p>
  {%- endif %}
  {%- capture abs_url %}{{ page.url | prepend: site.baseurl | prepend: site.url }}{% endcapture -%}
  {%- capture share_text %}“{{ page.quote | strip | truncate: 200 }}” — @gregosuri, {{ page.date | date: '%-d %b %Y' }}{% endcapture -%}
  <p class="share-row">
    <a class="share" href="{{ page.url | prepend: site.baseurl }}" data-copy>Copy link</a>
    <a class="external" href="https://x.com/intent/post?text={{ share_text | url_encode }}&url={{ abs_url | url_encode }}">Post on X</a>
  </p>
</article>
<p class="post-nav"><a href="{{ page.theme_page | append: '#' | append: page.slug_id | prepend: site.baseurl }}">See it among all {{ page.theme_title | escape }} predictions →</a></p>
```

- [ ] **Step 3: Build and verify a page renders**

```bash
rm -rf /tmp/t5 && mkdir -p /tmp/t5
docker run --rm -v "$PWD":/github/workspace -v /tmp/t5:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
find /tmp/t5/predictions -name index.html | wc -l   # expect 1689 + theme pages
cat /tmp/t5/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/index.html
```

Expected: the page exists, shows the dateline, title, quote ending in a timestamp link, and a share row. No raw `{{ }}` and no doubled `Context:`.

- [ ] **Step 4: Verify theme pages still list entries**

```bash
grep -c 'class="prediction"' /tmp/t5/predictions/local-compute/index.html   # expect 159
grep -c 'class="prediction"' /tmp/t5/predictions/cloud-decentralization/2021/index.html  # expect 136
```

- [ ] **Step 5: Commit**

```bash
git add _includes/prediction.html _layouts/prediction.html
git commit -m "Add prediction entry include and single-prediction layout"
```

---

### Task 6: Styles

**Files:**
- Modify: `_sass/_components.scss:206-263` (replace), `:50` (generalize), `:197-203` (widen)

**Interfaces:**
- Consumes: markup classes from Task 5
- Produces: no new interfaces

- [ ] **Step 1: Replace the prediction-entries block**

Replace `_sass/_components.scss` lines 206–263 (the `---- prediction entries ----` block, ending at the `.predictions hr` rule) with:

```scss
// ---- prediction entries ----------------------------------------------------
// design/prediction-card.html, design/page-theme.html
// Entries emit explicit classes from _includes/prediction.html:
// .prediction > .dateline (permalink + § anchor), h3, .source, blockquote, .context.

.predictions > p:first-child { color: var(--ink-soft); margin: 0 0 var(--s4); }
.prediction { scroll-margin-top: var(--s4); }

.dateline {
  display: flex; align-items: baseline; gap: var(--s2);
  margin: 0 0 var(--s1);
  font-size: var(--step-0); font-weight: 520;
  font-variant-numeric: tabular-nums; letter-spacing: .06em;
  text-transform: uppercase; color: var(--accent);
}
.dateline a.permalink {
  color: inherit; text-decoration: underline;
  text-decoration-color: transparent; text-decoration-thickness: 1px;
  text-underline-offset: .3em; transition: text-decoration-color .15s ease;
}
.dateline a.permalink:hover,
.prediction:target .dateline a.permalink { text-decoration-color: var(--accent); }
.dateline a.anchor {
  color: var(--ink-soft); text-decoration: none;
  letter-spacing: 0; text-transform: none; font-weight: 400;
  opacity: 0; transition: opacity .15s ease, color .15s ease;
}
.prediction:hover .dateline a.anchor,
.dateline a.anchor:focus-visible { opacity: 1; }
.dateline a.anchor:hover { color: var(--accent); }

.prediction h3 {
  font-size: var(--step-1); font-weight: 560; line-height: 1.3;
  letter-spacing: -0.008em; margin: 0 0 var(--s2);
}
.prediction h3 a { text-decoration: none; transition: color .15s ease; }
.prediction h3 a:hover { color: var(--accent); }

.source {
  display: flex; flex-wrap: wrap; gap: 0 var(--s2);
  font-size: var(--step--1); color: var(--ink-soft); margin: 0 0 var(--s3);
}
.share-wrap { white-space: nowrap; }
.share-wrap .sep { margin-right: var(--s2); user-select: none; }
.source a.share, .share-row a {
  color: var(--ink-soft); font-style: normal;
  text-decoration: underline; text-decoration-color: var(--rule);
  text-decoration-thickness: 1px; text-underline-offset: .25em;
  white-space: nowrap;
  transition: color .15s ease, text-decoration-color .15s ease;
}
.source a.share:hover, .share-row a:hover {
  color: var(--accent); text-decoration-color: var(--accent);
}
.source a.share[data-copied], .share-row a[data-copied] {
  color: var(--accent); text-decoration-color: transparent;
}

.prediction blockquote {
  margin: var(--s3) 0; padding: 0; font-style: italic; line-height: 1.65;
}
.prediction blockquote p { margin: 0 0 var(--s2); text-indent: -0.42ch; }
.prediction blockquote a, .prediction-page blockquote a {
  font-style: normal; font-size: var(--step--1);
  font-variant-numeric: tabular-nums; letter-spacing: .05em;
  color: var(--accent); text-decoration: none; white-space: nowrap;
}
.prediction blockquote a:hover, .prediction-page blockquote a:hover {
  text-decoration: underline; text-decoration-thickness: 1px;
  text-underline-offset: .25em;
}

.context { font-size: var(--step--1); color: var(--ink-soft); margin: 0; }
.context strong { font-weight: 580; }
.context a { color: var(--accent); text-decoration: none; }
.context a:hover { text-decoration: underline; }

.predictions hr {
  border: 0; border-top: 1px solid var(--rule);
  width: var(--s5); margin: var(--s4) auto;
}

// ---- single prediction page ------------------------------------------------
// design/page-prediction.html

.prediction-page .dateline { margin: var(--s4) 0 var(--s2); }
.prediction-page h1 {
  font-size: var(--step-3); font-weight: 480; letter-spacing: -0.012em;
  line-height: 1.15; margin: 0 0 var(--s2);
}
.prediction-page .source { margin: 0 0 var(--s4); }
.prediction-page blockquote {
  margin: var(--s4) 0; padding: 0; font-style: italic;
  font-size: var(--step-1); font-weight: 360; line-height: 1.55;
  letter-spacing: -0.004em;
}
.prediction-page blockquote p { margin: 0 0 var(--s2); text-indent: -0.42ch; }
.share-row {
  display: flex; flex-wrap: wrap; gap: var(--s3);
  margin: var(--s4) 0 0; padding-top: var(--s3);
  border-top: 1px solid var(--rule);
  font-size: var(--step--1); color: var(--ink-soft);
}
```

- [ ] **Step 2: Generalize the external-link arrow**

At `_sass/_components.scss:50`, change the selector so the share row reuses it rather than duplicating it:

```scss
.post-link.external::after, .external::after {
```

- [ ] **Step 3: Widen `.post-nav` so it applies off the essay page**

At `_sass/_components.scss:202-203`, the selectors are `.post .post-nav a`. The prediction page is not inside `.post`, so add the unscoped pair immediately after them:

```scss
.post-nav a { color: var(--ink-soft); text-decoration: none; transition: color .15s ease; }
.post-nav a:hover { color: var(--accent); }
```

Keep the `.post .post-nav a` rules — the comment above them explains they must out-rank `.post p a`.

- [ ] **Step 4: Build and confirm the CSS compiles and contains the new rules**

```bash
rm -rf /tmp/t6 && mkdir -p /tmp/t6
docker run --rm -v "$PWD":/github/workspace -v /tmp/t6:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
grep -o 'prediction-page\|share-row\|dateline' /tmp/t6/css/main.css | sort -u
```
Expected: all three present. A Sass error fails the build loudly.

- [ ] **Step 5: Commit**

```bash
git add _sass/_components.scss
git commit -m "Style prediction entries and the single-prediction page

Replaces the positional kramdown selectors with class-based rules now
that entries emit explicit classes, and reuses the existing external
arrow and post-nav rules instead of duplicating them."
```

---

### Task 7: Social meta and the copy-link behavior

**Files:**
- Modify: `_includes/head.html:17-20`
- Modify: `_includes/footer.html`

**Interfaces:**
- Consumes: collection front matter (Task 4)
- Produces: `og:image` URLs of the form `<abs_url>card.png`, which Task 9 renders

- [ ] **Step 1: Add the conditional og/twitter block**

In `_includes/head.html`, immediately before the closing `</head>`, add:

```liquid
  {%- if page.collection == "predictions" %}
  {%- capture abs_url %}{{ page.url | prepend: site.baseurl | prepend: site.url }}{% endcapture -%}
  {%- capture og_desc %}“{{ page.quote | strip | truncate: 140 }}” — Greg Osuri, {{ page.date | date: '%-d %b %Y' }}{% endcapture -%}
  <meta property="og:type" content="article">
  <meta property="og:title" content="{{ page.title | escape }}">
  <meta property="og:description" content="{{ og_desc | escape }}">
  <meta property="og:url" content="{{ abs_url }}">
  <meta property="og:image" content="{{ abs_url }}card.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@gregosuri">
  {%- endif %}
```

The existing `<meta name="description">` at line 12 already prefers `page.description` then `page.excerpt`; leave it alone.

- [ ] **Step 2: Add the copy-link listener**

Append to `_includes/footer.html`, after the existing markup:

```html
<script>
document.addEventListener('click', function (e) {
  var a = e.target.closest('a.share[data-copy]');
  if (!a) return;
  e.preventDefault();
  var url = new URL(a.getAttribute('href'), location.href).href;
  var done = function () {
    a.textContent = 'Copied';
    a.setAttribute('data-copied', '');
    setTimeout(function () {
      a.textContent = 'Copy link';
      a.removeAttribute('data-copied');
    }, 1600);
  };
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
    .then(done, function () { location.href = url; });
});
</script>
```

This is the site's only JavaScript. Without it the control is a plain link to the page; without a clipboard API it navigates.

- [ ] **Step 3: Verify the meta renders on a prediction and nowhere else**

```bash
rm -rf /tmp/t7 && mkdir -p /tmp/t7
docker run --rm -v "$PWD":/github/workspace -v /tmp/t7:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
grep -E 'og:image|og:url' /tmp/t7/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/index.html
grep -c 'og:image' /tmp/t7/about/index.html   # expect 0
```

Expected on the prediction page:
```
<meta property="og:url" content="https://www.gregosuri.com/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/">
<meta property="og:image" content="https://www.gregosuri.com/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/card.png">
```
Both MUST be `www.gregosuri.com`. An apex URL means `site.url` regressed.

- [ ] **Step 4: Commit**

```bash
git add _includes/head.html _includes/footer.html
git commit -m "Add prediction social meta and the copy-link handler"
```

---

### Task 8: Custom deploy workflow, without cards

**Files:**
- Create: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: nothing from earlier tasks
- Produces: a deploy pipeline Task 9 extends with a rendering step

This task deliberately ships no new behavior. It swaps the pipeline and proves the swap is safe **before** anything depends on it.

- [ ] **Step 1: Create the workflow**

`.github/workflows/deploy.yml`:

```yaml
name: Deploy site

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - uses: actions/upload-pages-artifact@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

`actions/jekyll-build-pages@v1` is the same image used for local verification, so CI and local stay identical.

- [ ] **Step 2: Disable the managed build**

In the repo settings — Settings → Pages → Build and deployment → Source — change **Deploy from a branch** to **GitHub Actions**. Without this, both pipelines race.

- [ ] **Step 3: Push and watch**

```bash
git add .github/workflows/deploy.yml
git commit -m "Deploy via a custom Actions workflow

Same jekyll-build-pages image the managed build used, so output is
unchanged. This lands on its own so the pipeline swap and the card
rendering cannot fail together."
git push origin master
RUN=$(gh run list --limit 1 --json databaseId -q '.[0].databaseId')
gh run watch "$RUN" --exit-status
```

- [ ] **Step 4: Verify the live site is unchanged**

Before pushing, confirm the workflow's local equivalent still produces the same
site — using the normalizer, for the same reason as Task 1 Step 5:

```bash
rm -rf /tmp/t8 && mkdir -p /tmp/t8
docker run --rm -v "$PWD":/github/workspace -v /tmp/t8:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e GITHUB_API_URL=https://api.github.com -e INPUT_SOURCE=. \
  -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true -e INPUT_VERBOSE=false \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
```

Then after the deploy lands:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.gregosuri.com/
curl -s "https://www.gregosuri.com/predictions/local-compute/?cb=$RANDOM" | grep -c 'class="prediction"'
curl -s -o /dev/null -w "%{http_code}\n" "https://www.gregosuri.com/predictions/cloud-decentralization/2021/"
```
Expected: `200`, `159`, `200`.

If the deploy fails, revert by switching Settings → Pages → Source back to **Deploy from a branch**. The managed build resumes immediately.

---

### Task 9: Render social cards in CI

**Files:**
- Create: `research/render_cards.mjs`, `research/package.json`
- Modify: `.github/workflows/deploy.yml`
- Reference: `design/social-preview.html`

**Interfaces:**
- Consumes: `_site/predictions/**/index.html` from Task 8; front matter from Task 4
- Produces: `_site/predictions/<theme>/<id>/card.png` at 1200×630

- [ ] **Step 1: Write the renderer**

`research/render_cards.mjs`:

```js
// Renders one 1200x630 card.png per prediction into _site/.
// Reads the generated collection docs so it needs no Jekyll internals.
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { chromium } from 'playwright';

const ROOT = new URL('..', import.meta.url).pathname;
const COLL = join(ROOT, '_predictions');
const SITE = join(ROOT, '_site');

function frontMatter(text) {
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

function quoteSize(q) {
  if (q.length <= 120) return 52;
  if (q.length <= 260) return 44;
  return 38;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(fm, fontRoman, fontItalic) {
  const date = new Date(fm.date + 'T00:00:00Z').toLocaleDateString('en-GB',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";font-style:normal;font-weight:200 800;src:url("data:font/woff2;base64,${fontRoman}") format("woff2")}
@font-face{font-family:"Newsreader";font-style:italic;font-weight:200 800;src:url("data:font/woff2;base64,${fontItalic}") format("woff2")}
*{box-sizing:border-box}html,body{margin:0}
.og{width:1200px;height:630px;background:#faf8f4;color:#211f1a;font-family:"Newsreader",Georgia,serif;padding:72px 80px 64px;display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden}
.og::before{content:"";position:absolute;left:0;top:0;right:0;height:6px;background:#9c4221}
.meta{display:flex;align-items:baseline;gap:20px;font-size:24px;letter-spacing:.08em;text-transform:uppercase;color:#9c4221;font-weight:520;font-variant-numeric:tabular-nums;margin:0}
.meta .theme{color:#6e6759;font-weight:450}
blockquote{margin:0;align-self:center;font-style:italic;font-weight:340;font-size:${quoteSize(fm.quote)}px;line-height:1.3;letter-spacing:-0.008em;text-indent:-0.42ch;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}
.foot{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid #e4ddd0;padding-top:22px;font-size:24px;color:#6e6759;margin:0}
.foot .name{color:#211f1a;font-weight:520}
.foot .title{font-style:italic;max-width:760px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
</style></head><body><div class="og">
<p class="meta"><time>${esc(date)}</time><span class="theme">${esc(fm.theme_title)}</span></p>
<blockquote>“${esc(fm.quote.replace(/\n/g, ' ').trim())}”</blockquote>
<p class="foot"><span class="name">Greg Osuri</span><span class="title">${esc(fm.title)}</span><span>gregosuri.com</span></p>
</div></body></html>`;
}

const b64 = async p => (await readFile(p)).toString('base64');

async function collect(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await collect(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const roman = await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf.woff2'));
const italic = await b64(join(ROOT, 'assets/fonts/newsreader-latin-vf-italic.woff2'));
const files = await collect(COLL);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

let n = 0;
for (const f of files) {
  const fm = frontMatter(await readFile(f, 'utf8'));
  if (!fm || !fm.permalink) continue;
  const dest = join(SITE, fm.permalink, 'card.png');
  await mkdir(dirname(dest), { recursive: true });
  await page.setContent(html(fm, roman, italic), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.og').screenshot({ path: dest });
  if (++n % 100 === 0) console.log(`rendered ${n}/${files.length}`);
}
await browser.close();
console.log(`rendered ${n} cards`);
```

Fonts are inlined as data URIs and `document.fonts.ready` is awaited, so cards never render in a fallback face.

- [ ] **Step 2: Add the package manifest**

`research/package.json`:

```json
{
  "name": "gregosuri-cards",
  "private": true,
  "type": "module",
  "devDependencies": { "playwright": "1.49.1" }
}
```

- [ ] **Step 3: Render locally and eyeball one card**

```bash
cd research && npm install && npx playwright install --with-deps chromium
cd .. && node research/render_cards.mjs
open _site/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/card.png
```

Expected: 1,689 cards. Check the opening quotation mark is not clipped at the left padding edge — the hanging `text-indent: -0.42ch` sits close to it.

- [ ] **Step 4: Add rendering to the workflow**

In `.github/workflows/deploy.yml`, insert between the Jekyll build step and `upload-pages-artifact`:

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Cache rendered cards
        id: cards
        uses: actions/cache@v4
        with:
          path: .card-cache
          key: cards-${{ hashFiles('PREDICTIONS.md', 'research/render_cards.mjs') }}
      - name: Restore cached cards
        if: steps.cards.outputs.cache-hit == 'true'
        run: cp -R .card-cache/. _site/
      - name: Render social cards
        if: steps.cards.outputs.cache-hit != 'true'
        run: |
          cd research && npm install && npx playwright install --with-deps chromium
          cd .. && node research/render_cards.mjs
          mkdir -p .card-cache
          cd _site && find . -name card.png -exec cp --parents {} ../.card-cache/ \;
```

The cache key is content-based: cards re-render only when `PREDICTIONS.md` or the renderer changes.

- [ ] **Step 5: Push and verify end to end**

```bash
git add research/render_cards.mjs research/package.json .github/workflows/deploy.yml
git commit -m "Render a social card per prediction in CI

Cards are written into _site after Jekyll and cached by content hash,
so 145 MB of images never enter git."
git push origin master
RUN=$(gh run list --limit 1 --json databaseId -q '.[0].databaseId')
gh run watch "$RUN" --exit-status
```

- [ ] **Step 6: Verify the live card**

```bash
U=https://www.gregosuri.com/predictions/local-compute/2023-09-28-every-home-will-have-a-supercomputer-zved/
curl -s -o /dev/null -w "page   %{http_code}\n" "$U"
curl -s -o /dev/null -w "card   %{http_code} %{content_type} %{size_download}\n" "${U}card.png"
```
Expected: page `200`; card `200 image/png` at roughly 86,000 bytes.

Then paste the URL into X's card validator and a Slack message; both must show the quote card.

---

## Final verification

Run after Task 9. These are the spec's acceptance gates.

- [ ] Prediction pages exist: `find _site/predictions -name index.html | wc -l` ≥ 1689
- [ ] No stray pages: `ls _site | grep -E 'research|videos|catalog|transcripts'` prints nothing
- [ ] Year-split URLs survive: `/predictions/cloud-decentralization/2021/` returns 200
- [ ] `#<id>` on a theme page scrolls to the entry and shows the accent underline (`:target`)
- [ ] `§` appears only on hover/focus and is keyboard reachable
- [ ] "Copy link" copies the absolute URL, reads "Copied" for 1.6 s, then reverts
- [ ] At 375 px wide, `·` never wraps away from "Copy link"
- [ ] `feed.xml` unchanged apart from its build timestamps (compare with `normbuild.sh`; pubDate/lastBuildDate always differ)
- [ ] Theme standfirst counts match the collection
- [ ] `cd research && python3 -m unittest test_export_blog -v` passes
