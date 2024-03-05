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
const passwordError = document.querySelector("[data-form-password-error]");
const errorMessage = document.querySelector("[data-form-error-message]");
const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");

// Elements for toggling the visibility of passwords
const passwordReveal = document.querySelector("[data-password-reveal]");
const confirmPasswordReveal = document.querySelector("[data-confirm-password-reveal]");
const openedEye = document.querySelector(".opened-eye");
const closedEye = document.querySelector(".closed-eye");
const openedEyeConfirm = document.querySelector(".opened-eye-confirm");
const closedEyeConfirm = document.querySelector(".closed-eye-confirm");

// Toggle visibility of password on click
passwordReveal.addEventListener("click", ()=> {
  revealPassword(password);
  openedEye.classList.toggle("closed-eye");
  closedEye.classList.toggle("closed-eye");
});
confirmPasswordReveal.addEventListener("click", ()=> {
  revealPassword(confirmPassword);
  openedEyeConfirm.classList.toggle("closed-eye-confirm");
  closedEyeConfirm.classList.toggle("closed-eye-confirm");
});

// Function to toggle password visibility
function revealPassword(pass) {
  if(pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

// Event listeners for buttons.
signUpBtn.addEventListener("click", signUpActive);
accountBtn.addEventListener("click", verifyForm);
//Event listeners for inputs
password.addEventListener("input", clearFieldError);
confirmPassword.addEventListener("input", clearFieldError);

inputs.forEach(input => {
  input.addEventListener("input", () => {
    clearFieldError(input);
    if (input === password || input === confirmPassword) {
      clearPasswordError();
    }
  });
});

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
function verifyForm(event) {
  event.preventDefault();
  let isValid = true;
  // Check if required inputs are filled
  inputs.forEach(input => {
    if(input.hasAttribute("required") && input.value.trim() === "") {
      input.classList.add("error-border");
      if(errorMessage.textContent === "") errorMessage.textContent = "Please fill out all the required fields!"
      isValid = false;
    }
  })
  // Check password match and length constraints
  if(password.value !== confirmPassword.value) {
    passwordError.textContent = "Password does not match!";
    password.classList.add("error-border");
    confirmPassword.classList.add("error-border");
    isValid = false;
  } else if (password.value.length > 0 && password.value.length < 6) {
    passwordError.textContent = "Password must be over 5 characters!";
    password.classList.add("error-border");
    confirmPassword.classList.add("error-border");
    isValid = false;
  } else {
    passwordError.textContent = "";
  }
  // Submit the form if valid
  if(isValid) {
    signUpForm.submit();
  }
}
// General field errors
function clearFieldError(input) {
  if (input.value.trim() !== "") {
    input.classList.remove("error-border");
    errorMessage.textContent = "";
  }
}
// Function to clear password-specific errors
function clearPasswordError() {
  passwordError.textContent = "";
  password.classList.remove("error-border");
  confirmPassword.classList.remove("error-border");
}

// Applies class to input fields to prevent label overlap.
function checkInput(input) {
  if (input.value) {
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
  }
}

// Ensures checkInput function is active if appropriate (including on page load).
document.addEventListener("DOMContentLoaded", ()=> {
  document.querySelectorAll("input").forEach(input => {
    checkInput(input); // Check input on page load
    input.addEventListener("input", () => {
      checkInput(input);
    });
  });
});