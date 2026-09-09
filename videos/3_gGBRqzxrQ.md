---
id: 3_gGBRqzxrQ
title: Why Decentralized AI Needs Cosmos: Greg Osuri of Akash Explains
channel: The Interop
date: 2024-11-09
duration_min: 55
url: https://www.youtube.com/watch?v=3_gGBRqzxrQ
type: podcast
greg_speaks: yes
oneliner: Cosmoverse-side interview: Nvidia on Akash, GPU oversupply economics, digital feudalism, nuclear energy, and East vs. West AI.
---

## Summary

Casual but wide-ranging interview recorded at Cosmoverse (The Interop podcast). Greg reports Akash's state post-GPU launch: record growth (~1700% year-over-year quarterly growth in daily user fees), Nvidia as the biggest user (its Brev fine-tuning service runs on Akash — "I don't think Nvidia uses any other crypto protocol"), Venice AI running ~90% of its GPU infrastructure on Akash (he uses Venice over ChatGPT for privacy, noting OpenAI employees admitted to reading user logs), universities like RIT (building AI tutors) priced out of cloud, and decentralized-training teams Nous Research (first 1B-parameter decentralized model, DisTrO) and Prime Intellect (first 10B). He describes Akash as "eBay for GPUs" federating underutilized supply, explains the post-crunch GPU oversupply — $2/hr is breakeven to amortize an H100 over two years, yet chips are offered at $1 — and estimates a Llama-class model could be trained for ~$50M, within reach of pooled crypto capital. Big themes: AI risks "digital feudalism" unless decentralized; fractionalized model ownership (open code, private weights, inference royalties) will "kick start a whole new revolution"; decentralized training's real unlock is "open biases" versus SF-trained models; he's in the small-models camp (many specialized models composing intelligence, like human specialization). On energy: training power needs grow half an order of magnitude yearly (10MW for GPT-3 → 50MW Grok/Memphis → 250MW → 1.2GW), beyond a gigawatt requires nuclear, nuclear takes ~10 years, so many small connected data centers plus distributed training (DiLoCo) is the only timely path; AI will consume 20% of the US grid by 2030; he wants energy "too cheap to meter" and Type 1 civilization in his lifetime. Closes with East AI vs. West AI ("West innovates, China replicates, Europe regulates") and AI as a time machine, predicting AI-usage classism like the internet era.

## Topics

decentralized ai, gpu economics, nvidia, distributed training, cosmos, energy, nuclear power, open-source ai, model ownership, small models, digital feudalism, venice ai, east vs west ai, gpu oversupply

## Predictions & Notable Claims

### [gpu-economics] Nvidia is Akash's biggest user
> "Nvidia now uses Akash — I don't think Nvidia uses any other crypto protocol."
> — [00:06:42](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=402s)

**Context:** Nvidia's Brev fine-tuning-as-a-service product runs on Akash; Greg says Nvidia can't produce chips fast enough, so tapping underutilized GPUs keeps researchers on Nvidia silicon against rising AMD competition.

### [gpu-economics] Akash is eBay for GPUs
> "There are lots of underutilized GPUs out there, and Akash has a capability to federate them and offer them at a significantly lower price than what you would otherwise pay for a new GPU. Akash is a used GPU market... it's eBay for GPUs without a physical delivery."
> — [00:08:08](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=488s)

**Context:** Explaining Akash's role for Nvidia: monetizing GPUs idle between training runs or superseded by newer generations.

### [gpu-economics] Sub-$2/hour H100s mean the market is in oversupply
> "If one wants to amortize their chip within two years, I think the price is around $2 an hour, roughly, including the energy cost... so if anything less than $2 an hour, you're losing money. We have chips for [a] dollar an hour too... that tells you the market is — there's oversupply of chips now."
> — [00:21:57](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=1317s)

**Context:** Post-2023 GPU crunch: opportunists financed small fragmented GPU fleets, demand didn't catch up, and loose (non-interconnected) GPUs crashed in price while large clusters stayed expensive. He notes Lambda went from refusing crypto buyers to "begging us to take the GPUs."

### [decentralized-ai] Crypto can pool capital to train frontier models (~$50M for a Llama)
> "I think you can train a good Llama equivalent for about $50 million... there's a lot of money in crypto that, if we all pull together, we can train the next trillion parameter model fairly well."
> — [00:24:46](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=1486s)

**Context:** Back-of-envelope: Llama 3.1 trained on ~30K H100s for ~2 months; at ~$1/GPU/hr that's ~$30K/hour — affordable for token treasuries (he cites TAO's ~$4B market cap).

### [decentralized-ai] AGI centralization means digital feudalism
> "It's very dangerous because now we are entering an era of digital feudalism, especially as we get towards AGI — whoever has AGI controls the world."
> — [00:25:30](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=1530s)

