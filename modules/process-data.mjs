import { DEBUG } from "../main.mjs";

export function processData(data) {
    // first item in array is users first commit
    const firstCommit = data.items[0];
    if (DEBUG) {
        console.debug(`Processing Data...`);        
        console.debug(firstCommit);        
    }

    return {
        repo: firstCommit.repository.name,
        avatar: firstCommit.author.avatar_url,
        name: firstCommit.commit.author.name,
        username: firstCommit.author.login,
        date: firstCommit.commit.author.date,
        message: firstCommit.commit.message,
        sha: firstCommit.sha,
        url: firstCommit.html_url,
    };
}
