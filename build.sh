#!/bin/bash

set -ex

docker run --rm  -w /www/app -v $PWD:/www/app edyn/node:4-dev npm install
docker run --rm -w /www/app -v $PWD:/www/app edyn/node:4-dev npm run bower
docker run --rm -w /www/app -v $PWD:/www/app edyn/node:4-dev npm run build
docker run --rm -w /www/app -v $PWD:/www/app edyn/node:4-dev npm run cev

docker build -t edyn/website .

BUILD_BRANCH=${BUILDKITE_BRANCH:-""}

if [[ "$BUILD_BRANCH" == "master" ]]; then
  TAG="lastest"
fi

if [[ "$TAG" != "" ]]; then
  docker tag edyn/website edyn/website:$TAG
  docker push edyn/website:$TAG
fi
