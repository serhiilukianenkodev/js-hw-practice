const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (evt) => {
  if (!evt.currentTarget.value) {
    refs.output.textContent = "Anonymous";
    return;
  }
  refs.output.textContent = evt.currentTarget.value;
});
