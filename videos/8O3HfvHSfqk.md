---
id: 8O3HfvHSfqk
title: A Decentralized Compute Marketplace with Greg Osuri
channel: Software Engineering Daily
date: 2024-06-13
duration_min: 51
url: https://www.youtube.com/watch?v=8O3HfvHSfqk
type: podcast
greg_speaks: yes
oneliner: Technical SE Daily interview: how the Akash marketplace works, $2/hr H100s, growth targets, and bringing home GPUs online in two years.
---

## Summary

Software Engineering Daily interview with host Lee Atchison, aimed at a mainstream engineering audience. Greg walks through Akash as a "supercloud" layer over public/private/hybrid providers with a Docker-Compose-like interface: ~10x cheaper than AWS on-demand for compute, and the only place to get on-demand H100s/A100s. He details the provider onboarding and decentralized audit system (Overclock and mTREE — founded by ex-DoD staff after implementing Akash inside the DoD — as auditors), SDL-defined SLAs, peer-to-peer leases with no middleman, moderation APIs hooked to federal databases, and the app-chain/AKT delegated-proof-of-stake design with fixed supply. Business color: typical tenants are funded ML startups spending $50-200/hr; supply increasingly comes from billion-dollar enterprises (Foundry/DCG); ~70%+ of revenue is ML/AI; 95% utilization on high-end chips; growth hockey-stick when GPUs hit mainnet; ~$450M on-chain incentive budget with a $5M provider-incentive program pending. He contrasts Akash's for-profit, tokenized open-source sustainability model ($10M+ public-goods fund, eight companies building on it) with nonprofit foundations and open-core (criticizing HashiCorp's license change), coining "with closed you can go fast, with open you can go far." Forward-looking: 500-600 new regions and triple/quadruple revenue in months, managed services for cloud parity, 1,000 providers and 10ms latency for 98% of internet users, and home GPUs (PlayStations, Xboxes) joining the network within two years.

## Topics

decentralized cloud, gpu marketplace, supercloud, provider audits, akt tokenomics, open source sustainability, managed services, edge computing, home compute, gpu economics, proof of stake

## Predictions & Notable Claims

### [cloud-decentralization] Largest distributed network: 500-600 new regions by year-end
> "It's already the largest distributed network in terms of regions — it's got more regions than Amazons and Googles of the world. By end of the year we anticipate at least 500 to 600 new regions, so by end of the year it'll be the largest distributed network in terms of physical distribution. So you can imagine the edge computer applications that can be finally enabled on Akash."
> — [00:07:52](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=472s)

**Context:** Describing network scale (~70+ providers growing ~20/month at recording); a dated, quantified 2024 forecast.

### [gpu-economics] Revenue to triple or quadruple within two months
> "We're still in very early stages, so I would say the next two months revenue is going to be at least triple or quadruple, based on what we're seeing in terms of supply. We're supply-constrained now, more than demand-constrained."
> — [00:23:57](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=1437s)

**Context:** Explaining the hockey-stick growth after GPUs left a year-long testnet; cites a pending $5M provider-incentive proposal and ~$450M total on-chain incentive budget, with ~100 H100s coming online "next week."

### [gpu-economics] $2/hr H100s vs Amazon's $12
> "Akash will start offering H100s at around $2, which is the cheapest ever you can find. For comparison, Amazon offers H100, if you're lucky, for $12 an hour. Akash is doing the same exact chip for $2 an hour."
> — [00:25:22](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=1522s)

**Context:** On high-density GPU pricing as incentivized supply comes online; earlier he notes 95% utilization on A100s and that no cloud sells on-demand H100s without multi-year, multi-million-dollar leases.

### [other] With closed you go fast, with open you go far
> "With closed you can go fast, with open you can go far. That's why any sufficiently important technology that has wide adoption is always open — starting off with internet, with operating systems... open source always goes so much further than closed source can, but it's so much slower."
> — [00:29:01](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=1741s)

**Context:** Asked how a democratic, decentralized governance model copes with slow decisions; leads into his tokenized public-goods-fund answer to open-source sustainability.

### [cloud-decentralization] 1,000 providers and 10ms latency for 98% of the internet
> "We want to be at least 500 providers by end of the year; end of next year we want to have at least a thousand providers... the goal is to get to 10 millisecond latency for 98% of active internet population... the kind of stuff you can do with such a low-latency network is beyond imagination."
> — [00:45:43](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=2743s)

**Context:** His "cloud parity" roadmap — managed services plus a globally distributed provider base; quote spans into the [00:46:28] block.

### [local-compute] Home GPUs — PlayStations and Xboxes — on the market within two years
> "I don't see a reason why we should stop at just data centers. We have to go into homes — we have enormous amounts of GPU supply sitting in homes, like PlayStations and Xboxes that we barely use, [which have] very powerful GPUs. Imagine what we can do when those GPUs come to market, and Akash — we want to do that in the next two years."
> — [00:46:28](https://www.youtube.com/watch?v=8O3HfvHSfqk&t=2788s)

**Context:** Closing vision after the latency goal; earlier in the episode he similarly notes a home gaming rig's RTX 4090 (24GB) can serve asynchronous ML jobs even on poor internet.
