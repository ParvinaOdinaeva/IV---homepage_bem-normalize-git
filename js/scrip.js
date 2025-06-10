{
  let bodybackground = document.querySelector(".bodybackground");
  let bodyContainer = document.querySelector(".bodyContainer");
  let backgroundButtonChange = document.querySelector(".backgroundButtonChange");

  backgroundButtonChange.addEventListener("click", () => {
    bodyContainer.classList.toggle("bodybackground");
  });
}

{
  let questions = document.querySelector(".questions");
  let questionHideButton = document.querySelector(".questionHideButton");
  let word = document.querySelector(".word");

  questionHideButton.addEventListener("click", () => {
    questions.classList.toggle("hide");
    
    word.innerText = questions.classList.contains("hide") ? "Pokaż" : "Ukryj";
  });
}
