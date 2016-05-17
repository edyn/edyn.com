# Pull base image.
FROM node:4.2

MAINTAINER Mamadou Bobo Diallo <bobo@edyn.com>


# Define working directory.
WORKDIR /www/app

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /www/app/ && cp -a /tmp/node_modules /www/app/

ADD . /www/app/

# Define default command.
CMD ["npm", "start"]

VOLUME /var/log/

VOLUME /www/app

# Expose ports.
EXPOSE 80
