let textBox=[];
textBox.push(0);
textBox.push(1);

function addTextInput(id)
{
    let parent=document.getElementById('InputGroup_'+id);
    let child=document.createElement('div');
    id=Math.max(...textBox)+1;
    textBox.push(id);
    child.setAttribute("id","InputGroup_"+id) ;
    child.innerHTML='<div class="input-group"+ "><span class="input-group-btn"><button onclick="addTextInput('+id+')" id="addchild_'+id+'" type="button" class="btn btn-primary">+</button></span><input type="text" class="form-control" name="text_'+id+'" value="text_'+id+'" placeholder="Input Text"><span class="input-group-btn"><button onclick="removeTextInput('+id+')" id="removechild_'+id+'" type="button" class="btn btn-danger">-</button></span></div>'; 
    insertAfter(child,parent);
    createTableRow(id);
} 
function removeTextInput(id)
{
    document.getElementById("InputGroup_"+id).remove();
   textBox.splice(textBox.indexOf(id),1);
    removeTableRow(id);

}
function insertAfter(newNode, referenceNode)
{
    referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);
}

function createTableRow(id)
{
 let table_id=document.getElementById('mytable');   
 let newrow=table_id.insertRow();
 newrow.setAttribute("id","row_"+id);
 let col1=newrow.insertCell(0);
 let col2=newrow.insertCell(1);
 col1.innerHTML=`${id}`;
 col2.innerHTML=`text_${id}`;
}

function removeTableRow(id)
{
  let row=document.getElementById("row_"+id);
  row.parentNode.removeChild(row);       
}
