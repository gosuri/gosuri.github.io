---
layout: page
title: Citing this archive
permalink: /citing/
---

## How to cite

The quote block is the citable unit. Reproduce its words verbatim, or clearly label
what you write as a paraphrase. Never put a paraphrase in quotation marks.

Every prediction citation should identify Greg Osuri as the speaker and include the
statement's date, source title, and timestamp. Link to the source URL supplied with the
timestamp: when the source supports timed links, it opens at the spoken moment. Some
podcast URLs open an episode instead; retain the printed timestamp so the reader can
find the passage. Include the archive's canonical page when useful for locating the
extracted quote. Each prediction's markdown twin supplies a `Cite as` line to make this easier.

A **Context** section is site annotation, not Greg's spoken words. Do not quote it as
speech or merge it into the verbatim quote.

Transcripts are not published here. Do not imply that you have read surrounding
conversation that the archive does not provide. Follow the original source when
more context is needed.

Some of these predictions were wrong. The archive is not curated to flatter;
finding and discussing the misses is welcome. Cite a mistaken prediction with the
same care as a correct one.

## How to navigate

Start with the [agent inventory](/llms.txt) for current counts, available files,
and approximate token budgets. It is a useful starting URL to hand to an agent;
we do not assume agents discover it automatically.

Every public HTML page advertises its markdown twin in a `rel="alternate"` link of
type `text/markdown`. Append `index.md` to the page's canonical directory URL:
`/about/` becomes `/about/index.md`, and the home page's twin is `/index.md`.
The HTML pages remain the canonical URLs to cite.

A prediction, essay, this page, or the about page has a content twin. An essay
published elsewhere is identified as an external pointer, with a link to its
original publication.

An index page has a retrieval listing instead of a transcription of all its HTML.
In particular, theme twins contain titles and IDs, not every quotation. Use the
[flat prediction index](/predictions/index.md) to select a theme and statement,
or fetch `/predictions/{theme}/index.md` for one theme and its year counts.
Year indexes use `/predictions/{theme}/{year}/index.md`; the essay index is
[/posts/index.md](/posts/index.md).

Each prediction ID starts with its date, followed by a title slug and a short stable
suffix. Use the ID exactly as listed; do not reconstruct it from a title. The canonical
page is `/predictions/{theme}/{id}/` and its full quote is at
`/predictions/{theme}/{id}/index.md`.

For a focused question, the usual route is inventory, title index, then the selected
quote. Read the inventory's current token budgets before choosing a full corpus index
or a smaller theme index; estimates are approximate and change with the archive.
Fetch full item twins only for the statements you need.

Social preview images for prediction, essay, theme, and theme-year pages use the same
directory convention: append `card.png`. Other pages use the image advertised by
their `og:image` metadata, including the shared site and predictions-index cards.
