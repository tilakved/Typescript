"use strict";
// -----------------------------------------------------------classes-----------------------------------------------------------
// Notes:-
// A class can include the following:
// 1. Constructor
// 2. Properties
// 3. Methods
//The constructor is a special type of method which is called when creating an object. In TypeScript, the constructor method is always defined with the name "constructor".
// example:
// class Employee {
//   empCode: number;
//   empName: string;
//   constructor(code: number, name: string) { //It is not necessary for a class to have a constructor.
//     this.empCode = code;                   
//     this.empName = name;
//   }
//   displayName(): void {
//     console.log("Name = " + this.empName + ", Employee Code = " + this.empCode);
//   }
//   getSalary(): number {
//     return 20000;
//   }
// }
// let emp = new Employee(100, "Steve"); //emp = class ka object
// let emp1 = new Employee(200, "Raju");
// emp.displayName();
// console.log(emp1.getSalary()); //value from non-void function 
// -----------------------------------------------------------combining classes -----------------------------------------------------------
// --------------------------------------------------------using inheritance
// class Person { //old class
//   name: string; //old feild
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Employee extends Person { //new class + "extends" + old class
//   empCode: number; //new feild added
//   constructor(empcode: number, name: string) {
//     super(name); // The super keyword is used to call the parent constructor and passes the property values.  
//     this.empCode = empcode;
//   }
//   displayName(): void {
//     console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
//   }
// }
// let emp = new Employee(500, "Bill");
// emp.displayName(); // Name = Bill, Employee Code = 100
// notes:-
// This means that the Employee class now includes all the members of the Person class.
// We must call super() method first before assigning values to properties in the constructor of the derived class.
// --------------------------------------------------------using Implements 
// interface IPerson {
//   name: string;
//   display():void;
// }
// interface IEmployee {
// [x: string]: any;
//   empCode: number;
// }
// class Employee implements IPerson, IEmployee { //implements
//   empCode: number;
//   name: string;
//   constructor(empcode: number, name:string) {
//       this.empCode = empcode;
//       this.name = name;
//   }
//   display(): void {
//       console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
//   }
// }
// let per:IPerson = new Employee(100, "Bill");
// per.display(); // Name = Bill, Employee Code = 100
// let emp:IEmployee = new Employee(500, "Billy");
// emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee' so add [x: string]: any; in IEmployee
// let emp1 = new Employee(50, "Bill");
// emp.display();//from combined class Employee
// Notes:
// A class can implement single or multiple interfaces.
// difference in extends and implements
// 1. we can't use more than one class at once extends so we add using extends function.
// 2. we can use two or more interface at one implements so we add using implements function.
// ----------------------------------------------------------- Overriding-----------------------------------------------------------  
// class Car {
//     name: string; //carname`
//     constructor(name: string) {
//         this.name = name;
//     }
//     test = () => {
//         console.log("ti")//non-overide
//     }
//     run(speed: number = 0) { //speed-method
//         console.log("A " + this.name + " is moving at " + speed + " mph!");
//     }
// }
// class Mercedes extends Car { //only Mercedes + "extends" + car class functions
//     constructor(name: string) {
//         super(name); // we can use name without defining again
//     }
//     test = () => {
//         console.log("asdfghjkl")//overides above function because of super
//     }
//     run(speed = 150) {
//         console.log('A Mercedes started')
//         super.run(speed); // super catches parent, run is function and speed is parameter,
//     }
// }
// class Honda extends Car {
//     constructor(name: string) {
//         super(name);
//     }
//     run(speed = 100) {
//         console.log('A Honda started')
//         super.run(speed);
//     }
// }
// let mercObj = new Mercedes("Mercedes-Benz GLA");
// let hondaObj = new Honda("Honda City")
// mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
// hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!
// mercObj.test();
// Note for super:-
// in super() keyword in parenthesis only write parameters others can be accessed by fullstp in between "super.run(xyz)"
// ----------------------------------------------------------- end-----------------------------------------------------------  
