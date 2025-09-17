/*
MAP
A Map is like an object, but with any type of key (not just strings).
Keys are kept in insertion order.
More predictable than plain objects for key–value pairs.
Object keys are always strings or symbols.
Map keys can be anything (object, function, NaN, etc.).
Easier to iterate with .forEach() or for...of.
*/
// const map = new Map();

// // set values
// map.set("name", "Tanvir");
// map.set(42, "number key");
// map.set({ id: 1 }, "object key");

// // get values
// console.log(map.get("name"));    // "Tanvir"
// console.log(map.has(42));        // true
// console.log(map.size);           // 3

// // iterate
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// const map2 = new Map();
// map2.set(1, 1);
// map2.set(3, 3);
// map2.set(2, 2);
// let obj = {
//     1: 2
// }
// map2.set(obj, 6);
// for (const [key, value] of map2) {
//   console.log(key, value);
// }


/*
Set
A Set stores unique values.
Order is preserved by insertion.
Useful for removing duplicates.
*/
// const set = new Set([1, 2, 2, 3, 4]);
// console.log(set); // Set(4) {1, 2, 3, 4}

// // add
// set.add(5);
// set.add(2); // ignored (already exists)

// // check & delete
// console.log(set.has(3));  // true
// set.delete(1);

// // iterate
// for (const v of set) console.log(v);
// const arr = [1, 2, 2, 3];
// const unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3]


/*
WeakMap
Similar to Map, but keys must be objects.
Keys are weakly held → if no other reference exists, the object can be garbage-collected.
No .size, no iteration — deliberately.
Private data is automatically garbage collected
*/
// const privateData = new WeakMap();

// class User {
//   constructor(name, age) {
//     privateData.set(this, { age }); // attach private info
//     this.name = name;               // public property
//   }

//   getAge() {
//     return privateData.get(this).age;
//   }
// }

// let u1 = new User("Tanvir", 23);
// console.log(u1.name);    // "Tanvir"
// console.log(u1.getAge()); // 23

// // ❌ Can't access private data directly
// console.log(u1.age); // undefined

// // If u1 is destroyed:
// console.log(privateData.get(u1).age, "he ");
// u1 = null;


/*
WeakSet
Like Set, but only objects allowed.
Objects are held weakly (can be GC’d).
No .size, no iteration.*/

// let obj1 = { x: 1 };
// let obj2 = { y: 2 };

// const ws = new WeakSet([obj1, obj2]);

// console.log(ws.has(obj1)); // true
// obj1 = null; // now obj1 can be garbage collected



/*
Array.prototype.flatMap()
Combines .map() and .flat(1) in one step.
Applies a mapping function, then flattens the result one level deep.*/

const arr = [1, 2, 3];

const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

let result2 = arr.map(x => [x, x*2]); 
console.log(result2);// [[1,2], [2,4], [3,6]] (nested arrays)

let result3 = arr.flatMap(x => [x, x*2]); 
console.log(result3);// [1,2,2,4,3,6] (flattened once)
