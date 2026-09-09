#!/usr/bin/env bash
# Retry 403-failed audio downloads using latest yt-dlp + alternate player clients,
# then transcribe with mlx-whisper and stage VTTs for clean_vtt.py.
set -uo pipefail
cd "$(dirname "$0")/.."

cut -d' ' -f1 catalog/whisper_failed.txt | sort -u | while read -r id; do
  [ -z "$id" ] && continue
  [ -e "raw/audio/$id.m4a" ] || uvx yt-dlp@latest "https://www.youtube.com/watch?v=$id" \
    -f "ba[ext=m4a]/ba/b" -x --audio-format m4a --no-warnings \
    --extractor-args "youtube:player_client=default,ios,tv" \
    -o "raw/audio/$id.%(ext)s" >> catalog/whisper2.log 2>&1
  if [ -e "raw/audio/$id.m4a" ]; then
    [ -e "raw/whisper/$id.vtt" ] || uvx --from mlx-whisper mlx_whisper "raw/audio/$id.m4a" \
      --model mlx-community/whisper-large-v3-turbo \
      --output-dir raw/whisper --output-format vtt >> catalog/whisper2.log 2>&1
  else
    echo "$id" >> catalog/whisper_failed2.txt
  fi
done

# stage all whisper VTTs where clean_vtt.py finds them
for f in raw/whisper/*.vtt; do
  [ -e "$f" ] || continue
  id="$(basename "$f" .vtt)"
  cp "$f" "raw/$id.whisper.vtt"
done
echo "RETRY DONE: $(ls raw/whisper/*.vtt 2>/dev/null | wc -l) whisper transcripts total; still failed: $(sort -u catalog/whisper_failed2.txt 2>/dev/null | wc -l)"
