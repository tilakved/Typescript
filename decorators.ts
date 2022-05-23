// we can enable decorators by uncommenting ("experimentalDecorators": true) from (tsconfig.json).
// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.


// -------------Decorator Evaluation 
// There is a well defined order to how decorators applied to various declarations inside of a class are applied:

// 1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
// 2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
// 3. Parameter Decorators are applied for the constructor.
// 4.   Class Decorators are applied for the class.

// -------------Class Decorators
// A Class Decorator is declared just before a class declaration.