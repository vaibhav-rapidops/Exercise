let elements=[1,2,"vaibhav","tejash",3,4,{a:function(){return null},
                                          b:5,
                                         c:{d:4}}];
let mapdata=[];
let j=0;
for (let i = 0;i<elements.length; i++)
{
document.write(elements[i]+"<br>");
if(typeof(elements[i])=="object"){
    document.write(Object.keys(elements[i])+" "+Object.entries(elements[i]) +"<br>");
}

}
document.write("JSON FORMAT<br>");
