// Spread Operator (...)
// 👉 Expands (spreads) elements of an array or object.
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // shallow copy
console.log(arr2); // 👉 [1, 2, 3]

let nums1 = [1, 2];
let nums2 = [3, 4];
let combined = [...nums1, ...nums2];
console.log(combined); // 👉 [1, 2, 3, 4]

let numbers = [5, 10, 15];
console.log(Math.max(...numbers)); // 👉 15

let user = { name: "Alice", age: 25 };
let clone = { ...user, city: "Dhaka" };
console.log(clone);
// 👉 { name: "Alice", age: 25, city: "Dhaka" }

arr2 = [arr2, ...arr1];
console.log(arr2);

// Rest Operator (...)
// Collects multiple elements into an array.
// (Used in function parameters or destructuring.)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 👉 10

let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 👉 10
console.log(second); // 👉 20
console.log(rest); // 👉 [30, 40, 50]

let person = { name: "Bob", age: 30, city: "Dhaka", country: "Bangladesh" };
let { name, ...others } = person;
console.log(name); // 👉 Bob
console.log(others); // 👉 { age: 30, city: "Dhaka", country: "Bangladesh" }


function uniqueSum(...numbers) { // rest -> assigning values
  // Step 1: Remove duplicates using Set
  let uniqueNumbers = [...new Set(numbers)]; // spread -> creating new array

  // Step 2: Sum them
  return uniqueNumbers.reduce((a, b) => a + b, 0);
}

// Test cases
console.log(uniqueSum(1, 2, 2, 3, 4));       // 👉 10 (1+2+3+4)
console.log(uniqueSum(5, 5, 5, 10, 15));     // 👉 30 (5+10+15)
console.log(uniqueSum(100, 200, 100, 50));   // 👉 350
