KEY = gosuri
AKASH_DSEQ = 1262914
IMG = gosuri/blog:v2

server:
	@printf 'Listening on:\n  http://localhost:4000\n  http://%s:4000  (LAN)\n' "$$(ipconfig getifaddr en0 || ipconfig getifaddr en1)"
	bundle exec jekyll server --host 0.0.0.0

# Export, card/agent modules and filesystem delivery tests; standard libraries.
test:
	python3 -m unittest discover -s research -p 'test_*.py'
	node --test research/card_data.test.mjs research/card_templates.test.mjs research/theme_card_integration.test.mjs research/agent_docs.test.mjs research/render_agents.test.mjs

# Inspect real Jekyll output; run after the GitHub Pages builder.
metadata:
	node research/verify_metadata.mjs

# Render markdown twins and llms.txt into an existing Jekyll build.
agents: test
	node research/render_agents.mjs

# Social preview cards are rendered by a separate Node step, not by Jekyll, and
# they are never committed (1,689 cards, ~200 MB). Any `jekyll build` or
# `jekyll server` wipes _site and takes them with it, so `make server` shows
# card.png as a 404. CI renders them after the Jekyll build; use `make preview`
# to reproduce that locally.
cards: test
	cd research && npm install --silent && npx playwright install chromium
	node research/render_cards.mjs

# Build, render both post-build surfaces, then serve without wiping artifacts.
preview:
	bundle exec jekyll build
	node research/render_cards.mjs
	node research/render_agents.mjs
	@printf 'Listening on:\n  http://localhost:4000\n  http://%s:4000  (LAN)\n' "$$(ipconfig getifaddr en0 || ipconfig getifaddr en1)"
	bundle exec jekyll server --host 0.0.0.0 --skip-initial-build --no-watch

installdeps:
	gem install bundler
	bundle

deploy: img img-push remove create

img:
	docker build -t $(IMG) .

img-run:
	docker run --rm -p 8080:8080 -it $(IMG)

img-push:
	docker push $(IMG)

create:
	akash deployment create akash.yml -k $(KEY) > .akash

remove: 
	akash deployment close $(shell cat .akash | head -1) -k $(KEY)

.PHONY: server test metadata cards agents preview installdeps deploy img img-run img-push create remove
