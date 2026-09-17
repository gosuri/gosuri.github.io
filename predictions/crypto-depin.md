---
layout: "predictions"
title: "Crypto & DePIN — Predictions"
theme: "Crypto & DePIN"
theme_slug: "crypto-depin"
permalink: "/predictions/crypto-depin/"
redirect_from:
  - "/predictions/crypto-depin/2018/"
  - "/predictions/crypto-depin/2019/"
  - "/predictions/crypto-depin/2020/"
  - "/predictions/crypto-depin/2021/"
  - "/predictions/crypto-depin/2022/"
  - "/predictions/crypto-depin/2023/"
  - "/predictions/crypto-depin/2024/"
  - "/predictions/crypto-depin/2025/"
  - "/predictions/crypto-depin/2026/"
---

_225 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
