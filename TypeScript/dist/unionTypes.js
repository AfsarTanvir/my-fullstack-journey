/* A union type means a value can be one of several types. */
/* Example A — Basic Union */
let id; // hoi eta (string) noito number // id can be string or number
id = "abc"; // ✅ ok
id = 123; // ✅ ok
// id = true;
/* Example B — Union with Function Parameter
   Here we use type narrowing (runtime checks) to handle each union case. */
function printId(id) {
    if (typeof id === "string") {
        console.log("ID (string):", id.toUpperCase());
    }
    else {
        console.log("ID (number):", id.toFixed(2));
    }
}
printId("abc"); // ID (string): ABC
printId(42); // ID (number): 42.00
function speak(pet) {
    if (pet.kind === "dog")
        pet.bark();
    else
        pet.meow();
}
const dog = { kind: "dog", bark: () => console.log("Woof!") };
speak(dog); // Woof!
export {};
//# sourceMappingURL=unionTypes.js.map