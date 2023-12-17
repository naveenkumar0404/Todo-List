const todolist=[
  {name: '', 
     duedate:  ''},
  {name:'',
     duedate:  ''}];
renderTodolist();

function renderTodolist()
{

let todolistHTML='';
for(let i=0;i<todolist.length;i++){
  const todoObject=todolist[i];
  const {name,duedate} =todoObject;
  
  const html=`
  <div>${name}</div>
  <div>${duedate}</div>
  <button
  onclick="
  todolist.splice(${i},1);
  renderTodolist();
  " class="delete-todo-button">Delete</button>
  `
  todolistHTML+=html;
}


document.querySelector('.js-todo-list')
.innerHTML=todolistHTML;
}

function addTodo(){
  const inputElement= document.querySelector('.js-name-input')
  const name= inputElement.value;

  const dateInputElement=document.querySelector('.js-due-date-input');
  const duedate=dateInputElement.value;
  
  todolist.push({
    name,
    duedate
  });
 

  inputElement.value='';
  renderTodolist();
}