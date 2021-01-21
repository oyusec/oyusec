#!/usr/bin/env sh
set -e
cd dist
echo "<!-- developed by: ByamB4 -->\n$(cat index.html)" > index.html
git init
git add -A
git commit -a --allow-empty-message -m ''
git push -f git@github.com:oyusec/oyusec.github.io.git master:gh-pages
cd -