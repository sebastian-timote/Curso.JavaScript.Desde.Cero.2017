class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
    }
    complete(){
        this.isComplete = !this.isComplete;
    }
}
class TaskList {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    addTask(task, element){
        this.tasks.push(task);//agregamos una tarea al array tasks
        this.renderTask(element);//le pasamos element a rendertask que lo agrega a estructura html
    }
    removeTask(i,element){
        this.tasks.splice(i, 1);//borramos una tarea del array tasks .splice(index, numerodelementosaborrar)
        this.renderTask(element);//le pasamos element a rendertask que lo agrega a estructura html

    }
    renderTask(element){
        let tasks = this.tasks.map( task => `
            <li class="task">
                <input type="checkbox" class="task__complete-button">
                <span class="task__name">${task.name}</span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);
        element.innerHTML = tasks.reduce((a,b) => a + b);
    }
}

//trabajar con el DOM
const addTaskElement = document.getElementById('add-task');//input
const TaskContainerElement = document.getElementById('tasks-container');//ul
const inbox = new TaskList('inbox');
//anadir tarea al DOM
function addDOMtask (e, list = inbox){
    //obtener el texto del input
    if(e.key === 'Enter'){
        //crear la tarea instanciando la clase
        let task = new Task(this.value);//envia el valor del input
        //anadir latarea a la lista
        list.addTask(task, TaskContainerElement);
        //borrar texto del input
        this.value ='';
    }
}
addTaskElement.addEventListener('keyup',addDOMtask);//escucha el input

