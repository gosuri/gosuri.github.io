server:
	bundle exec jekyll server

installdeps:
	gem install bundler
	bundle

docker-img:
	docker build -t gosuri/blog .

docker-run:
	docker run --rm -p 8080:8080 -it gosuri/blog jekyll serve -H 0.0.0.0 -P 8080

.PHONY: server
