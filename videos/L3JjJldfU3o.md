---
id: L3JjJldfU3o
title: The Akashian Challenge Phase 1 Livestream
channel: Akash Network
date: 2020-06-22
duration_min: 60
url: https://www.youtube.com/watch?v=L3JjJldfU3o
type: livestream
greg_speaks: yes
oneliner: First Akash bi-weekly stream: testnet Phase 1 recap with Jack Zamplin, validator awards, and early Supermini/home-compute and ML-on-Akash vision.
---

## Summary

Akash's first bi-weekly livestream, co-hosted by Greg Osuri and Jack Zamplin (Cosmos), recapping Phase 1 of The Akashian Challenge incentivized testnet: 211 registered teams, ~91 active validators, a zero-fee spam attack (3.6M transactions, 235k accounts, 16 jailed nodes) that the network survived with zero downtime, an AWS outage that only downed 9 of 91 nodes (Greg contrasts with Ethereum's 60%+ cloud reliance), a failed Cirrus upgrade traced to an SDK evidence-module misconfiguration, and the 150k-line code deletion from migrating Tendermint-custom code to Cosmos SDK. They present validator awards ("never jailed", top score, community), preview Phase 2 (provider operations, attracting GPU/data-center supply), and answer AMA questions.

The Q&A contains early statements of long-running Osuri theses: machine learning as Akash's biggest use case with a ~10x cost advantage; interoperability (IBC, NuCypher, Solana, stablecoin settlement, storage networks) as "the future"; unstoppable "ownerless oracles" and borderless workloads; and edge delivery via the Packet/Equinix program (150 edge metros at sub-10ms latency). Most notably for the local-compute archive, Greg pitches the Supermini — a Nvidia GPU "mini supercomputer" for the home that runs PyTorch/TensorFlow, earns AKT as a network node when idle, and lets researchers scale into the cloud with earned tokens. He describes personally hooking a Supermini to a drone and a Helium device to give "dumb IoT devices... intelligence at the edge," and frames home Kubernetes-on-GPU clusters as a testament to computing's march toward the home.

## Topics

testnet, akashian challenge, cosmos sdk, validators, supermini, home compute, edge computing, machine learning, ibc, interoperability, decentralized cloud, unstoppable applications, gpu

## Predictions & Notable Claims

### [local-compute] Supermini: a home GPU node that earns tokens when idle
> "Super mini is a mini supercomputer... it is a node on the Akash network... validators' expectation is that the nodes are in a data center, whereas super mini is supposed to be for your home... The cool thing is when you're not using the super mini, because it's a node on the network, it earns Akash tokens. So when you want to scale up beyond just using one super mini, you can use those tokens and pay for it."
> — [00:43:06](https://www.youtube.com/watch?v=L3JjJldfU3o&t=2586s)

**Context:** Answering "how does the Supermini play into Akash?" — 2020-era articulation of home hardware earning income on a compute marketplace; 300 units sold out in two weeks.

### [local-ai] Giving IoT devices intelligence at the edge with home compute
> "I'm personally connecting super mini to a drone I have, because the drone is limited in its intelligence... I have a Helium device here I am connecting to super mini, so I can actually enable these dumb IoT devices to have some intelligence at the edge. I'm running lots of models."
> — [00:55:15](https://www.youtube.com/watch?v=L3JjJldfU3o&t=3315s)

**Context:** Asked whether Supermini is plug-and-play; Greg's personal edge-AI use cases, plus Sunny's GPT-2 bot training on a Supermini.

### [local-compute] Home GPU Kubernetes clusters as a milestone of computing's evolution
> "If you think about a technical stack underneath the super mini, it is a full-on Kubernetes cluster... running on a GPU stack in your home... it took so long for technology in terms of evolution to even get us to a point that we can have a home cluster running Kubernetes. It's just a testament of advancement in simplicity and user-friendliness."
> — [00:57:22](https://www.youtube.com/watch?v=L3JjJldfU3o&t=3442s)

**Context:** Following Jack Zamplin's remark that infrastructure is moving from enterprises down to average users in the home — the "compute moves home" mega-trend framing.

### [gpu-economics] Machine learning is Akash's biggest use case, ~10x cost advantage
> "Machine learning happens to be our biggest use case, even though Akash is generic compute... because of the cost advantage that we're seeing with machine learning applications."
> — [00:48:56](https://www.youtube.com/watch?v=L3JjJldfU3o&t=2936s)

**Context:** June 2020 — years before the GPU marketplace launched; earlier he states "the cost advantage is literally about 10 times over the market" ([00:46:00](https://www.youtube.com/watch?v=L3JjJldfU3o&t=2760s)).

### [cloud-decentralization] Only 9 of 91 testnet nodes were on AWS, vs Ethereum's 60%+
> "There were, I believe, nine or ten nodes that went down right around the time there was an outage in AWS — so only nine out of 91 nodes are actually on AWS. I take that with a lot of pride, because Ethereum has over 60% of the nodes on AWS, or cloud in general."
> — [00:06:43](https://www.youtube.com/watch?v=L3JjJldfU3o&t=403s)

**Context:** Recapping the AWS outage that hit mid-testnet; used as evidence Akash's validator base practices the decentralization it preaches.

### [cloud-decentralization] Interoperability is the future of the decentralized cloud
> "We believe the future is interoperability, because Akash cannot do everything you need for a full cloud deployment... we'd rather work with teams or projects that have their expertise... interoperability, I believe, will be the future and is key for scalability and adoption."
> — [00:40:56](https://www.youtube.com/watch?v=L3JjJldfU3o&t=2456s)

**Context:** On IBC integrations planned with NuCypher (key management), Solana (smart contracts), stablecoins for settlement, and storage networks (IPFS, Sia).

### [cloud-decentralization] Unstoppable, borderless workloads as a core use case
> "Because Akash is unstoppable — that means you cannot take down the workload unless you have the key to the workload... borderless knowledge sharing, borderless commerce, truly borderless that cannot be stopped, is a big use case for Akash."
> — [00:52:25](https://www.youtube.com/watch?v=L3JjJldfU3o&t=3145s)

**Context:** Describing Phase 3 incentives for "ownerless oracles" (e.g., DAO-safe frontends like Uniswap's) and censorship-resistant publishing.

### [cloud-decentralization] 150 edge metros at sub-10ms latency via the Packet program
> "We have about 150 edge sites that Akash is ready to go on... when we unlock those edge sites through Packet, I believe it's going to be 150 metro areas delivering at under 10 millisecond latency — that's extremely attractive for high-content, high-bandwidth streaming."
> — [00:50:19](https://www.youtube.com/watch?v=L3JjJldfU3o&t=3019s)

**Context:** On the Packet (Equinix) edge program; positioning Akash for streaming and low-latency edge workloads circa 2020.
