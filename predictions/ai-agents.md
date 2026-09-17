---
layout: "predictions"
title: "AI Agents — Predictions"
theme: "AI Agents"
theme_slug: "ai-agents"
permalink: "/predictions/ai-agents/"
redirect_from:
  - "/predictions/ai-agents/2022/"
  - "/predictions/ai-agents/2023/"
  - "/predictions/ai-agents/2024/"
  - "/predictions/ai-agents/2025/"
  - "/predictions/ai-agents/2026/"
---

_34 statements · 2022–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
