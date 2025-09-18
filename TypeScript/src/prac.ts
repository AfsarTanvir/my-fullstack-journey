function calculator(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const multiply = (x: number, y: number) => x * y;
const subtract = (x: number, y: number) => x - y;

console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, subtract)); // 5
console.log(calculator(10, 5, (a, b) => a / b));
