const registerBtn = document.querySelector("#registerForm");

function saveUser(email, userdata) {
  localStorage.setItem(email.toString(), JSON.stringify(userdata));
}

function emailExists(email) {
  let users = JSON.parse(localStorage.getItem(email.toString()));
  console.log(users);
  return users !== null;
}

function showError(str01, str02) {
  const resgisterError = document.getElementById("registerError");
  resgisterError.innerHTML = `${str01} = ${str02}`;
}

function showSuccess(str01, str02) {
  const registerSuccess = document.getElementById("registerSuccess");
  registerSuccess.innerHTML = `${str01} = ${str02}`;
}

registerBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    showError("registerError", "Passwords do not match.");
  }
  if (emailExists(email)) {
    showError("registerError", "An account with this email already exists.");
    return;
  }

  const userdata = {
    name: name,
    email: email,
    password: password,
    registrationDate: new Date().toLocaleDateString(),
    card: [],
  };

  saveUser(email, userdata);
  showSuccess(
    "registerSuccess",
    "Account created successfully! You can now login."
  );

  document.getElementById("registerForm").reset();

  setTimeout(() => {
    window.location.href = "loginPage.html";
  }, 2000);
});
