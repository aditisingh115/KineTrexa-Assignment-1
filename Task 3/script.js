const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  emailError.innerText = "";
  passwordError.innerText = "";

  let isValid = true;

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!pattern.test(email)) {
    emailError.innerText = "Enter valid email";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});