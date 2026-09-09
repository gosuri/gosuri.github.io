---
id: fVYeAVvuNLI
title: Akash Accelerate '24: Official Recap
channel: Akash Network
date: 2024-06-09
duration_min: 264
url: https://www.youtube.com/watch?v=fVYeAVvuNLI
type: livestream
greg_speaks: yes
oneliner: Full-day Akash Accelerate '24 recap: Greg's opening keynote, Eric Voorhees fireside, panels, builder demos, and a closing Greg AMA.
---

## Summary

Official recap of Akash Accelerate '24 (Austin, June 2024, ~1,000 registered). Greg Osuri opens with a keynote tracing Overclock Labs from its 2015 Kubernetes roots: the 2018 whitepaper that introduced the Akash "supercloud" and named machine learning as the primary use case, bootstrapping validators via testnets instead of VCs, the 2020 mainnet ("first general-purpose decentralized compute"), GPU support in 2023, going "radically open source" (from ~30 to ~500 contributors), and the Cloudmos/Praetor mergers. He cites 58M gigabyte-hours served, ~180k deployments, ~40% lifetime GPU utilization (60%+ for high-density), sub-$2 H100s, and a roadmap (Console, managed backends, reserved instances) aimed at "cloud parity." Greg then hosts a fireside with Eric Voorhees covering Voorhees' Bitcoin history and Venice AI, where both discuss whether decentralized training can save open-source AI. Other segments feature non-Greg speakers: an AI applications panel (Bittensor, Aden AI, Venice), a Passage/Manifold Labs talk on decentralized AI adoption, David Johnston's Morpheus keynote (smart agents, fair launches), a decentralized-compute CEO panel (Flux, Cato Digital, Akave), builder showcases from Passage, Brev (Nvidia's launchables sourcing Akash GPUs), and Flock, a UT Austin professor on federated learning for healthcare/6G, and a DePIN panel (Messari, Edge & Node, Foundry, Filecoin Foundation). Greg closes with an AMA covering why he moved to Texas, what "accelerate" means (500 → 5,000 contributors), supply-vs-demand incentive design, university activation as the next builder pipeline, clone projects and self-regulation, and war stories about building the first IBC-enabled Cosmos chain. Dated markers: Nvidia's AI account tweeting about Akash that day, llama 3 as open-source frontier, the Biden AI executive order discussed as looming regulation.

## Topics

decentralized cloud, gpu marketplace, supercloud, open-source ai, decentralized ai, federated learning, depin, gpu economics, ai agents, morpheus, venice ai, akash ecosystem, cosmos, regulation

## Predictions & Notable Claims

### [cloud-decentralization] Centralized control planes can't scale — the internet's decentralized roots are the answer
> "We quickly realized that you cannot scale to any level of high performance using a centralized control plane. The only way to really massively scale is go back to the roots, how internet was founded — a decentralized network."
> — [00:05:08](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=308s)

**Context:** Keynote origin story: why Overclock pivoted from centralized cluster orchestration to blockchains (the "only data structure" enabling decentralized coordination) in 2016–2017.

### [gpu-economics] 2018 whitepaper called the ML compute crunch
> "We anticipated the need for GPUs because the data was incredible... the cost of GPUs and cost of compute was only going to go up for machine learning because the data sets are just getting larger and larger. We specified the primary use case for Akash is machine learning — it just took seven years to realize that."
> — [00:07:15](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=435s)

**Context:** Greg recounting that the 2018 Akash whitepaper named machine learning as the primary use case, a retrospective claim of an early forecast.

### [crypto-depin] IP addresses are scarcer than gold — an "IP coin" someday
> "I think IPs are more scarce than gold, think about it. It'd be cool to have an IP coin someday that's backed by IP addresses... it's a really scarce namespace, but Akash is a great place to get IP addresses."
> — [00:10:49](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=649s)

**Context:** Aside during the keynote history of IP-lease support; he claims Akash is one of the largest IP address marketplaces.

