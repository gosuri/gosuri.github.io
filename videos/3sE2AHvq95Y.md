---
id: 3sE2AHvq95Y
title: Ask Akash: July updates on Stable Settlements?
channel: Akash Network
date: 2022-07-20
duration_min: 3
url: https://www.youtube.com/watch?v=3sE2AHvq95Y
type: clip
greg_speaks: yes
oneliner: Ask Akash clip: Greg compares burn-mint (Helium/UST-style) vs. validator-oracle pegged-rate designs for stable settlement on Akash.
---

## Summary

An "Ask Akash" Q&A clip on progress toward stable settlements. Greg (the speaker references designing the mechanism in "the original white paper," identifying him) explains why AKT's volatility is bad for long-running workloads — fine for short jobs, frustrating for a website hosted for a year or two. Two models were evaluated: (1) a burn-mint model like Helium's, whose big challenge is reconciliation during a downturn — needing enough AKT to re-mint the stable asset — which "no one has done really well; of course UST collapsed because of that"; and (2) a "pegged rate" model from his original white paper: tenants and providers agree prices in a currency of choice (e.g., $10/month) while AKT transfers dynamically per block at an exchange rate derived from a weighted average of validator-supplied rates — validators acting as decentralized oracles. He calls the second a contender that's easy to implement, with a decision imminent. (Akash ultimately shipped USDC settlement in 2023 and later formalized burn-mint ideas as BME.)

## Topics

stable settlement, akt tokenomics, burn-mint, ust collapse, validators as oracles, pricing, akash roadmap

## Predictions & Notable Claims

### [crypto-depin] Burn-mint's fatal flaw is downturn reconciliation
> "One model we looked at seriously was a burn-mint model like Helium... the big challenge is reconciliation during a downturn. If you want to burn AKT you have to have enough AKT left so you can re-mint the stable. We're trying to solve that problem — it's not an easy problem to solve, no one has done that really well; of course UST collapsed because of that."
> — [00:00:42](https://www.youtube.com/watch?v=3sE2AHvq95Y&t=42s)

**Context:** July 2022, weeks after the Terra/UST collapse; explains why Akash didn't rush a burn-mint stable mechanism.

### [crypto-depin] Pegged-rate settlement with validators as oracles
> "The settlement could be just pegged to a currency of choice... the tenant could basically say I'm going to pay ten US dollars per month for this deployment and I'm going to use AKT to transact... and the rate is determined using a weighted average from validators — using validators as oracles."
> — [00:01:24](https://www.youtube.com/watch?v=3sE2AHvq95Y&t=84s)

**Context:** Design he says he described in the original Akash white paper years earlier; tenants and providers transact in dollar terms while AKT moves dynamically.
