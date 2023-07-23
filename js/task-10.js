const refs = {
  inputBloksAmount: document.querySelector("#controls > input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let bloksAmount = 0;

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const createAmount = Number(refs.inputBloksAmount.value);
  createBoxes(createAmount);
}

function onDestroyBtnClick() {
  bloksAmount = 0;
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  let boxesMarkup = "";

  for (let index = 0; index < amount; index++) {
    const element = `<div style="
    width: ${30 + bloksAmount * 10 + index * 10}px;
    height: ${30 + bloksAmount * 10 + index * 10}px;
    background-color: ${getRandomHexColor()};
    "></div>`;

    boxesMarkup += element;
  }
  bloksAmount += amount;

  refs.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
