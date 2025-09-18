/*
An interface defines a contract.
A class that implements an interface must define all required properties and methods.
*/

interface Vehicle {
  brand: string;
  speed: number;
  drive(): void;
}

class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

// we also can write 
// class Car implements Vehicle {
//   brand: string;
//   speed: number;

//   constructor(brand: string, speed: number) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive(): void {
//     console.log(`${this.brand} is driving at ${this.speed} km/h`);
//   }
// }

const car1 = new Car("Toyota", 120);
car1.drive(); // Toyota is driving at 120 km/h


const obj = {
    Name: "Numin"
}

const obj2 = Object.create(obj);
obj2.Name = "afsar";
console.log(obj.Name);

const obj3 = {...obj};
obj3.Name = "Tanvir"
console.log(obj.Name);

const obj4 = obj;
obj4.Name = "Faysal";
console.log(obj.Name);