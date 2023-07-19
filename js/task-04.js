const refs = {
  counter: document.querySelector("#counter"),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});
refs.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

function updateValue() {
  refs.value.textContent = counterValue;
}
