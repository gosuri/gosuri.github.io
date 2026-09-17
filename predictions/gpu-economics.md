---
layout: "predictions"
title: "GPU Economics — Predictions"
theme: "GPU Economics"
theme_slug: "gpu-economics"
permalink: "/predictions/gpu-economics/"
redirect_from:
  - "/predictions/gpu-economics/2018/"
  - "/predictions/gpu-economics/2020/"
  - "/predictions/gpu-economics/2021/"
  - "/predictions/gpu-economics/2022/"
  - "/predictions/gpu-economics/2023/"
  - "/predictions/gpu-economics/2024/"
  - "/predictions/gpu-economics/2025/"
  - "/predictions/gpu-economics/2026/"
---

_248 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
