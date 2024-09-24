const todoList=[];

function deleteTodo(i)
{
    console.log(todoList[i]);
    todoList.splice(i,1);
    renderTodoList();
}

function renderTodoList()
{
    let todoListHtml='';
    for(let i=0;i<todoList.length;i++)
        {
            const todo=todoList[i];
            const html=`
            <p>${todo}
            <button onclick=" deleteTodo(${i}) ">Delete </button></p>
            `;
            todoListHtml+=html;
        }
       // console.log(todoListHtml)
        document.querySelector('.js-todo-list').innerHTML=todoListHtml;
}

function addTodo(){
    const inputElement= document.querySelector('.js-name-input');

   const name=inputElement.value;
   inputElement.value='';

   todoList.push(name);
   console.log(todoList);
    renderTodoList();

}

