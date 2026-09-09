#!/usr/bin/env bash
# Download audio-only podcast episodes from catalog/podcasts.tsv and transcribe
# with mlx-whisper. Skips rows flagged as duplicates of catalog videos. Resumable.
set -uo pipefail
cd "$(dirname "$0")/.."
mkdir -p raw/podcasts raw/podwhisper

tail -n +2 catalog/podcasts.tsv | while IFS=$'\t' read -r slug show title date page audio notes; do
  [ -z "$audio" ] && continue
  case "$notes" in *"FLAGGED NOT COUNTED"*) continue ;; esac
  [ -e "raw/podwhisper/$slug.vtt" ] && continue
  echo "--- $slug"
  if [ ! -s "raw/podcasts/$slug.audio" ]; then
    curl -L --fail --silent --show-error --max-time 900 -A "Mozilla/5.0" \
      -o "raw/podcasts/$slug.audio" "$audio" 2>> catalog/podfetch.log \
      || { echo "$slug download" >> catalog/pod_failed.txt; continue; }
  fi
  uvx --from mlx-whisper mlx_whisper "raw/podcasts/$slug.audio" \
    --model mlx-community/whisper-large-v3-turbo \
    --output-dir raw/podwhisper --output-format vtt >> catalog/podfetch.log 2>&1 \
    || echo "$slug transcribe" >> catalog/pod_failed.txt
done
echo "POD DONE: $(ls raw/podwhisper/*.vtt 2>/dev/null | wc -l) transcripts; failures: $(wc -l < catalog/pod_failed.txt 2>/dev/null || echo 0)"
