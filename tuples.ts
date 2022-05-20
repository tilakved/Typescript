// tuple is multiple data types variable
var person: [number, string, boolean] = [1, "Steve", true]; //direct declare
console.log(person[0])

// redefining can be done as
person[0] = 1325649870
person[1] = "true"
person[2] = true

// tuple array 
var employee1: [number, string][];
employee1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// Add Elements into Tuple
var employee2: [number, string] = [1, "Steve"];
employee2.push(2, "Bill"); 
console.log(employee2); //Output: [1, 'Steve', 2, 'Bill']


// we can use array methods
var employee3: [number, string] = [1, "Steve"];

// retrieving value by index and performing an operation 
employee3[1] = employee3[1].concat(" Jobs"); 
console.log(employee3); //Output: [1, 'Steve Jobs']