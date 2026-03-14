const harveyMessage = document.getElementById("harveyMessage");
const completedList = document.getElementById("completedList");
const menuBtn = document.getElementById("menuBtn");

const userName = localStorage.getItem("harveyUser") || "amigo";
harveyMessage.textContent = `Beleza ${userName}, aqui estão suas tarefas concluídas:`;

// Recuperar listas
let completedTasks = JSON.parse(localStorage.getItem("harveyCompleted")) || [];
let tasks = JSON.parse(localStorage.getItem("harveyTasks")) || [];

function renderCompleted() {
  completedList.innerHTML = "";
  if (completedTasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma tarefa concluída ainda.";
    completedList.appendChild(li);
  } else {
    completedTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const restoreBtn = document.createElement("button");
      restoreBtn.textContent = "↩ Restaurar";
      restoreBtn.classList.add("restore-btn");
      restoreBtn.onclick = () => {
        tasks.push(task);
        localStorage.setItem("harveyTasks", JSON.stringify(tasks));
        completedTasks.splice(index, 1);
        localStorage.setItem("harveyCompleted", JSON.stringify(completedTasks));
        renderCompleted();
      };

      li.appendChild(restoreBtn);
      completedList.appendChild(li);
    });
  }
}

renderCompleted();

function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  menuBtn.style.display = "none";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  menuBtn.style.display = "inline";
}
