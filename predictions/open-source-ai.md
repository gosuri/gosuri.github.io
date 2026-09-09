---
layout: "predictions"
title: "Open-Source AI — Predictions"
theme: "Open-Source AI"
theme_slug: "open-source-ai"
permalink: "/predictions/open-source-ai/"
---

_51 statements · 2022–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- if page.year -%}{%- assign items = items | where: "year", page.year -%}{%- endif -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
