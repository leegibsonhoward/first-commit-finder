
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('user-form');
  const resultSection = document.getElementById('result');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    resultSection.textContent = `${username}, Searching...`;

  
  });
});