#!/bin/bash
echo "Enter no. of input"
read n
i=0

while [ $i -lt $n ] 
do
 read a[$i] 
   i=`expr $i + 1` 
done

echo "input taken using the \"while loop\""

j=0
until [ $j -gt $n ] 
do 
echo ${a[$j]}
   j=`expr $j + 1` 
done


echo "input printed using the \"until loop\""

for num in "${a[@]}"
do 
echo $num
done

echo "input peinted using the \"for loop\""
