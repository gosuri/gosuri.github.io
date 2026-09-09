#!/usr/bin/env bash
# Phase 2: fetch English subs (manual or auto), description, and metadata row
# for every video in catalog/catalog.tsv. Skips IDs already fetched (resumable).
set -uo pipefail
cd "$(dirname "$0")/.."

mkdir -p raw catalog
cut -f1 catalog/catalog.tsv | while read -r id; do
  [ -e "raw/.done-$id" ] && continue
  yt-dlp "https://www.youtube.com/watch?v=$id" \
    --skip-download --ignore-errors --no-warnings \
    --write-subs --write-auto-subs --sub-langs "en.*" --sub-format vtt \
    --write-description \
    --print-to-file "%(id)s	%(upload_date)s	%(duration)s	%(channel)s	%(view_count)s	%(title)s" catalog/meta.tsv \
    --sleep-subtitles 1 \
    -o "raw/%(id)s" >> catalog/fetch.log 2>&1 \
    && touch "raw/.done-$id" \
    || echo "$id" >> catalog/fetch_failed.txt
done
echo "FETCH DONE: $(ls raw/*.vtt 2>/dev/null | wc -l) vtt files, $(wc -l < catalog/meta.tsv 2>/dev/null) meta rows"
