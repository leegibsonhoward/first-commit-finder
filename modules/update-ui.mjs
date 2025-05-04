import { DEBUG } from "../main.mjs";

export function updateUI(commit, resultSection) {
    if (DEBUG) {
        console.debug(`Updating UI...`);
    }

    resultSection.innerHTML = `
    <h2>First Commit Info</h2>
    <img src="${commit.avatar}" alt="" width="64" height="64">
    <p>${commit.name}</p>
    <p>@${commit.username}</p>
    <p><strong>Repo:</strong> ${commit.repo}</p>
    <p><strong>Date:</strong> ${new Date(commit.date).toLocaleString()}</p>
    <p><strong>Commit: </strong><a href="${commit.url}" target="_blank">${
        commit.message
    }</a></p>
  `;

    if (DEBUG) {
        console.debug(resultSection.innerHTML);
        console.debug(`Done!`);
    }
}
