---
id: pod-outpost-ai-sovereignty-greg-osuri
title: "AI Sovereignty: Building the Path to Individual AI with Greg Osuri"
channel: The Outpost Podcast
date: 2025-01-02
duration_min: 56
url: https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476
type: podcast
greg_speaks: yes
oneliner: The densest statement of Greg's local-AI thesis: sovereign home AI is inevitable — home GPUs, local energy, PS5s in training runs.
---

## Summary

Recorded at the Decentralized AI Coworking Hub in Austin with hosts Brody and Patrick, this is arguably the single richest episode for Greg's local-compute worldview. After a long Austin-vs-San Francisco segment (he moved 18 months prior, is raising a daughter there, praises Texas taxes/housing supply and the tech-political migration), he corrects the record that Akash is "a GPU network" — it's a general-purpose supercloud whose growth is now dominated by non-crypto AI users (Q3 2024 revenue up 1,700% YoY; 12% CMGR; a user swiping $5,000/day on the new credit-card rails). The heart of the episode is his energy-wall argument: AI compute needs grow ~5x/year, xAI's 50MW Memphis site runs on diesel because grid power doesn't exist, 2026 needs 250MW and the year after 1.2GW, US nuclear is fully booked (Three Mile Island scooped by Microsoft) and takes 7–14 years to build — therefore distributed training over heterogeneous consumer hardware (Prime Intellect's INTELLECT-1, Nous Research's DisTrO, DiLoCo) is the ~5-year window for decentralized AI, with phones, MacBooks, and jailbroken PS5s joining training runs. He describes his own build-out: a 60kW-capacity home in Texas, a George Hotz tinybox with AMD MI350s, cameras and microphones throughout his home feeding a local agent that never sends data off-premises, solar + Starlink + desalination off-grid sovereignty. Other threads: contribution-based model ownership paying inference revenue, mid-2025 as decentralized AI's mainstream moment (watch ICML papers), agent attack vectors (DNS-spoofed inference endpoints), Eliza/ai16z GitHub mindshare, and open source beating centralized AI "like what happened with Linux."

## Topics

local ai, local compute, ai sovereignty, energy, distributed training, home gpu, ai agents, decentralized ai, open source ai, nuclear power, austin, akash growth

## Predictions & Notable Claims

