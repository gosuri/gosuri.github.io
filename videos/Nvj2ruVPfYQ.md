---
id: Nvj2ruVPfYQ
title: E04 - Decentralizing the Cloud with Greg Osuri
channel: HackerNoon
date: 2018-10-11
duration_min: 30
url: https://www.youtube.com/watch?v=Nvj2ruVPfYQ
type: podcast
greg_speaks: yes
oneliner: 2018 HackerNoon podcast: the original Akash pitch — supercloud, cloud oligopoly gatekeeping, 85% idle servers, and container-based scaling.
---

## Summary

One of the earliest recorded Akash appearances (pre-mainnet, testnet live, pre-token-sale). Greg lays out the founding pitch to host Trent Lapinski: Akash aggregates computing power from disparate sources into "a new supercloud." He recounts his background (22 years programming, billion-transaction/day infrastructures for Fortune 50s, AngelHack's 150k developers, top-5 Go contributor on GitHub) and how solving a 50ms-latency problem at Demandbase exposed the cloud's failure to optimize for latency — leading to the DISCO operating system (distributed infrastructure for containerized operations) and then Akash. His core arguments: data processing needs double every two years while capacity lags; ~21 hyperscale providers exist but three hold majority share and act as gatekeepers "not allowing the cloud to scale"; 85% of server capacity in corporate data centers sits unused (Intuit: 97% utilization on tax day, ~3% for nine months); Ethereum costs ~$13,000 per MB of memory and EOS ~$2,500 — "floppy disks costing $2,500" — because monolithic homogeneous architectures price all workloads identically. Akash decouples the four workload primitives (bandwidth, memory, CPU, storage), runs a reverse auction on-chain with off-chain workload execution, settles per block, and lets developers use existing languages/containers. He confirms equity funding led by CrunchFund, a utility-token model, developer-first ("not investor-first") philosophy, skepticism of EOS-style delegated governance, and closes with a call to take on the cloud "Goliath" together.

## Topics

decentralized cloud, supercloud, cloud oligopoly, idle capacity, containers, kubernetes, ethereum scalability, censorship resistance, utility token, devops, akash origin

## Predictions & Notable Claims

### [cloud-decentralization] A new supercloud from disparate compute
> "[I'm] working on a decentralized cloud infrastructure network that aggregates computing power from disparate sources and creates a new supercloud."
> — [00:00:48](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=48s)

**Context:** October 2018 — his one-line thesis, using "supercloud" years before the term became an industry buzzword.

### [cloud-decentralization] Three gatekeepers are stopping the cloud from scaling
> "The amount of data [and] data processing needs are doubling every two years [but] the processing power hasn't been catching up... access to modern infrastructure is safeguarded by the cloud infrastructure providers... about twenty-one hyperscale providers, out of which three providers have a majority of the market share... they are being gatekeepers — they are not allowing the cloud to scale."
> — [00:04:22](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=262s)

**Context:** His founding market analysis of the AWS/Google/Microsoft oligopoly; quote spans into the [00:05:05] block.

### [cloud-decentralization] 85% of server capacity sits unused
> "85% of server capacity sitting in corporate data centers remains unused. An extreme example: Intuit, the company behind TurboTax — on a tax day they run at 97 percent utilization; come next day it drops... nine months of the year they run at almost three percent utilization... on one hand you have this massive scalability problem, on the other hand you have this massive [unused] supply."
> — [00:05:49](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=349s)

**Context:** The supply-side statistic he would repeat for years; leads into "we can effectively create a system where there is no middleman [and] effectively turn every company with capacity into a cloud provider, walking the same path Amazon took" [00:06:31].

### [other] Ethereum memory costs $13,000/MB — monolithic chains can't scale
> "Ethereum — it costs about $13,000 to get one megabyte of memory... and you look at EOS, which is supposedly the modern Ethereum killer — it costs about twenty-five hundred dollars per megabyte of memory... we're talking about floppy disks costing $2,500... the problem happens to be they all adopt a monolithic, homogeneous architecture with an assumption that all the applications have the same exact needs."
> — [00:07:59](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=479s)

**Context:** Why existing decentralized platforms couldn't host real applications; Akash's answer is decoupling bandwidth, memory, CPU and storage and provisioning them independently. Quote begins at the end of the [00:07:13] block.

### [cloud-decentralization] Push a job and forget it — nobody can take you down
> "For me it's about censorship resistance and fault resilience — the idea that I can push a job or a function and forget about it; it will run no matter what, as long as I have tokens to pay for it. That is the essence of a decentralized system: there's no single point of failure and there's nobody that can take you down."
> — [00:10:08](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=608s)

**Context:** Answering why a developer would choose a decentralized system — years before the Parler/deplatforming events he'd later cite as vindication.

### [cloud-decentralization] First decentralized cloud to run a full web application
> "This is the first decentralized cloud that can run a fully functioning web application — be [it] Ruby, Python, Node, doesn't really matter."
> — [00:16:35](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=995s)

**Context:** His personal blog (gregosuri.com) was hosted on the Akash testnet at the time [00:15:52]; containers let developers keep their existing stacks.

### [cloud-decentralization] You can't take on Goliath alone
> "The reason we're building this is to create a network, or a cloud infrastructure, that is not owned by anyone but open to everyone... an individual standing up cannot take on Goliath — we're talking about Amazon, Google, Microsoft. The only way we can do this is together."
> — [00:28:08](https://www.youtube.com/watch?v=Nvj2ruVPfYQ&t=1688s)

**Context:** Closing call to action inviting protocol developers to join the effort against the cloud oligopoly.
