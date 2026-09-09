---
id: 61OOQfY5cqU
title: Solving the AI energy crisis | Greg Osuri on what it takes to power AI
channel: Changelog
date: 2025-08-02
duration_min: 116
url: https://www.youtube.com/watch?v=61OOQfY5cqU
type: podcast
greg_speaks: yes
oneliner: Changelog interview on the AI energy crisis: Greg's Congress testimony, distributed training progress, and GPUs-in-homes plans.
---

## Summary

Long-form Changelog interview recorded shortly after Greg testified before Congress on AI energy consumption. He walks through the crisis math: DOE projects ~508 TWh (~12% of US consumption) for AI by 2028 while the grid grew only ~1.2% in 20 years; Gartner predicts 40% of AI data centers will be power-constrained by 2026; training energy for state-of-the-art models doubles every two years, implying nuclear-reactor-scale training runs by 2030. He details why the US can't build supply fast enough (transmission upgrades blocked by property rights, 10-year nuclear interconnect queues, China controlling nuclear fuel supply chains, utility-scale solar/wind limits), criticizes California policy on water and EV mandates, and describes Stargate-scale facilities burning LNG — 4.5 GW emitting carbon equal to ~2/3 of Vermont's emissions. His answer: decentralized AI. He surveys distributed-training breakthroughs (DeepMind's DiLoCo, Prime Intellect, Nous Research, Pluralis's asynchronous swarm training, Gensyn) and predicts GPT-3-class distributed models by end of 2025 and state-of-the-art decentralized training by ~2027, with token incentives potentially out-competing centralized labs. He unveils Akash/Overclock's Star Cluster program: partnering with telecoms (access to millions of US homes) to place solar, batteries, and consumer GPUs (dual RTX 5090s) in homes in exchange for free bandwidth and energy, plus an energy-aware scheduler that moves AI workloads to wherever power is cheapest (wind at 1 cent/kWh). He also describes his sovereign off-grid Texas home with a local GPU cluster running DeepSeek — "nothing leaves the boundary of my home" — as a template for local AI, and closes with views on AI and jobs (Jevons paradox, humans using AI replacing those who don't) and career advice to go deep on distributed training and energy.

## Topics

ai energy, decentralized ai, distributed training, local ai, home gpus, star cluster, nuclear power, grid infrastructure, solar, gpu economics, congress testimony, data centers, tokens, jevons paradox, ai jobs

## Predictions & Notable Claims

