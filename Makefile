server:
	bundle exec jekyll server

installdeps:
	gem install bundler
	bundle

docker-img:
	docker build -t gosuri/blog .

docker-run:
	docker run --rm -p 8080:8080 -it gosuri/blog 

.PHONY: server
