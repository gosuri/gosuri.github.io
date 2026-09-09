---
id: gLzJoHmx4Js
title: Building The Infrastructure Of Web3 | Greg Osuri Of Akash Network | The FH Show - EP16
channel: Felix O. Hartmann
date: 2022-10-04
duration_min: 59
url: https://www.youtube.com/watch?v=gLzJoHmx4Js
type: podcast
greg_speaks: yes
oneliner: Bear-market podcast on decentralized web services, Akash's GPU roadmap, appchain sovereignty, and a 1,000-provider target by 2024.
---

## Summary

Recorded at a conference during the 2022 bear market, Greg walks Felix Hartmann through the "decentralized web services" (DWS) thesis: enormous underutilized supply of compute, storage, and bandwidth can be unlocked into open marketplaces. He traces Akash's origins to 2014 container/Kubernetes work and an edge-computing vision — delivering workloads within 100ms for "cognitive continuation" — that forced decentralization for fault tolerance. He argues cloud consolidation is dangerous: three companies control ~80% of cloud, global data centers declined from 8.2M to 7.1M, and (citing a16z's "Trillion Dollar Paradox") 50% of online-service spend flows to hyperscalers — the "Uncle Jeff tax." Current state of the network: ~50 providers (launch partner Equinix), ~$2,832/month in fees, ~20% penetration in Cosmos, persistent storage live, IP leases weeks away, and GPUs targeted "within the next three months" (they actually shipped in 2023). Targets: 1,000 providers and 60+ protocol clients within 12 months, making Akash "the most distributed network by 2024" with a 20ms latency goal for the 95th percentile of internet users. He discusses miner onboarding (96% close rate, OS-level integrations like RaveOS as distribution channels), tornado-cash-era overcompliance (GitHub still charging banned devs), take-income value capture pending SEC clarity, and why Akash needed a sovereign Cosmos chain after CryptoKitties crashed their 2017 Ethereum prototype. He closes predicting enterprise penetration and a hyperscaler (Microsoft/Google/Amazon) becoming an Akash provider within three years, plus praise for bear "build markets" and Steven Levy's book "Crypto."

## Topics

decentralized cloud, decentralized web services, gpu marketplace, edge computing, data centers, cloud consolidation, appchains, cosmos, ibc, interchain security, tornado cash, censorship resistance, akt tokenomics, miners, metaverse, cloud gaming, bear market

## Predictions & Notable Claims

### [cloud-decentralization] Akash will be the most distributed network by 2024
> "We're targeting about a thousand providers for the next 12 months or so... we want really heavily distributed, like the original vision of the edge computing. I think we're going to see that. So by 2024 I think Akash [is] the most distributed network."
> — [00:18:31](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=1111s)

**Context:** Provider acquisition plan: ~50 providers at the time (pre-incentives), targeting 1,000 providers and 60+ protocol clients within 12 months.

### [gpu-economics] GPUs coming to Akash within three months
> "GPUs are coming within the next three months, we're very aggressively targeting."
> — [00:12:05](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=725s)

**Context:** Roadmap answer on what can run on Akash (Oct 2022). Dated: the GPU marketplace actually went live ~11 months later, in September 2023. He adds at 00:31:57 that the design was ready and the spec would be open-sourced soon.

### [cloud-decentralization] The 50% "Uncle Jeff tax" on online services
> "a16z came up with an amazing report recently called the Trillion Dollar Paradox, where they said 50 [percent] of every penny you spend on online services like Asana or Netflix and whatnot goes to Amazons or Googles of the world... half of every dollar you spend goes to the Uncle Jeff tax."
> — [00:08:33](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=513s)

**Context:** Cited to argue cloud margins are unsustainable and companies are repatriating from cloud back to data centers; "three companies really control eighty percent of the market share [of] the cloud."

### [cloud-decentralization] Edge data centers are disappearing — a warning
> "Back then there were 8.2 million data centers; when we began [it] was at 7.1 million data centers... that's very scary if you don't do something about it... the edge data centers owned by companies, individuals are going away. If you don't do something about getting them back, we will not be able to be at the purview of the cloud."
> — [00:07:09](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=429s)

**Context:** Argues hyperscaler consolidation is destroying independent edge capacity; Akash's mission framed as reversing this. (Quote spans into the 00:07:51 block.)

### [cloud-decentralization] A hyperscaler will be an Akash provider within three years
> "In three years I would like to see a Microsoft or a Google or Amazon [on] Akash... I think it's gonna happen... then we'll go talking petabyte, not terabyte."
> — [00:54:44](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=3284s)

**Context:** Asked what the next three years look like; also cites grassroots DoD adoption ("military-grade") and predicts "quite a lot of enterprise penetration in the next three years."

### [cloud-decentralization] 20ms latency for the 95th percentile of internet users
> "With a network of a thousand regions, the goal is to reduce latency to 20 milliseconds — network latency to 20 milliseconds for 95th percentile active internet population."
> — [00:29:04](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=1744s)

**Context:** Answering whether Akash could serve metaverse/cloud-gaming workloads; contrasts with ~300ms US coast-to-coast latency and says a thousand regions "unlock a whole range of applications we haven't yet seen."

### [cloud-decentralization] Everyone eventually outgrows shared infrastructure
> "There will come a point where you cannot use shared infrastructure anymore... Dropbox started off on the cloud but they came to a point where it's very very expensive... people are going to need their own compute, their own sovereignty — be it compute, be it software, whatever layer you're running on — eventually for scaling, and there's really no other way."
> — [00:47:40](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=2860s)

**Context:** The WordPress-to-own-servers analogy applied to blockchains (appchains vs. shared state) and to compute sovereignty generally; earlier he states "my thesis is once you bootstrap you will need sovereignty" (00:46:13).

### [crypto-depin] Crypto-node concentration on Big Cloud is a systemic risk
> "There's also stats that 39 [percent] of Solana nodes are running out of... Amazon... well 69 [percent] of Ethereum nodes are running on the big cloud... it's not that Amazon [is] good or bad, it's just the fact that there's such heavy concentration — it is a potential point of failure."
> — [00:13:33](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=813s)

**Context:** Referencing Hetzner banning Ethereum nodes (~10% of the network) in August 2022; warns a government sanction could make cloud-hosted nodes "disappear overnight."

### [crypto-depin] AKT price is a security function, not an investment
> "AKT needs to have higher value in order for the blockchain to be secure. Without security there's no functionality... the price of AKT is a direct function of the security and the functioning of the system, not as an investment asset."
> — [00:36:54](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=2214s)

**Context:** Discussion of take-income value capture (burning/redistributing a cut of marketplace volume), held back pending regulatory clarity from the SEC's Ethereum-staking posture. Partly co-articulated with the host.

### [crypto-depin] Walmart's 10,000 edge data centers
> "Walmart recently announced that they're going to open 10,000 new data centers... because they want edge capability... ideally they should be able to sell web services [on] Akash."
> — [00:09:15](https://www.youtube.com/watch?v=gLzJoHmx4Js&t=555s)

**Context:** Example of enterprise repatriation creating underutilized capacity Akash could monetize; envisions enterprises whitelisting internal workloads then selling excess to the marketplace.
