---
id: T3nA1nAaLss
title: Sponsored Session: Powering PyTorch: Decentralized Training for an Energy-Hungry Future - Greg Osuri
channel: PyTorch
date: 2025-11-04
duration_min: 23
url: https://www.youtube.com/watch?v=T3nA1nAaLss
type: keynote
greg_speaks: yes
oneliner: PyTorch Conference talk: AI's energy crisis makes decentralized training necessary — "make the internet a cluster."
---

## Summary

Greg's sponsored session at the PyTorch Conference, arguing that distributed computing architectures can solve AI's energy crisis while democratizing compute access. He invokes his Congressional testimony claim that "AI is becoming the substrate of civilization" and quantifies the bottleneck: US data centers used ~176 TWh in 2023 (4.4% of US electricity), heading to 325-580 TWh (6.7-12%) by 2028, with global data center demand approaching ~945 TWh by 2030 and analysts warning 40% of AI data centers could be stuck waiting for power by 2026. Centralized hyperscalers hit three ceilings: geographic power constraints (interconnect queues, substation limits), diminishing parallel speedups from synchronization walls, and chronic underutilization. His alternative: thousands of nodes — small data centers, campuses, labs, personal GPUs — cooperating over the internet, citing Folding@home's 2.4 exaflop peak as precedent. He walks through the algorithmic breakthroughs making this viable: DiLoCo (~500x sync reduction), Nous Research's DisTrO (74.5GB → 86MB per step, ~857x bandwidth cut), Pluralis's asynchronous swarm parallelism, and Gensyn's verification (~46% overhead, 93% accuracy under 50% churn). Evidence: Akash scaled from ~150 to 1,000+ GPUs at 54-55% utilization, and Nous trained a 15B-parameter LLM over the public internet in ~10 days matching centralized accuracy. He closes with a vision of small modular data centers beside solar/wind/hydro ("puzzle pieces, not megaprojects"), energy-aware schedulers that "follow the sun and the wind" making AI a grid asset, and a call for PyTorch developers to build WAN-aware process groups, verification hooks, and carbon-aware placement flags.

## Topics

decentralized training, ai energy, pytorch, diloco, distro, federated learning, gpu utilization, renewable energy, verification, energy-aware scheduling

## Predictions & Notable Claims

