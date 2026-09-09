#!/usr/bin/env python3
"""Bin-pack transcripts into ~400KB batches for analysis agents.
Skips ids that already have a videos/<id>.md page (resumable).
Writes catalog/batches/batch_NN.txt (one id per line)."""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BATCH_DIR = ROOT / "catalog" / "batches"
BATCH_DIR.mkdir(exist_ok=True)
for old in BATCH_DIR.glob("batch_*.txt"):
    old.unlink()

CAP = 400_000
files = []
for t in (ROOT / "transcripts").glob("*.md"):
    if (ROOT / "videos" / t.name).exists():
        continue
    files.append((t.stat().st_size, t.stem))
files.sort(reverse=True)

batches = []
for size, vid in files:
    placed = False
    for b in batches:
        if b[0] + size <= CAP:
            b[0] += size
            b[1].append(vid)
            placed = True
            break
    if not placed:
        batches.append([size, [vid]])

for i, (size, ids) in enumerate(batches, 1):
    (BATCH_DIR / f"batch_{i:02d}.txt").write_text("\n".join(ids) + "\n")
    print(f"batch_{i:02d}: {len(ids)} videos, {size//1024}KB")
print(f"total: {len(files)} videos in {len(batches)} batches")
