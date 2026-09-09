---
id: XlFnp7eUw3M
title: Interview with Greg Osuri of Akash Network
channel: Web3 Working Group
date: 2023-02-16
duration_min: 55
url: https://www.youtube.com/watch?v=XlFnp7eUw3M
type: interview
greg_speaks: yes
oneliner: Long-form interview with Amy James: Greg's origin story, the "supercloud" thesis, idle home GPUs, AI-written deployments, and web3 as greener infrastructure.
---

## Summary

Interview on the "What Kind of Internet Do You Want?" series (Web3 Working Group) recorded weeks after ChatGPT's breakout. Greg recounts learning to code by hand on paper in rural India, founding AngelHack (150k developers across 50 cities by 2013), noticing developers couldn't scale hackathon projects, and founding Overclock Labs in 2015 to commercialize early Kubernetes for edge computing — accidentally building a "quasi blockchain" (Merkle-tree git structure plus BitTorrent replication) pre-Ethereum. Discovering ~85% of data-center compute sits unused led to the Akash marketplace, open-sourced with a token after the closed-source licensing model failed.

He defines Akash as a "supercloud" aggregating heterogeneous resources behind a homogeneous interface, ~80% cheaper than AWS (whose EC2 margins he pegs at ~90%), citing the a16z finding that half of every dollar spent on online services goes to cloud providers. On supply: 98-99% data-center closure rate, top Ethereum-PoW miners onboarding as GPU providers. On AI: Nvidia A100s have five-week wait times and are concentrated (Amazon ~20k, Meta ~10k, Stability ~4k) while demand grows "10 folds every six months," so decentralization must let competitors share idle capacity. Most striking are his AI-era predictions: AI will solve web3's UX problem ("composability happen through a chat"), and AI writing code on an unstoppable network makes Akash literally a token-governed "Skynet" (Akash = sky in Sanskrit). He frames web3 as fundamentally about energy efficiency ("web3 is greener"), pointing to 7.2 million underutilized data centers and idle home hardware — his PlayStation, Xbox, and M1 Macs — as wasted compute. Closes with SIG-based community governance plans and a call for regulators to distinguish protocols (Uniswap) from companies (FTX) and decouple infrastructure from DeFi/NFTs.

## Topics

supercloud, decentralized cloud, gpu shortage, ai demand, open source, energy efficiency, home compute, cloud costs, aws margins, kubernetes, akash origins, governance, sigs, regulation, ai code generation

## Predictions & Notable Claims

### [ai-agents] Akash as a token-governed "Skynet" where AI writes code no one can stop
> "What's even more crazier is when AI writes code and Akash is unstoppable, and no one can stop AI from using Akash... Akash means the sky in Sanskrit... if you convert that into English it's Skynet Network. So it's weird, you know, it's an unstoppable Sky Network where AI writes code to serve either AI... but since Akash is decentralized and has a governance model that's controlled by the token, people now have control over the supply of the future... I think the new Skynet is going to be very different actually."
> — [00:27:21](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1641s)

**Context:** Riffing on GPT writing Solidity contracts and code; he argues token governance keeps humans in control of AI's compute supply.

### [ai-agents] Deploying to Akash will happen through chat
> "Usability is getting solved so rapidly, especially the AI, ChatGPT... right now I write a lot of code and my mode right now is I don't even click buttons — I write a comment and the code gets written for me... very soon you're going to see Akash-like composability happen through a chat... the user experience is not going to be a factor that's going to be limiting for decentralized applications."
> — [00:26:39](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1599s)

**Context:** Asked about crypto UX maturing; February 2023 prediction that LLM interfaces would erase web3's usability gap.

### [local-compute] Idle home GPUs — PlayStations, Xboxes, Macs — are wasted compute
> "If you go beyond data centers, just look at the compute that we have unused in our homes. I have a PlayStation and Xbox right behind me that's just sitting there — I probably use it once or twice a year — but just sitting there with powerful GPUs. And the computers, your Macs have M1 chips, which are very powerful GPUs that are not used... there's a lot of underutilized resources that are spread globally that is using enormous amounts of energy that needs to be fixed."
> — [00:30:58](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1858s)

**Context:** Extending the underutilization argument from data centers to consumer devices — home hardware as future cloud supply.

### [energy] Decentralization is a global energy-efficiency play; "web3 is greener"
> "I look at decentralization as a way to improve global energy efficiency for computational resources, just pure and simple... hyperscalers are building new data centers to expand... whereas web3 and decentralization is inward-looking at what we have already deployed... web3 is greener for me. Like, web3 is about efficiency and improving the global energy usage efficiency."
> — [00:30:16](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1816s)

**Context:** Answering what web3 infrastructure means; he cites ~7.2 million data centers, mostly underused, with wasted carbon and cooling ([00:28:49](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1729s)).

### [gpu-economics] AI demand grows 10x every six months; decentralize or few companies control AI
> "Very few companies are going to control chips, are going to control one of the most important innovations that we have, AI, and that's not okay. And the demand is just increasing by 10 folds every six months. So to serve that demand you need to decentralize... and share these resources — there's no reason Facebook can't share their resources with Stability AI and vice versa when they're not using that."
> — [00:34:39](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=2079s)

**Context:** Early-2023 GPU-scarcity thesis, weeks after ChatGPT's launch made A100s scarce.

### [gpu-economics] A100s: five-week waits and concentrated ownership
> "Today we have something called Nvidia Tesla A100s... right now to get Nvidia A100 it takes about five weeks wait time — there is just not enough chips... I think Amazon has about 20,000 of them, Facebook has 10,000, Stability AI has four thousand... if you go to Amazon you can get A100s — unless you pay them a lot of money, they're not going to give it to you."
> — [00:33:56](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=2036s)

**Context:** Quantifying AI training-chip scarcity and concentration to justify a decentralized GPU marketplace.

### [cloud-decentralization] Akash is a "supercloud"
> "The actual term for what Akash does is it's called a supercloud. Akash is [a] supercloud in the sense that it aggregates various heterogeneous resources to give a homogeneous interface, to make it easy to deploy, easier to manage, easier to secure... across different servers, and it promises sovereignty but at scale."
> — [00:16:33](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=993s)

**Context:** His canonical "supercloud" framing — own your data center for baseline, tap the network for burst capacity.

### [cloud-decentralization] Half of every dollar for online services goes to three clouds
> "A16z did an amazing blog post analyzing their companies... as well as the public companies... on average, half of every cent, every dollar you spend goes to Amazon, Google and Microsoft on online services... Twitter... burning like 1.5 million dollars a day on the cloud... Asana spends 60% of their margins on Amazon."
> — [00:07:55](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=475s)

**Context:** The cloud-tax argument (a16z "Trillion Dollar Paradox"); later adds AWS ~40% overall margins, ~90% on EC2 instances ([00:19:27](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=1167s)).

### [cloud-decentralization] 85% of data-center compute is unused
> "As we're deploying our software to a lot of these data centers, we discovered most of the compute is not used — like 85% of the time a data center is not used."
> — [00:12:57](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=777s)

**Context:** The pre-blockchain (2015) discovery that seeded the Akash marketplace idea.

### [cloud-decentralization] Decentralization lets competitors cooperate
> "There's no reason [why], if Twitter is doing AI, for them [not] to be able to sell their underutilized capacity to Facebook... and do so in a way that is decentralized and you don't require trust. So I think decentralization is an amazing way for competitors to cooperate."
> — [00:36:05](https://www.youtube.com/watch?v=XlFnp7eUw3M&t=2165s)

**Context:** On capital-efficient AI: trustless marketplaces let rival companies monetize idle GPUs to each other.
