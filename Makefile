KEY = gosuri
AKASH_DSEQ = 1262914
IMG = gosuri/blog:v2

server:
	bundle exec jekyll server

# Social preview cards are rendered by a separate Node step, not by Jekyll, and
# they are never committed (1,689 cards, ~200 MB). Any `jekyll build` or
# `jekyll server` wipes _site and takes them with it, so `make server` shows
# card.png as a 404. CI renders them after the Jekyll build; use `make preview`
# to reproduce that locally.
cards:
	cd research && npm install --silent && npx playwright install chromium
	node research/render_cards.mjs

# Build, render the cards, then serve the finished _site WITHOUT regenerating
# (regenerating is what deletes the cards). Use this to check og:image locally.
preview:
	bundle exec jekyll build
	node research/render_cards.mjs
	bundle exec jekyll server --skip-initial-build --no-watch

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

.PHONY: server cards preview installdeps deploy img img-run img-push create remove
