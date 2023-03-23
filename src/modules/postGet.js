const error = document.querySelector('.error');

export const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zksMXAf6kZYPdjevcImM/scores/';

export const dataPost = async (user, score) => {
  try {
    const sentData = await fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user, score }),
    });

    const data = await sentData.json();
    return data.result;
  } catch (err) {
    error.textContent = 'Unsubmitted Data!, Please try again';
    throw err;
  }
};

export const getData = async () => {
  try {
    const dataGot = await fetch(api);
    const data = await dataGot.json();
    return data.result;
  } catch (err) {
    error.textContent = 'Unsubmitted Data!, Please try again';
    throw err;
  }
};