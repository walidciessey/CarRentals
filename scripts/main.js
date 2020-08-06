const todo_content = document.getElementById("todos-content");







let Todos = [
    {
        id :1, 
        tittle : "Work on assignment",
        isComplete: true
    },

    {
        id :2, 
        tittle : "Learn react native",
        isComplete: true
    },
    {
        id :3, 
        tittle : "Complete a project on regular",
        isComplete: false
    },
    {
        id :4, 
        tittle : "Deploy django app to AWS elastic beanstalk",
        isComplete: false
    }
]

onComplete = (e) =>{}
onDelete = (e) =>{}
    Todos.map(todo =>{
        console.log(todo);
    
        todo_content.innerHTML += `
        <div class = "row todo-item">
        <div class = "col-2">
        <input type="checkbox" onclick = "${onComplete}">
        </div>
    
        <div class="col-6">
        <p> ${todo.tittle} </p>
        </div>
    
        <div class = "col-2" > 
        <button class = "btn btn-danger" onclick = "${onDelete}">X</button>
        </div>
    
    
    
        </div>
    
        
        `
    
        
    });
    



