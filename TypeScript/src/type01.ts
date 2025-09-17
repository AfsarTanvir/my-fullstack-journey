/* Example 01 */
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const user01: User = {
  id: 2,
  name: "Afsar Tanvir",
};
console.log("Information Of User 01: ", user01);

/* Example 02 */
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
};

type Engineer = Person &
  Employee & {
    skills: string[];
  };

const eng01: Engineer = {
  name: "Charlie",
  age: 28,
  employeeId: 200,
  skills: ["React", "TypeScript"],
};

console.log("Engineer 01", eng01);