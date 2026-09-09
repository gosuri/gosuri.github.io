---
id: 9bEi1i2c12E
title: Greg Osuri, Marko Stokic, Michael Heinrich & Luki Song on Can User-Owned AI Compete with Big Tech?
channel: Nebular
date: 2024-08-02
duration_min: 28
url: https://www.youtube.com/watch?v=9bEi1i2c12E
type: panel
greg_speaks: yes
oneliner: EthCC-week panel on user-owned AI where Greg lays out his full local-compute thesis: home GPUs, federated learning, solar-powered local AI.
---

## Summary

A Brussels panel (EthCC week) on whether user-owned AI can compete with Big Tech, with Greg Osuri (Akash), Marko Stokic (Oasis), Michael Heinrich (0G), and Luki Song (Chainbase). This is one of the densest statements of Greg's local-compute worldview on record. He frames AI's three pillars — data, compute, models — and argues user-owned AI wins on each: private data is more valuable than internet data and federated learning lets models train locally without surrendering it; more compute is spread across user devices than sits in data centers, aggregatable via decentralized tech; and models are commoditizing via open source (citing Google's leaked "no moat" memo and a Linux analogy — 96% of top web servers run Linux — predicting AI follows the same path: "closed source goes fast, open source goes far"). He describes a live hardware shift from H100s to RTX 4090s in gaming machines for inference, AMD boxes (Tinygrad/George Hotz's first box on Akash, MI300-class 120GB memory) as home setups, and DiLoCo/Prime Intellect distributed training enabling heterogeneous compute — "a big shift from data centers to home-grade computers, eventually to mobile phones." On speed, he counters that Venice AI and Nous Hermes run and train on Akash ("the notion that decentralized systems cannot be fast is just wrong"), concedes decentralized can't yet match OpenAI scale but notes Bittensor's ~$1B annual emissions could fund clusters. He attacks large models ("the larger the model gets, the dumber it gets"), champions expert models, and closes with solar-powered "ultra-local compute" in Africa — AI tutors and healthcare diagnosis for people who can't afford $20/month ChatGPT — as the revolution centralized models won't deliver.

## Topics

user-owned ai, local compute, federated learning, open source ai, gpu economics, consumer gpus, distributed training, decentralized ai, expert models, bittensor, solar compute, ai in africa, data sovereignty

## Predictions & Notable Claims

### [local-compute] More compute lives in user devices than in data centers
> "There's a lot more compute that's spread across user devices than centralized in a data center. Now with techniques that we have coming up for distributed learning and whatnot, users can own their compute and aggregate them through decentralized technologies — and that's happening very rapidly."
> — [00:02:15](https://www.youtube.com/watch?v=9bEi1i2c12E&t=135s)

**Context:** Answering "what moat does Big Tech have?" — he argues compute and data moats both invert in favor of users.

### [open-source-ai] AI will follow Linux: centralized first, open-source and user-owned eventually
> "There's this famous article from Google that leaked that said Google has no moat in models, because models are getting open source... Just like how Linux took over the internet — now 96% of web servers, the top 1 million websites, are run on open source Linux — similarly we're going to see that for AI as well. Initially it's going to be centralized companies that have an edge, because closed source tends to go fast whereas open source tends to go far... but eventually it's going to be open source and user-owned future."
> — [00:03:41](https://www.youtube.com/watch?v=9bEi1i2c12E&t=221s)

**Context:** His model-layer argument: every OpenAI release gets replicated in months, soon weeks, so "code is no longer a valuable moat."

### [local-ai] Federated learning: models come to the data, users keep control
> "Federated learning is a mechanism where models can be trained locally without giving access to the data and still be federated at a higher level. Now user owns the data — you're not giving up the data... Just because a model is running on iPhone, it's not running on the cloud — it's still running locally, you still have access and full control of it."
> — [00:04:24](https://www.youtube.com/watch?v=9bEi1i2c12E&t=264s)

**Context:** Asked how decentralized networks compete with Apple/Samsung on-device AI; he adds any technology extracting user data in 2024 faces "a PR disaster."

### [local-compute] The shift from H100s to 4090s: "now we can incentivize home computers... eventually mobile phones"
> "For the first time we've seen a shift in what kind of compute we'll need — H100s were all the glory a few months ago, but now it's 4090s. 4090s, turns out, are actually pretty good for inference workloads, and you see gaming machines having quite a lot of 4090s. So the shift from data-center-grade compute to a consumer-grade computer — that's happening, and that's incredible news because now we can incentivize home computers... So there's a big shift happening from data centers to home-grade computers, eventually to mobile phones."
> — [00:10:09](https://www.youtube.com/watch?v=9bEi1i2c12E&t=609s)

**Context:** On incentive design; he also cites the Nvidia-to-AMD shift (Tinygrad's first box on Akash with 120GB-memory AMD chips "as a home setup") and Google DeepMind's DiLoCo paper implemented by Prime Intellect enabling heterogeneous distributed training. Quote spans to [00:11:36].

### [decentralized-ai] "The notion that decentralized systems cannot be fast is just wrong" — and real products already prove it
> "The notion that decentralized systems cannot be fast is just wrong... Unlike last year, this year we actually have real products — it's not some ideas. Venice runs on Akash, Brave runs on Akash, Nous runs on Akash, Prime Intellect... this is not just some future promise, this is real product-market fit, this is real revenues, real users."
> — [00:15:15](https://www.youtube.com/watch?v=9bEi1i2c12E&t=915s)

**Context:** Asked about speed vs. centralized AI. He concedes decentralized can't yet match OpenAI's scale but points to Bittensor's ~$1B/year emissions as a path to funding large clusters ([00:15:58]).

### [local-ai] The larger the model gets, the dumber it gets
> "The whole trend of this large big-parameter models being good is actually wrong. If you remember, ChatGPT forgot how to code — expert models are way better at coding than ChatGPT. The larger the model gets, the dumber it gets. It may have more knowledge, but it cannot give you accurate information."
> — [00:16:42](https://www.youtube.com/watch?v=9bEi1i2c12E&t=1002s)

**Context:** Pushing back on Marko Stokic's claim that decentralized AI is losing the model race; Greg argues small expert models beat monolithic LLMs.

### [local-compute] A revolution of solar-powered ultra-local compute
> "Folks in Africa don't exactly have 20 bucks a month to subscribe to ChatGPT. So there is this whole new revolution happening with ultra-local compute, with expert models that are helping local population — and doing it powered by solar. That's the kind of impact I like to see, and that's not going to happen with centralized models, with extractive business models. It's going to happen with local, it's going to happen open source, it's going to happen decentralized."
> — [00:23:11](https://www.youtube.com/watch?v=9bEi1i2c12E&t=1391s)

**Context:** Describing GPU-equipped data centers in remote Africa running local models as tutors and healthcare diagnostics; he also jokes he uses ChatGPT as "co-parent" for his three-month-old. Quote spans to [00:23:54].
