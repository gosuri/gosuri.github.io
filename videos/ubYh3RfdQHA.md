---
id: ubYh3RfdQHA
title: 1on1 Greg Osuri - Akash
channel: Jerry V Hall
date: 2023-10-28
duration_min: 48
url: https://www.youtube.com/watch?v=ubYh3RfdQHA
type: interview
greg_speaks: yes
oneliner: Deep 1-on-1 on compute as abstracted energy, the AI supercloud, GPU supply dynamics, and bringing GPUs from PlayStations to users.
---

## Summary

Hypercycle-sponsored one-on-one interview with Jerry V Hall, recorded around Akash's Mainnet 6 upgrade. Unusually conceptual: Greg defines compute as "a logical abstraction of energy" and walks through why heterogeneous compute can never be commoditized into a single unit (data centers measured in megawatts, CPUs in clock speed, GPUs in teraflops, Bitcoin in hashes) — likening GPUs to diamonds and explaining why Akash uses a bidding engine, not a matching engine. He indicts hyperscaler oligopoly (80% market control, stifled innovation like airlines and telcos) and warns that GPU gatekeepers optimizing for shareholders over humanity is "troubling," framing cloud as a public utility that must be people-owned. He retells the supercloud lineage — Cornell coined the term, Akash's 2018 whitepaper introduced the decentralized supercloud marketplace, "Akash I believe is the only supercloud" — now verticalized into the "AI supercloud" with H100s/A100s unavailable on big clouds. The most striking passage: decentralized networks can go where clouds cannot — "Akash can go to a PlayStation, to a refrigerator, anywhere a GPU exists" via GPU-over-IP. His favorite AI use case is healthcare (AI-assisted doctors seeing 100 patients a day instead of 10). Detailed GPU-market color: H100 ~9x faster than A100, GPT-4 (est. 1.1T parameters) trained on A100s, two-year Nvidia wait times, Nvidia deliberately routing chips to CoreWeave/Lambda over the clouds it sees as competitors, and Akash's five unobvious provider types (contract-relief startups, mining data centers, ex-Ethereum miners, ML companies leasing depreciated A100s for tax write-offs, arbitrageurs) — "Akash is a secondary market, like Airbnb." Ends with AKT's four utilities: security, governance, payments (with stable-payment fee capture), and incentives.

## Topics

ai supercloud, compute economics, energy, gpu marketplace, gpu supply chain, nvidia, heterogeneous compute, cloud oligopoly, healthcare ai, gpu over ip, akt tokenomics, cosmos

## Predictions & Notable Claims

### [energy] Compute is a logical abstraction of energy
> "The way I would describe compute is essentially a logical abstraction of energy. It is transforming energy, electricity, to logic, and there are different layers of that abstraction as we get higher towards this energy being consumed by a user."
> — [00:03:43](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=223s)

**Context:** Opening framework of the interview; data centers are still measured in kilowatts/megawatts, so compute markets are ultimately energy markets.

### [gpu-economics] Heterogeneous compute can never be fully commoditized
> "I don't think we will ever have a way to measure heterogeneous computing... you're never going to have a way to measure diamonds, for example... that's why Akash doesn't have a matching engine, it has a bidding engine — it really comes down to the user to select the provider because the variability is incredibly high."
> — [00:11:09](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=669s)

**Context:** Long exchange on units of compute; commoditization only works at high abstraction layers (hashes, teraflops), so no homogeneous order book is possible for general compute.

### [decentralized-ai] GPU gatekeepers serving shareholders, not humanity
> "If you're telling me the gatekeepers of this AI — which is essentially the people that have GPUs — are someone that has their shareholders' interest at their heart, versus the consumer or the society or humanity... [that] is troubling for me, a lot of us."
> — [00:15:29](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=929s)

**Context:** Arguing oligopolies (airlines, telcos, hyperscalers) stifle innovation, and AI raises the stakes because cloud "is the fabric that connects humanity."

### [cloud-decentralization] Cloud is a public utility — people first, not shareholders
> "A corporation is going to optimize for corporation; community is going to optimize for [community]. That's why decentralization leads to communal public utilities... if you consider cloud to be a public utility... it is very, very important that it is decentralized."
> — [00:16:13](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=973s)

**Context:** The promise of decentralized networks is reversing hyper-centralization by giving cloud users ownership and equity; cites Akash being 70-80% cheaper with chips unavailable on the cloud.

### [decentralized-ai] Akash is the only functional supercloud
> "We essentially theorized this supercloud idea in 2018 in a white paper called Akash Network... we were the first ones to even introduce the idea what a functional supercloud would look like, and Akash I believe is the only supercloud as far as I know."
> — [00:22:00](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=1320s)

**Context:** Traces "supercloud" to Cornell: reduce providers to mere resource providers and lift orchestration, fault tolerance, access control and observability into an open-source higher control plane; now verticalized as the "AI supercloud."

### [local-compute] Akash can go to a PlayStation, a refrigerator — anywhere a GPU exists
> "There's a whole movement right now happening with, instead of going to the GPU, bringing the GPU to you... a decentralized network can go places where a centralized cannot... Akash can go to a PlayStation, Akash can go to a refrigerator, Akash can go to anywhere a GPU exists and essentially bring that GPU to you using GPU-over-IP techniques."
> — [00:24:56](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=1496s)

**Context:** The clearest statement in this interview of his consumer/edge-device compute vision; starts with data-center GPUs where demand is, then expands outward.

### [gpu-economics] What happens with access to a million GPUs
> "Introducing them to additional type of GPUs will open up doors to, call it, innovation beyond imagination — like what can you do when you get access to a million GPUs that have significantly lower cost than what you would normally pay to either buy them or lease them elsewhere?"
> — [00:25:41](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=1541s)

**Context:** Immediately after the PlayStation/refrigerator passage; notes even OpenAI ("they make a billion dollars this year") is revenue-limited by GPU access, per Sam Altman's own admission.

### [local-ai] AI-empowered doctors: 10 patients a day becomes 100
> "Guess what — AI can do recollection way better than a human being. So using AI we can empower doctors: if a doctor is able to see 10 patients a day, they can now see 100 patients a day... The last thing I want is you go to a doctor and that doctor is unable to see you because he or she doesn't have access to a GPU. That is not okay in my book."
> — [00:27:07](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=1627s)

**Context:** His flagship AI-supercloud use case: eight billion people lack adequate healthcare because diagnosis is bottlenecked on human doctors.

### [gpu-economics] Nvidia is deliberately depowering the big clouds
> "Nvidia consider these cloud [providers] to be competitors... Nvidia is very, very aware and are optimized to remove power from the big guys... they are distributing the chips to smaller providers — be CoreWeave, be Lambda... CoreWeave has about 35,000 H100s, way more than Google ever has."
> — [00:36:51](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=2211s)

**Context:** Explaining why startups can't get H100s on big clouds (Google TPUs, Amazon/Microsoft chip efforts made them Nvidia's rivals); dated Oct 2023 market intelligence.

### [gpu-economics] Akash is the Airbnb of GPU contracts
> "Akash is a secondary market — it is like Airbnb... you'll get an apartment for a year because there's no other way to get them, and now what do you do the 11 months of the year when you're not in the apartment? You lease it out."
> — [00:38:17](https://www.youtube.com/watch?v=ubYh3RfdQHA&t=2297s)

**Context:** Startups forced into year-long prepaid GPU contracts offload unused capacity on Akash; one of five provider types he lists, including miners post-merge and ML firms leasing depreciated A100s for tax advantages.
