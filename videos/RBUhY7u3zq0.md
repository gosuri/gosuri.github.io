---
id: RBUhY7u3zq0
title: Akash Analysis - Are Akash providers hosted on AWS?
channel: Akash Network
date: 2022-08-27
duration_min: 4
url: https://www.youtube.com/watch?v=RBUhY7u3zq0
type: clip
greg_speaks: yes
oneliner: Akash Analysis clip: Greg debunks FUD that Akash providers run on AWS and describes the verification system he coded to prove it.
---

## Summary

An "Akash Analysis" clip addressing Twitter FUD claiming Akash providers were hosted on Amazon. The speaker (consistent with Greg — he personally built the verification tooling "over the weekend") explains the graphic came from someone taking IP info from provider host URIs and matching it to Amazon, but those were test providers — people spin up temporary providers on AWS to test because Akash lacked a testnet — and host URIs can also point at load balancers while the real provider sits in a data center. The only reliable method is deploying workloads to all ~50 providers and doing reverse IP lookups, a system he was building to run ~50 workloads every 10 minutes, with a detailed report promised in a week or two. Preliminary data: "I haven't seen anyone running on Amazon at all," which he argues makes economic sense — nobody would resell Amazon compute at 97% below Amazon's price.

## Topics

fud debunking, akash providers, aws, provider verification, decentralized cloud, transparency

## Predictions & Notable Claims

### [cloud-decentralization] No Akash providers actually run on Amazon
> "I've looked at preliminary data... I haven't seen anyone running on Amazon at all, because it does not make sense — like why would you host on Amazon and provide the same compute for 97 [percent] cheaper? It makes no sense... the real data indicates there are no Amazon providers."
> — [00:02:50](https://www.youtube.com/watch?v=RBUhY7u3zq0&t=170s)

**Context:** Debunking a viral graphic built from test-provider IPs; he promised a public verification report from a system deploying canary workloads to all ~50 providers. **Speaker:** uncredited clip; likely Greg (describes personally coding the verification system).
