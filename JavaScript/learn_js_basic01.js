// let str = "My name is Afsar Tanvir.";
// console.log(str);

// str = str.replace("name", "Name");
// console.log(str);

// str = str.replace('a', '@');
// console.log(str);

// str = str.replaceAll('a', '*');
// console.log(str);

// let strLength = str.length;
// console.log(strLength);

// //arrow function
// const arrowMul = (a, b) => {
//     return a*b;
// }
// console.log(arrowMul(3, 4));

//
let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num**2);
// });

// let calcSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);

// Map
// let newArr = nums.map((val) => {
//   return val * 2;
// });

// console.log(newArr);

// // Filter
// let evenArr = nums.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(evenArr);

// // Reduce -> it return a single value
// let sum = nums.reduce((sum, cur) => {
//   return sum + cur;
// });
// console.log(sum);

// Join
// let joinArr = nums.join(" Fish,\n");
// console.log(joinArr);

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// const person = { name: "Alice", age: 25, city: "Dhaka" };
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(person);
// console.log(person.city);

// // Example: Loop through
// for (const [key, value] of Object.entries(person)) {
//   console.log(key, ":", value);
// }


// Object.assign(target, source)
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const result = Object.assign({}, obj1, obj2);
// const result2 = Object.assign({d: 4, e : 5}, obj1, obj2)
// console.log(result);
// console.log(result2);
// console.log(obj1);
// console.log(obj2);
// const result3 = Object.assign(obj1, obj2);
// console.log(result3);
// console.log(obj1);
// console.log(obj2);


// Object.freeze(obj) -> Prevents changes (no adding, deleting, modifying).
// const car = { brand: "Toyota", model: "Corolla" };
// Object.freeze(car);

// car.brand = "Honda"; // ❌ ignored
// console.log(car.brand); // 👉 "Toyota"


// Object.seal(obj) -> Prevents adding/removing properties, but allows modifying existing ones.
// const user = { name: "Bob", age: 30 };
// Object.seal(user);

// user.age = 31; // ✅ allowed
// user.city = "Dhaka"; // ❌ ignored
// console.log(user);
// // 👉 { name: "Bob", age: 31 }


//Object.hasOwn(obj, key) (ES2022) -> Checks if the object has a specific property.
const student = { id: 101, name: "Rahim" };

console.log(Object.hasOwn(student, "id"));    // 👉 true
console.log(Object.hasOwn(student, "grade")); // 👉 false
