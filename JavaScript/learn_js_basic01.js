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
// let nums = [2, 3, 4, 5, 6];
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
// const student = { id: 101, name: "Rahim" };

// console.log(Object.hasOwn(student, "id"));    // 👉 true
// console.log(Object.hasOwn(student, "grade")); // 👉 false

// hoisting example
// console.log(a); // undefined (var is hoisted)
// var a = 1;

// console.log(a);
// let b = 2;
// console.log(b); // ReferenceError (b is in TDZ)

// // const
// const c = { x: 1 };
// c.x = 2; // allowed (binding is constant, object is mutable)
// // c = {};            // TypeError (cannot reassign const binding)

// c.y = 7;
// console.log(c);

// c.z = 12;
// console.log(c);

// c.a = 3;
// console.log(c);

// delete c.z;
// console.log(c);
// console.log("print c", c);

// const d = { x: 2, y: 7, a: 3 };
// const e = { x: 2, y: 7, a: 3 };
// console.log(d);
// console.log(d == e);
// console.log(d === e);

// const z = c;
// console.log(z == c);

// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     setTimeout(() => console.log(x), 0);
//   })(i);
// }

// let obj = {
//     Name: "afsar",
//     Age: 25
// };

// console.log(obj);
// let j = JSON.stringify(obj);
// console.log(j);

// console.log(typeof j);

// let o = JSON.parse(j);
// console.log(o);
// console.log(typeof o);

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(0 == false);    // true
// console.log('' == 0);       // true
// console.log([] == '');      // true
// console.log(true == {});
// console.log(false == {});     // true (surprising but true)
// console.log([] == []);      // false (different object references)

// if ({}) { console.log('truthy fuck you noman'); } // truthy
// if (0n) { console.log('this won’t run'); } // falsy

// var name1 = "pagol";

// const obj ={
//     name1 : "afsar",
//     work : function (){
//         console.log(this.name1);
//         function ran(){
//             console.log(this.name1);
//         }
//         ran();
//     },
// }
// obj.work();

// name = "und";

// const obj = {
//   name: "Afsar",
//    work: function () {
//     console.log(this.name);
//      const obj2 = {
//         name: "no",
//         do : function (){
//             console.log(this.name);
//         }
//      }
//      obj2.do();
//   }
// };
// obj.work();
// // 👉 "Afsar" (this = obj)

// const obj3 = {
//     name: "numin",
//     work: () => {
//         console.log(this.name);
//         const obj4 = {
//             name: "key",
//             do : () => {
//                 console.log(this.name);
//             }
//         }
//         obj4.do();
//     }
// }
// console.log();
// obj3.work();

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a*7);
//   };
// }
// var z = x();
// console.log(z);
// z();

// function x(){
//     for(var i=1; i<=5; ++i){
//         setTimeout(function (){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("object");
// }
// x();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let date = new Date().toLocaleTimeString(); // readable time
    resolve({ msg: "Promise 1 Resolved!!", time: date });
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let date = new Date().toLocaleTimeString();
    resolve({ msg: "Promise 2 Resolved!!", time: date });
  }, 10000);
});

async function handlePromise() {
  console.log("Start...");

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      let date = new Date().toLocaleTimeString(); // readable time
      resolve({ msg: "Promise 1 Resolved!!", time: date });
      console.log(date);
    }, 2000);
  });
  console.log("First:");

  await new Promise((resolve, reject) => {

      let dat = new Date().toLocaleTimeString();
      console.log(dat);
      let date;
    setTimeout(() => {
      date = new Date().toLocaleTimeString();
      resolve({ msg: "Promise 2 Resolved!!", time: date });
      console.log(date);
    }, 5000);

  });
  console.log("Second:");
}

handlePromise();

for (let i = 0; i < 5; i++) {
  console.log(i + " = i");
}
