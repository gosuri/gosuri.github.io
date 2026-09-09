---
id: 59w3DyJWAQc
title: The Infrastructure Behind Agentic Finance, with Shashank Yadav and Greg Osuri of Akash Network
channel: Fraction AI
date: 2026-04-23
duration_min: 63
url: https://www.youtube.com/watch?v=59w3DyJWAQc
type: livestream
greg_speaks: yes
oneliner: Fraction AI livestream where Greg covers Akash's origins, home-GPU rollout, local AI privacy, energy scarcity, and agent-native crypto rails.
---

## Summary

A Fraction AI livestream interview with Greg Osuri (and Fraction AI founder Shashank Yadav) that is unusually dense in Greg's core theses. He recounts Akash's origin: growing up on open source in 1990s India, container/Kubernetes-era infrastructure work, the Cornell "supercloud" concept, the fallacy of cloud TCO (SaaS companies spending ~50% of revenue on cloud, Netflix ~70%, cloud margins 60-70%), and the conviction that "access to the cloud should be open."

On the GPU marketplace he describes a structural shift from indie devs renting single GPUs to enterprises wanting 50-100 node 8xH100 clusters on long-term contracts, a supply pipeline of 10-15K GPUs (15-20K after a marketplace redesign), ~70% utilization, and customers like Venice and Nous Research. He argues most "DePIN" GPU networks are 1-2% real, but says the energy crisis plus maturing distributed training/inference now make home 4090s/5090s a viable supply source — announcing Akash's "home node" program (Windows installer, earn dollars while idle, 10-minute programmatic reclamation for gamers) with an enterprise partner rollout. He predicts distributed training reaches state of the art in 2-3 years, describes running Llama at home so camera/sensor/audio feeds never touch the cloud, and warns about reliance on Chinese open-source labs. He's blunt that crypto has a brand problem with AI — Akash lost a major enterprise deal by forcing AKT purchases, AkashML (100B tokens/month) hides its crypto rails. On agents: agents already use Akash via MCP in minutes; he wants credit-card apps for humans and private-key apps for agents, arguing crypto rails are the only bot-protection-free payment. Extended energy discussion: sun as untapped reactor, his Congress testimony on renewables for AI training, hub-based grids vs edge generation, 4-year transformer and 14-year turbine lead times, >100MW data centers being nearly impossible, and space data centers plausible in 3-5 years.

## Topics

decentralized cloud, gpu marketplace, home gpus, local ai, privacy, distributed training, energy, ai agents, crypto ux, open source ai, akashml, depin, space data centers, nuclear, solar

## Predictions & Notable Claims

