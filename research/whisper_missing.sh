#!/usr/bin/env bash
# Phase 3: for videos with no YouTube captions, download audio and transcribe
# locally with mlx-whisper (Apple Silicon). Resumable.
set -uo pipefail
cd "$(dirname "$0")/.."
mkdir -p raw/audio raw/whisper

while read -r id; do
  [ -z "$id" ] && continue
  [ -e "raw/whisper/$id.vtt" ] && continue
  echo "--- $id"
  yt-dlp "https://www.youtube.com/watch?v=$id" -f "ba[ext=m4a]/ba/b" \
    -x --audio-format m4a --no-warnings -o "raw/audio/$id.%(ext)s" >> catalog/whisper.log 2>&1 \
    || { echo "$id download" >> catalog/whisper_failed.txt; continue; }
  uvx --from mlx-whisper mlx_whisper "raw/audio/$id.m4a" \
    --model mlx-community/whisper-large-v3-turbo \
    --output-dir raw/whisper --output-format vtt >> catalog/whisper.log 2>&1 \
    || echo "$id transcribe" >> catalog/whisper_failed.txt
done < catalog/no_captions.txt
echo "WHISPER DONE: $(ls raw/whisper/*.vtt 2>/dev/null | wc -l) transcripts"
