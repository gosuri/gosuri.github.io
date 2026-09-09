---
id: xhuhCng_JyA
title: Akash Office Hours : End of Year Product Update
channel: Akash Network
date: 2021-12-22
duration_min: 54
url: https://www.youtube.com/watch?v=xhuhCng_JyA
type: livestream
greg_speaks: yes
oneliner: End-of-2021 office hours: persistent storage, Q1 2022 GPU plans fed by Ethereum miners, and the 300-services path to beating Amazon.
---

## Summary

End-of-year Akash office hours livestream with community lead Adam, devrel director Eric Zeitlow, program manager Alani Kuye (grants program, $100-$100K in AKT), and Greg's product update. Greg walks through the Q4 2021 roadmap theme of making Akash "web3 full-stack capable": persistent storage (enabling Solana/Ethereum full nodes; the 1TB cap to be lifted toward 10-20TB), a network dashboard, a token faucet (drip), hostname migration, an on-chain inflation decay curve, shell access to containers, and the Gravity Bridge (mainnet Dec 14) as his preferred alternative to an ERC-20 pair — he argues ERC-20 wrappers of cloud tokens are "not legit" for utility. He explains Akash's composability-over-usability philosophy and announces the pivot to "hyper usability": a Heroku/Vercel-grade CLI before the incentivized mid-January testnet, then framework-level integrations (Starport, Rails, Node) so "Akash is just invisible in the background." The headline forward-looking items: GPU support in Q1 2022, with Ethereum's proof-of-stake merge expected to flood the market with miner GPUs Akash can absorb at a discount; and the answer to "when Akash over Amazon" — feature parity with Amazon's ~300 services via a decentralized services marketplace "by end of 2022" plus usability. He also handicaps competitors (iExec's end-user-pays model, Flux and StackOS as "copycats"), cites ~400+ live applications and ~60,000 total deployments nine months after mainnet 2, mentions early work on a more stable/deflationary payment model, and closes calling this "the largest migration from web 2 to web 3." (Both the GPU date and services-marketplace date proved optimistic — GPUs shipped in 2023.)

## Topics

akash roadmap, persistent storage, gpu marketplace, ethereum merge, cli usability, services marketplace, tokenomics, gravity bridge, grants program, developer experience, web3 migration

## Predictions & Notable Claims

### [gpu-economics] The Ethereum merge will flood the market with GPUs for Akash
> "A big source of GPUs in the next six months is going to be from Ethereum miners. As you know, Ethereum is moving off proof of work to proof of stake — that unlocks [an] enormous amount of GPU capability in the market that has really nowhere to go, and Akash being a prime cloud partner would be an amazing use for us to use these GPUs and offer that at a discount that's significant from what's being offered in the market right now."
> — [00:26:23](https://www.youtube.com/watch?v=xhuhCng_JyA&t=1583s)

**Context:** GPU support was slated as the big Q1 2022 feature for machine-learning workloads; the merge happened September 2022 and Akash GPUs actually shipped in 2023.

### [cloud-decentralization] Beating Amazon requires 300 services — via a decentralized marketplace by end of 2022
> "Two things need to happen for Akash to be over Amazon. First... Amazon has 300 backend services that form this phenomenal service fabric... Akash only has one service, which is container hosting, so we need to come to 300 services in order to have parity with Amazon. And we're not going to do that as a single organization... we're going to enable a services marketplace by end of 2022."
> — [00:27:49](https://www.youtube.com/watch?v=xhuhCng_JyA&t=1669s)

**Context:** Answering the recurring "when Akash over Amazon" question; the second requirement is usability designed for modern developers as "Amazon is increasingly getting distant away from a developer." An early statement of the services-marketplace vision he still pitched in 2025.

### [cloud-decentralization] Akash should become invisible infrastructure
> "[We want to] get to that framework-level integration so it becomes part of the workflow — so that Akash is just invisible in the background. You don't even know you're using Akash, but you're using Akash. And there's the beauty of permissionless systems: there's no signup [or other] nonsense that you need to use."
> — [00:40:46](https://www.youtube.com/watch?v=xhuhCng_JyA&t=2446s)

**Context:** The usability roadmap: fix the CLI first, then one-click deploys from frameworks like Starport, Ruby on Rails, and Node.js.

### [other] The largest migration from web2 to web3
> "Remember, we are in the midst of the largest migration from web 2 to web 3. The fact that Elon Musk is talking about web3 just tells you how far we've come... web 2 developers using web3 tools with subpar experience is going to be bad, so my goal is to make sure that doesn't happen... the user has to be delighted to a point that they don't want to go back to web 2."
> — [00:51:24](https://www.youtube.com/watch?v=xhuhCng_JyA&t=3084s)

**Context:** Closing remarks on 2022 priorities; he cites his own GitHub CLI libraries (used by HashiCorp and Kubernetes) as why he believes a beautiful command line will be one of Akash's adoption "pinnacle moments."
