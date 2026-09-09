---
id: pod-block-fuel-gpu-demand-greg-osuri
title: "Will demand for advanced AI chips (GPUs) be 1:1 for every person? We sit down with Greg Osuri to find out."
channel: Block Fuel
date: 2024-10-02
duration_min: 33
url: https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211
type: podcast
greg_speaks: yes
oneliner: Token2049 Singapore interview: the one-H100-per-person demand thesis, NVIDIA/Brev integration, open-source AI policy, and Chips Act critique.
---

## Summary

Recorded at Token2049 Singapore. Greg lays out the GPU scarcity picture: Elon Musk's "GPUs are harder to get than drugs" line, Larry Ellison "begging" Jensen Huang for chips over dinner, and NVIDIA backlogged 18 months to two years on H100s (longer for B200s). His headline math: Llama 3.1 405B inference takes ~24 H100s to serve 20-30 concurrent connections at high precision, so serving Apple's user base well would need on the order of a billion H100s against ~700,000 in existence — extrapolating to one H100 per user as AI reaches 8 billion people. He frames the stakes as a crossroads: either "digital lords" like Ellison control chip access, or the people who use AI do.

On Akash: introduced GPUs a year prior, now at product-market-fit with ~50% overall utilization (60-70% for high-density GPUs), ~400 GPUs and ~20,000 CPUs — deliberately small supply pre-incentives, versus competitor networks under 1% utilization. He details the NVIDIA relationship (Brev fine-tuning-as-a-service routing overflow demand to Akash so users don't defect to AMD), a provider incentive pilot to learn demand/supply curves before on-chain incentives gated on cryptographic resource verification, and differentiators: only system with a global orchestration layer (attach disks/IPs, stitch services), reverse-auction provider selection, and open source (a Korean security team caught an auth bug before exploit). He names Nosana and Flux as legitimate open-source competitors and calls closed-source "decentralized" GPU projects fraud-prone, saying some "straight up lied about the numbers."

Policy segment: he lobbies on Capitol Hill to keep AI open, says OpenAI/Microsoft/Amazon fight to close AI because open-source AI "threatens their existence," reports bipartisan consensus for low-touch AI regulation, criticizes the Chips Act (Intel layoffs, TSMC keeping 3nm in Taiwan), and argues railroads died from corruption-driven overregulation — recommending Rothbard's Progressive Era. Roadmap: account abstraction client for non-crypto ML users, unnamed new product "before the end of the year."

## Topics

gpu shortage, h100, ai inference demand, nvidia, brev, gpu marketplace, provider incentives, open source ai, ai regulation, chips act, censorship resistance, protocol neutrality, depin

## Predictions & Notable Claims

### [gpu-economics] NVIDIA is backlogged 18 months to 2 years on H100s
> "The demand is so high and increasing so fast, the supply is not catching up to any degree of satisfaction. Right now, NVIDIA is backlogged for about 18 months to two years, I believe, for H100s, which is the most widely distributed GPUs from NVIDIA, and even longer for the newer models, the B200s."
> — [00:03:53](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Setting up the scarcity thesis with the Elon Musk "harder to get than drugs" quote and the Larry Ellison/Jensen Huang dinner anecdote.

### [gpu-economics] Serving Apple's users would take a billion H100s — only ~700,000 exist
> "For something like Llama 3.1 [40]5B... it takes about 24 H100s to do inference... that can serve about 20 to 30 concurrent connections at high precision... to serve Apple's users at decent performance, you need a billion H100s. And there are about, I believe, about 700,000 H100s right now."
> — [00:05:15](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Back-of-envelope inference math (spans into the 00:05:58 block) prompted by Apple Intelligence onboarding "a billion new devices that'll have AI inference."

### [gpu-economics] The endgame is one H100-class GPU per user, refreshed yearly
> "Assume what the demand is going to be when we onboard 8 billion users, which is going to happen... imagine one H100 per user. And that gets outdated within a year. So then you have newer, bigger models that are more intelligent, that need bigger chips... I haven't even touched the surface of the kind of demand that I see for H100."
> — [00:05:58](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** The episode's titular 1:1 chips-per-person prediction (spans into the 00:06:41 block); he repeats it later: "we need a GPU H100 per human being on the planet" (00:26:00), arguing no single protocol can serve that alone.

### [decentralized-ai] The AI crossroads: digital lords vs. the people
> "The choice is really like, is it going to be Larry Ellisons of the world, the new digital lords of the world, that are going to control who gets the chips, to us peasants? Or is it going to be us, the people that actually rely on these chips and use AI on a daily basis...? That's the crossroads we're at with AI right now."
> — [00:07:22](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Capping the demand math, referencing Ellison's nuclear-reactor datacenter plans; his core framing of why decentralized compute allocation matters.

### [open-source-ai] Incumbents fight to close AI because open-source AI threatens their existence
> "It's very obvious OpenAIs and Microsofts and Amazons of the world are fighting to keep AI closed, because open-source AI fundamentally threatens their existence. Because open-source AI is the biggest enemy of OpenAI, which has nothing to do with open-source AI... OpenAI is open only in its name."
> — [00:15:01](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Asked about regulation; he calls it "crony capitalism" ("chronic capitalism" in the transcript) and describes his Hill advocacy. He adds the "good guy with a gun" defense-of-open-AI analogy at 00:16:24.

### [open-source-ai] Washington consensus: low-touch AI policy unless open source causes concrete damage
> "The general consensus we spoke, for most sides of the party, both Democrats and Republicans, is that AI, when it's open, when it's more accessible, benefits most Americans and the world as a result, versus being guarded by the few... unless there is concrete damage in terms of open-source AI that we can look at, we're not going to get regulated."
> — [00:15:43](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Reporting from his meetings with the House Commerce Committee's AI action group (quote spans into the 00:16:24-00:17:05 blocks), whose staff recognized Akash as "at the intersection between AI and [DePIN]."

### [crypto-depin] Akash at ~50% utilization while rival GPU networks sit under 1%
> "We are at a product market fit stage for GPUs. And we have real usage. We have about, say, 50 [percent] overall utilization, and I believe 60 to 70 percent utilization for high density GPUs... a lot of the other networks that have launched just throw the towel and see what happens. But their utilizations are less than 1%."
> — [00:08:45](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** Capacity stats (~400 GPUs, ~20,000 CPUs, quote spans into the 00:10:10 block); he argues incentives before demand are wasted, and says on-chain incentives await cryptographic (not TEE-based) resource verification.

### [other] Regulation, not competition, killed American railroads — a warning for AI
> "Railroads did not die because airplanes came or motorways came... railroads died because they got overly corrupt and regulated as a result, and that led to the death of a whole industry. And that's the reason why we have railroads in Asia and Europe but we don't have railroads anymore in America."
> — [00:19:48](https://podcasts.apple.com/us/podcast/will-demand-for-advanced-ai-chips-gpus-be-1-1-for-every/id1705468368?i=1000671509211)

**Context:** His historical argument against heavy AI/chip industry intervention (quote spans into the 00:20:30 block), paired with a Chips Act critique ("the intention is always good, but the implementation is always bad") and a recommendation of Rothbard's Progressive Era.
