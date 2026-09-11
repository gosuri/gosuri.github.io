# Essay source audit — 2026-09-11

## Akash imports

Imported all 27 published Markdown entries whose `contributors` field names Greg Osuri. Each has Greg as the sole contributor; no third-party interviews, transcripts, or posts that only mention Greg were imported. Twenty-one entries were missing; six existing external-link stubs were expanded in place. Source frontmatter marked 26 entries `draft: false`; Confidential Compute omits `draft` and is published.

Local source root: `/Users/gosuri/code/website/src/content/Blog/`. Each source is `<slug>/index.md` under that root. No Akash source files were changed.

The imported prose is preserved from those local sources. Changes are limited to Jekyll frontmatter, local image URLs, removal of confirmed broken images and hyperlinks, resolving Akash-relative hyperlinks, restoring local essay and footnote links, harmless whitespace normalization, and one incompatible Hugo shortcode. Unused source banners were not copied.

### Publication metadata

Akash posts retain `https://akash.network/blog/<slug>/` as `original_url` and `canonical_url`, with `original_publisher: Akash Network`. Serverless and the California testimony were originally published on HackerNoon; both original pages were live HTTP 200 with matching canonicals on the audit date. They use those HackerNoon URLs and publisher metadata while their prose comes from the local Akash copies.

Dates use normalized source publication dates, with one corroborated exception: the California testimony retains 2018-04-09, matching both the existing personal post and the HackerNoon original; Akash dated its copy 2018-04-10. Serverless uses 2017-11-28, supported by the explicit publication credit in the local article; the current HackerNoon payload has an inconsistent January date. The personal filename and URL remain unchanged. Source `pubDate` for Public Cloud was normalized from `Thu Jan 12 2023 14:35:24 GMT+0530 (India Standard Time)` to `2023-01-12`; Roadmap 2025 was normalized from `2025-1-14` to `2025-01-14`.

Existing titles were preserved where equivalent. Source descriptions become post descriptions. All posts use `author: Greg Osuri`; `link:` is removed so the website links to the full local article.

### Imported inventory

