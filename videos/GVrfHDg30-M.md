---
id: GVrfHDg30-M
title: Building the Super Cloud of GPUs with Akash Founder Greg Osuri | EP #102
channel: Frictionless Podcast by Logan Jastremski
date: 2023-09-28
duration_min: 78
url: https://www.youtube.com/watch?v=GVrfHDg30-M
type: podcast
greg_speaks: yes
oneliner: Long-form podcast on Akash's GPU supercloud launch, sovereign AI, and Greg's vision of a supercomputer in every home.
---

## Summary

Greg joins Logan Jastremski for a wide-ranging conversation recorded ~4 weeks after Akash's GPU marketplace launch. He recounts his path from enterprise cloud work (including designing patient-monitoring infrastructure at Kaiser Permanente) to early Kubernetes contributions, founding Overclock Labs in 2015, and publishing the Akash "supercloud" paper in 2017, whose motivation section anticipated machine-learning demand. He explains the GPU supply crunch — Nvidia's ~80% market share, CUDA's dominance, ~2-year lead times for HGX H100 clusters — and reports early network stats: Foundry listed ~50 A100s/H100s on day one, ~60% network utilization, with high-end GPUs 100% utilized. He describes Akash's incentive design philosophy (incentivize excess supply, not current supply; modeling supports 1,000–1,500 idle A100s), the crypto onboarding barrier for ML devs, and Akash ML as a custodial abstraction layer that costs a premium but onboards non-crypto users. The most notable stretch is his sovereign-AI thesis: he predicts every home will have a supercomputer, that home compute will feed a "compute grid" the way rooftop solar feeds the power grid, that both fine-tuning (e.g., LoRA) and inference can run entirely in the house, and that controlling the physical chip in your home is the only path to AI sovereignty — otherwise society drifts toward "feudalism" under surveillance capitalism. He also predicts globally distributed consumer-GPU clusters (4090s) become viable for ML within two years, cites a stat that 1% of global GDP will go to machine learning, and closes with Cosmos ecosystem history (first Cosmos SDK chain, first IBC connection) and interest in Bitcoin shared security via Babylon.

## Topics

decentralized cloud, gpu marketplace, supercloud, sovereign ai, local compute, gpu shortage, nvidia, cuda, akash ml, depin incentives, cosmos, ibc, kubernetes, fine-tuning, inference, surveillance capitalism, babylon bitcoin security

## Predictions & Notable Claims

### [local-compute] Every home will have a supercomputer
> "I envision a world where every home will have a supercomputer... no doubt about it. As AI gets more penetration, we're going to realize there are privacy implications for AI."
> — [00:43:16](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2596s)

**Context:** Asked where Akash's end state lands — regional GPU clusters vs. dispersed GPUs — Greg jumps past both to home supercomputers driven by AI privacy concerns.

### [local-compute] Home compute will feed a grid like rooftop solar
> "Why not that compute comes from your home? Just like today you're able to produce energy from your renewables at your home and contribute back to the grid, why don't we have a similar mode of compute contribution from your home to the compute grid? That is going to be a reality, and I have no doubt in my mind — if we bet that AI is going to take over our lives."
> — [00:45:24](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2724s)

**Context:** His signature energy analogy; preceded by noting "enormous amount of unused compute in your home" (gaming consoles, M2 Macs, phones charging at night).

### [local-ai] Sovereign AI is a key part of AI evolution
> "Really, I think sovereign AI is going to be key part of AI evolution. We haven't gotten there yet because [we're] slowly starting to realize, hey, ChatGPT knows a lot about you and you're giving it all your data."
> — [00:43:57](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2637s)

**Context:** Invokes Peter Thiel's 2018 "AI is communist, blockchains are capitalist" line; frames current era as "surveillance capitalism in full force."

### [local-compute] Sovereignty means having the chip in your house
> "I want to believe in a world that we are going to have sovereignty on the AIs. The only way to get sovereignty is control the chip; the only way to control the chip is to have it in your house... if you have your chips, you're protected by the laws of your land."
> — [00:46:50](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2810s)

**Context:** Warns the alternative is "a feudalistic society where you have the lords that have control over all aspects of our lives." References his "come and take it" GPU shirt.

