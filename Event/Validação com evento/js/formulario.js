const inputTask = document.getElementById("txtTask");
const inputCheck = document.getElementById("inputCheck");
const textArea = document.querySelector("#txtDescription");
const counter = document.querySelector("#counter span");
const maxValue = document.querySelector("#txtDescription").maxLength;
const container = document.querySelector(".formCadastro__container");
const sendButton = document.getElementById("btn");
const feedbackMessage = document.getElementById("feedbackMessage");
const buttonFeedback = document.querySelector("#feedbackMessage button");

//Validação
const checkValidation = (e) => {
  if (inputTask.value === "" || textArea.value === "") {
    feedbackMessage.classList.add("show");
    e.preventDefault();
    return null;
  }
};

//Counter text area
const updateCounter = (e) => {
  const value = e.target.value.length;
  const remaining = maxValue - value;
  counter.innerHTML = remaining;
};

//Check Terms
const checkTerms = () => {
  const isCheck = inputCheck.checked;
  sendButton.disabled = isCheck ? false : true;
};

sendButton.addEventListener("click", (e) => {
  checkValidation(e);
});

inputCheck.addEventListener("click", () => {
  checkTerms();
});

buttonFeedback.addEventListener("click", () => {
  feedbackMessage.classList.remove("show");
  inputTask.focus();
});

textArea.addEventListener("input", (e) => {
  updateCounter(e);
});