| Source slug | Imported post | Publication date | Publisher |
| --- | --- | --- | --- |
| `serverless-is-bigger-than-faas` | `_posts/2017-11-29-serverless-is-bigger-than-faas.md` | 2017-11-28 | HackerNoon |
| `my-testimony-as-an-expert-witness-for-the-first-ever-blockchain-bill-ab-2658-introduced-in-the-state-of-california` | `_posts/2018-04-09-assembly-testimony.md` | 2018-04-09 | HackerNoon |
| `the-economics-of-akash-network-and-token` | `_posts/2019-09-25-akash-network-economics.md` | 2019-09-16 | Akash Network |
| `bootstrapping-a-free-market-by-borrowing-from-the-future` | `_posts/2019-10-07-bootstrapping-a-free-market-by-borrowing-from-the-future.md` | 2019-10-07 | Akash Network |
| `decentralized-serverless-computing-coming-to-cosmos` | `_posts/2019-10-23-decentralized-serverless-computing-coming-to-cosmos.md` | 2019-10-23 | Akash Network |
| `akash-network-validator-rewards` | `_posts/2019-10-31-akash-network-validator-rewards.md` | 2019-10-31 | Akash Network |
| `six-trends-transforming-cloud-computing-in-2020` | `_posts/2020-01-10-six-trends-transforming-cloud-computing-in-2020.md` | 2020-01-10 | Akash Network |
| `closer-to-the-future-of-the-cloud-in-2020` | `_posts/2020-01-24-closer-to-the-future-of-the-cloud-in-2020.md` | 2020-01-24 | Akash Network |
| `an-evolution-of-akash-network-token-economics` | `_posts/2020-02-05-an-evolution-of-akash-network-token-economics.md` | 2020-02-06 | Akash Network |
| `a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens` | `_posts/2020-02-18-a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens.md` | 2020-02-19 | Akash Network |
| `akash-partners-with-solana-to-bring-web-scale-smart-contracts-to-supercloud` | `_posts/2020-03-13-akash-partners-with-solana-to-bring-web-scale-smart-contracts-to-supercloud.md` | 2020-03-13 | Akash Network |
| `akash-q1-recap-updates` | `_posts/2020-04-20-akash-q1-recap-updates.md` | 2020-04-20 | Akash Network |
| `announcing-the-akashian-challenge-incentivized-testnet` | `_posts/2020-04-23-announcing-the-akashian-challenge-incentivized-testnet.md` | 2020-04-23 | Akash Network |
| `the-unstoppable-update-may-2020` | `_posts/2020-05-15-the-unstoppable-update-may-2020.md` | 2020-05-15 | Akash Network |
| `the-unstoppable-update-june-2020` | `_posts/2020-06-11-the-unstoppable-update-june-2020.md` | 2020-06-11 | Akash Network |
| `akash-decloud-for-defi` | `_posts/2020-09-08-akash-decloud-for-defi.md` | 2020-09-08 | Akash Network |
| `the-unstoppable-update-september-2020` | `_posts/2020-09-16-the-unstoppable-update-september-2020.md` | 2020-09-16 | Akash Network |
| `announcing-akash-mainnet-live-and-bitmax-ieo` | `_posts/2020-09-25-announcing-akash-mainnet-live-and-bitmax-ieo.md` | 2020-09-25 | Akash Network |
| `the-unstoppable-update-october-2020` | `_posts/2020-10-07-the-unstoppable-update-october-2020.md` | 2020-10-07 | Akash Network |
| `ceo-statement-on-total-akt-token-circulation` | `_posts/2020-10-20-ceo-statement-on-total-akt-token-circulation.md` | 2020-10-20 | Akash Network |
| `2020-to-2021-acceleration-to-the-decloud` | `_posts/2021-01-19-2020-to-2021-acceleration-to-the-decloud.md` | 2021-01-19 | Akash Network |
| `product-roadmap-2022` | `_posts/2021-10-06-product-roadmap-2022.md` | 2021-10-06 | Akash Network |
| `supermini-update` | `_posts/2021-10-06-supermini-update.md` | 2021-10-06 | Akash Network |
| `q2-2022-update-for-akash-roadmap` | `_posts/2021-12-20-q2-2022-update-for-akash-roadmap.md` | 2021-12-20 | Akash Network |
| `public-cloud-is-a-public-utility` | `_posts/2023-01-12-public-cloud-is-a-public-utility.md` | 2023-01-12 | Akash Network |
| `roadmap-2025` | `_posts/2025-01-14-roadmap-2025.md` | 2025-01-14 | Akash Network |
| `confidential-compute-comes-to-akash` | `_posts/2026-07-28-confidential-compute-comes-to-akash.md` | 2026-07-28 | Akash Network |

### Existing URLs preserved

| Existing post | Previous filename date | Publication date | Explicit permalink |
| --- | --- | --- | --- |
| `_posts/2017-11-29-serverless-is-bigger-than-faas.md` | 2017-11-29 | 2017-11-28 | `/2017/11/29/serverless-is-bigger-than-faas/` |
| `_posts/2019-09-25-akash-network-economics.md` | 2019-09-25 | 2019-09-16 | `/2019/09/25/akash-network-economics/` |
| `_posts/2020-02-05-an-evolution-of-akash-network-token-economics.md` | 2020-02-05 | 2020-02-06 | `/2020/02/05/an-evolution-of-akash-network-token-economics/` |
| `_posts/2020-02-18-a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens.md` | 2020-02-18 | 2020-02-19 | `/2020/02/18/a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens/` |

Testimony and Bootstrapping retain their existing date-based URLs without a permalink override.

### Images

HTTP GET downloads on 2026-09-11 found 3 live remote body images and 38 HTTP 404 images on the legacy DatoCMS host. The fourth available body image is the local community-groups diagram. All 4 retained images were copied into `assets/img/essays/<slug>/`; file signatures were checked as PNG/JPEG before import. Removed image links had empty alt text. Surrounding author prose and captions remain unchanged.

