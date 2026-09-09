---
id: YjZFaKHqVqQ
title: Akash Weekly - August 17th 2022
channel: Akash Network
date: 2022-08-18
duration_min: 58
url: https://www.youtube.com/watch?v=YjZFaKHqVqQ
type: livestream
greg_speaks: yes
oneliner: Akash Weekly Spaces: Chia BladeBit launch partnership, Terraform provider, GitHub censorship rant, and Greg's GPU roadmap AMA.
---

## Summary

Akash Weekly Twitter Spaces hosted by Nadia Bajuelo, with Greg Osuri delivering ecosystem updates and an AMA, plus guests John Michael Hands (VP of Storage, Chia Network), Andrew Mello (head of mining, Overclock Labs), and Joao "Luna" (developer of the Akash Terraform provider). Greg's update segment covers Chia selecting Akash as exclusive launch partner for BladeBit 2.0 plotting, Spheron's three-click multi-chain deploy integration, Cloudmos's new explorer and price-comparison tool, and a community member running a VPN on Akash for $0.54/month — which Greg uses to argue for "sovereign" cloud services. He spends significant time on censorship: Pocket Network's Tornado Cash front-end ban, GitHub banning Tornado Cash developers' accounts (he argues GitHub is now unusable for web3 service discovery and that decentralized alternatives like Radicle and Gitopia are the future), and the arrest of Tornado Cash developer Alexey Pertsev, which he compares to "arresting Edison because his bulb was used by the Nazis." In the AMA, he lays out Akash's core thesis — cloud is an oligopoly, over 85% of world compute sits unused, and Akash improves global computation efficiency — and a four-phase go-to-market: Cosmos ecosystem, broader web3/proof-of-work, GPU/HPC at 20-30% below cloud prices, then low-latency distributed compute across thousands of nodes (about 50 providers at the time). He candidly discusses retention problems (no payment notifications, no credit cards), the coming web UI with custodial credit-card payments, and why GPU support is blocked on upstream Kubernetes — calling GPUs plus managed services the next paradigm shift for Akash.

## Topics

decentralized cloud, chia, crypto mining, terraform, censorship resistance, github, tornado cash, gpu roadmap, managed services, cosmos, sovereignty, unused compute

## Predictions & Notable Claims

### [cloud-decentralization] Sovereign cloud services are the future
> "Now we're seeing this VPN service on Akash, 54 cents a month, that you have full control over, that you have full sovereignty over... that gives me all kinds of new ideas, right, like what kind of services are possible in the future on Akash where you can guarantee sovereignty for the users."
> — [00:09:15](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=555s)

**Context:** Reacting to a community member running a personal VPN on Akash cheaper than any commercial VPN; he frames sovereignty and privacy as the defining values of the new cloud.

### [other] GitHub is dead for web3; decentralized code hosting is the future
> "GitHub is no longer a service discovery tool for web3 and we need to do better... moving away from GitHub to a more decentralized system like a Radicle or a Gitopia... I think is the future."
> — [00:12:50](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=770s)

**Context:** After GitHub banned Tornado Cash developers' accounts; he predicts Gitopia-style CI/CD runners on Akash replacing GitHub Actions. (Quote spans into the [00:13:34] block.)

### [other] Edison analogy on developer arrest
> "Arresting a developer because his code was used for money laundering — his arrest is like arresting Edison because his bulb was used by the Nazis. It's the same analogy, and that's not okay."
> — [00:17:09](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=1029s)

**Context:** On the Dutch arrest of Tornado Cash developer Alexey Pertsev; Greg's tweet on this was quoted in several podcasts, and he calls it a fight all software developers must take seriously.

### [cloud-decentralization] Akash is the first viable open cloud vs. the oligopoly
> "Akash Network is the first viable open cloud. So cloud computing today, the infrastructure side of things, is essentially controlled by few closed companies — Amazon, Microsoft, Alibaba and Google being the majority stakeholders... Akash is the first viable attempt to decentralizing this oligopolized closed system called cloud computing."
> — [00:42:02](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=2522s)

**Context:** AMA answer on what problem Akash solves; he adds it is a non-custodial system "97% cheaper than the cloud" (in the [00:42:46] block).

### [gpu-economics] Over 85% of the world's compute sits unused
> "The problem we're solving is improving efficiency of global computation, because our thesis is this enormous amount of unused compute out there... conservatively, over 85 percent of world's compute is not used."
> — [00:43:28](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=2608s)

**Context:** Core recurring Akash thesis; he ties it to Martin Casado's data-center repatriation tweet (a company saving 40x by leaving cloud) and to energy efficiency — reuse existing hardware rather than expand power capacity.

### [gpu-economics] GPU/HPC on Akash will undercut cloud by 20-30%
> "Phase three is to provide features that are unheard of in web2, like high performance computing with GPUs. We'll be able to attract machine learning and really high performance computing 20 to 30 [percent] cheaper than the cloud, and that's a big deal."
> — [00:47:46](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=2866s)

**Context:** Explaining the phased go-to-market roadmap; GPU support was still pre-launch (blocked on upstream Kubernetes GPU support), a year before the GPU marketplace shipped in 2023.

### [cloud-decentralization] Phase four: thousands of nodes for low-latency distributed compute
> "Phase four is to really offer low latency, heavily distributed computation, and in order for that to happen we need to have thousands of nodes spread across the world. Right now we have about 50 providers spread across the world. By the time we reach phase four we will essentially offer a product that's unlike any other product in web2 or web3."
> — [00:48:29](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=2909s)

**Context:** The endgame of the roadmap — a globally distributed edge-like compute network, quantified against the ~50 providers live in August 2022.

### [gpu-economics] GPUs + managed services will be a paradigm shift for Akash
> "GPUs are going to be a paradigm shift along with managed services — that's going to take [Akash] to the next level."
> — [00:54:54](https://www.youtube.com/watch?v=YjZFaKHqVqQ&t=3294s)

**Context:** AMA answer on the GPU/managed-services timeline; he declined to give dates because progress depended on upstream Kubernetes GPU work, but a prototype GPU workload had already run internally.
