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
