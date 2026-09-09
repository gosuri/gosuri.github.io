---
id: KVwZr7s92f8
title: Akash Weekly: Chia
channel: Akash Network
date: 2022-04-24
duration_min: 57
url: https://www.youtube.com/watch?v=KVwZr7s92f8
type: livestream
greg_speaks: yes
oneliner: Twitter Spaces on Akash Testnet 3 and Chia plotting with Chia's VP of storage; Greg lays out the own-your-compute peer-to-peer vision.
---

## Summary

An Akash Twitter Spaces hosted by Adam Wozney with Greg Osuri and Jonmichael Hands (VP of storage at Chia Network, ex-Intel SSD product manager), centered on Testnet 3 challenges and Chia plotting on Akash. Greg recaps his background: AngelHack (200K developers, 160 cities, helped launch Firebase), IBM, Kaiser's first cloud architecture, helping pass California's first blockchain law, and Akash's origin — deploying multi-cloud Kubernetes to data-center customers and finding ~85% of compute unused, which sparked the spot-market-for-compute idea. He reports ~600-700 applications on mainnet with ~40 providers.

Testnet 3 stats: ~13,600 signups, 3,800 KYC completions, 2,300 first-week submissions, 54 storage providers testing persistent storage, then week two's real-world workloads — ~135 Avalanche and ~117 Terra nodes ("that's pretty much the entire network... if the validators of Terra choose to run Akash"), with challenges for Ethereum, Bitcoin, Cronos, Cardano, Arbitrum nodes and Chia plotting. Jonmichael explains Chia's proof of space and time, the hard-drive boom (116 PiB to 30 EiB in three months), BladeBit in-memory plotting needing 416GB DRAM (enabled by the testnet's new 512GB instance types), plotting-as-a-service economics, and the World Bank "climate warehouse" partnership. Greg's forward-looking notes: node infrastructure as a wedge (Pocket Network/Infura/Alchemy-style services on Akash), wallets like MetaMask one-click launching personal RPC nodes to route around RPC-level censorship, and — answering a provider question — Akash's original vision of compute sovereignty: own your compute, offload excess supply to the network, tap the network when you need scale, "a truly peer-to-peer compute network." He stresses rigorous testnet culture (zero-fee attack testing, $200K incentives) versus web2 iterative habits.

## Topics

decentralized cloud, chia, proof of space, testnet, rpc nodes, blockchain nodes, storage, censorship resistance, compute sovereignty, peer-to-peer compute, kubernetes

## Predictions & Notable Claims

### [cloud-decentralization] 85% of data-center compute sits unused
> "As we were deploying the solution to different customers that own data centers, we realized most compute in these data centers was not used — 85 [percent] or so — and that's when the idea to create a spot market for compute came about."
> — [00:04:24](https://www.youtube.com/watch?v=KVwZr7s92f8&t=264s)

**Context:** Origin story from his multi-cloud Kubernetes work at Overclock Labs (2015-2017); the founding statistic behind Akash's marketplace thesis.

### [cloud-decentralization] Node services (Pocket/Infura/Alchemy) will run on Akash
> "A good pathway from here would be someone like Pocket Network, who specializes in running nodes, or even Infura or even Alchemy — Akash will become another provider... and if these platforms give the users a choice of running over centralized infrastructure versus decentralized, I think it will be a fantastic outcome."
> — [00:15:48](https://www.youtube.com/watch?v=KVwZr7s92f8&t=948s)

**Context:** After reporting ~135 Avalanche and ~117 Terra nodes launched during Testnet 3 — framing node infrastructure as proof Akash can run production blockchain workloads.

### [cloud-decentralization] Everybody gets an RPC node — launched from your wallet
> "How much does Infura charge for running an Ethereum RPC node versus Akash charging? I think it's exponentially lower. And ideally... wallets like MetaMask actually give you an ability to launch RPC nodes that's dedicated for you, and that you know for sure is secure enough, on Akash directly from the wallet — that's what I like to see... everybody gets an RPC node."
> — [00:30:42](https://www.youtube.com/watch?v=KVwZr7s92f8&t=1842s)

**Context:** Asked what he most wants from testnet participants; a composability vision for personal infrastructure — every wallet user running their own dedicated node.

### [cloud-decentralization] Self-hosted RPC as the answer to censorship
> "Now you have all kinds of censorship happening at the RPC level... RPC servers have to obey the law of the land wherever the servers are hosted... giving ecosystems' users [the ability] to host their own RPC servers, of course in compliance with whatever country they're operating from, is a great use case for Akash."
> — [00:32:07](https://www.youtube.com/watch?v=KVwZr7s92f8&t=1927s)

**Context:** On the MetaMask-is-censoring-you narrative — he argues MetaMask is just a client and the fix is users scheduling their own RPC servers in a country of their choice via Akash.

### [local-compute] Own your own compute; offload excess to a peer-to-peer network
> "That is the original vision of Akash... it's about sovereignty. We want people to own their own compute, because that's the best possible deal you can get compared to running it on the cloud. But when you have to scale up... you should be able to connect to the network, or when you do not have demand on your own cluster, you should be able to offload that supply to the network. So the real vision is to create a truly peer-to-peer compute network... truly hyper-efficient usage of resources — I think that's the best model."
> — [00:50:42](https://www.youtube.com/watch?v=KVwZr7s92f8&t=3042s)

**Context:** Answering a home-lab provider (Digital Spaceport, running a Proxmox cluster) asking whether providers can run their own workloads — one of Greg's clearest early statements of the owned/local compute + network-overflow thesis.
