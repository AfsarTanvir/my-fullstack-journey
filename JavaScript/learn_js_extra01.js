/* 
1. Recursive Object Iteration
When an object has nested objects, we can use recursion to iterate through all keys/values.
*/
let person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    geo: {
      lat: 23.8103,
      lng: 90.4125,
    },
  },
  phone: "01712345678",
};

function iterate(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]); // recursion
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

iterate(person);

/*
2. Object-Oriented JavaScript (OOP)
JavaScript supports OOP with classes and objects.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak1() {
    console.log(`${this.name} barks`);
  }
}

let d = new Dog("Rover");
d.speak(); // 👉 Rover barks
d.speak1();

/*
3. Local Storage (Browser Storage)
Stores data in the browser.
Persists even after refreshing (until manually cleared).
*/
// Save
localStorage.setItem("username", "Afsar Tanvir");

// Get
console.log(localStorage.getItem("username")); // 👉 Alice

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();

/*
4. Classifiers (Public, Private fields in classes)
Public = accessible everywhere.
Private = only accessible inside the class (with #).
*/
class BankAccount {
  #balance; // private

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount("Alice", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 👉 1500
// console.log(acc.#balance); ❌ Error (private)

/*
5. Hoisting
Hoisting = JavaScript moves declarations (not assignments) to the top of scope.
*/
sayHi(); // Works, because function is hoisted
function sayHi() {
  console.log("Hello!");
}
console.log(a); // 👉 undefined (declaration is hoisted, not value)
var a = 10;
// console.log(b); // ❌ ReferenceError
// let b = 20; // Uncaught ReferenceError: can't access lexical declaration 'b' before initialization
// They are hoisted but kept in Temporal Dead Zone (TDZ) until initialized.
