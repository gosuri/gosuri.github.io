---
id: QD0dxndS3m4
title: Leveraging Incentives to Build with Your Community | Open AGI Summit | Brussels 2024
channel: Open AGI
date: 2024-10-01
duration_min: 34
url: https://www.youtube.com/watch?v=QD0dxndS3m4
type: panel
greg_speaks: yes
oneliner: Brussels panel on incentive design in decentralized AI; Greg shares four hard-won lessons from Akash's not-yet-on-chain incentive programs.
---

## Summary

An Open AGI Summit (Brussels, ETHcc-adjacent) panel on incentives in decentralized AI, moderated by Stephen of Cyber.fund, with Ben Fielding (Gensyn), Kartin Wong (Ora Protocol), Alexander Hicks (Ethereum Foundation), and Greg. Greg introduces Akash as "the world's first supercloud" now centered on GPUs, claiming it is the only place to get on-demand high-density GPUs on any cloud. His main contribution is four lessons on incentive design: (1) never enable incentives without verification — a rival network that did "got Sybil attacked to death"; Akash is adopting TEE-based hardware verification (which he admits he long opposed — "I gave up my fight"); (2) start with off-chain incentives (Akash's controlled pilot program) to study recipient behavior before going on-chain; (3) don't blindly copy Bitcoin-style block rewards — GPUs/CPUs are priced in dollars, so paying in a volatile token misprices incentives; (4) go narrow and prescriptive: Akash releases incentives to double a chipset's capacity only when 50% utilization is hit, tying supply growth to demand. Ben builds on this ("incentives aren't the product") and argues decentralized AI wins on scale (training over "every device in the world" as hyperscalers hit multi-datacenter limits) and access. Kartin pitches optimistic ML and initial model offerings as the open-source AI flywheel (framed via the Fermi-paradox "grand filter"); Alex argues open-source AI contributors are largely altruistic and over-incentivizing invites gaming. Greg closes the composability segment by raising the determinism problem of on-chain AI inference.

## Topics

decentralized ai, incentive design, tokenomics, sybil attacks, verification, tee, gpu marketplace, supercloud, on-chain ai, open source ai, depin

## Predictions & Notable Claims

### [gpu-economics] GPU demand will keep outpacing supply; Akash is the only on-demand source
> "GPUs is the bread and butter for Akash now, considering the demand for GPUs is just increasing without the supply chain improving, and Akash is now the only place to get on-demand high-density GPUs anywhere on the cloud — and that doesn't seem to be changing anytime soon."
> — [00:01:33](https://www.youtube.com/watch?v=QD0dxndS3m4&t=93s)

**Context:** Panel introduction; both a market forecast (persistent GPU scarcity) and a competitive claim about Akash's positioning as of late 2024.

### [crypto-depin] Incentives without verification get you Sybil-attacked to death
> "Akash hasn't enabled incentives on chain yet, and the reason for that is you do not want to have incentives without verification... we saw recently with another network that enabled incentives without verification — they got Sybil attacked to death. Sybil attacks are very, very real; every time there is money on the line, you want verification."
> — [00:04:27](https://www.youtube.com/watch?v=QD0dxndS3m4&t=267s)

**Context:** First of his four incentive-design lessons; he doesn't name the rival DePIN network. Gensyn's Ben endorses the point ("incentives aren't the product").

### [decentralized-ai] The future of Akash verification is TEE (a reversal he concedes)
> "We are working right now with hardware verifications using trusted execution environments — which I was vehemently against, but I kind of gave up my fight and I started accepting TEEs as a way to go... the future of Akash verification is TEE now, and there's a proposal out there that will be enabled very soon."
> — [00:05:10](https://www.youtube.com/watch?v=QD0dxndS3m4&t=310s)

**Context:** On verifying general-purpose compute where the platform can't see source code. Notable because two weeks later (Sahara AI/ALL Summit panel) he again emphasized TEE hardware vulnerabilities — he holds both positions with visible reluctance.

### [crypto-depin] Don't pay dollar-priced hardware in volatile tokens
> "When you incentivize in the token that's native to your platform, that token tends to be a volatile token, and then incentive distribution happens to be irregular and doesn't really make sense, because you're most probably likely incentivizing real-world assets like a GPU or a CPU, which are priced in US dollars and not priced in your token."
> — [00:07:23](https://www.youtube.com/watch?v=QD0dxndS3m4&t=443s)

**Context:** Lesson three: against cargo-culting Bitcoin block rewards; protocol designers must budget incentives in real-dollar terms.

### [gpu-economics] Utilization-gated supply incentives: 50% used releases rewards to double capacity
> "If you want to incentivize a certain chipset — A100 for example — the way it works in Akash is every time you reach 50% utilization for a certain chipset, the incentives to double the capacity are released... so that way you have a significantly better and more disciplined distribution curve instead of just a broad 'incentivize everything' and get thousands of GPUs that no one really uses."
> — [00:08:06](https://www.youtube.com/watch?v=QD0dxndS3m4&t=486s)

**Context:** Lesson four (go narrow, not broad); an implicit critique of over-incentivized DePIN supply gluts. He promises a report on on-chain incentive lessons "in a year's time."
