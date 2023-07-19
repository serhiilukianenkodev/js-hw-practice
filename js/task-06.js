const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (evt) => {
  const isValid =
    Number(evt.currentTarget.dataset.length) === evt.currentTarget.value.length;

  if (isValid) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