| Essay | Source image | Local path | Bytes |
| --- | --- | --- | --- |
| `a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens` | `https://www.datocms-assets.com/45776/1620921613-og.png` | `/assets/img/essays/a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens/og.png` | 142858 |
| `akash-q1-recap-updates` | `https://www.datocms-assets.com/45776/1620922477-akashsuperminiconceptrenderday3-1024x576.jpg` | `/assets/img/essays/akash-q1-recap-updates/akashsuperminiconceptrenderday3-1024x576.jpg` | 56734 |
| `the-unstoppable-update-october-2020` | `https://www.datocms-assets.com/45776/1620925242-mainnet-and-bm-banner-1024x768.png` | `/assets/img/essays/the-unstoppable-update-october-2020/mainnet-and-bm-banner-1024x768.png` | 442775 |
| `public-cloud-is-a-public-utility` | `./akash-community-groups-block-diagram.png` | `/assets/img/essays/public-cloud-is-a-public-utility/akash-community-groups-block-diagram.png` | 36797 |

Confirmed broken images removed:

- `bootstrapping-a-free-market-by-borrowing-from-the-future`: `https://www.datocms-assets.com/45776/1620922422-annual-inflation.png` (HTTP 404).
- `akash-network-validator-rewards`: `https://www.datocms-assets.com/45776/1620922421-annual-inflation-1.png` (HTTP 404).
- `closer-to-the-future-of-the-cloud-in-2020`: `https://www.datocms-assets.com/45776/1620922312-img4cf96ee494c5-1.jpeg` (HTTP 404).
- `an-evolution-of-akash-network-token-economics`: `https://www.datocms-assets.com/45776/1620922312-kawvcvsdg1vdrjavryqdd4xngc7tkhmiqqosq5wge6x9isxirvjhyp65t7molvrdh1pg93-zpmqotocxlixiaa9vuwyii0atjlvn7qwtokuty65weuia4kemgak1zeewvyqx.png` (HTTP 404).
- `an-evolution-of-akash-network-token-economics`: `https://www.datocms-assets.com/45776/1620922320-s6uk4j1nirumr2fcbrmc6grbsfro3ob0c9jtfzv9b1rwtxwbaeycmoacxicrqy4bjwiuunlh95ddrjv5qmbbeknbunho1e1xxbkispg3nscffkactjvwozsmenrrqfa4kh1b.png` (HTTP 404).
- `akash-q1-recap-updates`: `https://www.datocms-assets.com/45776/1620922423-000035340013-copy-1-1024x678.jpg` (HTTP 404).
- `akash-q1-recap-updates`: `https://www.datocms-assets.com/45776/1620922446-0-1.jpg` (HTTP 404).
- `akash-q1-recap-updates`: `https://www.datocms-assets.com/45776/1620922423-new-solana-blog-home-page.png` (HTTP 404).
- `akash-q1-recap-updates`: `https://www.datocms-assets.com/45776/1620922467-jack-speaking-1024x768.jpg` (HTTP 404).
- `announcing-the-akashian-challenge-incentivized-testnet`: `https://www.datocms-assets.com/45776/1620922423-the-image-1024x1024.jpg` (HTTP 404).
- `the-unstoppable-update-may-2020`: `https://www.datocms-assets.com/45776/1620922428-akashian-challenge-1024x768.png` (HTTP 404).
- `the-unstoppable-update-may-2020`: `https://www.datocms-assets.com/45776/1620922455-forbole-1024x576.jpg` (HTTP 404).
- `the-unstoppable-update-may-2020`: `https://www.datocms-assets.com/45776/1620922477-hires-1-1024x683.jpg` (HTTP 404).
- `the-unstoppable-update-may-2020`: `https://www.datocms-assets.com/45776/1620922485-akashsuperminifrontsidewithoutshadow-1024x576.jpg` (HTTP 404).
- `the-unstoppable-update-may-2020`: `https://www.datocms-assets.com/45776/1620922493-akashsuperminiconceptrenderday2-1024x576.jpg` (HTTP 404).
- `the-unstoppable-update-june-2020`: `https://www.datocms-assets.com/45776/1620922425-tac-phase-1-complete-banner-1-1024x768.png` (HTTP 404).
- `the-unstoppable-update-june-2020`: `https://www.datocms-assets.com/45776/1620922452-this-one-1024x576.jpg` (HTTP 404).
- `the-unstoppable-update-june-2020`: `https://www.datocms-assets.com/45776/1620922422-akashsuperminifrontside-1024x576.jpg` (HTTP 404).
- `akash-decloud-for-defi`: `https://www.datocms-assets.com/45776/1620925254-screen-shot-2020-09-06-at-6-34-27-pm-711x1024.png` (HTTP 404).
- `the-unstoppable-update-september-2020`: `https://www.datocms-assets.com/45776/1620925257-roadmap-update-v2-banner-1024x768.png` (HTTP 404).
- `the-unstoppable-update-september-2020`: `https://www.datocms-assets.com/45776/1620925359-decloud-v6-3-1024x768.png` (HTTP 404).
- `the-unstoppable-update-september-2020`: `https://www.datocms-assets.com/45776/1620926016-interchain-banner-copy-1-1024x768.png` (HTTP 404).
- `the-unstoppable-update-september-2020`: `https://www.datocms-assets.com/45776/1620926031-earning-potential-banner-1024x768.png` (HTTP 404).
- `the-unstoppable-update-october-2020`: `https://www.datocms-assets.com/45776/1620925347-featuredimg-1024x683.png` (HTTP 404).
- `the-unstoppable-update-october-2020`: `https://www.datocms-assets.com/45776/1620925372-kava-partnership-banner-1024x768.png` (HTTP 404).
- `ceo-statement-on-total-akt-token-circulation`: `https://www.datocms-assets.com/45776/1620926168-nanqvfcmj91247hjwcy6uuuoqtehr2cvffglssuxhwj5nytslue37mfqt4tauvwr2ofrkcd2ujms3ugbw-5x9ugz4vtuuusvljs6bgcy5jzakh3onuko2myk4vqlls12-cqbuz.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620925267-hero1-1024x724.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620925362-phase-3-live-banner-1024x768.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926574-supermini-1024x538.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926586-interchain-banner-copy-1024x768.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926602-chainlink-banner-1024x768.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926618-huobi-1024x768.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926633-phase-3-close-1024x768.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926644-artur.jpg` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926652-eric-urban-1.jpg` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926661-square-headshot.jpg` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620684248-img-4669.png` (HTTP 404).
- `2020-to-2021-acceleration-to-the-decloud`: `https://www.datocms-assets.com/45776/1620926673-brian-fox-2.jpg` (HTTP 404).

