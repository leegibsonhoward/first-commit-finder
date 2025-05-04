import { setupThemeSwitcher } from "./modules/theme-switcher.mjs";
import { constructURL } from './modules/construct-url.mjs';

// Setup debug flag
let DEBUG = true;
export { DEBUG };

document.addEventListener("DOMContentLoaded", () => {
    // theme switcher button toggle 
    setupThemeSwitcher();

    const form = document.getElementById("user-form");
    const resultSection = document.getElementById("result");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        resultSection.textContent = `${username}, Searching...`;

         try {
                // construct url
                constructURL(username);
                
              
            } catch (error) {
              resultSection.textContent = `Error: ${error.message}`;
            }
    });
});