### [local-ai] Both training and inference can happen in the house
> "I think both can be done in the house without leaving."
> — [00:47:34](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2854s)

**Context:** Answering whether training stays in datacenters while inference goes local; he cites LoRA fine-tuning of foundation models as already feasible on Akash with private weights.

### [local-ai] A private home AI to replace Siri
> "I want to replace my Siri with essentially an AI that's sitting in my house and my house only... I want to live in a world where I want guarantees that anything I say and I do lives in my house."
> — [00:49:02](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2942s)

**Context:** Says he refuses to own an Alexa/listening devices; predicts this gets "a lot more obvious with AI getting very very powerful and enabling tyrants."

### [local-ai] Private data fine-tuned by an AI you control
> "I want to live in a future where my data, all my private data, gets fine-tuned or ingested by an AI that I know is not going to expose or share my data with anyone that I don't want — especially financial, health data."
> — [00:53:22](https://www.youtube.com/watch?v=GVrfHDg30-M&t=3202s)

**Context:** Riffing on personal-finance/health use cases (FSA contributions, Apple Health data); calls sovereign AI "a key area of opportunity" for builders.

### [gpu-economics] 1% of global GDP will go to machine learning
> "I saw it [an] interesting stat somewhere that said one percent of global GDP will be used for machine learning very soon. I believe it."
> — [00:20:13](https://www.youtube.com/watch?v=GVrfHDg30-M&t=1213s)

**Context:** Discussion of Nvidia market share and AI demand; he adds "the demand is going to not going to stop anytime soon" and cites medical diagnostics as an early use case.

### [gpu-economics] Globally distributed consumer-GPU clusters viable within two years
> "Right now it's not the most optimal setup to leverage a globally distributed clusters of 4090s, but in two years I bet you is going to be the case — and that's really where we're heading."
> — [00:41:51](https://www.youtube.com/watch?v=GVrfHDg30-M&t=2511s)

**Context:** Explains cost-of-compute vs. cost-of-communication tradeoff; argues research has optimized for local clusters only because AI is pre-productionization, and maturing open models (Llama 2, Alpaca on 3090s) will unlock distributed topologies.

### [cloud-decentralization] Open systems go far, closed systems go fast
> "Decentralizing and open systems can go far, whereas centralizing closed systems can go fast... that's why I believe open and decentral systems will reach [places] where centralized systems just cannot."
> — [00:24:36](https://www.youtube.com/watch?v=GVrfHDg30-M&t=1476s)

**Context:** His recurring coordination-cost argument for why the demand-supply connection for idle GPUs should be a decentralized marketplace.

### [other] LLMs will make doctors more productive, not replace them
> "It's not going to replace doctors, but it's going to make them a lot more productive... in some cases even I saw ChatGPT doing way better than some of the doctors."
> — [00:20:57](https://www.youtube.com/watch?v=GVrfHDg30-M&t=1257s)

**Context:** Medical diagnostics as his favorite near-term LLM use case — pattern-matching lab results beats human recall.

### [crypto-depin] Akash incentives can sustain 1,000–1,500 idle A100s
> "For Akash, at the current linear modeling we did, [we] can support up to an excess of 1,000 or 1,500 A100s that's unused at any given time."
> — [00:33:10](https://www.youtube.com/watch?v=GVrfHDg30-M&t=1990s)

**Context:** Incentive design: subsidize excess supply (not current supply) to guarantee availability and push prices down; contrasts with Helium's 300k low-demand nodes and Filecoin's ~1% utilization.

### [crypto-depin] Seamless crypto UX will arrive like TCP/IP won networking
> "I believe in a world that, you know, the seamless crypto experience is a reality — and I'm not talking in just optimistic sense, but I'm actually talking based on historic evidence... TCP/IP became the most popular widely used networking protocol because, as decentralized as it is, the client experience got better and better over time."
> — [00:59:12](https://www.youtube.com/watch?v=GVrfHDg30-M&t=3552s)

**Context:** Asked whether decentralization must be compromised for UX; he argues both are achievable, pointing to Akash ML abstracting custody as a chosen "battle" to win users.
