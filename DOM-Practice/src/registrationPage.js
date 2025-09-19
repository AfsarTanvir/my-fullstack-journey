const registerBtn = document.querySelector("#registerForm");

function saveUser(email, userdata) {
  localStorage.setItem(email.toString(), JSON.stringify(userdata));
}

function emailExists(email) {
  let users = JSON.parse(localStorage.getItem(email.toString()));
  console.log(users);
  return users !== null;
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError(str01, str02) {
  const resgisterError = document.getElementById("registerError");
  resgisterError.innerHTML = `${str01} = ${str02}`;
  setTimeout(() => {
    resgisterError.innerHTML = ``;
  }, 2000);
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

  for (let i = 0; i < name.length; ++i) {
    if (
      !(
        (name[i] >= "a" && name[i] <= "z") ||
        (name[i] >= "A" && name[i] <= "Z") ||
        name[i] == " " ||
        name[i] == "." ||
        name[i] == "_" ||
        name[i] == "-"
      )
    ) {
      showError("registerError", "Please enter correct name.");
      return;
    }
  }

  if (password !== confirmPassword) {
    showError("registerError", "Passwords do not match.");
    return;
  }
  if (emailExists(email)) {
    showError("registerError", "An account with this email already exists.");
    return;
  }

  if (!isValidEmail(email)) {
    showError("registerError", "Email is not valid.");
    return;
  }
  // password
  let isNumber = false,
    isCapital = false,
    isLower = false,
    isSymbol = false;
  for (let i = 0; i < password.length; ++i) {
    if (password[i] >= "0" && password[i] <= "9") isNumber = true;
    else if (password[i] >= "a" && password[i] <= "z") isLower = true;
    else if (password[i] >= "A" && password[i] <= "Z") isCapital = true;
    else isSymbol = true;
  }
  if (!isNumber) {
    showError("registerError", "Password should contains number.");
    return;
  } else if (!isCapital) {
    showError("registerError", "Password should contains upper case letter.");
    return;
  } else if (!isLower) {
    showError("registerError", "Password should contains lower case letter.");
    return;
  } else if (!isSymbol) {
    showError("registerError", "Password should contains special symbol.");
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
