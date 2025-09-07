// Implicit Type Conversion (Type Coercion)
// JS automatically converts types when needed (e.g., during operations).
// Number + String → String (implicit)
console.log(5 + "5"); // 👉 "55"

// String - Number → Number (implicit)
console.log("10" - 5); // 👉 5

// Boolean conversion in condition
if ("hello") {
  console.log("truthy"); // 👉 executed because non-empty string is truthy
}

// Explicit Type Conversion (Type Casting)
// You manually convert types using built-in functions.

// String conversion
let num = 10;
console.log(String(num)); // 👉 "10"

// Number conversion
let str = "123";
console.log(Number(str)); // 👉 123
console.log(parseInt(str)); // 👉 123

// Boolean conversion
console.log(Boolean(0)); // 👉 false
console.log(Boolean("")); // 👉 false
console.log(Boolean("hi")); // 👉 true
