---
id: CRA0yN28Dw8
title: How Akash Network is Democratizing Access to Cloud GPUs | Greg Osuri
channel: 0xResearch
date: 2023-10-26
duration_min: 60
url: https://www.youtube.com/watch?v=CRA0yN28Dw8
type: podcast
greg_speaks: yes
oneliner: Deep 0xResearch interview on Akash's GPU marketplace economics, the first decentralized foundation-model training run, and sovereign AI.
---

## Summary

Recorded October 13, 2023 (weeks after Akash's GPU mainnet launch), this Blockworks 0xResearch episode with host Sam is one of Greg's most detailed economic explainers. He frames cloud as "the fabric that keeps modern society together" on which everyone pays an invisible "cloud tax" (~50% of online subscription fees flow to cloud providers), and Akash's mission as reversing that opacity with an open, permissionless supercloud plus reverse-auction marketplace. He details unit economics: commodity resources go 70-80% cheaper than cloud, while scarce H100s/A100s price at a premium because the value is access, not discount; utilization is near 100% for high-density GPUs vs. Filecoin's <1% — crypto's usual oversupply problem inverted. He explains planned supply incentives (target 95% provider utilization, 50% oversupply, 12-18 month chip amortization), why ML is homogeneous/local-cluster-bound today ("optimizing iteration over productization"), GitHub Copilot's negative unit economics ($8 revenue vs. ~$20 cost per user), and ChatGPT's one-H100-per-concurrent-user inference math. Big news: a governance proposal to train a foundation model using ~24,000 A100-hours — the first foundation model trained on a decentralized cloud — with results expected in ~3 months. He predicts 80% of Akash demand will be inference, describes fine-tuning and "sovereign AI" privacy use cases, recounts leaving Ethereum after CryptoKitties crashed their 2017-18 prototype (advising builders today to use shared chains like Solana before app-chains, and floating Bitcoin as an archival layer), argues crypto is the only sustainability model for pure open source, and reveals DoD-affiliated auditors and token holders championing Akash. Closes urging the industry to self-regulate and distrust closed-source projects post-FTX.

## Topics

gpu marketplace, supercloud, unit economics, h100 shortage, utilization, incentive design, foundation model training, inference, fine-tuning, sovereign ai, cloud tax, app chains, solana, bitcoin, open source sustainability, dod, self-regulation

## Predictions & Notable Claims

### [gpu-economics] Crypto's inverted problem: high demand, not enough GPU supply
> "Last check it was north of 90% for one-week time frames, and about 50% utilization cumulative for all resources... Filecoin has less than 1% utilization of their storage network. So now we have an interesting problem where traditionally crypto has been good at oversupply and less demand — here we have the opposite problem: high demand and less supply."
> — [00:10:14](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=614s)

**Context:** Near-100% utilization of high-density GPUs weeks after GPU launch; motivates incentive design targeting 95% provider utilization and 50% network oversupply.

### [local-compute] Idle PlayStations, Xboxes, and desktops are the untapped compute layer
> "If you think about the global distribution of compute power, it's everywhere. The best compute power is hyper-underutilized: gaming consoles — like my PlayStation and Xbox, I use them once a year during Christmas and most of the time I'm not using them, and they have very powerful GPUs sitting idle — to my desktops, to desktops at professional work environments, to data centers."
> — [00:13:08](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=788s)

**Context:** Asked whether consumer devices can supply meaningful compute; he maps the pyramid from consoles up to data centers.

### [local-compute] Home gaming PCs will train models — "yes, one day, not yet"
> "Can your home gaming PC be used for training? Yes, one day — not yet... We're seeing gaming PCs actually getting a lot more used, and the rate at which they're getting used is on uptrend. So that indicates that yes, in a not very distant future these gaming PCs will be a lot more usable."
> — [00:18:07](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1087s)

**Context:** Notes Llama/Llama 2 already run "fairly decently on a 4090" and RTX Ada 6000 gaming cards are increasingly used for ML over A100s/H100s (cheaper, more on-chip memory); second half of quote at [00:19:32](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1172s). Cites an NYU-based team building heterogeneous training (mixing 4090s and H100s) on Akash ([00:18:07](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1087s)).

### [gpu-economics] ChatGPT needs one H100 per concurrent user
> "Every time you hit a prompt in ChatGPT, the time it takes to come back requires one H100 per each concurrent user for that time. Now do the math: 100 million users... that's talking about 100 million H100s. That's impossible — they don't exist."
> — [00:16:43](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1003s)

**Context:** Explaining why inference scales with users and why OpenAI throttles concurrency; frames the structural GPU shortage.

### [gpu-economics] AI products will be forced to distributed clusters by unit economics
> "Copilot is one of those products I use on almost a daily basis... I pay about $8 per month for GitHub and it costs about $20 per month per user to produce it. So on unit economics they're taking a loss... How do you optimize it? You have to go for something that's a lot less expensive, and the way you do that is by distributing your clusters and taking advantage of something like Akash."
> — [00:15:19](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=919s)

**Context:** His thesis that the industry is "optimizing iteration over productization" now, but as models productize, cost pressure drives workloads to decentralized/distributed compute. Quote spans into [00:16:02](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=962s).

### [decentralized-ai] First foundation model trained on a decentralized cloud; centralized-superiority "going to be debunked"
> "We saw a full foundation model proposal to run on Akash that consumes about 24,000 A100 [hours] — the first time ever a foundational model is being trained on a decentralized cloud. The notion today that foundational training is a lot better on centralized versus decentralized is going to be debunked."
> — [00:28:57](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1737s)

**Context:** Governance proposal had just passed; he says confidence is "fairly high" and "we should see a functioning model in three months if we play our cards right" ([00:33:59](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2039s)), with an in-depth trade-off report to follow.

### [gpu-economics] 80% of Akash demand will be inference
> "I think that's going to be a trend: I think 80% of our demand is going to be inference and 20% will be fine-tuning and training."
> — [00:30:22](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=1822s)

**Context:** Because inference scales continuously with users while training is a one-time job; also flags fine-tuning ("Copilot doesn't learn from my code") and privacy-driven "sovereign AI" use cases.

### [decentralized-ai] GPUs are the new oil; sovereign AI
> "GPUs are the new oil, and whoever has GPUs essentially controls their destiny in terms of their AI. I'm a big believer in sovereignty when it comes to AI. I'm a big believer in decentralized compute networks where I should own the A100s or H100s that train my AI, and I want to control the cost."
> — [00:36:08](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2168s)

**Context:** On why the decentralized training experiment matters — AI is "a new technology stack emerging post-web3" and this generation has a viable decentralized option from the start.

### [cloud-decentralization] Everyone pays an invisible cloud tax
> "All of us pay a cloud tax — you and me, we just don't realize it. For context, next [nearly] 50% of all the subscription fees you pay for online services goes to one of the cloud providers, you just don't know it."
> — [00:02:11](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=131s)

**Context:** His recurring opening argument: cloud is an oligopoly — "an extremely important layer that is extremely opaque" — and Akash's mission is to reverse that opacity.

### [open-source-ai] Crypto is the only sustainability model for pure open source
> "If you want to create [something] hyper-scalable, that has network effects, that's purely open source — decentralization is the only way. I can challenge anybody to challenge my assumption... Crypto adds a network aspect to open source that never existed before... Open source can go farther where closed source can go faster, but not as far as open source can."
> — [00:44:46](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2686s)

**Context:** Why build on a blockchain at all; cites Linux vs. Windows, AOL vs. the web, Akash's 250 contributors, and DoD experimenting with Akash because it can audit open source ([00:46:11](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2771s)).

### [crypto-depin] App-chain regret: use shared chains first, scale to sovereignty later
> "If I were to do it again I would always use a shared service, like the Solanas of the world or the layer twos of the world today... the pattern should be using a shared service, hitting the limits of scale, and then moving to an app chain."
> — [00:41:10](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2470s)

**Context:** CryptoKitties' 40,000 users crashed Akash's 2017-18 Ethereum prototype, forcing an app-chain; he says early networks can't justify the security budget. Also reveals an experiment using Bitcoin as an archival chain for old Akash transactions ([00:41:53](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2513s)) and predicts the modular design space "five years from now is going to be very different" ([00:42:37](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=2557s)).

### [other] Post-FTX: self-regulate and read out closed-source projects
> "Every failure can be attributed to closed and opaque models — think about it: FTX, Celsius, even Luna to a large degree... Don't trust Twitter as much as you should trust GitHub... Let's do a better job this time; let's make better mistakes tomorrow."
> — [00:59:17](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=3557s)

**Context:** Closing thought urging the industry to self-regulate before governments do, and to evaluate top-100 tokens by their source code rather than partnerships. Quote spans [00:59:17]-[00:59:58]; earlier part at [00:57:53](https://www.youtube.com/watch?v=CRA0yN28Dw8&t=3473s).
