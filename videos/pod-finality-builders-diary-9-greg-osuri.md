---
id: pod-finality-builders-diary-9-greg-osuri
title: "How to Pivot your Career in Crypto and AI | Builder's Diary #9 with Greg Osuri"
channel: Finality Crypto Podcast (DeFi Times)
date: 2024-02-14
duration_min: 68
url: https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095
type: podcast
greg_speaks: yes
oneliner: Career-focused biography episode: floppy-disk origins in rural India, why crypto sustains open source, AI's "grandmother test," and scam heuristics.
---

## Summary

A biography-heavy Builder's Diary episode with host Juri (Finality/DeFi Times). Greg tells his fullest origin story: growing up on a farm in 90s India, sharding Prince of Persia across floppy disks by bicycle ("my first distributed computer," 1994-95), building his first computer from scrap parts, discovering Linux/open source because Windows licenses were unaffordable, learning C/C++ at 14 from library books by writing programs on paper, and getting HTML jobs from the West as a high-schooler. He left India in 2004 for IBM's life-sciences consulting (with a master's in bioinformatics and a minor in AI), moved to SF in 2006-07, caught the startup bug (Heroku, early AWS/S3, a billion-transactions-a-day system at Demandbase), and founded AngelHack (150,000 developers, 50 cities), where the Heroku-to-AWS scaling wall and the rise of DevOps convinced him cloud deployment was broken. He wrote the first line of what became Akash in 2013, founded Overclock Labs in 2015 to take Kubernetes to market, spoke at the first KubeCon (~200 people), prototyped on Ethereum Frontier in 2016, and moved to Tendermint after CryptoKitties congestion proved shared security wouldn't scale.

The thesis sections: blockchains let builders create "permanent systems" that outlive their creators (he contrasts Docker's fire-sale and Kubernetes' contributor churn with Akash's 480 contributors, on-chain funding, and companies like Spheron, Cloudmos and Brev making money on it — "I could disappear right now and Akash will function"); crypto is the only sustainable model for open-source infrastructure; AI is the first technology to pass "the grandmother test," with quantified productivity forecasts (doctors 10→50 patients/day); GPU supply is choked by the NVIDIA/TSMC bottleneck so the near-term fix is repurposing idle GPUs (old A100 fleets, PlayStations, gamers' 4090s); and a Semafor story ("how crypto is saving AI") featuring a Columbia student renting an A100 on Akash for ~$1.10. Career advice: use ChatGPT/Midjourney, hit the GPU wall on AWS, then experience permissionless H100s on Akash; deploy open models (Ollama, Mistral); follow Illia (NEAR, Transformers co-author), Nous Research, Bittensor, Morpheus. Closes with scam heuristics: investor-facing buzzword sites ("hashtag DePIN"), closed source, and founders with no public presence.

## Topics

founder journey, open source sustainability, crypto incentives, permanent systems, ai adoption, gpu shortage, idle gpus, nvidia tsmc, devops, angelhack, kubernetes, career advice, scam detection, decentralized ai

## Predictions & Notable Claims

### [crypto-depin] Crypto is the only sustainable model for open-source infrastructure
> "In order to have pure open source software that's sustainable, crypto is the answer. Right? Every other open source software [closes] at some point. If you do open core model, at some point it becomes closed because that's the only way to make money... you cannot have closed source software and have verifiability."
> — [00:58:04](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** Capstone of his recurring argument, set up earlier with Docker's acqui-hire and Kubernetes contributor churn: "Venture-backed model doesn't work for open-source software... the value capture is predominantly done by someone else that's not a contributor" (00:42:56).

### [crypto-depin] Blockchains create permanent systems that outlive their creators
> "One of the reasons why I'm doing crypto and blockchain is to have that legacy, like, to create something that will outlive me, the corporations that I built, or the people that I know."
> — [00:18:08](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** His "permanence" thesis, echoed later: "Akash without crypto wouldn't last. Like, in case I retire, it would die" (00:44:40) and "I could disappear right now and Akash will function" — 480 contributors, on-chain funding, third parties earning revenue (00:45:23).

### [other] AI is the first technology that passes "the grandmother test"
> "Compared to the last big technology that got popularity, which was crypto... AI is exponentially easier to explain to your grandmother. It passes the grandmother test. And that's key because no technology that came before AI could pass the test."
> — [00:48:00](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** Explaining ChatGPT's zero-to-100M-users-in-90-days adoption versus the iPhone and the early web, both of which required persuasion (spans into the 00:48:54 block).

### [other] AI multiplies service professionals: doctors from 10 to 50 patients a day
> "AI makes someone's job much better. Lawyers, doctors, just service professionals. So, today if a doctor can see 10 patients in a day, with AI, they'll be able to see 50 patients a day. If a lawyer needs to review a contract, if it takes an hour, that contract will take 10 minutes to 5 minutes using AI."
> — [00:51:12](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** Built on his framing of medical diagnosis as "a recollection game" where AI gives aging human memory "superpowers" (00:50:28); quote spans into the 00:51:55 block.

### [gpu-economics] ~5% of global GDP will be spent on AI hardware
> "Some of the predictions, Gartner, I believe, made a prediction that about 5% of global GDP will be spent on AI hardware. And what is that hardware? GPUs, right? And GPUs are very hard to build... 80% of GPUs used for AI is built by NVIDIA."
> — [00:52:43](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** A third-party forecast he endorses, followed by the supply-chain explanation: TSMC fab time reserved two years ahead, $10B+ per foundry, GPU generations turning over every two years (00:54:13-00:55:00).

### [local-compute] The near-term GPU fix: repurpose the idle chips already in homes and data centers
> "The only way to solve the problem for now is to look inward instead of looking outward. Instead of expanding our capabilities, let's look at repurposing what we already purchased. Turns out there's a lot of GPUs that are not used... we have PlayStations sitting in homes that are maybe used once or twice every year... 4090s that I have right here... at least half the time they're not used while you sleep."
> — [00:55:00](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** His answer to the NVIDIA/TSMC supply bottleneck (quote spans into the 00:55:43 block): idle consumer and enterprise GPUs (retired A100 fleets, post-training-run clusters) brought to market by crypto incentives — "that's where crypto is phenomenal."

### [crypto-depin] "Crypto is saving AI" — an A100 for $1.10 on Akash
> "Semafor... wrote a piece on how crypto is saving AI. And they interviewed a lot of Akash's users and providers... this was a college student from Columbia that got an A100 [on] Akash for like $1.10 or something like that... it just tells you that AI problems are solved with crypto. You know, the supply problems at least."
> — [00:56:32](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** Evidence for the crypto-x-AI synergy thesis; he extends it to provenance/deepfakes ("What if there's a permanent database that you can write to? Crypto." 00:57:15).

### [crypto-depin] Scam heuristics: investor-facing sites, buzzwords, closed source
> "The moment you see a website geared towards investors, that's generally a scam. Because you're not focused on getting users... every time you see DePIN on a website, like front and center... DePIN didn't exist six months ago... Close source is a scam, generally speaking. And when you have founders that come out of nowhere... generally [regard] them as a scam."
> — [01:04:35](https://podcasts.apple.com/us/podcast/how-to-pivot-your-career-in-crypto-and-ai-builders/id1541829695?i=1000645292095)

**Context:** Closing safety advice (spans into the 01:05:24 block); he warns that FTX/Celsius-style patterns are reappearing in "smaller protocols... with outsized numbers that are closed source."
