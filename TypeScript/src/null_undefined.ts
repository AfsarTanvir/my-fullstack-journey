var str01: null|string = null;
var str02: string = "";
console.log("str01 = ", str01, typeof str01);
console.log("str02 = ", str02, typeof str02);
if(str01 == str02) {
    console.log("str01 and str02 is same.");
    if(str01 === str02){
    console.log("str01 and str02 data type also same.");
}
}else{
    console.log("They are not same.");
}
console.log();


str01 = "";
if(str01 == str02) {
    console.log("str01 and str02 is same.");
    if(str01 === str02){
    console.log("str01 and str02 data type also same.");
}
}else{
    console.log("They are not same.");
}

console.log();


var str03;
console.log("str03 = ", str03, typeof str03);
str03 = "rajon";
console.log("str03 = ", str03, typeof str03);
console.log();


var str04: undefined| string = undefined;
var str05: null = null;
if(str04 == str05) {
    console.log("str04 and str05 is same.");
    if(str04 === str05){
    console.log("str04 and str05 data type also same.");
}
}else{
    console.log("str04 and str05 not same.");
}

str04 = "Afsar";