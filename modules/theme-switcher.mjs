import { DEBUG } from "../main.mjs";

export function setupThemeSwitcher() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        const html = document.documentElement;
        const current = html.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        html.setAttribute("data-theme", next);

        if (DEBUG) {
            console.debug(`Theme: ${next}`);
        }
    });
}
