---
id: 4xlOVeUXd90
title: Interchain.fm Ep. 15 Akash: Taking on AWS with Decentralized Cloud Computing
channel: Cosmos
date: 2021-04-09
duration_min: 68
url: https://www.youtube.com/watch?v=4xlOVeUXd90
type: podcast
greg_speaks: yes
oneliner: Interchain.fm interview - Akash origin story, marketplace mechanics, and Greg's vision of Teslas and home devices selling compute.
---

## Summary

Hour-long Interchain.fm interview (final episode) covering Akash end-to-end. Greg recounts his path: 25 years programming, AngelHack (helped launch Firebase), early Kubernetes adoption in 2015, discovering ~85% (sometimes 95%) of data center compute sits unused due to peak provisioning, and founding Akash in 2016 as an open-source marketplace — migrating from a custom chain to Tendermint to Cosmos SDK (deleting ~200K lines of code). He explains the reverse-auction marketplace flow (SDL files, bids, leases), clarifying Akash is a reputation-based rather than verifiable-compute platform, using third-party "audited attributes" — the "Airbnb versus Hilton" analogy for heterogeneous providers vs. Amazon's homogeneous service. Current economics: some users get 8x lower cost than Amazon ($1.80 vs. ~$16/month for a half-gig box), with Equinix Metal as anchor provider and ~8.2M underutilized data centers plus Ethereum's proof-of-stake GPU exodus as future supply. The centerpiece is Greg's D-web vision: every data center, GPU, and home device — "including Teslas," which he calls data centers on wheels — should sell spare cycles to a market, potentially earning enough to pay for the car itself, "just like the solar grid." He argues the cloud is the biggest impediment to AI (citing an a16z report that ~20% of AI companies' margins go to Amazon) and describes a power-grid model where AI companies sell idle GPU capacity back to the network. Other topics: IBC as enabler of an interoperable cloud paid in any currency (transfers "live in two weeks"), machine-triggered cross-chain deployments, content moderation devolved to providers (99 can refuse you, the 100th can host you), designing for failure with Skynet/Sia storage plus Handshake DNS, his side project "Mitra," a 1,000 AKT bounty for a decentralized Docker registry, compute futures markets, and HFT bots trading compute.

## Topics

decentralized cloud, cloud economics, gpu marketplace, ai compute costs, tesla, edge compute, home devices, kubernetes, cosmos, ibc, reverse auction, audited attributes, censorship resistance, decentralized storage, compute futures, proof of stake

## Predictions & Notable Claims

