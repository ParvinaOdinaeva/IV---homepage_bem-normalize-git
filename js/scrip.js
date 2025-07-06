{
  let bodybackground = document.querySelector(".bodybackground");
  let bodyContainer = document.querySelector(".bodyContainer");
  let backgroundButtonChange = document.querySelector(".backgroundButtonChange");

  const backgroungChange = () => {
    bodyContainer.classList.toggle("bodybackground");
  }

    backgroundButtonChange.addEventListener("click", backgroungChange);
}

{
  let questions = document.querySelector(".questions");
  let questionHideButton = document.querySelector(".questionHideButton");
  let word = document.querySelector(".word");

  const questinHide =  () => {
    questions.classList.toggle("hide");
    
    word.innerText = questions.classList.contains("hide") ? "Pokaż" : "Ukryj";
  }
  
  questionHideButton.addEventListener("click", questinHide);
}
