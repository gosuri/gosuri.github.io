---
id: oQ93LgM1N-o
title: LIVE from NEARCON Day 1 In SF
channel: The Rollup
date: 2026-02-24
duration_min: 380
url: https://www.youtube.com/watch?v=oQ93LgM1N-o
type: livestream
greg_speaks: yes
oneliner: Rollup's NEARCON SF day-1 livestream; Greg's 19-min segment: the AI energy crunch, his agent-run home, and home-GPU distributed training.
---

## Summary

Full-day (6.3-hour) multi-guest livestream by The Rollup from NEARCON Day 1 in San Francisco. Greg appears for one ~19-minute segment ([03:04:24]-[03:22:58]); other guests include Near's CPO, the Brave CEO, and various founders (captions garble "Akash" as "a cash"/"AOS"/"Akos"). Asked whether the original crypto-AI thesis (decentralized inference/training/GPU marketplaces) failed, Greg pivots to energy as AI's "dark horse": ~$2T in sovereign AI commitments mostly fund energy infrastructure, but "AI moves in months, energy doesn't" — transformers take 4-7 years, nuclear ~15 years permit-to-power, grid interconnection 10-15 years; he cites Elon Musk's "we can't build more energy on earth, go to space," IEA demand projections (~930 TWh by 2030), Northern Virginia's PJM grid going out of reliability standards by June 2027, and claims CoreWeave crashed on energy access, not chips. His answer: make energy come to compute — homes. He describes his own agent-run house in striking detail: ~10 always-on agents, an mmWave radar reading his heartbeat/breathing so coffee starts before he wakes, microphones and speakers in every room, license-plate cross-referencing, contractor timesheets, receipt-driven inventory — all running on 12 local GPUs (six RTX 5090s plus AMD chips) serving local LLMs powered by home solar, because he "would never trust the information leaving my own network." He predicts everybody will have compute at home, contributing excess solar-powered compute to distributed training runs in exchange for a stake in the resulting model's inference revenue, questions the frontier labs' moat given distillation, says agents consume 10-40x more tokens than humans, and declares that people who identify as programmers ("full stack," "backend") face zero-marginal-value obsolescence. The hosts reference this segment repeatedly for the rest of the stream ([03:44], [04:04], [04:11], [05:19]).

## Topics

ai energy crisis, local ai, home compute, ai agents, smart home, distributed training, solar, data privacy, gpu economics, memory prices, grid infrastructure, nearcon, distillation

## Predictions & Notable Claims

### [energy] Energy is the dark horse of AI
> "No one's talking about one problem, and that's energy... I think that's a dark horse for AI. Why? Because we have about $2 trillion in commitments, sovereign commitments. Most of that money is to develop energy infrastructure. But AI moves in months. Energy doesn't. I mean, to get a transformer today it's about seven years."
> — [03:05:50](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11150s)

**Context:** Responding to OpenAI's trillion-dollar spend plans and Microsoft's $80B capex; he clarifies transformer lead times as "four to seven years" and cites ~$150B in pending orders at suppliers.

### [energy] Energy can't scale like data centers
> "A nuclear reactor from permit to power takes about 15 years — last one we built was 14 years... This energy doesn't move as fast as data centers do, and Elon was very clear... we cannot build more energy on earth, we got to go to space."
> — [03:06:35](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11195s)

**Context:** Lists bottlenecks: gas turbines ~8-year wait, grid interconnection 10-15 years ([03:07:19]), transmission worse than production, utility-scale solar impractical without storage. Sets up his thesis of moving compute to where energy already is.

### [energy] AI power demand roughly doubling by 2030
> "2024 took about 415 terawatt [hours] of capacity for energy... The International Energy Association predicts their base case predictions about 930 terawatt hours by 2030."
> — [03:09:26](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11366s)

**Context:** Citing IEA base-case data-center demand projections; also notes ERCOT (Texas) capacity requests growing ~300% on a "very fragile" grid.

### [energy] Northern Virginia grid unreliable by June 2027
> "At this rate... they will be out of reliability standards by June 2027 — that means the grid is no longer reliable... The energy cost increased by 200% for Northern Virginia residents."
> — [03:10:10](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11410s)

**Context:** On PJM and "data center alley" (US-East); dated, checkable prediction. The 200% residential cost figure is attributed to a Wall Street Journal report.

### [energy] CoreWeave crashed on energy, not chips
> "That's why [CoreWeave] crashed — because they couldn't get more energy. It's not that they can't get chips. Chips are getting easier and easier... models are smaller and yada yada yada. Energy is not."
> — [03:10:10](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11410s)

**Context:** Contrarian read of a GPU-cloud stumble: the binding constraint on AI has shifted from silicon to power. Company name garbled in captions ("cor").

