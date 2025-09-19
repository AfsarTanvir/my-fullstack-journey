/* Example 09 Generic Constraints & extends (multiple examples) */
/* Example A — Constrain to object having .length */
// function logLength9a<T extends { length: number }>(x: T): T {
//   console.log(x.length);
//   return x;
// }

// logLength9a("Hello");
// logLength9a([1,2,3]);
// logLength9a({age: 24, length: 10});
// logLength9a({age: 24, name: "Afsar"}) there is no length atrivute in object
// logLength9a(123) // Error: number has no 'length'

/* Example B — keyof + constraint — type-safe property getter */
// function prop9b<T, K extends keyof T> (obj: T, key: K): T[K] {
//     return obj[key];
// }

// const person9b = { id: 92, name: "9b, Example 9B — keyof + constraint — type-safe property getter"};
// const name9b = prop9b(person9b, "name");
// console.log(name9b);
/* const bad = prop(person, "age"); // Error: "age" not in person */

/* Example C — Constrain to union / specific shape */
// type Primitive9c = string | number | boolean;

// function toString9c<T extends Primitive9c>(value: T): string {
//   return String(value);
// }

// console.log(toString9c("x"));
// console.log(toString9c(42), 42);
/* toString9c({}); // error */

/* Example D — Constructor constraint for factories */
// function factory9d<T extends { new (...args: any[]): {} }>(ctor: T) {
//   return new ctor();
// }

// // Or typed:
// function create9d<T>(c: new () => T): T {
//   return new c();
// }

/* Example 10 Advanced patterns (several useful techniques) */
/* A — Multiple type params & defaults */
// function combine<T = string, U = number>(a: T, b: U): [T, U] {
//   return [a, b];
// }

// const pair10a = combine("a", 1); // inferred [string, number]
// console.log(pair10a);

/* B — Conditional & infer (briefly, useful with generics) */
// type ElementType<T> = T extends (infer U)[] ? U : T;

// // usage:
// type A = ElementType<string[]>; // string
// type B = ElementType<number>; // number

/* C — Mapped types + generics (make all props optional) */
/* D — Generic with Record, Partial, Required */
// type MyPartial<T> = { [K in keyof T]?: T[K] };

// type User = { id: number; name: string };
// type PartialUser = MyPartial<User>; // { id?: number; name?: string }

// type PageData = Record<'title'|'content', string>;
// const page: PageData = { title: "Hi", content: "..." };

// type Some = Partial<User>;
// type AllRequired = Required<Partial<User>>;

/* Example 11 Real-world examples & use-cases */
/* Example A — Type-safe event emitter */
// type Events = {
//   login: { userId: number };
//   logout: {};
// };

// class Emitter<E extends Record<string, any>> {
//   private handlers: { [K in keyof E]?: ((payload: E[K]) => void)[] } = {};
//   on<K extends keyof E>(event: K, cb: (payload: E[K]) => void) {
//     (this.handlers[event] ||= []).push(cb);
//   }
//   emit<K extends keyof E>(event: K, payload: E[K]) {
//     (this.handlers[event] || []).forEach((h) => h(payload));
//   }
// }

// const em = new Emitter<Events>();
// em.on("login", (p) => console.log(p.userId));
// // em.on("login", (p: string) => {}); // Error: payload is not string

/* Example B — Generic HTTP client */
// async function apiGet<T>(url: string): Promise<T> {
//   const r = await fetch(url);
//   return r.json() as Promise<T>;
// }

/* const users = await apiGet<User[]>('/api/users'); */
/* 
11 Tips, best practices & pitfalls

Best practices
Prefer generics over any for reusable, type-safe code.
Start with concrete types; introduce generics when you need reuse.
Name type params clearly when helpful (TItem, TKey, TResult) for readability.

Pitfalls
Overusing generics can make types hard to read. Keep them simple.
Avoid unnecessary generic constraints that block inference.
Be careful with variance (arrays are bivariant in some cases in TS — but treat them conservatively).
When not to use generics
When a concrete type suffices.
When unknown + runtime checks or overloads are more appropriate.

12 Quick cheat-sheet (common patterns)
Generic function: function fn<T>(arg: T): T { ... }
Constrained generic: function fn<T extends X>(arg: T) { ... }
Multiple params: fn<T, U>(a: T, b: U) => [T, U]
Generic class: class Box<T> { value: T }
Keyof: K extends keyof T for safe property access
Constructor constraint: new (...args:any[]) => T

13 Short summary
Generics give you typed, reusable building blocks. 
Start with simple generic functions, then apply them to interfaces/classes. 
Use extends to constrain capabilities and keyof to make property-safe utilities. 
Combine generics with mapped/conditional types for very powerful APIs — but keep readability in mind.
*/