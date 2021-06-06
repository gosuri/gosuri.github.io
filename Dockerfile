FROM ruby:2.6.6
RUN mkdir /myapp
COPY . /myapp
WORKDIR /myapp
RUN bundle install
CMD bundle exec jekyll build && bundle exec jekyll serve -H 0.0.0.0 -P 8080
