
// interface IPerson {
//     name: string;
//     display(): void;
// }

// interface IEmployee {
//     // [data: string]: any;
//     empCode: number;
// }

// class Employee implements IPerson, IEmployee { //implements
//     empCode: number;
//     name: string;

//     constructor(empcode: number, name: string) {
//         this.empCode = empcode;
//         this.name = name;
//     }

//     display(): void {
//         console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
//     }
// }

// let per: IPerson = new Employee(100, "Bill");
// per.display(); // Name = Bill, Employee Code = 100

// let emp: Employee = new Employee(500, "Billy");
// emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee' so add [x: string]: any; in IEmployee

// let emp1 = new Employee(50, "Bill");
// emp1.display();//from combined class Employee


// var person: [number, string, boolean] = [1, "Steve", true];
// console.log(person[2])
// person[2] = false
// console.log(person[2])


// var arr: [number, string] = [1, "tilak"]
// arr[1] = arr[1].concat(" 1")
// console.log(arr[1])

// var employee1: [number, string][];
// employee1 =[[1,"tilak"],[2,"ved"]]

// let x = employee1[1][1].concat(" zxdfkjn")
// employee1[1][1] = x
// console.log(employee1)

// let y = employee1.push([3,  "zxdfkjn"])
// console.log(employee1)

// enum Status {
//     Active = "Active",
//     inactive = 5,
//     progress
// }
// console.log(Status.progress)//returns 6