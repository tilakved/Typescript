"use strict";
// we pass it all the values in the array using the spread syntax and the array name — ...numbers
//** A spread argument must either have a tuple type or be passed to a rest parameter.
// only in JS we can pass array  not in typescript
function Add(x, y, z) {
    return x + y + z;
}
// let numbers = [1, 2, 3];                                         //will not work
var args = [0, 1, 2]; //will work
console.log(Add.apply(void 0, args));
