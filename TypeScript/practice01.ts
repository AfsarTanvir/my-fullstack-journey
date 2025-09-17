/* type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shape): number|string {
  if (shape.kind === "circle") {
    return (shape as { kind: "circle"; radius: number }).radius ** 2 * Math.PI;
  } else {
    return "Afsare";// (shape as { kind: "square"; side: number }).side ** 2;
  }
}


let x: Shape = {
    kind: "circle",
    radius: 4
}

let y: Shape = {
    kind: "square",
    side: 4
}

console.log(getArea(x));
console.log(getArea(y)); */

// Example 1: array values
let user = {
    Bane: "afsar",
    Age: 45,
    City: "MB"
}



for (let key in user) {
  console.log(key, ":", user[key as keyof typeof user]);
}
// Output: id : 1, name : Alice, age : 25

// Example 2: array indexes
let nums = [100, 200, 300];
for (let index in nums) {
  console.log("Index:", index, "Value:", nums[index]);
}
// Output: Index: 0 Value: 100, Index: 1 Value: 200, Index: 2 Value: 300