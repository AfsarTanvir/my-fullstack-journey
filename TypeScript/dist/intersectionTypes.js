const staff = {
    // Staff must have both name and employeeId.
    name: "Tanvir",
    employeeId: 101,
};
console.log(staff);
const myService = {
    log: () => console.log("Logging..."),
    handleError: (err) => console.error("Error:", err.message),
};
console.log(myService);
myService.log();
myService.handleError(new Error("Afsar"));
const fn = ((x, y) => {
    if (typeof x === "string")
        console.log("Log:", x);
    else
        return x + (y ?? 0);
});
fn("hello"); // Log: hello
console.log(fn(2, 3)); // 5
export {};
//# sourceMappingURL=intersectionTypes.js.map