const button = document.querySelector("button");
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
}

toggleDarkMode(useDark.matches);

button.addEventListener("click", () => {
    if (button.innerHTML === "🌙") {
        button.innerHTML = "☀️";
    } else {
        button.innerHTML = "🌙";
    }
    document.documentElement.classList.toggle("dark-mode");
});