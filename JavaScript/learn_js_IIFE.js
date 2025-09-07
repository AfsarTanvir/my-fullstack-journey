(function () {
  console.log("IIFE runs immediately!");
})();

(function () {
  let message = "Hello from IIFE!";
  console.log(message);
})();
// 👉 runs immediately

(() => {
  console.log("Arrow IIFE runs too!");
})();

((name) => {
  console.log("Hello " + name);
})("Alice");

let x = 7;
let y = 3;

let result = (function(a, b) {
  return a + b;
})(x, y);

console.log(result); // 👉 10


let username = "Alice";
let age = 25;

(function (name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
})(username, age);
