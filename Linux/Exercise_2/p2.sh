
#!/bin/bash
path=$1
for file in `ls $path | grep -e "$" -e "_" -e "#" -e "-"`
do
rm $file
done





