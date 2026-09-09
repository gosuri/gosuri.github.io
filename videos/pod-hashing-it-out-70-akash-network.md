---
id: pod-hashing-it-out-70-akash-network
title: "Hashing It Out #70 - Akash Network - Greg Osuri"
channel: Hashing It Out (The Bitcoin Podcast Network)
date: 2020-01-12
duration_min: 64
url: https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743
type: podcast
greg_speaks: yes
oneliner: Technical pre-mainnet interview: marketplace economics, reverse auctions, web-of-trust reputation, and the Supermini home supercomputer pitch.
---

## Summary

Hosts Dr. Corey Petty and Colin Cusce interview Greg Osuri in Akash's testnet era (pre-mainnet, early 2020). Greg recounts learning to program from books on an Indian farm, IBM data-center work, AngelHack (150,000 developers, 50 cities, launching Firebase), and his 2013 turn to the deployment problem via Linux containers, Docker and Kubernetes (meeting Kubernetes creator Joe Beda). Akash's origin: ~85% of capacity across 4.8 million data centers sits unused (peak planning — TurboTax at 97% utilization in tax season, 3% otherwise — plus homogeneous single-function server architectures), while three cloud providers arbitrage access. The marketplace design is "Git with trustability features," which "if you add trustability to Git, blockchain happens."

The hosts push on hard technical questions. Provider range spans Raspberry Pis to mega data centers; biggest demand is machine learning ($500K-$12M/yr cloud spenders), with claimed costs 4-5x (up to 8-9x) below cloud. On latency: batch-optimal workloads tolerate remote residency when cost dominates; latency-sensitive jobs choose nodes explicitly. He explains his "Bootstrapping a free market by borrowing from the future" paper — subsidize supply via inflation so cost attracts demand — and an adaptive inflation model tied to staking duration across bull/bear markets, plus multi-currency settlement (BTC, USDC) so users needn't hold AKT. On verification he is candid: you can't practically prove hardware claims, so Akash uses a PGP-like web-of-trust/reputation model (benchmarks-as-Yelp-reviews), with a ~20% validator take fee making Sybil attacks on competitors' reputations expensive.

The formerly missing mid-episode span (00:19:00-00:30:50, recovered via re-transcription) covers: Akash's flexible placement model — users choose local-residency clusters for latency-sensitive jobs then switch to cost-optimal ones, tier-2 cloud providers already plugging in, and SDL ("stack definition language") orchestrating "simple cloud functions to very advanced deep learning" across multi-regional clusters in one file; why verification of general-purpose compute is "next to impossible, almost impractical," motivating the web-of-trust model; SGX as a live primitive on Akash (bring-your-own runtime, Anjuna recommended, a demo of key-dumping on non-SGX Amazon); and Overclock's business model — sell hardware (Supermini) and managed services, since "tokenized open source software" is a brand-new third open-source business model nobody has fully figured out how to monetize.

The closing segment is a detailed Supermini pitch: a home "mini supercomputer" more powerful than a classic Cray, ~110% first-year ROI, an app-store model (Eth2 staking, Orchid/Sentinel VPN nodes, Matrix servers), and an inference layer for Helium's LoRa IoT network — "edge infrastructure that skips the big telcos and the big clouds altogether." First 15 units shipping in five weeks, ~100 in May. He also laments that 60% of Ethereum nodes run on AWS, argues physical deployment determines real decentralization, and plugs the upcoming incentivized testnet. Transcript note: the former 00:19:22-00:30:50 gap and the loop at ~00:40:45 (Greg's partially lost reply on reputation-weighted challenges) have been repaired from a re-transcription; remaining artifacts are minor.

## Topics

decentralized cloud, idle capacity, marketplace economics, token inflation, reverse auction, reputation systems, supermini, home compute, edge inference, helium, matrix, sovereignty, ethereum on aws, machine learning workloads, sgx, multi-cloud, sdl, tokenized open source

## Predictions & Notable Claims

