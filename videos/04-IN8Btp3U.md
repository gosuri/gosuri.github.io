---
id: 04-IN8Btp3U
title: "Keynote from Greg Osuri: \"Journey to Acceleration & Beyond\" - Akash Accelerate '24"
channel: Akash Network
date: 2024-06-11
duration_min: 28
url: https://www.youtube.com/watch?v=04-IN8Btp3U
type: keynote
greg_speaks: yes
oneliner: Akash Accelerate '24 opening keynote: nine-year origin story, ML-first whitepaper vindicated, $1.46 H100s, and the road to cloud parity.
---

## Summary

Greg's opening keynote at Akash Accelerate '24 (~1,000 registered). He traces the arc from founding Overclock Labs in 2015 (right after Kubernetes launched) to make Kubernetes "production ready and fault tolerant across the globe" — the first Akash code was written nine years earlier, and his Go libraries became so embedded that Nvidia's Kubernetes drivers, AWS CLI, IBM and HashiCorp all use Akash source code ("if I delete these repos the internet will break"; he was once ranked #4 Go contributor on GitHub). The centralized control plane couldn't scale, which led to blockchains as "the only data structure" for decentralized coordination (2016-17), the 2017/2018 whitepaper introducing the Akash supercloud, and the claim that the whitepaper named machine learning as the primary use case seven years before it materialized. Milestones: bootstrap via incentivized testnets (3M AKT) funded by validator-users rather than VCs; 2020 mainnet as the first general-purpose decentralized compute network ("Airbnb for data centers without the cleaning fee"); persistent storage; IP marketplace; GPUs in 2023; private containers; and going "radically open source" (public product meetings, ~20-30 contributors to ~500). Traction: 58M gigabyte-hours, ~180,000 total deployments, ~40% lifetime GPU utilization (60%+ for high-density), H100s at ~$1.46/hr vs. ~$12 on Amazon, and the Semafor "spice must flow" story of a Columbia researcher who found chips on Akash and started an acquired company within four weeks. Roadmap: Console UX for non-crypto users (credit card/Google login with optional custody), managed backends, reserved instances, and "cloud parity" so enterprises can move off Amazon.

## Topics

decentralized cloud, supercloud, kubernetes, gpu marketplace, gpu pricing, open source, akash history, machine learning, testnets, cloud parity, ai researchers

## Predictions & Notable Claims

### [cloud-decentralization] Centralized control planes can't scale — the internet's roots are the answer
> "You cannot scale to any level of high performance using a centralized control plane. The only way to really massively scale is go back to the roots, how the internet was founded — decentralized... instead of a single control plane we can have a decentralized control plane where there's no dependency on a single point of failure... blockchains happen to be the only data structure that would allow us to have a decentralized control mechanism, or decentralized coordination mechanism."
> — [00:05:07](https://www.youtube.com/watch?v=04-IN8Btp3U&t=307s)

**Context:** Explaining how a Kubernetes-tooling company "stumbled upon blockchains" in 2016-17 — his foundational architectural thesis.

### [gpu-economics] The 2018 whitepaper called the ML/GPU boom seven years early
> "In 2018, in our white paper, we talked about the primary use case being machine learning... we anticipated the need for GPUs because the data was incredible, it was very transparent — the cost of GPUs and cost of compute was only going to go up for machine learning, because the data sets are just getting larger and larger... we specified the primary use case for Akash as machine learning. It just took seven years to realize that."
> — [00:06:31](https://www.youtube.com/watch?v=04-IN8Btp3U&t=391s)

**Context:** Retrospective on his own prediction record; paired with the Cornell "supercloud" concept the paper adopted. Quote spans into the [00:07:12] block.

### [cloud-decentralization] First general-purpose decentralized compute network
> "We launched the mainnet in 2020 — first time ever a decentralized network could launch general purpose compute. There was nothing like it. The only thing that was close to Akash was Golem, and Golem was not general purpose... Akash was the first general purpose compute [where] you can actually demonstrate a Docker container running in a decentralized setting... they call it the Airbnb for data centers, without the cleaning fee."
> — [00:09:19](https://www.youtube.com/watch?v=04-IN8Btp3U&t=559s)

**Context:** Positioning claim about Akash's place in decentralized-compute history.

### [gpu-economics] H100s at $1.46/hour vs. $12 on Amazon — if you can get one at all
> "The price points are so attractive — you can get sub-$2 H100s on demand, which is unheard of... an H100 on Akash costs about $1.46; the same thing would cost about $12 on Amazon, if you can get it... In order to get H100s you need to get into these long contracts. No one's going to give a researcher [who] wants two H100s on demand."
> — [00:16:30](https://www.youtube.com/watch?v=04-IN8Btp3U&t=990s)

**Context:** On the GPU supply shortage locking out researchers and startups without millions for hyperscaler contracts; ties to the Semafor story ("the spice must flow") he cites as mainstream press's first positive crypto coverage [00:17:14]. Quote begins in the [00:15:45] block.

### [other] Radically open source: 500 contributors, meetings on-chain, AI training on the notes
> "Beginning of 2023... we went radically open source, in the sense including the process of setting the road map is open source, along with the code... we had like 20 or 30 contributors before... now we have about 500 contributors... [Overclock Labs] does not conduct any private product meetings anymore. It's all done in the public, the video is posted on a blockchain... I guess people are training [AI] on our meeting notes."
> — [00:12:11](https://www.youtube.com/watch?v=04-IN8Btp3U&t=731s)

**Context:** He frames himself as "just a core contributor," not a leader, with ~$30M in the community pool funding development — including the conference itself.

### [cloud-decentralization] Goal: cloud parity — move Walmart off Amazon
> "The goal really is to get to cloud parity, in the sense that in a few years from now you should be able to go to Walmart or some large company and be like, hey, you can move all your stuff from Amazon to Akash. We're not there yet — we need to build a lot of capabilities."
> — [00:25:46](https://www.youtube.com/watch?v=04-IN8Btp3U&t=1546s)

**Context:** Setting the roadmap horizon (reserved instances, managed backends, access control, secrets management); he stresses Akash never pivoted — the 2019 roadmap already listed private containers.

### [other] IPs are scarcer than gold
> "Akash is one of the largest IP address marketplaces — we don't really talk much about it... IPs are more scarce than gold, think about it. It'd be cool to have an IP coin someday that's backed by IP addresses. It's a really scarce namespace."
> — [00:10:02](https://www.youtube.com/watch?v=04-IN8Btp3U&t=602s)

**Context:** Aside while listing post-mainnet capabilities (persistent storage, IP-address-based discovery).
