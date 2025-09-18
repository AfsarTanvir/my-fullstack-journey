var getInfoBtn = document.querySelector("#getBtn");
function getInfo() {
    console.log("Button is Clicked");
    var nameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var ageInput = document.getElementById("age");
    var name = nameInput.value;
    var email = emailInput.value;
    var age = ageInput.value;
    var printDiv = document.querySelector("#print");
    if (printDiv != null) {
        printDiv.innerHTML = "<p>Name: <b>".concat(name, "</b></p>\n    <p>Email: ").concat(email, "</p>\n    <p>Age: ").concat(age, "</p>");
    }
}
