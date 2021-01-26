function addItem() {
 
const newText=document.getElementById('newItemText').value;
const newValue=document.getElementById('newItemValue').value;
const divMenu=document.getElementById('menu');
const menuOpt = document.createElement('option');
divMenu.appendChild(menuOpt)
menuOpt.textContent=newText
menuOpt.setAttribute('value',newValue)
document.getElementById('newItemText').value = '';
document.getElementById('newItemValue').value = '';

}
