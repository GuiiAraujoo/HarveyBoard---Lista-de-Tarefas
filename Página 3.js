const harveyMessage = document.getElementById("harveyMessage");
const taskList = document.getElementById("taskList");
const menuBtn = document.getElementById("menuBtn");
const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskInput = document.getElementById("newTaskInput");

const userName = localStorage.getItem("harveyUser") || "amigo";
harveyMessage.textContent = `Beleza ${userName}, aqui estão suas tarefas:`;

// Recuperar listas
let tasks = JSON.parse(localStorage.getItem("harveyTasks")) || [];
let completedTasks = JSON.parse(localStorage.getItem("harveyCompleted")) || [];
let deletedTasks = JSON.parse(localStorage.getItem("harveyDeleted")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.classList.add("done");
    doneBtn.onclick = () => {
      completedTasks.push(task);
      localStorage.setItem("harveyCompleted", JSON.stringify(completedTasks));
      tasks.splice(index, 1);
      localStorage.setItem("harveyTasks", JSON.stringify(tasks));
      renderTasks(); // apenas atualiza a lista, sem redirecionar
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.classList.add("edit");
    editBtn.onclick = () => {
      const newTask = prompt("Editar tarefa:", task);
      if (newTask) {
        tasks[index] = newTask;
        localStorage.setItem("harveyTasks", JSON.stringify(tasks));
        renderTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => {
      deletedTasks.push(task);
      localStorage.setItem("harveyDeleted", JSON.stringify(deletedTasks));
      tasks.splice(index, 1);
      localStorage.setItem("harveyTasks", JSON.stringify(tasks));
      renderTasks(); // apenas atualiza a lista, sem redirecionar
    };

    actions.appendChild(doneBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

renderTasks();

// Botão Nova Tarefa
newTaskBtn.onclick = () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    tasks.push(newTask);
    localStorage.setItem("harveyTasks", JSON.stringify(tasks));
    newTaskInput.value = "";
    renderTasks();
  } else {
    alert("Digite uma tarefa antes de adicionar!");
  }
};

function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  menuBtn.style.display = "none";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  menuBtn.style.display = "inline";
}
