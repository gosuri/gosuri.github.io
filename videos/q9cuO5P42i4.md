---
id: q9cuO5P42i4
title: Messari Happy Hour Ep11
channel: Messari
date: 2023-02-01
duration_min: 46
url: https://www.youtube.com/watch?v=q9cuO5P42i4
type: podcast
greg_speaks: yes
oneliner: Messari Twitter Spaces with analyst Sami Kassab and Greg on Tornado Cash sanctions, crypto's centralization problem, and Akash's roadmap.
---

## Summary

Messari "Happy Hour" Twitter Spaces with research analyst Sami Kassab interviewing Greg Osuri, recorded shortly after the Ethereum merge and the Tornado Cash OFAC sanctions (circa September 2022, ahead of Messari Mainnet; uploaded February 2023). Greg dissects what the sanctions revealed: crypto is a three-layer system — access layer (DNS, front ends), data layer (blockchains), and base layer (compute/state) — and only the middle is decentralized. He criticizes "over-compliance" (Infura, Alchemy, even Pocket and GitHub banning contributors while still charging them) and argues the market, not government, self-corrects centralization, as it did with AOL's choke points. He notes the US DOD embraced Secret Network and Akash for private document transfer within 30 days of the ban. On node infrastructure centralization (Sami cites 50% of ETH's hosted nodes on AWS; Hetzner banning crypto), Greg warns of disaster-recovery gaps, "suit in a boardroom" policy bans, and supply-chain attacks, citing a16z's "trillion dollar paradox" (50% of online-service spend goes to cloud — the "Amazon tax") and a decline from 8.4M data centers in 2018 to 7.1M. Akash's answer: persistent storage for node state, dedicated IP leases (enabling Solana, Handshake port 53), GPUs "next," and interchain accounts so smart contracts and DAOs can own deployments — human attack vector eliminated, immutable "unstoppable deployments" tied to Handshake domains and a verifiable decentralized code supply chain (Radicle, Gitopia). He predicts cross-chain DAO deployments within six months and a fully verifiable on-chain interoperable stack within one to two years.

## Topics

decentralized cloud, tornado cash, censorship resistance, rpc centralization, node hosting, amazon tax, data centers, interchain accounts, daos, decentralized supply chain, handshake, ip leases, gpu roadmap

## Predictions & Notable Claims

### [crypto-depin] Crypto's access and base layers are not decentralized
> "Crypto is not a single monolithic layer, it's actually multiple layers... even though the middle, the data layer, is decentralized, the access layer and base layer is clearly not decentralized."
> — [00:03:45](https://www.youtube.com/watch?v=q9cuO5P42i4&t=225s)

**Context:** His framework for what the Tornado Cash sanctions exposed: front ends/DNS and compute hosting are the choke points, not the chains.

### [cloud-decentralization] Markets reject choke points — the industry will self-correct
> "You had companies like AOL that actually went ahead and created these choke points, but the market came around and rejected those choke points and it went back to decentralization. Now we are seeing the opposite, where you have heavy concentration of compute power by a few providers... the best solution is not government intervention, it's really the industry self-correcting."
> — [00:10:14](https://www.youtube.com/watch?v=q9cuO5P42i4&t=614s)

**Context:** Internet history as a cycle of centralization and correction; frames web3 infrastructure as the current correction.

### [crypto-depin] US military embraced Secret Network and Akash within 30 days of the ban
> "On one hand you had the US Treasury that banned Tornado Cash, which is a privacy protocol; on the other hand we saw the US military, DOD, embrace Secret Network and Akash for enhancing their privacy... within 30 days of the ban."
> — [00:10:56](https://www.youtube.com/watch?v=q9cuO5P42i4&t=656s)

**Context:** Cites a DOD use case for sending secure documents between units with sovereignty; evidence government arms value the same privacy tech being sanctioned.

### [cloud-decentralization] The Amazon tax: 50% of online-service spend goes to cloud
> "50% of every dollar you and I spend on online services like Asana, like Netflix, like Notion goes to Amazon or Google. The Amazon tax — it's an invisible tax that we all have, and guess who pays the bill."
> — [00:20:16](https://www.youtube.com/watch?v=q9cuO5P42i4&t=1216s)

**Context:** Citing a16z's "The Cost of Cloud, a Trillion Dollar Paradox"; he adds at [00:21:00] that data centers shrank from ~8.4M in 2018 to ~7.1M while hyperscalers grew, because data centers lack cloud-like tooling.

### [cloud-decentralization] Own your data center, sell the spare capacity
> "If you want something permanent like a blockchain... you have complete control over cost and complete control over privacy. What Akash comes into play and does is really enables you to have your own data center — that gives you sovereignty and control — and sell any unused capacity you have in the data center to people that want to use it, or tap into a larger pool when you want to scale."
> — [00:23:54](https://www.youtube.com/watch?v=q9cuO5P42i4&t=1434s)

**Context:** After contrasting colo economics (capex, 1-3 month acquisition) with cloud premium; the recurring Akash thesis of monetizing owned infrastructure.

### [gpu-economics] GPUs are next on Akash
> "GPUs are next. So if you have any GPU-style, proof-of-work-style workloads, I think that's going to be supported as well very, very soon. So you'll have a complete node hosting solution."
> — [00:29:37](https://www.youtube.com/watch?v=q9cuO5P42i4&t=1777s)

**Context:** Roadmap after persistent storage and IP leases; GPU support framed here around node/PoW workloads (pre-AI-boom framing).

### [crypto-depin] DAOs owning deployments eliminates the human attack vector
> "Smart contracts can own deployments on Akash — that means DAOs can now own deployments on Akash without a human involved... the human attack vector is eliminated... if you design your smart contract in a way it's immutable, the deployment becomes immutable... stuff like that is going to push the boundaries of what censorship resistance is going to look like."
> — [00:35:16](https://www.youtube.com/watch?v=q9cuO5P42i4&t=2116s)

**Context:** Interchain accounts (shipping with Mainnet 4) let Juno/Secret smart contracts own Akash deployments; combined with Handshake DNS for "unstoppable deployments."

### [crypto-depin] A fully verifiable on-chain world within one to two years
> "I think within a year or two years' time you're going to see a beautiful, interoperable — different protocols working with each other — fully verifiable, fully on-chain world. And that's the world I can't wait to experience."
> — [00:39:32](https://www.youtube.com/watch?v=q9cuO5P42i4&t=2372s)

**Context:** Timeline for the decentralized code supply chain (Gitopia/Radicle for source, Arweave/Akash for deploys, Handshake for discovery) to mature.

### [crypto-depin] Cross-chain DAO deployments on Akash within six months
> "It's not like a year from now — it's literally like three weeks... Integrations will take a few more months, but I think in the next six months we're going to see a cross-chain DAO deployment on Akash."
> — [00:42:22](https://www.youtube.com/watch?v=q9cuO5P42i4&t=2542s)

**Context:** Interchain accounts going live with Mainnet 4 three weeks after Messari Mainnet; envisions profit-sharing DAO-run node operations, with DAO DAO on Juno integrating.
