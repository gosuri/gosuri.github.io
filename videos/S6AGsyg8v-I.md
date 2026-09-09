---
id: S6AGsyg8v-I
title: Revolutionizing GPU Access for AI Workloads | Greg Osuri - Akash Network
channel: ETHDenver
date: 2024-03-02
duration_min: 16
url: https://www.youtube.com/watch?v=S6AGsyg8v-I
type: keynote
greg_speaks: yes
oneliner: ETHDenver 2024 talk on why crypto is saving AI: idle miner GPUs, Akash's marketplace, and a live Mixtral deploy demo.
---

## Summary

ETHDenver 2024 stage talk arguing "why crypto is saving AI and why AI needs crypto — and not the other way around." Greg opens with the Semafor story of a Columbia student who couldn't get chips from Amazon or Lambda Labs but found an A100 for ~$1.10/hour on a "decentralized weird network." He details the access problem: big clouds gate GPU leasing (millions of dollars and connections to access advanced GPUs on AWS), Nvidia direct orders take 2–3 years, tier-2 providers (Lambda, CoreWeave) demand 3–12 month contracts with 25–100% prepayment — deadly for iterative startups whose chip requirements change within six months. Meanwhile "there are free GPUs everywhere": post-Merge crypto miners (Foundry Digital/DCG) sitting on masses of A100s and A6000s, and ML companies like Stability with idle previous-generation fleets between training runs. Akash is presented as a marketplace to trade GPU cycles and "first and foremost a supercloud" — permissionless, peer-to-peer, open source (~480 contributors, ~90% from outside Overclock's 20 full-timers), with daily active leases quadrupled quarter-over-quarter since the GPU launch and 41% lifetime GPU utilization. He performs a live demo deploying Mixtral 7B via SDL on Console, receiving bids (including from Foundry), and running inference on a V100 in about two minutes, fully non-custodial with no signup. In Q&A he says Akash has ~150 high-end GPUs live with ~600 GPUs/month coming online, and teases H100s at $2/hour "starting next week" and A100s at 79 cents/hour.

## Topics

gpu marketplace, gpu shortage, decentralized cloud, supercloud, crypto mining gpus, ai compute access, live demo, gpu economics, open source, permissionless

## Predictions & Notable Claims

### [decentralized-ai] Crypto is saving AI, not the other way around
> "Today I'm going to talk about why crypto is saving AI and why AI needs crypto — and not the other way around."
> — [00:00:05](https://www.youtube.com/watch?v=S6AGsyg8v-I&t=5s)

**Context:** Framing thesis of the talk, backed by the Semafor story of a student who could only get training chips through a web3 network.

### [gpu-economics] Big clouds control GPU leasing; startups are locked out
> "GPUs are very hard to get on demand. Why? Because big cloud providers control GPU leasing. For example, on Amazon the only way to get advanced GPUs is to know somebody that knows somebody and spend millions of dollars to even get access to the chips. So if you're [an] AI startup, there's no way in hell you'll be able to get started without having millions of dollars of funding."
> — [00:01:33](https://www.youtube.com/watch?v=S6AGsyg8v-I&t=93s)

**Context:** The access-inequality argument; he adds that Zuckerberg bought ~350,000 H100s and Nvidia direct orders take 2–3 years.

### [gpu-economics] There are free GPUs everywhere; GPUs are the new spice
> "There are free GPUs everywhere... a lot of crypto miners that bought a ton of GPUs during the last cycle that are sitting idle... Foundry Digital, which is owned by DCG, is sitting on massive amounts of A100s and 6000s... There are also companies that are raising money with GPUs as collateral, so GPUs are the new spice."
> — [00:04:25](https://www.youtube.com/watch?v=S6AGsyg8v-I&t=265s)

**Context:** The supply-side thesis (quote spans to [00:06:36]): post-Ethereum-merge miners and ML companies with idle older fleets (e.g., Stability's 5,000 A100s) make a GPU-cycle marketplace viable.

### [cloud-decentralization] Akash as a supercloud over any cloud-capable computer
> "Akash is first and foremost a supercloud. A supercloud is a cloud that sits on top of private, public, hybrid — doesn't matter — any cloud-capable computer, and gives a familiar user interface... whereas the compute comes from all over the place using a marketplace mechanism."
> — [00:06:36](https://www.youtube.com/watch?v=S6AGsyg8v-I&t=396s)

**Context:** His recurring supercloud definition, here emphasizing marketplace bidding between tenants and providers.

### [gpu-economics] 600 GPUs/month coming online; H100s at $2/hour
> "About 150 GPUs... but these are high-end GPUs, A100s, high density GPUs, and we have about 600 GPUs coming online every month starting this month... most of them are H100s, A100s and A6000s, and Akash will [be] the only place to get H100s for $2 an hour — which anyone that [has used] H100s knows what that number means — and A100 for 79 cents an hour... H100s starting next week."
> — [00:14:09](https://www.youtube.com/watch?v=S6AGsyg8v-I&t=849s)

**Context:** Q&A after the live demo; a dated, quantified supply and pricing forecast from March 2024.
