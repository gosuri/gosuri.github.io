---
id: YasgYOQtxR0
title: The Problem w/Blockchains on Big Cloud
channel: Akash Network
date: 2022-11-11
duration_min: 13
url: https://www.youtube.com/watch?v=YasgYOQtxR0
type: clip
greg_speaks: yes
oneliner: Clip of Greg on why blockchain nodes hosted on AWS/Hetzner are a systemic risk, the "Amazon tax," and Akash's node-hosting roadmap.
---

## Summary

Short Akash-channel clip of Greg answering an interviewer on blockchain-node centralization. The host cites data: ~50% of cloud-hosted Ethereum nodes on AWS, Solana concentrated on Hetzner/OVH, and Hetzner's then-recent ToS ban on crypto workloads. Greg explains why node operators default to big clouds (convenience, manageable cost in a bull market) but flags single-provider reliance: node software design (e.g., Cosmos double-signing risk) discourages multi-region failover, and if Amazon dropped Ethereum, migration would in practice mean "days if not weeks" of degraded disruption — "is that the future we want?" He cites a16z's "trillion-dollar cloud paradox" ("50% of every dollar spent on online services goes to Amazon or Google" — the invisible "Amazon tax" users ultimately pay) and a shrinking data-center count (8.4M in 2018 to ~7.1M) as hyperscalers consolidate, because colo hardware acquisition takes 1-3 months versus cloud's instant premium. Akash's answer: sovereignty via your own data center plus a marketplace for unused capacity. He then runs through node-hosting features shipping at the time: persistent network storage (vs. re-syncing Ethereum's ~300GB state), local ledger snapshots, dedicated IP leasing enabling fixed-port protocols (Solana's port range, Handshake's port 53), non-custodial UIs, a Masari demo by product lead Anil (ex-HashiCorp/Terraform), and GPUs "next" for proof-of-work-style workloads.

## Topics

blockchain node hosting, cloud concentration, amazon tax, disaster recovery, dedicated ip, network storage, hetzner ban, data centers, decentralized cloud, sovereignty

## Predictions & Notable Claims

### [crypto-depin] A cloud-hosted blockchain is a disruption waiting to happen
> "In theory it's possible; in practicality you're going to see a disruption — it's going to be several days if not weeks levels of disruption with degraded services. The real question you should be asking is: is that the future we want, a disrupted blockchain?"
> — [00:02:52](https://www.youtube.com/watch?v=YasgYOQtxR0&t=172s)

**Context:** Rebutting the argument that Ethereum nodes could simply migrate if Amazon (hosting ~50% of cloud-hosted nodes) shut them off; he adds Lido's ~50% node power is likely on a single provider with no public multi-cloud DR strategy.

### [cloud-decentralization] The Amazon tax: 50 cents of every online-service dollar
> "Turns out 50 [cents] of every dollar you and I spend on online services — like Asana, like Netflix, like Notion or whatever — goes to Amazon or Google. Fifty percent... it's an invisible tax that we all have, and guess who pays the bill — we end up paying, because the cost and savings come down to the user."
> — [00:04:19](https://www.youtube.com/watch?v=YasgYOQtxR0&t=259s)

**Context:** Citing the a16z "cost of cloud, a trillion dollar paradox" article as evidence that cloud economics are getting worse and expensive decentralization is prohibitive.

### [cloud-decentralization] Data centers are dying while hyperscalers grow
> "Before, in 2018, you had about 8.4 million data centers; now you have about 7.1 million data centers... and the hyperscalers are getting a lot bigger, because there are very, very little options to get cloud-like capability on data centers... you can either have a data center or you can have a cloud — you can't use your data center capacity as a cloud provider. That's the big challenge."
> — [00:04:19](https://www.youtube.com/watch?v=YasgYOQtxR0&t=259s)

**Context:** His structural argument for Akash: independent capacity is stranded without cloud-grade deployment tooling, so demand consolidates to Amazon despite 7.1M data centers existing. Quote spans into the [00:05:03] block.

### [crypto-depin] Node hosting "coming with a bang," GPUs next
> "The node hosting is coming with a bang. I think the IP addresses will complete the solution we need... and GPUs are next — so if you have any GPU-style, proof-of-work-style workloads, I think that's going to be supported as well very, very soon. So we'll have a complete, full-fledged node hosting solution."
> — [00:11:35](https://www.youtube.com/watch?v=YasgYOQtxR0&t=695s)

**Context:** Late-2022 roadmap: dedicated IP leasing (Solana port ranges, Handshake port 53), network storage/snapshots, non-custodial UIs — with GPU support flagged a year before it became Akash's main business.
