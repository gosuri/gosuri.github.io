---
id: LdY087ASaMg
title: Akash Analysis - Akash GPU Marketplace Progress Update
channel: Akash Network
date: 2022-09-15
duration_min: 2
url: https://www.youtube.com/watch?v=LdY087ASaMg
type: clip
greg_speaks: yes
oneliner: Akash Analysis clip: why GPUs are hard on Kubernetes, a working GPU-workload prototype, and no timeline promises (Sept 2022).
---

## Summary

An "Akash Analysis" clip (speaker uncredited; consistent with Greg — "my team was not very happy about me sharing the prototype") updating progress on the Akash GPU marketplace a year before its 2023 launch. The two-fold challenge: Kubernetes lacks native GPU support, and every GPU vendor expects applications customized to their hardware — containers packaged for one GPU — which "is inherently in contradiction with the core principles of Kubernetes, where you build once and run that image anywhere." Workarounds involve labels/annotations and half-built upstream Kubernetes features, so Akash is engaged upstream. A prototype demonstrated a GPU workload running, but he declines to give a timeline since it depends on upstream Kubernetes fixes.

## Topics

gpu marketplace, kubernetes, gpu support, containers, akash roadmap, engineering update

## Predictions & Notable Claims

### [gpu-economics] GPU-on-Kubernetes prototype worked; timeline hostage to upstream
> "There was a demo, a prototype, that kind of had functionality... it demonstrated that we can run a GPU workload... I can't really give you a realistic timeline when this is going to come out, because whatever timeline I give you is going to be dependent on upstream Kubernetes to fix their stuff, but we're making a lot of progress."
> — [00:00:44](https://www.youtube.com/watch?v=LdY087ASaMg&t=44s)

**Context:** September 2022 status of the GPU marketplace (launched ~a year later); the blocker was vendor-specific GPU packaging contradicting Kubernetes' build-once-run-anywhere model. **Speaker:** uncredited clip; likely Greg.
