---
id: AWKVdqzUBAg
title: Greg Osuri of Akash on Unlocking DePIN Capabilities for AI Model Training
channel: Nebular
date: 2024-08-02
duration_min: 41
url: https://www.youtube.com/watch?v=AWKVdqzUBAg
type: keynote
greg_speaks: yes
oneliner: Conference talk + live demo: Greg on the GPU shortage, DePIN as AI's supply-side fix, and renting an A100 on Akash in three minutes.
---

## Summary

A ~15-minute conference talk with extended Q&A and a live demo. Greg opens with his credentials (top-trending Golang libraries used by Nvidia's Kubernetes driver, HashiCorp, US DoD) and frames the talk around a Semafor article on crypto solving AI's chip crisis. His core argument: GPUs are nearly impossible to lease on demand — hyperscalers demand long contracts, Nvidia direct means a two-year wait, and even Lambda/CoreWeave require 1-2 year prepaid commitments — which kills startups whose survival depends on iteration speed (citing Banana.dev's shutdown). Meanwhile enormous GPU supply sits idle: post-merge Ethereum miners, generations of chips (V100s/A100s) warehoused after upgrades, and ML companies' between-training downtime. Akash (whitepaper 2018, which already flagged GPUs) matches these via an on-chain reverse-auction order book with off-chain peer-to-peer execution: H100s around $1.40/hr, A100s at $0.80/hr. He calls Akash "the de facto standard for decentralized AI," citing Venice AI (Erik Voorhees), Nous Research training Hermes on Akash, Brev.dev ("Firebase of AI," used by Nvidia), Morpheus, and Foundry (DCG) supplying A100s. Stats: 58M gigabyte-hours served, ~186,000 leases, ~1,500 daily active deployments. He live-demos deploying Mistral via Ollama on a rented A100 in ~3 minutes. Q&A covers reputation-based auditing instead of SLAs (HIPAA via human auditors on-chain), persistent storage and Filecoin/Jackal composability, planned block-reward incentive pools for latency-sensitive workloads (Helium-style), solar-powered Starlink data centers in Africa doing local-language AI, and upcoming trial wallets (authz + fee grants) to fix crypto onboarding friction.

## Topics

gpu shortage, depin, ai training, decentralized cloud, gpu marketplace, akash network, nvidia, crypto mining gpus, decentralized ai, africa, solar compute, wallet ux, auditing, live demo

## Predictions & Notable Claims

### [gpu-economics] GPUs are nearly impossible to lease on demand
> "GPUs today are nearly impossible to lease on demand — on demand in the sense, use for however long you need... if you try and go to Amazon today and try to rent a chip, it's impossible to get on demand, you have to get into a long contract before they can even talk to you."
> — [00:02:53](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=173s)

**Context:** Core thesis of the talk; he adds that going direct to Nvidia means a two-year wait, and Lambda/CoreWeave require 1-2 year prepaid contracts with 3-6 month delivery. Quote spans into the next caption block.

### [gpu-economics] Enormous idle GPU supply sits in crypto miners and warehouses
> "There's enormous amounts of chips actually available right now, essentially for free, in crypto miners... when companies upgrade their chipsets... the older models are available — there's a whole supply chain that buys up these older models and they just sit idle... sitting in warehouses and not being used."
> — [00:05:51](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=351s)

**Context:** The supply side of his DePIN thesis: post-Ethereum-merge miner GPUs, superseded chip generations (V100s after OpenAI moved to A100s/H100s), and ML companies' idle time between training runs.

### [gpu-economics] Akash predicted the GPU shortage in its 2018 whitepaper
> "We wrote a paper in 2018 describing what Akash Network would look like, and we actually talked about GPUs in 2018, but nobody really paid attention to the GPU shortage then — but it's very obvious now, seeing the success of ChatGPT."
> — [00:07:18](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=438s)

**Context:** Positioning Akash as having anticipated the AI compute crunch years before ChatGPT made it mainstream.

### [decentralized-ai] Akash is the de facto standard for decentralized AI
> "Akash now is the de facto standard for decentralized AI. You'll see projects like Venice AI, which is co-founded by Erik Voorhees... him embracing Akash as the DeAI layer for Venice AI, which is a privacy-optimized, censorship-resistant AI chat service."
> — [00:12:20](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=740s)

**Context:** Ecosystem section; he also cites Nous Research training the next Hermes model on Akash and "Neural Thumper," the first model trained completely on Akash using 24,000 A100-hours. ("de facto" garbled as "deao" in auto-captions.)

### [crypto-depin] Block rewards will buy the network properties you want, Helium-style
> "When we start doing block rewards, we'll start incentivizing the properties that you want... you can create a configuration pool that says hey, we want a server in LA or New York... an incentivized pool to attract that particular compute... like Helium did it pretty well with network coverage. That way we can actually get the low-latency network."
> — [00:33:58](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=2038s)

**Context:** Answering a cloud-gaming latency question; AI isn't latency-sensitive so it's the current focus, but planned incentive pools would bootstrap geographic/latency coverage for gaming.

### [local-ai] Solar-powered Starlink data centers are bringing AI to off-grid Africa
> "There are autonomous regions in Africa that don't have physical connectivity, but they're using Starlink to create remote data centers and using solar-powered sites to have remote data centers that are doing AI... a lot of really critical services now being rendered in local autonomous regions, and we're looking to connect a lot of those data centers to Akash Network."
> — [00:34:40](https://www.youtube.com/watch?v=AWKVdqzUBAg&t=2080s)

**Context:** Local AI trained in local languages for education and medical diagnosis; earns income for communities when idle and expands Akash coverage — an energy-adjacent, compute-goes-local example he predicts will grow via block rewards. Quote spans into the next caption block.