### [local-compute] Every home device and Tesla should sell spare compute to the market
> "Ideally all the data centers, all the GPUs and all the home devices — anything that can spare extra computer cycle should be available to a market they can use, including Teslas. Teslas are essentially like data centers on wheels. They have 200 computers and they're not being used in the evening and they're being charged. Imagine unlocking the GPU capacity."
> — [00:31:49](https://www.youtube.com/watch?v=4xlOVeUXd90&t=1909s)

**Context:** Asked for his D-web vision. When the host asks "in the future your Tesla is going to be able to mine Akash for you?" Greg answers "100%, there's no reason it shouldn't."

### [local-compute] Teslas will earn income mining compute — maybe enough to pay for the car
> "It 100% should mine, or offer their compute to a AI supercomputer... imagine connecting all the Teslas and securing a supercomputer to analyze weather patterns or scientific research... and maybe even pay for the Tesla itself — earn enough to actually pay for Tesla. So [it] creates an incredible amount of efficiency, just like the solar grid."
> — [00:32:33](https://www.youtube.com/watch?v=4xlOVeUXd90&t=1953s)

**Context:** Continuation of the Tesla thread — idle consumer hardware earning income by selling compute, explicitly analogized to distributed solar generation.

### [decentralized-ai] The cloud is the biggest impediment to AI
> "The biggest impediment for AI right now is the cloud. It's really bad — Amazon, sorry. A[ndreessen] Horowitz came out with a report indicating that about 20 [percent] of the companies that do AI, their margins go to Amazon. It's ridiculously expensive."
> — [00:33:18](https://www.youtube.com/watch?v=4xlOVeUXd90&t=1998s)

**Context:** Arguing that solving compute efficiency will make compute cost "second nature"; he adds ([00:33:59](https://www.youtube.com/watch?v=4xlOVeUXd90&t=2039s)) "once we can essentially unlock that... we're going to see a whole lot of new use cases that you can't imagine — that's the thing about future, you can't really picture it."

### [gpu-economics] Ethereum's move to proof of stake will flood the market with GPUs for AI
> "We have amazing opportunities with Ethereum network... coming off proof of work and going to proof of stake — that opens up a whole range of GPUs on the market, so that's significantly helpful for AI workloads."
> — [00:14:49](https://www.youtube.com/watch?v=4xlOVeUXd90&t=889s)

**Context:** Discussing future supply scalability alongside ~8.2 million underutilized data centers; predicted ~18 months before the Merge actually happened (Sept 2022).

### [gpu-economics] A power-grid model: AI companies sell idle GPUs back to the network
> "They could actually install Akash in their clusters and sell the underutilized... capacity back into the network like a power grid model, and earn tokens for that unused capacity, and when they want to use at peak... they can use these tokens... so in this case the provider itself becomes a payer, and that's really an ideal peer-to-peer GPU cloud that we really want to target."
> — [00:38:14](https://www.youtube.com/watch?v=4xlOVeUXd90&t=2294s)

**Context:** Noting AI companies buy in-house GPU clusters but use them only 2-3 hours a day for training; the electricity-grid framing recurs throughout Greg's later energy/compute talks.

### [cloud-decentralization] 85-95% of data center compute sits unused
> "Around eighty-five percent or so of compute that sits in this data centers remain unused, in some cases even ninety-five percent... the reason for that is planning for peak."
> — [00:02:10](https://www.youtube.com/watch?v=4xlOVeUXd90&t=130s)

**Context:** The founding observation from Overclock Labs' Kubernetes deployments that led to the Akash marketplace idea in 2016.

### [cloud-decentralization] Akash is 8x cheaper than Amazon today
> "Some of the users are getting eight times lower costs than Amazon... a half gigabyte box... cost[s] about 16 [dollars] a month; on Akash it costs about one dollar eighty cents... it's cheaper, it's faster, and it's censorship resistant, and no one can stop you from using Akash."
> — [00:08:30](https://www.youtube.com/watch?v=4xlOVeUXd90&t=510s)

**Context:** Explaining why blockchain projects (e.g., anonymity-preferring ThorChain) were early adopters — cost plus permissionlessness.

### [local-compute] The world's workloads are going ML/AI — that's where the Teslas come in
> "If you look at where the world is going, it's mostly in a... machine learning, A[I] style... that's where a lot of the data is getting processed and that's really where we want to see a lot of innovation happening. That's where the Tesla comes into play, because it's just message passing from one GPU cluster to another."
> — [01:00:17](https://www.youtube.com/watch?v=4xlOVeUXd90&t=3617s)

**Context:** Asked whether Tesla-style garage compute will replace big data centers; Greg says no — sensitive workloads (healthcare, financial) still need physically secured data centers, but ML-style GPU jobs suit distributed consumer hardware.

### [gpu-economics] A futures market and HFT bots for compute
> "We're working on futures as well — it's still early design — I think opening up, creating a futures market for compute will add efficiency. Futures generally add efficiency to pricing."
> — [01:05:57](https://www.youtube.com/watch?v=4xlOVeUXd90&t=3957s)

**Context:** Asked if bots will high-frequency trade compute across machines; Greg: "I totally imagine that would be high frequency trading for compute" ([01:06:38](https://www.youtube.com/watch?v=4xlOVeUXd90&t=3998s)) — Akash as "a decentralized exchange for compute."
