const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // altera o tema
  rootHtml.setAttribute("data-theme", newTheme);

  // troca o ícone
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");

  // salva no localStorage
  localStorage.setItem("theme", newTheme);
}

// quando carregar a página, verifica se tem tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; 
  rootHtml.setAttribute("data-theme", savedTheme);

  // ajusta o ícone de acordo
  if (savedTheme === "dark") {
    toggleTheme.classList.add("bi-sun");
    toggleTheme.classList.remove("bi-moon-stars");
  } else {
    toggleTheme.classList.add("bi-moon-stars");
    toggleTheme.classList.remove("bi-sun");
  }
});

toggleTheme.addEventListener("click", changeTheme);
