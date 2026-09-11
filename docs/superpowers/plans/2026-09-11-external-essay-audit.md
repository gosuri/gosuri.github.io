# External essay import audit — 2026-09-11

## Imported

- `_posts/2017-11-27-happy-medium-for-vcs-and-icos.md`: full recovered original prose from https://hackernoon.com/a-happy-medium-for-vcs-and-icos-cc5460a17776. Greg Osuri author and 2017-11-27 date verified in publisher Next.js payload. Canonical link element points to that exact HackerNoon URL. Existing Medium link returned 403 (Cloudflare), so it is access-blocked rather than missing; working HackerNoon publication contains the same original Medium story ID.
- `_posts/2017-12-03-the-blockchain-people.md`: full recovered original prose from https://hackernoon.com/the-blockchain-people-978cc4da3a1c. Greg Osuri author and 2017-12-03 verified. Canonical points to that exact URL. Three original images copied into `assets/img/essays/the-blockchain-people/` (249871 bytes combined). Old `hackernoon.com/hn-images` paths return 404; equivalent `hackernoon.imgix.net/hn-images` URLs return image MIME types and 200. A/B/C/D list line breaks repaired from migrated source based on Medium indexed text. All substantive original paragraphs preserved; platform recommendation/subscribe closing lines removed.

Both imported posts now contain `original_url`, `original_publisher: HackerNoon`, `canonical_url`; no external-only `link` field. Existing filename dates and permalink paths preserved.

## Removed broken links

- Removed empty `_posts/2013-10-23-automating-your-infrastructure-with-chef.md`. The only content was its AirPair link. `https://www.airpair.com/devops/devops-tools`, apex and HTTP variants, and AirPair home all return HTTP 503 with Heroku Application Error (not an authentication wall). Public web searches found no recoverable Greg-authored full text. Archive CDX timed out; archive availability API returned 429. We cannot prove permanent deletion, but the current link is nonfunctional and no local content existed.
- Retained the complete already-local Docker/Terraform guide. Replaced its dead AirPair source link with plain publication credit and removed the dead AirPair fork hyperlink; guide content remains local and self-canonical by normal site behavior. Original source endpoint also returns 503. Greg authorship is independently recorded by AWS News Blog: https://aws.amazon.com/blogs/aws/aws-week-in-review-march-2-2015/ .

## Recovered for Akash importer

- `serverless-body.html` / `serverless-body.md`: original HackerNoon content, canonical https://hackernoon.com/serverless-is-bigger-than-faas-a5fe0f088981 . Its migrated published date says 2017-01-27, inconsistent with personal site November 29 and Akash attribution November 28; advised preserving existing date/permalink.
- `testimony-body.html` / `testimony-body.md`: original HackerNoon content, canonical https://hackernoon.com/my-testimony-as-an-expert-witness-for-the-first-ever-blockchain-bill-ab-2658-introduced-in-the-95bfe2b69add . 2018-04-09 and Greg Osuri verified. Original hero recovered as `testimony-image-0.jpeg`, plus video thumbnail. Recommended preserving original Nick Alesandro drafting credit and skipping thumbnail without recoverable video link.

## Evidence and validation

Raw publisher HTML and structured JSON are in this directory. `recovered-metadata.json` records extracted author, dates, body paths, canonicals and image URLs. HTTP evidence is in `http-evidence.json`, `recovery-evidence.json`, `recovery2-evidence.json`, `image-recovery-evidence.json`.

Parsed every original substantive paragraph/heading/list item and asserted it remains in each imported Markdown file after formatting normalization; checks passed. Verified every local Markdown image exists and each imported post has no `link` field. Git diff scoped to assigned files checked. No repo-wide tests run by this subagent; parent owns final Jekyll build and validation.

Bounded HackerNoon/Medium author searches and publisher previous/next story navigation found the same four essays, no additional confirmed Greg-authored essay. Author profile returns no story inventory in indexed HTML and is 403 for direct automated access; discovery is therefore not proof that no additional historical essay exists.

Additional validation: `git diff --check` passes for all assigned posts. Local images inspected for meaningful alt text. Imported inline references to CoinDesk and CryptoCoinsNews return anti-bot challenge pages; Tezos returns its real home page. These are not confirmed broken links, so preserved. The earn.com reference could not be verified promptly. HackerNoon author RSS also returns Cloudflare challenge.

## Final non-Akash body-link cleanup

Audited the original local essays plus the two HackerNoon imports against `/tmp/essay-body-link-audit.json`; independently repeated failing requests with curl and a fixed total timeout. Evidence: `/tmp/essay-source-audit/body-recheck-evidence.json`.

- Removed the Homebrew hyperlink in the git-url-sub announcement, preserving its text: `mxcl.github.com` fails DNS in both the initial audit and repeat curl request.
- Removed the `>1000X improvement` hyperlink in The Blockchain People, preserving its text: `news.earn.com` repeatedly times out connecting, including the initial audit and independent repeat request (8-second connect timeout). No claim of HTTP 404 or permanent deletion is made; the link is currently nonfunctional.
- Preserved the git-url-sub Usage link. It redirects to `https://www.gregosuri.com/git-url-sub/`, responds HTTP 200, and the response contains the actual git-url-sub(1) manual (NAME, SYNOPSIS, OPTIONS, DESCRIPTION). It is not a soft 404.
- Preserved the old Tunnelblick Google Code link. Its initial 500 was transient; the repeat request redirects to the working Google Code archive with HTTP 200.
- Preserved Twitter/X 520, CoinDesk/HashiCorp 429, CryptoCoinsNews 403, and GatesNotes 403 links: these responses do not establish missing content.
- Switched the two existing YouTube iframe source URLs in Here's to the crazy ones and Margaret Hamilton to HTTPS, preserving both video IDs and all other embed attributes.
- Normalized whitespace-only lines in edited files. No prose rewrites, code changes, or changes to the Akash-owned posts or 2025 House testimony.

Final scoped `git diff --check` and direct source assertions verify removed dead hyperlinks, unchanged link labels, HTTPS embeds, and preserved reachable links. Full site build and renderer checks remain with the coordinating agent.

## House testimony

Imported the complete three-page written testimony already linked from About as
`_posts/2025-05-21-testimony-on-ai-energy-and-distributed-compute.md`.
Source and canonical: https://docs.house.gov/meetings/II/II15/20250521/118174/HHRG-119-II15-Wstate-OsuriG-20250521.pdf
(HTTP 200). Text was extracted locally, checked against all three rendered pages,
and independently compared word-for-word after formatting normalization. Paragraphs,
list items and emphasis are preserved; the existing About label supplies the local
article title. About now links to the local essay, which credits the official source.
