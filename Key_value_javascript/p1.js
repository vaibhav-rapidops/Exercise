

let elements=[1,2,"vaibhav","tejash",3,4,
            {a:function(){return null},
             b:5,
             c:{d:4}}
            ];
let mapdata=[];
let j=0;
function addnumber(value){
   j++;
   mapdata.push({key: value,count:value+j});
}  
function addstring(value){
mapdata.push({key:value,count:value});
}
function addobject(element){
{ 
for (var i in element)
	data={}
   console.log(element[i]);}
	
 	     
}

for (let i = 0;i<elements.length; i++)
{
console.log(elements[i]);
switch(typeof(elements[i])){
case "number": addnumber(elements[i]);
               break;
case "string": addstring(elements[i]);
               break;
case "object": addobject(elements[i]);
                break;
}

}

for(let k=0;k<mapdata.length;k++){
    console.log("{ key :"+mapdata[k].key + ", value :"+ mapdata[k].count +" } ");
}
