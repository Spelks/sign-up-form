const signUpBtn = document.querySelector("[data-start-button]");
const formSection = document.querySelector("[data-form]");
const welcomeSection = document.querySelector("[data-welcome]");
const welcomeContainer = document.querySelector(".welcome-container");
const welcomeMessage = document.querySelector("[data-welcome-message]");
const formRow = document.querySelectorAll(".form-row");
const imageCredits = document.querySelector(".image-credits");
const gesFlag = document.querySelector(".ges-flag");

const signUpForm = document.getElementById("sign-up-form");
const accountBtn = document.getElementById("create-account");
const passwordMtach = document.querySelector(".password-match");

signUpBtn.addEventListener("click", signUpActive);
accountBtn.addEventListener("click", matchPassword);

function signUpActive() {
  signUpBtn.style.display = "none";
  formSection.style.cssText = "width: 70%; opacity: 1;";
  formRow.forEach((item) => item.style.opacity = "1");
  welcomeContainer.style.height = "100%";
  welcomeSection.style.width = "30%";
  welcomeMessage.style.cssText = "opacity: 1; margin-top: 20px;";
  welcomeMessage.textContent = "Join the Gestahlian Empire today, and you too can use magic derived from espers!";
  imageCredits.style.cssText = "color: white; border-top: 1px solid white;";
  gesFlag.style.width = "160px";
}

function matchPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("cpassword").value;
  if(password === confirmPassword) {
    passwordMtach.textContent = "";
    return
  }
  passwordMtach.textContent = "Password does not match!";
  event.preventDefault();
}

confirmPassword.classList.add("invalid");


  