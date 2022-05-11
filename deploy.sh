#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git add .
git commit -m 'deploy'

# Change Username and repository name
git push -f git@github.com:$1/$2.git main:gh-pages

cd -