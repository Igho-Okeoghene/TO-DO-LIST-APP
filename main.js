//onload display data in localStorage
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: []
}
checkTodo()

//to add input using add button, add button if the user clicked the add button or pressed Enter Key.
document.getElementById("addButton").addEventListener("click", addInput);
window.addEventListener('keydown',(e) => {
    if(e.which == 13 || e.keycode == 13){
        addInput()
    }
})
//add the value of the input in the array and in to-do list
function addInput(){
    var value = document.getElementById("input").value;
    
    if(value) {
        addItem(value);
        document.getElementById("input").value = "";
        data.todo.push(value);
        dataUpdate();
    }
};
//
function checkTodo(){
    if(!data.todo.length) return;

    for(var i = 0; i < data.todo.length; i++){
        var value = data.todo[i];
        addItem(value);
    }
}
//update local storage using JSON.stringify
function dataUpdate() {
localStorage.setItem('todoList', JSON.stringify(data))
}

//remove the input and the container element
function removeInput() {
var item = this.parentNode.parentNode;
var parent = item.parentNode;
parent.removeChild(item);
data.todo.splice(data.todo.indexOf(item),1);
dataUpdate();
}

//add the container elements when a user makes an input
function addItem(text){
    var list = document.getElementById('list');

    var li = document.createElement('li');

    var dValue = document.createElement('input')
    dValue.value = text;
    dValue.disabled = true;
  
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = `<i class="fa fa-pencil-square" aria-hidden="true"></i>`;

    edit.addEventListener('click', () => this.edit(dValue));

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true">`;


    //to make the remove button functional
    remove.addEventListener('click', removeInput);

    //append all elements to the html
    buttons.appendChild(edit);
    buttons.appendChild(remove);
    li.appendChild(buttons);
    li.appendChild(dValue);
    //adds an amazing feature of adding the elements above each other and not below.
    list.insertBefore(li, list.childNodes[0]);
}
function dataReplace() {
    localStorage.removeItem('todoList', JSON.stringify(data))
    }
//to edit your input in case of a mistake 
function edit(dValue) {
    let p = prompt("Enter Your Edit Here");
    dValue.value = p;
}
