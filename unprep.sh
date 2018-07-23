#!/bin/bash

cd ./packages;
for dir in */ ; do
if [ $dir =~ $title ]; then
    mv $dir ../$dir;
fi
done
cd ../;
rm -rf packages/;
ll -d */;