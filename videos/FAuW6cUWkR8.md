---
id: FAuW6cUWkR8
title: AI SUPERCLOUD with Greg Osuri of Akash Network
channel: The Interop
date: 2023-05-12
duration_min: 83
url: https://www.youtube.com/watch?v=FAuW6cUWkR8
type: interview
greg_speaks: yes
oneliner: Deep-dive livestream interview on Akash's supercloud vision, its GPU marketplace launch, and the state of the GPU market.
---

## Summary

Long-form livestream interview with host Seb of The Interop, recorded as Akash was running its GPU testnet ahead of the GPU mainnet launch. Greg frames Akash as "the first and only decentralized supercloud" — federating heterogeneous compute worldwide into a homogeneous developer experience — and recounts its Cosmos history (early Tendermint adopter, first IBC transaction, Osmosis pools 3 and 4). He candidly discusses UX problems: churn from deployments running out of escrow funds, provider resource reclamation, and crypto on-ramp friction, with credit-card and stablecoin payments coming. His case against public clouds rests on three arguments: outsized margins captured by cloud providers (citing Netflix/Dropbox filings and 37signals leaving the cloud), Amazon strip-mining open-source business models, and anti-market concentration — including selective GPU access that he says gave OpenAI an unfair leg up. He contrasts Akash with failed predecessors (Golem, iExec) that over-focused on verifiable compute rather than market needs. On network mechanics he covers tenants/providers/auditors/validators, reclamation-time transparency plans, and redundancy best practices. The GPU segment is detailed: Nvidia's supply chain (TSMC, ASML), export controls to China, ~45-50k A100s in the world, H100s reselling near $40k on eBay, hoarding and secondary markets, and his "contrarian" take that Nvidia is a software company ("the Apple of chips"). Long-term vision: cloud parity first, then massive edge distribution — "10,000 providers in every city" serving mobile compute like robots and self-driving vehicles. He also notes ~280 community contributors versus 17 Overclock Labs employees, content-moderation-by-providers, and hints at hyperscalers using Akash as a secondary market for pre-committed capacity.

## Topics

decentralized cloud, supercloud, gpu marketplace, gpu shortage, nvidia, ai training, cosmos, ibc, open source, cloud economics, edge compute, content moderation, ux, crypto on-ramps

## Predictions & Notable Claims

### [cloud-decentralization] Cloud is the fabric of society and must be publicly governed
> "If you consider cloud to be the fabric that holds a society, we need this fabric to be open and we need this fabric to be governed in the public and resources allocated in the public, rather than a single corporation doing it in a completely opaque manner."
> — [00:14:00](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=840s)

**Context:** Closing his three-part argument (cloud margins, open-source stifling, antitrust/censorship) for why Akash needs to exist.

### [gpu-economics] Clouds selectively gatekeep high-end GPUs; OpenAI got a leg up
> "Companies today that are doing machine learning cannot get these GPUs, the high-end GPUs we call A100s and H100s, on the cloud unless you have a special deal with someone higher up in one of these cloud providers... they selectively choose which company should be successful. OpenAI got a big leg up because of this reason and that's not fair."
> — [00:13:17](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=797s)

**Context:** Argument that hyper-concentration in cloud creates censorship by business bias; innovators get priced out of AI compute.

### [gpu-economics] ML companies should own their own GPUs for sovereignty
> "Soon I think a real vision is machine learning companies should own their own GPUs, because that's ultimately where the sovereignty stands... when they're not using it [they can provide it to Akash]."
> — [00:28:28](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=1708s)

**Context:** Discussing Akash as a secondary market for pre-committed/unused GPU capacity (Lambda Labs customers, banks financing GPU purchases serviced by Akash revenue).

### [cloud-decentralization] In a year or two Akash becomes the secondary market for cloud-grade compute
> "I think in a year or two timeframe you're going to see quite a lot of [hyperscaler] participation... and as that progresses it's not hard to see how Akash becomes a second market for cloud-grade compute."
> — [00:31:16](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=1876s)

**Context:** He argues the supercloud needs participation from "the big guys" or it stays a fringe network; says cloud-provider employees privately acknowledge the problem.

### [local-compute] Supermini: a supercomputer for the home
> "Akash has been working on GPUs for a very long time — if you remember Supermini... Supermini was supposed to be a supercomputer for the home, so you can have your own compute. So we've been exploring GPUs for over four years."
> — [00:54:18](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=3258s)

**Context:** Recalling Akash's early hardware experiment when asked about the GPU market; direct statement of the own-your-own-compute-at-home theme.

### [gpu-economics] Nvidia is a software company, not a hardware company
> "Nvidia is a software company, not a hardware company — that's my contrarian take. Nvidia's innovation is really software, the CUDA SDK that they came out [with] 10 years ago. That's why they're really good with AI."
> — [01:04:28](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=3868s)

**Context:** Explaining why GPU workloads break container portability and why Nvidia dominates ML; he later adds "Nvidia is the Apple of chips" (01:05:52).

### [cloud-decentralization] Post-parity: 10,000 providers in every city, workloads that follow the user
> "The first major milestone for Akash Network is parity with the cloud... post parity, imagine having 10,000 providers in every city of the world — GPU, CPU, whatever resource — imagine being able to provision a workload that follows your user no matter where they go."
> — [01:09:28](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=4168s)

**Context:** Answer to the long-term-vision question; roadmap is cloud parity first, then hyper-distributed compute.

### [local-compute] Mobile/edge compute (robots, self-driving) requires massive compute distribution
> "When you have a future where you have computers [that] essentially are mobile — you can think about a robot or a self-driving vehicle — the compute is at the edge, and in order for edge compute to function you need to solve the communication cost problem... the only way to achieve that is the massive distribution of compute all across, with the incentive model for these providers."
> — [01:10:12](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=4212s)

**Context:** Continuation of the post-parity vision; he calls the result "innovation beyond imagination" at 01:10:55. Caption reads "self-prime vehicle" (auto-caption artifact).

### [gpu-economics] Akash as the only cloud with H100s — no longer just the cheap alternative
> "With H100 we end up being the only cloud provider to have H100... it's no longer just an alternative cloud that's cheap, it's now the cloud that can get [you] resources that you can['t] get on the traditional cloud, and that's going to be the future."
> — [01:13:46](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=4426s)

**Context:** Claim about Akash "branching off" from clouds by offering scarce hardware and exotic options (NVMe, alternate runtimes) unavailable elsewhere.

### [cloud-decentralization] Hyperscalers will route users through Akash to competitors' GPUs
> "In the future you won't be surprised to see an Amazon user using a GPU on Google, paying using their Amazon account, and actually not leaving Amazon... now Amazon has a way to retain the user... and actually work with a competitor — and Akash is the bridge."
> — [01:20:52](https://www.youtube.com/watch?v=FAuW6cUWkR8&t=4852s)

**Context:** Answering an audience question about conversations with Google/Amazon; says web3 teams at both view Akash as "a critical piece of the future of the cloud" (he explicitly denies any Microsoft talks). "Akash is the bridge" lands at 01:21:35.