### Other rendering transforms

- `public-cloud-is-a-public-utility`: Resolved Akash-relative link: `/development/product-strategy/ -> https://akash.network/development/product-strategy/`.
- `public-cloud-is-a-public-utility`: Resolved Akash-relative link: `/development/community-groups/ -> https://akash.network/development/community-groups/`.
- `public-cloud-is-a-public-utility`: Converted unsupported Hugo shortcode: `Commented youtube qdQFOS-uG_A shortcode -> plain video link`.
- `roadmap-2025`: Resolved Akash-relative link: `/roadmap/aep-12/ -> https://akash.network/roadmap/aep-12/`.
- `roadmap-2025`: Resolved Akash-relative link: `/roadmap/aep-26/ -> https://akash.network/roadmap/aep-26/`.
- `roadmap-2025`: Resolved Akash-relative link: `/roadmap/aep-53/ -> https://akash.network/roadmap/aep-53/`.
- `roadmap-2025`: Resolved Akash-relative link: `/roadmap/aep-11/ -> https://akash.network/roadmap/aep-11/`.
- `roadmap-2025`: Resolved Akash-relative link: `/roadmap/aep-60/ -> https://akash.network/roadmap/aep-60/`.

### Validation and remaining audit

The import script asserted every expected image reference existed exactly once, required retained files to exist, and verified all failed images had HTTP 404 before removal. The source manifest records exact source paths, raw dates, destination paths, image statuses, and canonical selections at `/tmp/akash-essay-manifest.json`. Live checks of all 27 Akash article URLs returned HTTP 200 and matching self canonicals; raw results are at `/tmp/akash-source-http-audit.json`. Parent task owns remaining body hyperlink auditing, Jekyll build, agent-document rendering, and repository test results. An independent assertion pass verified all 27 destinations, canonical/original metadata, retained image files, absence of removed image URLs, and source-relative link/shortcode transforms. Source Markdown includes trailing spaces for line breaks and whitespace-only separators; `git diff --check` reports those inherited formatting details.

## Body hyperlink cleanup — 2026-09-11

Removed 38 broken body hyperlink occurrences (28 unique exact URLs) from the Akash imports, retaining all linked labels and surrounding historical prose. Repaired 5 obsolete essay/footnote links locally. Normalized 143 whitespace-only or empty-blockquote lines; meaningful two-space Markdown hard breaks remain intact. No canonical/original-publisher fields were removed.

