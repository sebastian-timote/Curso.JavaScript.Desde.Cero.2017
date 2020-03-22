"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//programa de una lista de tareas
//funcional
var Task = /*#__PURE__*/function () {
  function Task(name) {
    _classCallCheck(this, Task);

    this.name = name;
    this.isComplete = false;
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.isComplete = !this.isComplete;
    }
  }]);

  return Task;
}();

var TaskList = /*#__PURE__*/function () {
  function TaskList(name) {
    _classCallCheck(this, TaskList);

    this.name = name;
    this.tasks = [];
  }

  _createClass(TaskList, [{
    key: "addTask",
    value: function addTask(task, element) {
      this.tasks.push(task); //agregamos una tarea al array tasks

      this.renderTask(element); //le pasamos element a rendertask que lo agrega a estructura html
    }
  }, {
    key: "removeTask",
    value: function removeTask(i, element) {
      this.tasks.splice(i, 1); //borramos una tarea del array tasks .splice(index, numerodelementosaborrar)

      this.renderTask(element); //le pasamos element a rendertask que lo agrega a estructura html
    }
  }, {
    key: "renderTask",
    value: function renderTask(element) {
      var tasks = this.tasks.map(function (task) {
        return "\n            <li class=\"task ".concat(task.isComplete ? 'complete' : '', "\">\n                <input type=\"checkbox\" \n                       class=\"task__complete-button\"\n                       ").concat(task.isComplete ? 'checked' : '', "\n                       >\n                <span class=\"task__name\">").concat(task.name, "</span>\n                <a href=\"#\" class=\"task__remove-button\">X</a>\n            </li>\n        ");
      });
      element.innerHTML = tasks.reduce(function (a, b) {
        return a + b;
      }, ''); //el '' es para cuando borremos no nos quede el array vacio y no produzca error
    }
  }]);

  return TaskList;
}(); //trabajar con el DOM


var addTaskElement = document.getElementById('add-task'); //input

var taskContainerElement = document.getElementById('tasks-container'); //ul

var inbox = new TaskList('inbox'); //anadir tarea al DOM

function addDOMtask(e) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

  //obtener el texto del input
  if (e.key === 'Enter') {
    //crear la tarea instanciando la clase
    var task = new Task(this.value); //envia el valor del input
    //anadir latarea a la lista

    list.addTask(task, taskContainerElement); //borrar texto del input

    this.value = '';
  }
}

addTaskElement.addEventListener('keyup', addDOMtask); //escucha el input
//obtener el indice de la tarea actual

function getTaskIndex(e) {
  var taskItem = e.target.parentElement; //conseguimos lu

  var tasksItems = _toConsumableArray(taskContainerElement.querySelectorAll('li')); //convretidmos a array con ...


  return tasksItems.indexOf(taskItem); //obtenemos index
} //eliminar tarea desde el DOM


function removeDomTask(e) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

  //detectamos que se hizo click en el enlace
  if (e.target.tagName === "A") {
    //remover tarea de la lista se necesita el indice
    list.removeTask(getTaskIndex(e), taskContainerElement);
  }
}

taskContainerElement.addEventListener('click', removeDomTask); //escucha el clic de la X

function completeDOMtask(e) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

  //detectamos que se hizo click en el input checked
  if (e.target.tagName === 'INPUT') {
    //completar  la tarea de la lista (se necesita el indice)
    list.tasks[getTaskIndex(e)].complete(); //llamamos el atributo array tasks de TaskList y completamos la tarea
    //parentelement = taskContainerElement que es el lu
    //classList = es una lista de todas las clases del elemento
    //toggle() =anade o quita una clase.

    e.target.parentElement.classList.toggle('complete'); //para ver el cambio en el dom modificamos el nombre dela clase que este checked

    console.table(list.tasks); //imprimimos una tabla en consola
  }
}

taskContainerElement.addEventListener('click', completeDOMtask); //escucha el input