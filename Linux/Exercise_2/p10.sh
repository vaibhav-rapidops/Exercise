#!/bin/bash

totalword(){

for file in $(ls)
do
 if [ -f $file ] 
  then {  
   if [ $(grep abc $file | wc -w ) -gt 0 ]
    then
      echo  "$file  => file path is : $(pwd) " 
   fi
  }  
  elif [ -d $file ]
  then {
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
echo "below list of file conatin \"abc\" string"
totalword

