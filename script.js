const errorMessage = document.querySelector(".error-msg");

const submitButton = document.querySelector(".submit-btn");

const emailValue = document.querySelector(".email-value");

const validateEmailFunc = function (email) {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) {
    return true;
  } else {
    return false;
  }
};

submitButton.addEventListener("click", () => {
  if (validateEmailFunc(emailValue.value)) {
    errorMessage.textContent = "Please Provide a Valid Email Address";
    errorMessage.classList.add("bad");
  } else {
    errorMessage.textContent = "Notify Will Be Sent To You";
    errorMessage.classList.add("good");
  }
  emailValue.value = "";
});
