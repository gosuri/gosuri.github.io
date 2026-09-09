---
id: pod-at-stake-greg-osuri-akash-network
title: Greg Osuri - AKASH Network
channel: At Stake
date: 2020-12-16
duration_min: 37
url: https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042
type: podcast
greg_speaks: yes
oneliner: Pre-mainnet-2 interview on Akash's mission to break the cloud oligopoly, Supermini home devices, Cosmos/IBC, and community growth.
---

## Summary

Host Ken of the At Stake podcast interviews Greg Osuri shortly before Akash's Mainnet 2 launch. Greg recounts his path: 25+ years programming, founding AngelHack (which he calls the world's largest hackathon-based accelerator, ~150,000 developers in ~50 cities, helping launch Firebase), early Kubernetes/Docker contributions, and discovering blockchain around 2015 as a data structure suited to state-consistent edge computing ("when you mix BitTorrent and Git, you end up with a blockchain").

He frames Akash's mission as breaking the cloud "oligopoly" of Amazon, Google, Microsoft and Alibaba by unlocking idle data-center capacity — he claims north of 85% of capacity sits idle across roughly 8.2 million data centers, citing examples like automotive GPU clusters used two hours a day and Intuit's seasonal utilization swings. He argues the sleeper advantage of decentralized cloud is user experience, comparing Akash's non-custodial deployment flow to Uniswap versus a centralized exchange, and describes the SDL (Stack Definition Language) plus the Awesome Akash repo (recent testnet: ~3,800 deployments, ~450 unique developers).

Extended discussion of the Supermini — a consumer Raspberry Pi-class Kubernetes device inspired by Helium — as "plug and earn" hardware to bring cloud into homes, and of censorship-resistant cloud for oppressed regions. On Cosmos: why they chose Tendermint in 2017 (Go stack, sovereign chains, values), deleting ~150,000+ lines of custom code by adopting the Cosmos SDK, and IBC plans centered on multi-currency settlement (paying for compute in stablecoins like Kava's USDX). He closes with the vision of Akash as a "gateway to the decentralized cloud" interoperating with Handshake, NuCypher and Filecoin, and teases the Mainnet 2 launch "early next year" (it launched March 2021).

## Topics

decentralized cloud, cloud oligopoly, idle capacity, supermini, home compute, cosmos sdk, ibc, stablecoin payments, censorship resistance, developer experience, incentivized testnet, community building

## Predictions & Notable Claims

### [cloud-decentralization] Akash's mission is to break the cloud oligopoly
> "Cloud infrastructure, the backbone of the internet, it's getting increasingly centralized. It's controlled by the monopoly of literally four companies... you pay the cloud tax, the Amazon tax, we call it, invisibly. And the mission of Akash is to really break the logopoly."
> — [00:05:16](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** Opening framing of Akash; "logopoly" is Whisper's rendering of "oligopoly." Continues into the peer-to-peer marketplace pitch for "resilient and unstoppable applications at a much lower cost."

### [gpu-economics] 85%+ of data-center capacity sits idle across ~8.2 million data centers
> "Usually we're looking at north of 85% of capacity that sits idle in these data centers... a lot of them happen to be like GPU clusters as well... they use these massive clusters to design cars... but they only use them like two hours tops a day... All in all, there are about 8.2 million data centers in the world with excess capacity that is just sitting idle."
> — [00:06:02](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** His core supply-side thesis (spans the 00:06:02–00:07:45 blocks): unlocking underutilized enterprise capacity (Honda-style GPU clusters, Intuit's 97%-at-tax-season/2-3% off-season swing) naturally undercuts hyperscaler pricing.

### [local-compute] "Plug and earn" — getting cloud into consumers' homes with the Supermini
> "I was like, okay, how can we get cloud in the hands of consumers?... If you wanted to build something that is plug and earn, right? Not like the best and most powerful device, but the best in terms of usability."
> — [00:19:34](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** Origin story of the Supermini, a Raspberry Pi Kubernetes cluster in consumer packaging, explicitly modeled on Helium's in-home node — an early articulation of home hardware earning income from compute.

### [local-compute] True decentralization requires a device in the home
> "To achieve true decentralization, we need a home with the device, right? Like, so we were like, well, how would a generic Kubernetes cluster that you can schedule any workload at home look like?"
> — [00:20:30](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** Whisper garbles the phrase slightly ("a home with the device" — likely "a device in the home"); the argument is that home-hosted nodes, not data centers, are the end state of decentralization.

### [cloud-decentralization] A world where the cloud runs on Superminis in people's homes
> "Building a free and open cloud is very, very important. And extending that to regions that experience oppression is very, very important... So you can imagine a world where people host their own super minis in different parts of the world and run the cloud on those super minis. That's a fantastic outcome, right?"
> — [00:22:57](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** Answering a question about censorship resistance; ties home compute to unstoppable, censorship-resistant services (messaging in oppressed countries) and to peers like Orchid and Sentinel.

### [cloud-decentralization] Non-custodial UX: a "Uniswap for cloud deployments"
> "That is a power of non-custodial interfaces... extending that similar experience for cloud is amazing... We don't have a web interface yet, but you can kind of see how that will turn out to be like a Uniswap for like cloud deployments."
> — [00:13:13](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** He calls user experience the "unrealized benefit" of decentralized cloud, bigger than the cost advantage — a recurring UX-first argument.

### [crypto-depin] Compute will be paid for in stablecoins, not volatile tokens
> "There will be some friction, I would imagine, for using Akash tokens to pay for compute. So to alleviate that friction, we wanted to introduce stable currencies... using USDX to pay for cloud compute is the first use case for IBC that we really want to, like, get out."
> — [00:30:19](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** IBC discussion (spans into the 00:31:05 block); multi-currency settlement via Kava's USDX framed as Akash's first IBC use case. Akash did later add USDC settlement (2023).

### [cloud-decentralization] Akash as the gateway to a "Cambrian explosion" of decentralized cloud
> "We envision Akash to be in that forefront as a gateway to the decentralized cloud... I think we're just seeing a Cambrian explosion of decentralized dCloud or dWeb... of projects that are actually shipping products today... the next step for us as an industry is to figure out how to reduce friction for adoption."
> — [00:33:23](https://podcasts.apple.com/us/podcast/greg-osuri-akash-network/id1543138052?i=1000502539042)

**Context:** Vision of Akash orchestrating Handshake (DNS), NuCypher (key management), Filecoin (storage) behind one interface with unified payment — "hyper-connected and hyper-interoperable decentralized cloud."
