import { DEBUG } from "../main.mjs";

export async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (DEBUG) {
            console.debug(`Fetching Data...`);
            console.debug(data);
        }
        return data;
    } catch (err) {
        console.error("Error fetching first commit:", err);
        return null;
    }
}
