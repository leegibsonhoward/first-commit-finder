import { setupThemeSwitcher } from "./modules/theme-switcher.mjs";
import { constructURL } from "./modules/construct-url.mjs";
import { findUser } from "./modules/find-user.mjs";
import { fetchData } from "./modules/fetch-data.mjs";
import { processData } from "./modules/process-data.mjs";
import { updateUI } from "./modules/update-ui.mjs";

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
        if (DEBUG) {
            console.debug(`User Input...`);
            console.debug(username);
        }
        try {
            // search for user before constructing url
            if (!(await findUser(username))) {
                throw new Error(`Github user account doesn't exist.`);
            }
            // construct url
            let url = constructURL(username);

            // fetch data using constructed url
            let fetchedCommit = await fetchData(url);
            if (!await fetchedCommit) {
                throw new Error(`This user doesn’t have any public repositories yet.`);
            }

            // process fetched data
            let firstCommit = processData(fetchedCommit);

            // update user interface with processed data
            updateUI(firstCommit, resultSection);
        } catch (error) {
            resultSection.textContent = error.message;
            return;
        }
    });
});
