#!/usr/bin/env python3
"""Merge search/sweep TSVs into a deduped catalog.

Relevance rules (approved scope: truly everything, full depth):
- Search-result videos: keep if title mentions greg/osuri/akash/overclock,
  OR the video came from a name-quoted search (s01,s02,s03,s04,s07,s08,s10,s11).
- Channel sweeps: @gregosuri keep all; @AkashNetwork keep all (Greg hosts/appears
  in most; description-level pruning happens at caption-fetch time).
Writes catalog/catalog.tsv: video_id, duration_s, channel, source, title
"""
import csv, sys
from pathlib import Path

SEARCH_DIR = Path(__file__).resolve().parent.parent / "catalog" / "searches"
OUT = Path(__file__).resolve().parent.parent / "catalog" / "catalog.tsv"

NAME_QUOTED = {"s01", "s02", "s03", "s04", "s07", "s08", "s10", "s11"}
KEYWORDS = ("greg", "osuri", "akash", "overclock")

rows = {}
for tsv in sorted(SEARCH_DIR.glob("*.tsv")):
    slug = tsv.stem.split("-")[0]
    for line in tsv.read_text(errors="replace").splitlines():
        parts = line.split("\t")
        if len(parts) < 4:
            continue
        vid, dur, channel, title = parts[0], parts[1], parts[2], "\t".join(parts[3:])
        if vid in rows:
            rows[vid][3] += f",{tsv.stem}"
            continue
        t = title.lower()
        keep = (
            tsv.stem.startswith("c0")
            or slug in NAME_QUOTED
            or any(k in t for k in KEYWORDS)
        )
        if keep:
            rows[vid] = [vid, dur, channel, tsv.stem, title]

with OUT.open("w", newline="") as f:
    w = csv.writer(f, delimiter="\t")
    for r in sorted(rows.values(), key=lambda r: r[4].lower()):
        w.writerow(r)

durs = [float(r[1]) for r in rows.values() if r[1] not in ("NA", "", "None")]
print(f"videos: {len(rows)}")
print(f"total hours: {sum(durs)/3600:.1f}")
print(f"no-duration entries: {sum(1 for r in rows.values() if r[1] in ('NA','','None'))}")
