---
layout: "predictions"
title: "Energy & AI — Predictions"
theme: "Energy & AI"
theme_slug: "energy-ai"
permalink: "/predictions/energy-ai/"
redirect_from:
  - "/predictions/energy-ai/2018/"
  - "/predictions/energy-ai/2021/"
  - "/predictions/energy-ai/2022/"
  - "/predictions/energy-ai/2023/"
  - "/predictions/energy-ai/2024/"
  - "/predictions/energy-ai/2025/"
  - "/predictions/energy-ai/2026/"
---

_129 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
