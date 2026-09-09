---
id: Rq0UByMDUv4
title: Why the Future of AI Depends on Decentralized Cloud Platforms
channel: Eye on AI
date: 2025-03-17
duration_min: 59
url: https://www.youtube.com/watch?v=Rq0UByMDUv4
type: podcast
greg_speaks: yes
oneliner: Eye on AI podcast: Akash's supercloud model, sovereign AI at home economics, and why energy caps centralized AI training in two years.
---

## Summary

Long-form interview with Craig Smith (Eye on AI). Greg introduces Akash as an open, transparent cloud inspired by Cornell's 2015 "supercloud" concept — decoupling the resource layer from a decentralized control plane — claiming 10x cost savings on compute and 2-3x on GPUs versus AWS. He walks through the mechanics in detail: reverse-auction order book, escrow-enforced leases, decentralized auditors, and trusted execution environments (TEE) with ~10% overhead for encrypted GPU workloads. He quantifies the addressable market: ~7.2 million data centers worldwide, ~11,000 professional (1MW+) ones, with enterprise data centers running around 15% utilization. He is deeply skeptical hyperscale buildout can keep pace — US grid capacity is ~1.2TW, new interconnects take years, and the last US nuclear reactor took ~14 years and ~$32B — so he sees the growth in 1-10MW second-tier and 100kW-1MW modular data centers powered by renewables. The centerpiece is Akash's "sovereign AI in the home" feasibility study: a ~30kW closet-sized home data center with five H200 HGX clusters (one dedicated to private home AI, four rented out on Akash) recovers capex+opex within five years, aided by solar and selling power back to the grid. He predicts an explosion/resurgence of small data centers for privacy, ownership, and cost. Numbers: Akash growing ~10x/year and 20% month-over-month, ~70% utilization, targets of 10K GPUs by end of 2025, 100K by end of 2026, 1M within three years; H200s at $1.99/hr vs ~$6 on AWS; revenue per GPU $20/day heading to $50-100 via a coming "services economy" meant to make open source sustainable. He closes arguing DeepSeek's synthetic data solved AI's data problem but energy cannot be solved centrally — training must distribute or hit a cap in two years.

## Topics

decentralized cloud, gpu marketplace, sovereign ai, home data centers, energy, nuclear power, solar, deepseek, distributed training, open-source sustainability, trusted execution environments, supercloud, reverse auction

## Predictions & Notable Claims

### [gpu-economics] Enterprise data centers sit at ~15% utilization
> "The 10,000 or so enterprise data centers, their utilization rate is somewhere around 15%. So there's enormous underutilization in these 10,000 professional one-megawatt-capacity data centers."
> — [00:07:19](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=439s)

**Context:** Laying out the supply thesis: ~7.2M data centers worldwide, ~11,000 professional ones, ~1,000 hyperscale — the rest heavily underutilized, which Akash monetizes.

### [energy] Skeptical of hyperscale buildout; growth is in sub-10MW data centers
> "I'm extremely skeptical if we are able to move as fast as we want in the hyperscaler market, but I think we have a bigger chance to move in the second-tier market, which is the one megawatt to 10 megawatt."
> — [00:20:24](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=1224s)

**Context:** After citing US grid limits (~1.2TW), 14-year/$32B nuclear builds, and Nvidia failing to get more than 20MW capacity for its own data center; sub-10MW sites can run on dense solar/wind.

### [local-ai] AI in the home must not leak to the cloud
> "I want the whole house to be automated, every conversation to be recorded, but I would hate that conversation to be stored in a cloud, because I do not trust anything that leaves my home network — as no one should."
> — [00:21:49](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=1309s)

**Context:** Describing an agent-driven home (including monitoring his one-year-old daughter) as the motivating use case for Akash's sovereign home-AI paper.

### [local-ai] Sovereign AI in the home — "I'm building that"
> "Can I have a sovereign AI in the home? I think most people would want an AI in the home as long as it guarantees privacy. And I'm building that... We did a feasibility study: is there any way you can have sovereign AI in a semi-professional data center that takes 30 kilowatts of energy, in the home, that is cost efficient?"
> — [00:22:32](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=1352s)

**Context:** The answer (next block) was yes: five H200 HGX clusters (~40 chips, ~$500K), one dedicated to the home, four rented on Akash at ~$2.30/hr at 80% utilization — capex plus opex recovered within five years, further offset by solar and selling excess power back to the grid.

### [local-compute] AI entering the home will cause an explosion of small data centers
> "When AI becomes very important, if AI has to really enter the home — which I think it will — I think that's when we're going to see an explosion of these data centers... I think there's going to be a resurgence of the data centers, for privacy, for ownership, for cost reasons."
> — [00:25:27](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=1527s)

**Context:** He notes ~7.2M small data centers today, down from a 2017 peak of 8.6M killed off by cloud, and predicts the trend reverses; the goal is "decentralized AI... by decentralizing the energy production and energy consumption as well" (continues into the [00:26:09] block).

### [gpu-economics] Targets: 10K GPUs in 2025, 100K in 2026, 1M in three years
> "We're growing at 10x now every year... we want to get to 10,000 GPUs by end of the year... about 100,000 GPUs by end of next year, about a million GPUs within the next three years."
> — [00:44:19](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=2659s)

**Context:** Asked for a compute roadmap; he stresses Akash scales against a ~70% utilization-rate constraint and is growing ~20% month-over-month.

### [open-source-ai] Akash's services economy will make open source sustainable
> "We have to create an economy for open source contributors to be able to sustain themselves, to build open source software, and I think that is what Akash is going to transition to with the services economy, and that's coming next year."
> — [00:47:56](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=2876s)

**Context:** Argues no pure open-source company besides Linux has survived (Docker, Kubernetes cited); services (databases, inference, agent hosting) on Akash would pay open-source developers directly, lifting revenue per GPU from $20/day toward $50-100.

### [energy] Centralized AI training hits an energy cap in two years
> "Using synthetic data and using mixture of experts mechanism you can actually solve the data problem, but what we cannot solve is the energy problem. That's why it's very, very important, if you're doing training, to focus on distributing your training runs versus trying to go with the traditional mechanism of centralizing your training runs... because we're going to hit a cap in two years and we have no solutions."
> — [00:55:53](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=3353s)

**Context:** His closing thesis (also the cold open): DeepSeek proved synthetic data removes the data ceiling, leaving energy as AI's binding constraint; $500B in announced investment goes to power infrastructure that will arrive too late.

### [decentralized-ai] Decentralization is how you disrupt OpenAI
> "I love to see more work, more different approaches and more experimentation in the space... and really take the power away from the OpenAIs of the world. If you want to really disrupt them, you have to think of decentralization."
> — [00:56:34](https://www.youtube.com/watch?v=Rq0UByMDUv4&t=3394s)

**Context:** Endorsing distributed-training research — Nous Research's DisTrO and Google DeepMind's DiLoCo — as the path to challenging centralized AI labs.
