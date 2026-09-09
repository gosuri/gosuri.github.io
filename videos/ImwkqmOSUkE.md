---
id: ImwkqmOSUkE
title: DePin, Scams & Decentralized ML
channel: Chris Joannou
date: 2025-04-18
duration_min: 45
url: https://www.youtube.com/watch?v=ImwkqmOSUkE
type: podcast
greg_speaks: yes
oneliner: Greg on the Overnight Success podcast: GPUs as AI's oil, spotting "GPT" crypto scams, and the decentralized ML stack.
---

## Summary

Draper University's "Overnight Success" podcast with host Chris Joannou. Note: although uploaded 2025-04-18, the conversation clearly dates from ~mid-2023 — GPT-4 is called the most advanced public model, Elon Musk "bought about 10,000 H100s a few weeks ago," and Akash's GPU incentivized testnet is "in a few weeks." Greg walks through his origin story (websites at 14 in India, shipping software on floppy disks, AngelHack with 150k developers, early Kubernetes/Docker contributions) and Akash's founding: the Cornell "supercloud" concept plus a marketplace to trade compute, launched as the first Cosmos chain after Cosmos Hub. He explains why tokens converted him — "tokenized open-source software" as the sustainability model open source always lacked. On AI, he warns most "GPT"-branded crypto tokens are scams (closed-source OpenAI API wrappers), argues AI risks creating a feudal society split between those with and without access, and holds that OpenAI's moat is GPUs and data rather than models — open-source clones are closing the gap on GPT-4 quickly. He frames GPUs as "the oil" of AI, says a peer-to-peer marketplace is the only way to get chips (claiming access to ~1M GPUs in Akash's community, largely idle post-Merge ETH-mining cards), and describes a nascent decentralized ML stack (Gensyn, Bittensor, Fetch.ai, Akash). He gives an honest technical treatment of why decentralized training is hard (communication cost vs. compute cost, on-chip memory latency): decentralized training of frontier models is "not possible" today, but fine-tuning and inference work well distributed. He also demoed AutoGPT acquiring AKT and training its own models on Akash — censorship-resistant systems will be favorable for bots — and argues users should have sovereign control of the data AI trains on.

## Topics

decentralized cloud, gpu marketplace, decentralized machine learning, open-source ai, crypto scams, ai agents, gpu economics, data sovereignty, tokenized open source, cosmos, depin

## Predictions & Notable Claims

### [decentralized-ai] AI access will create a feudal society if left concentrated
> "It is perhaps the most important technological shift of our society... it is becoming to be a [feudalistic] society. People that have access to AI are going to win out over people that do not have access, and companies that control this access are going to amass so much power. If we don't do something about it now, we're going to lose out, because it's happening very, very, very fast."
> — [00:19:26](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1166s)

**Context:** Asked how to do decentralized AI when every project plugs into OpenAI/Microsoft; captions render "feudalistic" as "futilistic."

### [gpu-economics] GPUs are the oil — whoever controls the fuel controls the world
> "For someone to really take over the world, they need GPUs. Whoever has the power — GPUs are the oil, right? Like you can have the most advanced tank, but without diesel, there's no point. You need the fuel for AI. The ones that control that fuel will be in the best position to control the world."
> — [00:26:32](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1592s)

**Context:** Correcting the host's Skynet framing: open vs. closed models matters less than who controls compute.

### [gpu-economics] OpenAI's moat is GPUs and data, not the model — and it's eroding
> "What OpenAI has that other people don't have is GPUs — that's where the power comes in. It's not the model, it's really the GPUs and the data set. That's where the power is... OpenAI was able to secure great deals with Nvidia, with cloud providers, to be able to get ahead in the game, but I don't think they have the advantage anymore."
> — [00:22:16](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1336s)

**Context:** After tracing GPT's lineage to Google's "Attention Is All You Need" paper, which he calls "the Bitcoin of AI."

### [open-source-ai] Open-source clones are closing the gap on GPT-4 fast
> "We're seeing open-source clones, or open-source GPT models, that are actually getting to be really, really good — as good as GPT-4 in some cases. And the time it's taking from an OpenAI release to a clone is shortening really quickly."
> — [00:21:32](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1292s)

**Context:** He cites LLaMA, Alpaca, and Databricks' Dolly as GPT-3.5-level, and a model "70 to 80% as good as GPT-4" with "the gap reducing very quickly" (00:22:58) — the opportunity underpinning open-source/decentralized AI.

### [crypto-depin] A peer-to-peer marketplace is the only way to get chips
> "The only way we will be able to get chips is through a peer-to-peer marketplace, and that's really what Akash is building."
> — [00:24:24](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1464s)

**Context:** H100s/A100s were unobtainable even on hyperscaler clouds during the 2023 GPU crunch; he notes Musk had just bought ~10,000 H100s.

### [gpu-economics] Akash's community has access to ~1 million GPUs
> "A big portion of GPUs are actually with the crypto miners, especially the ones that invested quite a lot to mine ETH — post-merge, really, you have nowhere to go. So we have in our inventory about a million GPUs that we have access to in our network alone, in our community, that we potentially want to bring to market."
> — [00:25:07](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1507s)

**Context:** Ahead of Akash's GPU incentivized testnet and mainnet with A100s/H100s; idle post-Merge mining GPUs as latent supply.

### [ai-agents] Censorship-resistant systems will be favored by AI bots
> "Can bots acquire tokens using decentralized systems? Absolutely. In fact... we made AutoGPT do multiple things about how we can get a bunch of AKT tokens and run its own models, train its own models on Akash without anyone cutting its keys off. So arguably decentralized systems — because they're censorship-resistant systems — it'll be favorable for bots to use it."
> — [00:29:26](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1766s)

**Context:** Early (2023) articulation of AI agents autonomously buying compute with crypto; he says whether/how to moderate this "keeps me up at night" and any moderation must happen in public.

### [decentralized-ai] Machine learning must be decentralized and owned by the public
> "It's very important for machine learning to be decentralized and owned by the public. That's established. And now the question is who is actually building this decentralized vision."
> — [00:33:45](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=2025s)

**Context:** Host asks about "decentralized machine learning," a phrase he's associated with; leads into his survey of the DML stack.

### [decentralized-ai] Decentralized training of frontier models is not possible today
> "If you want to train advanced models, you need low latency, very minimal message-passing latency between two neurons. So if you have to do it in a decentralized way, that's not possible... the trade-off is, yeah, you can get lower cost, but training time is going to be higher. So you're never going to catch up to a GPT-4."
> — [00:43:05](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=2585s)

**Context:** Honest technical framing: communication cost must be lower than compute cost (00:34:30); fine-tuning and inference distribute fine, frontier training doesn't — yet. He praises Gensyn for attacking this.

### [decentralized-ai] Decentralized AI is close to catching up with centralized AI
> "I think Messari will eventually probably create a DML category sometime... DML is in a very, very early stages, but all of us are trying — I think we're very close to catching up to the centralized AI."
> — [00:40:14](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=2414s)

**Context:** After describing an emerging decentralized ML stack — Gensyn (training layer), Bittensor (human reinforcement), Fetch.ai (agents), Akash (compute) — at 00:38:48.

### [decentralized-ai] Your data trains GPT for free — data sovereignty should be a primitive
> "Today GPT is trained on yours and my data, we gave for free essentially, so it's taking our data and actually capturing quite a lot of value, and I think that's wrong. So you should have control, sovereign, about your data and what you want to do with your data. If you want to get paid... I think that should be very primitive."
> — [00:39:32](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=2372s)

**Context:** Predicting "decentralized data rights management" as a coming layer of the stack.

### [other] Anything with "GPT" in the title is generally a scam
> "We're seeing quite a lot of AI projects in crypto popping up and getting listed and getting a lot of attention. Be aware of any of these — anything that has a GPT in the title generally is a scam... none of them have open source software. They're all closed, they're all mostly OpenAI API wrappers."
> — [00:17:17](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=1037s)

**Context:** His heuristics: no GitHub = scam; listed tokens should be open source "hands down"; legit projects (e.g., Bittensor) talk in trade-offs.

### [other] Tokenized open-source software is a superior model
> "Now the question is how do you create a truly open source software and give everything out, you know, like all the features, capabilities, and somehow capture value and sustain? That's where tokenized open-source software comes into play — I think is a much superior model than traditional software."
> — [00:15:50](https://www.youtube.com/watch?v=ImwkqmOSUkE&t=950s)

**Context:** His conversion moment for crypto: tokens solve open source's sustainability problem that donations and open-core never did.
