// Lexical Scope
// Scope = where a variable is accessible.
// Lexical scope means scope is determined by where code is written, not where it is called.
// Inner functions can access variables from outer functions because of lexical scope.
function outer() {
  let x = 10; // variable inside outer

  function inner() {
    console.log(x); // inner can access x
  }

  inner();
}
outer(); // 👉 10

function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

let counter = outer(); // outer() finished, but inner still remembers "count"
console.log(counter()); // 👉 1
console.log(counter()); // 👉 2
console.log(counter()); // 👉 3
// count is private inside outer(), but inner() keeps access to it through closure.

function createBankAccount() {
  let balance = 0; // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

let account = createBankAccount();
console.log(account.deposit(100)); // 👉 100
console.log(account.getBalance()); // 👉 100
console.log(account.balance); // 👉 undefined (private)

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // 👉 10
console.log(triple(5)); // 👉 15

function setupButton(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}

let btnHandler = setupButton("Alice");
// Later used as event handler
btnHandler(); // 👉 "Hello, Alice"
