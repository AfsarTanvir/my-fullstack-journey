function calculator(a, b, operation) {
    return operation(a, b);
}
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, subtract)); // 5
console.log(calculator(10, 5, (a, b) => a / b));
export {};
//# sourceMappingURL=prac.js.map