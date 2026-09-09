---
id: FQZZiUAmLLI
title: BASS 2024 10 Ben Fielding, Greg Osuri, Guy Wuollet, Steven Willinger
channel: Stanford Blockchain Club
date: 2024-08-12
duration_min: 24
url: https://www.youtube.com/watch?v=FQZZiUAmLLI
type: panel
greg_speaks: yes
oneliner: Stanford BASS 2024 DePIN/AI panel: Greg's 2-year decentralization window, his solar home data center, and 4090s earning $250 at home.
---

## Summary

Stanford Blockchain Accelerator (BASS 2024) panel on decentralizing AI via decentralized compute, with Greg Osuri (Akash), Ben Fielding (Gensyn), Guy Wuollet (a16z crypto), moderated by Steven Willinger. Greg defines Akash as "the world's first open supercloud" — a federated, permissionless interface over private/public/hybrid clouds with an open GPU marketplace. On architecture, he distinguishes Akash's hyper-granular workload scheduling (users choose providers, needed for low-latency, non-deterministic AI workloads) from deterministic smart-contract execution, noting a home machine can't serve production inference without an intelligently designed asynchronous model. His central strategic claim: there is a roughly two-year window to decentralize compute before the GPU supply chain is fixed and hyperscaler economies of scale overpower decentralized networks — right now "Akash is the only place to get on-demand H100s." He reveals he's building a 40kW solar-powered data center at his Texas house (with a "come and take it" flag) that will "pay for the house," and that his home RTX 4090s earn about $250 — predicting 4090s will become "the most important GPUs." On permissionlessness: censorship resistance is foundational, moderation belongs to providers not the protocol ("closed models go fast, open permissionless models go far"), citing a Department of Defense fork of Akash as organic open-source adoption with zero salespeople. On AGI kill-switches, he notes the Akash/Skynet coincidence, worries more about self-replicating machines that trade AKT to buy their own compute than about regulators, and floats proof-of-personhood; Fielding and Wuollet argue for neutral base layers and against a "big red button."

## Topics

decentralized compute, depin, gpu marketplace, supercloud, home data center, solar energy, consumer gpus, gpu economics, censorship resistance, open source, agi risk, ai agents, proof of personhood, department of defense

## Predictions & Notable Claims

### [cloud-decentralization] A ~2-year window to decentralize before hyperscalers regain the advantage
> "We're going to fix the supply chain problem at some point... but once the supply chain is fixed, you get the economy of scale that large hyperscalers have that may overpower the network. So I think we have maybe about 2 years to really decentralize, because we have one thing the hyperscalers don't: Akash is the only place to get on-demand H100s right now — and that's going to be not forever."
> — [00:10:24](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=624s)

**Context:** Answering whether decentralized networks can compete with AWS/Google once GPU scarcity ends; he frames crypto incentives and gamification as the tools to grab distributed supply during the window.

### [local-compute] Building a 40kW solar-powered data center in his Texas home that pays for the house
> "So I'm building a data center in my house in Texas, with a 'come and take it' flag in front of it, and that's going to be 40 kilowatt, solar powered — it's going to pay for the house. So I think we have an opportunity now: people are going to use my GPUs that are in my house because you have no other option, really."
> — [00:10:24](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=624s)

**Context:** Concrete personal example of the home-compute-earning-income thesis, delivered mid-argument about the decentralization window; also cites Google DeepMind's DiLoCo paper as promising work on distributed-training latency.

### [local-compute] 4090s will become the most important GPUs; his are earning $250 at home
> "4090, hands down... you can play games on it and you can train AI — at least infer — it works really well... 4090 has been popping up a lot; now people want more 4090s than H100s, A100s, because a lot of the papers are mentioning 4090s. I think 4090s is going to be one of those under-the-radar [GPUs] that's going to pop up and become the most important GPUs. I have a bunch of 4090s at home that are making about $250 — shilling the bags, though; I'm shilling my own bags."
> — [00:22:25](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=1345s)

**Context:** Closing "favorite GPU" question. Consumer gaming cards as income-earning AI infrastructure — a signature local-compute data point (captions render "4090" as "490").

### [open-source-ai] "Permission models can go fast, but open and permissionless models can go far" — even the DoD runs Akash
> "Moderation is done by the providers and not by the protocol, and the protocol should remain free of moderation, free of censorship, and permissionless — that's the only way to go far. Permission models and closed models can go fast in the near term, but open and permissionless models can go far, in places where traditional software cannot. One of the examples I give: Akash is being used by DoD, Department of Defense, because of its open source nature and permissionless nature — of course a fork of it, not the actual network... and we have zero salespeople."
> — [00:14:38](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=878s)

**Context:** On permissionless networks and export controls; he argues provider-level self-moderation handles abuse (nobody will host truly abhorrent content) while politically contested content stays servable.

### [ai-agents] More worried about self-replicating machines buying their own compute than about regulators
> "Akash in Sanskrit means the sky... Akash Net, if you translate that to Skynet — that was not by design, it was pure coincidence... I would be more concerned about self-replicating machines, more than government and policy shutting us down. If incentives are one of those things that you perfect to a point where machines themselves can create incentives to further attract more supply, what's going to stop an AI to trade Akash token and maximize its gains and use that to purchase compute?... I think proof of personhood could be a potential solution in the future."
> — [00:18:10](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=1090s)

**Context:** Asked where the AGI "red button" should go; he notes Akash is proof-of-stake "managed by human beings, at least as far as I know," and ultimately "I believe in humanity."

### [local-compute] Home machines need asynchronous designs to serve production AI
> "A machine sitting in a home may not be able to serve a production workload unless, you know, maybe intelligently designed with asynchronous model — but definitely for an inference type of scenario you need that low-latency access to the user, and that can only be delivered by a professionally managed data center."
> — [00:05:20](https://www.youtube.com/watch?v=FQZZiUAmLLI&t=320s)

**Context:** A rare nuance/caveat in his local-compute thesis: latency-sensitive inference still favors professional data centers; async architectures are the path for home hardware.
