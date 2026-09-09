---
id: 8JupQI6jnRs
title: Building a React App live with AI
channel: Greg Osuri
date: 2024-08-06
duration_min: 76
url: https://www.youtube.com/watch?v=8JupQI6jnRs
type: livestream
greg_speaks: yes
oneliner: Greg's first live-coding stream: building a Bitcoin DCA app with Aider and LLMs, derailed by API rate limits he uses to argue for self-hosted AI.
---

## Summary

First livestream on Greg's personal channel: he attempts to build a Bitcoin DCA (dollar-cost-averaging) web app "with minimal code" using the Aider AI coding assistant, Next.js, TypeScript, and shadcn/ui — while drinking scotch and admitting he's a Go/low-level developer, not a web dev. The stream is an unvarnished look at 2024 AI-assisted coding: Claude Sonnet performs markedly better than GPT-4o ("Claude is so much better"; "for some reason ChatGPT forgot how to code"), but he repeatedly hits Anthropic's API rate limits (a ~1-2M token/day cap despite paying for the API), forcing model switches, restarts, and ultimately ending the session early: "we got to come back tomorrow when we have more permission to build." He turns the failures into his core argument: hosted AI is restrictive, centralized providers are "overlords" you can't rely on to get things done, and this is exactly why you should host your own AI on Akash — an integration he says is coming soon. His practical AI-coding tips: give the model small specific tasks and iterate quickly, fix lint errors early before they creep up, and do project scaffolding manually since models handle adding features better than initial setup.

## Topics

ai coding, live demo, aider, claude vs gpt-4, rate limits, self-hosted ai, centralized ai, bitcoin dca, next.js

## Predictions & Notable Claims

### [local-ai] Hosted AI's restrictions are why you should run your own AI on Akash
> "I was using Anthropic earlier and Anthropic shut me out because I hit their rate limits. It's crazy how restrictive hosted AI is — it's one of the reasons why you want to host your own AI on Akash. Hopefully we'll get that out very very soon."
> — [00:07:35](https://www.youtube.com/watch?v=8JupQI6jnRs&t=455s)

**Context:** Explaining his Aider setup at the start of the stream; he was integrating Aider with a model running on Akash.

### [decentralized-ai] We cannot rely on centralized AI overlords
> "This is the problem with relying on centralized AI — this is a live example. We cannot rely on centralized overlords because we can't get things done. If only Anthropic would allow me to have unlimited API access — I mean, I'm paying for the API, it's not free, but still they want to limit me [to] a million tokens per day, or else [I] have to contact the sales people."
> — [01:13:10](https://www.youtube.com/watch?v=8JupQI6jnRs&t=4390s)

**Context:** Ending the stream early after exhausting API limits; earlier at [01:07:48] he says "that's why we cannot survive on centralized AI... this is horrible."

### [other] Claude beats GPT-4 at coding; "ChatGPT forgot how to code"
> "My personal experience: Anthropic is way better than GPT-4. Like, all these errors — I didn't have them before; it was cleaner, it had the right dependencies. For some reason ChatGPT forgot how to code."
> — [00:54:43](https://www.youtube.com/watch?v=8JupQI6jnRs&t=3283s)

**Context:** After GPT-4o repeatedly broke the Next.js scaffold that Claude Sonnet had handled cleanly. He later repeats the "ChatGPT forgot how to code" line on conference panels.
