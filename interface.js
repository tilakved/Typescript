"use strict";
// The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".
// An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
// ----------------------------------------------------------- Interface for Array Type -----------------------------------------------------------
// An interface can also define the type of an array where you can define the type of index as well as values.
// interface NumList {
//     [index: number]: number
// }
// let numArr: NumList = [1, 2, 3]; //only numbers are valid in numlist
// numArr[0];
// numArr[1];
// interface IStringList {
//     [index: string]: string
// }
// let strArr: IStringList = {};
// strArr["TS"] = "1"; //0 index
// strArr["JS"] = "JavaScript";//1 index becomes "JS" , here index is string format
// // console.log(numArr,strArr["TS"])
// console.log(strArr[1]) //output = undefined
// console.log(strArr["JS"]) //output = "JavaScript"
// ----------------------------------------------------------- Optional Property -----------------------------------------------------------
// interface IEmployee {
//     empCode: number;
//     empName: string;
//     empDept?:string; // ? says it is optional property it may or may not be define this property 
// }
// let empObj1:IEmployee = {   // OK,  optional is not used
//     empCode:1,
//     empName:"Steve"
// }
// let empObj2:IEmployee = {    // OK,  optional is used
//     empCode:1,
//     empName:"Bill",
//     empDept:"IT"
// }
// ----------------------------------------------------------- Read only Properties -----------------------------------------------------------  
// This means that once a property is assigned a value, it cannot be changed!
// interface Citizen {
//     name: string;
//     readonly SSN: number;
// }
// let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }
// personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error
// ----------------------------------------------------------- Extending Interfaces -----------------------------------------------------------  
// This makes writing interfaces flexible and reusable.
// interface IPerson {
//     name: string;
//     gender: string;
// }
// interface IEmployee extends IPerson {// extends here
//     empCode: number;
// }
// let empObj: IEmployee = { //should have all properties of both 
//     empCode: 1,
//     name: "Bill",
//     gender: "Male"
// }
// So, objects of IEmployee must include all the properties and methods of the IPerson interface otherwise, the compiler will show an error.
// ----------------------------------------------------------- Implementing an Interface -----------------------------------------------------------  
// In the above example, the IEmployee interface is implemented in the Employee class using the the implement keyword. 
// The implementing class should strictly define the properties and the function with the same name and data type. 
// If the implementing class does not follow the structure, then the compiler will show an error.
// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary:(empCode: number) => number;
// }
// class Employee implements IEmployee { 
//     empCode: number;
//     name: string;
//     constructor(code: number, name: string) { 
//         this.empCode = code;
//         this.name = name;
//     }
//     getSalary(empCode:number):number { 
//         return 20000;
//     }
// }
// let emp = new Employee(1, "Steve");
// Of course, the implementing class can define extra properties and methods, but at least it must define all the members of an interface.
