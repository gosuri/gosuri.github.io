---
id: CCHnfFIavA8
title: RNDR, Supercloud, 1.5T AI Market Cap – Interview with Greg Osuri about Akash
channel: Design DAO
date: 2023-06-15
duration_min: 60
url: https://www.youtube.com/watch?v=CCHnfFIavA8
type: interview
greg_speaks: yes
oneliner: Deep-dive interview on the supercloud thesis, GPU scarcity as "oil for AI," Akash vs Render, and the $1.5T AI spend opportunity.
---

## Summary

Long-form interview with Design DAO's Julius, opening with Greg's film-photography hobby (including a declined Rolling Stone shoot of Belarus's Lukashenko) before covering the Akash story. Greg traces roots to AngelHack (150,000 developers across 50 cities), his hyperscale infrastructure work, early Kubernetes contributions, and Cornell's 2015 "supercloud" paper — Akash's 2018 white paper added the missing piece, a decentralized marketplace, years before Forbes and mainstream media picked up the term. He explains why open source needs tokens for sustainability (the "third model" beyond Red Hat services and open-core), why Ethereum couldn't scale for them in 2017-18 (CryptoKitties crashed their prototype), and Akash's Tendermint/Cosmos SDK history, including the first-ever IBC transaction.

On the June 2023 GPU crunch: AI demand has exploded while Nvidia (the "Apple of chips") is bottlenecked by TSMC and its suppliers; supply chain problems won't be solved for two to five years; H100s take ~two years to obtain; clouds require million-dollar commitments and pick who gets chips, so Akash is positioned as the world's first open secondary market for A100s/H100s. He notes advanced models start on high-end GPUs but mature onto consumer cards (3090s/4090s), invites anyone with idle GPUs to become providers, and previews Akash AI — a verticalized client to run a model "in two lines" of Python. He contrasts Akash's open, permissionless design with Render (closed-source, hosted on centralized clouds, "can run one model" vs ~15,000 Hugging Face models on Akash — criticism that got him blocked from their Telegram). On price: no NFT/DeFi narrative plus Cosmos liquidity constraints held AKT back, but AI spend of $1.5T over five years versus Akash's ~$200M market cap leaves "room for growth."

## Topics

supercloud, decentralized cloud, gpu shortage, gpu marketplace, nvidia, ai compute, akash vs render, open source, cosmos, tokenomics, machine learning, akash ai, cloud lock-in

## Predictions & Notable Claims

### [cloud-decentralization] We called the supercloud five years early
> "Akash Network is a first decentralized supercloud. The idea of a supercloud... we introduced in our white paper in 2018. Now... if you Google supercloud you'll see Forbes, you'll see all these mainstream media writing about supercloud — really they discovered like last year, but we were pushing the idea for supercloud for five years."
> — [00:11:30](https://www.youtube.com/watch?v=CCHnfFIavA8&t=690s)

**Context:** Builds on Cornell's 2015 supercloud paper; he repeats at [00:57:00] "we know supercloud is going to be a thing, that's why we wrote the paper five years ago... we're still very early."

### [cloud-decentralization] The invisible cloud tax
> "Andreessen Horowitz wrote a very thorough, thoughtful research piece where they estimated, backed by data — they pointed out over 50 percent of the margins that these online services get goes to a cloud [provider]. If you use Dropbox or Asana or Netflix, 50% of... the profits are going to go into the cloud providers. So there's an invisible tax we pay, like it or not."
> — [00:14:23](https://www.youtube.com/watch?v=CCHnfFIavA8&t=863s)

**Context:** Explaining cloud lock-in (BigQuery, Aurora) as the motivation for a homogeneous supercloud interface over heterogeneous providers.

### [cloud-decentralization] 8.4 million data centers, mostly idle
> "Most data centers — there are about 8.4 million data centers in the world — most data centers are not used to the point they're supposed to be used: 85 percent of time they're unused. If we can leverage the supercloud and connect these data centers and actually get a price point that's significantly lower than what you would otherwise pay to these hyperscalers... that's what we're seeing with Akash."
> — [00:16:28](https://www.youtube.com/watch?v=CCHnfFIavA8&t=988s)

**Context:** His recurring utilization argument; he adds it's "no longer just cheap cloud, it's about access" to GPUs that cloud providers selectively allocate.

### [decentralized-ai] Decentralized GPU networks will invisibly power AI
> "With AI, with the way we're going... a permissionless, decentralized GPU network is going to be so critical to power this enormous demand that we're getting with AI. A lot of times it's just interacting with a chatbot... but you're talking to an AI and that AI is using Akash in the background. You're not going to know — you shouldn't know. Most people don't know Netflix runs on Amazon Web Services."
> — [00:26:40](https://www.youtube.com/watch?v=CCHnfFIavA8&t=1600s)

**Context:** On abstracting the blockchain away via clients (Cloudmos, Fleek, Spheron) and unnamed larger companies integrating Akash.

### [gpu-economics] GPUs are the oil for AI; supply chain broken for 2-5 years
> "These chips are the oil — the GPUs are the oil for AI... for the next two to five years we're not going to be able to solve supply chain problems... right now it takes about two years to get the advanced chips from Nvidia, we're talking about H100s."
> — [00:33:09](https://www.youtube.com/watch?v=CCHnfFIavA8&t=1989s)

**Context:** June 2023; Nvidia constrained by TSMC (70% of global chips) and ASML, COVID shortage compounded by quadrupled AI demand, while startups can't meet clouds' million-dollar commitments.

### [gpu-economics] Akash as the world's first open GPU secondary market
> "A secondary market is very important now to solve the supply chain problem, and that's what Akash is solving. Akash is the world's first open secondary market for advanced, high-density GPUs like A100s and H100s. And that's just a start — the user comes to the chips but stays for everything else."
> — [00:35:16](https://www.youtube.com/watch?v=CCHnfFIavA8&t=2116s)

**Context:** Companies locked into big cloud GPU commitments they don't fully use, and ML companies hoarding chips, need a way to lease them out without losing ownership.

### [local-compute] Anyone's GPU can join the marketplace
> "Anyone with the GPU can provide compute [on] Akash, but chances of your GPU getting selected depends on the application... please, if you have an extra A100 lying around, please put that on Akash."
> — [00:40:22](https://www.youtube.com/watch?v=CCHnfFIavA8&t=2422s)

**Context:** Answering a question about his "GPU stardust" tweets — aggregating individually-owned GPUs; demand currently concentrates on high-density Nvidia cards.

### [local-compute] Models mature onto consumer gaming GPUs
> "Most advanced models like GPT-4, 3.5... work well on high-end GPUs, but as they mature, as they get older, they get optimized to work on a distributed set of GPUs like 3090s, 4090s and whatnot — the lower-end GPUs, like gaming machines. So people that prefer these mature models over advanced models can use the lower-end GPUs."
> — [00:41:49](https://www.youtube.com/watch?v=CCHnfFIavA8&t=2509s)

**Context:** Early articulation of his thesis that AI workloads migrate down to consumer hardware — frontier fine-tuning needs H100s (minutes vs hours), but mature models run distributed on gaming cards.

### [decentralized-ai] Akash runs 15,000 models; Render runs one
> "Their community just celebrates stable diffusion and... render entering the AI era, where in reality Render can run one model; Akash can run about 15,000 models on Hugging Face — any model on Hugging Face you can run on Akash."
> — [00:48:21](https://www.youtube.com/watch?v=CCHnfFIavA8&t=2901s)

**Context:** Contrarian critique of RNDR as closed-source SaaS hosted on centralized clouds marketing itself as decentralized; he says calling this out got him blocked from their Telegram.

### [decentralized-ai] An explosion in machine learning on Akash
> "We're starting the incentivized testnet in a week or so — we have about 300 signups right now... a lot of them are doing machine learning, so about 150 new machine learning applications soon. So as we launch our mainnet I think we're going to see an explosion in machine learning, because the value prop is very clear and demand is very clear."
> — [00:51:55](https://www.youtube.com/watch?v=CCHnfFIavA8&t=3115s)

**Context:** Just ahead of Akash's GPU mainnet launch (Mainnet 6, August 2023); he also previews the Akash AI verticalized client ("two lines" to run a model).

### [gpu-economics] $1.5T AI spend vs a $200M market cap
> "You think about where AI is going: the spend in next five years is expected to be 1.5 trillion dollars — a trillion with a T... and Akash's market cap is what, 200 million? So if you look at room for growth, there is quite a lot. And again, none of this is financial advice."
> — [00:58:31](https://www.youtube.com/watch?v=CCHnfFIavA8&t=3511s)

**Context:** Answering why AKT "didn't take off" — no NFT/DeFi narrative fit and Cosmos liquidity constraints; he says he still holds his original developer allocation and takes a seven-year view.
