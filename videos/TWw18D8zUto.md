---
id: TWw18D8zUto
title: Scaling Web3 and AI through DePIN with Greg Osuri!
channel: Secret Network
date: 2025-06-03
duration_min: 48
url: https://www.youtube.com/watch?v=TWw18D8zUto
type: podcast
greg_speaks: yes
oneliner: Greg on Secret Network's podcast: AI's energy wall, home data centers, sovereign local AI, and distributing AI across 10,000 sites.
---

## Summary

Episode of Secret Network's "Spilling the Tea" podcast with hosts Lisa Loud (Secret) and Zoe (Phala Network). Greg recounts his path from AngelHack (200k developers; Firebase launched there) through early Kubernetes/Docker contributions to founding Akash as an open "supercloud" inspired by Cornell research. The core of the episode is his energy thesis: hyperscaler AI training doubles its energy need roughly every two years (xAI Memphis at ~150 MW, mostly from burning gas), the US grid grew only ~10% in 20 years, and within six years only nuclear-scale (gigawatt) power can support frontier training runs — so the only real solution is to distribute compute. He forecasts AI consuming ~8% of global energy by 2040 and believes inference will dwarf training. He is "hyper bullish" on decentralized AI, citing DeMo/Prime Intellect, Nous Research's DisTrO, Gensyn, Bagel, and Pluralis — distributed training is at a "GPT-3 era" but progressing fast, limited only by compute, which crypto incentives can aggregate. The most archive-relevant material is his local-compute vision: solar-powered small modular data centers on 4,000 sq ft ranch-home roofs (35–50 kW), his own Texas home run entirely by a local DeepSeek cluster for privacy ("sovereign local AI"), and the "Akash home model" — 40 H200s (~$2M, DeFi-financed with zero upfront), 8 for personal AI and 32 leased on Akash, recouping cost in two to three years. He frames GPUs as "a wrapper on energy," warns about the health toll of coal/gas-powered AI (Memphis respiratory illness, looming lawsuit), and closes with a vision of 10,000 anonymous, trust-minimized data centers instead of 20 attackable hyperscalers: "AI should be with everyone, not with any one." He mentions he is writing a paper on the energy/compute feasibility analysis.

## Topics

decentralized ai, energy, local compute, home data centers, local ai, gpu economics, distributed training, depin, nuclear power, solar, privacy, verification, tee, akash

## Predictions & Notable Claims

