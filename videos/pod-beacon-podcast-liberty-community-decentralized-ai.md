---
id: pod-beacon-podcast-liberty-community-decentralized-ai
title: "Greg Osuri | Founder of Akash Network: Liberty, Community, and the Future of Decentralized AI"
channel: Beacon Podcast
date: 2024-06-18
duration_min: 79
url: https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844
type: podcast
greg_speaks: yes
oneliner: Founder-journey talk on Web3 as liberty, Akash's origin and GPU pivot, the AWS-parity roadmap, founder lessons, and open-source AI.
---

## Summary

Hosts Kenzie Wang and Satchi Kamiya interview Greg Osuri in a founder-journey format. Greg opens defining Web3 as "liberty, sovereignty, freedom" — restoring what the web originally promised — and recounts the technical origin of Akash: hitting cloud complexity at AngelHack hackathons, early Kubernetes work (invited to speak at the first KubeCon; top-trending Golang libraries on GitHub), and discovering that blockchains solve permissionless node bootstrapping and the "deadlock problem" of centralized control planes for edge computing. He describes his rural-India upbringing — learning C at 14-15 from books, Unix/Linux as his first computing exposure — as the root of his open-source conviction, and argues open-source clouds repeatedly failed because software alone can't marshal resources; a crypto marketplace makes open infrastructure sustainable (Akash has 500+ contributors versus Overclock Labs' ~20-50 staff; "Overclock Labs today can disappear, and Akash would run very well").

He claims the 2017 whitepaper had a full page on machine learning and foresaw GPU scarcity, explains why containerizing GPUs was infeasible until recently, and frames Akash's roadmap as "pre-parity" (reaching AWS feature parity) versus "post-parity" (1,000+ regions near cell towers, 10ms latency, cloud gaming, Metaverse rendering). He cites NVIDIA-adjacent traction (Brev routing deployments to Akash) and claims Akash is the only place to get on-demand H100s (~$1.59-2/hr). Founder lessons: don't succumb to investor pressure (they refused a ~$30M acquisition conversation in 2018 while nearly out of money after raising only $1.8M at $15M valuation), no regrets, health first; plus reflections on leaving San Francisco for Austin, Web2-vs-crypto-native founder differences (community-first, token/product duality), and DC policy work (meeting senators on the AI caucus who knew Akash as "an intersection between DePIN and AI").

The final ~34 minutes (recovered via re-transcription) cover the rest of his Web2-vs-Web3 founder differences — the policy work: he lobbied Congress that AI must be open and decentralized against "the Sam Altmans of the world... debating that AI should be closed," and notes Web3 founders can't run ads or take credit cards. He retells Akash's ecosystem bootstrapping: building on Cosmos with no ICF backing, the first chain to connect over IBC, a demo that stunned Jack Zampolin (deploying Kubernetes with crypto), pre-launch points programs and incentivized testnets that attracted validators, and hiring most Overclock developers out of the community. Founder qualities: resilience across multiple cycles ("if you're over-indexed for a single cycle, you're never going to be successful"), don't cheat (referencing GPU-claim scandals), and optimize for users over investors — citing Polygon and Solana as bottom-up successes. Asked where Web3 AI goes in three-to-five years, he delivers his open-source AI thesis: AI/ASI must be open and decentralized rather than controlled by elites, Bittensor's ~$1.5B emissions already rival OpenAI's ~$2B revenue, open-source AI has closed the gap with closed models from a year to three months, "close source, you can go fast. With open source, you can go far," AI is crypto's killer use case (turning press and government around post-FTX), and closed companies — including OpenAI, Google and Apple — will end up embracing open-source foundations.

Transcript quality note: Whisper artifacts remain in the first half (a long "a little bit of" loop at 00:02:32); from 00:45:00 the transcript is a cleaner re-transcription, though it mishears "Akash" as "Apache" in the Capitol Hill passage and garbles occasional phrases.

## Topics

decentralized cloud, open source, web3 liberty, gpu shortage, h100, aws parity, edge computing, founder journey, akash origin story, community building, crypto policy, depin, san francisco vs austin, open source ai, asi, bittensor, cosmos, ecosystem bootstrapping, founder advice

## Predictions & Notable Claims

