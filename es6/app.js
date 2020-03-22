//programa de una lista de tareas
//funcional
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
            <li class="task ${task.isComplete ? 'complete' : ''}">
                <input type="checkbox" 
                       class="task__complete-button"
                       ${task.isComplete ? 'checked' : ''}
                       >
                <span class="task__name">${task.name}</span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);
        element.innerHTML = tasks.reduce((a,b) => a + b, '');//el '' es para cuando borremos no nos quede el array vacio y no produzca error
    }
}

//trabajar con el DOM
const addTaskElement = document.getElementById('add-task');//input
const taskContainerElement = document.getElementById('tasks-container');//ul
const inbox = new TaskList('inbox');
//anadir tarea al DOM
function addDOMtask (e, list = inbox){
    //obtener el texto del input
    if(e.key === 'Enter'){
        //crear la tarea instanciando la clase
        let task = new Task(this.value);//envia el valor del input
        //anadir latarea a la lista
        list.addTask(task, taskContainerElement);
        //borrar texto del input
        this.value ='';
    }
}
addTaskElement.addEventListener('keyup',addDOMtask);//escucha el input

//obtener el indice de la tarea actual
function getTaskIndex(e) {
    let taskItem = e.target.parentElement;//conseguimos lu
    let tasksItems = [...taskContainerElement.querySelectorAll('li')];//convretidmos a array con ...
    return tasksItems.indexOf(taskItem);//obtenemos index
}
//eliminar tarea desde el DOM
function removeDomTask(e, list = inbox) {
    //detectamos que se hizo click en el enlace
    if (e.target.tagName === "A"){

        //remover tarea de la lista se necesita el indice
        list.removeTask(getTaskIndex(e), taskContainerElement);
    }
}
taskContainerElement.addEventListener('click',removeDomTask);//escucha el clic de la X

function completeDOMtask(e, list = inbox) {
    //detectamos que se hizo click en el input checked
    if (e.target.tagName === 'INPUT'){
        //completar  la tarea de la lista (se necesita el indice)
        list.tasks[getTaskIndex(e)].complete();//llamamos el atributo array tasks de TaskList y completamos la tarea
        //parentelement = taskContainerElement que es el lu
        //classList = es una lista de todas las clases del elemento
        //toggle() =anade o quita una clase.
        e.target.parentElement.classList.toggle('complete');//para ver el cambio en el dom modificamos el nombre dela clase que este checked
        console.table(list.tasks);//imprimimos una tabla en consola
    }
}
taskContainerElement.addEventListener('click',completeDOMtask);//escucha el input

