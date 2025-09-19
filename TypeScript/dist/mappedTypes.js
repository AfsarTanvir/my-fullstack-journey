/* 3. Mapped Types
Mapped types allow you to create new types by transforming existing ones. */
/* (i) Partial<T> -> Makes all properties optional. */
const u1 = { id: 1 }; // ok (others optional)
console.log(u1);
function updateUser(user, updates) {
    return { ...user, ...updates };
}
const updated = updateUser({ id: 1, name: "Tanvir", age: 22 }, { age: 24, name: "Afsar Tanvir" });
console.log(updated); // { id: 1, name: "Tanvir", age: 23 }
const s = { darkMode: true, language: "en" }; // showes error if one them are missing
console.log(s);
function init(settings) {
    console.log(settings.darkMode, settings.language);
}
// init({ darkMode: true }); ❌ Error
init({ darkMode: true, language: "bn" });
const config = {
    apiUrl: "https://api.com",
    port: 8080,
};
// config.port = 3000; // ❌ Error: readonly
console.log(config);
class App {
    settings;
    constructor(config) {
        this.settings = config;
    }
    getConfig() {
        return this.settings;
    }
}
const app = new App({ apiUrl: "x.com", port: 80 });
console.log(app.getConfig());
const nu1 = { id: 1, name: null, age: 22 };
const nu2 = { id: null, name: "Afsar", age: 24 }; //even though you can keep variables null, but have to assign all
console.log(nu1);
console.log(nu2);
const x1 = { a: "afsar", c: "SEC", d: "CSE" };
// { a: string; c: string }
console.log(x1);
export {};
//# sourceMappingURL=mappedTypes.js.map