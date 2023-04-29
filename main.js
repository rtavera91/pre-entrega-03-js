//MODO DARK
const botonDark = document.getElementById("botonFondo");
botonDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modo", "dark");
  } else {
    localStorage.setItem("modo", "light");
  }
});

//recuperamos el modo del localStorage
const modo = localStorage.getItem("modo");
if (modo === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classlist.remove("dark");
}

// Clase constructora para las tareas
class Task {
  constructor(task, priority, dueDate) {
    this.task = task;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

const form = document.getElementById('form');
const taskList = document.getElementById('taskList');
const tasks = [];

// Función para agregar tarea
function addTask(e) {
  e.preventDefault();
  const taskInput = document.getElementById('task');
  const priorityInput = document.getElementById('priority');
  const dueDateInput = document.getElementById('dueDate');
  const task = new Task(taskInput.value, priorityInput.value, dueDateInput.value);
  tasks.push(task);
  displayTasks();
  form.reset();
}

// Función para mostrar tareas en la página
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.task} - Prioridad: ${task.priority} - Deadline: ${task.dueDate}</span>
      <button data-index="${index}">Eliminar</button>
    `;
    taskList.appendChild(li);
  });
}

// Función para eliminar tarea
function deleteTask(e) {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    displayTasks();
  }
}

form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
