---
id: vMx6G0ZOxeo
title: Greg Osuri, CEO of Akash Network, on why compute should be shared with a decentralized marketplace!
channel: LegendsNLeaders
date: 2025-04-11
duration_min: 29
url: https://www.youtube.com/watch?v=vMx6G0ZOxeo
type: interview
greg_speaks: yes
oneliner: Deep interview on AI's energy wall: why hyperscale can't scale, edge clusters and home sovereign AI as the answer, with hard numbers.
---

## Summary

Interview with Ben (LegendsNLeaders). Greg walks from his origin story (selling software at 13, AngelHack, Firebase, Kubernetes contributions, the Cornell "supercloud" concept) through Akash's role as "the secondary market for GPUs" during the 2022-23 H100 crunch (Nvidia made ~500k H100s in 2023; "at one point Akash was the only market to get GPUs"). The core of the episode is his energy thesis, laid out with unusually specific numbers: training capacity for state-of-the-art models is doubling every two years (Grok-3 ~35MW now, ~900MW by 2028); getting over 10MW of grid capacity in America is nearly impossible; the last free nuclear reactor (Three Mile Island) was locked up by Microsoft for 20 years; utility-scale batteries have 5-year lead times; xAI's 150MW Memphis data center gets only 7MW from the grid and burns gas for the rest ("we have to burn fossil to make AI"). His answer: distributed training (Prime Intellect, Nous Research — "they all use Akash" — proved 10B-parameter internet-scale training three months prior) plus thousands of sub-50kW edge clusters in homes and offices, powered by residential solar. He models AI demand growing 37%/year to consume a conservative 2% of global energy in 15 years (Gartner says 8%) — 100 extra nuclear reactors' worth. He predicts China, with ~1TW installed capacity, will "out-accelerate" the US on AI energy, and says "people will start talking about this in 2 years and you heard [it] here first." He closes describing the AI-everywhere house he's building in Texas with a private edge data center running DeepSeek R1 locally — sovereign home AI that pays for itself by leasing spare capacity on Akash.

## Topics

ai energy, edge data centers, local ai, distributed training, gpu shortage, decentralized cloud, nuclear power, solar, home compute, data sovereignty, china, ai agents, gpu economics

## Predictions & Notable Claims

### [decentralized-ai] In a couple of years it will be obvious: AI can only scale decentralized
> "Now we're getting into a bigger challenge for AI... it will be so obvious in a couple years that there's no way we can scale AI the way we're scaling AI. It's obvious in the circles now, but I think it'll be obvious to the world in a couple years that the only way to really build AI is through a decentralized system."
> — [00:05:34](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=334s)

**Context:** Transitioning from the GPU-crunch era to the energy era; quote spans into the [00:06:16] block.

### [energy] Training power doubles every two years — 900MW models by 2028
> "If you look at the amount of installed capacity needed to train state-of-the-art models... it's doubling every 2 years. So Grok-3 roughly took about 25, 35 megawatt capacity to train... right now the state of the art is 35 MW; in [2026] it will be 70 MW, and [in] '28 we're looking at 900 MW... It's nearly impossible to get over 10 MW capacity in America."
> — [00:07:39](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=459s)

**Context:** Quantified forecast of the training-energy wall; grounded in xAI's Memphis data center demanding up to 150MW. (Caption garbles "2026" as "2006".)

### [energy] No free nuclear reactors left — and no way to build new ones in time
> "In the US we have Gen 1 and Gen 2 combined, about 96 reactors, and they're utilized fully 93% of the time. The last one available was Three Mile Island — that got swept up by Microsoft for 20 years. So there are no nuclear reactors that are free anymore... you can't build new ones, because the last one we built took about 14 years and 34 billion dollars."
> — [00:09:07](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=547s)

**Context:** Part of a systematic walk through every energy option (SMRs not practical yet, interconnect queues bad for 14-15 years, utility solar storage uneconomical, wind location-bound, 100-year-old transmission grid); second half of the quote is in the [00:11:18] block.

### [energy] We are burning fossil fuels to make AI — xAI Memphis
> "The xAI data center in Memphis, owned by Elon Musk, is only able to get 7 MW from the grid, but it's 150 MW data center... they're literally burning [liquefied natural] gas to power the data centers, and that's causing environmental concerns in South Memphis... we're at a point that we have to burn fossil to make AI. And that's not sustainable... it's doubling every 2 years."
> — [00:14:52](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=892s)

