# Per-video analysis spec (for analysis agents)

You are processing transcripts of public video appearances involving **Greg Osuri**
(founder and CEO of Overclock Labs, the team behind Akash Network; he also founded
AngelHack).
Goal: build a searchable archive of his statements, **especially predictions about
local compute and local AI powering the future**.

For each video ID assigned to you:

1. Read `transcripts/<id>.md` (full timestamped transcript; header has title/channel/date/URL).
2. Look up the catalog row in `catalog/meta.tsv` (id, upload_date YYYYMMDD, duration seconds, channel, views, title).
3. Write `videos/<id>.md` in EXACTLY this format:

```markdown
---
id: <id>
title: <title>
channel: <channel>
date: YYYY-MM-DD
duration_min: <integer>
url: https://www.youtube.com/watch?v=<id>
type: interview | keynote | panel | podcast | livestream | clip | third-party | demo
greg_speaks: yes | no
oneliner: <one sentence, <=140 chars, what this video is>
---

## Summary

<150-400 words for substantive appearances; 1-3 sentences for clips/third-party.
What was discussed, Greg's main arguments, anything notable or dated.>

## Topics

<comma-separated lowercase tags, e.g.: decentralized cloud, gpu marketplace, ai energy>

## Predictions & Notable Claims

### [<theme>] <short label>
**Speaker:** <Greg Osuri | another speaker's full name | Unknown>
**Attribution:** <attributed | uncertain>

> "<verbatim quote from transcript — trim filler words but do not paraphrase>"
> — [HH:MM:SS](https://www.youtube.com/watch?v=<id>&t=<seconds>s)

**Context:** <1-2 lines: what prompted it, any specifics like dates/numbers.>
```

Repeat the `###` block for every prediction/claim found. If none: write `_None found._`

**Themes (use exactly these slugs):** `local-compute`, `local-ai`, `decentralized-ai`,
`energy`, `gpu-economics`, `cloud-decentralization`, `open-source-ai`, `crypto-depin`,
`ai-agents`, `other`.

**What counts as a prediction/notable claim:** forward-looking statements ("in five
years...", "AI will...", "the future of...", "we'll see..."), quantified forecasts,
contrarian theses, and strong recurring arguments (e.g., "the cloud will decentralize
like electricity generation"). PRIORITY: anything about compute moving local/edge/home —
consumer devices running models, personal AI, home GPUs earning income, data sovereignty,
"supercloud", energy-adjacent compute, decentralized training/inference.

**Quote fidelity:** quotes must appear in the transcript (auto-captions lack punctuation —
add sensible punctuation/casing but keep the words). Timestamp = the `[HH:MM:SS]` block
containing the quote; the `t=` param is that timestamp in integer seconds.

**Speaker caution:** captions are not diarized. Every extracted record must have both
top-level speaker fields. Use `Greg Osuri` / `attributed` only when context makes it
clear he is speaking (host questions vs. answers, keynote = him, panels — be careful).
Use a clearly identified other speaker's full name / `attributed` for their quote. Use
`Unknown` / `uncertain` whenever identity is ambiguous; do not put the attribution only
in Context. In `third-party` videos (reviews about Akash without him), set
`greg_speaks: no` and extract nothing unless the quoted speaker can be identified under
these rules.

Work through your whole assigned list. Do not skip long transcripts — chunk-read them.
When done, reply ONLY with: `<n> pages written; <m> predictions extracted; issues: <anything odd, or "none">`
