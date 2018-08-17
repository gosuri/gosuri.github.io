KEY = osuri

server:
	bundle exec jekyll server

installdeps:
	gem install bundler
	bundle

deploy: img img-push remove create

img:
	docker build -t gosuri/blog .

img-run:
	docker run --rm -p 8080:8080 -it gosuri/blog 

img-push:
	docker push gosuri/blog 

create:
	akash deployment create akash.yml -k $(KEY) > .akash

remove: 
	akash deployment close $(shell cat .akash | head -1) -k $(KEY)

.PHONY: server installdeps deploy img img-run img-push create remove