**Context:** Citing lawsuits and asthma rates around the Memphis site; "doesn't matter what side of the political spectrum you fall, nobody wants dirty air." Quote spans into the [00:15:34] block.

### [decentralized-ai] Distributed training got solved three months ago — on Akash
> "Training has been predominantly collocated... but that was until about 3 months ago... Prime Intellect, Nous Research... created by former Google DeepMind, big AI lab employees — they've solved distributed training fairly well. Now we have a 10 billion parameter model that's fully distributed, training across the internet. There's a 15 billion parameter model by Nous starting training in a couple of weeks — and they all use Akash. That's how I know about these things."
> — [00:13:25](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=805s)

**Context:** The technical unlock he says makes deconcentration viable, referencing early-2025 distributed training runs.

### [local-compute] 10,000 sub-50kW residential edge clusters can train the best model
> "Instead of a few large hyperscale data centers, you want to be able to have small edge-optimized clusters that could be available in a residential or office setting that draws less than 50 kW capacity. That's something that can be easily facilitated in a residential environment through solar... 10,000 of these clusters can actually build the biggest and the best state-of-the-art model."
> — [00:16:16](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=976s)

**Context:** His concrete alternative to hyperscale: ~$2M Nvidia clusters distributed across homes/offices, coordinated by crypto incentives ("Akash is a decentralized trust control plane") [00:18:28]; "a residence is a phenomenal place for an edge data center with enough incentives" [00:19:12].

### [energy] China will out-accelerate the US on AI because it has the energy
> "China is the only country that solved their energy problem, because they overbuilt for the last decade and they actually have a terawatt installed capacity — that's four times more than the US... They can build a nuclear reactor in 3 years... unless you're in China, you cannot scale AI. So that's a big challenge for America, national security. China is going to out-accelerate us because they have the energy. So people will start talking about this in 2 years, and you heard here first."
> — [00:17:00](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=1020s)

**Context:** Explicit dated prediction (April 2025 + 2 years); quote spans into the [00:17:44] block.

### [energy] AI will consume 2% of global energy within 15 years — conservatively
> "It's reasonable to expect AI will grow at least as fast as mobile and internet... in the next 15 years we're going to see an increase from five to 150 queries a day [per user]... we are going to literally grow by 37% year-over-year... the next 15 years, the world will consume 2% — this is a conservative estimate — of global energy supply on AI... Gartner or any of the bigger firms say it's 8%... Even 2% is an additional 100 nuclear reactors we need."
> — [00:22:44](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=1364s)

**Context:** His modeled forecast from ~1B AI users at ~5 prompts/day, 15% adoption growth, 5% queries/year growth, ~5%/year efficiency gains; each GPT-4 call ~3 watt-hours ("a 60-watt bulb burning for an hour gives you 20 prompts") [00:20:38]. Quote spans into the [00:23:28] block.

### [local-compute] The future is edge data centers, not hyperscale
> "I don't envision Akash going into hyperscale business... We see a future in edge data centers — 100 kW data centers to 1 MW data centers... that's the sweet spot for decentralized technologies... there are models now that we put together where you can buy one of these edge data centers, place them on Akash, and get your ROI within like 3 years or 4 years."
> — [00:25:36](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=1536s)

**Context:** Answering where Akash fits vs. traditional data centers; ROI detail is in the [00:26:17] block, at ~80% utilization with "one of the boxes free."

### [local-ai] Sovereign AI at home: agents everywhere, data never leaves
> "I'm building a new house in Texas and I'm having one of the edge data centers in Texas... I want to have AI everywhere — agents everywhere listening to every conversation we have in the house, all sensors... the whole thing should be run by AI. That's the dream. But there's so much private information there, I would hate that information leave my home... So I can have local, sovereign AI that is fully private in my home and be able to make money leasing this out on Akash."
> — [00:27:00](https://www.youtube.com/watch?v=vMx6G0ZOxeo&t=1620s)

**Context:** His personal instantiation of the local-AI thesis: running DeepSeek R1 (he cites a ~$0.5M cluster requirement for the 375B-parameter model) at home, subsidized by leasing spare capacity; quote spans the [00:27:41] and [00:28:25] blocks.
