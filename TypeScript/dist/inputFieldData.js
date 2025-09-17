const printDiv = document.querySelector("#print");
function getInfo() {
    console.log("Button is Clicked");
    const nameInput = document.getElementById("username");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(name, age, email);
    if (printDiv != null) {
        printDiv.innerHTML = `<p>Name: <b>${name}</b></p>
    <p>Email: ${email}</p>
    <p>Age: ${age}</p>`;
    }
}
export {};
// getInfo();
//# sourceMappingURL=inputFieldData.js.map