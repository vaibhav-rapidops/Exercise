#!/bin/bash

echo "Enter the 2 input"
echo "Enter the first input a:"
read a
echo "Enter the second input b:"
read b
i=0
while [ $i -lt $n ] 
do
 read a[$i] 

   i=`expr $i + 1` 
done
min=${a[0]}
for num in "${a[@]}"
do
if [ $min -gt $num ]
then 
  min=$num
fi
done
max=${a[0]}
for num in "${a[@]}"
do
if [ $max -lt $num ]
then 
  max=$num
fi
done

if [ $min -lt 0 ]
then  echo "minimum number is $min negative"
else echo "minimum number is $max pasitive"
fi
if [ $max -lt 0 ]
then  echo "maximum number is $min negative"
else echo "maximum number is $max pasitive"
fi
