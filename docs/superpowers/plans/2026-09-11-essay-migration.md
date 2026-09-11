# Essay Migration Implementation Plan

> **For agentic workers:** Use subagent-driven development for independent source imports and metadata integration; verify the combined site before completion.

**Goal:** Bring every existing external essay and every missing published Akash essay credited to Greg Osuri onto this website, remove broken source links, and credit canonical originals.

**Architecture:** Keep authored content in `_posts/` and body assets in `assets/img/essays/`. Separate local navigation from `original_url`, `original_publisher`, and `canonical_url` metadata. Existing permalinks remain stable even when publication dates are corrected.

**Tech Stack:** Jekyll 3.10 / GitHub Pages, Liquid, Markdown, dependency-free Node artifact generators.

**Spec:** User requests in this session and `AGENTS.md`.

## Constraints

- Preserve original prose and source dates; convert only presentation syntax needed by Jekyll.
- Include all published Akash posts credited to Greg Osuri; exclude drafts and other authors.
- Use the verified live original publication as canonical. Retain local canonical for content whose original is unavailable.
- A bot block is not evidence that an essay is deleted. Recover available sources before dropping entries.
- Preserve existing local URLs, the `www.gregosuri.com` site origin, and local RSS/card/markdown destinations.
- No design-system changes, dependencies, or committed generated artifacts. The user subsequently authorized committing all changes and pushing master.

## Tasks

- [x] Inventory the 20 existing posts, verify external originals, and find all Greg Osuri posts in `$CODEHOME/website/src/content/Blog/`. Record source mappings and removals in `2026-09-11-essay-source-audit.md`.
- [x] Import Akash bodies and body assets; recover other externally hosted essays. Remove unrecoverable external-only entries with broken sources and remove confirmed dead hyperlinks while preserving surrounding prose.
- [x] Update `_includes/head.html`, `_layouts/post.html`, writing navigation, and agent/card generators to understand provenance separately from local reading URLs. Add regression coverage for external canonicals and full local twins.
- [x] Run `make test`, the repository's exact GitHub Pages Docker build, then the agent renderer on that output. Check every essay's canonical, source attribution, local navigation, body assets, and markdown twin. Render sample cards and inspect representative pages.
- [x] Review combined changes and update README counts and audit results. Commit the completed migration and push `master` as subsequently requested by the user.

## Decisions

- Work in the supplied clean checkout: this is the user's requested content migration, with disjoint file ownership across agents.
- Correct source dates using explicit `permalink` for existing posts when necessary; new posts use source dates in filenames.
- Link-only entries are not useful local essays; import complete available bodies instead of keeping empty pages.

## Verification

- 41 complete local essays; all 27 published Greg Osuri Akash entries included.
- 59 Node tests pass, including canonical attribution, corrected dates, image destinations, and artifact delivery.
- Production GitHub Pages builder passes; post-build agent output contains 1,762 twins and 41 essay entries.
- All 41 essay social cards rendered; desktop essay/index and mobile code-heavy essay inspected with no horizontal overflow.
- All essay local reading URLs, attribution, canonicals, Markdown twins and body assets checked against built output.
- Independent reviews verified source text fidelity, link cleanup, footnotes and House testimony transcription.
- Remaining trailing spaces are inherited Markdown hard-break markers; whitespace-only lines were normalized.
