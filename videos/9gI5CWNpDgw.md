---
id: 9gI5CWNpDgw
title: Akash: $300 Million Incentives w/Greg Osuri | CEO of Overclock Labs,Founder & Akash Network
channel: Bare Metal Podcast
date: 2024-01-09
duration_min: 35
url: https://www.youtube.com/watch?v=9gI5CWNpDgw
type: podcast
greg_speaks: yes
oneliner: Podcast interview on Akash's origins, GPU access crisis, provider economics, and the $300M on-chain supply incentive program.
---

## Summary

Greg Osuri joins the Bare Metal Podcast (host from RockawayX) to walk through Akash's ten-year backstory and its 2024 priorities. He traces the origin from AngelHack (where Firebase and, he says, Lambda Labs were ideated), through early container/scheduler work before Docker and Kubernetes, to founding Overclock Labs in 2015. He frames the founding thesis around the Cornell "supercloud" concept — decoupling the control plane from the resource plane so cloud providers are reduced to resource suppliers — plus the observation that data centers run 85-90% underutilized. Akash accidentally built a blockchain (Merkle trees + BitTorrent-style replication) before adopting Tendermint/Cosmos, becoming the first chain after Cosmos Hub to implement IBC.

The core value proposition he argues is open access: on-demand high-density GPUs (H100s/A100s) are effectively unobtainable unless you're heavily funded or backed by a hyperscaler, while Akash offers first-come-first-serve access with transparent public pricing, roughly 10x cheaper than AWS for CPUs. He compares Akash to Flux, Render (0.8% GPU utilization vs. Akash's ~43-45%), the failed Golem, and Gensyn. He details provider economics (an A100 can amortize its ~$11k cost in about a year at ~$1.40/hr) and describes the three AI workload tiers — foundation training (Thumper's small-model training on Akash), fine-tuning, and inference — arguing small language models are taking center stage and play to Akash's strengths, though billion-plus-parameter foundational training still needs dedicated local clusters. Dated specifics: Akash growing 150% month-over-month, A100 utilization 95%+, and a supply-incentives pilot launching Q1 2024 (ideally January) backed by ~$300M on-chain, under the 2024 theme "Akash accelerates."

## Topics

decentralized cloud, gpu marketplace, gpu shortage, supercloud, cosmos, ibc, provider economics, small language models, ai training, inference, incentives, open source, kubernetes, containers

## Predictions & Notable Claims

### [decentralized-ai] AI access is controlled by a few players — not a future to accept
> "GPUs are the fuel for AI. Without GPUs there is no machine learning or AI. So if you think AI is going to be the most important technology stack of our modern society, access to AI is heavily controlled by few players, and that's not a future I want to take."
> — [00:10:06](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=606s)

**Context:** Answering what Akash's unique selling proposition is; he frames permissionless GPU access as the counter to hyperscaler gatekeeping.

### [gpu-economics] Without $100M or hyperscaler backing, high-density GPUs are unobtainable
> "If you don't have $100 million in your bank account and not funded by Amazon, Google or Microsoft, one of the big players, it's impossible to get high-density compute. That's just the reality."
> — [00:16:39](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=999s)

**Context:** Explaining Akash's demand side — funded AI companies that can't get on-demand A100s; cites a Semafor report interviewing Akash users.

### [cloud-decentralization] Supercloud thesis: decouple control plane from resource plane
> "The idea of supercloud was just getting formulated — I think Cornell wrote a paper in 2015 — and we really liked the idea of supercloud, that you can decouple the control plane from the execution plane or the resource plane, and reduce the cloud providers, both public as well as private, to resource providers and not give away control."
> — [00:03:36](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=216s)

**Context:** Origin story of Overclock Labs/Akash; he analogizes hyperscaler cloud to a rental-car oligopoly versus ownership.

### [gpu-economics] A100 providers can recover hardware cost within a year
> "If an A100 cost about $11,000, if you're making a thousand bucks a month, which is about $1.40 an hour... a year amortization of the chip is very profitable... compared to real estate, compared to any other asset class. If you're getting back your money 100% within a year, I think that's very profitable."
> — [00:21:36](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=1296s)

**Context:** On supplier-side economics; adds that even at half price you amortize in two years against a 5-6 year GPU lifespan. (Caption renders the price as "$111,000"; A100 list price context indicates ~$11k.)

### [open-source-ai] Small language models are taking center stage
> "It's not how advanced or how new a model that determines the quality, it's really how you train it. So SLMs are taking a center stage now... you can deploy an SLM and train an SLM on Akash."
> — [00:28:02](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=1682s)

**Context:** Arguing small, task-specific models beat LLMs on specific tasks and fit Akash's no-long-contract model; also claims ChatGPT was getting worse at coding.

### [crypto-depin] Validate demand before incentivizing supply, or incentives lead to waste
> "Learning from the mistakes of the previous generation DePIN projects, we learned that unless you validate demand, incentivizing supply will lead to wastage."
> — [00:31:41](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=1901s)

**Context:** Explaining why Akash stayed "pre-incentive" until GPU demand was proven (A100 utilization 95%+); cites Filecoin GPUs being repurposed onto Akash as the cautionary example.

### [crypto-depin] $300M in on-chain incentives to bootstrap GPU supply, pilot Q1 2024
> "We're releasing a pilot in Q1 2024, ideally January... that's going to massively bootstrap supply on Akash, and we have about $300 million in budget on chain for deploying these incentives."
> — [00:32:24](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=1944s)

**Context:** The headline forecast of the episode; paired with the 2024 theme "Akash accelerates" — supply via incentives, demand via better UX.

### [gpu-economics] Akash growing 150% month-over-month
> "When it comes to growth, Akash is growing at 150% month over month, so obviously I'm telling you there is an incredible need for GPUs and compute out there."
> — [00:14:29](https://www.youtube.com/watch?v=9gI5CWNpDgw&t=869s)

**Context:** Comparing Akash's traction to Flux, Render, and Golem; repeated later alongside the ~43% cumulative daily GPU utilization figure.
