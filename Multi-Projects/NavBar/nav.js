document.addEventListener("DOMContentLoaded", () => {
  fetch("../NavBar/nav.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("#navbar").innerHTML = html; // inject HTML
      document.querySelector("#navbar").classList.add("navList"); // add class for CSS
    })
    .catch(err => console.error("Error loading navbar:", err));
});
