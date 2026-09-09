#!/usr/bin/env python3
"""Compile videos/*.md into PREDICTIONS.md (by theme) and CATALOG.md (chronological)."""
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent
PAGES = sorted((ROOT / "videos").glob("*.md"))

THEME_ORDER = [
    ("local-compute", "Local Compute"),
    ("local-ai", "Local AI"),
    ("decentralized-ai", "Decentralized AI"),
    ("energy", "Energy & AI"),
    ("gpu-economics", "GPU Economics"),
    ("cloud-decentralization", "Cloud Decentralization"),
    ("open-source-ai", "Open-Source AI"),
    ("crypto-depin", "Crypto & DePIN"),
    ("ai-agents", "AI Agents"),
    ("other", "Other"),
]

FM_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)
PRED_RE = re.compile(r"^### \[([a-z-]+)\] (.+?)\n(.*?)(?=^### |\Z)", re.S | re.M)


def frontmatter(text):
    m = FM_RE.match(text)
    fm = {}
    if m:
        for line in m.group(1).splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                fm[k.strip()] = v.strip()
    return fm


videos, preds = [], defaultdict(list)
for page in PAGES:
    text = page.read_text()
    fm = frontmatter(text)
    if not fm.get("id"):
        continue
    videos.append(fm)
    sec = text.split("## Predictions & Notable Claims", 1)
    if len(sec) < 2:
        continue
    for theme, label, body in PRED_RE.findall(sec[1]):
        preds[theme].append({"fm": fm, "label": label.strip(), "body": body.strip()})

videos.sort(key=lambda v: v.get("date", "?"), reverse=True)

# ---- PREDICTIONS.md ----
n_preds = sum(len(v) for v in preds.values())
out = [
    "# Predictions & Notable Claims — Greg Osuri",
    "",
    f"_{n_preds} extracted statements from {len(videos)} videos. "
    "Each quote links to the exact moment on YouTube._",
    "",
    "Themes: " + " · ".join(f"[{t[1]}](#{t[1].lower().replace(' ', '-').replace('&', '').replace('--', '-')})" for t in THEME_ORDER if preds.get(t[0])),
    "",
]
for slug, heading in THEME_ORDER:
    items = preds.get(slug)
    if not items:
        continue
    items.sort(key=lambda p: p["fm"].get("date", "?"))
    out += [f"## {heading}", ""]
    for p in items:
        fm = p["fm"]
        out += [
            f"### {fm.get('date','?')} — {p['label']}",
            f"_{fm.get('title','?')} ({fm.get('channel','?')})_ · [video page](videos/{fm['id']}.md)",
            "",
            p["body"],
            "",
        ]
(ROOT / "PREDICTIONS.md").write_text("\n".join(out))

# ---- CATALOG.md ----
cat = [
    "# Video Catalog — Greg Osuri",
    "",
    f"_{len(videos)} videos, newest first._",
    "",
    "| Date | Title | Channel | Type | Min | Links |",
    "|---|---|---|---|---|---|",
]
for v in videos:
    title = v.get("title", "?").replace("|", "\\|")
    one = v.get("oneliner", "").replace("|", "\\|")
    cat.append(
        f"| {v.get('date','?')} | **{title}**<br>{one} | {v.get('channel','?')} "
        f"| {v.get('type','?')} | {v.get('duration_min','?')} "
        f"| [▶︎]({v.get('url','')}) · [page](videos/{v['id']}.md) · [transcript](transcripts/{v['id']}.md) |"
    )
(ROOT / "CATALOG.md").write_text("\n".join(cat) + "\n")

print(f"videos: {len(videos)}; predictions: {n_preds}; themes: {sorted((k, len(v)) for k, v in preds.items())}")
