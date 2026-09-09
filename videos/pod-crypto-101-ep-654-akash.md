---
id: pod-crypto-101-ep-654-akash
title: Ep. 654 The Intersection of AI and Cryptocurrency with Akash Network
channel: CRYPTO 101
date: 2025-05-13
duration_min: 66
url: https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733
type: podcast
greg_speaks: yes
oneliner: Wide-ranging AI explainer: energy as AI's binding constraint, solar-powered distributed training, 2M small data centers by 2040, and geopolitics.
---

## Summary

Hosts Bryce and Brendan run an AI-focused conversation with Greg Osuri. Greg defines AI as "augmentation of intelligence" (as the internet was "augmentation of reach") and predicts a human-AI merged species within 100 years. The core of the episode is his energy thesis: training frontier models needs hyper-co-located chips (he cites Grok's Memphis data center drawing ~150 MW while pulling only ~7 MW from the grid, burning LNG — with respiratory-illness complaints in South Memphis and a looming lawsuit); US grid growth has been ~10% in 20 years; getting more than 10 MW of new grid power is "nearly impossible"; SMRs won't be production-ready by 2030; nuclear takes 14 years to build (Georgia) with Microsoft leasing Three Mile Island. His headline forecast: by 2030 or sooner we run out of energy to train new models. Inference compounds this: ~1 billion users at ~5 prompts/day heading toward ~150, with AI energy demand growing ~37%/yr and reaching ~8% of global energy by 2040.

His proposed solution: distributed training (Google's DiLoCo paper, a 32B-parameter fully distributed run, Nous Research's DisTrO) breaks the co-location requirement, letting ~100 kW solar-powered nodes (a 4,000 sq ft roof) participate. Combine DeFi-financed solar (Daylight Energy), token incentives sharing inference revenue, and small modular data centers ($2-3M, 35-50 kW, H200/HGX class): ~2 million of them by 2040 "can solve global energy problems." He predicts decentralized AI "takes off" mid-2025 (June/July, around ICML), notes Nous, Pluralis and Prime Intellect run research on Akash, and describes the "Akash at home" data-center spec and a 10,000-small-data-center goal.

Other threads: Bitcoin as "load consumer" for excess Texas/California solar (19 GW, minuscule versus AI); why AI escapes Bitcoin-style energy criticism (San Francisco talks its book); AI alignment/safety (he's in the optimist camp — humans are already cyborgs); skepticism that AI agents need crypto rails (they'll use your bank account; legislation will catch up); rare-earth geopolitics (China controls ~95%, tariffs-as-embargoes, WWII Japan analogy, Greenland/Ukraine/Kashmir); and grid fragility as a national-security argument for decentralizing data centers. He mentions living in Texas partly to build an off-grid home for his family.

## Topics

ai energy, grid constraints, distributed training, solar compute, small modular data centers, decentralized ai, gpu economics, bitcoin energy, ai alignment, ai agents, rare earth minerals, china geopolitics, depin, home compute

## Predictions & Notable Claims

### [other] Within 100 years, a new species merging humans and AI
> "AI is an evolutionary step for humanity. And I think, you know, in 100 years, I definitely can see a birth of a new species that's augmenting AI and humans."
> — [00:04:12](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** After defining AI as "augmentation of intelligence" versus the internet's "augmentation of reach" (00:02:34); he later reinforces it: "we're basically cyborgs" (00:41:46).

### [energy] By 2030 or sooner, we run out of energy to train new models
> "We cannot build nuclear reactors fast enough to demand. So by 2030, or even sooner, maybe, we will run out of energy to train new models. So AI will not evolve in terms of how big it can get in terms of models by 2030 or sooner."
> — [00:16:41](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** The episode's central forecast, after walking through the options: solar storage bottlenecked by China-controlled minerals, hydro capped ~100 MW, SMRs not production-ready by 2030, 96 US reactors already ~93% utilized, 14 years to build the last one.

### [energy] xAI's Memphis data center draws ~150 MW but gets only ~7 MW from the grid
> "The data center [that trained] Grok is based in Memphis, Tennessee. And that is currently drawing about 150 megawatts... and it's only drawing about seven megawatts from the grid. So the rest of the energy, they're actually burning... LNG to power, because in America, it's nearly impossible now to get anything over 10 megawatts."
> — [00:12:57](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** Illustrating training's energy demands (he says Grok 3 needed ~35 MW / ~35,000 NVIDIA chips, with training energy "doubling every two years," 00:11:22-00:12:12); he adds that South Memphis respiratory illness and a looming lawsuit mean "AI right now is killing people" (00:17:33).

### [energy] AI heading to ~150 prompts/day per user and ~8% of global energy by 2040
> "Today we are looking at... a billion users... doing about five queries a day, five prompts a day. And that's projected to grow... to about 150 prompts a day. And that's very conservative... The AI energy need alone is, I believe, growing at around 37% year over year."
> — [00:19:48](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** Inference-side demand math (quote spans into the 00:20:44 block); he cites himself as a "vibe coding" power user at ~1,000 queries/day. The 2040 figure comes later: "AI consumption will be, I believe, 8% of global energy by 2040" (00:36:53).

### [decentralized-ai] Distributed training just broke the co-location requirement
> "There's enormous amount of research... Google really released a paper called [DiLoCo] and a bunch of companies actually implemented this paper and actually proved we can train a 32 billion parameter model fully distributed... you can have a cluster in New York... Singapore... San Francisco and actually contribute to a training run... That was not possible a few years ago."
> — [00:26:13](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** He dates the breakthrough to "about six months ago" (00:25:21) and says if Nous Research's DisTrO approach proves out at 100B parameters "that will turn a lot of heads" (00:27:07).

### [energy] Solar rooftops can power the distributed-training nodes
> "If you can actually train using distributed clusters, that means we can have distributed clusters in places that can have about a hundred kilowatt capacity. Now, how can we get a hundred kilowatt capacity? Solar... a 4,000 square foot roof can get you a hundred kilowatt capacity."
> — [00:27:55](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** The bridge between his energy and decentralization theses: millions of small solar-fed nodes replacing coal-burning mega-centers, incentivized by a token share of inference revenue (00:28:40).

### [energy] ~2 million small solar data centers by 2040 could solve the global energy problem
> "If we can finance small modular data centers — we're talking about 35 kilowatt to 50 kilowatt data centers, cost you anywhere from $2 to $3 million... if you can power them using the solar panels, you can effectively create an alternative to these hyperscale data centers. And... by 2040, with about 2 million of these, we can solve global energy problems."
> — [00:31:16](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** Building on DeFi-financed solar (Daylight Energy, a16z-backed) arbitraging California's day/night imbalance; he concedes the price tag is "like 2% of global GDP."

### [decentralized-ai] Decentralized AI "takes off" mid-2025; every layer of AI will decentralize
> "This like new era of decentralized AI, which I believe will take off mid year, like June, July timeframe... there's going to be an explosion of decentralized AI, but the beginning of the training, and then we're going to go to inference... So every layer of AI will be decentralized."
> — [00:47:57](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** He grounds the timing in ICML paper volume and his involvement with Nous Research, Pluralis and Prime Intellect — "all of them actually use Akash right now to do their research" (00:48:41); bandwidth (Helium, Starlink) is the next DePIN layer.

### [ai-agents] AI agents won't need crypto — they'll use your bank account
> "I would never give an AI full access to my wallet... an agent, I believe, in my life... will act on my behalf. So if it needs a bank account, it's going to use my bank account... So the [thesis] around, oh, crypto is the only savior — it's not. Let's be real."
> — [00:43:23](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** Contrarian take for a crypto podcast on the "AI agents need crypto payment rails" narrative (spans into the 00:44:04 block); he argues legislation (DAO LLCs, UAE) will let agents use traditional finance, and crypto's real edge is incentives and coordinating "arcane industries" (DePIN).

### [local-compute] Decentralize the compute grid for national security: 1,000 small data centers, "Akash at home"
> "Our electric grid is so weak. Our utilities are so weak. And... the way we solve that is, [where] we have heavily centered around these, like, small areas, to decentralize them in a way that it cannot be attacked, right? Like, instead of having one large gigawatt data center, how about 1,000 megawatt data centers?"
> — [01:00:08](https://podcasts.apple.com/us/podcast/ep-654-the-intersection-of-ai-and/id1262351840?i=1000708305733)

**Context:** His "what keeps me up at night" answer: ~30 known hyperscale data centers as drone-swarm/hacking targets in a China conflict scenario. He follows with the goal of "10,000 of these small modular data centers connected to Akash... truly decentralized infrastructure that is attack-proof" (01:01:43) and points to the published "Akash at home" data-center spec (00:49:25).
