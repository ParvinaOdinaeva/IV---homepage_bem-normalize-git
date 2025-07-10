{
  const backgroungChange = () => {
    const bodyContainer = document.querySelector(".bodyContainer");
    const bodybackground = document.querySelector(".bodybackground");
    bodyContainer.classList.toggle("bodybackground");
  };

  const init = () => {
    const backgroundButtonChange = document.querySelector(".backgroundButtonChange");
    backgroundButtonChange.addEventListener("click", backgroungChange);
  };
  init();
}

{
  const questinHide = () => {
    const questions = document.querySelector(".questions");
    const word = document.querySelector(".word");
    questions.classList.toggle("hide");
    word.innerText = questions.classList.contains("hide") ? "Pokaż" : "Ukryj";
  };

  const init = () => {
    const questionHideButton = document.querySelector(".questionHideButton");
    questionHideButton.addEventListener("click", questinHide);
  };

  init();
}