### [energy] AI is becoming the substrate of civilization — but foundations need power
> "In my testimony I've given before Congress, I made one claim: AI is becoming the substrate of civilization, and AI is a foundational layer. But foundations only work if the power stays on. We are approaching an energy bottleneck that could limit who gets to build, ship, and even run AI. We can fix that by distributing where, when, and how we compute."
> — [00:00:43](https://www.youtube.com/watch?v=T3nA1nAaLss&t=43s)

**Context:** Opening thesis of the talk, referencing his testimony before Congress.

### [energy] By 2028, data centers take up to 12% of US electricity; 40% of AI data centers power-stalled by 2026
> "The US Department of Energy report estimates US data centers consumed about 176 terawatt hours in 2023 — about 4.4% of US electricity. By 2028, the range is 325 to 580 terawatt hours, or 6.7% to 12% of US electricity. At the high end, that's 1 in 8 watts on the grid going to data centers... Analysts are warning by 2026, 40% of AI data centers could be stuck waiting for power, even as some facilities spin up diesel at peak to stay online."
> — [00:02:11](https://www.youtube.com/watch?v=T3nA1nAaLss&t=131s)

**Context:** The quantified energy case; he adds global data center electricity "could approach about 945 terawatt hours by 2030."

### [decentralized-ai] Energy-gated compute means centralization by default
> "If compute access is functionally gated by energy, we risk centralization by default — only a few players can pay the bill. So here's the constraint in one line: AI demand is exponential; our energy response can't be linear. We need architectures that use energy smarter — spreading load, lifting utilization, and collocating compute with abundant, cheaper renewables."
> — [00:04:26](https://www.youtube.com/watch?v=T3nA1nAaLss&t=266s)

**Context:** Framing why energy must be treated as a first-class constraint in the training stack; "if we don't adapt, energy — not algorithms — will be the bottleneck for AI" ([00:19:55]).

### [decentralized-ai] The internet itself can be the training cluster
> "An alternative is thousands of nodes — small data centers, campuses, labs, and individual providers cooperating over the internet to train one model. That is not science fiction. We've seen precedent at internet scale: Folding@home volunteers once peaked around 2.4 exaflops, outpacing the top supercomputer at that time. With the right algorithms and verification, we can turn the internet itself into a capable, resilient training fabric for PyTorch jobs."
> — [00:06:39](https://www.youtube.com/watch?v=T3nA1nAaLss&t=399s)

**Context:** After listing hyperscaler ceilings; he cites DiLoCo (~500x sync reduction) and Nous DisTrO (~857x bandwidth reduction) as the enabling breakthroughs.

### [decentralized-ai] A 15B-parameter LLM was trained over the public internet, matching centralized accuracy
> "A concrete decentralized training milestone is Nous Research trained a 15 billion parameter LLM over the public internet on volunteer machines and donated instances in about 10 days and about 11,000 steps, matching centralized run accuracy using WAN-aware optimizers. This demonstrates that with the right comms and async strategy, frontier class models can train beyond a single hyperscaler."
> — [00:13:16](https://www.youtube.com/watch?v=T3nA1nAaLss&t=796s)

**Context:** Empirical case study; he also cites Gensyn's verification protocol (46% overhead, 93% accuracy under 50% churn) as the trust layer for untrusted nodes.

### [energy] Small modular data centers next to renewables — puzzle pieces, not megaprojects
> "Now imagine scaling this with small modular data centers — containerized racks on campuses, in offices, or community sites parked next to solar, wind or hydro. Compute rides on local clean energy, slashing transmission losses, soaking up daytime solar peaks and spinning down at night. Instead of one 300 megawatt site, deploy [thousands of small] pods. Puzzle pieces, not mega projects."
> — [00:16:15](https://www.youtube.com/watch?v=T3nA1nAaLss&t=975s)

**Context:** His sustainable-scaling vision; captions garble the pod arithmetic ("three 3,000 kilowatt pods").

### [energy] Schedulers follow the sun and wind — AI becomes a grid asset
> "Because the fabric is location flexible, schedulers can follow the sun and the wind — route PyTorch jobs to green hotspots at 11:00 a.m., shift to night wind regions at 2 a.m. Treated as flexible demand, AI becomes a grid asset, not a burden, absorbing surplus and backing off during peaks. That's how we scale sustainably."
> — [00:17:00](https://www.youtube.com/watch?v=T3nA1nAaLss&t=1020s)

**Context:** Energy-aware routing with grid carbon intensity in the scheduler cost function; captions render "grid asset" as "great asset."

### [gpu-economics] Akash sustains 54-55% utilization across 1,000+ GPUs
> "Since enabling GPUs, the network has scaled roughly from about 150 to about a thousand plus GPUs while sustaining roughly 54 to 55% average utilization across a very heterogeneous fleet — that's competitive with large clouds and far above typical on-prem. It means few idle watts and more useful gradient steps per kilowatt hour."
> — [00:12:32](https://www.youtube.com/watch?v=T3nA1nAaLss&t=752s)

**Context:** Presenting Akash's reverse-auction marketplace as "an autonomous utilization machine"; decentralized fleets hit 50-60% utilization, ~3x on-prem baselines ([00:15:30]).

### [decentralized-ai] We're expanding who gets to build — turning idleness into intelligence
> "We're not just reducing cost, we're expanding who gets to build — that aligns with the open source ethos that made PyTorch what it is... We can turn idleness into intelligence... Make the internet a cluster, and we make clean energy a scheduling signal."
> — [00:19:10](https://www.youtube.com/watch?v=T3nA1nAaLss&t=1150s)

**Context:** Closing call to action to PyTorch developers ("a force multiplier") to make distributed WAN backends as easy to select as DDP.
