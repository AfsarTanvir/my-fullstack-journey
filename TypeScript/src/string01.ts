let str: string = "Hello, How are you?";

let age: number=30;
let userName:string|null = null;
console.log(userName);
userName = "Afsar Tanvir"
console.log(userName);


var info: string = `My name is ${userName} and age is ${age}`;
console.log(info);
var data01: string = age.toString();
console.log(data01, typeof data01);

var boolen = true;
// boolen = 25; // it will show error because it auto detects the datatype is boolean
var data02: string = boolen.toString();
console.log(data02, typeof data02);