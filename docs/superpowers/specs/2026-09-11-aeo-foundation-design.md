# Attribution, metadata, and retrieval foundation

Approved scope: the staged approach proposed in chat on 2026-09-11, followed by
the user's instruction to proceed. This is implementation of the first scope,
not a prediction scorecard or an external-profile publishing project.

Approved exception: apply the homepage H1 and matching design preview locally
with Claude Design sync deferred because DesignSync is unavailable.

## Behavior

- Prediction speaker attribution is explicit in `PREDICTIONS.md` and survives
  regeneration. Existing annotations naming other speakers or expressing doubt
  override the archive's original Greg attribution. Uncertain cases remain
  visibly uncertain and do not acquire a definitive structured-data creator.
- HTML, sharing text, cards, and markdown citation strings use the same speaker.
  Original quotations and source URLs remain intact.
- Shared metadata supplies a meaningful title and description for each page
  type. Identity data describe Greg as founder and CEO of Overclock Labs, the
  team behind Akash Network, using only facts already published on About.
- A small JSON-LD graph identifies the site, person, essays, attributed
  quotations, and collections. Existing extraction annotations supply the
  attribution; this does not claim that a new audio review has been performed.
- Republished essays retain external canonical URLs and source publication
  dates. No inferred modification dates, video durations, or episode dates.
- Retrieval guidance chooses small theme/year indexes and flags the large
  all-title index. Additional year routes use the existing static exporter.
  Recommended title indexes have an approximate 5,000-token budget. A recent
  page and twin list the last 50 statements by speech date, with a stable tie
  break. Every markdown twin has a corresponding HTML page.
- Homepage/About identity copy remains consistent with metadata. A visible
  homepage H1 and any changed component preview must follow DesignSync.

## Constraints

- Jekyll 3.10 via the real GitHub Pages builder; no new dependencies or runtime
  JavaScript. JSON-LD is inert data, not an executable script.
- Python owns committed prediction output; Node owns post-build artifacts.
- Never hand-edit generated prediction files; change source and regenerate.
- Preserve existing leaf permalinks, quotations, and canonical policy.
- No transcript publication, Wikidata editing, FAQ schema, grading, or
  fabricated dates. Publishing follows explicit user approval.
- DesignSync pull precedes visual edits; changed previews precede Sass changes
  and are pushed incrementally. If the connector is unavailable, prepare a
  reviewable visual patch and finish unaffected implementation first.

## Acceptance

Real examples with Sunny Aggarwal, Erik Voorhees, and uncertain speakers must
produce accurate citations across surfaces. Regeneration must preserve all
leaf URLs and attribution. Built HTML must contain parseable JSON-LD and
non-tagline descriptions for every supported page type. Structured data must
not contradict external canonical URLs or claim unsupported dates. The agent
renderer must succeed against the real Pages output, recommended index budgets
must hold, and generated cards must render the revised attribution.
