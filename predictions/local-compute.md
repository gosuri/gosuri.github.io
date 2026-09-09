---
layout: "predictions"
title: "Local Compute — Predictions"
theme: "Local Compute"
theme_slug: "local-compute"
permalink: "/predictions/local-compute/"
---

_159 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- if page.year -%}{%- assign items = items | where: "year", page.year -%}{%- endif -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
