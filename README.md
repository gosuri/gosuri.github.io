# gregosuri.com

Source for [gregosuri.com](https://www.gregosuri.com) — a Jekyll site with two kinds of
content:

- **Essays** — 20 posts in `_posts/`, written by hand.
- **Predictions** — 1,689 dated, timestamped claims about compute, extracted from 240
  recorded talks and podcasts between 2015 and 2026. Each one has its own page, a
  permalink, a copy-link control, and a generated social preview image.

The predictions are **generated**, not authored here. `PREDICTIONS.md` is the source of
truth; `research/export_blog.py` turns it into a Jekyll collection.

## Layout

```
_posts/                 essays (hand-written)
_predictions/           1,689 collection documents   ← GENERATED, never hand-edit
predictions/            theme index + theme pages    ← GENERATED, never hand-edit
PREDICTIONS.md          source of truth for every prediction
research/               the extraction pipeline + the card renderer
_includes/ _layouts/    templates (hand-written)
_sass/                  _tokens, _base, _layout, _components, _syntax-highlighting
design/                 12 standalone design previews — the design system's source
docs/                   specs and implementation plans
transcripts/            355 third-party transcripts — LOCAL ONLY, gitignored
videos/ catalog/        per-video notes and pipeline metadata
```

`_predictions/` and `predictions/` are overwritten wholesale on every regeneration. Edit
`PREDICTIONS.md` or the generator, never the output.

## Running locally

```sh
make server     # jekyll server at http://127.0.0.1:4000
```

Social preview cards will 404 under `make server`. That is expected — see below.

```sh
make preview    # build + render cards + serve without regenerating
make cards      # render cards into an existing _site
```

## Regenerating the predictions

```sh
cd research && python3 export_blog.py     # rewrites _predictions/ and predictions/
python3 -m unittest test_export_blog -v   # 26 tests
```

The generator refuses to write if any two predictions would produce the same URL id.

## Development guidelines

**Verify against the real GitHub Pages builder, not local Jekyll.** The `Gemfile`
resolves to Jekyll 4; Pages runs Jekyll 3.10 via the `github-pages` gem. They differ in
ways that break builds — Jekyll 3.10 parses `_data` through `safe_yaml`, whose date
handling is stricter, and that has taken this site down before.

```sh
docker run --rm -v "$PWD":/github/workspace -v /tmp/out:/out \
  -e GITHUB_WORKSPACE=/github/workspace -e GITHUB_REPOSITORY=gosuri/gosuri.github.io \
  -e INPUT_SOURCE=. -e INPUT_DESTINATION=../../out -e INPUT_FUTURE=true \
  ghcr.io/actions/jekyll-build-pages:v1.0.13
```

**Every `.md` file becomes a public page unless excluded.** `jekyll-optional-front-matter`
is active in the Pages plugin set. Anything added to the repo root that should not be
served needs an entry in `_config.yml`'s `exclude:` list. This has caught out `AGENTS.md`
already.

**Two different mechanisms guard two different risks.** `.gitignore` controls what becomes
*public on GitHub*; `_config.yml` `exclude:` controls what gets *served on the site*.
Third-party transcripts need both. So do the pipeline run logs — Whisper runs verbose, so
`catalog/*.log` embeds transcript text.

**All absolute URLs come from `site.url`** (`https://www.gregosuri.com`). The bare apex
only redirects, and social scrapers follow redirects unreliably, so a hardcoded apex URL
silently breaks link previews.

**Design tokens are locked.** Colours, type scale and spacing live in `_sass/_tokens.scss`.
Use the custom properties; don't introduce hex values. `design/*.html` is the source of
truth for how a component should look — change the preview first, then mirror it into the
`_sass` partials.

**The site has exactly one script**, inlined in `_includes/footer.html`: the copy-link
handler, plus the pass that marks external links `target="_blank"`. No build step, no
dependencies. Keep it that way, and keep it degrading gracefully without JS.

**External links open in a new tab.** Templates set `target="_blank" rel="noopener"`
directly. Links written in markdown can't be reached from a template, so the footer script
marks those at load time by comparing hostname.

## Social preview cards

Each prediction advertises `og:image` at `<permalink>card.png`, rendered 1200×630 by
`research/render_cards.mjs` with Playwright.

The cards are **never committed** — 1,689 of them is roughly 200 MB against a ~2 MB repo.
CI renders them into `_site` between the Jekyll build and the Pages upload, cached against
a hash of `PREDICTIONS.md` and the renderer, so an ordinary content change re-renders only
what moved. A full render takes about three minutes.

The consequence locally is that any `jekyll build` or `jekyll server` wipes `_site` and
takes the cards with it. Use `make preview`.

## Deploying

Pushing to `master` triggers `.github/workflows/deploy.yml`: Jekyll build → render cards →
upload → deploy to GitHub Pages. This requires **Settings → Pages → Source = GitHub
Actions**; on the older "Deploy from a branch" setting the cards are never rendered and
every `og:image` 404s.

The site is served at `www.gregosuri.com` (see `CNAME`) through Cloudflare. The apex
redirects to `www` via a Cloudflare redirect rule. `_includes/head.html` fingerprints the
stylesheet URL with the build time, because Cloudflare caches aggressively enough to
otherwise pair new markup with a stale `main.css`.

`Dockerfile` and the `make deploy`/`make create` targets are an older Akash deployment
path, kept but not part of the current pipeline.
