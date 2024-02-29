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
const passwordMatch = document.querySelector(".password-match");
const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");

// Event listeners for buttons.
signUpBtn.addEventListener("click", signUpActive);
accountBtn.addEventListener("click", matchPassword);
//Event listeners for inputs
password.addEventListener("input", clearPasswordError);
confirmPassword.addEventListener("input", clearPasswordError);

// Activates the sign-up form and adjusts the layout when the 'Start Now' button is clicked.
function signUpActive() {
  signUpBtn.style.display = "none";
  formSection.style.cssText = "width: 70%; opacity: 1;";
  formRow.forEach(item => item.style.opacity = "1");
  welcomeContainer.style.height = "100%";
  welcomeSection.style.width = "30%";
  welcomeMessage.style.cssText = "opacity: 1; margin-top: 20px;";
  welcomeMessage.textContent = "Join the Gestahlian Empire today, and you too can use magic derived from espers!";
  imageCredits.style.cssText = "color: white; border-top: 1px solid white;";
  gesFlag.style.width = "160px";
}

// Validates that the password and confirm password fields match before form submission.
function matchPassword(event) {
  if (password.value === confirmPassword.value) {
    passwordMatch.textContent = "";
    password.classList.remove("error-border");
    confirmPassword.classList.remove("error-border");
  } else {
    passwordMatch.textContent = "Password does not match!";
    password.classList.add("error-border");
    confirmPassword.classList.add("error-border");
    event.preventDefault(); // Prevent form submission if passwords do not match.
  }
}

//Removes error message and border when user clears password fields.
function clearPasswordError() {
  if (password.value === "" || confirmPassword.value === "") {
    passwordMatch.textContent = "";
    password.classList.remove("error-border");
    confirmPassword.classList.remove("error-border");
  }
}

// Applies class to input fields to prevent label overlap.
inputs.forEach(input => {
  input.addEventListener("blur", event => {
    if (event.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});