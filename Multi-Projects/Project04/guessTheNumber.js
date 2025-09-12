let guessedNumberEle = document.querySelector("#guessedNumber");
let submitBtn = document.querySelector("#submitBtn");
let previousGuessedEle = document.querySelector("#listPG");
let remainingStepsEle = document.querySelector("#remainingSteps");
let outputEle = document.querySelector("#hea");
let newGameBtn = document.querySelector("#newGame");

let answer = Math.floor(Math.random() * 100 + 1);
let attemed = 2;
console.log(answer);

submitBtn.addEventListener("click", () => {
  let guessedNumber = guessedNumberEle.valueAsNumber;
  console.log(typeof guessedNumber);
  if (
    guessedNumber == "" ||
    guessedNumber <= 0 ||
    guessedNumber > 100 ||
    isNaN(guessedNumber)
  ) {
    outputEle.innerHTML = `Please Enter right number(1 to 100)`;
    return;
  }
  if (answer === guessedNumber) {
    outputEle.innerHTML = `You Guessed The correct Number.`;
    document.body.classList.add("afsar");
    guessedNumberEle.remove();
    submitBtn.remove();
  } else if (answer < guessedNumber) {
    outputEle.innerHTML = `Wrong Answer, You Guess too high.`;
  } else {
    outputEle.innerHTML = `Wrong Answer, You Guess too low.`;
  }
  guessedNumberEle.value = "";
  previousGuessedEle.innerHTML += attemed==2? `${guessedNumber}`: `, ${guessedNumber}`;
  remainingStepsEle.innerHTML = `Remaining Steps ${--attemed}`;
  if (attemed == 0) {
    outputEle.innerHTML = `You Have lost the match.`;
    guessedNumberEle.remove();
    submitBtn.remove();
  }
});

newGameBtn.addEventListener("click", () => {
  console.log("object");
  window.location.reload();
});
