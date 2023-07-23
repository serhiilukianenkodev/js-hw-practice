const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (!emailValue || !passwordValue) {
    alert("Fill all fields, please");
    return;
  }

  const formData = { email: emailValue, password: passwordValue };
  evt.currentTarget.reset();

  console.log("formData", formData);
}
