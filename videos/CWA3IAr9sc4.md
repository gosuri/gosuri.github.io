---
id: CWA3IAr9sc4
title: The Truth About Decentralized AI and the Future of Compute
channel: TEACHMEDEFI
date: 2025-12-03
duration_min: 51
url: https://www.youtube.com/watch?v=CWA3IAr9sc4
type: podcast
greg_speaks: yes
oneliner: Late-2025 podcast: energy crisis drives compute home — solar-powered home nodes, 5090s, robot inference, and the Akash chain migration.
---

## Summary

A dense late-2025 interview on the TEACHMEDEFI podcast (host "Sol") — one of Greg's fullest statements of the local-compute/energy thesis. He frames DePIN as the answer to inefficient infrastructure networks and argues AI demand has broken both the cloud (AWS down four times in a month, GPU scarcity in 2023 birthing the neoclouds and putting Akash "on the map" — including a Cornell student who couldn't get Amazon GPUs, used Akash, and sold his company to Nvidia) and the grid (San Jose data centers shutting down; Gartner's 40%-of-data-centers-power-constrained-by-2026 forecast). Since the grid's copper can't be upgraded fast enough, "the only real practical way" is moving workloads to the energy — ultimately into homes: rooftop solar is dual-purpose (home, car, and a home data-center node) with zero marginal energy cost. Nuclear is too slow (14 years for the last US reactor; SMRs not market-ready; "fusion is 10 years away"); the sun is "the biggest nuclear reactor right above our roofs." He details home hardware math (six RTX 5090s ≈ 3,200W optimal; H100s uneconomical at home), predicts a state-of-the-art model trained over the internet within 12 months (7B-parameter models already trainable on home computers), envisions home node clusters doing inference for household robots, and ties home inference viability to Starlink reaching 1-2 Gbps. Middle section covers TEEs (20% overhead, "solves 99%" of verifiability/confidentiality), Akash's "shared security migration" off its Cosmos L1 (18 chains courting them; "the Cosmos model has failed — sovereignty before product-market fit"), 10x annual revenue growth, and the Burn-Mint-Equilibrium (BME) stable-payment tokenomics (Terra/Luna code, but with non-transferable ACT). He closes calling most decentralized AI "vaporware": marketplaces and distributed training are real; the "holy grail" is contributing your computer to a training run for tokens; decentralized inference is "complete vaporware."

## Topics

local compute, local ai, energy, home data centers, solar, gpu economics, decentralized ai, distributed training, robotics, starlink, trusted execution environments, cosmos, chain migration, tokenomics, bme, neoclouds, aws outages, nuclear

## Predictions & Notable Claims

### [energy] Data centers are running out of power — 40% by 2026
> "Just yesterday, I believe, multiple data centers in San Jose are running out of power. They're shut down. This was predicted by Gartner a few years ago — they said by 2026, 40% of data centers will go out of power, without energy... because we cannot build energy infrastructure as fast as we can build data centers."
> — [00:03:37](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=217s)

**Context:** Opening argument that AI demand has outrun society's ability to supply energy; "we're starting to see the cracks happen already."

### [energy] Move the workload to where the energy is
> "A grid, if you break it down, is just a bunch of copper wires... nobody wants new copper wires... digging the copper wires underground is extremely expensive and complicated. So it's very hard to move energy... So the only really — I mean, real practical — way to solve the problem is to move the workload to where the energy is."
> — [00:04:23](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=263s)

**Context:** The core energy-compute thesis; he adds this must be done "using distributed technologies and decentralized technologies."

### [cloud-decentralization] The 2017 whitepaper called it: cloud hyper-centralization is failing
> "AWS went down four times, took almost all the internet with it. It causes such a disruption every time a data center goes down that it's almost like decentralization sells for itself."
> — [00:05:50](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=350s)

**Context:** He precedes this by quoting his own 2017 paper: "the cloud is getting hyper inefficient, hyper centralized — we're going to start seeing problems with stability, with prices and accessibility. And look what happened now."

### [gpu-economics] Priced-out builders prove decentralization works — the Cornell-to-Nvidia story
> "There are kids in colleges [who] couldn't get access to GPUs on Amazon because Amazon would only select the customers based on who pays the highest... one student from Cornell couldn't get GPUs on Amazon, came to Akash, could get his GPUs, built a company that eventually sold to Nvidia... it's clear that decentralization is working for people that centralization has failed."
> — [00:07:18](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=438s)

**Context:** On the 2023 GPU shortage that created the neoclouds (CoreWeave et al.) and put Akash on the map.

### [decentralized-ai] There is no other future that's not decentralized
> "My take is there is no other future that's not decentralized, because the current model is not only failing, it cannot scale. There's really no solution to the energy problem — it takes a Manhattan project level effort... we have competition from a nation state level, which is China, that's building a gigawatt of solar capacity every 36 hours... The only way to solve that is to figure out how to distribute workloads."
> — [00:08:01](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=481s)

**Context:** Summing up his answer on whether decentralized AI is a real segment or recycled narrative.

### [energy] Forget waiting on nuclear — the sun is the reactor, and homes are the way
> "The last [US nuclear reactor] we built took about 14 years. Nuclear is great but we cannot build them fast enough... The SMRs, or small modular reactors, are still not market ready, and fusion is 10 years away. So we have the biggest nuclear reactor right above our roofs, right in the sky, called the sun. If we can leverage solar effectively we can solve a lot of problems — and the way we do that is homes."
> — [00:10:08](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=608s)

**Context:** Responding to nuclear-next-to-data-center announcements; he cites ~96 US reactors at ~93% utilization.

### [local-compute] Home solar plus a home data center = zero marginal energy cost
> "At home, it's dual purpose, because I'm using solar to power my home, charge my car — and if I can use the same solar to power a data center, maybe a small home node or home data center, we have a dual purpose or multi-purpose solar, which is phenomenal. And your marginal cost of energy is zero at that point. That's what I meant by solving this energy crisis by going into the home."
> — [00:10:52](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=652s)

**Context:** Solar doesn't work at utility scale (batteries, transport) but is "great when it's dual or multi-purpose" — the economic core of his home-compute prediction.

### [local-ai] A state-of-the-art model trained over the internet within 12 months
> "In terms of training — not there yet. We are able to train, using home computers, about 7 billion parameter models now — still very small — but the models are getting bigger and bigger and more efficient. In terms of training, I'm pretty sure in the next 12 months we'll see a state-of-the-art model trained over the internet using heterogeneous methods."
> — [00:11:36](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=696s)

**Context:** Quantified, dated forecast (Dec 2025 → end of 2026) on decentralized training across consumer hardware.

### [local-compute] RTX 5090s, not H100s, are the home-compute sweet spot
> "5090s, right? So you can have six 5090s, 3,200 watts of capacity. I mean, we did the math — H100s are not economical at home in terms of ROI."
> — [00:12:20](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=740s)

**Context:** Asked what hardware people could run at home on solar; he later repeats "5090s will be the most optimal in terms of home networks" ($25-30K per H100, 8-chip minimum, grid limits at home).

### [local-ai] Home node clusters will run inference for household robots
> "It's going to be a robotic world, and it's already starting to happen right now — I mean, we're seeing with NEO home robots and whatnot. In the world of robotics, the robots themselves are not very powerful because they need a lot of energy to power bigger chips... So there could be a world where you have a home node cluster powering, inferencing the robot for additional more intelligent tasks, where the robot will do most autonomous tasks."
> — [00:13:48](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=828s)

**Context:** His definition of "local inference" — the home as the compute hub for physical AI; he also floats ISP-local clusters (Comcast-to-Comcast low latency).

### [local-ai] Home inference becomes effective when Starlink hits 1-2 gigabit
> "For the most part, the challenge in home is going to be bandwidth, to serve reliably. Starlink does about 400 to 500 [Mbps] capacity right now. There could come a day where it could do over a gigabit to 2 gigabit capacity — that's, I think, when we will start seeing more effective inference at home."
> — [00:14:29](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=869s)

**Context:** Bandwidth, not energy, as the binding constraint for home inference; inference otherwise belongs in telco-style data centers in every city.

### [decentralized-ai] TEEs solve verifiability and confidentiality at ~20% overhead
> "A big favorite for verifiability today is trusted execution environments, where it is vendor-attested workloads, essentially attested at the chip level, and with memory encryption it's impossible to at least see inside a workload when it is encrypted at the memory level."
> — [00:17:25](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=1045s)

**Context:** He measures ~20% TEE overhead as "acceptable," pairs TEEs with MPC and Akash's audited attributes for data-residency needs, and says "TEE solves 99% of the problems" for verifiability and confidentiality.

### [crypto-depin] The Cosmos model failed: sovereignty before product-market fit
> "I think the Cosmos model in general has failed — this is coming from someone who's been in the space for a long time, Akash being one of the first Cosmos chains. The model where it failed is sovereignty before product market fit. It should be flipped... You don't go build your own data center when you're shipping an app."
> — [00:29:37](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=1777s)

**Context:** Explaining the "shared security migration" off Akash's own L1 — 18 chains reached out; an 18-month Cosmos SDK upgrade delivered "zero customer features"; validator costs were forecast to balloon.

### [other] Akash 10x'd revenue in a year
> "It's been thriving. I think we have 10x revenue in the last year and we are growing pretty aggressively... we're expanding to virtual machines and even bare metal... I think we'll be one of the first ones to do that for a decentralized network."
> — [00:34:38](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=2078s)

**Context:** Describing the GPU marketplace model — supply largely from AI companies monetizing underutilized GPUs, not cloud companies.

### [decentralized-ai] Most decentralized AI is junk; ignore closed source and off-chain projects
> "There have been 100 compute marketplaces that came after Akash. Most of them are just not decentralized in any manner — they're just SaaS apps. So ignore anything that's closed source, ignore [anything that's not on-chain]... just because something has a token doesn't mean it's decentralized. So all that is junk."
> — [00:45:43](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=2743s)

**Context:** Host quotes Greg's line that "99% of decentralized AI today is vaporware" and asks what's worth attention; he also dismisses most AI-agent tokens as pump-and-dumps.

### [decentralized-ai] The holy grail: contribute your computer to a training run, get tokens back
> "The real interesting stuff I think in AI is distributed training... There hasn't been a platform where you go and be like, 'Hey, I'm going to contribute my computer to this training run, I want some tokens back.' That's the holy grail we're working towards. No one has quite figured that out... nothing cohesive in terms of a framework that can bring all the primitives together... and make it as easy or as interesting as DeFi was during DeFi summer."
> — [00:47:08](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=2828s)

**Context:** He notes the legit distributed-training teams don't have tokens ("that's how you know it's legit") and hints Akash has "something in the works."

### [decentralized-ai] Decentralized inference is complete vaporware (today)
> "Training is not there yet — I wouldn't call training vaporware, that's really promising... decentralized inference is complete vaporware. There hasn't been any verifiable... inference that's actually real."
> — [00:49:21](https://www.youtube.com/watch?v=CWA3IAr9sc4&t=2961s)

**Context:** Closing state-of-the-industry rundown; only GPU marketplaces have "meaningful product market fit." Outside crypto he's excited by new chips, batteries, deep-fission/fusion nuclear, and data centers in space.
