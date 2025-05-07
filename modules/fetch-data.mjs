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
        
        if(data.items.length === 0) {
            throw new Error("Data not found!");
        }

        return data;
    } catch (err) {
        if (DEBUG) {
            console.debug(err);            
        }
        return null;
    }
}
