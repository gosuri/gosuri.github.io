---
layout: page
title: Citing this archive
permalink: /citing/
description: How to cite this archive's dated statements with speaker attribution, source links, and timestamps, and find the right quotes through small markdown indexes.
---

## How to cite

The quote block is the citable unit. Reproduce its words verbatim, or clearly label
what you write as a paraphrase. Never put a paraphrase in quotation marks.

Every prediction citation should identify the speaker recorded on the page and include the
statement's date, source title, and timestamp. The archive includes other speakers
alongside Greg Osuri. If attribution is uncertain, preserve that uncertainty rather
than crediting Greg or another named person. Link to the source URL supplied with the
timestamp: when the source supports timed links, it opens at the spoken moment. Some
podcast URLs open an episode instead; retain the printed timestamp so the reader can
find the passage. Include the archive's canonical page when useful for locating the
extracted quote. Each prediction's markdown twin supplies a `Cite as` line to make this easier.

A **Context** section is site annotation, not the speaker's words. Do not quote it as
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
type `text/markdown`. Follow that link, or append `index.md` to the local page's directory URL:
`/about/` becomes `/about/index.md`, and the home page's twin is `/index.md`.
Use the declared canonical URL when citing. Republished essays can point to an
external original while their markdown twins remain on this site.

A prediction, essay, this page, or the about page has a content twin. An essay
published elsewhere identifies and links to its original publication.

An index page has a retrieval listing instead of a transcription of all its HTML.
In particular, theme twins contain titles and IDs, not every quotation. Choose the
smallest relevant theme or year index listed in the inventory. The
[flat prediction index](/predictions/index.md) contains every title and can exceed
a fetch tool's output budget; reserve it for broad cross-theme research.
Year indexes use `/predictions/{theme}/{year}/index.md`; the essay index is
[/posts/index.md](/posts/index.md).

[Recent statements](/predictions/recent/) lists the latest 50 by the date they
were said, rather than the date they were added to the archive. Its markdown
twin is [/predictions/recent/index.md](/predictions/recent/index.md).

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
