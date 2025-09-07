let fruits = ["apple", "banana", "cherry", "mango"];

// splice(start, deleteCount, ...items)
// Changes the original array.
// Can remove, replace, or add elements.
// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // 👉 ["apple", "cherry", "mango"]

// Add new element at index 1
fruits.splice(1, 0, "orange");
console.log(fruits); // 👉 ["apple", "orange", "cherry", "mango"]

// Replace 1 element at index 2
fruits.splice(1, 10, "grape", "litche");
console.log(fruits); // 👉 ["apple", "orange", "grape", "mango"]

let bre = "-----------------------------------------";
console.log(bre);

// slice(start, end)
// Returns a new array (does not modify original).
// Extracts elements from start to end (end not included).

let nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3)); // 👉 [2, 3]
console.log(nums); // 👉 [1, 2, 3, 4, 5] (unchanged)
let newNums = nums.slice(1, 3);
console.log(newNums);
console.log(bre);

// sort()
// Sorts array in place (as strings by default).
let names = ["Rahim", "Karim", "Anis"];
names.sort();
console.log(names); // 👉 ["Anis", "Karim", "Rahim"]

let numbers = [30, 4, 21, 100];
numbers.sort();
console.log(numbers); // 👉 [100, 21, 30, 4] (wrong for numbers)

// Correct way (numeric sort):
numbers.sort((a, b) => b - a);
console.log(numbers); // 👉 [4, 21, 30, 100]
console.log(bre);

// delete array[index]
// Removes the value but leaves an empty slot (not recommended).
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
delete arr[1];
delete arr[6];
console.log(arr);
delete arr;
console.log(arr);
console.log(bre);

// find(callback)
// Returns the first matching element, or undefined.
let arr2 = [1, 2, 4, 5, 6];
let isExist = arr2.find((n) => n > 4);
console.log(isExist);
isExist = arr2.find((i) => i == 3);
console.log(isExist);
console.log(bre);

// findIndex(callback)
// returns the index of the first match or -1
let arr3 = [10, 20, 30, 40];
let idx = arr3.findIndex((n) => n > 25);
console.log(idx); // 👉 2

// every(callback)
// checks if all elements satisfy a condition
let arr4 = [2, 4, 6, 8];
console.log(arr4.every((n) => n % 2 === 0));

// some(callback)
// Checks if at least one element satisfies a condition.
let arr5 = [1, 3, 5, 8];
console.log(arr5.some(n => n % 2 === 0)); // 👉 true (because 8 is even)
