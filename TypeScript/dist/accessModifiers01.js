/*
Access Modifiers:
public      → everywhere
private     → inside class only
protected   → class + subclasses
Readonly    → assigned only once.
Static      → belongs to class, not instances.
Interfaces  → define contracts → classes must implement them.
*/
class Person {
    name;
    age;
    country;
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    showDetails() {
        return `${this.name} is ${this.age} year old`;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, country, grade) {
        super(name, age, country);
        this.grade = grade;
    }
    showStudentDetails() {
        return `${this.name} from ${this.country} is in grade ${this.grade}`;
    }
}
const p1 = new Person("Tanvir", 22, "Bangladesh");
console.log(p1.name);
console.log(p1.showDetails());
const s1 = new Student("Afsar", 25, "Bangladesh", "A");
console.log(s1.grade);
console.log(s1.showDetails());
console.log(s1.showStudentDetails());
export {};
/*
public      → Accessible from anywhere.
private     → Accessible only within the class.
protected   → Accessible within the class and subclasses.
*/ 
//# sourceMappingURL=accessModifiers01.js.map