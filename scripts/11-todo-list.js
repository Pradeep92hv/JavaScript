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
    for(let i=0;i<todoList.length;i++)
        {
            const todoObject=todoList[i];

            const name=todoObject.name;
            const dueDate=todoObject.dueDate;

            const html=`
            <p>${name} ${dueDate}
            <button onclick=" deleteTodo(${i}) ">Delete </button></p>
            `;
            todoListHtml+=html;
        }
      
        document.querySelector('.js-todo-list').innerHTML=todoListHtml;
}

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

