const form = document.querySelector(".hero__form");
const inputForm = document.querySelector(".form__input");
const submitBtn = document.querySelector(".form__submit");

const deleteErrors = () => {
  const spanErrors = document.querySelectorAll(".form__error");
  spanErrors.forEach((item) => item.remove());

  const inputErrors = document.querySelectorAll(".form__input--error");
  inputErrors.forEach((item) => item.classList.remove("form__input--error"));
  console.log(inputErrors);
};

const congratsMessage = (message) => {
  const span = document.createElement("span");
  span.classList.add("congrats__form");
  span.innerHTML = message;
  form.insertAdjacentElement("afterend", span);
  form.remove();
};

const inputError = (input, message) => {
  const span = document.createElement("span");
  span.classList.add("form__error");
  span.innerHTML = message;
  form.insertAdjacentElement("afterend", span);

  input.classList.add("form__input--error");
};

const validateForm = (e) => {
  e.preventDefault();
  deleteErrors();

  const email = inputForm.value;

  if (email == "") {
    inputError(inputForm, "Please provide an email");
    return;
  }

  const expression =
    /([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|([\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])\.([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/i;
  const emailCorrect = expression.test(String(inputForm.value).toLowerCase());

  if (inputForm.value != "" && !emailCorrect) {
    inputError(inputForm, "Looks like this is not an email");
    return;
  }

  congratsMessage("Thanks, please check you email");
};

submitBtn.addEventListener("click", validateForm);
inputForm.addEventListener('input', deleteErrors);