### [local-ai] AI is moving off the cloud and into home computers
> "Yesterday when Jensen [Huang]... introduced this like, just supercomputer for home. And if you saw that, right, so they're literally like, there's a big movement of [home AI], I would call it, where the AI is not literally on a cloud like today, but rather in home computers, right? And I believe in that vision because I've been coding a lot of AI agents these days."
> — [00:48:31](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Referencing NVIDIA's just-announced home supercomputer (Project DIGITS, CES 2025); the transcript garbles the movement's name ("AJ"). This clip also opens the episode as the cold open.

### [local-ai] Sovereign private AI at home is inevitable
> "I don't want that information to leave my home because I don't trust anything that leaves my home network in terms of privacy, right? So there's going to be a need for sovereign private AI at home. It's inevitable because nobody, I'm not comfortable with this stuff leaving my home. I'm pretty sure most people are not comfortable. But if there's an easy enough solution that you can just buy and plug and play at home, I think people will buy."
> — [00:50:34](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** He describes his target build: cameras/microphones throughout his home feeding a local tinybox cluster running inference, with agents comparing contractor meetings and producing action items ([00:49:53]).

### [local-compute] Underutilized home computers should earn revenue
> "There's a relation on more distributed AI where your home computer is going to be powerful enough. They're not going to be utilized all the time... And what happens when you have under utilization, they should be able to earn revenue, right?"
> — [00:50:34](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Immediately after the host's "You're building Jarvis" — home hardware as income-generating asset; he adds at [00:51:57]: "I don't think... whatever I'm speaking now will be, like, norm in, like, a few years" (i.e., it will be the norm within a few years).

### [energy] AI is hitting a wall with energy, growing ~5x a year
> "I think, like, AI is hitting a wall with energy. Some say it's data, but I don't believe it's data. I think there's a lot of data out there with the right incentives we can unlock the data, but we cannot get more power with the right incentives because the infrastructure doesn't exist in the United States... the energy needs are growing at half an [order of] magnitude, about 5x every year."
> — [00:28:01](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** His core macro thesis entering 2025; the 5x figure is in the [00:28:43] block (transcript garbles "half an hour on magnitude").

### [energy] 50MW today, 250MW in 2026, 1.2GW the year after
> "Elon Musk is literally burning diesel because you cannot get energy anywhere to power 50 megawatt data center. And next year, 26, we're going to need 250 megawatt data center, right? To make the better GPT, like, whatever, 5 or 6. And a year after that, we're going to need 1.2 gigawatt data center."
> — [00:29:23](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** xAI's Memphis site as the state of the art; he then walks through US nuclear being fully booked (Three Mile Island to Microsoft on a 20-year deal), 65 approved reactors, and 7–14-year build times ([00:30:46]–[00:31:27]).

### [decentralized-ai] Nuclear can't arrive in time — distributed training is the answer
> "So we have to, you know, build nuclear reactors in the next two years, which is not going to be reality. So we're going to have to explore very seriously about distributed training. Right? So, distributed training also means distributed grid. That means you can actually go, instead of concentrating too much compute in a single data center, you distribute that compute all over."
> — [00:31:27](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** He cites Prime Intellect's INTELLECT-1 (10B parameters trained over the internet via DiLoCo) as the two-month-old proof point ([00:32:08]).

### [local-compute] Phones, MacBooks, and PS5s joining training runs
> "Heterogeneous GPUs over the internet means my phone or my MacBook with the M4 can be part of a training [run]. Even if I push it, even my PS5, I sit in idle, which I play once a year... I can even hack that to make it compatible with [DisTrO]. In fact, US Air Force hacked PS2s back in the day to create a supercomputer."
> — [00:33:29](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** On Nous Research's announced heterogeneous 15B training run; he adds "imagine how many PS5s are out there that are not being used" and "we got about five years, the space, to really knock it before they build the next nuclear data centers" ([00:34:11]).

### [energy] Everyone will produce energy locally and compute locally
> "I'm building a 60 kilowatt capacity in my house, they can power, like, an H100 cluster, I mean, I think all of us are going to just be producing energy locally and having a lot of compute locally that will finally fulfill our dream of sovereignty because you need energy and you need compute."
> — [00:36:54](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** His new Texas house; he ties cheap local energy to desalination and food ("You can go completely off the grid," [00:51:17]) and later his dream AI super-ranch: "on the ranch, there's going to be data centers and solar panels... Including my AI" ([00:54:41]).

### [gpu-economics] Contribute compute, own the model, earn inference revenue
> "One of the most exciting incentive models for me was, well, if I contribute compute to you, to your model, and if I get an ownership based on my contribution from the model, that means I get inference revenues, because inference is how you make money, and training is how you spend money... if there is some ownership rights that I can get from my contribution, I think we hit the nail on the head, because that solves everything."
> — [00:38:15](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Answering "why would I lend my computer to train your model?" — the missing monetization primitive for decentralized training; he urges joining Nous's incentivized testnet.

### [decentralized-ai] Decentralized AI goes mainstream by mid-2025
> "There are a lot of people working, very, very smart people working on this stuff, that I have a lot of confidence that by mid-2025, when ICML happens, pay attention to the papers that are being submitted... and I think mid-25, you're going to see decentralized AI go mainstream, like, no doubt."
> — [00:38:57](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Expecting training runs from Nous, Gensyn, and Prime Intellect; "memes are taking the mindshare right now, but that's not going to be the case when AI is going to go mainstream with decentralized AI" ([00:39:38]).

### [open-source-ai] Open source will beat centralized AI — like Linux did
> "You'll have a deep confidence in, like, open source AI that it doesn't matter what centralized AI is going to produce, we're going to beat them pretty, pretty aggressively, right? So, it's like what happened with Linux... Look at where it is right now, 97% of the internet runs Linux."
> — [00:43:45](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Argues closed labs' moats are thinner than believed since techniques get reverse-engineered into open source quickly ([00:43:04]).

### [ai-agents] Agents on centralized AI are attackable — sovereign agents are coming
> "That's why I think a centralized API, centralized AI is so easy to fake... say you're pointing to Anthropic, and spoof the DNS to point to my fake... inference endpoint, and it can totally attack you. It's not that hard. So, if we're going to get serious with agents, we also have to get very serious with the way they're consuming the information... I think there's going to be one attack or two before we all realize that."
> — [00:41:43](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Trading agents fed spoofed alpha as the example; he predicts the industry will demand "sovereign AI, sovereign agents... tamper-proof" guarantees ([00:42:23]).

### [other] Akash grew 17x year-over-year
> "Our quarterly earnings this year for Q3, last quarter, was 1,700% compared to a year before. That is 17x growth. That is a whole order of magnitude... that's really my north star. Like, we got to grow 10x every year."
> — [00:19:48](https://podcasts.apple.com/us/podcast/ai-sovereignty-building-the-path-to-individual-ai/id1779395525?i=1000682416476)

**Context:** Growth snapshot for 2024, plus 12% cumulative monthly growth rate — "better than great" by SaaS standards ([00:21:50]).
