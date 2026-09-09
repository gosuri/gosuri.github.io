---
id: OHQnZEaMEHU
title: AI Made in Cosmos - with Greg Osuri, Murthy Vitwit, Valery Litvin & Dean Tribble
channel: Cosmoverse
date: 2024-10-24
duration_min: 35
url: https://www.youtube.com/watch?v=OHQnZEaMEHU
type: panel
greg_speaks: yes
oneliner: Cosmoverse panel on decentralized AI: open source catching closed AI, decentralized training on Akash, AI's power crisis, and space data centers.
---

## Summary

Closing Cosmoverse 2024 panel on "AI made in Cosmos" with Greg Osuri (Akash), Dean Tribble (Agoric), Valery Litvin (Cyber protocol), and Murthy (Vitwit/Warden-style agent platform "Aran Network"). Greg introduces Akash as the world's first decentralized supercloud powering "the most important technological paradigm shift humanity is facing, called AI," and argues Cosmos is the only L1 appchain framework that works — Akash has run four years without a single unplanned outage while growing roughly an order of magnitude yearly, versus Solana congestion hurting DePINs like Helium.

His centerpiece is the state of open source and decentralized AI: open source is "two to three months away" from catching closed AI (Llama 3.1 405B already exceeds some closed models, though Meta's next open release is uncertain); truly decentralized training is now real — Nous Research trained a ~1B model over the internet with its DisTrO low-bandwidth framework, and Prime Intellect was 15% through a 10B-parameter run — "both these models are being trained on Akash." He then lays out AI's energy wall: GPT-4 needed a ~10MW data center, xAI's Grok 3 in Memphis ~50MW (partly diesel-powered), the next generation 250MW, then 1.2GW — nuclear-reactor territory — noting the US has ~70 approved-but-unbuilt reactors and that Microsoft (Three Mile Island) and Oracle are buying reactors. This, he argues, is why compute must decentralize across distributed 5-10MW data centers, and he predicts satellite-internet phones streaming AI and solar-powered data centers in space, which he bets will be decentralized. Looking to Cosmoverse 2025, he forecasts a live 100B-or-trillion-parameter decentralized model, teases fractionalized model ownership (NFT shares in weights) as the missing business model, and flags privacy-preserving data extraction (e.g., Vana) as the next unlock. Tribble covers agent orchestration and safety rails; Litvin and Murthy discuss distributed training and proof-of-inference.

## Topics

decentralized ai, decentralized training, open source ai, ai energy, nuclear power, data centers, space data centers, satellite internet, gpu shortage, cosmos, appchains, prime intellect, nous research, ai agents, model ownership, data sovereignty

## Predictions & Notable Claims

### [open-source-ai] Open source AI is two to three months from catching closed AI
> "The open source AI is maybe two to three months away from catching up to closed source AI. It's very good — in some cases, like Llama 3.1, which is a 405 billion parameter model, exceeds the quality of closed source AI."
> — [00:08:00](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=480s)

**Context:** Asked about the state of open source AI; he caveats that Llama came from closed Meta ($100M, ~30,000 H100s) and whether the next model is open-sourced "is still unanswered."

### [decentralized-ai] Decentralized training works — and it's happening on Akash
> "Can we actually create truly decentralized systems that are trained on decentralized compute networks? And the answer is yes, we can. The first example we saw was a billion parameter model by Nous Research which trained truly on distributed GPUs."
> — [00:09:27](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=567s)

**Context:** Cites Nous's DisTrO framework enabling low-bandwidth internet training; continues that Prime Intellect's 10B-parameter run was 15% complete — "both these models are being trained on Akash."

### [energy] AI's power curve: 50MW on diesel today, 250MW next, then 1.2GW — only nuclear can feed it
> "Grok 3... in Memphis data center takes about 50 megawatts, and if you ask me where they got 50 megawatts, they're actually burning diesel... The next model is going to be 250 megawatt and a model after that is going to be 1.2 gigawatt. The only place to get a 1.2 gigawatt capacity is a nuclear reactor."
> — [00:11:37](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=697s)

**Context:** Argues "the big challenge for training AI is not compute alone, it's actually power," growing half an order of magnitude a year (GPT-4 = ~10MW); notes ~70 approved-but-never-built US nuclear reactors.

### [cloud-decentralization] Distributed data centers need a decentralized connective layer
> "Now there's enormous amounts of compute spread across hundreds and hundreds of data centers across the world... that really brings about the need for a layer to connect these distributed data centers, and that layer cannot be centralized. I think that's critical for this layer to be decentralized, and Akash is one of the decentralized networks, if not the leading decentralized network, that's connecting these distributed data centers."
> — [00:13:05](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=785s)

**Context:** Since the GPU crunch, Nvidia allocates smaller quantities (<5,000 units) to many players rather than lots to one, dispersing global compute.

### [local-compute] Satellite internet phones with AI streaming on the other side
> "With Starlink getting smaller and smaller... we're actually getting to a point where devices are going to be powered by satellite internet — you're talking about mobile phones in next couple of years. So if you actually look at the trajectory where the technology is going, you're going to have direct satellite internet on mobile phones, where on the other side is going to be an AI that's streaming."
> — [00:14:33](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=873s)

**Context:** Part of his argument for where AI delivery infrastructure is heading, leading into the space data center thesis.

### [decentralized-ai] Data centers in space — and they'll be decentralized
> "Self-cooling, continuous data centers with 30% more efficiency and half the latency to power AI: satellite data centers. So it's not too far in the future we're going to have data centers in space, and the question is how do these data centers need to be networked — is it going to be centralized, decentralized? I would bet they're decentralized."
> — [00:15:15](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=915s)

**Context:** Extends the energy argument — a square mile of solar gives ~2.2GW but batteries/cooling fail in deserts, so orbit solves continuous solar power.

### [decentralized-ai] Fractionalized model ownership is the missing AI business model
> "If you can fractionalize the ownership by giving access to the LLM without opening up the weights, I think you have a business model, and folks that contribute to the training of this model, whether in compute or cash, can get this fractional ownership. So there could be an NFT that represents a fractional ownership."
> — [00:28:13](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=1693s)

**Context:** Notes Meta spent ~$100M training a model given away free, "not practical for most innovators"; says he's doing diligence to invest in an unnamed company doing this.

### [decentralized-ai] By Cosmoverse 2025: a 100B-to-1T parameter decentralized model, and reactors under construction
> "If you ask me, six months and a year from now, sitting on the stage for Cosmoverse 2025, the story will be different, and the story could be we have 100 billion parameter model, or could be a trillion parameter model actually live — and couple of nuclear reactors under construction too."
> — [00:29:39](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=1779s)

**Context:** Closing forecast; he adds Microsoft's Three Mile Island deal and Oracle's Texas reactors — "a tech company is buying nuclear reactors to power AI, how dystopian is that."

### [crypto-depin] Akash: four years live, zero unplanned outages, order-of-magnitude yearly growth
> "Cosmos is, in my opinion, the only layer one app chain framework that works without an issue. Akash is a prime example — we've been live for about four years and we haven't had a single unplanned outage... we grew our usage maybe by order of magnitude every year."
> — [00:02:53](https://www.youtube.com/watch?v=OHQnZEaMEHU&t=173s)

**Context:** Why Cosmos suits DePIN — contrasts with Solana congestion affecting Helium claims; "until scale is solved, sovereignty is super critical."
