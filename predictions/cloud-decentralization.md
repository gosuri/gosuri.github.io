---
layout: "predictions"
title: "Cloud Decentralization — Predictions"
theme: "Cloud Decentralization"
theme_slug: "cloud-decentralization"
permalink: "/predictions/cloud-decentralization/"
redirect_from:
  - "/predictions/cloud-decentralization/2018/"
  - "/predictions/cloud-decentralization/2019/"
  - "/predictions/cloud-decentralization/2020/"
  - "/predictions/cloud-decentralization/2021/"
  - "/predictions/cloud-decentralization/2022/"
  - "/predictions/cloud-decentralization/2023/"
  - "/predictions/cloud-decentralization/2024/"
  - "/predictions/cloud-decentralization/2025/"
  - "/predictions/cloud-decentralization/2026/"
---

_461 statements · 2018–2026_

{%- assign items = site.predictions | where: "theme", page.theme_slug -%}
{%- assign items = items | sort: "slug_id" -%}
{%- for item in items -%}
{%- if forloop.index > 1 %}<hr>{% endif %}
{% include prediction.html item=item %}
{%- endfor -%}
