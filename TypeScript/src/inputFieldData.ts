const printDiv = document.querySelector("#print");

function getInfo() {
  console.log("Button is Clicked");
  const nameInput = document.getElementById("username") as HTMLInputElement;
  const name: string = nameInput.value;

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const email: string = emailInput.value;

  const ageInput = document.getElementById("age") as HTMLInputElement;
  const age: string = ageInput.value;

  console.log(name, age, email);
  if (printDiv != null) {
    printDiv.innerHTML = `<p>Name: <b>${name}</b></p>
    <p>Email: ${email}</p>
    <p>Age: ${age}</p>`;
  }
}

// getInfo();