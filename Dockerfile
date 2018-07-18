FROM ruby:latest 
RUN mkdir /myapp
COPY . /myapp
WORKDIR /myapp
RUN bundle
CMD jekyll build && jekyll serve -H 0.0.0.0 -P 8080
