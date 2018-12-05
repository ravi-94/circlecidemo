#!/bin/bash

echo '1. Updating sources'
cd /home/tricon/circleci/ciclecidemo/
git checkout --force master
git pull
npm install
npm run build
npm run start
echo 'Done!'

