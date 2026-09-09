#!/usr/bin/env python3
"""Convert raw/podwhisper/<slug>.vtt into transcripts/pod-<slug>.md with
metadata headers from catalog/podcasts.tsv, and emit catalog/pods_meta.tsv
(pod-<slug>, date, duration_min, show, episode_page_url, title) for analysis agents."""
import csv, html, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TAG_RE = re.compile(r"<[^>]+>")
TS_RE = re.compile(r"(?:(\d+):)?(\d\d?):(\d\d)\.(\d+)")
BLOCK = 40


def parse_ts(s):
    m = TS_RE.match(s)
    if not m:
        return None
    h, mnt, sec, _ = m.groups()
    return int(h or 0) * 3600 + int(mnt) * 60 + int(sec)


def fmt(t):
    return f"{t//3600:02d}:{t%3600//60:02d}:{t%60:02d}"


def cues(path):
    start = None
    for line in path.read_text(errors="replace").splitlines():
        line = line.strip()
        if "-->" in line:
            start = parse_ts(line.split("-->")[0].strip())
            continue
        if not line or line == "WEBVTT" or start is None:
            continue
        text = html.unescape(TAG_RE.sub("", line)).strip()
        if text:
            yield start, text


rows = list(csv.DictReader((ROOT / "catalog" / "podcasts.tsv").open(), delimiter="\t"))
meta_out = []
done = 0
for r in rows:
    slug = r["slug"]
    vtt = ROOT / "raw" / "podwhisper" / f"{slug}.vtt"
    if not vtt.exists():
        continue
    last, blocks, cur, cur_start = "", [], [], None
    for start, text in cues(vtt):
        if text == last:
            continue
        last = text
        if cur_start is None:
            cur_start = start
        cur.append(text)
        if start - cur_start >= BLOCK:
            blocks.append((cur_start, " ".join(cur)))
            cur, cur_start = [], None
    if cur:
        blocks.append((cur_start, " ".join(cur)))
    dur_min = (blocks[-1][0] // 60 + 1) if blocks else 0
    audio = ROOT / "raw" / "podcasts" / f"{slug}.audio"
    if audio.exists():
        try:
            p = subprocess.run(
                ["ffprobe", "-v", "error", "-show_entries", "format=duration",
                 "-of", "csv=p=0", str(audio)], capture_output=True, text=True, timeout=30)
            dur_min = round(float(p.stdout.strip()) / 60)
        except Exception:
            pass
    lines = [
        f"# {r['episode_title']}",
        "",
        f"- **Episode:** {r['episode_page_url']}",
        f"- **Show:** {r['show']}",
        f"- **Date:** {r['date']}",
        "- **Source:** local Whisper transcription (audio-only podcast)",
        "",
        "---",
        "",
    ]
    for start, text in blocks:
        lines += [f"**[{fmt(start)}]** {text}", ""]
    (ROOT / "transcripts" / f"pod-{slug}.md").write_text("\n".join(lines))
    meta_out.append([f"pod-{slug}", r["date"], str(dur_min), r["show"], r["episode_page_url"], r["episode_title"]])
    done += 1

with (ROOT / "catalog" / "pods_meta.tsv").open("w", newline="") as f:
    csv.writer(f, delimiter="\t").writerows(meta_out)
print(f"podcast transcripts written: {done}")
