---
layout: "predictions"
title: "AI Agents — Predictions"
theme: "AI Agents"
theme_slug: "ai-agents"
permalink: "/predictions/ai-agents/"
---

_34 statements · 2022–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- if page.year -%}{%- assign items = items | where: "year", page.year -%}{%- endif -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
