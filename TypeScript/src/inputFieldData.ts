const getInfoBtn = document.querySelector("#getBtn") as HTMLButtonElement;

getInfoBtn.addEventListener('click', (e) => {
  console.log("Button is Clicked");
  const nameInput = document.getElementById("username") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;

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

