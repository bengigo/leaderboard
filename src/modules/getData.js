import displayScores from './displayList.js';

const getData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BHYQVyVnvpPxEW9OxRy4/scores',
  )
    .then((response) => response.json())
    .then((json) => displayScores(json));
};

export default getData;