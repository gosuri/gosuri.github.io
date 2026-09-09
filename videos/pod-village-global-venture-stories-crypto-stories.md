---
id: pod-village-global-venture-stories-crypto-stories
title: "Crypto Stories: A Primer on Distributed Computing with Dani Grant, Dan Desjardins, Chandler Song, and Greg Osuri"
channel: Village Global's Venture Stories
date: 2018-08-31
duration_min: 41
url: https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936
type: podcast
greg_speaks: yes
oneliner: 2018 five-person panel on distributed compute; Greg pitches early Akash, the "unstoppable web," and market sizing for its go-to-market.
---

## Summary

A panel episode of Village Global's Venture Stories (host Erik Torenberg, with Dani Grant, physicist Dan Desjardins of Distributed Compute Labs, Chandler Song of Ankr, and Greg Osuri) recorded days before Akash opened public testnet access ("on Monday"). Greg introduces Akash as "a decentralized network for provisioning, scaling, and securing computational workloads with an on-chain auction marketplace for off-chain container deployment." The panel debates why AWS isn't enough (Greg: the three providers' market share "effectively creates a logopoly" — a systemic incentive problem, not a company problem), why EVM/Solidity can't do generic compute, storage strategies, and the chicken-and-egg of supply/demand bootstrapping. Greg lays out Akash's explore/exploit framing: exploratory work on an "unstoppable web" (Akash + Handshake + Orchid for fully decentralized DNS, runtime, and networking) and exploitative go-to-market via low-friction use cases — performance testing (~$10B market), CI/CD (~$30B), and machine-learning workloads (~$60B) — explicitly modeled on how AWS entered via simple S3 object storage. He repeats his "burgers and fries" critique (Google Dataproc white-labeling Databricks Spark) and explains the native-token rationale (ecosystem isolation from volatility), non-fungible representation of heterogeneous provider resources, and verification via memory-hard cryptographic hash functions. Panel format — the transcript is undiarized, so several passages are attributed by context; other guests' claims (Ankr's SGX approach, DCL's JavaScript grid) are not extracted here.

## Topics

decentralized cloud, distributed computing, akash testnet, unstoppable web, censorship resistance, cloud oligopoly, utility tokens, verification, market sizing, containers

## Predictions & Notable Claims

### [cloud-decentralization] Cloud market share creates an oligopoly
> "Amazon is great. I love Amazon and Google as well. The way the system is set up right now with the centralized model, it's not Amazon's fault or Google's fault per se... with the current market share that's being gained by these three providers, effectively creates a logopoly."
> — [00:02:19](https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936)

**Context:** Answering "why isn't AWS good enough?" — his recurring systemic-incentives argument. **Speaker:** attributed to Greg by argument style and later repetition; panel audio is undiarized ("logopoly" is likely a mis-transcription of "oligopoly").

### [crypto-depin] The unstoppable web
> "One of the concepts we're working is unstoppable web. Unstoppable web is censorship resistant web that cannot be taken down by any individual other than the beholder of a key. By combining other protocols such as Handshake or an Orchid and us together, we can create an infrastructure where the DNS discovery is decentralized, as well as the runtime is decentralized."
> — [00:10:15](https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936)

**Context:** Greg's "exploration" track for Akash's next five years — a fully decentralized web stack; an early statement of the censorship-resistance thesis he repeats in later years.

### [other] Market sizing Akash's beachhead use cases
> "Which is not a small market. It's about $10 billion market. And then we moved on to CI CD [pipelines], which is about $30 billion market. And machine learning workloads is about $60 billion market. So that's how we're looking at go to market."
> — [00:11:49](https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936)

**Context:** Performance testing → CI/CD → ML workloads as sequential beachheads, explicitly modeled on AWS's 2007 low-friction S3 entry. Notable that ML workloads were already the target end-market in 2018.

### [cloud-decentralization] Burgers-and-fries: clouds out-compete open source
> "The majority of the revenue that comes to the centralized cloud providers happen to be from these value-added services. It's like burgers and fries model. Give you cheap compute, but we make money on the value-added services. And these value-added services are usually white-labeled open-source projects."
> — [00:14:07](https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936)

**Context:** Google Dataproc vs. Databricks Spark example; argues a decentralized network has better incentives to attract open-source projects than hyperscalers do.

### [cloud-decentralization] Protocols cooperating is the only way to beat the oligopoly
> "I think the problem definitely exists. And I think the future we're going to see protocols working with other protocols, like what you guys are doing, each one focusing on different markets... I think that's the only way we can take on a centralized system there is today, which is oligopoly."
> — [00:38:54](https://podcasts.apple.com/us/podcast/crypto-stories-a-primer-on-distributed-computing/id1316769266?i=1000499161936)

**Context:** His closing thought on the panel — decentralized compute as an ecosystem of complementary protocols rather than a single winner. **Speaker:** attributed to Greg by diction ("oligopoly") in an undiarized closing round.
