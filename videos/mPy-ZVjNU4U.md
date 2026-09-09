---
id: mPy-ZVjNU4U
title: More than Decentralised Compute | Converge @ EthCC 2024
channel: Caladan
date: 2024-07-29
duration_min: 28
url: https://www.youtube.com/watch?v=mPy-ZVjNU4U
type: panel
greg_speaks: yes
oneliner: EthCC 2024 panel where Greg frames cloud rents as feudalism, compute as a common good, and decentralization as the only way to scale.
---

## Summary

A Converge @ EthCC 2024 panel (Caladan) on decentralized compute with Greg Osuri (Akash), Mark (Aethir), Ju (Nine.ai/N-Power), and JW (Heurist). Greg introduces Akash as "the world's first open source supercloud" and the only place for permissionless, high-density on-demand GPUs, powering Venice AI (Erik Voorhees) and Brave. Asked why decentralized compute matters, Greg gives a three-part answer: (1) anti-feudalism — citing an a16z study that ~50% of money paid for online services goes to an unknown cloud provider, he calls this an unelected "tax" and says compute should be a common good with permissionless access; (2) technological scale — removing centralized schedulers/control planes enables unlimited peer-to-peer scaling; he contrasts Akash's four years without an unplanned outage against Amazon going down "100 times" in a year, breaking Uber and DoorDash; (3) open-source sustainability — Docker's failed SaaS business model versus Akash's ~500 contributors, including professors from MIT, Cornell, UT, and Illinois sustained by network grants. On marketplace dynamics he says supply is largely solved by incentives ("if you give money to people, they will supply") while H100 training supply improves but inference-class A100s/4090s tighten; the hard side is demand — ML researchers don't own Bitcoin, wallet installs and gas fees kill onboarding (30 minutes per user), and GPU-host fraud breeds skepticism. He previews "trial wallets" (account abstraction) to fix activation and predicts a significant demand increase within months, noting A100s at ~80 cents are an easy sell. Other panelists cover asynchronous training/federated learning as decentralization's foundation, supply-led marketplace strategy, and inference privacy (encryption in transit, private model hosting).

## Topics

decentralized compute, supercloud, cloud oligopoly, gpu marketplace, gpu economics, onboarding friction, account abstraction, open source sustainability, ai inference, depin, venice ai

## Predictions & Notable Claims

### [cloud-decentralization] The cloud is an unelected tax — "we need decentralization to avoid feudalism"
> "The a16z did a study... that said something like 50% of your money that you pay for online services goes to a cloud provider that you have no idea who it is. Compute is the fabric that holds a modern society together, and compute is foundation for AI. If you think that you're going to have to pay a tax to someone that you have no idea who it is, you're not elected — we used to do that when society was feudalistic. So we need decentralization to avoid feudalism, that's the simple answer. And we believe compute should be a common good; it should not be in the hands of few."
> — [00:07:12](https://www.youtube.com/watch?v=mPy-ZVjNU4U&t=432s)

**Context:** Answering "why do we need decentralized compute?" — his recurring feudalism framing plus the demand for permissionless access ("a world that I'm not willing to accept" is needing massive deals with cloud providers).

### [cloud-decentralization] No other way to scale globally than decentralization; hyperscalers keep failing
> "When you remove the need for a centralized scheduler or a centralized control plane... and you go to a fundamental peer-to-peer manner, you can scale unlimited... One of the reasons Akash has been around for 4 years and hasn't had a single outage except for the planned upgrades is because it's foundationally [decentralized]... During last one year Amazon went down 100 times — when it goes down you can't order your Uber or your DoorDash. Is that the foundation that we want to build our AI [on]?... From a technological standpoint, I think there is no other way to scale at a global scale other than decentralization."
> — [00:08:35](https://www.youtube.com/watch?v=mPy-ZVjNU4U&t=515s)

**Context:** Second pillar of his argument; he adds he confidently demos live on stage because "this will never fail."

### [open-source-ai] Decentralization is the sustainable business model open source never had
> "Docker, as a company — a tool which everybody uses... couldn't survive; it raised a billion-dollar valuation, it took the web-two style of SaaS businesses, but that doesn't play out well for open source software. How do you have a sustainable model for open source software? Well, decentralization... We have about 500 contributors, and that's not possible using traditional centralized systems."
> — [00:10:02](https://www.youtube.com/watch?v=mPy-ZVjNU4U&t=602s)

**Context:** Third pillar: network incentives fund contributors — he cites professors from MIT, Cornell, UT Austin, and Illinois getting grants from the network and publishing open research.

### [gpu-economics] Supply is solved by incentives; demand-side onboarding is the real bottleneck
> "It was supply before, but supply is actually getting better... supply is getting better for training — H100s — but not so for inference, like A100s or 4090s; it's getting tighter... but incentivization can go far — if you give money to people, they will supply. That's not a big of a problem. But it's really on the demand side... delivering demand in a non-custodial permissionless manner is very challenging... the majority of the machine learning researchers have no idea what crypto is and don't really care about crypto — they don't even own Bitcoin."
> — [00:14:25](https://www.youtube.com/watch?v=mPy-ZVjNU4U&t=865s)

**Context:** Asked which marketplace side is harder to grow over the next 1–2 years. He admits onboarding takes him personally 30 minutes per user and notes widespread GPU-host fraud (providers advertising H100s/A100s that don't exist).

### [gpu-economics] Trial wallets will unlock a significant demand increase within months
> "The way trial wallets work is very simple: you get a trial wallet for every user that comes — that alleviates the need to install a wallet or get some AKT to deploy. So we think that's going to significantly increase activation rate... In the next couple of months we're going to see a significant increase in demand for Akash because we can solve this problem. It's easy to convince anybody to come and look at you when you say you have A100 for 80 cents... but it's really hard to get a user to use you."
> — [00:18:02](https://www.youtube.com/watch?v=mPy-ZVjNU4U&t=1082s)

**Context:** Previewing account abstraction (a term he says he hates) and defining "activation" as the user running nvidia-smi and seeing their GPU. Notable price point: A100s at ~$0.80/hr on Akash in mid-2024.
