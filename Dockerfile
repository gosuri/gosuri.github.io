FROM jekyll/jekyll:latest
RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp
