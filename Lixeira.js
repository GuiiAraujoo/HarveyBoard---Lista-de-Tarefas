const harveyMessage = document.getElementById("harveyMessage");
const deletedList = document.getElementById("deletedList");
const menuBtn = document.getElementById("menuBtn");

const userName = localStorage.getItem("harveyUser") || "amigo";
harveyMessage.textContent = `Beleza ${userName}, aqui estão suas tarefas apagadas:`;

// Recuperar listas
let deletedTasks = JSON.parse(localStorage.getItem("harveyDeleted")) || [];
let tasks = JSON.parse(localStorage.getItem("harveyTasks")) || [];

function renderDeleted() {
  deletedList.innerHTML = "";
  if (deletedTasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma tarefa apagada ainda.";
    deletedList.appendChild(li);
  } else {
    deletedTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const restoreBtn = document.createElement("button");
      restoreBtn.textContent = "↩ Restaurar";
      restoreBtn.classList.add("restore-btn");
      restoreBtn.onclick = () => {
        tasks.push(task);
        localStorage.setItem("harveyTasks", JSON.stringify(tasks));
        deletedTasks.splice(index, 1);
        localStorage.setItem("harveyDeleted", JSON.stringify(deletedTasks));
        renderDeleted();
      };

      li.appendChild(restoreBtn);
      deletedList.appendChild(li);
    });
  }
}

renderDeleted();

function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  menuBtn.style.display = "none";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  menuBtn.style.display = "inline";
}
function renderDeleted() {
  deletedList.innerHTML = "";
  if (deletedTasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhuma tarefa apagada ainda.";
    deletedList.appendChild(li);
  } else {
    deletedTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      // Botão Restaurar
      const restoreBtn = document.createElement("button");
      restoreBtn.textContent = "↩ Restaurar";
      restoreBtn.classList.add("restore-btn");
      restoreBtn.onclick = () => {
        tasks.push(task);
        localStorage.setItem("harveyTasks", JSON.stringify(tasks));
        deletedTasks.splice(index, 1);
        localStorage.setItem("harveyDeleted", JSON.stringify(deletedTasks));
        renderDeleted();
      };

      // Botão Apagar Permanente
      const permanentBtn = document.createElement("button");
      permanentBtn.textContent = "🗑 Apagar Permanente";
      permanentBtn.classList.add("permanent-btn");
      permanentBtn.onclick = () => {
        deletedTasks.splice(index, 1);
        localStorage.setItem("harveyDeleted", JSON.stringify(deletedTasks));
        renderDeleted();
      };

      li.appendChild(restoreBtn);
      li.appendChild(permanentBtn);
      deletedList.appendChild(li);
    });
  }
}
