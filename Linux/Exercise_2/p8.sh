#!/bin/bash


echo "the working directory is : $(pwd)"

echo "list of file of $(pwd) directory"
echo "$(ls)"


echo "Enter file name from above list :"
read  filename

echo "top 10 lines of $filename is :"
echo "$(head $filename)"
echo "last 10 lines of $file is :" 
echo "$(tail $filename)"

echo "Display the line no. 3 to 8 of file :" 
echo "$(sed -n '3,8p' $filename)"

echo "Display the 7 line and start from second last of file :" 
echo "$(sort -nr $filename | sed -n '2,8p')"