### [energy] DOE: ~508 TWh, 12% of US energy for AI by 2028
> "The conservative estimates amount to about 500 plus, I think 508 [terawatt] hours by 2028. For context, that's about 12% of US energy consumption for AI... it's an incredible jump in terms of percentage consumption."
> — [00:02:11](https://www.youtube.com/watch?v=61OOQfY5cqU&t=131s)

**Context:** Citing the DOE/Lawrence Berkeley Lab report from his Congressional testimony; he notes AI consumed ~4.4% in the baseline year and calls DOE numbers conservative.

### [energy] Gartner: 40% of AI data centers out of power by 2026
> "The US grid grew about 1.2% in the last 20 years... Gartner predicts by 2026 — that's next year — about 40% of AI data centers will be out of power, because we will be forced to a position where we have to make a decision as to who gets the energy: is it the homes or is it going to be data centers?"
> — [00:02:56](https://www.youtube.com/watch?v=61OOQfY5cqU&t=176s)

**Context:** Framing the supply/demand mismatch between AI load growth and grid growth.

### [energy] Stargate's carbon = two-thirds of Vermont
> "4.5 gigawatt is about five nuclear facilities equivalent. There's no way in hell they're getting that from nuclear... That much amount of LNG will produce anywhere between 2.5 to 2.7 million tons of net new carbon into the environment, and that's equivalent to about 2/3 of all the CO2 emissions from Vermont."
> — [00:08:04](https://www.youtube.com/watch?v=61OOQfY5cqU&t=484s)

**Context:** Reacting to Sam Altman's announced 4.5 GW Abilene, Texas capacity with Oracle; he argues the gap will be filled by burning fossil fuels.

### [energy] GPT-6/7 will be trained by a nuclear-powered data center
> "The amount of energy we need to train state-of-the-art models... is doubling every two years. Right now the OpenAI data center that's operational in Texas draws about 300 megawatts of capacity. So doubling that means by 2030 we'll need a nuclear reactor at the minimum to train the state-of-the-art model. So ChatGPT 6 or 7 is going to be a nuclear-powered data center."
> — [00:11:00](https://www.youtube.com/watch?v=61OOQfY5cqU&t=660s)

**Context:** Based on his analysis of training-energy data back to 2013; a quantified forecast on training-run energy scaling.

### [energy] Rolling blackouts by next year
> "It's not slowing down, the demand for GPUs and the demand for energy. Now if we don't do something about it, we will start seeing rolling blackouts by next year. We will start seeing an energy crisis similar to the oil crisis in the 1970s, or even much larger scale."
> — [00:12:27](https://www.youtube.com/watch?v=61OOQfY5cqU&t=747s)

**Context:** Summing up his Congressional testimony after listing Meta, Google, xAI, OpenAI and Anthropic's competing buildouts (including Musk's stated 50M-GPU goal).

### [decentralized-ai] Distributed training becomes reality this year; state-of-the-art by ~2027
> "There is a lot of work that indicates distributed training will become a reality by end of the year, and by end of the year we will produce a model as good as GPT-3. By end of next year, or maybe going into 2027, there's a good chance that we'll be able to produce a state-of-the-art model fully trained distributed — or decentralized rather."
> — [00:21:50](https://www.youtube.com/watch?v=61OOQfY5cqU&t=1310s)

**Context:** After surveying DiLoCo (DeepMind), Prime Intellect's 32B model, Nous Research's DisTrO, Pluralis's asynchronous swarm training, and Gensyn's fault tolerance.

### [decentralized-ai] Token incentives could out-compete OpenAI
> "We all know Bitcoin is the largest supercomputer in the world. Why? Because there's an incentive structure to contribute compute to Bitcoin. Similarly, if there's an incentive structure to contribute your compute to train a model, there is a possibility we may actually out-compete OpenAIs of the world, because now you have the public."
> — [00:21:50](https://www.youtube.com/watch?v=61OOQfY5cqU&t=1310s)

**Context:** Decentralization as incentives layered on top of distributed training — a recurring thesis.

### [local-compute] Idle consumer GPUs plus unconcentrated energy are the untapped resource
> "There's lots of GPUs around... I have a 4090 here, a gaming machine. I have a Sony PlayStation that I barely use... there's so many GPUs out there that were discarded by OpenAIs because they're not the latest and the greatest... And the best part is if we can distribute GPUs, now we tap into energy when we're available. It's not like we don't have enough energy. We just don't have enough concentrated energy."
> — [00:22:35](https://www.youtube.com/watch?v=61OOQfY5cqU&t=1355s)

**Context:** Core local-compute argument: distributed GPUs unlock stranded/wasted renewable energy (e.g., California's curtailed daytime solar).

### [energy] The grid is so fragile he's going fully off-grid
> "If you study the grid as much as I've studied, you would want to go full sovereign. Like I'm building a house in Texas that's completely off-grid, because it's so fragile... everything is in a little balance; a little extra thing will destroy the grid."
> — [00:24:01](https://www.youtube.com/watch?v=61OOQfY5cqU&t=1441s)

**Context:** After explaining the second-by-second solar-to-fossil handoff at sunset; he also flags money to be made in energy arbitrage (Daylight Energy, Base Power).

### [energy] States with EV mandates will suffer most under AI load
> "One of the worst things they did was to ban all fossil vehicles from 2030 without thinking about how they're going to upgrade the grid. Along with the AI challenge, now the EV challenge is catching up. So states that have EV mandates are going to suffer the most with AI... I think it's just going to get worse and worse, the energy problem."
> — [00:32:33](https://www.youtube.com/watch?v=61OOQfY5cqU&t=1953s)

**Context:** Part of an extended critique of California energy and water policy (desalination, water diversion, LA fires).

### [decentralized-ai] Decentralized AI is the only way — no new energy for four years
> "In the meantime, I think decentralized AI is the only way. I looked at every possibility. Lay it out, and there is no magic solution to get more energy in America in the next four years."
> — [00:40:30](https://www.youtube.com/watch?v=61OOQfY5cqU&t=2430s)

**Context:** His conclusion after reviewing nuclear (regulation, fuel supply), offshore wind (not before 2030), and solar-at-scale constraints.

### [energy] Move the AI workload to the energy: energy-aware scheduling on Akash
> "Why burn energy but instead use that energy to train AI? Where it's windy in Kansas, move the AI workload there. When it's sunny in California, move the AI workload. The AI workload [has] to be elastic and has to be asynchronous... Akash, we are developing an energy-aware [scheduler] that will pick the lowest energy. So we'll start advertising the cost per energy now."
> — [00:46:49](https://www.youtube.com/watch?v=61OOQfY5cqU&t=2809s)

**Context:** Answering whether plugging GPUs into wasted renewable capacity solves the problem ("Absolutely"); he cites wind at 1 cent/kWh vs LNG at 10 cents and diesel at 32 cents.

### [other] Wants humanity to reach Kardashev Type One in his lifetime
> "Cardashev level one civilization is a civilization that figured out how to capture all sources of energy on the home planet... We're currently at 0.7 level... In my lifetime, I'd like to see us go towards a type one at least. That would be my dream and that's something I want to work towards."
> — [00:52:29](https://www.youtube.com/watch?v=61OOQfY5cqU&t=3149s)

**Context:** Framing AI's energy demand as a civilizational challenge; he notes the sun delivers ~100x more energy than the entire ~1.9 TW US grid.

### [local-compute] Star Cluster: distributed training across homes via telecom partners
> "We announced this program called Star Cluster program at Akash Accelerate... We're partnering with a few telecoms... we have access to energy across America, we have access to about I think two million homes through our partners that we can go into potentially. We're currently selecting ideal houses — solar and bandwidth are two big variables."
> — [00:56:11](https://www.youtube.com/watch?v=61OOQfY5cqU&t=3371s)

**Context:** Overclock Labs program to prove distributed AI training on home/edge infrastructure; later in the episode he says "22 million homes," so the figure is inconsistent in the captions.

### [local-compute] The home GPU pitch: free bandwidth, free energy, money on top
> "You get free bandwidth, you get free energy... We'll put solar in your home. We'll put a battery in your home. You don't have to pay a thing. We will charge our battery during the day, we'll settle back to the grid when we make the most money, we'll produce enough energy to power the GPU. So you get free energy, you get free bandwidth, maybe some money on top of it."
> — [01:00:31](https://www.youtube.com/watch?v=61OOQfY5cqU&t=3631s)

**Context:** Pitching the host as a hypothetical homeowner; two liquid-cooled RTX 5090s per home (~1,800W US residential circuit limit), targeting 30 dB noise or less.

### [local-compute] 22 million homes — "the way we live may change"
> "We have access to 22 million homes right now through our partners in the US... Not just sell them, but actually deploy. I think the way we live may change, don't you think?"
> — [01:01:56](https://www.youtube.com/watch?v=61OOQfY5cqU&t=3716s)

**Context:** Host jokes xAI's 50M GPUs would only need 25M homes at two GPUs each; Greg also says a consumer home product is ~a year out, his own home will be the first, and a few homes will run within 6 months via Star Cluster.

### [crypto-depin] Compute-for-token model guarantees future inference revenue
> "The business model for distributed training — almost all of the models I've looked at — the common thing they have is you contribute compute, you get some representation of that contribution in form of a token, and that token will guarantee you future revenues from the model, from inference."
> — [01:06:10](https://www.youtube.com/watch?v=61OOQfY5cqU&t=3970s)

**Context:** Explaining why decentralized training needs a token; he notes a 5090 on Akash earns ~92 cents/hour today and predicts intermediaries will take token risk before consumers do.

### [crypto-depin] Enormous money in decentralized AI in the next 1-2 years; Gensyn trains 10,000 models
> "I think there's enormous money to be made in the next one to two years in the decentralized space... there's zero hype on these protocols... [Gensyn] alone is right now training about 10,000 models concurrently. 10,000 models. Name a single AI lab that can do that."
> — [01:08:18](https://www.youtube.com/watch?v=61OOQfY5cqU&t=4098s)

**Context:** Captions render "Gensyn" as "Jensen"; he identifies it as a decentralized ML training network founded by Oxford researchers, a16z-funded.

### [decentralized-ai] "We're about to blow up very soon"
> "We're like under the radar, which I really like... because I think we're about to blow up very soon in this decentralized AI space."
> — [01:10:30](https://www.youtube.com/watch?v=61OOQfY5cqU&t=4230s)

**Context:** Contrasting decentralized AI's obscurity with headline mega-deals (OpenAI-Oracle, Stargate's $500B).

### [decentralized-ai] High conviction: 3-5 years for decentralized AI, or never
> "I have high conviction over the next 3 to 5 years decentralized AI has the best shot to make a mark in the world. We got the best shot right now. If we don't make progress in the next two years, I don't think decentralized AI will take off... People are going to use a solution because there's no other option — that's really the best way to sell a product."
> — [01:21:05](https://www.youtube.com/watch?v=61OOQfY5cqU&t=4865s)

**Context:** He argues decentralized AI wins only via the energy crisis, not privacy or ideology — "people are willing to give up privacy for comfort"; it must be a better product than ChatGPT.

### [other] AI cannot replace a human — but AI users will replace non-users
> "I guarantee you, the state at which AI is right now, it cannot replace a human being. Not even close... AI once trained cannot learn continuously... but a human being will be replaced by someone that knows how to use AI, for sure."
> — [01:36:43](https://www.youtube.com/watch?v=61OOQfY5cqU&t=5803s)

**Context:** Answering a UBI/job-loss question; he invokes Jevons paradox — "we're not going to use less developers, we're just going to use more developers to do more things" — and predicts "we're going to accelerate beyond our wildest imagination."

### [other] Company policy: adopt AI within six months or be replaced
> "People that know how to use AI are going to disrupt people that don't use AI, hands down. We have an active policy in the company... if you don't do it by X amount of time, you're going to be replaced, and we're very public about it... I think that's going to be standard across different companies."
> — [01:43:51](https://www.youtube.com/watch?v=61OOQfY5cqU&t=6231s)

**Context:** He describes four levels of AI fluency, gives employees six months, and says he uses AI glasses (Even Realities) as a teleprompter for keynotes.

### [local-ai] His home runs AI entirely locally — nothing leaves the network
> "All the information, everything is recorded and analyzed and fine-tuned locally, using a massive GPU cluster. Nothing leaves the boundary of my home, the network of my home. It's a fully locked-down network, because a lot of this stuff is private."
> — [01:48:09](https://www.youtube.com/watch?v=61OOQfY5cqU&t=6489s)

**Context:** His new Texas home: cameras, IR/ultrasound sensors, security drones, local fine-tuning on DeepSeek R1/Llama, rainwater capture, greenhouse — a personal prototype of sovereign local AI.

### [local-ai] "I'm so pro local AI of the future" — lease unused compute back to an AI grid
> "The chips to run real-time AI that can respond with low latency to agents, that is expensive... that's why I think I'm so pro local AI of the future, and leasing the unused compute back to the grid, like an AI grid with Akash. I'm very excited about this new future of shared economy, because everybody wants GPUs if you want AI locally, in your homes."
> — [01:51:41](https://www.youtube.com/watch?v=61OOQfY5cqU&t=6701s)

**Context:** Closing thesis tying local AI in homes to Akash as the marketplace for idle home compute — the clearest statement of his local-AI-plus-shared-grid vision in this episode.
