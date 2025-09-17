const obj = [
    {FirstName: "z", SecondName: "i", age: 30},
    {FirstName: "y", SecondName: "j", age: 29},
    {FirstName: "w", SecondName: "k", age: 28},
    {FirstName: "m", SecondName: "c", age: 33},
    {FirstName: "x", SecondName: "d", age: 32},
    {FirstName: "t", SecondName: "e", age: 35},
    {FirstName: "v", SecondName: "a", age: 34},
    {FirstName: "a", SecondName: "z", age: 16},
    {FirstName: "b", SecondName: "c", age: 14},
];



const output = obj.reduce((Name, person) => {
    if(person.age<15 || person.age>=30){
        Name.push(person.age);
    }
    return Name;
}, []);
console.log(output);

// let nums = [2, 3, 4, 5, 6];
// /* Map */
// let newArr = nums.map((val) => {
//   return val * 2;
// });

// console.log(newArr);

// /* Filter */
// let evenArr = nums.filter((val) => {
//   return val % 2 == 0;
// });

// console.log(evenArr);

// /* Reduce -> it return a single value */
// let sum = nums.reduce((sum, cur) => {
//   return sum + cur;
// });
// console.log(sum);

// /* Join */
// let joinArr = nums.join(" Fish,\n");
// console.log(joinArr);

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
