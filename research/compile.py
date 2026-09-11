#!/usr/bin/env python3
"""Compile videos/*.md into PREDICTIONS.md (by theme) and CATALOG.md."""
import os
import re
import tempfile
from collections import defaultdict
from pathlib import Path

import export_blog


ROOT = Path(__file__).resolve().parent.parent

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
SPEAKER_RE = re.compile(r"^\*\*Speaker:\*\*\s*(.+)$")
ATTRIBUTION_RE = re.compile(r"^\*\*Attribution:\*\*\s*(\S+)\s*$")


def frontmatter(text):
    m = FM_RE.match(text)
    fm = {}
    if m:
        for line in m.group(1).splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                fm[key.strip()] = value.strip()
    return fm


def prediction_key(video_id, body):
    """Identity used only to carry forward reviewed attribution metadata."""
    quote = []
    stamp_urls = []
    contexts = []
    for line in body.splitlines():
        if line.startswith(">"):
            quote.append(line)
            if match := export_blog.STAMP_RE.match(line):
                stamp_urls.append(match.group(2))
        elif line.startswith("**Context:**"):
            contexts.append(line.strip())
    if len(stamp_urls) != 1 or len(contexts) > 1:
        return None
    return video_id, stamp_urls[0], tuple(quote), contexts[0] if contexts else None


def authoritative_attributions(path):
    if not path.exists():
        return {}
    _, entries = export_blog.parse_predictions(path.read_text())
    result = {}
    for entry in entries:
        key = (entry["vid"], entry["stamp"][1], tuple(entry["quote"]),
               entry["context"])
        if key in result:
            raise ValueError("duplicate authoritative prediction identity")
        result[key] = entry["speaker"], entry["speaker_status"]
    return result


def body_attribution(body, video_id, label, authoritative):
    speakers = []
    statuses = []
    content = []
    for line in body.splitlines():
        if match := SPEAKER_RE.match(line):
            speakers.append(match.group(1).strip())
        elif match := ATTRIBUTION_RE.match(line):
            statuses.append(match.group(1))
        else:
            content.append(line)

    if len(speakers) > 1 or len(statuses) > 1:
        raise ValueError(f"duplicate speaker attribution for {video_id} — {label}")
    if speakers or statuses:
        if len(speakers) != 1 or len(statuses) != 1:
            raise ValueError(f"incomplete speaker attribution for {video_id} — {label}")
        attribution = speakers[0], statuses[0]
    else:
        attribution = authoritative.get(prediction_key(video_id, body))
        if attribution is None:
            raise ValueError(
                "missing explicit speaker attribution for changed or new prediction "
                f"{video_id} — {label}"
            )
    return attribution, "\n".join(content).strip()


def read_inputs(root):
    videos = []
    predictions = defaultdict(list)
    authoritative = authoritative_attributions(root / "PREDICTIONS.md")
    for page in sorted((root / "videos").glob("*.md")):
        text = page.read_text()
        fm = frontmatter(text)
        if not fm.get("id"):
            continue
        videos.append(fm)
        section = text.split("## Predictions & Notable Claims", 1)
        if len(section) < 2:
            continue
        for theme, label, body in PRED_RE.findall(section[1]):
            label = label.strip()
            attribution, content = body_attribution(
                body.strip(), fm["id"], label, authoritative)
            predictions[theme].append({
                "fm": fm,
                "label": label,
                "body": content,
                "speaker": attribution[0],
                "speaker_status": attribution[1],
            })
    videos.sort(key=lambda video: video.get("date", "?"), reverse=True)
    return videos, predictions


def render_predictions(videos, predictions):
    count = sum(len(items) for items in predictions.values())
    output = [
        "# Predictions & Notable Claims — Greg Osuri",
        "",
        f"_{count} extracted statements from {len(videos)} videos. "
        "Each quote links to the exact moment on YouTube. The archive includes "
        "other speakers and labels uncertain attribution as Unknown._",
        "",
        "Themes: " + " · ".join(
            f"[{heading}](#{heading.lower().replace(' ', '-').replace('&', '').replace('--', '-')})"
            for slug, heading in THEME_ORDER if predictions.get(slug)
        ),
        "",
    ]
    for slug, heading in THEME_ORDER:
        items = predictions.get(slug)
        if not items:
            continue
        items.sort(key=lambda prediction: prediction["fm"].get("date", "?"))
        output += [f"## {heading}", ""]
        for prediction in items:
            fm = prediction["fm"]
            output += [
                f"### {fm.get('date', '?')} — {prediction['label']}",
                f"_{fm.get('title', '?')} ({fm.get('channel', '?')})_ · "
                f"[video page](videos/{fm['id']}.md)",
                "",
                f"**Speaker:** {prediction['speaker']}",
                f"**Attribution:** {prediction['speaker_status']}",
                "",
                prediction["body"],
                "",
            ]
    return "\n".join(output)


def render_catalog(videos):
    output = [
        "# Video Catalog — Greg Osuri",
        "",
        f"_{len(videos)} videos, newest first._",
        "",
        "| Date | Title | Channel | Type | Min | Links |",
        "|---|---|---|---|---|---|",
    ]
    for video in videos:
        title = video.get("title", "?").replace("|", "\\|")
        oneliner = video.get("oneliner", "").replace("|", "\\|")
        output.append(
            f"| {video.get('date', '?')} | **{title}**<br>{oneliner} | "
            f"{video.get('channel', '?')} | {video.get('type', '?')} | "
            f"{video.get('duration_min', '?')} | [▶︎]({video.get('url', '')}) · "
            f"[page](videos/{video['id']}.md) · "
            f"[transcript](transcripts/{video['id']}.md) |"
        )
    return "\n".join(output) + "\n"


def replace_outputs(outputs):
    temporary = []
    try:
        for path, content in outputs:
            path.parent.mkdir(parents=True, exist_ok=True)
            with tempfile.NamedTemporaryFile(
                    "w", encoding="utf-8", dir=path.parent, delete=False) as handle:
                handle.write(content)
                handle.flush()
                os.fsync(handle.fileno())
                temporary.append((Path(handle.name), path))
        for temp_path, path in temporary:
            temp_path.replace(path)
    finally:
        for temp_path, _ in temporary:
            temp_path.unlink(missing_ok=True)


def compile_repository(root=ROOT):
    root = Path(root)
    videos, predictions = read_inputs(root)
    prediction_text = render_predictions(videos, predictions)
    catalog_text = render_catalog(videos)

    _, entries = export_blog.parse_predictions(prediction_text)
    ids = [export_blog.make_id(entry) for entry in entries]
    if len(ids) != len(set(ids)):
        raise ValueError("duplicate prediction ids; refusing to overwrite")

    replace_outputs([
        (root / "PREDICTIONS.md", prediction_text),
        (root / "CATALOG.md", catalog_text),
    ])
    return len(videos), len(entries), sorted(
        (theme, len(items)) for theme, items in predictions.items())


def main():
    videos, predictions, themes = compile_repository()
    print(f"videos: {videos}; predictions: {predictions}; themes: {themes}")


if __name__ == "__main__":
    main()
