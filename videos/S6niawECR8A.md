---
id: S6niawECR8A
title: Hash Rate - Ep 050 - Akash Decentralized Cloud - Greg Osury
channel: Hash Rate Podcast
date: 2024-05-20
duration_min: 61
url: https://www.youtube.com/watch?v=S6niawECR8A
type: podcast
greg_speaks: yes
oneliner: Mark Jeffrey interview with live demo — Akash as permissionless supercloud, Nvidia vs hyperscalers, power as the real bottleneck, agents paying in crypto.
---

## Summary

Hash Rate episode 50 with Mark Jeffrey, mixing explainer, live demo, and GPU-market analysis. Greg corrects the "CEO of Akash" framing (Akash has no CEOs; ~500 people build it) and pitches Akash as the world's first open, permissionless supercloud: "What AWS did for Amazon is what Akash is doing for the rest of the world." He argues open source (Kubernetes) eroded AWS's proprietary lead, and that in AI no incumbent has a moat because Nvidia — "the mac daddy now" — controls chip distribution and deliberately deprioritizes hyperscalers in favor of smaller diversified customers, having failed at its own DGX Cloud because it couldn't secure power for a 20MW data center. That leads to his recurring claim that power, not compute, is the real scalability bottleneck, and that "decentralization of power is very needed." He describes hyperscaler GPU scarcity (year contracts, 25-50% upfront, three-month waits killing startups like Banana.dev), Akash customers (Nous Research training on Akash, Bittensor subnets, Thumper's from-scratch foundation model on 24,000 A100-hours, Morpheus fully on Akash), audited-vs-anonymous providers (a HIPAA-compliant healthcare customer), and why crypto payment beats "arcane" 40-year-old credit-card rails — including the unbanked billion and an African student whose first cloud was Akash. The host raises AI owning crypto wallets; Greg agrees agents will pay in crypto and jokes Akash translates to "Skynet." Live demo: deploying Tetris via SDL on Foundry for ~$2/month, then a first-attempt Llama 3 deployment on an H100 (slow to warm up but ultimately working), showing 79-80 active providers and ~230 validators. Ends plugging the first Akash Accelerate conference and an Austin decentralized-AI hub with UT.

## Topics

decentralized cloud, supercloud, gpu marketplace, nvidia, hyperscalers, energy, power bottleneck, ai agents, crypto payments, permissionless, live demo, llama 3, open source, bittensor, nous research, financial inclusion

## Predictions & Notable Claims

### [energy] The real bottleneck is power, not compute
> "The real bottleneck for scalability is not compute at a scale, it's really the power... and power is heavily regulated in the United States... decentralization of power is very needed."
> — [00:07:57](https://www.youtube.com/watch?v=S6niawECR8A&t=477s)

**Context:** Explaining why Nvidia's DGX Cloud "failed miserably — they couldn't secure enough power to do a 20 megawatt data center"; decentralized deployment sidesteps concentrated power requirements.

### [gpu-economics] Nvidia is deprioritizing hyperscalers by design
> "They will not give it to you if you're hyperscaler. They'll only give it to you if you purchase smaller units, because they want more customers, they want more diversified customer base... they're deprioritizing clouds."
> — [00:06:29](https://www.youtube.com/watch?v=S6niawECR8A&t=389s)

**Context:** Why "no one has the stronghold" in AI cloud: hyperscalers competed with Nvidia (TPUs etc.), so Nvidia invests in CoreWeave/Lambda-style smaller clouds instead — structurally favoring fragmentation and Akash.

### [cloud-decentralization] What AWS did for Amazon, Akash does for the world
> "What AWS did for Amazon is what Akash is doing for the rest of the world."
> — [00:02:52](https://www.youtube.com/watch?v=S6niawECR8A&t=172s)

**Context:** After the TurboTax/holiday-surge analogy: enterprises use ~5% of their capacity, and Akash monetizes the idle 95% just as Amazon monetized its post-dot-com overbuild.

### [ai-agents] Agents are going to use crypto, no doubt
> "Agents are going to use cryptos, no doubt."
> — [00:28:06](https://www.youtube.com/watch?v=S6niawECR8A&t=1686s)

**Context:** Host observed crypto is the only money an AI can directly own — an AI could requisition its own compute on Akash but never on Amazon. Greg agrees emphatically, then delivers the Skynet line.

### [decentralized-ai] An unstoppable machine-run GPU network
> "What happens when you have an unstoppable GPU network that functions only on crypto, where when machines are used there's no way to tell who [is] the machine or a human, and when machines are used no one can stop them."
> — [00:28:52](https://www.youtube.com/watch?v=S6niawECR8A&t=1732s)

**Context:** Half-joking riff that "Akash Network" translates to "Skynet" (Akash = sky in Sanskrit) — but framing the serious thesis of permissionless, agent-usable compute.

### [crypto-depin] The unbanked billion will be Akash's next users
> "There are about a billion people in the world that don't have credit cards, and that means they don't have access to the cloud... it's easy to see the future generation that's unbanked, that's getting used to using crypto as a primary way to pay for things, are going to be Akash users. It is the future, it is the next generation."
> — [00:31:04](https://www.youtube.com/watch?v=S6niawECR8A&t=1864s)

**Context:** Told via the story of an African student whose first-ever cloud deployment was on Akash after someone sent him tokens on Twitter; cites Africa's demographics.

### [decentralized-ai] First foundation model trained on a decentralized network
> "Thumper is another startup that did a full foundational model training from scratch on Akash using 24,000 A100 hours, which is a first example, I think, a decentralized network is used to train a foundation model. It took about two months to train."
> — [00:16:30](https://www.youtube.com/watch?v=S6niawECR8A&t=990s)

**Context:** Listing AI users; also claims Nous Research is "one of the biggest users of Akash" and believed to be training their next model on it.

### [open-source-ai] With Llama 3, open source caught up to closed source
> "With Llama 3, open source has gotten as powerful as closed source now, so there's nothing that has to stop [us] now."
> — [01:00:47](https://www.youtube.com/watch?v=S6niawECR8A&t=3647s)

**Context:** Closing remark while plugging the Akash Accelerate decentralized-AI conference and the Austin/UT decentralized AI hub; Llama 3 had launched the day before his demo.

### [other] Products win when value exceeds cognitive load
> "It is not always the easiest-to-use products [that] win. It is usually the products that have cognitive coefficiency of over one... if the value perceived over cognitive load required is greater than one, the product will be successful."
> — [00:37:37](https://www.youtube.com/watch?v=S6niawECR8A&t=2257s)

**Context:** His Vim analogy for why Akash's crypto/container friction doesn't block adoption when GPUs are otherwise unobtainable; pairs with "with closed source you can move really fast, but with open standards and open protocols you can go much further" ([00:33:55]).