### [gpu-economics] Sub-$2 on-demand H100s are unheard of
> "The price points are so attractive — you can get sub-$2 H100s on demand, which is unheard of... Akash still remains to be the only general-purpose platform that can offer price points at these levels."
> — [00:16:32](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=992s)

**Context:** Keynote GPU-marketplace pitch; he contrasts with hyperscalers requiring long contracts ("no one's going to give a researcher two H100s on demand"). Caption garbles the exact Amazon price comparison that follows.

### [cloud-decentralization] Cloud parity: moving Walmart off Amazon "in a few years"
> "The goal really is to get to cloud parity, in the sense, in a few years from now you should be able to go to Walmart or some large company and be like, hey, you can move all your stuff from Amazon to Akash. We're not there yet — we need to build a lot of capabilities."
> — [00:25:48](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=1548s)

**Context:** Roadmap section of the keynote (reserved instances, managed backends, access control, secrets management as the gaps to close).

### [decentralized-ai] Decentralized training research is promising
> "I think we've been seeing a lot of progress in the decentralized training space. I'm very, very positive, especially a lot of the research papers that are coming out, like DiLoCo and whatnot, that propose training on heterogeneous, heavily distributed compute — seems to be promising."
> — [01:08:14](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=4094s)

**Context:** Greg responding to Eric Voorhees' warning that if decentralized training isn't solved before Meta stops releasing open models, "we have a possibly very dystopian future."

### [other] Regulation is the biggest risk — otherwise Akash is unstoppable
> "Akash is too early right now to be shut down by regulation. I think if regulation is out of the way, I think Akash is unstoppable... if you're a builder you can build as long as you're allowed to build — we'll build our way out of any problems."
> — [01:12:37](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=4357s)

**Context:** Audience Q&A at the end of the Voorhees fireside asking the biggest risk Akash faces. **Speaker:** possibly not Greg — the question was posed to "either of you" and could be Voorhees answering.

### [other] From 500 to 5,000 open-source contributors by next Accelerate
> "We have enormous community — about 500 open source devs now contributing to Akash. We want to make that 5,000 by the time we have the next Accelerate."
> — [03:58:44](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=14324s)

**Context:** Closing AMA, explaining what "accelerate" means: "we've come from 0 to 1 so far and now we need to go from 1 to 100."

### [gpu-economics] "The spice must flow" — GPUs sell themselves without demand incentives
> "People come to Akash to get access to a resource that they can't get access to. I call it the spice — spice must flow. So fortunately we're in a position where we don't need to incentivize further to get adoption."
> — [04:00:29](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=14429s)

**Context:** AMA answer on why Akash doesn't run demand-side grant programs, comparing Akash's first-mover position to early Ethereum.

### [gpu-economics] Scaling supply is easier than scaling demand
> "We know scaling supply is much easier with incentives than scaling demand... it's like literally going to a store and seeing racks empty or racks full. I'd rather have a store that has racks full and less customers."
> — [04:06:58](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=14818s)

**Context:** AMA on marketplace incentive design; he notes utilization swung from 90%+ to ~25–30% as H100/A100 supply came online, and that only supply is ever incentivized.

### [crypto-depin] Self-regulate or the regulators will
> "This space is so riddled with scams that we owe to ourselves to get rid of those scams. If we don't self-regulate, the regulators will come and regulate us."
> — [04:17:10](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=15430s)

**Context:** AMA rant against closed-source clone projects launching at billion-dollar valuations with unverifiable numbers; he contrasts Akash's $15M launch valuation.

### [decentralized-ai] Nobody has solved distributed ML training
> "People make crazy claims... 'we solved distributed training' — no, no one solved distributed training. Google DeepMind wrote a paper on it; even they haven't solved distributed training... if someone comes and says they solved distributed training for machine learning, no they have not. That's just the reality."
> — [04:19:16](https://www.youtube.com/watch?v=fVYeAVvuNLI&t=15556s)

**Context:** AMA advice on spotting scam competitors; he names Gensyn as a legitimate innovator working on federated training over heterogeneous systems.
