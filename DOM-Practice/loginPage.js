const loginForm = document.querySelector("#loginForm");

function showError(str01, str02) {
  const loginError = document.getElementById("loginError");
  loginError.innerHTML = `${str01} = ${str02}`;
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("login button is clicked");

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  let userInfo = JSON.parse(localStorage.getItem(email.value));
  if (userInfo == null) {
    showError("LoginError", "email doesn't exists.");
    return;
  }

  if (password.value !== userInfo.password) {
    showError("LoginError", "Password is incorrect.\nPlease Try again");
    return;
  }

  setTimeout(() => {
    window.location.href = `dashboard.html?email=${email.value}`;
  }, 1000);
});
