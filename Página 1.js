const greeting = document.getElementById("greeting");
const continueBtn = document.getElementById("continueBtn");
const usernameInput = document.getElementById("username");

// Saudação dinâmica
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Fala ae, Bom dia! Sou o Harvey, seu assistente!";
} else if (hour < 18) {
  greeting.textContent = "Fala ae, Boa Tarde! Sou o Harvey, seu assistente!";
} else {
  greeting.textContent = "Fala ae, Boa Noite! Sou o Harvey, seu assistente!";
}

// Botão continuar
continueBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    localStorage.setItem("harveyUser", name);
    window.location.href = "Página 2.html";
  }
});

// Enter também funciona
usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    continueBtn.click();
  }
});
