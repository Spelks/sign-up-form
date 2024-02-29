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
const passwordMatch = document.querySelector("[data-form-password-error]");
const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");

// Event listeners for buttons.
signUpBtn.addEventListener("click", signUpActive);
accountBtn.addEventListener("click", verifyPassword);
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
function verifyPassword(event) {
  if (password.value === confirmPassword.value) {
    passwordMatch.textContent = "";
    passwordErrorRemoveBorder()
  } else {
    passwordMatch.textContent = "Password does not match!";
    passwordErrorAddBorder()
    event.preventDefault(); // Prevent form submission if passwords do not match.
  }
  checkPasswordLength(event);
}

//Removes error message and border when user clears password fields.
function clearPasswordError() {
  if (password.value === "" || confirmPassword.value === "") {
    passwordMatch.textContent = "";
    passwordErrorRemoveBorder()
  }
}

//check password length
function checkPasswordLength(event) {
  if (password.value.length < 6 && confirmPassword.value.length < 6) {
    passwordMatch.textContent = "Password must be over 5 characters!";
    passwordErrorAddBorder()
    event.preventDefault();   
  }
}

function passwordErrorAddBorder() {
  password.classList.add("error-border");
  confirmPassword.classList.add("error-border");
}

function passwordErrorRemoveBorder() {
  password.classList.remove("error-border");
  confirmPassword.classList.remove("error-border");
}

// Ensures checkInput function is active if appropriate (including on page load).
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("input").forEach(input => {
    checkInput(input); // Check input on page load
    input.addEventListener("input", () => {
      checkInput(input);
    });
  });
});

// Applies class to input fields to prevent label overlap.
function checkInput(input) {
  if (input.value) {
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
  }
}

