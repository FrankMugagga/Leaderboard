import { getData } from './postGet.js';

const error = document.querySelector('.error');

export const display = (data) => {
  const results = document.getElementById('results');
  results.innerHTML = '';

  data.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.textContent = `${user} : ${score}`;
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