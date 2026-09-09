---
id: pod-peoples-ai-solving-ai-energy-crisis
title: Solving AI's Energy Crisis with Decentralized Compute, w/ Akash CEO Greg Osuri
channel: The People's AI: The Decentralized AI Podcast
date: 2025-07-31
duration_min: 46
url: https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134
type: podcast
greg_speaks: yes
oneliner: Masterclass interview on AI's energy wall, decentralized-training breakthroughs, and StarCluster's plan to put GPUs in solar homes.
---

## Summary

Long-form interview with host Jeff Wilser (season sponsored by a decentralized ML protocol Whisper renders as "Jensen" — almost certainly Gensyn). Greg lays out first principles: AI is a "substrate of civilization" like electricity and water, yet high-density compute is controlled by whoever can secure enormous energy. He argues DOE/Lawrence Berkeley's projection of data centers reaching 12% of US energy by 2028 is deeply conservative (he says people project 30-35%), walks through why supply can't respond — no free nuclear reactors (96 in the US at 93% utilization, Three Mile Island already leased by Microsoft, 14-year build times), century-old transmission, renewables failing at utility scale — so companies burn fossil fuels: OpenAI's 4.5 GW Abilene, Texas site would emit ~2.5-2.7M tons of CO2/year, two-thirds of Vermont's emissions, and "every company is adding one more state of emissions."

His alternative: change the math instead of the grid. He surveys the last year of decentralized-training progress — low-communication optimizers (DeepMind's DiLoCo, Prime Intellect's 10B-parameter run, Nous Research's DisTrO cutting bandwidth ~875x), asynchronous/swarm training that kills the straggler problem, and verification via zero-knowledge gradient proofs — and claims distributed training will hit GPT-3 level by end of 2025. Five decentralized-training papers at ICML mark acceptance by traditional AI. He recaps his congressional testimony ("let the AI go to the power source") and details Akash's StarCluster program: phase one on ~5,000 underused telco edge data centers, then into homes (partners reaching ~22M US homes), with a solar-fed 4090 box that soaks up excess rooftop energy under the 1,800 W residential limit — a consumer version targeted within six months. Closes with the sovereign-compute vision ("compute is going to be like spice"), data centers as wartime "sitting ducks," GPU feudalism, and praise for the White House AI Action Plan's open-source emphasis. Whisper garbles several names (Gensyn→"Jensen", DiLoCo→"DialaCo", Nous→"News Research", straggler→"strangler", Abilene→"Albalin", Three Mile Island→"three-mile-long island") and one stat (the Iowa Google facility's "half a terawatt / 500 gigawatts" line, presumably half a gigawatt / 500 megawatts).

## Topics

ai energy, decentralized training, home compute, solar, star cluster, sovereign compute, nuclear power, carbon emissions, gpu economics, open source ai, congressional testimony, grid fragility

## Predictions & Notable Claims

