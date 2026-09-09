---
id: YAOp0b8Bb6k
title: [Solo Talk] Decentralization is saving AI where centralization failed by Greg Osuri
channel: Kryptoplanet[Official]
date: 2024-07-22
duration_min: 23
url: https://www.youtube.com/watch?v=YAOp0b8Bb6k
type: keynote
greg_speaks: yes
oneliner: Conference keynote with live demo: Greg argues crypto is saving AI from its GPU supply crisis, deploying an LLM on an A100 from his phone.
---

## Summary

Solo conference talk where Greg argues "AI is in trouble and crypto is saving it." He opens with his open-source credentials (top-trending Go developer; his Kubernetes libraries used by Nvidia, AWS, IBM, Docker, and the US Department of Defense — including Nvidia's Kubernetes device driver). Citing the 2023 Semafor article about a Cornell student who couldn't get GPUs from Amazon but found A100s on Akash for ~12 cents, he details why GPUs are nearly impossible to lease on demand: hyperscalers gatekeep behind year-long contracts, CoreWeave/Lambda demand million-dollar minimums with months of lead time, Nvidia direct takes ~2 years plus a "coolness factor," and TSMC's fab pipeline can't keep pace with 18-month chip cycles. Meanwhile "free GPUs are everywhere" — crypto miners like Foundry sitting on A100s, ML companies' older fleets idled by upgrades, and training-cycle downtime. He explains Akash's reverse-auction marketplace (H100s ~$0.34/hr, A100s ~$0.70/hr), its open-source governance (500 contributors, ~$30M-class public goods fund, proposals from UT Austin, MIT, UIUC professors), and integrations: Nous Research training on Akash, Brev ("the Firebase of AI"), and Prime Intellect doing federated learning based on Google DeepMind's DiLoCo paper for heterogeneous distributed training. He then live-deploys Mistral via Ollama on an A100 from his phone on one bar of signal in ~90 seconds, "without permissions, without logins, without credit cards." In Q&A he candidly admits demand is low because wallet friction yields <0.5% activation conversion, and predicts upcoming "trial wallets" (via authz/feegrant) will be "a bigger unlock than GPUs."

## Topics

gpu scarcity, decentralized ai, gpu marketplace, crypto saving ai, live demo, federated learning, diloco, open-source governance, wallet friction

## Predictions & Notable Claims

### [gpu-economics] GPUs are nearly impossible to lease on demand
> "GPUs are nearly impossible to lease on demand. So today if you were to go to hyperscalers... basically they ran out of all the A100 and H100s that you can give, and if they do, they gatekeep them. So they don't give it to you just because you are paying on demand — you got to pay one year up front and maybe if you're lucky you'll get some."
> — [00:05:03](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=303s)

**Context:** Core argument for why AI startups fail: they can't iterate when chips require year-long contracts, million-dollar minimums, or two-year Nvidia waits.

### [crypto-depin] Akash saw the GPU era coming in its 2018 whitepaper
> "Akash is a radically new way to share compute. We wrote the white paper in 2018 — we talked about GPUs in 2018 but people didn't pay attention. They think GPUs came in 2024."
> — [00:10:45](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=645s)

**Context:** Claiming foresight: idle GPUs from miners (Foundry), ML fleet upgrades, and training downtime were always the network's target supply.

### [decentralized-ai] Akash is the only network offering on-demand H100s at reasonable prices
> "The best part of it is it's on demand. It's the only network right now that can offer on-demand H100s at a reasonable price... there are networks that could do on demand, but not general purpose compute, so Akash is the only general purpose platform."
> — [00:11:30](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=690s)

**Context:** Describing the reverse-auction order book; he cites live pricing of H100s around $0.34/hr and A100s around $0.70/hr.

### [decentralized-ai] Federated learning on distributed clusters is live via Prime Intellect and DiLoCo
> "We had Prime Intellect that did an integration with Akash and doing federated learning, based on a new paper called DiLoCo, which is by Google DeepMind, that really talks about how can you do heterogeneous training on distributed clusters... and running on Akash right now."
> — [00:14:21](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=861s)

**Context:** Presented as evidence decentralized training is becoming practical on heterogeneous, distributed compute.

### [cloud-decentralization] Akash never breaks — more alive than AWS
> "I'm always confident because Akash never breaks. It never does. It's been around for 4 years. It is more alive than Amazon Web Services, and I take that."
> — [00:15:48](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=948s)

**Context:** Setup for the live demo — deploying Mistral on an A100 from his phone on stage in about 90 seconds.

### [other] Trial wallets will be a bigger unlock than GPUs
> "We have a 0.5% — less than 0.5% — conversion rate for activation... but guess what, we solved it. We have a new update coming in a couple of months called trial wallets... I think these trial wallets are going to be a bigger unlock than GPUs for Akash."
> — [00:20:58](https://www.youtube.com/watch?v=YAOp0b8Bb6k&t=1258s)

**Context:** Q&A answer on why absolute demand is still low: wallet installation and AKT acquisition friction; authz + feegrant modules enable preloaded trial wallets to convert "a Google ad user." (Prediction quote concludes at [00:22:25].)
