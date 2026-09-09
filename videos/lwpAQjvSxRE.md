---
id: lwpAQjvSxRE
title: Akash Network founder Greg Osuri - Building a Decentralized Computing Marketplace
channel: Crypto Nuggets
date: 2023-12-19
duration_min: 61
url: https://www.youtube.com/watch?v=lwpAQjvSxRE
type: podcast
greg_speaks: yes
oneliner: Deep-dive interview on Akash's origin, the GPU marketplace pivot, DePIN incentive design, and radical transparency as moat.
---

## Summary

Hour-long interview with host Joe of Crypto Nuggets, three months after Akash's GPU launch. Greg traces the arc from AngelHack (150k developers, Firebase launched there) through early Kubernetes work at Overclock Labs, the Cornell supercloud concept, the 2017/2018 papers, accidentally "building a blockchain" out of BitTorrent plus Merkle trees, the CryptoKitties congestion that pushed them off Ethereum, and launching on Tendermint/Cosmos SDK as the first app chain after the Hub. He explains why they deliberately withheld supply incentives until demand existed: heterogeneous CPU demand made incentive design wasteful, whereas GPU demand was obvious ("Elon Musk complaining... it's harder than getting drugs"). Since GPU launch, usage grew 150% month-over-month, utilization sits ~45-50% lifetime (his stated "sweet spot" is 50%), and he claims Akash collects more daily fees than Graph, Helium, and Livepeer combined — pre-incentives, with zero ad spend — and is 4-5x Render's estimated usage. He details demand (Stable Diffusion/ComfyUI, a game studio, a movie studio, a 9,000-DAU consumer app tripling monthly, Zephyr miners) and supply (ML companies subleasing idle chips, Foundry appearing organically). Candid product notes: 1% pre-wallet-to-post-wallet conversion, Keplr as the biggest friction, an Overclock-hosted credit-card platform coming. He argues Akash suits inference and fine-tuning today, not frontier-scale training (latency/homogeneity limits), floats Bitcoin-secured Akash as his "ultimate vision," blasts "progressive decentralization" as a VC fallacy, and names radical transparency and community as the only real moats. Target for next year: $1M/day network spend.

## Topics

decentralized cloud, gpu marketplace, supercloud, depin incentives, marketplace design, utilization, render comparison, cosmos, kubernetes, inference, fine-tuning, distributed training, bitcoin security, wallet friction, radical transparency, tokenomics

## Predictions & Notable Claims

### [gpu-economics] 50% utilization is the marketplace sweet spot
> "I think 50% is an ideal sweet spot in terms of utilization rate, wherein the suppliers have enough confidence that they will be able to clear the inventory... tenants have enough confidence that they'll be able to find compute to scale. That's the sweet spot — we want to keep the network at 50% and scale accordingly."
> — [00:17:21](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=1041s)

**Context:** Explaining supply-first marketplace bootstrapping after Foundry's GPUs appeared organically; GPU utilization was ~45% lifetime, ~60% that day.

### [crypto-depin] The DePIN "incentivize supply first" thesis is false
> "The whole thesis of like you need to bootstrap supply before you can validate demand is proving to be false. In fact, I'm to blame too, because I wrote a paper in 2019 titled 'Bootstrapping a free market by borrowing from the future.'"
> — [00:20:58](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=1258s)

**Context:** Contrarian take on Helium/Filecoin/Hive Mapper-style incentive models; supplier CAC is only justified when lifetime value (cleared inventory, fees) exists.

### [crypto-depin] Akash out-earns Graph, Helium, and Livepeer combined — pre-incentives
> "Currently Akash makes more in revenue, or collects more in daily fees, than Graph Protocol, Helium, Livepeer combined — and all these networks are incentivized and Akash is not incentivized. This is pre-incentive... also zero ad spend."
> — [00:21:42](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=1302s)

**Context:** Demand grew 150% month-over-month post-GPU launch; incentives were slated for the following year, with "a few hundreds of millions of dollars worth of budget," after which "we think our supply is going to scale exponentially."

### [gpu-economics] Akash is ~4-5x Render's usage
> "Akash is four or five times larger in terms of usage when compared to the Render."
> — [00:23:10](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=1390s)

**Context:** His estimate from Render's on-chain ERC-20 payouts (~$1M/month to providers at ~1% utilization); he flags it's inference from public data since Render is closed source.

### [gpu-economics] Chip supply is nowhere close to demand — get chips into people's hands
> "We have to do everything we can, if you want to keep AI alive, to get more chips in people's hands. Demand is only increasing... but the chip manufacturing and chip supply chain is nowhere close to catching up with the demand."
> — [00:35:24](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=2124s)

**Context:** After explaining ChatGPT's throttling and paused API signups as symptoms of GPU scarcity; also notes H100 demand is memory-driven (on-chip memory scales with parameter count).

### [cloud-decentralization] Win state: hyperscalers integrate Akash
> "Our best-case scenario is when Google, Microsoft and Amazon integrate Akash on the demand side — that's our ideal win state... we do have some efforts in place to attract the big cloud onto Akash."
> — [00:45:36](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=2736s)

**Context:** Describing the three-sided ecosystem strategy (demand, supply, crypto); precursor to his later "hyperscalers will join Akash" refrain.

### [crypto-depin] Ultimate vision: Bitcoin secures Akash
> "We believe Bitcoin is the most secure chain, hands down... my ultimate vision there is I want Bitcoin to secure Akash, because that gives Akash nation-state-level protection when it comes to security."
> — [00:48:29](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=2909s)

**Context:** Mentions a live testnet extending Akash security from Bitcoin and a "not so distant future" with sats payments for model hosting and sats staking to secure Akash.

### [crypto-depin] Progressive decentralization is a fallacy
> "Progressive decentralization — it never works, not a single case, guarantee you that... You either decentralize or you're not, from day one. Bitcoin was day-one decentralized, Ethereum was day-one decentralized."
> — [00:55:43](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=3343s)

**Context:** Contrasting Akash ($1.8M raised, launched, open source) with hundreds-of-millions-funded "aspirational networks" still unlaunched; cites Render's five-years-closed-source GoDoS as the cautionary example.

### [cloud-decentralization] Open systems go far, closed systems go fast
> "The whole notion of a decentralized system is not how fast you can move but how far you can go... with open systems you can go far, while with closed systems you can go fast. I'm not here to build closed systems."
> — [00:52:09](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=3129s)

**Context:** His recurring argument for why decentralized coordination costs are worth paying — network effects compound; Akash had nine chain upgrades that year without a security incident.

### [gpu-economics] Milestone: $1 million a day in network spend
> "A million dollar a day, there you go — that's the big milestone when I will be satisfied that Akash has left the building. Right now we're maybe 0.3% there. We want to get first 1% and then 10% and then hopefully 100% very soon."
> — [00:59:20](https://www.youtube.com/watch?v=lwpAQjvSxRE&t=3560s)

**Context:** Answering "if we're sitting here a year from now, what do you hope to be telling everyone?"
