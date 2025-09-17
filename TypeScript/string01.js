var str = "Hello, How are you?";
var age = 30;
var userName = null;
console.log(userName);
userName = "Afsar Tanvir";
console.log(userName);
var info = "My name is ".concat(userName, " and age is ").concat(age);
console.log(info);
var data01 = age.toString();
console.log(data01, typeof data01);
var boolen = true;
// boolen = 25; // it will show error because it auto detects the datatype is boolean
var data02 = boolen.toString();
console.log(data02, typeof data02);
