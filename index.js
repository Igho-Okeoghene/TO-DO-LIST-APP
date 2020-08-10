//declare the array
let arr = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')): [];
//push the objects in the array
function addEntry(todo){
    let id = arr.length;
    todo = document.getElementById('input').value;
    
    if(todo !== ''){
        arr.push({id, todo});
        createHTML(todo);
        document.getElementById("input").value = "";
        
    }
    localStorage.setItem('todolist', JSON.stringify(arr));
    console.log(arr);
};

//when the add button is clicked
document.getElementById("addButton").addEventListener("click", addEntry);
window.addEventListener('keydown',(e) => {
    if(e.which == 13 || e.keycode == 13){
        addEntry();
    }
})

//function to remove a todo
function removeTodo(key) {
     arr = arr.findIndex(item => item.id !== Number(key));
    console.log(arr);
}

//create elements in the html
function createHTML(todo){
    var list = document.getElementById('list');

    var li = document.createElement('li');

    var dValue = document.createElement('input');
    dValue.value = todo;
    dValue.disabled = true;
  
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = `<i class="fa fa-pencil-square" aria-hidden="true"></i>`;

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true">`;

    //eventListener to remove a todo
    remove.addEventListener('click', removeTodo);

    //append all elements to the html
    buttons.appendChild(edit);
    buttons.appendChild(remove);
    li.appendChild(buttons);
    li.appendChild(dValue);
    //adds an amazing feature of adding the elements above each other and not below.
    list.insertBefore(li, list.childNodes[0]);
}