### [gpu-economics] 85% of capacity in 4.8 million data centers is unused
> "There is a ton of capacity sitting in data centers. About 85% of the capacity sitting in 4.8 million data centers is not used... there's this incredible capacity that's not being used. And there is this, you know, a few companies that are capitalizing on knowledge. And we felt that it was fundamentally broken."
> — [00:06:06](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** The founding thesis; causes given at 00:08:39: peak planning (TurboTax 97% vs 3% utilization) and homogeneous single-purpose server architectures.

### [crypto-depin] Bootstrap the marketplace by "borrowing from the future"
> "My thesis was, in a two-sided marketplace, the first challenge the market has to solve is the demand supply paradox. What comes first?... when you bootstrap supply to a point that it's extremely attractive to the demand — let's say cost, for example — the demand side will catch up... really, you're borrowing from the future to bootstrap the present."
> — [00:30:22](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** Summarizing his paper "Bootstrapping a free market by borrowing from the future" (quote spans the 00:31:06 and 00:31:48 blocks): inflation-funded supply subsidies de-risk providers until network effects arrive — the template later used for Akash's provider incentives.

### [gpu-economics] Compute can't be commoditized — "it's like diamonds, not like gold"
> "Every attempt to price compute has ended up in an utter failure, EOS being I think a big example... Every time you commoditize something, turns out... there's always going to be room for people to cheat... compute is very, very hard to commoditize. Instead of trying to commoditize, [we] create a free market that's driven by auction... it's like diamonds and it's not like gold."
> — [00:37:34](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** Why Akash uses reverse auctions instead of fixed pricing (spans into the 00:38:20 block); he's equally candid that hardware claims can't practically be proven, hence the web-of-trust reputation model (00:39:04).

### [local-compute] The Supermini pays for itself in year one — ~110% ROI
> "Super mini is... a home appliance that is essentially a mini supercomputer... in simple terms, it makes you more money [than] you spent purchasing the device in the first year. So the ROI is expected to be somewhere around 110% in the first year... it gives you a mechanism to bring the cloud to your house."
> — [00:45:56](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** A quantified home-compute-earns-income prediction (spans into the 00:46:41 block); he compares its power to a classic Cray supercomputer ("as powerful as a Cray 70") and lists an app-store model with Eth2, Orchid and Sentinel VPN nodes runnable "from the comfort of your couch."

### [local-compute] Home devices + Helium = edge infrastructure that skips telcos and clouds entirely
> "Super mini, when it's connected to a Helium device, provides an inference layer because a lot of these [IoT] devices are super low-powered... So imagine now you're essentially creating an edge infrastructure that skips the big telcos and the big clouds altogether. So that significantly reduces the cost envelope when it comes to deploying these edge IoT devices."
> — [00:48:07](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** Early (Jan 2020) articulation of home hardware doing AI inference at the edge for mesh-network IoT (quote spans into the 00:48:53 block) — years before the "local AI" framing became mainstream.

### [local-compute] Home-to-home encrypted services that skip the cloud altogether
> "If you're someone that cares about sovereignty and privacy, having super minis at home gives you this opportunity to control your own data... imagine having super minis in your house and my house and we both running matrix on it and we can connect directly in a peer-to-peer manner and have voice over IP, fully secure communications... that skips the cloud altogether."
> — [00:49:34](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** The data-sovereignty use case (quote spans into the 00:50:16 block); he calls this "building the next layer of the web, the web 3 for the edge."

### [cloud-decentralization] 60% of Ethereum nodes run on AWS — that's not decentralization
> "60% of Ethereum nodes are running on AWS right now, which is kind of sad... it doesn't really matter how decentralized the network is, [it] really comes down to your physical deployment. If you're running on Amazon, I don't consider that decentralized at all, especially when the majority of your network is running on a single cloud provider."
> — [00:58:06](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** His motivation for DISCO (decentralized infrastructure for serverless computing operations) and home nodes (quote spans into the 00:58:49 block); he adds that with physical access and no SGX, an adversary intending to shut Ethereum down could do it "in a matter of minutes" (00:59:31).

### [gpu-economics] For batch workloads, cheap enough compute makes latency irrelevant
> "It really comes down to price performance. So when you have a price performance metric, where the cost is insignificant, latency becomes insignificant as well... when you do batch optimality... the requirement really is driven by cost. So our thesis is the cost is exponentially lower, about like eight times, nine times lower, latency becomes less important for batch optimal workloads."
> — [00:18:21](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** Answering the HPC-background host's challenge about distributed clusters lacking fast interconnects (quote spans into the re-transcribed 00:19:00 block) — the argument that ML/batch jobs would tolerate decentralized placement, which presaged Akash's ML-first demand profile.

### [cloud-decentralization] Akash gives placement sovereignty to the user — and clouds themselves plug in
> "What Akash does really is open up the market to these massive clusters, to small little deployments all over the world and gives the sovereignty to the user to choose what they want. And of course, the multi-cloud architecture in Akash also means that cloud companies plug into Akash directly, which they're doing right now."
> — [00:19:50](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** From the recovered mid-episode span: latency-sensitive jobs can pin local-residency clusters, then "switch over to a more cost optimal deployment" (00:20:36); he says tier-2 cloud providers were already plugging in, framing Akash as additive multi-cloud rather than a cloud replacement.

### [other] Open-source SGX runtimes will arrive within a year
> "We haven't seen any major open source implementation for SGX yet. So I think the technology is like still early and under development. But that's, I'm pretty certain that's going to change in like the next year."
> — [00:26:28](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** From the recovered span (quote ends in the 00:27:12 block), discussing SGX as a live primitive on Akash (bring-your-own runtime; he recommends Anjuna's, notes MobileCoin building one) — a dated, checkable early-2020 forecast on confidential-computing tooling.

### [crypto-depin] Tokenized open source software is the third open-source business model
> "So far, the business models for open source software have been primarily subscription driven and open core driven. But now we're experiencing the third business model, which is tokenized open source software, we call it, where it has this incredible incentive layer, the token layer on top of the open source platform... So how do you monetize? A lot of us are still trying to figure that out, to be honest with you. And our solution is [selling] hardware."
> — [00:28:47](https://podcasts.apple.com/us/podcast/hashing-it-out-70-akash-network-greg-osuri/id1000457699?i=1000462229743)

**Context:** From the recovered span (quote spans into the 00:29:29 block), answering "how do you make money?": Overclock profits only if the network succeeds — via Supermini hardware sales and managed services ("setting hardware" is Whisper for "selling hardware"). An early articulation of the tokenized-OSS sustainability thesis he later repeats.
