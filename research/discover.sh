#!/usr/bin/env bash
# Phase 1 discovery: fan out YouTube searches + channel sweeps, one TSV per source.
# Output columns: video_id, duration_seconds, channel, title
set -uo pipefail

OUT="$(dirname "$0")/../catalog/searches"
mkdir -p "$OUT"

FMT="%(id)s	%(duration)s	%(channel)s	%(title)s"

search() { # $1=slug $2=count $3=query
  echo "--- search:$1"
  yt-dlp "ytsearch$2:$3" --flat-playlist --print "$FMT" 2>>"$OUT/errors.log" > "$OUT/$1.tsv"
  wc -l < "$OUT/$1.tsv" | tr -d ' '
}

sweep() { # $1=slug $2=channel-url
  echo "--- channel:$1"
  yt-dlp "$2" --flat-playlist --print "$FMT" 2>>"$OUT/errors.log" > "$OUT/$1.tsv"
  wc -l < "$OUT/$1.tsv" | tr -d ' '
}

search s01-name 150 '"Greg Osuri"'
search s02-interview 50 '"Greg Osuri" interview'
search s03-podcast 50 '"Greg Osuri" podcast'
search s04-keynote 50 '"Greg Osuri" keynote'
search s05-akash 100 'Greg Osuri Akash'
search s06-overclock 50 'Osuri Overclock Labs'
search s07-ai 50 '"Greg Osuri" AI'
search s08-panel 50 '"Greg Osuri" panel'
search s09-founder 50 'Akash Network founder interview'
search s10-fireside 50 '"Greg Osuri" fireside'
search s11-talk 50 '"Greg Osuri" talk'
search s12-osuri 100 'Osuri crypto compute'

sweep c01-gregosuri 'https://www.youtube.com/@gregosuri/videos'
sweep c02-akash 'https://www.youtube.com/@AkashNetwork/videos'
sweep c03-akash-streams 'https://www.youtube.com/@AkashNetwork/streams'

echo "DONE"
