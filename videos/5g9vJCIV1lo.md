---
id: 5g9vJCIV1lo
title: Decentralized solutions for cloud computing and AI  📌 Greg Osuri, Akash @ DePIN Day Austin
channel: Fluence
date: 2024-09-10
duration_min: 16
url: https://www.youtube.com/watch?v=5g9vJCIV1lo
type: keynote
greg_speaks: yes
oneliner: DePIN Day Austin talk: Akash's 2015 Kubernetes origins, the supercloud white paper, $1.50 H100s, and a live mixtral deploy demo.
---

## Summary

Conference talk at DePIN Day Austin walking through Akash's backstory plus a live demo. Greg explains that Akash began in 2015 as a way to run Kubernetes at scale across multiple clouds/edge; code the team wrote is used by Nvidia, IBM, and AWS (Nvidia's Kubernetes driver uses Akash code, and Akash now uses Nvidia's driver — his example of how open source foundations compound). Centralized control planes broke at scale (orphaned clusters, deadlocks), pushing them in 2016 toward a decentralized shared-state control plane — first on Ethereum Frontier, then their own Tendermint layer 1, eventually Cosmos SDK, becoming the first IBC-interoperable chain. The 2017/2018 white paper implemented the "supercloud" (term coined at Cornell in 2015), with machine learning as the primary target workload from the start. He runs through milestones: mainnet 2020 as the first ephemeral marketplace for containerized workloads, persistent storage, and accelerated compute for GPUs, making Akash "the only place to get on-demand H100s" at $1.50/hour (captions render it "$150"). Customers cited: Nous Research (Hermes), Venice AI, Morpheus, Brev, plus Cosmos-ecosystem and Bittensor miners; 58M GB-hours of memory delivered and 186,000 apps to date. Priorities: removing friction for tinkerers with a "DigitalOcean-like" Console 2.0 (one-click deploys without crypto or credit card) in the next three months, en route to "cloud parity" with AWS. He notes the 2019 roadmap is still being delivered unchanged. Ends with a live demo deploying Mixtral on an H100 via SDL, including provider auditing and on-chain reliability data.

## Topics

decentralized cloud, supercloud, kubernetes, gpu marketplace, h100 pricing, open source, cosmos, ibc, akash history, machine learning, console, live demo

## Predictions & Notable Claims

### [cloud-decentralization] Akash is the first implementation of an open source supercloud
> "The white paper we wrote in 2017, 2018... introduced the notion of a supercloud. Supercloud, the term was coined by Cornell in 2015, but we implemented the supercloud. So Akash is the first implementation of an open source supercloud."
> — [00:04:22](https://www.youtube.com/watch?v=5g9vJCIV1lo&t=262s)

**Context:** Historical claim anchoring the supercloud framing; the same white paper targeted machine learning as the primary workload years before the GPU crunch.

### [gpu-economics] On-demand H100s at $1.50/hour, unheard of in traditional cloud
> "Akash again is the only place to get on-demand H100s... H100 is available for [$1.50], which is unheard of in traditional cloud. Akash is the only place you can get that."
> — [00:07:17](https://www.youtube.com/watch?v=5g9vJCIV1lo&t=437s)

**Context:** Captions render the price as "$150"; the demo close ("real-time inference on H100 under [$1.50] an hour") confirms he means ~$1.50/hour. Cites the Semafor story of a Columbia student priced out of AWS who trained on Akash.

### [cloud-decentralization] The biggest decentralization risk is who controls the roadmap
> "Decentralization — I think if you remove enough layers, you'll see the biggest risk is not the actual software but actually people building the software and the roadmap. So who sets the roadmap and who delivers the roadmap, all that is done in the open. That's a big part of Akash's decentralization approach."
> — [00:06:31](https://www.youtube.com/watch?v=5g9vJCIV1lo&t=391s)

**Context:** Explaining Akash's ~500 contributors, on-chain funding proposals, working groups, and seven contributing companies.

### [cloud-decentralization] Goal: cloud parity with Amazon
> "As we keep delivering, the goal is to get to cloud parity. Cloud parity is when we can sufficiently say that you can actually move all your workloads from your Amazon of the world to Akash. We're not there yet... our biggest capabilities, be it reservations or managed backends, I think will put us to the parity."
> — [00:10:47](https://www.youtube.com/watch?v=5g9vJCIV1lo&t=647s)

**Context:** Forward-looking roadmap statement; also notes Console 2.0 with a "DigitalOcean-like experience" and one-click, crypto-free deploys was due "in the next 3 months" (from Sept 2024).