### [energy] Within six years, only nuclear reactors can power a frontier training run
> "That's going to double in two years, 300 megawatt, double in two more years, you know, 300, 600 and 1.2. So you can see, in the next six years the only way you're going to power a training run is using a nuclear reactor, because a nuclear reactor is the only one that can produce over a gigawatt capacity."
> — [00:12:24](https://www.youtube.com/watch?v=TWw18D8zUto&t=744s)

**Context:** Extrapolating from GPT-3-to-Grok-3 data; he says training energy needs are "doubling every two years" (00:11:42) and xAI's Memphis site sits at ~150 MW today.

### [energy] AI will consume ~8% of global energy by 2040
> "We'll consume about 8% of global energy just to power — and that's a big chunk, 8% is a lot — and we're talking about the West, right? Most of the energy today is produced in the East, in China really. China has about 8 terawatt install capacity, US has about 2 terawatt install capacity."
> — [00:13:52](https://www.youtube.com/watch?v=TWw18D8zUto&t=832s)

**Context:** A "midpoint" of conservative inference-demand estimates "by year 2040" (stated at 00:13:07); he argues the West is especially exposed given grid and capacity constraints.

### [energy] The energy demand cannot be met — the only solution is distribution
> "The bottom line is we cannot meet the energy demand in next six years. The only way to solve the problem is to distribute it."
> — [00:15:18](https://www.youtube.com/watch?v=TWw18D8zUto&t=918s)

**Context:** After walking through why coal/gas, solar storage, generators (5-year lead times), hydro, wind transmission, and 14-year nuclear builds all fail to scale in time.

### [energy] xAI Memphis runs on burning gas, not the grid
> "The xAI data center in Memphis is only deriving about 7 megawatts from the grid. The rest of, like, the 143 megawatt comes from burning the gas. We're talking about Elon Musk burning gas."
> — [00:16:00](https://www.youtube.com/watch?v=TWw18D8zUto&t=960s)

**Context:** Evidence for the grid shortfall; later (00:41:19–00:42:01) he notes increased respiratory illness in South Memphis and a looming lawsuit against xAI.

### [decentralized-ai] Inference will be much larger than training
> "From an inference standpoint, which I believe is going to be much larger than training, as you start building more products, as AI gets more relevant into people's lives..."
> — [00:12:24](https://www.youtube.com/watch?v=TWw18D8zUto&t=744s)

**Context:** Framing why the energy problem compounds: training needs are visible now, but inference demand will dominate as AI products mature.

### [decentralized-ai] "Hyper bullish" on decentralized AI as the fix for the energy crisis
> "If you can figure out how to do distributed training, I think that's a big winner. So there's a case to be made here, and that's why I'm hyper bullish on decentralized AI, because the innovations that's been happening over the last, let's say, three to six months in distributed training is very promising."
> — [00:17:25](https://www.youtube.com/watch?v=TWw18D8zUto&t=1045s)

**Context:** He cites Google DeepMind's DeMo paper, Prime Intellect's OpenDiLoCo implementation and 32B-parameter run, Nous Research's DisTrO, and Gensyn's testnet.

### [decentralized-ai] Distributed training is in its GPT-3 era, limited only by compute
> "We're still in the GPT-3 era of decentralized distributed training, but it's progressing very fast, and only limiting factor is the amount of compute you can throw at it... how do we get the compute is through incentivization. So if you can create a viable incentive model, that's where crypto plays a big major role — if you contribute compute, you somehow have rights in the future earnings of that model."
> — [00:18:09](https://www.youtube.com/watch?v=TWw18D8zUto&t=1089s)

**Context:** Comparing Prime Intellect's 16B/32B distributed models to GPT-4.5-era centralized frontier models; crypto incentives are the mechanism to close the gap.

### [local-compute] Anyone with solar and roof space becomes a data center
> "One of the things that we're doing right now is enabling these small module data centers... as long as you have real estate space that can install solar, I think you become a data center. The only way we're going to be able to solve this problem is to harvest energy across the globe... if you have about 4,000 square feet of roof space, which most of Texas ranch homes do..."
> — [00:23:15](https://www.youtube.com/watch?v=TWw18D8zUto&t=1395s)

**Context:** He says a published Akash spec shows such a home can run a 35–50 kW data center with ~24 hours of battery storage (detailed in the following block at 00:24:00).

### [local-ai] His own home is managed by local DeepSeek — data never leaves
> "Anything that leaves my home, doesn't matter how secure the cloud or wherever I'm putting this data, I'm never comfortable. So if I want full AI — I'm talking about AI managing every aspect of my home... every aspect of the house is managed by an AI that's local DeepSeek."
> — [00:27:36](https://www.youtube.com/watch?v=TWw18D8zUto&t=1656s)

**Context:** He is building a Texas home with fall/danger-detecting sensors for aging family, all inferred locally for privacy.

### [local-compute] Sovereign local AI whose GPUs pay for themselves on Akash
> "The only way to achieve that is to have a GPU cluster running, and to run a DeepSeek you need a [DGX] cluster, about 8 GPUs. That way you have sovereign local AI... putting those boxes on Akash can earn income for you, because you're hosting, you're offering those boxes, and you can actually cover the cost in three years."
> — [00:28:19](https://www.youtube.com/watch?v=TWw18D8zUto&t=1699s)

**Context:** The home-AI privacy argument turned into an economic model: excess home GPU capacity leased on Akash covers hardware cost in "three to four years — we did the math and shared it online."

### [local-compute] The "Akash home model": 40 H200s, 8 local, 32 leased, funded by DeFi
> "The Akash home model is, you know, have about 40 GPUs, right, 40 H200s, which cost you about $2 million. Use eight H200s for your local AI... then rest 32, [lease] them out on Akash. You will recoup the investment in about two years. In fact, we can use DeFi rails to even fund the whole thing, so you don't need to put up front."
> — [00:29:46](https://www.youtube.com/watch?v=TWw18D8zUto&t=1786s)

**Context:** Quantified blueprint for home compute earning income; he adds that verification (TEEs/ZK) is only needed for the leased portion serving third-party training runs.

### [energy] GPUs are a wrapper on energy
> "If you're making about 10 cents a kilowatt hour, using Akash you're literally selling energy for... a dollar fifty, because you're adding GPUs on top of it. Think of GPUs as a wrapper on energy in terms of income."
> — [00:32:40](https://www.youtube.com/watch?v=TWw18D8zUto&t=1960s)

**Context:** Discussing DePIN energy plays (Daylight Energy, a16z-funded) and California's solar duck-curve; at 00:33:23 he adds "energy is layer one, compute is layer two... energy is the most fundamental unit."

### [cloud-decentralization] 20 hyperscalers is the mainframe problem all over again
> "Internet was created in the '60s to combat the centralization of data centers... because we had large mainframes and people were like, this is not good, because one mainframe gets attacked, we're done. The same thing is happening — we have 20 hyperscalers. It's not good, because they get attacked, you're done. So the best thing you can do is, number one, distribute AI as much as possible. AI should be with everyone, not with anyone."
> — [00:40:36](https://www.youtube.com/watch?v=TWw18D8zUto&t=2436s)

**Context:** Answering "best case scenario in five years"; concentration of AI in ~20 known US hyperscaler regions is a geopolitical/military vulnerability.

### [cloud-decentralization] Optimistic future: 10,000 anonymous data centers, not 20
> "Instead of having 20 data centers, how about 10,000 data centers, where it's impossible for adversary to compromise our AI infrastructure in the future... one data center goes down, who cares, we have 10,000 of them, even more."
> — [00:43:26](https://www.youtube.com/watch?v=TWw18D8zUto&t=2606s)

**Context:** He wants these to be unidentifiable, trust-minimized contributors (via TEEs) — "the more anonymous, the more distributed the infrastructure is, the more likely we're going to survive as humans."

### [other] This era will be remembered as the start of human acceleration
> "If you think AI is going to be the most transformative technology in our generation, which I believe it is — I believe about 100 years from now people will look back at this era and... think about, this is the era that defined human acceleration. I think we're going to have a exponential growth, and humans are not good at visualizing exponential growth."
> — [00:39:08](https://www.youtube.com/watch?v=TWw18D8zUto&t=2348s)

**Context:** Setup for his argument that a transformative future must not carry the concentration risks of the last platform shift.