### [gpu-economics] Physical goods going up; resource trade still early
> "I think physical goods are just going to go up... As cringe as it sounds, we're still in early beginnings, I think, when it comes to, like, resources really — because agents have changed everything."
> — [03:11:35](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11495s)

**Context:** On memory/RAM prices spiking, rare-earth geopolitics (Greenland, Ukraine), and copper/uranium trades; pushes back on the host's suggestion that the picks-and-shovels trade has already played out.

### [ai-agents] Agents consume 10-40x more tokens than humans
> "Agents take anywhere from 10 to 40x more tokens than a normal human beings, because agents can do things that normal human beings find it hard to do."
> — [03:12:18](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11538s)

**Context:** His core demand-side argument for why the compute/energy shortage compounds; he runs ~10 always-on agents in his own house.

### [local-ai] Never trust intimate data leaving your own network
> "The amount of information they have is so private and so intimate. I would never trust the information leaving my cloud, leaving my own network... You just never know what happens to your data the moment it leaves your building."
> — [03:15:52](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11752s)

**Context:** After describing agents monitoring his sleep, heartbeat, emotional state, daughter's location, and contractors — confirms to hosts everything runs "on a local" stack. Privacy as the driver of local AI.

### [local-compute] 12 GPUs at home running local LLMs on solar
> "I have about 12 GPUs now... six 5090s. They're all running local LLMs... The big problem is energy, because I need a lot of energy. I have solar now at home."
> — [03:16:33](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11793s)

**Context:** His personal setup: six AMD processors plus six RTX 5090s serving open-source (Chinese) models; he posted his half-built GPU rack online. Home energy is "self-rotating" via solar.

### [local-compute] People are going to have a lot of compute at home
> "So coming back to the original point of energy — I think people are going to have a lot of compute at home, because you can never trust [data leaving the house]."
> — [03:17:16](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11836s)

**Context:** The flagship local-compute prediction of the segment; restated at [03:18:41] as "I think everybody will have compute... I can use my computer to contribute in a training run."

### [local-compute] Home solar powers training; households earn a share of the model
> "If training can go inside the house, it can tap into my solar, where my marginal cost of energy is like minimal, like almost zero... I have a lot of excess solar — using the excess solar to do some part of the training... in exchange I get back some token, some representation of the model, and when the model goes into inference and starts making money, I get some money out."
> — [03:19:24](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=11964s)

**Context:** Home GPUs earning income from distributed training runs; concedes it's less efficient than centralized data centers ("nothing that can beat physics") but argues it's excess compute at near-zero marginal energy cost. Names little-known distributed-training companies (name garbled in captions).

### [decentralized-ai] Distributed training will be a thing; big labs' moat in doubt
> "I think distributed training will be a thing. And of course we're not going to replace the major labs doing their own thing, but with distillation, all these techniques these days, I don't know what kind of mo[a]t the major big labs are going to continue having."
> — [03:20:06](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=12006s)

**Context:** Models getting smaller and smarter make distributed training viable; cites Peter Steinberger's viral agent product as proof that individuals without funding can now build history-making products.

### [ai-agents] Agents fundamentally redefine user experience
> "Agents have fundamentally redefined what user experience will look like... All the apps we hate to use, the utilities — you no longer need to hate them, because your agent is dealing with all the pain for you."
> — [03:20:49](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=12049s)

**Context:** On the era where access to compute, not capital or headcount, is the only prerequisite for building.

### [energy] Agent energy usage isn't priced into forecasts — bullish distributed training
> "I don't think [the IEA] has taken into account what Peter did or [OpenClaw] did, in terms of energy usage. I think that's going to cause a lot more problems. I think that's why I'm super bullish on distributed training."
> — [03:20:49](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=12049s)

**Context:** Argues viral agent products blow past official energy-demand projections, strengthening the case for home/distributed compute.

### [ai-agents] Agent meetings beat employee meetings
> "I could spend an hour with an employee writing a spec and brainstorming, or whatnot, or I could spend the same hour with an agent. Agent will do a far better job, in my opinion... I rather spend time with domain experts than programmers."
> — [03:21:34](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=12094s)

**Context:** He says he now explicitly asks "is this meeting more productive with an agent or an employee?" ([03:15:52]) before booking time with staff.

### [other] "Programmer" as an identity is obsolete
> "I think just the identity — if you identify yourself as a programmer, your job is at risk... the people that identify themselves as 'I'm a full stack, I'm a back end' — no, those are going to be gone. There's zero margin[al] value in that skill anymore."
> — [03:22:16](https://www.youtube.com/watch?v=oQ93LgM1N-o&t=12136s)

**Context:** Closing hiring take: builders, generalists, and domain experts win; narrow programming specialists lose to agents.
