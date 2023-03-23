//import './style.css';
import { dataPost } from './modules/postGet.js';
import { refresh } from './modules/display.js';

const form = document.querySelector('.form');
const error = document.querySelector('.error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    await dataPost(form[0].value, form[1].value);

    form.reset();
  } catch (err) {
    error.textContent = 'Unsubmitted Data!, Please try again';
    throw err;
  }
});

const toDisplay = document.getElementById('score_btn');

toDisplay.addEventListener('click', () => {
  refresh();
});