### [other] AI is a substrate of civilization
> "If you look at AI, it is a substrate of civilization. There are very few substrates that we have historically. We had electricity as a substrate. We had water as a substrate... So the foundational technology is not a feature. There's no technology or no area in humanity that AI will not touch."
> — [00:02:29](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** His opening framing; follows with the thought experiment "electricity is so important, but it's only controlled by three people... How would that make you feel? It doesn't matter if the people are good or bad. People don't last forever" [00:03:57].

### [energy] DOE's 12%-by-2028 data-center forecast is conservative; reality is 30-35%
> "They've taken a very conservative estimate and said, hey, at the minimum, I think we're going to do, like, 12%. Reality, I think people project anywhere from 30% to 35%, and it's actually resonating."
> — [00:06:28](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Refers to the DOE-commissioned Lawrence Berkeley study projecting data centers growing from 4.4% of US energy in 2023 to 12% by 2028 [00:05:47]; cites Altman's approval for 4.5 GW in Texas — "almost five nuclear reactors" — as evidence.

### [energy] There are no free reactors in America
> "The last nuclear reactor took about 14 years in the U.S.... We have about 96 reactors in America. They're fully utilized 93% of the time. The last remaining reactor was the Three Mile Island in Pennsylvania that was scooped up by Microsoft and a 20-year lease. So there are no free reactors in America."
> — [00:07:15](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Why nuclear can't rescue AI demand on any relevant timescale: "It doesn't matter if you want to build. You just can't build" [00:07:59]. (Whisper renders it "three-mile-long island.")

### [energy] Musk's 50 million GPUs make every official forecast look quaint
> "Elon said they want to build... They want to bring about 50 million GPUs by next five years. H100 equivalents... H100 takes about a kilowatt in energy. You can do the math... So the predictions from Department of Energy, I think, are very, very conservative."
> — [00:08:45](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** The 50M figure lands at end of block [00:07:59]; 50 million kilowatt-class chips implies ~50 GW of new demand from one company alone.

### [energy] Every AI company is adding one more US state of emissions
> "The 4.5 gigawatt facility in Texas, if you burn fossil, because there's no other way, will generate about 2.5 million to 2.7 million tons of carbon every year. That's more than two-thirds of all the CO2 emissions done by Vermont in 2023. It's almost as much as a U.S. state emitting. We're talking about one company."
> — [00:10:19](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Extends it: "So we have Vermont, Connecticut, New Hampshire. Every company is adding one more state of emissions. This is 2025" [00:11:01] — equal to 2 million cars' exhaust next to a town of 100,000. Agrees with host that growth from here is exponential, not linear [00:11:48].

### [decentralized-ai] The fix is changing the math: 875x less communication
> "Can we actually reduce the amount of energy bandwidth that's needed between nodes?... They were able to reduce communication or improve bandwidth requirements by 875x. So from, I think, like 80 gigabytes to, like, 70 megabytes."
> — [00:14:16](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Surveying low-communication optimizers: DeepMind's DiLoCo paper (Whisper: "DialaCo"), Prime Intellect's fully decentralized 10B-parameter model, and Nous Research's DisTrO (Whisper: "News Research"). First quoted sentence is at [00:13:22].

### [decentralized-ai] Distributed training hits GPT-3 level by end of year
> "The biggest model is 72 billion parameter model. For comparison, GPT-3 was 150 billion parameter model. So we're very, very close to GPT-3... So if you were to ask me where distributed training is, it's about pre-ChatGPT-3. And by end of the year, it will be ChatGPT-3 level."
> — [00:19:37](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Dated benchmark prediction (end of 2025). Cites the sponsor protocol (likely Gensyn; Whisper: "Jensen") running ~12,000 models training concurrently, plus zero-knowledge gradient verification enabling permissionless nodes [00:18:11].

### [decentralized-ai] Traditional AI now accepts decentralized training: five papers at ICML
> "Why last year there was dismissal of this? No one even thought this was possible. This year, there are five papers that are all presenting at ICML. That's a big shift because that is acceptance by traditional AI."
> — [00:22:26](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** He had just given an hour-long invited lecture on energy at ICML Vancouver to a packed room of 300, "completely opposite to crypto... it reminded me of what crypto used to be back in 2013" [00:20:17].

### [energy] Don't bring power to the AI — let the AI go to the power source
> "If we can figure out how to decentralize or instead of bringing the power to the AI, let the AI go to the power source. So if you have wind in Texas during the evening, let's go train an AI model there. Because now you have asynchronous. You can pretty much go anywhere you want."
> — [00:24:57](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** His message to Congress; agrees with host it's the same playbook Bitcoin miners use to chase off-peak grid energy.

### [local-compute] A chip at home consumes the solar energy you can't store or sell
> "We do have the greatest fusion reactor sitting in our sky that we don't capture... You can't sell it back because no one's going to buy your energy during the day... And batteries are still, the economics of batteries are still a little shaky... If you put a chip, like, I put a kilowatt chip, which 4090 is a kilowatt."
> — [00:25:37](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Concludes "If I can put a chip at home, that'll consume all the excess energy" [00:26:23] — GPUs as the economic alternative to home batteries for excess solar.

### [local-compute] "By the end of the year, we'll have a very high-quality model that competes with centralized models"
> "By the end of the year, we'll have a very high-quality model that competes with centralized models, right? So it's not far out. Now, I'm putting my money where my mouth is and say, well, look, we are actually going to do it without any help from the state and the government. We don't need to because economics, number one, play really well."
> — [00:27:07](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Tied to his StarCluster congressional proposal — decentralization instead of overbuilding data centers.

### [energy] Rooftop solar is the cheapest energy: a Texas ranch roof yields ~80 kW
> "The cheapest is solar and a home and wind. Well, every house has a rooftop. We just don't use a rooftop. Like in Texas, a typical ranch house has 4,000 square feet of rooftop. That generates about 80 kilowatt energy for six hours a day."
> — [00:28:40](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** After walking unit economics: Gen-3 nuclear ~15¢+/kWh, natural gas ~10¢, diesel 32¢. He then holds up a StarCluster prototype box with a 4090 GPU running at his home [00:29:27].

### [local-compute] StarCluster: 5,000 edge sites first, then 22 million homes
> "Of course, the goal is to go inside a house. That's the vision of StarCluster. We are working with partners now, and I don't want to disclose who they are to finalize the terms, but some of our partners are in about 22 million homes in America."
> — [00:31:42](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Phase one uses underrated telco edge data centers — "In the U.S. alone, we have about 5,000 edge sites" with water, energy, cheap bandwidth and green-energy PPAs [00:30:13].

### [local-compute] A GPU data center at home is not a far-out reality; consumer box in ~6 months
> "If you can optimize your bandwidth and your energy costs, I think having a GPU data center at home is not a far-out reality. And we have the partners, we have distribution to get there... We think we'll have it ready by next six months."
> — [00:35:22](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Home config must fit residential limits — "a typical house in the U.S. runs at around 15 amps at 120 volts, which gives you about maximum 1,800 watts" [00:33:43]; still "decently profitable" at that size. Confirms host's vision of a device where excess solar funnels into AI compute that "will pay for the solar and the battery and everything" [00:32:47].

### [local-compute] Sovereign compute: "compute is going to be like spice"
> "Our long-term vision has been the same since our white papers we wrote in 2018. It hasn't changed at all. Our vision is sovereign compute. Compute is going to be like spice... Historically, spice was the most valuable commodity... Instead of giving up your sovereignty for comfort, we can have both."
> — [00:36:05](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** The spice analogy: not essential at first, then the most valuable commodity; "we all use compute. We just don't realize how much compute we use."

### [cloud-decentralization] 500 US data centers are sitting ducks in a conflict
> "In case of a national conflict tomorrow, international conflict, what do you think is going to get targeted? These little sitting ducks, large targets... These are massive data centers. We all know where they are. There are about 500 of them in America... When someone takes out your infrastructure, they're going to target this infrastructure."
> — [00:38:23](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Follows "the more you study about the grid, the more prepper you become... the more you realize how fragile we are" [00:36:50], citing the Texas freeze; decentralization removes fragility the way Bitcoin's design does [00:39:12].

### [local-compute] Cheaper, better, open — sovereignty for the next generation
> "It is cheaper, it's better, it's open. And if my child is going to grow up in a world relying on this technology, I want to make sure that she has complete sovereignty on what the technology is. And that's the vision. That's always been the vision."
> — [00:39:59](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** First-principles cost argument: compute is hardware + bandwidth + energy + water — "resources that we all have" locally, peer-to-peer, without a centralized entity.

### [gpu-economics] GPU access is feudalism
> "In order to get decent GPUs, you need to have long contracts with cloud companies. They're going to pick and choose the highest bidders, and it becomes prohibitively expensive. It reminds you of the Middle Ages where you had feudalism... These few lords own the grain, and we all have to stand in line to get the grain because if you don't, you don't get the AI."
> — [00:40:45](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Recalls 2023, when an AI researcher couldn't get an A100 without long cloud contracts — the scarcity he says he warned about on stage 10 years ago.

### [open-source-ai] Open source is keeping the lights on — and is the foundation for decentralization
> "We were very, very scared because open source is keeping the lights on for hundreds of millions, thousands of developers right now. Because closed source is getting stronger and stronger. The only way to compete with that is through open source. And open source will give foundation to decentralization in terms of training and whatnot."
> — [00:42:25](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** Reacting to the White House AI Action Plan putting "encourage open source and open-weight AI" on page four — "That's a first. Never saw that coming from White House."

### [energy] China builds a nuclear reactor's worth of solar every two days; America's edge is decentralization
> "Chinese are building a gigawatt of solar every two days. I mean, that's equivalent to one nuclear reactor every two days right now. And they're very, very good at it. We're not doing that. And we can't do that. We're not Chinese, right? What we can do is decentralization. That we are very good at."
> — [00:44:00](https://podcasts.apple.com/us/podcast/solving-ais-energy-crisis-with-decentralized-compute-w/id1792518750?i=1000720143134)

**Context:** His geopolitical close: the US can't out-build China on generation, so decentralized compute is America's comparative advantage; praises the AI Action Plan for "accelerationism taking the center stage" [00:44:50].
