// CLOSURE (FROM MDN)
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function's scope
 * from an inner function.
 * In Javascript, closures are created everytime a function is created,
 * at function creation time.
 */

/**
 * A closure is the combination of a function and the lexical environment
 * within which that function was declared.
 * This environment consists of any local variables that were in-scope
 * at the time the closure was created.
 */

// 1. Lexical scoping
// Example:
// (Note: Nested function have access to variables declared in their outer scope)
// function init() {
//     let name = 'Mozilla'; // name is a local variable created by init
//     // displayName() is the inner function,
//     // a closure use variable declared in the parent function
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();
// ---------------------------------------------------------------------------------

// 2. Closure
// Example 1:
// function makeFunc() {
//     let name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// let myFunc = makeFunc();
// myFunc();

// Example 2:
// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);

// console.log(add5(2)); // -> 7
// console.log(add10(2)); // -> 12
// ---------------------------------------------------------------------------------

// 3. Practical closures
