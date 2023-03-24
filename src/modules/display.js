import { getData } from './postGet.js';

const error = document.querySelector('.error');

export const display = (data) => {
  const results = document.getElementById('results');
  results.innerHTML = '';

  data = data.sort((a, b) => a.score - b.score);

  data.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.innerHTML = `<div id="user">${user} </div>: <div id="score">${score}</div>`;
    results.appendChild(li);
  });
};

export const refresh = async () => {
  try {
    const dataDisp = await getData();
    display(dataDisp);
  } catch (err) {
    error.textContent = 'Unsubmitted Data!, Please try again';
    throw err;
  }
};