**Context:** Later ([00:27:42]) he frames the question as "who are the Lords and who's going to be [the] peasants" and says Akash builds decentralized systems specifically to avoid a digital-feudalistic society.

### [crypto-depin] Fractionalized model ownership will kick-start a revolution
> "The challenge is how do you keep the weights private but keep the model open, and I think that's being solved. And once you solve that, now you have an incentive mechanism to incentivize ownership of a model, and I think that's going to kick-start a whole new revolution."
> — [00:29:09](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=1749s)

**Context:** On contributors earning a share of future inference revenue for funding compute — "inference is how you make money and training is how you invest"; he name-checks Bittensor as seeding model development in crypto.

### [open-source-ai] Decentralized training's unlock is open biases
> "The main thing for me for decentralized training is open biases... open biases means that everybody gets to contribute to reinforcing the model, and so therefore the biases are, in theory, supposed to be more balanced."
> — [00:29:54](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=1794s)

**Context:** Citing early ChatGPT and Google Gemini bias failures from RLHF done by ideologically homogeneous SF teams; "at least [it's] a free market that determines... right now we don't know who trained them" (the definition continues at [00:31:18]-[00:32:00]).

### [local-ai] The future is many small specialized models, not one giant one
> "It's my personal opinion: I think it's going to be a lot of small models that [are] going to come together to essentially create a multi-model mechanism. Small models are inherently good at doing small tasks."
> — [00:35:35](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=2135s)

**Context:** Answering "the billion dollar question" of generalized vs. specialized models; he analogizes to humanity progressing through specialization and knowledge sharing. Small specialized models are the form factor that runs on local/edge hardware.

### [energy] AI power needs grow half an order of magnitude per year — beyond 1GW means nuclear
> "The notion is that every year the amount of power we need is growing by half an order [of] magnitude... Grok was [a] 50 megawatt [data] center — you don't have 50 megawatt supply in a single source, so they literally are burning diesel... the next model is going to be 250 megawatt, and the model after that, the next year, is going to be 1.2 gigawatt... to get anything beyond a gigawatt you need a nuclear reactor."
> — [00:39:56](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=2396s)

**Context:** GPT-3 ≈ 10MW, xAI's Memphis site ≈ 50MW; he rules out solar-only at that scale (battery cooling losses) and cites Microsoft's Three Mile Island purchase and ~90 approved new US reactors.

### [local-compute] No time for nuclear — connect small data centers everywhere instead
> "It takes about 10 years [to build a nuclear reactor]... so we don't have 10 years to wait to build the next generation AI. So I think what's going to happen is there's going to be a lot of the small data centers — they're everywhere — that need to be connected, and if DiLoCo or distributed training [is] solved, we can actually use a highly distributed network to develop the next AI model."
> — [00:42:49](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=2569s)

**Context:** His core bull case for DePIN/decentralized GPU networks: they thrive in the gap before nuclear capacity arrives. In the same block he predicts the AI revolution "is going to end up actually great for humanity" by driving the marginal cost of energy down (desalination, water problems).

### [energy] AI will consume 20% of the US grid by 2030
> "The energy needs are just going to be so high — by 2030, AI is going to consume 20% of [the] US electric grid, and that's a given."
> — [00:43:31](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=2611s)

**Context:** Stated as a certainty while arguing nuclear investment won't stop and DePIN has an "incredible opportunity" in the meanwhile.

### [energy] Type 1 civilization in his lifetime
> "We're going to really reduce the price of electricity to a point that [it's] going to be too cheap to meter — I think that's going to be a reality. I'm really excited about that because I want to see human civilization reach Type 1 status in my lifetime."
> — [00:45:41](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=2741s)

**Context:** On Wall Street money flowing into nuclear after Microsoft's Three Mile Island deal (uranium stocks jumped); cheap energy as the path to a Kardashev Type 1 civilization.

### [other] East AI vs. West AI
> "I think there's going to be a very fascinating East AI and West AI. I'm obviously bullish [on] West AI because we're more free people in general — I think freedom in thought is very important for innovation. West innovates, China replicates, and Europe regulates."
> — [00:51:32](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=3092s)

**Context:** On export controls pushing China to indigenous chips (Huawei at 7nm, rumored 5nm) and locally specialized models (image/video, surveillance-driven).

### [other] AI classism: those who use AI will outcompete those who don't
> "There's going to be, of course, classism, where people that know how to use AI are going to out-[compete] people that don't use AI. So then people that don't know how to use AI will have no other option [but] to use AI... like back in the day, [the] internet was the same thing."
> — [00:52:57](https://www.youtube.com/watch?v=3_gGBRqzxrQ&t=3177s)

**Context:** Closing growth-vs-degrowth argument; he calls AI "a time machine — it lets you buy back time" ([00:52:15]) and says he's writing more code than in years thanks to AI.
