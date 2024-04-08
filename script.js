const errorMessage = document.querySelector(".error-msg");
const submitButton = document.querySelector(".submit-btn");
const emailValue = document.querySelector(".email-value");

const validateEmailFunc = function (email) {
  return !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
};

submitButton.addEventListener("click", () => {
  let message, cssClass;
  if (validateEmailFunc(emailValue.value)) {
    message = "Please Provide a Valid Email Address";
    cssClass = "bad";
  } else {
    message = "Notify Will Be Sent To You";
    cssClass = "good";
  }
  
  errorMessage.textContent = message;
  errorMessage.classList.add(cssClass);
  
  // Clear the input value
  emailValue.value = "";
});

