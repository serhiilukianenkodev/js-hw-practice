const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const currentColorInfo = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBntClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBntClick() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  currentColorInfo.textContent = randomColor;
}
