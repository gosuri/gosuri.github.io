---
id: wVH1OYhNOeE
title: Mission: DeFi EP 92 - Greg Osuri - Akash is taking on the giants in hosted processing
channel: Mission: DeFi
date: 2023-03-30
duration_min: 54
url: https://www.youtube.com/watch?v=wVH1OYhNOeE
type: podcast
greg_speaks: yes
oneliner: Podcast deep-dive on Akash's marketplace model, "web3 is the supply, AI is the demand," and radical openness — weeks before GPU launch.
---

## Summary

A Mission: DeFi interview with host Brad Nickel, recorded in late March 2023 as AI hype surged and just before Akash's GPU market. Greg tells his origin story: learning to code in 1994 on a farm in India by writing programs on paper and validating them in a computer lab, AngelHack (largest hackathon, ~150K developers, launched Firebase), early Docker/Kubernetes contributions, and stumbling onto blockchain while designing an open marketplace for the ~unused data-center capacity he found deploying multi-cloud Kubernetes (peak-provisioning examples: Intuit at tax season, Walmart shopping seasons).

He explains the model plainly: an open spot market for cloud-grade compute — "Akash is like Airbnb, whereas Amazon is like Hilton" — with tenants setting prices in SDL files, providers bidding on-chain, and peer-to-peer deployments where "the blockchain gets out of the way." Claims and forecasts: ~50 providers growing to "at least a thousand provider footprint in the next 12 months"; Akash already more regionally distributed than Amazon; prices 85% below Amazon at the low end; ~30% of Cosmos running on Akash; A100s at ~$1/hr vs ~$4 on AWS; and AI as the coming dominant workload — crystallized in his thesis "web3 is the supply, AI is the demand" (citing ChatGPT's 100M users in 45 days). He describes deliberately withholding incentives until product-market fit (contrasting Helium and Filecoin), the AKT token's security-first design, Bitcoin-backed and mesh security explorations with a Stanford professor, and Akash's "radically open" turn: 229 active contributors with only ~20 from Overclock Labs, public product meetings, an on-chain public goods pool, and "Overclock can disappear today and Akash will still operate." He closes criticizing crypto's "incredible amount of intellectual dishonesty" and arguing radical openness is the network-effect unlock.

## Topics

decentralized cloud, gpu marketplace, ai compute, spot market, marketplace incentives, product market fit, open source governance, radical openness, cosmos, akt tokenomics, cloud economics

## Predictions & Notable Claims

### [cloud-decentralization] A thousand providers within 12 months; more distributed than Amazon
> "It is the largest market — we have about 50 providers right now... and that's growing very quickly, and with incentives we expect at least a thousand provider footprint in the next 12 months... it will be the most distributed network. I think from a regional distribution, Akash is a lot more distributed than Amazon's... the way we're trending, it's only a matter of time."
> — [00:13:31](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=811s)

**Context:** Right after the Airbnb-vs-Hilton analogy for Akash vs AWS; a quantified 12-month forecast made March 2023. He later notes low-end pricing "85% cheaper than Amazon" with high-end options 2-3x more (00:17:05).

### [crypto-depin] About 30% of Cosmos runs on Akash
> "Proportionally there's a lot more web3 companies, protocols, that use Akash — I think supposedly about 30% of Cosmos actually runs on Akash now... Osmosis, Mars Protocol... Stargaze... a lot of the Cosmos projects."
> — [00:19:12](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=1152s)

**Context:** Explaining that the API-only, non-custodial UX self-selects for web3-native users; front ends like Cloudmos serve as distribution.

### [gpu-economics] AI workloads will dominate Akash on cost: $1/hr A100s vs $4 on AWS
> "We're seeing quite a lot of AI applications even though... GPUs [are] like a few months away — people are just so excited about it... we anticipate AI is going to be a lot more prominent [a] deployment for Akash just from [the] cost factor... [LLMs] are really good at running on high-end GPUs like Nvidia A100s... on Amazon they cost about four dollars per hour; on Akash [they'll] actually cost more like a dollar an hour."
> — [00:20:39](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=1239s)

**Context:** Weeks before Akash's GPU testnet; he pushes back on bandwagon framing — "we've been talking about GPUs for three years... it seems overnight, it's always that way."

### [other] Solve 99 problems, leave one for smart people
> "My philosophy is: if you have 100 problems, solve 99 of them and give one for smart people to go solve, because once you give smart people opportunity, they will go build amazing things — and that's how Kubernetes worked... it's not [that] simplicity is the answer all the time... create great value and create opportunities for smart people to capture value and you're going to create an amazing system."
> — [00:23:26](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=1406s)

**Context:** Why Akash deliberately shipped no first-party web UI — leaving the front-end layer (Cloudmos, Spheron, Fleek, Praetor) as ecosystem opportunity; also used as the episode's cold open.

### [crypto-depin] Incentives only after product-market fit
> "One thing we did really well, which I'm very proud of... is not add incentives... our thesis was you've got to add incentives post product-market fit, not pre-product-market fit, or else you'll end up in trouble... you don't want incentives to go towards quote-unquote investors... investors should profit based on real usage, but not from mismanaged token treasuries."
> — [00:30:36](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=1836s)

**Context:** Contrasts Helium (oversupplied hotspots pre-demand) and Filecoin; with PMF ("users banging on your door asking for features") incentives can now target known gaps like A100 supply.

### [other] Don't say blockchain to AI users — Uber doesn't sell the internet
> "I don't like to use unnecessary buzzwords... just like when you use Uber you don't talk about the internet. When you approach an AI user, they don't care about blockchain or decentralization — they care about low cost, high quality resources... I try to use [the] minimum amount of words to describe the value prop in the quickest manner possible."
> — [00:35:36](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=2136s)

**Context:** Asked whether blockchain is part of the pitch to web2 companies; to web2 devs he says "Akash is the spot market for the globe." An early version of the crypto-invisible go-to-market he doubles down on in later years.

### [decentralized-ai] Web3 is the supply, AI is the demand
> "Web3 is incredible to attract supply because it has [an] amazing incentive model, amazing network effects, amazing distribution mechanism to attract supply — but terrible at delivering value... the web3 [is] the supply, the AI is the demand... Did you see the recent ChatGPT numbers? 1 million users within five days and 100 million users within 45 days — the growth of demand is incredible."
> — [00:38:26](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=2306s)

**Context:** Announcing Overclock's move to build "the best AI developer experience" on Akash's cost model (the console/AI product teased on Twitter the day before); AI users need APIs, not Docker containers and shell scripts.

### [open-source-ai] 90% of Akash contributors are outside the company
> "We went radically open... we open sourced the process itself... everything we do except for personnel issues is open... right now there are about 229 active contributors to Akash, [of] which 20 of them belong to Overclock Labs — 90% of contributors for Akash Network are outside the company that created it... Overclock can disappear today and Akash will still operate."
> — [00:42:43](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=2563s)

**Context:** Radical-openness model: public product meetings, an economics proposal shared externally before internally, and an on-chain public goods pool with no PM or fund coordinator.

### [other] Crypto's biggest problem: intellectual dishonesty from the top
> "There's an incredible amount of intellectual dishonesty — incredible, to a point... it starts at the top and it trickles down to the community... when people see comments like 'Bitcoin solves world hunger'... that dishonesty is giving us as an industry a bad name and hurting people... The way you unlock community is through radical openness, because the more barriers you remove for trust, the higher network effects you get."
> — [00:44:52](https://www.youtube.com/watch?v=wVH1OYhNOeE&t=2692s)

**Context:** Asked for negative and positive lessons for founders; the openness/network-effects line is at 00:48:28. He names Vitalik Buterin and Anatoly Yakovenko as intellectually honest counterexamples.
