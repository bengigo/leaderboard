import listData from "./placeholderData.js";

let displayList = () => {
    const listContainer = document.querySelector('#list');

    listData.forEach((data) => {
        listContainer.innerHTML += `
        <div class="row">
          <p>${data.name}:${data.score}</p>
        </div>
        `
    })
}

export default displayList;