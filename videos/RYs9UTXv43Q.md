---
id: RYs9UTXv43Q
title: "Greg Osuri: Akash – Decentralizing Cloud Computing and Revolutionizing GPU Access (#10)"
channel: Fluence
date: 2024-06-13
duration_min: 67
url: https://www.youtube.com/watch?v=RYs9UTXv43Q
type: podcast
greg_speaks: yes
oneliner: DePIN Podcast with Fluence's Tom Trowbridge — supercloud thesis, GPU supply chain, Nvidia monopoly, home compute limits, and a $100K BTC call.
---

## Summary

Episode 10 of Fluence's DePIN Podcast, hosted by co-founder Tom Trowbridge. Greg defines DePIN as "a mechanism to use decentralization to improve resource allocation" (90-95% of cloud capacity is underutilized) and Akash as the first decentralized supercloud: decoupling the resource plane from the control plane so any "cloud-capable" machine can join, with decentralized control planes as the fix for fault-prone centralized schedulers. On retail vs data center supply, he's candid: ~99% of Akash supply is data-center-grade; home computers suit asynchronous/batch work but not latency-sensitive serving, and four 4090s draw ~2kW — too much for most homes — though maximum latent availability still sits in homes (his own PlayStation idles 360 days a year). He walks through latency-sensitive vs batch workloads, why CPUs are hard to commoditize (too many pricing dimensions; GPUs are easier), and Akash's GPU value prop: on-demand H100s at under $2/hr vs ~$12 on AWS, "product-market fit" because value exceeds crypto's cognitive load. Extended GPU-macro discussion: Nvidia about to be the world's most valuable company, Moore's law "broken" for GPUs with new chips every 18 months outpacing TSMC retooling, CUDA (not hardware) as Nvidia's moat with AMD drivers "embarrassingly bad," fragile ASML/TSMC/Nvidia chokepoints, CHIPS Act shortfalls, and Nvidia deliberately distributing chips away from hostile hyperscalers. Token history: Akash began tokenless on Ethereum (broken by CryptoKitties), the token arose for Tendermint security then governance and ecosystem; incentive pilots for H100s/A100s were underway, and he'd like Bitcoin — "the mother chain of the world" — to eventually secure Akash. Ends with a Bitcoin call: $100K by end of 2024 (it hit ~$100K that December).

## Topics

depin, decentralized cloud, supercloud, gpu marketplace, gpu economics, nvidia, cuda, semiconductor supply chain, home compute, latency, inference, training, tokenomics, bitcoin security, incentives, data centers

## Predictions & Notable Claims

### [gpu-economics] 5% of global GDP will be spent on AI compute by 2030
> "There's clear demand for AI, there's clear demand for chips, and demand is actually gaining. I think we've gotten predicted, for what it's worth, that 5% of global GDP will [be] spent to compute for AI... by 2030. That's pretty aggressive."
> — [00:35:35](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=2135s)

**Context:** Opening his answer on whether Akash's GPU advantage persists; paired with "Nvidia is going to be the most valuable company in the world" (it became so within weeks of this recording).

### [gpu-economics] GPU supply chain eases in three to five years
> "If you have to put a prediction, I think supply chain will ease out in next three to five years. I don't think it's going to be forever compute shortage."
> — [00:37:05](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=2225s)

**Context:** Notes month-over-month supply improvement vs the prior year. He hedges later in the same conversation: "I don't see supply chains improving in the next five years at least... marginal gains but not step gains," citing ASML/TSMC chokepoints, CHIPS Act gaps, and Taiwan geopolitics.

### [gpu-economics] No challenger threatens Nvidia for five years
> "There's no real challenge to the most valuable company in the world... I don't know if there's going to be another contender that's going to immediately threaten Nvidia's position in the next five years... Nvidia is going to have monopoly, as sad as it looks."
> — [00:40:41](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=2441s)

**Context:** Argues Nvidia's moat is CUDA software, not hardware ("AMD is so embarrassingly bad... you can't do meaningful work on AMD even today"); silver lining is Nvidia optimizing distribution away from hostile hyperscalers.

### [cloud-decentralization] Data-center concentration is reversing; no winner-take-all for hyperscalers
> "There was like 8.2 million data centers 10 years ago, which reduced to 7.5 [million] now, and increasingly concentration happening... but that's reversing. We're seeing smaller data centers now that are popping up everywhere with GPUs on them. So I don't think hyperscalers are going to be the winner-take-all in this market."
> — [00:37:48](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=2268s)

**Context:** On whether cloud giants will eventually absorb GPU supply; he credits Nvidia's self-interest in fragmenting distribution.

### [gpu-economics] AI can't embed in everyday products — not enough chips
> "From a product standpoint, AI is not even close to being embedded in our everyday products because it's not fast enough, because there's not enough chips... imagine ChatGPT part of Siri... imagine the amount of compute you need when you have to power a Siri [on] billions of phones."
> — [00:42:56](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=2576s)

**Context:** Explaining why doubling GPU resources for diminishing model gains plus device-level AI means demand keeps compounding.

### [local-compute] Latent supply lives in homes — but home compute isn't there yet
> "If you had to point where maximum availability exists today in terms of resources, it is really in the home computers. Like I have a PlayStation at home that I use once a year... I have two consoles that are just in idle 360 days of the year, and that could be part of a computation network."
> — [00:11:48](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=708s)

**Context:** Balanced against his own caveat minutes later: ~99% of Akash supply is data-center-grade, four 4090s draw ~2kW ("quite a lot for a home"), and Apple M-chips lack software support — "we're getting there but we're not there yet."

### [local-compute] Every idle device — even self-driving cars — joins the network
> "There are what, 10 billion devices in the world? Akash can technically get to all 10 billion... there's no reason why a self-driving car just in idle and charging should not be part of a global computation network."
> — [01:01:40](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=3700s)

**Context:** His answer on Akash's scale ceiling — "effectively limitless" per the host; permissionless design means the only requirement is whether the node can run on the device.

### [crypto-depin] Bitcoin should be the mother chain securing Akash
> "If you want to create a truly decentralized system that's extremely strong, can withstand state-level attacks... which is Bitcoin. So we're actually looking at bringing Bitcoin security [to] Akash... I believe Bitcoin has to be the mother chain of the world."
> — [01:00:16](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=3616s)

**Context:** Discussing whether Akash could exist without a token (only if a capable L1 existed); actively researching consensus mechanisms to reduce reliance on the AKT token for security.

### [other] Bitcoin at $100K by end of 2024
> "End of the year, I think it'll be 100K."
> — [01:06:02](https://www.youtube.com/watch?v=RYs9UTXv43Q&t=3962s)

**Context:** Host asked for a year-end Bitcoin prediction as a closer (June 2024); BTC crossed $100K in early December 2024. In the same breath he names the DePIN gap he wants filled: "decentralized power — without power there's nothing."
