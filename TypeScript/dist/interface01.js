/*
Interface
Defining object shapes
Working with OOP classes
You want declaration merging
*/
const user01 = {
    id: 1,
    name: "Tanvir",
    isAdmin: true,
};
console.log(user01);
console.log(user01.isAdmin);
const emp01 = {
    name: "Alice",
    age: 25,
    employeeId: 101,
    department: "CSE"
};
console.log("Department of Employee 01: " + emp01.department);
console.log("Information of Employee 01: ", emp01);
const dev01 = {
    city: "Dhaka",
    name: "Bob",
    age: 30,
    salary: 30000,
    country: "Bangladesh",
    skills: ["Javascript", "Node.js"],
};
console.log("Information of Developer 01: " + JSON.stringify(dev01));
const dev02 = {
    country: "India",
    city: "delhi"
};
export {};
//# sourceMappingURL=interface01.js.map