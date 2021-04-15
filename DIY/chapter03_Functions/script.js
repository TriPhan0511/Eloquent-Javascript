// FUNCTIONS
// Functions are the bread and butter of Javascript programming.
// The concept of wrapping a piece of program in a value has many uses.
// It gives us a way to structure a larger program, to reduce repetition,
// to associate names with subprograms, and to these subprograms from each other.
// -----------------------------------------------------------------------------------------

// 1. DEFINING A FUNCTION
// A function is a regular binding where the value of the binding is a function.

// For example, this code defines square to refer a function that
// produces the square of a given number.
// const square = function (x) {
//   return x * x;
// };

// console.log(square(12)); // 144

//  A function is created with an expression that starts with the keyword function.
// Functions have a set of parameters (in this case, only x) and a body, which
// contains the statements that are to be execuated when the function is called.

// The function body of a function created this way must always be wrapped in braces,
// even when it consists of only a single statement.

// A function can have multiple parameters or no parameters at all.

// In the following example, makeNoise does not list any parameter names,
// whereas power lists two

// const makeNose = function () {
//   console.log('Pling!');
// };

// // Calling the function makeNoise()
// makeNose();

// const power = function (base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };
// ------------------------------------------------

// const power = function (base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// };

// // Calling the function power
// console.log(power(2, 0)); // 1
// console.log(power(2, 1)); //2
// console.log(power(2, 2)); // 4
// console.log(power(2, 3)); // 8
// console.log(power(4, 2)); // 16

// Some functions produce a value, such as power and square, and some don't.
// such as makeNoise, whose only result is a side effect.

// A return statement determines the value the function returns. When control
// comes across such a statement, it immediately jumps out of the current function
// and gives the returned value to the code that called the function.

// A return keyword without an expression after it will cause the function to
// return undefined.
// Functions that don't have a return statement at all, such as makeNoise,
// similarly return undefined.

// Parameters to a function bahave like regular bindings, but their initial values
// are given by the caller of the function, not the code in the function itself.
