#!/bin/bash

set -ex

npm install
npm run bower
npm run build
npm run cev
