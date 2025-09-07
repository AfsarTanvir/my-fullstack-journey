// this Keyword
// The value of this depends on where and how the function is called.

// 1.Global Context
// In non-strict mode → this refers to the global object (window in browser).
// In strict mode → this is undefined.
// console.log(this); // 👉 window (browser)
// "use strict";
// console.log(this); // 👉 undefined

// // 2. Function Context
// // Regular function: this refers to global object (or undefined in strict mode).
// function show() {
//   console.log(this);
// }
// show(); // 👉 window (non-strict), undefined (strict)
// // Arrow function: this is lexically inherited from the surrounding scope.
// let obj = {
//   name: "Alice",
//   arrow: () => console.log(this),
//   regular: function() { console.log(this); }
// };

// obj.arrow();   // 👉 this from outer scope (usually window)
// obj.regular(); // 👉 obj

// // 3. Object Method
// // When a function is called as a method of an object, this refers to that object.
// let person = {
//   name: "Bob",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet(); // 👉 Hello Bob

// // 4. Class Method
// // Inside a class, this refers to the instance of the class.
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// let user1 = new User("Alice");
// user1.greet(); // 👉 Hello Alice


// call(thisArg, arg1, arg2, ...)
// Calls a function with a given this value and arguments separately.
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
let person = { name: "Bob" };
greet.call(person, "Hello"); // 👉 Hello, Bob
let person2 = {name: "alice", age: 25};
greet.call(person2, "Hola");


// apply(thisArg, [argsArray])
// Like call(), but arguments are passed as an array.
greet.apply(person, ["Hi"]); // 👉 Hi, Bob
greet.call(person2, "Hmmm");

// bind(thisArg, arg1, arg2, ...)
// Returns a new function with this permanently set.
// Doesn’t execute immediately.
let greetBob = greet.bind(person);
greetBob("Hey");

