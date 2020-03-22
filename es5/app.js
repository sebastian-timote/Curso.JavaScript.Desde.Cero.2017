"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        return "\n            <li class=\"task\">\n                <input type=\"checkbox\" class=\"task__complete-button\">\n                <span class=\"task__name\">".concat(task.name, "</span>\n                <a href=\"#\" class=\"task__remove-button\">X</a>\n            </li>\n        ");
      });
      element.innerHTML = tasks.reduce(function (a, b) {
        return a + b;
      });
    }
  }]);

  return TaskList;
}(); //trabajar con el DOM


var addTaskElement = document.getElementById('add-task'); //input

var TaskContainerElement = document.getElementById('tasks-container'); //ul

var inbox = new TaskList('inbox'); //anadir tarea al DOM

function addDOMtask(e) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

  //obtener el texto del input
  if (e.key === 'Enter') {
    //crear la tarea instanciando la clase
    var task = new Task(this.value); //envia el valor del input
    //anadir latarea a la lista

    list.addTask(task, TaskContainerElement); //borrar texto del input

    this.value = '';
  }
}

addTaskElement.addEventListener('keyup', addDOMtask); //escucha el input