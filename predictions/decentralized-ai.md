---
layout: "predictions"
title: "Decentralized AI — Predictions"
theme: "Decentralized AI"
theme_slug: "decentralized-ai"
permalink: "/predictions/decentralized-ai/"
redirect_from:
  - "/predictions/decentralized-ai/2020/"
  - "/predictions/decentralized-ai/2021/"
  - "/predictions/decentralized-ai/2022/"
  - "/predictions/decentralized-ai/2023/"
  - "/predictions/decentralized-ai/2024/"
  - "/predictions/decentralized-ai/2025/"
  - "/predictions/decentralized-ai/2026/"
---

_165 statements · 2020–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
