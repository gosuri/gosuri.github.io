---
id: 8GOaS_SQWuE
title: Serverless Panel: Komal Mangtani, Greg Osuri, Guillermo Rauch, Gwen Shapira
channel: Kong
date: 2018-11-09
duration_min: 30
url: https://www.youtube.com/watch?v=8GOaS_SQWuE
type: panel
greg_speaks: yes
oneliner: Kong Summit 2018 serverless panel where Greg argues computing swings back to decentralized architectures with serverless as the interface.
---

## Summary

A Kong Summit 2018 panel on serverless with Gwen Shapira (Confluent), Greg Osuri (Overclock Labs/Akash), Guillermo Rauch (ZEIT), and Komal Mangtani (Uber). Greg introduces Akash as a decentralized cloud platform connecting slack server capacity with users, noting serverless is its "primary abstraction" and that Overclock's first product was an OS called DISCO ("distributed infrastructure for serverless computing operations") dating to 2015. The panel debates why serverless is rising (pay-per-use, productivity, new developer generations), the state problem, cold starts (Guillermo argues the obsession is overblown), and enterprise adoption (Mangtani describes Uber's hybrid "tripod" strategy and vendor lock-in fears). Greg's distinctive contributions: serverless is mandatory in decentralized systems because users lack access to underlying servers; smart contracts are inherently serverless abstractions; the famous 85%-of-capacity-sits-idle statistic; a computing-history pendulum argument (mainframe → client-server → cloud → decentralized/distributed cloud); and a striking cost comparison that 1 MB of smart contract on Ethereum cost ~$13,000 versus ~$25 on Akash, blaming blockchains' "socialistic" monolithic cost model. He also notes cryptography will verify computation in decentralized environments. Panel closes on DevOps role changes ("keep your cloud vendor honest" as the new capacity planning) and the difficulty of estimating serverless pricing.

## Topics

serverless, decentralized cloud, cloud computing history, smart contracts, idle server capacity, devops, vendor lock-in, cloud economics, kubernetes, edge computing

## Predictions & Notable Claims

### [cloud-decentralization] Computing pendulum: from mainframes to cloud and back to decentralized architectures
> "If you look at evolution of computing, in the beginning you had mainframes — it was a very centralized model... then the client-server came along and clients were equally as powerful as servers, so you had a way more distributed model. Then went back to the cloud, where cloud became the centralized entity... Now we're seeing more decentralized, distributed architectures... you're gonna see, as we move more into the decentralized distributed cloud, serverless will play a huge role."
> — [00:18:16](https://www.youtube.com/watch?v=8GOaS_SQWuE&t=1096s)

**Context:** Greg's core recurring thesis, stated here in 2018: centralization/decentralization cycles in computing history, with the next swing toward decentralized cloud. Follows his 85%-idle-capacity supply argument.

### [gpu-economics] 85% of server capacity sits underutilized
> "What we do is we tap into slack server capacity that's underutilized — I mean, eighty-five percent of capacity out there today sits underutilized in most of the servers, and our job is to bring them, aggregate, and provide an interface."
> — [00:18:16](https://www.youtube.com/watch?v=8GOaS_SQWuE&t=1096s)

**Context:** Answering a question about vendor lock-in and cloud affordability; the founding supply-side statistic for Akash.

### [crypto-depin] Smart contracts on Ethereum cost $13,000/MB vs ~$25 on Akash
> "Today, as it stands, it's unaffordable... give an example: a one megabyte of smart contract on Ethereum network costs $13,000, when on Akash network costs about $25. Any programmer in the right mind wouldn't deploy a smart contract expected to run... most of the [blockchains] happen to be a monolithic and homogenous architecture, so it's a socialistic model — everybody shares the costs and somebody has to pay."
> — [00:20:27](https://www.youtube.com/watch?v=8GOaS_SQWuE&t=1227s)

**Context:** Arguing blockchain compute economics were broken by monolithic architectures treating every application the same; decoupling execution (Akash's model) fixes cost variance. Captions garble "Ethereum" as "a theorem" and "Akash" as "a u.s.".

### [other] Serverless adoption will be like cars vs. trucks
> "Any brand-new cloud provider, the first choice is serverless... a whole new generation of programmers that don't really care about deploying a server... we're gonna see more and more serverless adoption. Now will there be a scenario where everything [is serverless]? It's gonna be like trucks and cars — there will be people that are still going to drive trucks, but that number is gonna be so minimal compared to the car drivers."
> — [00:14:41](https://www.youtube.com/watch?v=8GOaS_SQWuE&t=881s)

**Context:** On whether serverless replaces all architectures. **Speaker:** likely Greg (agreeing with Gwen Shapira, referencing new cloud providers), but captions are not diarized — possibly not Greg.
