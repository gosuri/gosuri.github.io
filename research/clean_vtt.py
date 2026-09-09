#!/usr/bin/env python3
"""Convert raw/<id>*.vtt caption files into clean timestamped markdown transcripts.

Handles YouTube auto-caption quirks: inline <c>/<00:00:00.000> tags, rolling
duplicate lines, position metadata. Emits transcripts/<id>.md with a metadata
header and a [HH:MM:SS] anchor at the start of each ~40s paragraph block.
"""
import re, html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW, OUT = ROOT / "raw", ROOT / "transcripts"
OUT.mkdir(exist_ok=True)

TAG_RE = re.compile(r"<[^>]+>")
TS_RE = re.compile(r"(?:(\d+):)?(\d\d?):(\d\d)\.(\d+)")
BLOCK_SECONDS = 40

meta = {}
for line in (ROOT / "catalog" / "meta.tsv").read_text(errors="replace").splitlines():
    p = line.split("\t")
    if len(p) >= 6:
        meta[p[0]] = p


def parse_ts(s):
    m = TS_RE.match(s)
    if not m:
        return None
    h, mnt, sec, _ = m.groups()
    return int(h or 0) * 3600 + int(mnt) * 60 + int(sec)


def fmt_ts(t):
    return f"{t//3600:02d}:{t%3600//60:02d}:{t%60:02d}"


def cues(path):
    """Yield (start_seconds, text_line) pairs, tags stripped."""
    start = None
    for line in path.read_text(errors="replace").splitlines():
        line = line.strip()
        if "-->" in line:
            start = parse_ts(line.split("-->")[0].strip())
            continue
        if not line or line == "WEBVTT" or line.startswith(("Kind:", "Language:", "NOTE", "STYLE")):
            continue
        if start is None:
            continue
        text = html.unescape(TAG_RE.sub("", line)).strip()
        if text:
            yield start, text


def best_vtt(vid):
    files = sorted(RAW.glob(f"{vid}.*.vtt"))
    if not files:
        return None
    for f in files:  # prefer plain .en.vtt
        if f.name == f"{vid}.en.vtt":
            return f
    return files[0]


def clean(vid):
    src = best_vtt(vid)
    if not src:
        return False
    last = ""
    blocks, cur, cur_start = [], [], None
    for start, text in cues(src):
        if text == last:  # rolling duplicate
            continue
        last = text
        if cur_start is None:
            cur_start = start
        cur.append(text)
        if start - cur_start >= BLOCK_SECONDS:
            blocks.append((cur_start, " ".join(cur)))
            cur, cur_start = [], None
    if cur:
        blocks.append((cur_start, " ".join(cur)))

    m = meta.get(vid, [vid, "?", "?", "?", "?", "?"])
    upload, channel, title = m[1], m[3], m[5]
    date = f"{upload[:4]}-{upload[4:6]}-{upload[6:]}" if len(upload) == 8 else upload
    lines = [
        f"# {title}",
        "",
        f"- **Video:** https://www.youtube.com/watch?v={vid}",
        f"- **Channel:** {channel}",
        f"- **Date:** {date}",
        f"- **Source:** {src.name.split('.', 1)[1]} captions",
        "",
        "---",
        "",
    ]
    for start, text in blocks:
        lines.append(f"**[{fmt_ts(start)}]** {text}")
        lines.append("")
    (OUT / f"{vid}.md").write_text("\n".join(lines))
    return True


if __name__ == "__main__":
    ids = [l.split("\t")[0] for l in (ROOT / "catalog" / "catalog.tsv").read_text().splitlines() if l.strip()]
    done = missing = 0
    missing_ids = []
    for vid in ids:
        if clean(vid):
            done += 1
        else:
            missing += 1
            missing_ids.append(vid)
    (ROOT / "catalog" / "no_captions.txt").write_text("\n".join(missing_ids) + "\n")
    print(f"transcribed from captions: {done}; missing captions: {missing}")
