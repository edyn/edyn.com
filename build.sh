#!/bin/bash

set -ex

echo "+++ Building assets"
docker run --rm  -w /www/app -v $PWD:/www/app node:4 npm install -g npm && npm install
docker run --rm -w /www/app -v $PWD:/www/app node:4 npm run bower
docker run --rm -w /www/app -v $PWD:/www/app node:4 npm run build

echo "--- Building docker image"

docker build -t edyn/website .

BUILD_BRANCH=${BUILDKITE_BRANCH:-""}

if [[ "$BUILD_BRANCH" == "master" ]]; then
  TAG="lastest"
fi

if [[ "$TAG" != "" ]]; then
  docker tag edyn/website edyn/website:$TAG
  docker push edyn/website:$TAG
fi
