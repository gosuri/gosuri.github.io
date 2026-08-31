# gregosuri.com Redesign + Predictions Archive Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign gregosuri.com (Jekyll, GitHub Pages) in an editorial-minimal direction and add a `/predictions/` section generated from the predictions archive.

**Architecture:** A Python exporter in `~/code/gosuri-predictions` parses `PREDICTIONS.md` and emits Jekyll markdown pages into this repo. A component library of self-contained preview HTML files in `design/` defines the visual system (synced to claude.ai/design via DesignSync for user iteration); `_sass` + `_layouts` + `_includes` are rebuilt from it.

**Tech Stack:** Jekyll 3.x (stock GitHub Pages, kramdown, no custom plugins), SCSS, Python 3 stdlib (exporter + tests via `unittest`), Newsreader variable webfont (self-hosted woff2).

**Spec:** `docs/superpowers/specs/2026-08-30-blog-redesign-design.md`

## Global Constraints

- Must build on stock GitHub Pages safe mode: no custom plugins, no build step beyond Jekyll's own Sass/kramdown.
- All work on the `redesign` branch of `/Users/gosuri/code/gosuri.github.io`. Never touch `master`.
- Commit messages: plain, no `Co-Authored-By`, no "Generated with Claude Code" footer (user's global rule).
- `~/code/gosuri-predictions` is NOT a git repo — exporter files there are written but not committed; generated output is committed in the blog repo.
- Design previews in `design/` are plain HTML with inline CSS, zero external requests, first line `<!-- @dsCard group="…" -->`.
- Locked design tokens (single source of truth; previews and `_sass/_tokens.scss` must match):
  - `--paper: #faf8f4` (background), `--ink: #211f1a` (text), `--ink-soft: #6e6759` (secondary), `--accent: #9c4221` (links/marks), `--rule: #e4ddd0` (hairlines)
  - `--font-serif: "Newsreader", "Iowan Old Style", Georgia, serif` — used for headings AND body
  - Base 18px (`html { font-size: 112.5%; }`), scale 1.25: `--step--1: .8889rem; --step-0: 1rem; --step-1: 1.25rem; --step-2: 1.5625rem; --step-3: 1.9531rem; --step-4: 2.4414rem`
  - Measure: `--measure: 65ch`; spacing scale `--s1: .25rem; --s2: .5rem; --s3: 1rem; --s4: 2rem; --s5: 4rem`
- Nav contract: `_includes/header.html` lists only pages with `nav: true` front matter, plus the hardcoded `https://art.gregosuri.com` link. `about.md`, `posts.html`, and `predictions/index.md` get `nav: true`; theme pages do NOT (they have `title` but no `nav`).

---

### Task 1: Predictions exporter — parser (TDD)

**Files:**
- Create: `/Users/gosuri/code/gosuri-predictions/scripts/export_blog.py`
- Test: `/Users/gosuri/code/gosuri-predictions/scripts/test_export_blog.py`

**Interfaces:**
- Consumes: `PREDICTIONS.md` canonical structure — header line `_N extracted statements from M videos…_`, `## Theme`, `### YYYY-MM-DD — Title`, `_Source (Channel)_ · [video page](videos/<id>.md)`, `> ` quote lines ending with `> — [HH:MM:SS](https://www.youtube.com/watch?v=…&t=…s)`, optional `**Context:** …` line.
- Produces (used by Task 2): `slugify(name) -> str`; `parse_predictions(text) -> (meta: dict with key "declared", entries: list[dict])` where each entry has keys `theme, date, title, source, quote (list of verbatim "> " lines incl. the timestamp line), stamp ((hh:mm:ss, url) tuple), context (str|None)`. Raises `ValueError` on malformed entries or count mismatch.

- [ ] **Step 1: Write the failing tests**

`scripts/test_export_blog.py`:

```python
import unittest
import export_blog as eb

FIXTURE = """# Predictions & Notable Claims — Greg Osuri

_3 extracted statements from 2 videos. Each quote links to the exact moment on YouTube._

## Local Compute

### 2018-11-10 — Devices will outnumber humans
_CoinBundle interview (CoinBundle)_ · [video page](videos/Don1slbJlMQ.md)

> "We're moving to a more decentralized infrastructure."
> — [00:25:36](https://www.youtube.com/watch?v=Don1slbJlMQ&t=1536s)

**Context:** Closing argument on decentralization.

### 2019-08-06 — Home hardware made almost free
_Techpost interview (Techpost)_ · [video page](videos/WKvrKWdc9OA.md)

> "This device sits in your house."
> "It becomes part of the Akash network."
> — [00:10:22](https://www.youtube.com/watch?v=WKvrKWdc9OA&t=622s)

## Energy & AI

### 2024-03-01 — Energy is the bottleneck
_Some pod (SomeChannel)_ · [video page](videos/abc123.md)

> "Energy, not chips, is the constraint."
> — [01:00:00](https://www.youtube.com/watch?v=abc123&t=3600s)
"""


class TestSlugify(unittest.TestCase):
    def test_ampersand_and_spaces(self):
        self.assertEqual(eb.slugify("Energy & AI"), "energy-ai")
        self.assertEqual(eb.slugify("Crypto & DePIN"), "crypto-depin")
        self.assertEqual(eb.slugify("Local Compute"), "local-compute")


class TestParse(unittest.TestCase):
    def test_parses_all_entries(self):
        meta, entries = eb.parse_predictions(FIXTURE)
        self.assertEqual(meta["declared"], 3)
        self.assertEqual(len(entries), 3)
        e = entries[0]
        self.assertEqual(e["theme"], "Local Compute")
        self.assertEqual(e["date"], "2018-11-10")
        self.assertEqual(e["title"], "Devices will outnumber humans")
        self.assertEqual(e["source"], "_CoinBundle interview (CoinBundle)_")
        self.assertEqual(e["stamp"][0], "00:25:36")
        self.assertIn("t=1536s", e["stamp"][1])
        self.assertTrue(e["context"].startswith("**Context:**"))
        self.assertIsNone(entries[1]["context"])
        self.assertEqual(len(entries[1]["quote"]), 3)  # 2 quote lines + stamp line
        self.assertEqual(entries[2]["theme"], "Energy & AI")

    def test_count_mismatch_raises(self):
        bad = FIXTURE.replace("_3 extracted", "_4 extracted")
        with self.assertRaises(ValueError):
            eb.parse_predictions(bad)

    def test_missing_stamp_raises(self):
        bad = FIXTURE.replace(
            "> — [01:00:00](https://www.youtube.com/watch?v=abc123&t=3600s)\n", ""
        )
        with self.assertRaises(ValueError):
            eb.parse_predictions(bad)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd /Users/gosuri/code/gosuri-predictions/scripts && python3 -m unittest test_export_blog -v`
Expected: FAIL/ERROR with `ModuleNotFoundError: No module named 'export_blog'`

- [ ] **Step 3: Write the parser**

`scripts/export_blog.py`:

```python
#!/usr/bin/env python3
"""Export PREDICTIONS.md into Jekyll pages in the blog repo."""
import argparse
import os
import re
import shutil
import sys

SPLIT_BYTES = 300_000

HEADER_RE = re.compile(r"_(\d[\d,]*) extracted statements from (\d+) videos")
THEME_RE = re.compile(r"^## (.+)$")
ENTRY_RE = re.compile(r"^### (\d{4}-\d{2}-\d{2}) — (.+)$")
STAMP_RE = re.compile(
    r"^> — \[(\d{2}:\d{2}:\d{2})\]\((https://www\.youtube\.com/watch\?[^)]+)\)"
)
VIDEO_PAGE_RE = re.compile(r"\s*·\s*\[video page\]\([^)]*\)\s*$")


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def parse_predictions(text):
    m = HEADER_RE.search(text)
    declared = int(m.group(1).replace(",", "")) if m else None
    entries = []
    theme = None
    cur = None

    def close():
        nonlocal cur
        if cur is not None:
            entries.append(cur)
            cur = None

    for line in text.splitlines():
        tm = THEME_RE.match(line)
        if tm:
            close()
            theme = tm.group(1).strip()
            continue
        em = ENTRY_RE.match(line)
        if em:
            close()
            cur = {
                "theme": theme,
                "date": em.group(1),
                "title": em.group(2).strip(),
                "source": None,
                "quote": [],
                "stamp": None,
                "context": None,
            }
            continue
        if cur is None:
            continue
        sm = STAMP_RE.match(line)
        if sm:
            cur["stamp"] = (sm.group(1), sm.group(2))
            cur["quote"].append(line)
        elif line.startswith(">"):
            cur["quote"].append(line)
        elif line.startswith("_") and cur["source"] is None:
            cur["source"] = VIDEO_PAGE_RE.sub("", line).strip()
        elif line.startswith("**Context:**"):
            cur["context"] = line.strip()
    close()

    bad = [
        e
        for e in entries
        if not (e["theme"] and e["source"] and e["quote"] and e["stamp"])
    ]
    if bad:
        raise ValueError(
            f"{len(bad)} malformed entries; first: "
            f"{bad[0]['date']} — {bad[0]['title']}"
        )
    if declared is not None and len(entries) != declared:
        raise ValueError(
            f"parsed {len(entries)} entries but header declares {declared}"
        )
    return {"declared": declared}, entries
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd /Users/gosuri/code/gosuri-predictions/scripts && python3 -m unittest test_export_blog -v`
Expected: all tests PASS. (No commit — gosuri-predictions is not a git repo.)

---

### Task 2: Exporter — page rendering + generate output

**Files:**
- Modify: `/Users/gosuri/code/gosuri-predictions/scripts/export_blog.py` (append render/main)
- Test: `/Users/gosuri/code/gosuri-predictions/scripts/test_export_blog.py` (append render tests)
- Create (generated, committed in blog repo): `/Users/gosuri/code/gosuri.github.io/predictions/index.md`, `/Users/gosuri/code/gosuri.github.io/predictions/<theme-slug>.md` (and `<theme-slug>/<year>.md` for split themes)

**Interfaces:**
- Consumes: `parse_predictions`, `slugify` (Task 1).
- Produces: pages with front matter `layout: predictions`, `title`, `permalink` (landing also `nav: true`, theme pages also `theme: "<Theme>"`). Landing at `/predictions/`, themes at `/predictions/<slug>/`, split years at `/predictions/<slug>/<year>/`. Task 7's `_layouts/predictions.html` renders `page.theme` (falling back to `page.title`) as the `<h1>`, so page content contains no `#` h1. Landing body contains a `<div class="theme-grid">` of `<a class="theme-card">` cards (h2 theme name, `p.theme-meta` "N statements · YYYY–YYYY", `p.theme-sample` latest entry title). Theme body = entries in date order, `### date — title`, source line, verbatim quote block, context, separated by `---`.

- [ ] **Step 1: Write the failing render tests**

Append to `scripts/test_export_blog.py` (before the `if __name__` block):

```python
class TestRender(unittest.TestCase):
    def test_theme_page(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        page = eb.render_theme_page("Local Compute", local, "/predictions/local-compute/")
        self.assertIn('layout: "predictions"', page)
        self.assertIn('permalink: "/predictions/local-compute/"', page)
        self.assertIn('theme: "Local Compute"', page)
        # date order preserved, no h1 in body
        self.assertLess(page.index("2018-11-10"), page.index("2019-08-06"))
        self.assertNotIn("\n# ", page)

    def test_index_page(self):
        meta, entries = eb.parse_predictions(FIXTURE)
        page = eb.render_index(meta, entries)
        self.assertIn('permalink: "/predictions/"', page)
        self.assertIn("nav: true", page)
        self.assertIn('class="theme-grid"', page)
        self.assertIn("local-compute", page)
        self.assertIn("2 statements", page)  # Local Compute count

    def test_split_by_year(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        pages = eb.theme_pages("Local Compute", local, split_bytes=10)
        # tiny threshold forces split: index + one page per year
        paths = sorted(pages)
        self.assertIn("local-compute.md", paths)
        self.assertIn(os.path.join("local-compute", "2018.md"), paths)
        self.assertIn(os.path.join("local-compute", "2019.md"), paths)
```

Add `import os` at the top of the test file.

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `cd /Users/gosuri/code/gosuri-predictions/scripts && python3 -m unittest test_export_blog -v`
Expected: `AttributeError` on `render_theme_page` etc.; Task 1 tests still PASS.

- [ ] **Step 3: Implement rendering + main**

Append to `scripts/export_blog.py`:

```python
def _fm(pairs):
    out = ["---"]
    for k, v in pairs:
        if isinstance(v, bool):
            out.append(f"{k}: {'true' if v else 'false'}")
        else:
            out.append(f'{k}: "{str(v).replace(chr(34), chr(92) + chr(34))}"')
    out.append("---")
    return "\n".join(out)


def render_entry(e):
    parts = [f"### {e['date']} — {e['title']}", "", e["source"], ""]
    parts += e["quote"]
    if e["context"]:
        parts += ["", e["context"]]
    return "\n".join(parts)


def render_theme_page(theme, entries, permalink, title=None):
    entries = sorted(entries, key=lambda e: e["date"])
    years = f"{entries[0]['date'][:4]}–{entries[-1]['date'][:4]}"
    head = _fm(
        [
            ("layout", "predictions"),
            ("title", title or f"{theme} — Predictions"),
            ("theme", theme),
            ("permalink", permalink),
        ]
    )
    intro = f"_{len(entries)} statements · {years}_"
    body = "\n\n---\n\n".join(render_entry(e) for e in entries)
    return f"{head}\n\n{intro}\n\n{body}\n"


def theme_pages(theme, entries, split_bytes=SPLIT_BYTES):
    """Return {relative_path: content} for one theme, splitting by year if large."""
    slug = slugify(theme)
    full = render_theme_page(theme, entries, f"/predictions/{slug}/")
    if len(full.encode()) <= split_bytes:
        return {f"{slug}.md": full}
    pages = {}
    years = sorted({e["date"][:4] for e in entries})
    links = []
    for y in years:
        sub = [e for e in entries if e["date"][:4] == y]
        pages[os.path.join(slug, f"{y}.md")] = render_theme_page(
            theme, sub, f"/predictions/{slug}/{y}/", title=f"{theme} — {y}"
        )
        links.append(f"- [{y}](/predictions/{slug}/{y}/) — {len(sub)} statements")
    head = _fm(
        [
            ("layout", "predictions"),
            ("title", f"{theme} — Predictions"),
            ("theme", theme),
            ("permalink", f"/predictions/{slug}/"),
        ]
    )
    entries_sorted = sorted(entries, key=lambda e: e["date"])
    years_range = f"{entries_sorted[0]['date'][:4]}–{entries_sorted[-1]['date'][:4]}"
    intro = f"_{len(entries)} statements · {years_range} · by year:_"
    pages[f"{slug}.md"] = head + "\n\n" + intro + "\n\n" + "\n".join(links) + "\n"
    return pages


def render_index(meta, entries):
    themes = []
    seen = set()
    for e in entries:  # preserve source document theme order
        if e["theme"] not in seen:
            seen.add(e["theme"])
            themes.append(e["theme"])
    head = _fm(
        [
            ("layout", "predictions"),
            ("title", "Predictions"),
            ("nav", True),
            ("permalink", "/predictions/"),
        ]
    )
    n_videos = len({e["stamp"][1].split("v=")[1].split("&")[0] for e in entries})
    intro = (
        f"_{len(entries)} statements from {n_videos} videos and podcasts, "
        f"2018–present. Every quote links to the exact moment it was said._"
    )
    cards = ['<div class="theme-grid">']
    for t in themes:
        sub = sorted(
            [e for e in entries if e["theme"] == t], key=lambda e: e["date"]
        )
        slug = slugify(t)
        latest = sub[-1]
        cards.append(
            f'  <a class="theme-card" href="/predictions/{slug}/">\n'
            f"    <h2>{t}</h2>\n"
            f'    <p class="theme-meta">{len(sub)} statements · '
            f"{sub[0]['date'][:4]}–{sub[-1]['date'][:4]}</p>\n"
            f'    <p class="theme-sample">Latest: {latest["title"]} '
            f"({latest['date']})</p>\n"
            f"  </a>"
        )
    cards.append("</div>")
    return head + "\n\n" + intro + "\n\n" + "\n".join(cards) + "\n"


def main():
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--blog-dir",
        default=os.path.join(os.path.dirname(repo), "gosuri.github.io"),
    )
    args = ap.parse_args()
    src = os.path.join(repo, "PREDICTIONS.md")
    with open(src) as f:
        meta, entries = parse_predictions(f.read())
    out_dir = os.path.join(args.blog_dir, "predictions")
    if os.path.isdir(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)
    pages = {"index.md": render_index(meta, entries)}
    themes = {e["theme"] for e in entries}
    for t in sorted(themes):
        pages.update(theme_pages(t, [e for e in entries if e["theme"] == t]))
    for rel, content in pages.items():
        path = os.path.join(out_dir, rel)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w") as f:
            f.write(content)
    print(f"wrote {len(pages)} pages for {len(themes)} themes to {out_dir}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run all tests**

Run: `cd /Users/gosuri/code/gosuri-predictions/scripts && python3 -m unittest test_export_blog -v`
Expected: all PASS.

- [ ] **Step 5: Generate real output and sanity-check**

Run: `python3 /Users/gosuri/code/gosuri-predictions/scripts/export_blog.py && ls /Users/gosuri/code/gosuri.github.io/predictions/ && du -sh /Users/gosuri/code/gosuri.github.io/predictions/*.md | sort -rh | head -5`
Expected: "wrote N pages for 10 themes"; each `<slug>.md` ≤ ~300KB (larger themes appear as `<slug>/` year dirs).

- [ ] **Step 6: Commit generated pages in the blog repo**

```bash
cd /Users/gosuri/code/gosuri.github.io
git add predictions/
git commit -m "Generate predictions section from archive"
```

---

### Task 3: Design foundations — webfont + tokens preview

**Files:**
- Create: `/Users/gosuri/code/gosuri.github.io/assets/fonts/newsreader-latin-vf.woff2`, `assets/fonts/newsreader-latin-vf-italic.woff2`
- Create: `/Users/gosuri/code/gosuri.github.io/design/tokens.html`

**Interfaces:**
- Produces: the locked tokens (Global Constraints) rendered as a spec sheet; `@font-face` blocks reused verbatim by Task 4 previews and Task 6 Sass: family `Newsreader`, `font-weight: 200 800`, `font-style: normal` / `italic`, `font-display: swap`, `src: url(...) format("woff2")`.

- [ ] **Step 1: Download the variable fonts (Fontsource CDN, latin subset)**

```bash
cd /Users/gosuri/code/gosuri.github.io
mkdir -p assets/fonts
curl -fL -o assets/fonts/newsreader-latin-vf.woff2 \
  "https://cdn.jsdelivr.net/fontsource/fonts/newsreader:vf@latest/latin-wght-normal.woff2"
curl -fL -o assets/fonts/newsreader-latin-vf-italic.woff2 \
  "https://cdn.jsdelivr.net/fontsource/fonts/newsreader:vf@latest/latin-wght-italic.woff2"
file assets/fonts/*.woff2   # expect: Web Open Font Format (Version 2)
```

If jsDelivr 404s, fall back to `https://api.fontsource.org/v1/fonts/newsreader` to find the woff2 URLs for latin normal/italic variable weights.

- [ ] **Step 2: Build `design/tokens.html`**

Self-contained page, first line `<!-- @dsCard group="Foundations" -->`. Shows: color swatches (paper/ink/ink-soft/accent/rule with hex labels), the type scale (`--step--1`…`--step-4` each rendered as a sample line with its rem value), spacing scale bars, and a paragraph block demonstrating measure + Newsreader at 18px. Uses relative `@font-face` src `../assets/fonts/…` so the preview works locally; inline all CSS.

- [ ] **Step 3: Visual check + commit**

Open once locally (`open design/tokens.html`), confirm the font renders (serif, not Georgia fallback), then:

```bash
git add assets/fonts design/tokens.html
git commit -m "Add design tokens sheet and self-hosted Newsreader"
```

---

### Task 4: Component + page-shell previews

**Files (create, all in `/Users/gosuri/code/gosuri.github.io/design/`):**
- `navigation.html` (group Navigation), `post-list.html` (Content), `home-sections.html` (Content), `prediction-card.html` (Predictions), `theme-cards.html` (Predictions), `page-home.html`, `page-post.html`, `page-predictions.html`, `page-theme.html` (all group Pages)

**Interfaces:**
- Consumes: tokens + `@font-face` from Task 3 (copy the same inline token block into each preview so every file is self-contained — a `:root{…}` block with the locked variables).
- Produces: the exact markup contracts Task 6/7 implement:
  - header: `<header class="site-header"><a class="brand" href="/">Greg Osuri</a><nav class="site-nav"><a>…</a></nav></header>`
  - footer: `<footer class="site-footer">…</footer>` (copyright · GitHub · X · RSS)
  - post list: `<ul class="post-list"><li><time>…</time> <a class="post-link">…</a></li></ul>` (external-link variant shows `↗`)
  - home section: `<section class="home-section"><h2>Talks</h2><ul class="row-list"><li><time>…</time> <a>…</a> <span class="where">…</span></li></ul></section>`
  - prediction entry (styles what Task 2's markdown renders to): within `<div class="predictions">`, an `h3` (date — title), `p > em` source line, `blockquote` with final line containing the timestamp link, `p` starting with `<strong>Context:</strong>`
  - theme cards: `.theme-grid` (responsive grid) of `a.theme-card` with `h2`, `p.theme-meta`, `p.theme-sample` (matches Task 2 output exactly)
  - page shells compose the above into full pages with realistic content (use real quotes from PREDICTIONS.md)

- [ ] **Step 1: Load the design skill.** REQUIRED SUB-SKILL for this task: invoke `frontend-design:frontend-design` (or `hallmark` if invoked from the main session) before authoring, and design within the locked tokens — editorial minimal: type-driven hierarchy, hairline rules (`--rule`), generous whitespace, accent used sparingly (links, timestamp marks). No cards-with-shadows, no gradients, no emoji.

- [ ] **Step 2: Author the nine preview files.** Each: first line `<!-- @dsCard group="…" -->`, then a complete standalone HTML page (inline CSS, tokens block, @font-face with `../assets/fonts/` paths, realistic copy). Prediction card preview must include a long quote (5+ lines) and a short one.

- [ ] **Step 3: Check every file renders** (no missing font, no horizontal scroll at 375px width — test with narrow window), then commit:

```bash
git add design/
git commit -m "Add editorial-minimal design system previews"
```

---

### Task 5: Push design system to claude.ai/design

**Interfaces:**
- Consumes: `design/**` (Tasks 3–4).
- Produces: a claude.ai/design design-system project the user can iterate in.

- [ ] **Step 1:** `DesignSync list_projects` — if a project named like "gregosuri" exists and the user hasn't said otherwise, reuse it; else `create_project` with name `gregosuri.com`.
- [ ] **Step 2:** `finalize_plan` with `projectId`, `localDir: /Users/gosuri/code/gosuri.github.io`, `writes: ["design/**", "assets/fonts/*.woff2"]`.
- [ ] **Step 3:** `write_files` with `localPath` entries for every file in `design/` and both woff2 files (previews reference `../assets/fonts/`).
- [ ] **Step 4:** Report the project name so the user knows where to iterate. This task has no commit.

---

### Task 6: Sass rewrite from the design system

**Files:**
- Create: `_sass/_tokens.scss`, `_sass/_components.scss`
- Rewrite: `_sass/_base.scss`, `_sass/_layout.scss`, `css/main.scss`
- Keep: `_sass/_syntax-highlighting.scss` (adjust colors only if they clash with paper background)

**Interfaces:**
- Consumes: `design/*.html` inline CSS (source of truth) and the markup contracts from Task 4.
- Produces: class names exactly as in Task 4's contracts (`.site-header`, `.brand`, `.site-nav`, `.site-footer`, `.post-list`, `.post-link`, `.home-section`, `.row-list`, `.where`, `.predictions`, `.theme-grid`, `.theme-card`, `.theme-meta`, `.theme-sample`, `.page-content`, `.wrapper`).

- [ ] **Step 1:** `_tokens.scss` — `@font-face` blocks (font paths `/assets/fonts/...` absolute) + `:root` custom properties, copied verbatim from `design/tokens.html`.
- [ ] **Step 2:** `_base.scss` — reset, `html { font-size: 112.5%; }`, body (Newsreader, `--ink` on `--paper`, line-height 1.6), headings scale, links (`--accent`, underline `text-underline-offset`), blockquote (hairline left rule, italic off, `--ink-soft` attribution line), `time` styling, `hr` as hairline.
- [ ] **Step 3:** `_layout.scss` — `.wrapper` (max-width from measure + padding), header/footer/nav layout, responsive at ~640px.
- [ ] **Step 4:** `_components.scss` — post list, home sections, predictions entry styling, theme grid/cards; translate from the previews.
- [ ] **Step 5:** `css/main.scss` — front-matter-marked import of `tokens, base, layout, components, syntax-highlighting`. Delete any dead imports of removed partials. Commit:

```bash
git add _sass css/main.scss
git commit -m "Rebuild styles from design system"
```

---

### Task 7: Layouts, includes, and pages

**Files:**
- Rewrite: `_layouts/default.html`, `_layouts/page.html`, `_layouts/post.html`, `_includes/head.html`, `_includes/header.html`, `_includes/footer.html`, `index.html`, `posts.html`
- Create: `_layouts/predictions.html`
- Modify: `about.md` (front matter only: add `nav: true`)

**Interfaces:**
- Consumes: class contracts from Task 4/6; existing `_data/{talks,press,projects}.yml`; existing `_config.yml` (title, paginate) unchanged.
- Produces: nav driven by `page.nav == true` (about, posts, predictions) + hardcoded Art link; `_layouts/predictions.html` wraps `{{ content }}` in `<div class="predictions">`, renders `<h1>{{ page.theme | default: page.title }}</h1>`, and when `page.theme` is set adds `<a class="back" href="/predictions/">← All themes</a>`.

- [ ] **Step 1:** `_includes/head.html` — meta, `<title>` (`page.title | site.title` pattern), css link, RSS link, font preload for the two woff2 files, favicon. No external requests.
- [ ] **Step 2:** `_includes/header.html` — brand + `{% for p in site.pages %}{% if p.nav %}` links + Art link. `_includes/footer.html` — minimal single row.
- [ ] **Step 3:** `_layouts/*` — default (shell), page (h1 + content), post (h1, date, content), predictions (per interface above).
- [ ] **Step 4:** `index.html` — short bio line, latest posts via existing paginator, then Talks / Press / Open Source sections from `_data` using `.home-section` markup, plus a one-line pointer to `/predictions/`. `posts.html` — full reverse-chron list (keep existing `nav` behavior via `nav: true`, honor per-post external `link:` front matter exactly as the old templates did — check the old `index.html`/`posts.html` before rewriting and preserve that logic).
- [ ] **Step 5:** Commit:

```bash
git add _layouts _includes index.html posts.html about.md
git commit -m "Rebuild layouts and pages for editorial redesign"
```

---

### Task 8: Build, verify, LAN preview

**Interfaces:**
- Consumes: everything above.

- [ ] **Step 1: Build.** Try in order until one works: (a) `cd /Users/gosuri/code/gosuri.github.io && bundle install && bundle exec jekyll build`; (b) `gem install jekyll jekyll-paginate --user-install` then `jekyll build`; (c) the repo's Docker route: `docker build` / `make` targets (read `Makefile` first). Expected: `_site/` produced, zero build errors/warnings about missing includes.
- [ ] **Step 2: Structural link check.** Verify every generated theme page made it into `_site/predictions/<slug>/index.html`; run a Python one-liner over `_site/predictions/**/*.html` extracting `youtube.com/watch\?v=([\w-]+)&(?:amp;)?t=(\d+)s`, sample 10 random matches, and confirm each video id exists as `/Users/gosuri/code/gosuri-predictions/transcripts/<id>.md`.
- [ ] **Step 3: Weight check.** `find _site/predictions -name '*.html' -size +500k` — expect empty; if not, lower `SPLIT_BYTES` in the exporter, regenerate (Task 2 Step 5), rebuild.
- [ ] **Step 4: Serve for review** (background): `bundle exec jekyll serve --host 0.0.0.0 --skip-initial-build --no-watch` (or `python3 -m http.server 4000 -d _site -b 0.0.0.0` if Jekyll serve is unavailable). Print `http://localhost:4000` and `http://$(ipconfig getifaddr en0):4000  (LAN)`.
- [ ] **Step 5: Spot-render check.** curl localhost pages: `/`, `/posts/`, `/about/`, `/predictions/`, one theme page — each returns 200 and contains `site-header`.

---

### Task 9: Push the redesign branch

- [ ] **Step 1:** `cd /Users/gosuri/code/gosuri.github.io && git status --short` — commit any stragglers (plain message, no attribution trailers).
- [ ] **Step 2:** `git push -u origin redesign`
- [ ] **Step 3:** Report: branch pushed, live site untouched, user iterates in claude.ai/design + LAN preview, merge deploys.
