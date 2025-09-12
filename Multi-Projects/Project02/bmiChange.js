let heightEle = document.querySelector("#height");
let weightEle = document.querySelector("#weight");
let form = document.querySelector("#main");
let h2 = document.querySelector("#result");
console.log(height);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = (heightEle.valueAsNumber);
  let weight = (weightEle.valueAsNumber);
  if (height === "" || isNaN(height) || height < 0 || height > 3) {
    h2.innerHTML = `Please Enter Correct Height ${height}`;
  } else if (weight === "" || isNaN(weight) || weight < 0 || weight > 300) {
    h2.innerHTML = `Please Enter Correct weight ${weight}`;
  } else {
    let bmi = (weight / height ** 2).toFixed(3);
    h2.innerHTML = `Your BMI is ${bmi}`;
  }
});
