---
id: k0HPDluOlsQ
title: Interview With Greg Osuri, Founder Of Akash Network
channel: Secret Network
date: 2025-04-02
duration_min: 40
url: https://www.youtube.com/watch?v=k0HPDluOlsQ
type: interview
greg_speaks: yes
oneliner: ETHDenver interview where Greg lays out AI's energy crisis and his solar-powered home "supercluster" solution in full detail.
---

## Summary

Interview at the ETHDenver 2025 "Pepan Hack Reply House" (Secret Network channel). Greg recaps Akash's origin — AngelHack's 200k developers hitting cloud bottlenecks, the "invisible cloud tax" (half of online spend to hyperscalers), the Cornell "supercloud" concept decentralized via Ethereum — and the GPU crunch validating the thesis (cloud providers "selecting the winners"; the Cornell/UT students whose Akash-based startup was acquired by NVIDIA; Altman announcing ChatGPT was out of GPUs). Business stats: ~90% of revenue from AI (Venice AI and Astria at mid-to-high five figures/month), 70% GPU utilization, huge YoY revenue growth, 72 data centers connected, plans for 10x growth. The core of the interview is his energy thesis: training energy doubles every two years (Grok 3 at ~35MW; ~70MW next), xAI's Memphis Colossus burns gas causing asthma-inducing pollution with a lawsuit looming; his mid-conservative inference model (1B users at ~5 calls/day growing to ~150/day by 2040 at 2.9Wh/call) yields ~37%/year AI energy growth and 2-8% of global energy; renewables, grid interconnect queues (5+ years), transmission NIMBYism, and nuclear (44GW over 20 years, 14 years to build Vogtle) can't keep up. His solution: distributed training breakthroughs (Google's DiLoCo, Prime Intellect's 10B-parameter internet-trained model, Nous Research's 15B next) enable sub-50kW "home edge" data centers — the ~$2M solar-plus-battery HGX H200 "Akash Supercluster" for a 4,000 sq ft Texas roof, paid back in four years at Akash's 80% guaranteed utilization, financed by DePIN-DeFi rails that split asset depreciation from tokenized earnings (plus an unnamed big bank). Timeline: experimental supercluster by end of 2025, deployments in year two, global scale year three. He closes on grid resilience (drone/EMP attacks on the 600 known US data centers vs a million peer-to-peer energy nodes), wanting humanity to reach Kardashev Type 1 in his lifetime, and how AI agents let him code while doing interviews.

## Topics

local compute, home data centers, ai energy, solar, supercluster, distributed training, gpu economics, depin financing, grid resilience, nuclear, inference growth, kardashev scale, ai agents, decentralized cloud

## Predictions & Notable Claims

### [energy] AI training energy doubles every two years
> "The rate at which the energy needs are evolving for training state-of-the-art models is about doubling every two years right now... Grok 3 is reportedly, or believed to be, trained on a 35 megawatt capacity, and this year we'll need about 70 megawatt capacity to train the next generation, I believe Grok 4."
> — [00:10:07](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=607s)

**Context:** Opening of his energy-crisis argument; frames state-of-the-art training as an exponential energy problem.

### [energy] Memphis Colossus runs on gas, and it's poisoning the city
> "The Colossus xAI data center in Memphis has about 150 megawatt capacity, has about 200,000 H100 chips... it's drawing about 7 megawatts from the grid... They're burning gas... The problem is so bad in Memphis they have a huge pollution problem — it's causing elevated issues of asthma, respiratory diseases... there's a lawsuit that's looming."
> — [00:10:51](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=651s)

**Context:** Evidence that concentrated AI training already exceeds grid capacity; he calls this "the current state of AI training."

### [energy] Inference math: ~150 calls/person/day by 2040, energy growing 37%/year
> "Each prompt, each call takes about 2.9 watt hours... 2025 we're going to need about half a gigawatt capacity to serve AI... and every year it's growing at 37% — the energy needs for AI, that includes inference and training."
> — [00:14:28](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=868s)

**Context:** His "mid-conservative" published model: ~1B AI users today doing ~5 inference calls/day, growing (on mobile/internet-like adoption curves) to ~150 calls/day by 2040.

### [energy] Existing sources won't cut it; AI takes 2-8% of global energy
> "In a couple years you're going to need nuclear reactors, and there's no way in hell you can power through coal, through onshore windmills, offshore windmills, hydro, geothermal... they're not going to cut it. By a pessimistic estimate we need about 8% of global energy spent on AI; optimistic estimates, about 2%. It doesn't matter what estimate you take, it's still an enormous energy draw from the grid."
> — [00:15:09](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=909s)

**Context:** Why power stocks outperform; he later details 5-year interconnect queues, transmission NIMBYism, 8-10 year EU renewable approvals, and only ~44GW of US nuclear coming in 20 years.

### [decentralized-ai] Distributed training over the internet just became real
> "Google wrote a paper called DiLoCo last year, and a company called Prime Intellect implemented [it]... they were able to train a 10 billion parameter model over the internet... another company called Nous Research is going to do a 15 billion parameter model soon... there are five other companies doing decentralized training."
> — [00:20:58](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1258s)

**Context:** The "two months ago" breakthrough that unlocks his whole home-data-center thesis by removing the need for concentrated GPU clusters.

### [local-compute] Sub-50kW "home edge" data centers running frontier models
> "If we can spread training, that means we can have a lot of sub-50 kilowatt data centers — I call them home edge servers... HGX H200 clusters, very very fast. Each cluster can host a whole DeepSeek [R1], which is a big model by the way... the unit costs about $2 million. It's not a home PC quite, but it has enough power to be able to be part of a larger training run."
> — [00:21:40](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1300s)

**Context:** The hardware spec for the Akash "Supercluster"; distributed solar-powered homes replacing hyperscale data centers.

### [local-compute] A 4,000 sq ft roof can power a home AI data center
> "To power something like a 35 kilowatt data center we need about 4,000 square foot of roof space... a ranch house in Texas has 4,000 square foot roof space that can produce up to 80 kilowatts... say 100 kilowatts, that throughout the day gives you about 600 kilowatt[-hours] of energy... a battery pack to support 100 kilowatts for 12 hours... is going to cost $150,000."
> — [00:23:11](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1391s)

**Context:** The solar/battery math behind converting large homes into revenue-generating AI data centers, topped up ~200kWh from the grid.

### [local-compute] $2M home supercluster pays back in four years via Akash
> "How do you make money? I give them Akash. Akash has 80% utilization rate right now — we can guarantee 80%... you can make your money back in four years, a $2 million investment back in four years, selling [compute] back to Akash... and you get to keep one of the servers for free. And we have financing available... 10,000 of these data centers can be the next Colossus."
> — [00:23:54](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1434s)

**Context:** The "Akash Supercluster" spec published on the website; the closing "10,000 data centers" line (captioned "build the next solar model") is his scale vision. Payback framing: home GPUs earning income.

### [crypto-depin] DePIN plus DeFi creates new financial assets to fund home compute
> "We're doing DeFi rails... we can decouple the ownership of the asset from the earnings... sell the ownership of the asset to someone that wants depreciation... crypto has got incredible primitives — the DePIN primitive and DeFi primitive, when you bring them together you can create amazing financial assets... you can purchase an asset that will give you like 15% return."
> — [00:26:40](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1600s)

**Context:** Financing structure for superclusters (CDO-like tranching of GPU earnings and depreciation); also partnering with an unnamed big bank that likes GPUs as liquid collateral.

### [local-compute] Supercluster timeline: experimental by end of 2025, scale in year three
> "We'll have an experimental supercluster maybe by end of the year... we have kind of one in a data center; now I'm putting [one] in a home... in a year we'll be out with the supercluster, and we'll probably deploy a bunch as experiments in the next year. I think year three will be at scale, at a global scale level."
> — [00:32:59](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1979s)

**Context:** Direct answer to "when will this happen?"; he expects the energy problem to become "extremely pervasive" within a year or two, and says the hard part is a consumer-grade residential enclosure.

### [energy] Centralized data centers are a national-security liability
> "There are 600 of them in the US — we know exactly where they are... if there's an adversary in the future, all they're going to do is send EMP bombs to these data centers in drones... you've got to decentralize the grid to have a more resilient world. Instead of having a single place that can be attacked, I would have 10,000 if not a million of these places that generate energy, sharing energy in a peer-to-peer manner."
> — [00:34:22](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=2062s)

**Context:** Cites Russia targeting Ukrainian utilities first; resilience argument for distributed home compute/energy. Closing sentence is at [00:35:08]-[00:35:49].

### [energy] Kardashev Type 1 in his lifetime
> "In my lifetime I want to see humanity reach Kardashev scale type one civilization... a civilization that harnesses all the energy of its home planet. There's a lot of energy that comes to our planet — we just don't harness that because we don't have incentives to do [it], and the economics don't play out really well... but with this it does."
> — [00:29:29](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=1769s)

**Context:** Ties incentivized rooftop solar-compute to civilizational energy harvesting; recurring Kardashev theme (also raised in his 2024 Delphi panel).

### [ai-agents] AI agents let the CEO code during interviews
> "I code a lot now, more than I used to code before, because of AI agents. I'll be sitting and talking with you — I'm just coding... the amount of things I ask from my team is so less, because I just do it myself... the acceleration for humanity is so high... we cannot impede on this progress, and the energy is the problem we're going to solve."
> — [00:38:41](https://www.youtube.com/watch?v=k0HPDluOlsQ&t=2321s)

**Context:** Closing argument that AI progress (medical, space, productivity) is worth solving the energy bottleneck for.
