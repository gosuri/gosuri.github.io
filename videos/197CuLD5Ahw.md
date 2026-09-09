---
id: 197CuLD5Ahw
title: "Akash Weekly: Testnet 3, Week 1 Challenges"
channel: Akash Network
date: 2022-04-24
duration_min: 50
url: https://www.youtube.com/watch?v=197CuLD5Ahw
type: livestream
greg_speaks: yes
oneliner: Twitter Spaces launching Testnet 3 — persistent storage, inflation decay, authorized spend, and community Q&A on pricing and the AKT-burn stablecoin.
---

## Summary

Akash Weekly Twitter Spaces (hosted by Adam Wozny) marking launch day of incentivized Testnet 3. Greg recaps Akash as "an open market for unused cloud computing resources," live ~11 months with "zero incidents," and credits the stability to a testing "religion" inherited from Cosmos's Game of Stakes — contrasting it with Cosmos projects that launch without rigorous testing and suffer exploits. Testnet 3 drew over 8,000 participants ("has to be one of the largest testnets in the web3 space"), with ~17 week-one challenges and ~$200K total rewards ($82K that week). Features under test: an automatic inflation decay curve (claimed as a Cosmos first, to be released as a reusable module), authorized spend (decoupling payer from deployer, enabling credit-card payment processors on top of Akash), adversarial challenges to break the authorized-spend security model, fractional uAKT, and the headline feature — persistent (network-attached) storage, which completes fault-tolerance at the storage layer and enables databases, blockchain full nodes, and terabyte-scale workloads. Audience Q&A covers OmniFlix running IPFS nodes and building a decentralized CDN on Akash ("90 percent cheaper... than the big guys"), a candid exchange with a Dominican listener about confusing/stale pricing on Akashlytics (a team member confirms the price-compare page was manually updated), and the then-in-design AKT-burn stablecoin for price-stable deployments — with an unfortunate period aside that "we're not competing with UST in any way," weeks before Terra's collapse. Providers then numbered ~45, including Equinix and Lumen.

## Topics

testnet, persistent storage, incentivized testnet, inflation decay, authorized spend, stablecoin, akt burn, decentralized cloud, cdn, ipfs, cosmos, pricing transparency, providers

## Predictions & Notable Claims

### [crypto-depin] Stablecoin minted only by burning AKT
> "The only way to emit the stable coin is by burning AKT. So you burn AKT and you mint the stable coin and vice versa... burning AKT means taking AKT out of supply, which gives AKT value... the more demand for the cloud, the more AKT is burnt."
> — [00:45:39](https://www.youtube.com/watch?v=197CuLD5Ahw&t=2739s)

**Context:** Answering a listener worried a stablecoin would reduce AKT demand; the design (deploy-only, no independent liquidity) foreshadows Akash's later burn/settlement mechanics. He adds "we're not competing with UST in any way" — dated weeks before UST imploded.

### [cloud-decentralization] Persistent storage enables a decentralized CDN on Akash
> "Akash now, effectively by enabling persistent storage, you can actually build a very modern CDN on top of Akash — ideally decentralized, which will be really cool."
> — [00:20:40](https://www.youtube.com/watch?v=197CuLD5Ahw&t=1240s)

**Context:** Responding to OmniFlix asking about CDN use cases; he tempers it later — Cloudflare has ~100 points of presence, "we don't have 100 different points yet, we will in the future."

### [cloud-decentralization] Storage networks, Solana validators, and full nodes will run on Akash
> "You'll be able to run a lot of the storage networks... running on top of Akash, and you're going to see other validators like Solana, which have huge storage requirements, running on Akash. You're going to see full nodes in the entire Cosmos ecosystem."
> — [00:17:05](https://www.youtube.com/watch?v=197CuLD5Ahw&t=1025s)

**Context:** On what persistent storage unlocks; he calls it the feature that "completes a big gap" with traditional cloud. Later predicts Lumen and Chia miners will "flood the market with cheap, high-performance storage" ([00:39:54]).

### [crypto-depin] Authorized spend unlocks credit-card payments on Akash
> "This also lets us do amazing things — like we can actually now implement amazing UIs where we can process payments using credit cards... the teams can still operate on the Akash network without having to deal with tokens."
> — [00:10:39](https://www.youtube.com/watch?v=197CuLD5Ahw&t=639s)

**Context:** Explaining the authorized-spend feature (payer/deployer decoupling for enterprise teams); an early statement of his recurring thesis that token mechanics must be abstracted away for mainstream users.

### [cloud-decentralization] One of the largest testnets in web3
> "So far we're able to attract over 8,000 participants. This is by far the biggest testnet for Akash, for sure, but I think it has to be one of the largest testnets in the web3 space itself."
> — [00:07:04](https://www.youtube.com/watch?v=197CuLD5Ahw&t=424s)

**Context:** Contrasting Akash's incentivized-testing discipline with Cosmos-ecosystem projects that "launch and fail... or worse, actually launch and have exploits."
