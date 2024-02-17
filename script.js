const signUpBtn = document.querySelector("[data-start-button]");
const formSection = document.querySelector("[data-form]");
const welcomeSection = document.querySelector("[data-welcome]");
const welcomeContainer = document.querySelector(".welcome-container");
const welcomeMessage = document.querySelector("[data-welcome-message]");

signUpBtn.addEventListener('click', ()=> {
    signUpBtn.style.display = "none";
    if (formSection.style.width === '0px' || formSection.style.width === '') {
      formSection.style.width = '70%';
      formSection.style.opacity = '1';
      welcomeContainer.style.height = "358px";
      welcomeSection.style.width = '30%';
      welcomeMessage.style.opacity = "1";
      welcomeMessage.textContent = "Join the Gestahlian Empire today, and you too can use magic derived from espers!";
    }
  });
  