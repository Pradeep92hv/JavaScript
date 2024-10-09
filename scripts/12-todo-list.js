const todoList=[{
    name: 'a',
    dueDate: '2022-12-12'
}, {
    name: 'b',
    dueDate: '2023-12-12'
}
];

function deleteTodo(i)
{
  
    todoList.splice(i,1);
    renderTodoList();
    
}



function renderTodoList()
{
    let todoListHtml='';

    todoList.forEach((todoObject,index) => {
       
            const name=todoObject.name;
            const dueDate=todoObject.dueDate;

            const html=`
           <div class="todo-item">
                        <div>${name}</div>
                        <div>${dueDate}</div>
                        <button  class="delete-button js-delete-todo-button" >Delete</button>
                    </div>
            `;
            todoListHtml+=html;
        }
    )
      
      
        document.querySelector('.js-todo-list').innerHTML=todoListHtml;
      
        console.log(document.querySelectorAll('.js-delete-todo-button'))

        document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,index)=>{
          deleteButton.addEventListener('click',() => {
            todoList.splice(i,1);
            renderTodoList();
          })
        })
}

document.querySelector('.js-add-todo-button')
.addEventListener('click',()=> {
    addTodo();
})

function addTodo(){
    const inputElement= document.querySelector('.js-name-input');

   const name=inputElement.value;
   inputElement.value='';

   const dateInpute=document.querySelector('.js-date-input');
   const duedate=dateInpute.value;
   
   todoList.push({
    name:name,
    dueDate :duedate
   });
  
    renderTodoList();

}

