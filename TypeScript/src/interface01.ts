/* 
Interface
Defining object shapes
Working with OOP classes
You want declaration merging
*/

/* Example 01 */
interface User {
    id: number;
    name: string;
    isAdmin?: boolean;
}

const user01: User = {
  id: 1,
  name: "Tanvir",
  isAdmin: true,
};

console.log(user01);
console.log(user01.isAdmin);


/* Example 02 */
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const emp01: Employee = {
    name: "Alice",
    age: 25,
    employeeId: 101,
    department: "CSE"
}

console.log("Department of Employee 01: "+ emp01.department);
console.log("Information of Employee 01: ", emp01);

/* Example 03 */
interface Address {
    city: string;
    country: string;
}

interface Developer extends Person, Address {
    skills: string[];
}

interface Developer {
    salary?: number;
}

const dev01: Developer = {
    city: "Dhaka",
    name: "Bob",
    age: 30,
    salary: 30000,
    country: "Bangladesh",
    skills: ["Javascript", "Node.js"],
}
console.log("Information of Developer 01: "+ JSON.stringify(dev01));

const dev02: Address = {
    country : "India",
    city: "delhi"
}