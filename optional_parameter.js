"use strict";
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(1, 2, 3)); //returns 6
// notes:-
// Use the parameter?: type syntax to make a parameter optional.
// Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.
// A required parameter cannot follow an optional parameter.
// ex-
// function multiply(a: number, b?: number, c: number): number {
