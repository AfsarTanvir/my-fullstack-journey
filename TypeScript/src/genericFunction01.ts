/*
Generic parameters are declared inside <...>.
TS can often infer types, so explicit generics are optional.
*/

/* Example 01 Identity Function */
// function identity<T>(value: T) {
//   return value;
// }

// const s = identity<string>("Afsar Tanvir");
// console.log("Type of", s, "is", typeof s);

// const n = identity(123);
// console.log("Type of", n, "is", typeof n);

/* Example 02 Generic wrapper/ Promise-like */
// function wrapInArray<T>(item: T): T[] {
//   return [item];
// }
// const arr01 = wrapInArray("x");
// const arr02 = wrapInArray({ id: 1 });
// console.log(arr01);
// console.log(arr02);

// /* Example 03 Generic map Function(Higher-order) */
// function mapArray<T, U>(arr: T[], fn: (x: T) => U): U[] {
//   return arr.map(fn);
// }

// const nums = [1, 2, 3];
// const strings = mapArray(nums, (n) => `#${n}`);
// console.log(strings);

/* Example 04 Generic async loader */
// async function fetchJson<T>(url: string): Promise<T> {
//   const res = await fetch(url);
//   const data = (await res.json()) as T;
//   return data;
// }

// async function run() {
//   const jsonFile = await fetchJson<{ products: any[] }>(
//     "https://dummyjson.com/products"
//   );

//   console.log(jsonFile.products[0]);
// }

// run();

/*---------------------------------------------------------------------------*/
/* Example 05 Generic interface */
// interface ApiResponse<T> {
//   status: "ok" | "error";
//   data: T;
//   enum: "Panding" | "Done" | "Reject" | "On Going";
// }

// const resp: ApiResponse<{ id: number, name: string }> = {
//   status: "ok",
//   enum: "On Going",
//   data: {
//     id: 1,
//     name: "afsar",
//   },
// };

// console.log(resp);

/* Example 06 Generic type alias for Either */
// type Either<L, R> = { tag: "left"; left: L } | { tag: "right"; right: R };

// const val1: Either<string, number> = { tag: "right", right: 42 };
// const val2: Either<string, number> = { tag: "left", left: "error" };
// console.log(val1);
// console.log(val2);

/* Example 07 Generic function type in an interface */
// interface Repository<T> {
//   getById(id: number): T | undefined;
//   save(item: T): void;
// }

// class InMemoryReps<T extends { id: number }> implements Repository<T> {
//   private store = new Map<number, T>();
//   getById(id: number) {
//     return this.store.get(id);
//   }
//   save(item: T) {
//     this.store.set(item.id, item);
//   }
// }

// // const boj = new InMemoryReps<{ id: number; FullName: string; age: number }>();
// type Person = { id: number; FullName: string; age: number };
// const boj = new InMemoryReps<Person>();
// boj.save({ id: 1, FullName: "Afsar Tanvir", age: 25 });
// console.log(boj.getById(1));

/* Example 08 Generic Classes (multiple examples) */
// Simple Stack<T>
// class Stack<T> {
//   private Name01: string = "Simple Stack<T>";
//   #items: T[] = [];
//   push(item: T) {
//     this.#items.push(item);
//   }
//   pop(): T | undefined {
//     return this.#items.pop();
//   }
//   peek(): T | undefined {
//     return this.#items[this.#items.length - 1];
//   }
// }

// const s = new Stack<number>();
// s.push(11);
// s.push(31);
// s.push(21);
// console.log(s.peek());
// console.log(s.pop());
// console.log(s.peek());
// console.log(s);
// normally if you run js file,
// it will show Name01 even though it's private in ts files,
// but in js there is no private, protected so it's run fine

// Generic Repository with constraint
// class Repository8b<T extends { id: number }> {
//   private items = new Map<number, T>();
//   add(item: T) {
//     this.items.set(item.id, item);
//   }
//   get(id: number): T | undefined {
//     return this.items.get(id);
//   }
// }

// type User8b = { id: number; name: string ; age: number};
// const userRepo8b = new Repository8b<User8b>();
// userRepo8b.add({ id: 1, name: "Afsar Tanvir 8b", age: 24 });
// console.log(userRepo8b);

// Generic Factory (constructor constraint)
type Constructor8c<T> = new (...args: any[]) => T;
function createInstance8c<
  Ctor extends Constructor8c<any>,
  T extends InstanceType<Ctor>
>(ctor: Ctor, ...args: ConstructorParameters<Ctor>): T {
  return new ctor(...args) as T;
}

class Person8c {
  constructor(public name: string) {}
}
const p8c = createInstance8c(Person8c, "Tanvir 8c");
console.log(p8c);

class Car8c {
  constructor(public brand: string, public year: number) {}
}
const car8c = createInstance8c(Car8c, "Toyota", 2025);
console.log(car8c);
