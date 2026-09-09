---
id: pod-the-edge-podcast-akash-supercloud
title: "Akash: The Crypto-Powered Decentralized Supercloud"
channel: The Edge Podcast
date: 2024-01-16
duration_min: 70
url: https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294
type: podcast
greg_speaks: yes
oneliner: DeFi Dad/Nomadic interview on why Akash needs crypto: parity in two years, compute from homes and cars, GPU liquidity mining, ETF thesis.
---

## Summary

Hosts DeFi Dad and Nomadic (4RC) spotlight Akash as DePIN was heating up in early 2024. Greg recounts the background (AngelHack, early Kubernetes, edge computing leading accidentally into blockchain via BitTorrent state consistency, Cornell's supercloud idea) and lays out Akash's two-phase master plan: pre-parity — closing capability gaps with AWS/GCP by shipping features with clear unique value (GPUs when hyperscalers had no supply; non-custodial hosting) — then "innovation beyond imagination," his vision of 1,000 regions at 15ms latency and compute repurposed from homes, consoles, and cars. The centerpiece is a long answer to "why does Akash need crypto": public utilities must be open; open-core and Red Hat models fail; "tokenized open source" gives sustainability, permissionless write access solves credential bootstrapping at the edge, and protocols get permanency corporations can't ("look at Bitcoin, it's not going to die"). He details adoption blockers — credibility (DoD experimenting with Akash internally; no-coiner ML devs converting for $500 A100s) and behavior (enterprises can't buy crypto on a corporate card) — and the fixes: AkashML credit-card rails and integrations with a then-unnamed fast-growing ML platform. Community questions cover the supply-incentive design: GPU "liquidity mining" pools per chip configuration (A100+NVMe etc.), a $5M 90-day pilot with ~$400M unminted AKT reserved, A100 utilization above 90%. He closes with his Bitcoin-ETF fundamentals thesis, the Semafor "blockchain saving AI" press moment, a warning about buzzword charlatans entering GPU-cloud, and a call to "be relentless in demanding open systems."

## Topics

decentralized cloud, supercloud, gpu marketplace, tokenized open source, depin, gpu incentives, liquidity mining, bitcoin etf, akashml, openai governance, credibility

## Predictions & Notable Claims

### [cloud-decentralization] Akash reaches cloud parity within two years
> "Every time we launch, we're very, very, very cognizant about the value proposition and how we differentiate ourselves... So we believe we'll achieve parity in the next two years. And after that, the phase we like to call is really innovation beyond imagination."
> — [00:17:20](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** "Parity" = matching traditional clouds' critical capabilities (observability, automation, etc.); dated January 2024.

### [local-compute] Repurposing compute from homes, consoles, and cars
> "What would a world look like where you can have 1,000 regions offering general-purpose compute at 15 millisecond network latency for 98 percentile of active internet population?... And what would it look like where we can essentially repurpose compute from homes, right? So are we talking about powerful GPUs, be it in your gaming console, to your cars, to every connected device has some degree of AI capability and it will have AI capability in the future? And how does a connected globe that comprises of these low-power devices look?"
> — [00:18:05](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** His post-parity "innovation beyond imagination" vision — the clearest statement in this episode of the home/edge compute future.

### [cloud-decentralization] Permanency is only possible with a protocol
> "Akash five years down the line and be decentralized, gives Akash a unique angle that traditional companies doesn't, which is permanence. Like permanency is not possible with the corporation, only possible with a protocol... with permanency, you get time that you don't get with traditional corporations."
> — [00:18:46](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** Expanded later at [00:40:00]: software lost permanency in the web era, "with crypto... the creator or the company... can go away and the software still is alive. Look at Bitcoin, right? It's not going to die."

### [open-source-ai] The OpenAI board crisis proves corporate AI is fragile
> "There was a board takeover. Five people that nobody heard of before were able to control the most powerful AI in the world. Think about the implications of that... imagine if they had access to AGI... There is inherent fragility in these old systems that need to be changed and the only way to do so is through open source. Closed systems can go fast, open systems can go far."
> — [00:35:57](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** The November 2023 OpenAI board episode used as the case for public utilities being publicly owned; the "go fast / go far" aphorism closes the [00:36:38] block.

### [crypto-depin] Tokenized open source — a sustainability model the world has never seen
> "I looked at open core. Open core was not the solution. Token as open source software allows a sustainability model to open source that the world has never seen. So why? Because it moves the maintainability of a network away from a single corporation to the common... And for the first time we can have an open write database. Never before it was possible before crypto."
> — [00:37:18](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** The core of his "why crypto" answer; he adds that permissionless writes solve the minimal-trust credential-bootstrapping problem of edge computing ([00:38:39]).

### [crypto-depin] Post-ETF, fundamentals will reprice crypto
> "So my prediction is with the Bitcoin ETF, you're going to see more institutional adoption. What that means is more focus on fundamentals, more than speculation in terms of valuing an asset... if you have a capability to go long, you'll also have a capability to go short... that is actually healthy in a way because it normalizes valuations."
> — [00:46:08](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** Days before spot-BTC ETF approval; he ties it to TradFi (Fidelity) starting to cover Akash and warns crypto has "X amount of time to reach the terms of adoption to match the valuation."

### [gpu-economics] Liquidity mining for GPUs
> "Similarly, Akash will have pools. A pool one could be A100 with [NVMe] storage, with PCI card, with X amount of memory, X amount of bandwidth, and certain characteristics of a provider that are preset, and a set of tokens can distribute to this pool... in the early days when there are a few participants, they're going to get significantly outsized rewards."
> — [00:53:39](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** Osmosis-style incentive pools applied to physical GPU supply; a $5M 90-day pilot was launching that month with "about $400 plus million dollars unminted on-chain incentives" in reserve ([00:55:40]), against 90%+ A100 utilization ([00:52:58]).

### [crypto-depin] Crypto is incentive on steroids
> "Crypto is incentive on steroids, right? So that's one key property of crypto that no other industry can give. And what can we do with the incentives in a supply constraint market? I think it's going to be fascinating, right? It has never been done before for GPUs."
> — [01:04:29](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** Closing alpha — several large ML companies were approaching Akash to list "their entire A100 fleet... thousands of A100s," partly for depreciation tax reasons ([01:05:09]).

### [decentralized-ai] For the first time, crypto has something Amazon doesn't
> "They talk about how they couldn't find compute on Amazon, but they could find compute on Akash. So I think for the first time we have something so critical that Amazon of the world doesn't. And we have an incredible shot to get this right."
> — [01:05:51](https://podcasts.apple.com/us/podcast/akash-the-crypto-powered-decentralized-supercloud/id1671489227?i=1000641868294)

**Context:** On Semafor's "blockchain saving AI" article — mainstream coverage of Akash with "zero coverage crypto" — which he calls exactly the narrative the industry needs (transcript garbles the second clause as "couldn't find computer in Akash"; sense per the Semafor article is "could").
