---
id: pod-base-layer-209-greg-osuri
title: "Base Layer Episode 209: Greg Osuri, Founder of Akash Network on Decentralizing Compute"
channel: Base Layer
date: 2021-05-12
duration_min: 33
url: https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647
type: podcast
greg_speaks: yes
oneliner: Institutional-investor-facing interview on Akash's serverless decentralized cloud, the Supermini home GPU, and the coming GPU marketplace.
---

## Summary

David Nage (Base Layer / Blockworks) interviews Greg Osuri two months after Akash's Mainnet 2 launch. Greg covers his background (applied economist and computer scientist, IBM distributed-computing consulting, founding AngelHack — where he says he helped launch Firebase — then Overclock Labs in 2015 to commercialize Kubernetes). Deploying Kubernetes across data centers revealed the founding insight: roughly 85% of data-center compute sits unused because capacity is planned for peak load (Intuit at ~3% utilization outside tax season), while four cloud providers hold ~80% share of a $300B market.

He delivers a sustained critique of AWS economics: the "burgers and fries" model of cheap compute plus expensive proprietary managed services, lock-in, an Andreessen Horowitz claim that ~20% of ML companies' margins go to Amazon, and Amazon "stealing" open-source business models (the Elastic lawsuit). He explains Akash's serverless, permissionless experience (no signup, no email, PKI keys, "10 hours to 10 minutes"), how provider bidding works, workload migration if a provider kicks a tenant, and free-market content moderation ("freedom of speech doesn't give you the right to yell fire in a theater").

On interoperability he calls a smooth pay-with-any-token experience the "holy grail," noting Akash was among the first IBC-enabled chains and a core IBC contributor. The Supermini is pitched as a home GPU cluster for AI researchers exploiting subsidized home power and bandwidth, inspired by Helium. Roadmap: 2-3 quarters focused on adoption (top-100 networks evaluating Akash), then "the world's first GPU marketplace," explicitly timed to GPUs stranded by Ethereum's move to proof of stake. Closes with the "Uniswap-style deployment experience for the cloud" pitch.

## Topics

decentralized cloud, aws critique, idle capacity, serverless, gpu marketplace, ethereum merge, supermini, home compute, machine learning, ibc, interoperability, cosmos, open source business models

## Predictions & Notable Claims

### [gpu-economics] 85% of data-center compute sits unused
> "As we were deploying this Kubernetes in data centers across the walls, what we discovered was 85% or so of compute capacity that sits in these data centers remains unused. The reason being most data centers are planned for peak capacity to handle peak loads."
> — [00:04:59](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** The founding insight behind Akash; he pairs it with Intuit running at ~3% utilization outside tax season and four clouds holding ~80% of a $300B market ("across the walls" = Whisper for "across the world").

### [cloud-decentralization] ML companies pay ~20% of their margins to Amazon
> "Machine learning companies today — Andreessen Horowitz came out the report recently, which is very fascinating... they said about 20% of their margins are actually paid out to Amazon. And this is a very cutthroat business, right? It's almost like making these businesses unsustainable to a degree."
> — [00:11:46](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Part of his "Amazon tax" argument (a16z's "The New Business of AI" post); the setup quote about the "burgers and fries" lock-in model is in the 00:10:58 block.

### [local-compute] The Supermini: a home GPU cluster arbitraging home power and bandwidth
> "The Super Mini is... really a GPU cluster that sits in your home and really designed for like tinkerers or researchers, AI researchers... What Super Mini does is it brings the device to the home and essentially utilizing the subsidized bandwidth and the power that you get in the home, because most of the cost in a data center is the power... and kind of like resells that to a user at a significantly lower cost."
> — [00:26:04](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Asked about the Supermini product; he says it's "inspired by Helium" (he bought a Helium device in 2019 and calls it "extremely profitable") and the owner earns by selling compute on Akash.

### [local-ai] Machine learning is the ideal workload for home-deployed compute
> "Machine learning is one of those use cases where you do not have the data gravity issues like our latency requirements that web applications normally require. So it's an ideal system to be deployed in the home."
> — [00:26:54](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Early (2021) articulation of the thesis that AI/ML workloads, being latency-insensitive, will migrate to cheap home/edge hardware ("our latency requirements" = likely "or latency requirements").

### [gpu-economics] Akash will launch "the world's first GPU marketplace" fed by post-Merge Ethereum GPUs
> "We'll be launching the world's first GPU marketplace. So that's going to be very exciting because there's an enormous amount of GPUs that are getting essentially unlocked with Ethereum and a lot of these networks going to proof of stake... currently GPUs are extremely expensive on Amazon."
> — [00:28:26](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Roadmap question. A year-plus ahead of the Merge (Sept 2022) he predicts stranded mining GPUs will need a marketplace; Akash's GPU marketplace ultimately shipped in 2023.

### [gpu-economics] Post-Merge mining hardware becomes useless without a compute marketplace
> "When Ethereum moves to a proof of stake... all that hardware becomes useless. And it's really good hardware... there is no marketplace, there's no sort of like liquidity mechanism... So the solution is to install Akash and have users run TensorFlow applications or any of these machine learning applications and take advantage of this chip compute."
> — [00:29:14](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Continuation of the GPU marketplace answer (spans into the 00:29:56 block); "chip compute" = Whisper for "cheap compute." Miners would earn AKT for serving ML workloads.

### [cloud-decentralization] The interoperability "holy grail": pay for any decentralized service with any token
> "Ideally, in an ideal world, we want a smooth sort of like experience for a developer where you just come, say what you want to do, and the system should handle that. And that's the holy grail of where we are going with interoperability."
> — [00:23:43](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Describing composing Akash with NuCypher, Sia/Filecoin, Handshake, Sentinel, Orchid; the follow-on (00:24:27) says IBC will let developers pay with "an Akash token... a handshake token... a graph token."

### [cloud-decentralization] "If it runs on Amazon, it runs on Akash"
> "One of the things about Akash is it's a generic cloud platform. So any machine learning application can run essentially. It's not like a specialized computing language or anything like that. If it runs on Amazon, it runs on Akash."
> — [00:29:56](https://podcasts.apple.com/us/podcast/base-layer-episode-209-greg-osuri-founder-of-akash/id1445373535?i=1000521492647)

**Context:** Distinguishing Akash from special-purpose compute networks; a recurring compatibility claim, followed by the closing "Uniswap-style deployment experience for the cloud" line (00:31:24).
