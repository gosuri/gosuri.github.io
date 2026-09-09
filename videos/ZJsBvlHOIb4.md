---
id: ZJsBvlHOIb4
title: Akask Weekly - Aug 3rd 2022
channel: Akash Network
date: 2022-08-04
duration_min: 61
url: https://www.youtube.com/watch?v=ZJsBvlHOIb4
type: livestream
greg_speaks: yes
oneliner: Akash Weekly after the Nomad/Solana hacks: Greg on open source security, bridges vs IBC, DeFi vs CeFi, and AKT tokenomics changes.
---

## Summary

Akash Weekly Twitter Spaces hosted by Nadia Bajuelo, recorded the week of the Nomad bridge exploit (~$200M) and the Solana wallet supply-chain hack. Greg opens by urging exploiters to return funds and drawing his core lesson: closed-source wallets (Phantom, and he presses Keplr and Cosmostation to open source) are inherently insecure, and the same critique extends to the cloud — AWS is the number one host for crypto, fully opaque, and a single point of failure (he cites his repo tracking 113+ Amazon outages in 2021). Updates include organic press (Cointelegraph on Presearch — ~150M monthly active users — running on Akash), a community-built Terraform integration he sees as the wedge for enterprises to move non-critical infrastructure over, and validator nodes hosted for $8/month.

Guest George Zechner (Yieldmos) explains non-custodial yield via the Cosmos authz module. In the DeFi panel, Greg argues Celsius/Voyager/3AC were unregulated centralized quasi-banks whose collapse proved DeFi's resilience — DeFi protocols got repaid first in bankruptcy — and predicts bridges "have to burn" while IBC's relayer model takes center stage; he calls SEC regulation-by-enforcement misdirected. He calls running web3 projects on Amazon "fundamentally wrong" and hypocritical, while conceding prototyping speed. In the AMA he explains why take-income fees await regulatory clarity (securities risk), previews two tokenomics changes — stable settlement with dynamic pricing expected "in the next three to four months" and provider incentives funded initially by Overclock's treasury — and attributes AKT's recent ~100% price move partly to the inflation cut.

## Topics

akash weekly, security, open source, bridge hacks, ibc, defi, cefi collapse, aws dependence, terraform, tokenomics, stable payments, provider incentives, regulation, yieldmos, authz

## Predictions & Notable Claims

### [cloud-decentralization] Web3 on AWS is a bomb waiting to go off
> "Amazon Web Services is the number one host for crypto today. It's fully closed source, it's fully opaque — we have no idea what's happening underneath the hood... there's so many things that could go wrong in a closed source system, and web3 relying on the systems is not okay. We're just waiting for a bomb to happen, and I don't want to know what happens when sixty percent of the Ethereum network is attacked because they were vulnerable for a zero day on Amazon."
> — [00:07:10](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=430s)

**Context:** Extending the Solana wallet supply-chain hack lesson to cloud infrastructure; he adds Amazon went down 113 times in 2021 per his open-source outage tracker.

### [crypto-depin] Bear market thesis: less noise, more signal
> "If you remember my thesis... during a bear market we get less noise and more signal, so real fundamentals are showing up... bull markets will come back. The question is what do we do during this bear market — we have a great opportunity to capture the mind share... the tourist class leave during this crash... the tourists left, the permanent stood, and those people need to recognize the importance of the decentralized compute."
> — [00:10:47](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=647s)

**Context:** Prompted by organic press coverage — a Cointelegraph piece on Presearch (~150M monthly active users) choosing Akash without any introduction from the team.

### [crypto-depin] Bridges have to burn; IBC takes center stage
> "We're going to see insecure bridges — the bridges have to burn... bridges are insecure, we've been talking about [it] a long time, and I think that's where IBC is going to take the center stage when bridges are going to fail... yes, we're going to see some exploits before we can see success."
> — [00:34:20](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=2060s)

**Context:** Days after the Nomad exploit; he explains IBC relayers pass packets without custodying assets, unlike bridges, though he cautions chain security still depends on bonded stake vs TVL.

### [crypto-depin] DeFi stood where CeFi failed — and will get very strong
> "This is a classic example of a closed source system failing over open source system... Voyagers and the Celsiuses are essentially banks — they took the deposits and invested in heavily risky assets with leverage... people are going to realize the importance of open source systems and the importance of DeFi. I think DeFi is going to get very, very strong... I'm super bullish... DeFi withstood without regulation... we need regulation to protect people from these quasi-banks and not from DeFi."
> — [00:37:11](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=2231s)

**Context:** Panel on the Celsius/Voyager/3AC collapse; earlier he notes bankrupt CeFi firms had to repay DeFi loans first to unlock collateral.

### [cloud-decentralization] Using Amazon is fundamentally wrong for web3
> "If you were to use cloud infrastructure, I'd rather prefer putting your infrastructure in a bare metal server sitting in a secure data center that you have complete control over, and not Amazon. Using Amazon for a web3 project is just fundamentally wrong — over-concentration of power... Akash is not really a cloud, it's a market."
> — [00:40:05](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=2405s)

**Context:** Panel question on web3 teams preaching decentralization while running on web2; at [00:42:17] he sharpens it: "web3 projects should not use Amazon, period," while granting startups' need for iteration speed.

### [crypto-depin] Stable settlement coming to AKT within months
> "We feel like it's risky to do a second token, so we're going to keep AKT but we're going to implement stable mechanism using dynamic pricing. So that big change is coming very soon — I would expect at least in the next three to four months."
> — [00:50:03](https://www.youtube.com/watch?v=ZJsBvlHOIb4&t=3003s)

**Context:** Tokenomics revamp answer: volatile AKT pricing hurts long-term hosting deals; he also previews provider incentives (paying providers to stay online) funded off-chain by Overclock's treasury first, plus take-income deferred pending securities-law clarity.
