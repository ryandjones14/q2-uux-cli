#!/bin/bash

mkdir packages/;
title="q2";
for dir in */ ; do
if [ $dir =~ $title ]; then
    mv $dir packages/$dir;
fi
done
echo "created packages/ with the following dirs:"
ll packages/;