### [cloud-decentralization] Half of every SaaS dollar goes to cloud rent-seekers
> "You would see a lot of these financials of a lot of SaaS companies — on an average, about 50%, every half of every dollar you pay was going to a cloud provider for the services. And in some cases like Asana... about 60 to 70%... I think like Netflix was 70%... and the margins were 60, 70% for these cloud providers... The access to the cloud should be open, and the software that governs cloud should be open. It should be built by the people that use it."
> — [00:05:46](https://www.youtube.com/watch?v=59w3DyJWAQc&t=346s)

**Context:** Origin story — "the idea that total cost of ownership is going to be lower on the cloud was just a fallacy"; Amazon as "a giant rent seeker" killing open-source business models.

### [energy] We called GPU scarcity, then energy scarcity — every resource AI touches gets scarce
> "When we said GPUs are going to [be] scarce, we also called out energy scarcity — energy is going to be scarce. And now we're seeing Elon Musk going on stage and going on podcasts talking about energy. I testified before Congress about energy last year... I feel like every resource that AI touches is getting scarce right now."
> — [00:15:11](https://www.youtube.com/watch?v=59w3DyJWAQc&t=911s)

**Context:** Wrapping the origin story — Akash put GPUs on the roadmap pre-ChatGPT ("ChatGPT came in '23, it blew up and we blew up"), and he claims the same early-call pattern for energy.

### [gpu-economics] Market shift from single GPUs to 50-100 node H100 clusters on long-term contracts
> "The winds have shifted from people individually getting individual GPUs to taking large quantities of GPUs... we're in the process of refactoring our marketplace to support large orders... 50 to 100 nodes, each node having eight H100-type nodes... people are leaning towards long-term contracts versus on-demand... 'I'm going to pay $2 for H100, I want this price to be locked in for the next two years.'"
> — [00:16:40](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1000s)

**Context:** Asked how many GPUs Akash has: pipeline of 10-15K GPUs waiting to come online, 15-20K expected after the redesign; on-demand demand has shifted mostly to inference hosting.

### [crypto-depin] Only 1-2% of GPUs on incentive-driven DePIN networks are real
> "There's a lot of, quote unquote, DePIN networks that came about and just incentivized left and right all kind of GPUs, and we noticed — according to them, talking to them — only about 1% to 2% were actually real... or with a degree of quality that's acceptable."
> — [00:19:35](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1175s)

**Context:** Why Akash incentivized enterprise GPUs in data centers ("pips"/pilots) rather than home GPUs; quality verification in distributed environments is unsolved.

### [local-compute] Energy crisis makes home 4090s/5090s a real GPU supply source
> "Now with the energy crisis, data center GPUs are no longer the only source we can tap into, because the data center space now is so hard to get in America or in the West... distributed training and distributed inference are getting good... to a point [that] actually we can consider home computers, 5090s and 4090s, as a potential source of GPUs — considering we solve the reliability problem."
> — [00:22:32](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1352s)

**Context:** A notable reversal from Akash's enterprise-only GPU stance, driven by data-center/energy scarcity; he stresses fault tolerance (not avoidance) via intelligent routing and workload handover, plus TEEs on consumer AMD/ARM chips for privacy workloads.

### [local-compute] Home node program: gaming rigs earning dollars while idle
> "We announced home node... this program to attract more computer nodes that are in the home, that are 4090s and 5090s. So we're going to see a big [rollout], and we have an enterprise partner we're rolling out with... we have a huge rollout plan for home computers... When that happens we want to be the first, we want to be the platform to take advantage of distributed training."
> — [00:23:56](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1436s)

**Context:** Home node details given later: a simple Windows/Linux installer for non-technical users, contribute while at work or asleep, "you earn in dollars when it gets used," with a ~10-minute programmatic reclamation window so gamers can take their machine back.

### [decentralized-ai] Distributed training reaches state of the art in 2-3 years
> "They trained a 72 billion parameter model which is better than Llama 70B... there are a lot of models that are trained in a fully distributed manner... that I believe will achieve SOTA in like two to three years. It's not there yet."
> — [00:26:49](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1609s)

**Context:** Citing frameworks from Pluralis, Gensyn, and Prime Intellect's OpenDiLoCo, plus a Bittensor subnet's 72B model, against the 3.2 Tbps NVLink bandwidth objection; he also mentions running Llama on his own home GPU. (Caption garbles "SOTA" as "sort.")

### [local-ai] My home data goes to local GPUs — it never touches the cloud
> "For me... it's not about crypto, it's about privacy. I run GPUs at home; all my data that gets generated in my home — camera feeds to sensor feeds to audio feeds — go into the local GPUs. It doesn't touch the cloud, because I like privacy... I don't want my private intimate data to be on a cloud because anything that leaves your network is vulnerable, and you can't really trust anyone with your data except yourself. That's what I truly believe in."
> — [00:32:33](https://www.youtube.com/watch?v=59w3DyJWAQc&t=1953s)

**Context:** How he pitches AI people without mentioning crypto — personal local-AI setup as the flagship privacy use case. Core statement of his local-compute thesis.

### [open-source-ai] What happens when Chinese labs stop shipping open models?
> "Shouldn't this be cheaper or free? Like, what happens when the Chinese labs stop producing state-of-the-art open source models?... Then how do you get your models? Well, you can get from Claude or OpenAI, but then you end up paying a lot of money. I think it will come a time when decentralization becomes very, very important."
> — [00:34:45](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2085s)

**Context:** Arguing the economic/monetary angle for decentralized AI to a crypto-skeptical AI audience; notes younger AI engineers lack the open-source ethos because "there was no struggle" — everything appears free while monetized invisibly.

### [decentralized-ai] If we rely on these companies for intelligence, we lost as a society
> "I was at ICML last year. I gave a talk about training and distributed training becoming a real thing, because if we have to rely on these companies to give us intelligence, then we lost as a society. And that message seems to resonate quite well with a lot of folks in AI."
> — [00:35:29](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2129s)

**Context:** His strongest recurring framing of AI concentration risk; follows the "who can get GPUs at OpenAI/Anthropic scale" economics argument.

### [other] Forcing crypto on AI customers was our biggest mistake
> "We lost such major deals because we mandated crypto purchases... it's a very big company and everybody knows this company. We forced them to buy AKT... the finance department was very unhappy with owning crypto... we eventually lost the deal because of crypto. So if you're trying to sell to anyone decent in AI, don't do crypto. Trust me, it doesn't work. And I think trying to force crypto on AI people was our biggest mistake we made."
> — [00:39:47](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2387s)

**Context:** Candid admission; earlier he notes Akash's website no longer mentions crypto at all and products like AkashML were built partly "to get away from crypto branding" (00:36:56).

### [other] AkashML processes ~100 billion tokens a month
> "We're processing about 100 billion tokens a month. I think we do more tokens on OpenRouter than Cloudflare and whatnot, which is pretty decent volume — and nobody that uses AkashML knows we're using crypto on the underneath rails."
> — [00:38:22](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2302s)

**Context:** AkashML as the crypto-invisible managed inference product; presented as proof that hiding the rails drives growth.

### [ai-agents] Agents use Akash in minutes; humans can't onboard them to AWS
> "An agent is not going to go open an Amazon account and go through verification... Can an agent go use Akash right now? Easily — a lot of agents use Akash now. It needs to create a key and there's an MCP server, you can discover all the endpoints, there's a command line... It doesn't need to talk to a human being, as long as it has tokens... An agent has figured out how to use Akash in a matter of minutes."
> — [00:44:44](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2684s)

**Context:** On whether agents will run on-chain transactions; he opens the section saying "agents will save crypto or destroy crypto" (00:41:54) since agents don't suffer crypto's UX problem the way humans do.

### [ai-agents] Decouple the stack: credit cards for humans, private keys for agents
> "I almost want to decouple the applications. I want to build credit-card-only applications for humans, and private-key-only applications for agents... just optimize experience for agents and an optimized experience for people... What do you do when you remove bot protection? You got to go crypto... I'm going to challenge people to remove bot protection if you're accepting credit cards, and see what happens in terms of fraud. So I think that's a strong case for crypto."
> — [00:47:39](https://www.youtube.com/watch?v=59w3DyJWAQc&t=2859s)

**Context:** Credit-card fraud (state-sponsored, e.g., North Korean actors on their test servers) forces bot protection, which blocks agents; pure crypto rails ("Open Bazaar style... no login, no emails") are the agent-native alternative. Bot-protection challenge quote at 00:49:03.

### [energy] The sun is a giant nuclear reactor we waste; renewables should train AI
> "We have a gigantic nuclear reactor in the sky called the sun... it just doesn't make sense to me that we don't use most of it — most of it goes to waste — while we are building such infrastructure to compensate for our lack of motivation to use the sun's energy. I'm a big proponent of renewables... my testimony before Congress was about leveraging renewables to train AI."
> — [00:51:15](https://www.youtube.com/watch?v=59w3DyJWAQc&t=3075s)

**Context:** Rapid-fire question "which is more underutilized: GPUs, energy or human brain power?" — answer: brain power, "but more practically, energy."

### [energy] The grid was never designed for edge generation
> "The challenge in solar is storage and transmission... our grid is not designed to be peer-to-peer — it's designed to be hubbed. That means you generate energy in one place and you distribute the energy. It's never designed to generate energy at the edge and distribute back to the grid."
> — [00:53:22](https://www.youtube.com/watch?v=59w3DyJWAQc&t=3202s)

**Context:** Discussion of nuclear vs solar; he's pro-nuclear ("Europe went anti-nuclear and it's one of the worst decisions they made," 14 years to build a US reactor) but notes nuclear fuel supply caps; energy-at-the-edge framing parallels his compute-at-the-edge thesis.

### [energy] Chips quadruple yearly; energy has 4-14 year lead times
> "It's very, very hard to get anything above 100 megawatts right now in terms of data centers... training scale is impossible because of energy... [Nvidia] literally quadrupled their supply chain. Energy doesn't work that way — there is a four-year lead time for transformers right now, like four years, and about a 14-year lead time for the turbines and generators."
> — [00:56:53](https://www.youtube.com/watch?v=59w3DyJWAQc&t=3413s)

**Context:** "Does AI have a compute problem or an energy problem?" — "Right now it's energy." He contrasts Nvidia's H100 production ramp (caption-garbled figures: ~500K then ~2M) with grid hardware lead times; worst case is a return to coal, which still needs turbines.

### [energy] Space data centers become real in 3-5 years if energy isn't solved
> "In space you have near-continuous power for solar — you can follow the sun, always be on the sunny side, you don't need batteries. The economics don't make sense yet, but they're starting to make sense as space gets cheaper and cheaper. In like three to four years, maybe in five years, you can see space data centers becoming a real thing if energy is not solved on Earth."
> — [00:59:05](https://www.youtube.com/watch?v=59w3DyJWAQc&t=3545s)

**Context:** Riffing on Elon Musk's frustration with terrestrial energy scaling; heat dissipation is solvable with radiators — "economics is the problem."
