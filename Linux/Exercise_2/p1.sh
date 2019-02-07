#!/bin/bash

path=$1

for file in $(ls $path/*.*)
do
echo $file
if [ -f $file ]
then
 mv   $file.new
fi

done
