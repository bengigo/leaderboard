import './style.css';
import postData from './modules/postData.js';
import getData from './modules/getData.js';
import displayScores from './modules/displayList.js';

const refresh = () => {
  window.location.reload();
  getData();
};

const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', () => {
  window.location.reload();
  refresh();
});

const form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  postData(name, score);
  form.reset();


};

getData();

displayScores();