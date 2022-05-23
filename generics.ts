// Generics provide a way to make components work with any data type and not restrict to one data type.
// Generics can be applied to the function's argument, a function's return type, and a class fields or methods.



// example-1
// function getArray(items : any[] ) : any[] {
//     return new Array().concat(items);
// }
// let myNumArr = getArray([100, 200, 300]);
// let myStrArr = getArray(["Hello", "World"]);
// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK
// myNumArr.push("Hi"); // OK
// myStrArr.push(500); // OK
// console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
// console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

// function accepts an array of type any. 
// Generics uses the type variable <T>, a special kind of variable that denotes types.
// The type variable remembers the type that the user provides and works with that particular type only.
// This is called preserving the type information.

// solution-1
// function getArray<T>(items: T[]): T[] {
//     return new Array<T>().concat(items);
// }
// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(["Hello", "World"]);
// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error


// In the above example, the type variable T is specified with the function in the angle brackets getArray<T>. 
// The type variable T is also used to specify the type of the arguments and the return value. 
// This means that the data type which will be specified at the time of a function call, will also be the data type of the arguments and of the return value.

// Generic type can also be used with other non-generic types. like:-
function displayType<T>(id: T, name: string): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number>(1, "Steve"); // T = number, string(already declared)

// if generics is used with other non-generic types.

// it also bounds the boundaries for general array methods which are available for every of them datatype.

// generics array methods

function displayNames<T>(name: T[]): void {
    console.log(name.join("-"));
}
displayNames<string>(["steve", "billy"])  //T =string



// example-2
class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

function display<T extends Person>(per: T): void { //it can be used as extends for datatypes
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");//Compiler Error