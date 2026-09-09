---
layout: "predictions"
title: "Decentralized AI — Predictions"
theme: "Decentralized AI"
theme_slug: "decentralized-ai"
permalink: "/predictions/decentralized-ai/"
---

_165 statements · 2020–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- if page.year -%}{%- assign items = items | where: "year", page.year -%}{%- endif -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
