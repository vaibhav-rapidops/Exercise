#!/bin/bash


total=0

totalword(){
for file in $(ls *.txt)
do
 if [ -f $file ]
 then { 
 total=`expr $total + $(grep Linux $file | wc -w) ` 
  }  
else {
  cd $file
  totalword
	cd ..
}
fi
done
}



path=$(pwd)
echo "the working directory is $path"
cd $path
totalword
echo "total no. of Linux word is : $total" 


