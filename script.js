const signUpBtn = document.querySelector(".sign-up-btn");
const formSection = document.querySelector(".form-section");

signUpBtn.addEventListener("click", ()=> {
    formSection.classList.remove("hide-form-section");
    signUpBtn.style.display="none";
})