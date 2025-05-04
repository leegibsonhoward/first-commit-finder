import { setupThemeSwitcher } from "./modules/theme-switcher.mjs";
import { constructURL } from './modules/construct-url.mjs';
import { fetchData } from './modules/fetch-data.mjs';
import { processData } from './modules/process-data.mjs';

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
        resultSection.textContent = "Searching...";

         try {
                // construct url
                let url = constructURL(username);
                
                // fetch data
                let fetchedCommit = await fetchData(url);
                
                processData(fetchedCommit);
              
            } catch (error) {
              resultSection.textContent = `Error: ${error.message}`;
            }
    });
});
