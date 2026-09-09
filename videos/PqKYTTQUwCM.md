---
id: PqKYTTQUwCM
title: Akash Mainnet 6 Livestream
channel: Akash Network
date: 2023-08-31
duration_min: 336
url: https://www.youtube.com/watch?v=PqKYTTQUwCM
type: livestream
greg_speaks: yes
oneliner: Live war-room stream of Akash's Mainnet 6 upgrade launching the GPU marketplace; Greg fields Q&A on GPUs, Nvidia, and AI demand.
---

## Summary

Multi-hour community livestream of the Mainnet 6 network upgrade — the release that turned on Akash's GPU marketplace, USDC stable payments, and take fees. The first ~90 minutes are stream setup and countdown logistics run by Overclock Labs staff (Tyler, Zach) with engineers Archer, Scott, and Andrey on standby. Greg joins for extended YouTube Q&A between countdown milestones. His answers contain the meat: distributed/geographically-distributed training is possible on Akash (citing a community proposal to train a model on ~24,000 A100 GPU hours); why block times won't change; how take fees tie AKT's value and chain security to network usage; why stable payments help long-running AI workloads. His market analysis is the most notable material: H100s/A100s are unobtainable on AWS because Nvidia treats hyperscalers as competitors and is deliberately fragmenting distribution across ~20 second-tier clouds, which positions Akash as the aggregator of a fragmented market and a natural eventual Nvidia partner; OpenAI (citing Sam Altman) can't get GPUs despite a $1B run rate; Akash is "the most capable GPU cloud" versus Render's single-model 25-cents-per-inference approach; AMD is at least two years from competing with Nvidia (though Overclock ordered tinygrad boxes to list AMD chips first). He also speculates about a future AI agent gaming Akash's permissionless market to acquire all its GPUs. The block-height upgrade itself lands around 3:14:00 and reaches consensus within minutes ("the smoothest upgrade I've ever witnessed"), followed by the first GPU appearing on-chain, a provider-migration bug fix, a Praetor provider-onboarding demo with the first live GPU provider (a Tesla T4), and notes that USDC take-rate proposals went on-chain the same day.

## Topics

gpu marketplace, mainnet upgrade, stable payments, tokenomics, gpu economics, nvidia, decentralized training, decentralized cloud, validators, ai demand, provider incentives

## Predictions & Notable Claims

### [decentralized-ai] Geo-distributed training works on Akash
> "Yes, it is possible to distribute the training across different GPUs. In fact there is a proposal on Akash discussions talking about how they plan to use about 24,000 A100 GPU hours to train across a distributed cluster... so yes, it is possible to train on geographically distributed clusters on Akash."
> — [01:20:48](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=4848s)

**Context:** Answering a chat question on multi-GPU training; Greg caveats it depends on batch sizes, parallelization strategy, gradient compression, and inter-cluster latency.

### [gpu-economics] Nvidia is deliberately fragmenting the GPU market
> "What Nvidia is choosing to do is distribute the chips, fragment the market, so that they have more control over the customer. So the chips are right now distributed to companies like CoreWeave, Lambdas... about 20 of these smaller cloud providers that have direct access to Nvidia."
> — [01:48:37](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=6517s)

**Context:** His supply-side thesis: you "cannot get H100s and A100s on Amazon" because hyperscalers built competing chips, so Nvidia treats them as competitors — and a marketplace that re-aggregates the fragmented supply (Akash) becomes the ideal one-stop shop.

### [gpu-economics] OpenAI can't buy GPUs — proof of demand
> "Sam Altman, the OpenAI CEO, said their biggest limitation to scale the company is access to GPUs... OpenAI is on track to make a billion dollars this year, so a billion-dollar company in revenue run rate, with I believe 30 billion dollars in cash, is unable to get GPUs. So you can clearly see there's a demand for GPUs here."
> — [01:58:04](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=7084s)

**Context:** Answering "what's the 2024 agenda"; he also quotes Elon Musk's line that GPUs are "harder to get than drugs" and says distribution plus friction removal, not marketing, is Akash's focus for the next 1-2 years.

### [gpu-economics] Akash is the most capable GPU cloud
> "Akash can do 15,000 models, it's not only one model. So for a comparison, Akash is the most capable GPU cloud out there — there's nothing that comes close."
> — [01:54:27](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=6867s)

**Context:** Contrasting with Render, which he says serves only Stable Diffusion at ~25 cents per inference job, versus Akash's ~$1/hour A100s billed like a normal cloud.

### [ai-agents] An AI could take over the GPU market
> "We have AI centralization risk, where if there is an AI that's trying to self-replicate, self-learn, it is going to try to get all the GPUs on the network, because Akash being permissionless, no one can stop you from using the GPUs on Akash."
> — [02:05:23](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=7523s)

**Context:** Asked about centralization threats; he sketches a scenario where an AI plays Akash's incentive market to attract more GPUs and then consumes them all, outbidding humans: "it is kind of scary a little bit — I don't have answers to those questions as of now, but yes there is that threat."

### [gpu-economics] AMD is at least two years behind Nvidia
> "I don't see any restrictions of AMD using Akash, but AMD really I think has at least two more years by the time they can make anything competitive to Nvidia at this point."
> — [02:08:14](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=7694s)

**Context:** Question on chip flexibility; a dated (Aug 2023) quantified forecast on the AI chip race.

### [gpu-economics] Best AMD chips will land on Akash before any cloud
> "Overclock Labs ordered the first set of boxes... so we'll be able to put the best AMD chips, when they come out, on Akash Network way faster than in any other cloud."
> — [02:08:56](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=7736s)

**Context:** Referencing George Hotz's tinygrad rewriting AMD's SDK for ML; he adds "anyone that makes GPUs should be on Akash — that's the whole point of an open marketplace."

### [cloud-decentralization] First-ever open market for GPUs
> "The biggest and the most exciting feature is the GPU marketplace. This is, I believe, the first instance of an open market for GPUs. There is no open source market right now available, centralized or decentralized, so this is the first time ever the world is experiencing what an open market for GPUs looks like, and it is coming amid the biggest supply crisis we have for GPUs."
> — [02:49:28](https://www.youtube.com/watch?v=PqKYTTQUwCM&t=10168s)

**Context:** Pre-upgrade feature overview; he frames the GPU supply crisis as "a symptom of inefficient distribution" where cloud providers failed, creating the opening for an open network.
