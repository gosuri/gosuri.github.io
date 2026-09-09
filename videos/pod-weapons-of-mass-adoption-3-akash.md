---
id: pod-weapons-of-mass-adoption-3-akash
title: "#3 - Akash Network with Greg Osuri"
channel: Weapons of Mass Adoption
date: 2023-09-06
duration_min: 60
url: https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051
type: podcast
greg_speaks: yes
oneliner: Long-form 2023 interview: GPUs as "the oil for AI," 2–5 years of chip shortage, mature models moving to gaming GPUs, and $1.5T AI spend.
---

## Summary

Host Julius interviews Greg just after Akash's GPU mainnet. It opens with Greg's photography hobby (film portraits at conferences; he once declined shooting Belarus's Lukashenko for Rolling Stone), then covers the full Akash origin story: AngelHack (150k developers, 50 cities, Firebase launched there), hyperscale work at Demandbase, early container/scheduler libraries, Overclock Labs founded to take Kubernetes to market in 2015, Cornell's 2015 supercloud paper, and Akash's 2018 white paper adding a decentralized marketplace as the supercloud's missing piece. Greg gives his fullest "why blockchain" argument on record: closed marketplaces need hundreds of millions in capital and misalign incentives; classic open-source monetization (Red Hat support, open core) fails; "tokenized open source" adds sustainability — plus the history of trying Ethereum in 2017 (CryptoKitties crashed their prototype), adopting Tendermint, throwing away 70,000 lines of code to move to Cosmos SDK, and being the first IBC transaction with Cosmos Hub. The GPU section explains NVIDIA's software moat ("the Apple of chips"), the TSMC/ASML supply chain, cloud providers gatekeeping H100s behind multimillion-dollar commitments, and Akash as "the world's first open secondary market" for high-density GPUs. He previews "Akash AI" (two-lines-of-Python deployment for ML devs), attacks Render's closed-source model ("they blocked me from their telegram"), explains reputation-over-verification ("you cannot build a verifiable general purpose computer"), and closes on why AKT hadn't pumped: no DeFi/NFT narrative fit and Cosmos liquidity constraints — against a $1.5T five-year AI spend outlook.

## Topics

gpu marketplace, gpu economics, supercloud, nvidia supply chain, open source economics, tokenized open source, cosmos sdk, render comparison, ai infrastructure, akash ai

## Predictions & Notable Claims

### [gpu-economics] GPUs are the oil for AI; shortage lasts 2–5 years
> "For the next two to five years, we're not going to be able to solve the supply chain problems. And on the other hand, what's happening is as companies get serious about AI, they tend to buy these chips as much as possible because they need these chips to run. So these chips are the oil, the GPUs are the oil for AI. And so right now it takes about two years to get the advanced chips from NVIDIA."
> — [00:33:02](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** Explaining the COVID-crippled NVIDIA/TSMC/ASML supply chain meeting quadrupled AI demand — the market gap Akash's secondary GPU market targets.

### [local-compute] Mature models migrate to distributed gaming GPUs
> "Most advanced models like GPT-4... work well on high-end GPUs. But as they mature, as they get older, they get optimized to work on a distributed set of GPUs like 3090s, 4090s, and whatnot, the lower-end GPUs, right? Like gaming machines."
> — [00:41:37](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** Answering whether "GPU stardust" — individuals' single GPUs — can earn on Akash; his thesis that model maturation pushes inference/fine-tuning down to consumer hardware over time.

### [ai-agents] AI will consume Akash invisibly in the background
> "With AI, with the way we're going, the permissionless decentralized GPU network is going to be so critical to power this enormous demand that we're getting with AI. And a lot of times you're just interacting with the chatbot or you're interacting with a device, maybe on the Apple Vision Pro, but you're talking to an AI and then AI is using Akash in the background. So you're not going to know."
> — [00:26:49](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** On abstracting the protocol away ("most people don't know Netflix runs on Amazon Web Services"); he adds at [00:27:31]: "Now it's very obvious when you use Akash that you're using Akash, but that's not going to be the case for a long time."

### [gpu-economics] $1.5 trillion AI spend in the next five years
> "You think about where AI is going, the spend in the next five years is expected to be $1.5 trillion, a trillion with a T, right? That's $1 trillion is $1,000 billion. And I thought the market cap was, what, $200 million? So if you look at room for growth, there is quite a lot."
> — [00:58:50](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** Explaining why AKT's price action didn't faze him (he says he still holds his original developer allocation); explicitly caveated "none of this is financial advice."

### [open-source-ai] Closed source goes fast, open source goes further
> "Regardless of what the founders intend the company to be, the structure is created in a way that people are only incentivized to increase shareholder value... With closed source software, we can go fast. But with open source software, we can go further. And that's the core difference."
> — [00:19:47](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** His recurring aphorism, here anchored in the AWS antitrust investigation and "imagine having to get a license to use TCP/IP."

### [crypto-depin] Crypto is the sustainability layer for open source
> "My entire career exists because of open source software, right? So, and if you were to add sustainability to open source software, you need networks. And the only data structure we found where you can have a highly sustainable networks were crypto, right? So, crypto gives sustainability to open source software."
> — [00:11:06](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** The one-sentence version of his "tokenized open source" thesis, expanded at [00:21:23] ("Open source software with a token adds sustainability, gives permissionless... aligns and attracts developers").

### [cloud-decentralization] The invisible 50% cloud tax
> "Anderson Horowitz wrote a very thorough, thoughtful research piece... they pointed out over 50% of the margins that these online services get goes to a cloud provider. Like, if you use Dropbox or Asana or Netflix, 50% of the payment on the profits are going to go into the cloud providers. So, there's an invisible tax we pay like it or not."
> — [00:14:24](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** Citing a16z's "The Cost of Cloud" piece while explaining supercloud economics and BigQuery/Aurora lock-in.

### [cloud-decentralization] 8.4 million data centers, 85% unused
> "Most data centers, there are about 8.4 million data centers in the world. Most data centers are not used to the point they're supposed to be used. 85% of the time, they're unused. So, if you can leverage the super cloud and connect these data centers and actually get a price point that's significantly lower than what you would otherwise pay to these hyperscalers."
> — [00:16:44](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** Quantifying the latent-supply thesis, then pivoting: "It's no longer just cheap cloud. It's about access... to the GPUs" ([00:17:27]).

### [cloud-decentralization] "We knew supercloud was going to be a thing" — five years early
> "We stuck to our values and stuck to our thesis. Akash is exactly what it is in the white paper we wrote... Narratives are like, yeah, I'm going to take off. Like, yeah, we know. We knew that five years ago, right?... we know SuperCloud is going to be a thing."
> — [00:56:31](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** On why Akash "didn't take off" in the 2021 DeFi/NFT cycle — no narrative fit plus Cosmos liquidity constraints; he frames the AI narrative finally aligning with the original thesis.

### [decentralized-ai] Resilience: kill the company, the network lives
> "One attack on Render, one state attack on Render, well, if OTA, the company behind Render, it disappears. The Render network disappears right now, right? If Akash, the company behind Akash's Overclock Labs disappears, Akash will run, right? Overclock Labs operates one provider out of 50 other providers."
> — [00:47:03](https://podcasts.apple.com/us/podcast/3-akash-network-with-greg-osuri/id1705930764?i=1000626951051)

**Context:** His self-regulation argument for the industry — "decentralization is very important, especially now with state-level attacks happening on this ecosystem" — while contrasting Akash's open model with Render's closed one ("OTA" is Whisper's mis-hearing of OTOY, Render's parent company).