The initial 275-URL audit is `/tmp/essay-body-link-audit.json`. Uncertain URLs were requested again independently with curl; exact results are `/tmp/akash-essay-link-recheck.json`. Repeated DNS failures were removed. TLS/connection failures and timeouts were independently reproduced before removal. Browser fetches also failed for NuCypher, DeFi Pulse, and Hone Capital. Akashlytics redirects to retired Cloudmos; browser fetching Cloudmos followed an unrelated café-domain redirect. HTTP 401/403/429 and LinkedIn 999 blocks were retained because they do not establish that the original article is missing.

All seven Akash-relative links in Public Cloud and Roadmap 2025 returned HTTP 200 after resolving them against `https://akash.network`; the restored announcement-video URL also returned HTTP 200.

### Repaired links

| Essay | Original URL | Replacement | Reason |
| --- | --- | --- | --- |
| `bootstrapping-a-free-market-by-borrowing-from-the-future` | `https://blog.akash.network/2019/09/25/akash-network-economics` | `/2019/09/25/akash-network-economics/` | Existing imported essay; retired original host fails DNS |
| `six-trends-transforming-cloud-computing-in-2020` | `https://blog.akash.network/2020/01/09/six-trends-transforming-cloud-computing-in-2020/#easy-footnote-bottom-1-520` | `/2020/01/10/six-trends-transforming-cloud-computing-in-2020/#fn:1` | Repaired self citation with native Markdown footnote and preserved original reference text |
| `six-trends-transforming-cloud-computing-in-2020` | `https://blog.akash.network/2020/01/09/six-trends-transforming-cloud-computing-in-2020/#easy-footnote-bottom-2-520` | `/2020/01/10/six-trends-transforming-cloud-computing-in-2020/#fn:2` | Repaired self citation with native Markdown footnote and preserved original reference text |
| `six-trends-transforming-cloud-computing-in-2020` | `https://blog.akash.network/2020/01/09/six-trends-transforming-cloud-computing-in-2020/#easy-footnote-bottom-3-520` | `/2020/01/10/six-trends-transforming-cloud-computing-in-2020/#fn:3` | Repaired self citation with native Markdown footnote and preserved original reference text |
| `six-trends-transforming-cloud-computing-in-2020` | `https://blog.akash.network/2020/01/09/six-trends-transforming-cloud-computing-in-2020/#easy-footnote-bottom-4-520` | `/2020/01/10/six-trends-transforming-cloud-computing-in-2020/#fn:4` | Repaired self citation with native Markdown footnote and preserved original reference text |

### Removed hyperlink markup

