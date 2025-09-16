/*
1. Function Declaration
Standard way to declare a function.
Hoisted: you can call it before it’s defined.
*/

// console.log(greet("Alice")); // Hello, Alice!
// // Example 1
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// // Example 2: no parameters
// function sayHi() {
//   console.log("Hi!");
// }
// sayHi(); // Hi!

/*
2. Function Expression
Assign a function to a variable.
Not hoisted: can’t call before declaration.
*/

// // Example 1
// console.log(add(5, 3)); // TypeError
// var add = function(a, b) {
//   return a + b;
// };
// console.log(add(5, 3)); // 8

// // Example 2: anonymous vs named
// const factorial = function fact(n) {
//   return n <= 1 ? 1 : n * fact(n - 1);
// };
// console.log(factorial(5)); // 120

/*
3. Arrow Functions (ES6)
Short syntax for functions.
Lexical this binding.
*/

// // Example 1: simple
// const square = n => n * n;
// console.log(square(4)); // 16

// // Example 2: multiple parameters
// const sum = (a, b) => a + b;
// console.log(sum(2, 3)); // 5

// // Example 3: multiline arrow
// const greet = name => {
//   const msg = `Hello, ${name}`;
//   return msg;
// };
// console.log(greet("Bob")); // Hello, Bob

/*
4. Immediately Invoked Function Expression (IIFE)
Executes immediately after definition.
Often used to create private scope.
*/

// // Example 1
// (function() {
//   console.log("IIFE executed!");
// })(); // IIFE executed!

// // Example 2 with parameters
// (function(a, b) {
//   console.log(a + b);
// })(2, 3); // 5

/*
5. Anonymous Functions
Functions without a name.
Often used as arguments or callbacks.
*/

// setTimeout(function() {
//   console.log("Timeout executed!");
// }, 1000);

// // Arrow function variant
// setTimeout(() => console.log("Arrow Timeout"), 1000);

/*
6. Nested / Higher-Order Functions
Functions can return functions or take functions as arguments.
*/

// Example 1: returning function
// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const double = multiply(2);
// console.log(double(5)); // 10

// // Example 2: function as argument
// function operate(a, b, fn) {
//   return fn(a, b);
// }
// console.log(operate(5, 3, (x, y) => x + y)); // 8
// console.log(operate(5, 3, (x, y) => x * y)); // 15

/*
7. Default Parameters
Provide default values if argument is undefined.
*/

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet("Alice"); // Hello, Alice
// greet(); // Hello, Guest

/*
8. Rest Parameters & Spread Operator
Collect multiple arguments into an array.
*/

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10

// const arr = [1, 2, 3];
// console.log(sum(...arr)); // 6

/*
9. Function Properties
Functions are objects → can have properties.
*/

// function sayHi() {}
// sayHi.lang = "English";
// console.log(sayHi.lang); // English

/*
10. Arrow Function vs Regular Function (this behavior)
*/

// const obj = {
//   name: "Alice",
//   regular: function () {
//     console.log(this.name);
//   },
//   arrow: () => console.log(this.name),
// };

// obj.regular(); // Alice
// obj.arrow(); // undefined (lexical this)

/*
11. Generator Functions (ES6)
Functions that can pause and resume using yield.
*/

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const g = gen();
// console.log(g.next()); // { value: 1, done: false }
// console.log(g.next()); // { value: 2, done: false }
// console.log(g.next()); // { value: 3, done: false }
// console.log(g.next()); // { value: undefined, done: true }

/*
12. Async / Await Functions
Functions that return promises.
*/

// async function fetchData() {
//   return "Data fetched";
// }
// fetchData().then(console.log); // Data fetched

// // Example with await
// async function main() {
//   let result = await fetchData();
//   console.log(result, "01");
// }
// main(); // Data fetched
