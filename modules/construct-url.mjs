import { DEBUG } from "../main.mjs";

export function constructURL(username) {
    // url tokens
    const BASE = `https://api.github.com/search/commits`;
    const AUTHOR = `?q=author:${username}`;
    const SORT_ORDER = `&order=asc&sort=committer-date&per_page=1`;

    // construct url
    const url = BASE + AUTHOR + SORT_ORDER;
    if (DEBUG) {
        console.debug(`Constructing URL...`);
        console.debug(url);        
    }
    return url;
} 