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
