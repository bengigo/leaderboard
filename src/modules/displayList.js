const displayContainer = document.querySelector('#list');
const displayScores = (object) => {
  displayContainer.innerHTML = '';
  const scores = object.result;
  scores.sort((a, b) => b.score - a.score);
  scores.forEach((score) => {
    displayContainer.innerHTML += `
    <div class="row">
      <p>${score.user}: ${score.score}</p>
    </div>
    `;
  });
};

export default displayScores;