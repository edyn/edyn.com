#!/bin/bash

set -ex

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
