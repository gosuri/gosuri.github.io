---
layout: "predictions"
title: "Open-Source AI — Predictions"
theme: "Open-Source AI"
theme_slug: "open-source-ai"
permalink: "/predictions/open-source-ai/"
redirect_from:
  - "/predictions/open-source-ai/2022/"
  - "/predictions/open-source-ai/2023/"
  - "/predictions/open-source-ai/2024/"
  - "/predictions/open-source-ai/2025/"
  - "/predictions/open-source-ai/2026/"
---

_51 statements · 2022–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
