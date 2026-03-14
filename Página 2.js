const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const harveyMessage = document.getElementById("harveyMessage");

// Recuperar nome do usuário salvo na Página 1
const userName = localStorage.getItem("harveyUser") || "amigo";
harveyMessage.textContent = `Beleza ${userName}, então qual tarefa vamos criar hoje?`;

// Função para adicionar tarefa
function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    // Guardar tarefa no localStorage
    let tasks = JSON.parse(localStorage.getItem("harveyTasks")) || [];
    tasks.push(task);
    localStorage.setItem("harveyTasks", JSON.stringify(tasks));

    // Ir para a Página 3
    window.location.href = "Página 3.html";
  }
}

// Clique no botão
addTaskBtn.addEventListener("click", addTask);

// Enter também funciona
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
