---
id: BQONg2f0zQc
title: "DACM Insights: Decentralizing AI, The Akash Approach"
channel: DACM Insights
date: 2026-02-12
duration_min: 29
url: https://www.youtube.com/watch?v=BQONg2f0zQc
type: podcast
greg_speaks: yes
oneliner: Institutional-investor podcast: Akash's origin, GPU shortage era, home nodes powered by rooftop solar, and AI as an energy load balancer.
---

## Summary

Interview with DACM (an early Akash investor). Greg recounts the genesis of Akash: his open-source/cloud-tooling background (libraries used by Kubernetes — "80% of the cloud uses my code somehow"), AWS's nickel-and-diming at scale, Cornell's "supercloud" research on aggregating underutilized compute (~95% underutilization at web-scale companies), and Ethereum in 2015 solving permissionless membership — leading to the 2017 whitepaper that he says created the DePIN category. On the AI boom: he wasn't surprised by demand but was surprised by timing — scaling laws de-risked "throw compute at it" faster than he expected; in 2023 Nvidia made ~500k H100s against ~4M of demand, defining Akash's 2023-24. He argues GPUs were "the tip of the iceberg" with memory, storage, and energy crises following (citing Micron/SanDisk stock runs). The centerpiece is his home-node program: after his Congressional testimony he committed to leveraging home networks in training runs; home node #1 at his house was to be online within the month, powered by his 60 rooftop solar panels, with a goal of one or two panels per training run in future versions — framing AI as a load balancer for a grid that can't transmit the energy it produces. Roadmap: general-purpose capabilities (VMs, TEEs), on-chain verifiability to onboard low-trust supply, enterprise customers "this quarter," and graduating from data-center cloud to "the entire globe or any connected device." He dismisses "crypto AI is dead" talk: the junk capitulated; distributed training is the next wave.

## Topics

decentralized cloud, home nodes, solar, ai energy, gpu shortage, distributed training, depin, verifiability, supercloud, memory shortage, akash origin, crypto cycles

## Predictions & Notable Claims

### [energy] Crypto, AI and energy converge into one load-balanced system
> "For the most part, the data centers that AI demanded in '24 was satisfied by crypto companies, like it or not. At some point we'll start seeing crypto and AI and all these technologies just [as] energy distributors with load balancers."
> — [00:01:40](https://www.youtube.com/watch?v=BQONg2f0zQc&t=100s)

**Context:** Responding to a Twitter thread asking how crypto benefited humanity; he credits crypto with building AI's infrastructure as a side effect.

### [gpu-economics] The H100 gap: half a million made, four million needed
> "There is a shortage of GPUs. There's no amount of GPUs in the world. We looked at Nvidia's production lines — Nvidia, in '23, they made about half a million H100s and we needed about 4 million H100s from the demand... there was such clear, obvious need that basically defined what 2023 and 2024 was for Akash."
> — [00:11:47](https://www.youtube.com/watch?v=BQONg2f0zQc&t=707s)

**Context:** Explaining why Akash bet on GPU supply once scaling laws became clear; he says he expected the boom but "I didn't think it was going to be '23" [00:10:20].

### [energy] GPUs were the tip of the iceberg — memory, storage, energy next
> "GPUs were just the tip of the iceberg. Now we have memory, now we have storage, now you have energy, which is a big unknown. I mean, it's clear to me, I think, how we can solve the energy problem, but it's unknown for a lot of people."
> — [00:12:30](https://www.youtube.com/watch?v=BQONg2f0zQc&t=750s)

**Context:** On successive AI resource crises; later he points to Micron/SanDisk stock gains as the memory-demand signal and quips "my fridge has more memory than my computer had 15 years ago" [00:26:06].

### [gpu-economics] One GPU per prompt — 7 billion AI users implies staggering GPU demand
> "Inference — in order to infer a model, you need one GPU per one prompt. Simply put, every prompt you send... takes 10 seconds to return the answer; that 10 seconds is being computed on one GPU... So if you have 7 billion people in the world, if everybody's on AI, you can imagine how many GPUs we need."
> — [00:13:55](https://www.youtube.com/watch?v=BQONg2f0zQc&t=835s)

**Context:** Answering why AI needs so much compute/energy, as setup for the decentralization argument.

### [decentralized-ai] Distributed training is at its GPT-2 moment
> "We, as a distributed training landscape, are maybe at a GPT-2 level in terms of our technological progress... that's going to take some time and some resources and incentives. My big question is not the technology — it's what is the incentive for someone to provide the compute to train a model... and I think that's where we're entering the crypto AI space, and where Akash fits in — the infrastructure layer for the entire thing."
> — [00:14:39](https://www.youtube.com/watch?v=BQONg2f0zQc&t=879s)

**Context:** Positioning crypto incentives as the missing piece for distributed training; leads directly into the home-node discussion.

### [local-compute] Home nodes: solar-powered training from Greg's own house
> "Akash will have home nodes... After my testimony at Congress, I talked about leveraging home networks as part of a training run... we're calling it the home node. I have home node one at my house that's going to be online by the end of the month... Right now I have 60 panels that are part of a training run... hopefully in the next coming versions we'll be able to reduce the energy footprint to a point I can have one single panel or two panels power a training run."
> — [00:15:21](https://www.youtube.com/watch?v=BQONg2f0zQc&t=921s)

**Context:** Concrete rollout of his local-compute thesis: consumer homes with rooftop solar and GPUs (he mentions owning a 4090 at home, with negative marginal energy cost) joining distributed training runs. Quote spans into the [00:16:03] block.

### [energy] AI as the grid's load balancer — the problem is transmission, not generation
> "It's not like we don't have enough energy. We have a lot of energy — it's just we cannot transmit [it] well... What do I do with excess energy? I can train AI with excess energy. So AI becomes now a load balancer for energy, which is a great solution to the power problem, because the grid won't want to take your energy... the grid is very fragile."
> — [00:16:03](https://www.youtube.com/watch?v=BQONg2f0zQc&t=963s)

**Context:** His argument that residential solar plus distributed training solves both the AI energy crunch and the curtailment problem (utilities capping home solar production). Quote spans into the [00:16:46] block.

### [decentralized-ai] Crypto AI isn't dead — distributed training will "hit you hard"
> "People say crypto AI is dead. I'm like, well, no, we're just getting started. All the junk is gone — that's supposed to happen... But I think the next version of crypto AI is going to solve distributed training. It's going to solve distributed training in such ways that you would never see it coming from a million miles — it's going to hit you hard."
> — [00:25:22](https://www.youtube.com/watch?v=BQONg2f0zQc&t=1522s)

**Context:** Countering the market narrative (post-2024 capitulation, stablecoin mania); he adds it's "a great time to invest because now you see a lot of signal" vs. 2024's noise and fraud.

### [local-compute] From data centers to the entire globe — the home is the holy grail
> "We came from data-center-only compute, because that's the most reliable compute, now to home compute. That was part of our road map, because if we can make a home computer work in a cloud environment, that's a holy grail — because now you can unlock the entire home... graduating from the perception of the cloud being data centers only to the perception of the cloud being the entire globe, or any connected device."
> — [00:26:48](https://www.youtube.com/watch?v=BQONg2f0zQc&t=1608s)

**Context:** Closing statement of the Akash roadmap arc; he calls himself "really excited for Home Lord [home node]."
