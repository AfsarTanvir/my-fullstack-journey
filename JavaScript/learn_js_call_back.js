// what is a Callback Function in JavaScript

setTimeout(() => {
    console.log("timer");
}, 1000);

function x(y) {
    y(5); 
    console.log("x is called.");
};

x(function y(n) {
    console.log("Y is called", n*n);
});