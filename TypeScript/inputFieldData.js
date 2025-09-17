var printDiv = document.querySelector("#print");
function getInfo() {
    console.log("Button is Clicked");
    var nameInput = document.getElementById("username");
    var name = nameInput.value;
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var ageInput = document.getElementById("age");
    var age = ageInput.value;
    console.log(name, age, email);
    if (printDiv != null)
        printDiv.innerHTML = "<p>Name: <b>".concat(name, "</b></p>\n    <p>Email: ").concat(email, "</p>\n    <p>Age: ").concat(age, "</p>");
}
