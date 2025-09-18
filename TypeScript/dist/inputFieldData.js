const getInfoBtn = document.querySelector("#getBtn");
getInfoBtn.addEventListener('click', (e) => {
    console.log("Button is Clicked");
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;
    const printDiv = document.querySelector("#print");
    if (printDiv != null) {
        printDiv.innerHTML = `<p>Name: <b>${name}</b></p>
    <p>Email: ${email}</p>
    <p>Age: ${age}</p>`;
    }
});
export {};
//# sourceMappingURL=inputFieldData.js.map