### [cloud-decentralization] Web3 restores the liberty the web lost
> "What immediately comes to my mind when you say about Web3 is liberty. Right? The liberty that the Web originally promised but somehow got lost in the way and now we are bringing back the original values... Liberty, sovereignty, freedom."
> — [00:00:51](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Answer to the opening "why Web3?" question; he adds that permissionless composability makes systems "a lot less fragile and a lot more reliable."

### [cloud-decentralization] Everyone pays an invisible cloud tax — 50% of online-service revenue goes to the cloud
> "Cloud infrastructure, which arguably is one of the most important layers that holds humanity together... It is an invisible layer that we don't talk about much. I mean, all of us pay a cloud tax. 50% of all the monies we pay to an online service goes to a cloud."
> — [00:13:25](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His recurring "cloud tax" argument, here with an unusually high 50% figure (elsewhere he has cited lower numbers); leads into why an open-source cloud is needed.

### [cloud-decentralization] Open-source clouds failed until crypto could attach resources to software
> "We tried open source cloud several times before, and none of them really took off or succeeded or even survived because they didn't have the resources that you can actually acquire through open source. So for the first time, I had an opportunity to create not only open source software, but also give access to the resource in an open manner."
> — [00:15:07](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His thesis that a token marketplace is what makes open infrastructure sustainable — "software as a coordination layer and the hardware as the value" (00:14:08). Follow-on claim at 00:16:01: 500+ contributors, and Overclock Labs could disappear with Akash unaffected.

### [gpu-economics] The 2017 whitepaper predicted AI demand would outrun GPU supply
> "We actually talked about machine learning in the White Paper. There was a whole page on it. We talked about how machine learning is only getting expensive... it was very obvious to us, like, that GPUs being the core for AI will be, and the demand for AI as it's going up, GPUs will be in short supply."
> — [00:16:48](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Retrospective claim (spans into the 00:17:30 block) that the GPU-scarcity thesis dates to 2017; he attributes the bottleneck to TSMC/ASML supply chains, noting fabs take 18 months to 2 years per new process (00:22:56).

### [cloud-decentralization] Post-parity Akash: 1,000+ regions at cell towers with 10ms latency
> "A big portion of the roadmap current focus is to get to parity to Amazon web services. Post-parity is when, I think, Akash will start really seeing stuff that are not possible... How about, you know, 1,000 plus regions close to cell phone towers offering 10 millisecond latency...? What kind of possibilities do you unlock when you have such high-performance cloud? Well, you can do cloud gaming... that's just the tip of the iceberg."
> — [00:19:49](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His two-phase framing of Akash's future (quote spans into the 00:20:33 block): pre-parity serves what it can today (GPUs); post-parity unlocks hyper-local edge compute impossible for centralized clouds.

### [local-compute] Metaverse/Vision Pro rendering will need low-latency decentralized edge compute
> "Metaverse is going to be the future, and Metaverse needs really high-power compute... How do you source compute, high-density compute for a Metaverse that's rendering in your vision pro? That's only possible when you can reduce the latency. The way you can reduce the latency is through any central cloud."
> — [00:21:15](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Continuing the post-parity vision; final phrase is Whisper garble — from the argument, he means latency reduction requires a *decentralized* cloud near users, since headsets can't carry the compute themselves.

### [gpu-economics] Akash is the only place to get an H100 on demand
> "Akash is the only way you can get on-demand [H]100. There's nowhere right now that you can get an H100 on demand. You can get H100 if you go long contracts... and it's very, very expensive. But if you want to get H100 for $2 an hour, or $1.59, you can get [on] Akash an hour instantly."
> — [00:24:28](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** June 2024 market claim, paired with the claim that NVIDIA's "deploy" AI portal routes to Akash via Brev; bracketed fixes for Whisper mishearings ("at $100" → "an H100").

### [crypto-depin] Washington policymakers already know Akash as DePIN-meets-AI
> "I was on Capitol Hill earlier this week. I met with four senators, four congressmen on the AI caucus, and as well as the chair of the Financial Committee and the Commerce and Energy Committee... I was actually surprised that how many of them knew about [Akash]. One of the lead staffers of the Commerce Committee was like, yeah, [Akash] was like an intersection between [DePIN] and AI... We're talking about the people that write policy."
> — [00:45:42](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** On how much policy/politics work Web3 founders must do (third of his three Web2-vs-Web3 founder differences); quote spans into the 00:46:22 block, where Whisper mishears "Akash" as "Apache" and "DePIN" as "deep end" (bracketed fixes). At 00:47:02 he adds he lobbies for decentralization "because the Sam Alphans [Altmans] of the world are going and debating that AI should be closed."

### [open-source-ai] AI will be open source and decentralized — it's too important not to be
> "So AI will be open source and decentralized. It has to be open source and decentralized. It's too important for it to be closed source and be controlled by a few elites."
> — [01:04:56](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His direct answer to "Where do you think Web3 AI is going to become like in the next three, five years?" He warns that otherwise "we are under an incredible risk" of returning to a world where "few people have so much control over the others" (01:05:37).

### [decentralized-ai] Nobody who discovers ASI will share it — so ASI access must be a public utility
> "If someone discovered AGI or artificial general intelligence or ASI artificial super intelligence, there is no incentive for them to share that with the world. Because they can go on a stock market, public market and just rip it apart... So it's very, very important ASI is not closed. And very important access to ASI is open and is public utility rather than corporate assets."
> — [01:05:37](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** The core of his open-AI argument: a private ASI discoverer would have "superpower"-level advantages and no reason to share. At 01:09:58 he adds the sustainability half: "Pure open source doesn't have sustainability" — tokenized incentives are what make open ASI development viable.

### [decentralized-ai] Bittensor's emissions already rival OpenAI's revenue
> "[OpenAI] makes about $2 billion a year... in revenue. Now what the emissions are for BitTensor per year? $1.5 billion... BitTensor has similar levels of revenues or emissions as open AI revenue. So we are right there at that scale."
> — [01:06:22](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His evidence that decentralized AI is already economically competitive; he adds that Bittensor sustains top researchers (Nous Research, ex-Stability talent) and that FAANG AI talent is moving to incentivized open source (01:07:03-01:07:49). Whisper renders "OpenAI" as "opening AI."

### [open-source-ai] Open-source AI went from a year behind to three months behind closed AI
> "There was a publication... they talked about how Google basically said they have no moat with open source AI... When that happened, open source AI was maybe about a year behind close source AI. Now it's three months behind... Some models are way better than close source models. Why? Because when you open source, you get more talent looking at the model."
> — [01:08:33](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Quantified gap-closing claim (spans into the 01:09:14 block), citing the leaked 2023 Google "no moat" memo; he concludes open source overtaking closed AI is "inevitable."

### [open-source-ai] "With closed source you can go fast; with open source you can go far"
> "Open source always wins out in the end. Right? It may take longer, but it will always win out. That's why I have this saying that, hey, close source, you can go fast. With open source, you can go far."
> — [01:09:58](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** His recurring maxim, argued by analogy at 01:09:14: Unix was first but "Linux is used by 97% of the globe"; the iPhone was first but Android is more popular.

### [crypto-depin] AI is the killer use case for crypto
> "I think AI is a killer use case for crypto. AI is the only one that could turn the press around from FTX. AI is the only one that's turning the government around and embrace technology."
> — [01:13:34](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Prompted by discussing Semafor's first positive mainstream crypto story — about Akash helping university students get GPU access (01:12:48); he also notes "without AI, Akash wouldn't be as visible as it is right now" (01:12:05).

### [open-source-ai] Closed AI companies will embrace open source; the foundation layer must be open
> "The foundation of our technology has to be open source. What you build on top of that, you know, can be closed source, can be open. It's up to you."
> — [01:14:14](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Asked what happens to companies like OpenAI: "I think they embrace open source" (01:13:34). He extends the rule at 01:14:54 — "be it cloud, be it AI, be it money... these foundation stuff needs to be open" — and predicts Apple will leverage open-source AI "to give us better Siri" (01:15:40).

### [open-source-ai] How many Googles are we denying today with closed AI?
> "Google would not exist today if not for the first server they built in Stanford using Legos and Linux... So without open source, Google would not exist. So imagine how many Googles are we denying today with closed AI."
> — [01:17:07](https://podcasts.apple.com/us/podcast/greg-osuri-founder-of-akash-network-liberty/id1626302528?i=1000659451844)

**Context:** Closing argument of the open-AI discussion — closed foundations stifle the next generation of companies the way a closed web would have prevented Google.
