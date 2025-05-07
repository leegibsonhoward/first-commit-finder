import { DEBUG } from "../main.mjs";

export async function findUser(username) {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`User not found: ${username}`);
        } else {
            const userData = await response.json();
            if(DEBUG) {
                console.debug(`Finding User...`);
                console.debug(userData);
            }
            return userData;
        }
    } catch (err) {
        if (DEBUG) {
            console.debug(err);
        }
        return null;
    }
}
