const todos=[];

const todolist = document.querySelector('todolist')
const add = document.querySelector('add-TODO')
const input = document.querySelector('form-input')
const formMessage = document.querySelector('alert')
const filterbtn = document.querySelector('filter_container')
const prioritySelect = document.querySelector('#priority_select')

 let count = 0;

 function resetForm() {
    input.value = "";
    formMessage.innerHTML = "";
    
 }


 function addTodo(e){
    e.preventDefault();
    if( input.value = ""){
        formMessage.innerHTML="Add todo"
        setTimeout(()=> formMessage.innerText="",1000)
    }
 }

add.addEventListener('click',addTodo)




