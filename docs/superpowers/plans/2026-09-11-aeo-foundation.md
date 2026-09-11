# AEO Foundation Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development. Follow
> the individual task brief, run focused regressions, and obtain the user's
> approval before committing or pushing.

**Goal:** Correct attribution, improve page metadata and identity, and make
retrieval indexes fit practical fetch budgets.

**Architecture:** Preserve the Python source exporter and Node post-build
renderer. Add explicit speaker fields and shared Jekyll metadata. Use static
theme/year routes and a recent index, with no new service or runtime script.

**Tech Stack:** Python standard library, Node built-in tests, Liquid, Jekyll 3.10.

**Spec:** `docs/superpowers/specs/2026-09-11-aeo-foundation-design.md`

## Global Constraints

- Preserve source quotations, leaf permalinks, and external essay canonicals.
- No new dependencies, executable JavaScript, fabricated dates, or transcripts.
- Python owns committed prediction output; Node owns post-build artifacts.
- DesignSync normally precedes visual edits. The user explicitly approved
  applying the homepage H1 and matching preview locally with sync deferred.
- Commit and push only after user approval; preserve unrelated work.

## Task 1: Attribution

**Files:** `PREDICTIONS.md`, `research/export_blog.py`,
`research/test_export_blog.py`, `research/card_data.mjs`,
`research/card_templates.mjs`, related tests, `research/agent_docs.mjs`,
`research/agent_docs.test.mjs`, `_layouts/prediction.html`,
`_includes/prediction.html`, and generated prediction output.

**Interface:** Every prediction exposes scalar `speaker` and
`speaker_status` (`attributed` or `uncertain`). Uncertain records use a neutral
speaker label and do not get an unqualified person attribution. The source
contains explicit `**Speaker:**` and `**Attribution:**` lines for every entry.

- [x] Add regressions for named other speaker, uncertain speaker, missing
  attribution, speaker-aware citation/card/sharing output, and stable IDs.
- [x] Run Python and relevant Node tests and observe expected failures.
- [x] Migrate source attribution, preserving all existing context. Require new
  source entries to provide attribution rather than silently defaulting.
- [x] Export fields and consume them across machine citations and card text.
  Prepare visual changes as a patch if they would require DesignSync.
- [x] Regenerate and run focused tests. Record exact outcomes and any concerns.

## Task 2: Shared metadata and identity

**Files:** `_includes/head.html`, new `_includes/metadata.html` and
`_includes/structured-data.html`, new `_data/person.yml`, `about.md`,
`index.html` metadata, `citing.md`, `research/verify_metadata.mjs`.

**Interface:** Shared include computes `page_title`, `page_description`,
`local_url`, and `canonical_url`; schema consumes Task 1 speaker fields.

- [x] Write a built-output verifier covering title/description, valid JSON,
  named and uncertain speakers, source/quote separation, and essay canonicals.
- [x] Run verifier against the old build to establish missing behavior.
- [x] Implement one normalized description selection and conservative schema:
  Person/WebSite, BlogPosting, Quotation, CollectionPage and breadcrumbs.
  Serialize all free text safely, including closing script sequences.
- [x] Use existing published identity facts and profile URLs. Add plain-text
  About identity and descriptive homepage metadata; apply the approved visible
  H1 and matching preview locally with DesignSync deferred.
- [x] Verify with the real Pages builder and the built-output verifier.

## Task 3: Small retrieval routes

**Files:** `research/export_blog.py`, `research/test_export_blog.py`,
`research/agent_docs.mjs`, `research/agent_docs.test.mjs`,
`research/render_agents.mjs`, `research/render_agents.test.mjs`, generated
`predictions/` routes and affected generated navigation fields.

**Interface:** Existing theme/year permalinks remain supported. A new
`/predictions/recent/` route and its twin select 50 statements sorted by
descending speech date then ascending `slug_id`. Index budgets use UTF-8
bytes / 4 rounded up, consistently with the current agent inventory.

- [x] Add regressions for narrow routing, measured budgets, stable recent
  ordering, generated HTML/twin route parity, and regeneration.
- [x] Run tests and observe expected failures.
- [x] Extend year splitting to also consider generated title-index cost.
  Keep the full master index available with an explicit size warning.
- [x] Generate the recent page using existing styles; render its twin with
  full links. List small routes and year links in llms.txt before the master.
- [x] Regenerate and verify the existing and newly generated indexes; fail
  clearly if a recommended year index exceeds budget instead of hiding it.

## Task 4: Review and integrated verification

**Files:** `README.md`, `Makefile`, `.github/workflows/deploy.yml`, review
artifacts under ignored `.superpowers/sdd/2026-09-11-aeo-foundation/`.

- [x] Add the built metadata check to CI after Jekyll and document attribution
  and retrieval ownership, current counts, and validation commands.
- [x] Run `make test` and `python3 -m unittest test_export_blog`.
- [x] Run the specified Pages container into a temporary destination, followed
  by metadata verification and `render_agents.mjs --site-dir`.
- [x] Check generated attribution and render representative cards; verify
  source regeneration has no second-run diff and all leaf URLs are preserved.
- [x] Obtain independent spec/quality review and resolve material findings.
- [x] Deliver implementation and exact remaining DesignSync work, if any.

## Implementation notes

Attribution also required a producer fix in `research/compile.py` and
`research/ANALYSIS_PROMPT.md`. Legacy notes carry attribution forward only for
an exact unchanged source, timestamp, quote, and Context match. New or changed
records require explicit attribution. `research/test_compile.py` exercises this
behavior in isolated temporary repositories.

The user approved applying the homepage H1 and matching preview locally with
Claude Design sync deferred. The prepared patch is applied to `index.html` and
`design/page-home.html`; the preview mirrors the existing `.page-title` Sass
rule, so no Sass change is needed. Upstream sync remains deferred.

The assembled implementation passes 40 Python tests, 65 Node tests, and the real
GitHub Pages Jekyll 3.10 builder. Metadata verification covers 1,806 HTML pages,
including 1,689 predictions and 41 essays; agent rendering produces 1,806 twins.
The 52 year indexes range from approximately 97 to 4,202 tokens; the recent
50-statement index is approximately 2,509 tokens.

Independent final spec/quality review passed with no material findings. After
applying the approved H1 patch, the production Pages build, 1,806-page metadata
check, and 1,806-twin agent render passed again. Desktop and mobile browser
checks confirm one visible H1, matching preview typography and intro, and no
overlap or horizontal overflow. The user subsequently approved committing and
pushing the changes. A fresh pre-commit run passed all 40 Python and 65 Node tests.
