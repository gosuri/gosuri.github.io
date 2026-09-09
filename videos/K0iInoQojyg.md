---
id: K0iInoQojyg
title: "Akash Network Deep Dive: The Unstoppable Cloud, Powered by Cosmos!"
channel: Cryptocito
date: 2021-07-15
duration_min: 66
url: https://www.youtube.com/watch?v=K0iInoQojyg
type: interview
greg_speaks: yes
oneliner: 2021 deep-dive interview on cloud oligopoly, DeFi's centralized-infrastructure hypocrisy, and the Supermini "cloud in the home."
---

## Summary

Early mainnet-era interview (month ~4-5 after Akash's marketplace launch) with Cryptocito's "This Week in Cosmos" show. Greg recounts his path from AngelHack (where Firebase launched) through containers (2013), early Kubernetes contributions, and Overclock Labs' multi-cloud product, where he saw data centers running at ~15% utilization — the unused-capacity problem that birthed the Akash marketplace. He gives a lay explanation of how AWS emerged from Amazon's own peak-load overprovisioning and now locks customers in via ~250 managed services ("burgers and fries" pricing; "your margin is my opportunity"), argues cloud is consolidating into a four-company oligopoly (Amazon, Google, Microsoft, Alibaba) heading toward a trillion-dollar industry, and catalogs oligopoly harms: stifled innovation, ~20% of company revenues going to Amazon, censorship (Parler, banned miners), and crushed open-source businesses (Elastic lawsuit). A long stretch skewers DeFi's "cognitive dissonance": most Ethereum nodes run on AWS, frontends and DNS are centralized, and decentralization won't win on ideology but on user experience. He tells the Cosmos origin story (CryptoKitties killed the Ethereum prototype; deleted 200k lines of code after adopting Cosmos SDK; "shared code, not shared security"), explains staking/inflation design (54% initial rewards on a decay curve until network take-income catches up), and discusses the Supermini home server — an experimental 300-unit "cloud in the home" for privacy and local ML that awaits GPU support "in the next few months." Partnerships: Osmosis backends run on Akash (Chandra Station), and Akash aims to help Solana scale from ~1,000 toward 10,000 validators at one-third of cloud cost.

## Topics

decentralized cloud, cloud oligopoly, aws lock-in, censorship, open source, defi infrastructure, cosmos, tendermint, staking, tokenomics, supermini, local compute, machine learning, gpu, solana, osmosis

## Predictions & Notable Claims

### [local-compute] Supermini: bring the cloud into your home
> "The goal of Supermini... is the fact that we are going to enable a cloud in the home... instead of you go into the cloud, bring the cloud to you, so you can host all your data locally in your home. You can use the thing to run VPN servers... so many things that you don't have to leave the comfort of your home. That's important for privacy, that's important for cost."
> — [00:46:16](https://www.youtube.com/watch?v=K0iInoQojyg&t=2776s)

**Context:** Explaining the sold-out 300-unit Supermini home server (60,000-person waitlist, offers of half a Bitcoin for a ~$1,000 device); an early articulation of his later "supercomputer in every home" thesis. He also notes homes already have cooling — the biggest data-center cost.

### [local-ai] Home machines as ML supercomputers
> "In [a home] where you don't have strong internet connection, what can you host? You can host machine learning — you don't need strong internet connection, but you need a lot of compute and GPU... the idea is to have that machine learning — you put it in your computer to become a supercomputer, I mean put GPUs in, you know, to serve machine learning."
> — [00:47:41](https://www.youtube.com/watch?v=K0iInoQojyg&t=2861s)

**Context:** Why ML is the workload that fits home hardware despite weak residential bandwidth — "if we can create a GPU infrastructure that's spread across the world... the economics will play out." Notably pre-ChatGPT (July 2021).

### [gpu-economics] GPUs on Akash "in the next few months"
> "Supermini will become a reality when Akash enables GPU, which is in the next few months essentially."
> — [00:48:24](https://www.youtube.com/watch?v=K0iInoQojyg&t=2904s)

**Context:** July 2021 roadmap statement; GPU support did not ship on mainnet until September 2023. He calls GPU "one of those most exciting things for us because the problem is rampant for machine learning."

### [cloud-decentralization] Solve unused capacity and you don't need AWS
> "We're attacking the problem at the core. The core of the problem which created Amazon Web Services was unused capacity. If we solve that problem, we don't need Amazon Web Services... it's not going to be a single day or a single year journey."
> — [00:16:22](https://www.youtube.com/watch?v=K0iInoQojyg&t=982s)

**Context:** His thesis that Akash inverts AWS's own origin story (monetizing Amazon's idle peak-load capacity); earlier he reports data centers he deployed to ran at ~15% utilization, "85% of the time they're not used" (00:04:59).

### [cloud-decentralization] The world is ready for a decentralized Amazon
> "We doubled the number of total workloads deployed in Akash in a month... we still have 100 [percent] growth month over month at month five... it's very clear that the world is ready for a decentralized version of Amazon."
> — [00:17:05](https://www.youtube.com/watch?v=K0iInoQojyg&t=1025s)

**Context:** Early mainnet growth stats, contrasted with a "great" benchmark of 22% month-two growth.

### [cloud-decentralization] Cloud is becoming a trillion-dollar oligopoly
> "You have this cloud basically getting consolidated into four companies — like Amazon, Google, Microsoft and Alibaba — all creating effectively an oligopoly... and that industry is growing at such a rapid pace I believe it's going to be a trillion-dollar industry very very soon."
> — [00:05:44](https://www.youtube.com/watch?v=K0iInoQojyg&t=344s)

**Context:** Origin-story framing of the supply-demand mismatch Akash connects; he later argues oligopolies "don't innovate — it's all about value extraction" using airlines and cell carriers as examples (00:19:57), and cites companies paying ~20% of revenues to Amazon (00:21:22).

### [crypto-depin] Bezos could shut down Ethereum
> "There's monitoring evidence that most nodes in Ethereum are run on Amazon, and it's Jeff [Bezos'] prerogative at this point... if he wants to shut down [the] Ethereum network, he can do that... most people in DeFi don't care [that] the infrastructure is centralized, but they all want to be decentralized... the cognitive dissonance that we have is so bad."
> — [00:26:24](https://www.youtube.com/watch?v=K0iInoQojyg&t=1584s)

**Context:** Asked about DeFi running on centralized infrastructure; he adds "DeFi is not fully decentralized unless the entire stack is on a decentralized network" (00:27:50), noting centralized DNS and frontends as regulatory chokepoints.

### [cloud-decentralization] Decentralization will win on UX, not ideology
> "Right now it's not decentralized fully, but will it be decentralized? Yes. And what is the trigger? It's not going to be ideology — we know that, people don't care about values as much as you and I think they should... I think it'll come down to user experience and collaborative features on top."
> — [00:30:41](https://www.youtube.com/watch?v=K0iInoQojyg&t=1841s)

**Context:** Prediction about how the full web stack migrates to decentralized infrastructure; he concedes Akash's frontend hosting UX then lagged Netlify/Vercel.

### [crypto-depin] Network revenue will eventually exceed staking rewards
> "If you take our growth curve and take the decay curve of staking, there will come a point in the future where the network revenue exceeds [the] staking revenue — so till then it's a comfortable hold."
> — [00:57:40](https://www.youtube.com/watch?v=K0iInoQojyg&t=3460s)

**Context:** Defending 54%-decaying inflation rewards as bootstrap subsidy (comparing to government subsidies of young industries) until marketplace take-income matures; network revenue then was only ~600 AKT total.

### [crypto-depin] Helping Solana scale from 1,000 to 10,000 validators
> "The goal for [the] Solana-Akash partnership is to decentralize Solana much further by reducing the cost of node infrastructure — and one-third is [an] amazing cost reduction — and hopefully help them to scale to about ten thousand validators from a one-thousand validator set right now."
> — [01:04:06](https://www.youtube.com/watch?v=K0iInoQojyg&t=3846s)

**Context:** Says Solana production nodes await Akash GPU support; also claims Akash pricing is about one-third of Amazon's (00:42:39) and mentions a Serum UI running on Akash.
