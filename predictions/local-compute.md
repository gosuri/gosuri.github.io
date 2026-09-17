---
layout: "predictions"
title: "Local Compute — Predictions"
theme: "Local Compute"
theme_slug: "local-compute"
permalink: "/predictions/local-compute/"
redirect_from:
  - "/predictions/local-compute/2018/"
  - "/predictions/local-compute/2019/"
  - "/predictions/local-compute/2020/"
  - "/predictions/local-compute/2021/"
  - "/predictions/local-compute/2022/"
  - "/predictions/local-compute/2023/"
  - "/predictions/local-compute/2024/"
  - "/predictions/local-compute/2025/"
  - "/predictions/local-compute/2026/"
---

_159 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
