let wm = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

wm.set(obj1, "Alice");
wm.set(obj2, "Bob");

console.log(wm.get(obj1)); // Alice
// delete obj1;
console.log(wm.get({id: 1}));
wm.delete(obj2);
console.log(wm.has(obj2)); // false
