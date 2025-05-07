import { DEBUG } from "../main.mjs";

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

// On page load, apply saved theme or fallback to system preference
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (DEBUG) {
        console.debug(`Theme: ${newTheme}`);
    }
}

export function setupThemeSwitcher() {
    // load saved theme from local storage
    loadTheme();

    // wait on button click.
    const toggleBtn = document.querySelector(".theme-toggle");
    toggleBtn.addEventListener("click", toggleTheme);
}
