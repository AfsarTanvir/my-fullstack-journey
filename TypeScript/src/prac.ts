type A = { name: string; age: number; school: string };
const a = {
  name: "afsar",
  age: 24,
  school: "MBHS",
} satisfies A
console.log(a);