| Essay | URL | Verified reason |
| --- | --- | --- |
| `bootstrapping-a-free-market-by-borrowing-from-the-future` | `https://www.nucypher.com/` | TLS/connection failure in initial audit and independent curl recheck |
| `bootstrapping-a-free-market-by-borrowing-from-the-future` | `https://tendermint.com/docs/introduction/what-is-tendermint.html` | HTTP 404 |
| `bootstrapping-a-free-market-by-borrowing-from-the-future` | `https://akash.network/newsletter` | HTTP 404 |
| `decentralized-serverless-computing-coming-to-cosmos` | `https://www.nucypher.com/` | TLS/connection failure in initial audit and independent curl recheck |
| `decentralized-serverless-computing-coming-to-cosmos` | `https://github.com/ovrclk/akash/tree/master/sdl` | HTTP 404 |
| `decentralized-serverless-computing-coming-to-cosmos` | `https://akash.network/chat` | HTTP 404 |
| `akash-network-validator-rewards` | `https://akash.network/docs/architecture/overview/` | HTTP 404 |
| `akash-network-validator-rewards` | `https://akash.network/static/akash-econ.pdf` | HTTP 404 |
| `akash-network-validator-rewards` | `https://akash.network/static/akash-econ.pdf` | HTTP 404 |
| `akash-network-validator-rewards` | `https://akash.network/chat` | HTTP 404 |
| `closer-to-the-future-of-the-cloud-in-2020` | `https://akash.network/l/love` | HTTP 404 |
| `closer-to-the-future-of-the-cloud-in-2020` | `https://akash.network/supermini/reserve` | HTTP 404 |
| `an-evolution-of-akash-network-token-economics` | `https://akash.network/docs/providers/kube` | HTTP 404 |
| `an-evolution-of-akash-network-token-economics` | `https://akash.network/static/akash-econ.pdf` | HTTP 404 |
| `akash-q1-recap-updates` | `https://dcs.akash.network/spec/dcs-4` | DNS resolution failed in initial audit and independent curl recheck |
| `akash-q1-recap-updates` | `https://thebitcoinpodcast.com/hashing-it-out-70/` | HTTP 404 |
| `the-unstoppable-update-may-2020` | `https://testnet.akash.bigdipper.live/` | DNS resolution failed in initial audit and independent curl recheck |
| `the-unstoppable-update-may-2020` | `https://akash.aneka.io/` | TLS/connection failure in initial audit and independent curl recheck |
| `the-unstoppable-update-june-2020` | `https://testnet.akash.bigdipper.live/` | DNS resolution failed in initial audit and independent curl recheck |
| `the-unstoppable-update-june-2020` | `https://akash.aneka.io/` | TLS/connection failure in initial audit and independent curl recheck |
| `akash-decloud-for-defi` | `https://defipulse.com` | Connection timeout in initial audit and independent curl recheck; browser fetch also unavailable |
| `announcing-akash-mainnet-live-and-bitmax-ieo` | `https://bitmaxhelp.zendesk.com/hc/en-us/articles/360056045413-Join-Upcoming-Auctions-for-Exclusive-Primary-Listing-of-Akash-AKT-` | HTTP 404 |
| `2020-to-2021-acceleration-to-the-decloud` | `https://dcs.akash.network/spec/dcs-4` | DNS resolution failed in initial audit and independent curl recheck |
| `2020-to-2021-acceleration-to-the-decloud` | `https://dex.projectserum.com/#/market/H3APNWA8bZW2gLMSq5sRL41JSMmEJ648AqoEdDgLcdvB` | TLS/connection failure in initial audit and independent curl recheck |
| `2020-to-2021-acceleration-to-the-decloud` | `https://www.debuti.art/` | DNS resolution failed in initial audit and independent curl recheck |
| `2020-to-2021-acceleration-to-the-decloud` | `http://honecap.com/` | Connection timeout in initial audit and independent curl recheck; browser fetch also unavailable |
| `2020-to-2021-acceleration-to-the-decloud` | `https://www.bithumb.pro/en-us` | HTTP 404 |
| `product-roadmap-2022` | `https://akashlytics.com/` | Redirects to retired cloudmos.io: repeated TLS failure; browser fetch redirects to unrelated firstlightcafe.co.uk |
| `product-roadmap-2022` | `https://akashdeploy.hns.siasky.net` | DNS resolution failed in initial audit and independent curl recheck |
| `supermini-update` | `https://akashlytics.com/` | Redirects to retired cloudmos.io: repeated TLS failure; browser fetch redirects to unrelated firstlightcafe.co.uk |
| `supermini-update` | `https://akashlytics.com/price-compare` | Redirects to retired cloudmos.io: repeated TLS failure; browser fetch redirects to unrelated firstlightcafe.co.uk |
| `q2-2022-update-for-akash-roadmap` | `https://www.akashlytics.com/` | Redirects to retired cloudmos.io: repeated TLS failure; browser fetch redirects to unrelated firstlightcafe.co.uk |
| `q2-2022-update-for-akash-roadmap` | `https://akash.network/docs/release-notes/v0.14.0#hostname-migration` | HTTP 404 |
| `q2-2022-update-for-akash-roadmap` | `https://akash.network/docs/release-notes/v0.14.0` | HTTP 404 |
| `q2-2022-update-for-akash-roadmap` | `https://akash.network/docs/release-notes/v0.14.0` | HTTP 404 |
| `q2-2022-update-for-akash-roadmap` | `https://github.com/ovrclk/akash/issues/1352` | HTTP 404 |
| `q2-2022-update-for-akash-roadmap` | `https://drip.akash.network` | DNS resolution failed in initial audit and independent curl recheck |
| `q2-2022-update-for-akash-roadmap` | `https://drip.akash.network` | DNS resolution failed in initial audit and independent curl recheck |

Exact removal/mapping counts and records: `/tmp/akash-essay-link-cleanup.json`. Full site build and browser validation remain owned by the parent task.
