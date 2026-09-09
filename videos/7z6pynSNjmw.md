---
id: 7z6pynSNjmw
title: Key Challenges in Building Decentralized AI Infrastructure | AI / ALL Summit
channel: Sahara AI
date: 2024-10-15
duration_min: 33
url: https://www.youtube.com/watch?v=7z6pynSNjmw
type: panel
greg_speaks: yes
oneliner: Panel with Gensyn's Ben and Panther's Anish: Greg on the supercloud, Sybil resistance, data locked in personal devices, AI bias, and governance.
---

## Summary

A panel at the AI/ALL Summit moderated by Anish (Panther Protocol CTO, privacy/ZK researcher), with Ben (Gensyn co-founder) and Greg. Greg introduces Akash as "the world's first decentralized supercloud" — federating any cloud-capable compute peer-to-peer at ~80% below traditional cloud prices — and claims Nvidia is one of Akash's biggest users with direct product integration. On decentralization's key challenges, Greg names three beyond Ben's verification/trust problem: overcoming Sybil attacks via permissionless peer-to-peer membership (removing the bound on how much compute any single entity can aggregate), unlocking data trapped in privacy silos, and crowd-sourced model development with monetization. He argues most of the world's data lives on people's own devices and gets harder to access the more sensitive it is (medical, financial), making decentralization the answer to privacy-preserving AI — a data-sovereignty argument. On the cryptography toolbox he dismisses TEEs (hardware trust assumptions, supply-chain attacks — "we saw famously what you could do with pagers", constant zero-days) and calls ZK "very promising but still very nascent." On bias, he cites Tay, GPT-3's San Francisco-leaning RLHF, and Gemini's founding-fathers images to argue decentralization and transparency are needed to understand model biases. On governance he critiques capital-weighted proof-of-stake voting, arguing usage/participation should be tokenized as stake and that anonymous voting lacks accountability, citing Akash's ~500 contributors and ~250 governance proposals. Ben (not Greg) contributes the notable visions of continually training on personal-sensor data distilled locally and training over "every single device in the world."

## Topics

decentralized ai, supercloud, sybil resistance, verification, data sovereignty, privacy, ai bias, governance, tokenization, tee, zero knowledge, gpu marketplace, gensyn

## Predictions & Notable Claims

### [cloud-decentralization] Akash is the world's first decentralized supercloud, 80% cheaper, used by Nvidia
> "Akash is the world's first decentralized supercloud. Supercloud, like the name suggests, is a cloud that federates any cloud-capable compute bit, a private or public cluster... where users can effectively access compute using a marketplace mechanism at significantly lower cost, usually 80% cheaper than what you would normally otherwise pay on traditional cloud... one of the biggest users for Akash is Nvidia, and Akash is directly integrated into Nvidia products."
> — [00:01:26](https://www.youtube.com/watch?v=7z6pynSNjmw&t=86s)

**Context:** Greg's self-introduction; "supercloud" is his recurring framing for federating the world's idle compute. Quote begins at the end of the prior caption block.

### [decentralized-ai] Permissionless peer-to-peer membership removes the bound on compute scale
> "If you want to unlock true decentralization you have to develop techniques to overcome Sybil attacks... we looked at just the sheer amount of compute availability a single company or single entity could have — there's a limit, there's a bound. If you want to remove that bound you have to be able to have a peer-to-peer mechanism where the access and permission or membership to the cluster doesn't require a permission... and the foundation for that is verification."
> — [00:05:42](https://www.youtube.com/watch?v=7z6pynSNjmw&t=342s)

**Context:** Answering the moderator's question on immediate blockers for decentralized AI; he adds unlocking siloed data and crowd-built models as the other two challenges. Quote spans into the next caption block.

### [decentralized-ai] Most data lives on personal devices; decentralization unlocks it without breaking privacy
> "Most of the data, if you look at it, is in devices they're owned by people, and it's extremely hard to get — the more sensitive the data, the harder it gets... I personally wouldn't be comfortable giving my medical data or my diagnosis to a system that doesn't guarantee the privacy... and decentralization is an answer."
> — [00:08:35](https://www.youtube.com/watch?v=7z6pynSNjmw&t=515s)

**Context:** Asked whether data remains AI's limiting factor; Greg's data-sovereignty thesis — sensitive data (medical, financial) can only be tapped for training if privacy is guaranteed, which he argues centralized systems can't do. Quote spans into the next caption block.

### [decentralized-ai] Decentralization and transparency are needed to understand model bias
> "Models' biases are as good as the data it gets fed and the data it gets reinforced... it was heavily biased because it was reinforced by people in San Francisco... I think one of the reasons why decentralization needs to exist, more importantly transparency, is to understand these biases."
> — [00:18:02](https://www.youtube.com/watch?v=7z6pynSNjmw&t=1082s)

**Context:** Bias/explainability question; he cites Microsoft's Tay turning racist, GPT-3's RLHF lean, and Google Gemini's ahistorical founding-fathers images. Quote spans caption blocks.

### [crypto-depin] Governance stake should be participation, not capital
> "The current system... proof of stake... is heavily focused on capital as the stake, but I think we definitely need to rethink some of these systems where the stake is not necessarily capital but actual participation in the network... you could tokenize usage, you could tokenize attention... systems should be governed by the people that use it, and people that have significantly higher involvement by using the system should have a higher say."
> — [00:23:41](https://www.youtube.com/watch?v=7z6pynSNjmw&t=1421s)

**Context:** Governance question; he tempers it with lessons from Akash's ~250 proposals — anonymous voting lacks accountability and recourse, so "it's going to take a while to really understand and nail what works."
