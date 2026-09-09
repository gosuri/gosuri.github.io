---
id: ci_r_fOVT04
title: Mission: DeFi EP 98 - Can Akash be a major player in AI with their GPU market? Founder Greg Osuri
channel: Mission: DeFi
date: 2023-05-17
duration_min: 53
url: https://www.youtube.com/watch?v=ci_r_fOVT04
type: podcast
greg_speaks: yes
oneliner: Greg on Akash's GPU marketplace at the start of the AI boom: GPUs as the new oil, home supercomputers, and GPU battery packs.
---

## Summary

Mission: DeFi live episode (hosted by Brad Nickel with co-host Chuck) recorded just as Akash was bringing GPUs to market in mid-2023. Greg introduces Akash as "the world's first supercloud" running on underutilized global capacity (~15% average data-center utilization), claims 80-85% cost savings versus AWS, and explains the reverse-auction marketplace, Kubernetes/SDL deployment model, decentralized auditors, provider moderation tooling (citing Sia's ISP takedowns as a cautionary tale), and configurable resource-reclamation windows. The AI-focused core: hyperscalers (Amazon/Google/Microsoft ~80% of the market) gatekeep H100s/A100s behind multi-million-dollar commitments, the NVIDIA→TSMC→ASML supply chain is structurally constrained (he cites Berkshire dumping TSMC and reshoring costs), and GPU supply won't catch demand for years — making Akash the secondary market for idle chips. His most notable forward-looking claims are about compute moving home: home supercomputers doing local sensing/inference/training for latency and privacy, neighbors trading GPU time like battery packs selling power back to a grid, and centralized systems "absolutely failing" at that scale. He also predicts GPU protectionism/KYC pressure on American providers while insisting the protocol layer stays permissionless, and describes the emerging decentralized-ML stack (Bittensor, Fetch.ai, Gensyn) building on Akash. Roadmap items dated to mid-2023: incentivized GPU testnet, USDC stable payments, credit-card onboarding, and provider incentives. Greg drops off twice due to phone issues; captions garble several passages (his name is rendered "Craig osterley").

## Topics

gpu marketplace, decentralized cloud, ai compute shortage, gpu supply chain, home compute, supercloud, hyperscaler concentration, decentralized ml, bittensor, stable payments, provider moderation, kyc

## Predictions & Notable Claims

### [cloud-decentralization] Cloud is modern society's fabric, 80% controlled by four companies
> "The whole point of Akash is to remove the heavy concentration of power... compute cloud today is a fabric of modern society — our data, your data, everything runs [on it] and there's no going back... the concentrated compute power: Amazon, Google, Microsoft control over 80% of the market today."
> — [00:29:45](https://www.youtube.com/watch?v=ci_r_fOVT04&t=1785s)

**Context:** Answering whether Akash's role is to decentralize access to GPU power; same riff opens the episode as the cold-open clip. He adds startups can't get 10 H100s at $3/hr on AWS or GCP without ~$3M commitments.

### [gpu-economics] GPUs are the new oil
> "I predict GPUs are the new oil. Whoever has GPUs [wins] the AI race. Ultimately OpenAI is better than the rest of the LLMs, arguably, because it has access to GPUs... models are open source, the data for the most part is open."
> — [00:31:58](https://www.youtube.com/watch?v=ci_r_fOVT04&t=1918s)

**Context:** After describing hyperscalers' pre-commit contracts creating both scarcity and stranded idle GPUs — the two structural inefficiencies Akash's marketplace exploits. Caption garbles "wins the AI race" as "with the wrong the AI races."

### [gpu-economics] GPU supply won't catch demand for years
> "Supply is not catching up to demand, not even close... the demand is exponentially improving, so there's no indicator that indicates the cost and supply is [improving] over the next five years. And even if they do, Akash is going to be the secondary market, so it doesn't matter."
> — [00:35:29](https://www.youtube.com/watch?v=ci_r_fOVT04&t=2129s)

**Context:** Asked whether GPU inventory on Akash will ebb; he walks through the NVIDIA→TSMC→ASML chokepoints, COVID constraints, reverse-globalization and 5x US fab costs. Quote spans into the [00:38:20] block.

### [crypto-depin] GPU protectionism and KYC are coming — but the protocol stays permissionless
> "The world is kind of going to higher protectionism when it comes to GPUs... I would imagine some American GPU providers will have to know who the users are, so I don't think there's escape from verified users... but at a protocol level it will always be permissionless — that's not going to change."
> — [00:27:36](https://www.youtube.com/watch?v=ci_r_fOVT04&t=1656s)

**Context:** Citing US export controls on high-end GPU sales to China (~9 months prior); he distinguishes provider-level compliance from protocol-level neutrality.

### [local-compute] Home supercomputers doing local inference and training
> "With GPUs going to come more and more in my home, I think we're going to see home supercomputers that are going to be local... because they need latency. They're going to be analyzing, sensing and inference data, and training the data for your home operations in your home — they're not going to go to the cloud."
> — [00:39:01](https://www.youtube.com/watch?v=ci_r_fOVT04&t=2341s)

**Context:** Arguing the world will never use all chips all the time — idle capacity from data centers down to gaming machines ("I use my Xbox maybe once or twice a year... why is that GPU not connected?") is the future supply base. Quote continues into the [00:39:45] block.

### [local-compute] Neighbors trading GPU time — battery packs for compute
> "Consider a scenario where you have a supercomputer in your house and your neighbor has one and you need more power — you don't want to go to the cloud, you can go ask your neighbor and use Akash to trade... It becomes like battery packs for GPUs at some point: just use it when you have, or sell it back to the grid... or get back from the grid when you need it."
> — [00:39:45](https://www.youtube.com/watch?v=ci_r_fOVT04&t=2385s)

**Context:** Extending the home-supercomputer scenario into an electricity-grid analogy for peer-to-peer compute sharing — an early statement of his recurring compute-as-grid thesis.

### [cloud-decentralization] Centralized systems will absolutely fail at this scale
> "That's the kind of future that we're looking at, and it's only possible for a decentralized system, because centralized systems will absolutely fail. There's no way, at the scale which we talked about, a centralized system can function... it has to be decentralized from the get-go — the core has to be decentralized."
> — [00:40:28](https://www.youtube.com/watch?v=ci_r_fOVT04&t=2428s)

**Context:** Concluding the home/grid compute vision; his argument for why the sharing layer must be decentralized from day one rather than retrofitted.
