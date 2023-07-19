const refs = {
  fontSizeCtr: document.querySelector("#font-size-control"),
  output: document.querySelector("#text"),
};

refs.fontSizeCtr.addEventListener("input", (evt) => {
  refs.output.style.fontSize = `${evt.currentTarget.value}px`;
});
