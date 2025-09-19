/* 2. Intersection Types (&)
An intersection type combines multiple types into one.
The value must satisfy all types simultaneously. */
/* Example A — Combining Types */
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff: Staff = {
  // Staff must have both name and employeeId.
  name: "Tanvir",
  employeeId: 101,
};
console.log(staff);

/* Example B — Multiple Mixins */
type Logger = { log(): void };
type ErrorHandler = { handleError(err: Error): void };

type Service = Logger & ErrorHandler;

const myService: Service = {
  log: () => console.log("Logging..."),
  handleError: (err) => console.error("Error:", err.message),
};

console.log(myService);
myService.log();
myService.handleError(new Error("Afsar"));

/* Example C — Function Type Intersection */
type Adder = (a: number, b: number) => number;
type LoggerFn = (msg: string) => void;

// Impossible at runtime, but you can combine them as overload-like
type FancyFn = Adder & LoggerFn;

const fn: FancyFn = ((x: any, y?: any) => {
  if (typeof x === "string") console.log("Log:", x);
  else return x + (y ?? 0);
}) as FancyFn;

fn("hello"); // Log: hello
console.log(fn(2, 3)); // 5
