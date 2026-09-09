#!/usr/bin/env python3
"""Export PREDICTIONS.md into Jekyll pages in the blog repo."""
import argparse
import base64
import hashlib
import os
import re
import shutil
import sys
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

SPLIT_BYTES = 300_000
ID_SLUG_MAX = 50

HEADER_RE = re.compile(r"_(\d[\d,]*) extracted statements from (\d+) videos")
THEME_RE = re.compile(r"^## (.+)$")
ENTRY_RE = re.compile(r"^### (\d{4}-\d{2}-\d{2}) — (.+)$")
STAMP_RE = re.compile(r"^> — \[(\d{2}:\d{2}:\d{2})\]\((https://[^)]+)\)")
VIDEO_PAGE_RE = re.compile(r"\s*·\s*\[video page\]\([^)]*\)\s*$")
VIDEO_PAGE_ID_RE = re.compile(r"\[video page\]\(videos/([^)]+)\.md\)")


def _stamp_identity(url):
    """Fallback source identity for entries with no captured video-page id:
    the stamp URL with any t/ts (timestamp) query param stripped, so
    different moments in the same video/episode collapse to one identity."""
    parts = urlsplit(url)
    q = [(k, v) for k, v in parse_qsl(parts.query) if k not in ("t", "ts")]
    return urlunsplit((parts.scheme, parts.netloc, parts.path, urlencode(q), ""))


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


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
                "vid": None,
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
            vm = VIDEO_PAGE_ID_RE.search(line)
            if vm:
                cur["vid"] = vm.group(1)
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


def render_theme_page(theme, entries, permalink, title=None, year=None):
    entries = sorted(entries, key=lambda e: e["date"])
    years = f"{entries[0]['date'][:4]}–{entries[-1]['date'][:4]}"
    pairs = [
        ("layout", "predictions"),
        ("title", title or f"{theme} — Predictions"),
        ("theme", theme),
        ("theme_slug", theme_slug(theme)),
        ("permalink", permalink),
    ]
    if year:
        pairs.append(("year", year))
    head = _fm(pairs)
    intro = f"_{len(entries)} statements · {years}_"
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


def theme_pages(theme, entries, split_bytes=SPLIT_BYTES):
    """Return {relative_path: content} for one theme, splitting by year if large."""
    slug = slugify(theme)
    if not theme_is_split(entries, split_bytes):
        return {f"{slug}.md": render_theme_page(
            theme, entries, f"/predictions/{slug}/")}
    pages = {}
    years = sorted({e["date"][:4] for e in entries})
    links = []
    for y in years:
        sub = [e for e in entries if e["date"][:4] == y]
        pages[os.path.join(slug, f"{y}.md")] = render_theme_page(
            theme, sub, f"/predictions/{slug}/{y}/",
            title=f"{theme} — {y}", year=y
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
    n_videos = len(
        {e["vid"] or _stamp_identity(e["stamp"][1]) for e in entries}
    )
    min_year = min(e["date"][:4] for e in entries)
    max_year = max(e["date"][:4] for e in entries)
    intro = (
        f"_{len(entries):,} statements from {n_videos} videos and podcasts, "
        f"{min_year}–{max_year}. Every quote links to the exact moment it was said._"
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


if __name__ == "__main__":
    main()
