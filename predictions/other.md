---
layout: "predictions"
title: "Other — Predictions"
theme: "Other"
theme_slug: "other"
permalink: "/predictions/other/"
redirect_from:
  - "/predictions/other/2015/"
  - "/predictions/other/2018/"
  - "/predictions/other/2019/"
  - "/predictions/other/2020/"
  - "/predictions/other/2021/"
  - "/predictions/other/2022/"
  - "/predictions/other/2023/"
  - "/predictions/other/2024/"
  - "/predictions/other/2025/"
  - "/predictions/other/2026/"
---

_169 statements · 2015–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
