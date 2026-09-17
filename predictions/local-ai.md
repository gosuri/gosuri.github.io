---
layout: "predictions"
title: "Local AI — Predictions"
theme: "Local AI"
theme_slug: "local-ai"
permalink: "/predictions/local-ai/"
redirect_from:
  - "/predictions/local-ai/2020/"
  - "/predictions/local-ai/2021/"
  - "/predictions/local-ai/2023/"
  - "/predictions/local-ai/2024/"
  - "/predictions/local-ai/2025/"
  - "/predictions/local-ai/2026/"
---

_48 statements · 2020–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
