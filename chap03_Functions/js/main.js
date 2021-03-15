// let square = function (num) {
//   return num * num;
// };

// console.log(square(4));
// ---------------------------------------------------------------------------

// A function without parameter
// const makeNoise = function () {
//   console.log('Pling!');
// };

// makeNoise();

// A function has two parameters
// const power = function (base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// };

// Calling function
// console.log(power(4, 2));
// ---------------------------------------------------------------------------

// BINDINGS AND SCOPES
// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z); // ->60
// }

// y is not visible heare
// console.log(x + z); // -> 40

// const halve = function (n) {
//   return n / 2;
// };

// let n = 10;
// console.log(halve(100));
// console.log();

// NESTED SCOPE
// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmout = amount * factor;
//         if (ingredientAmout > 1) {
//             unit += 's';
//         }
//         console.log(`${ingredientAmout} ${unit} ${name}`);
//     };

//     ingredient(1, 'can', 'chickpeas');
//     ingredient(0.25, 'cup', 'tahini');
//     ingredient(0.25, 'cup', 'lemon juice');
//     ingredient(1, 'clove', 'garlic');
//     ingredient(2, 'tablespoon', 'olive oil');
//     ingredient(0.5, 'teaspoon', 'cumin');
// };

// hummus(1);
// hummus(2);
// ---------------------------------------------------------------------------

// FUNCTIONS AS VALUES
// let launchMissiles = function () {
//     missileSystem.launch('now');
// };

// if (safeMode) {
//     launchMissiles = function () {
//         /* Do nothing */
//     };
// }
// ---------------------------------------------------------------------------

// DECLARATION NOTATION
// function square(x) {
//     return x * x;
// }

// let result = square(4);
// console.log(result);

// console.log('The future says: ', future());

// function future() {
//     return "You'll never flying a car.";
// }
// ---------------------------------------------------------------------------

// ARROW FUNCTION

// Normal function
// const power = function (base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// Arrow function
// const power = (base, exponent) => {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// };

// console.log(power(4, 3));

// When there is only one parameter name,
// you can omit the parentheses around the parameter list
// const square = (num) => {
//     return num * num;
// };

// console.log(square(4));

// When an arrow function has no parameters at all,
// its parameter list is just an empty

// const horn = () => {
//     console.log('Toot');
// };

// horn();
// ---------------------------------------------------------------------------

// THE CALL STACK
// function greet(who) {
//     console.log(`Hello ${who}`);
// }

// greet('Harry');
// console.log('Bye');

// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }

// console.log(chicken() + ' came first');
// ---------------------------------------------------------------------------

// OPTIONAL ARGUMENTS
// function square(num) {
//     return num * num;
// }

// Pass too many arguments
// console.log(square(4, true, 'abcd'));

// function power(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }

// Pass too few arguments
// console.log(power(4));

// function minus(a, b) {
//     if (b === undefined) {
//         return -a;
//     }
//     return a - b;
// }

// console.log(minus(10));
// console.log(minus(12, 8));

// function square(base, exponent = 2) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(square(4, 2));
// console.log(square(4));

// console.log('a', 'b', 122);
// ---------------------------------------------------------------------------

// CLOSURE
// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

// Another example:
// function multiplier(factor) {
//     return (number) => number * factor;
// }

// let twice = multiplier(2);
// // console.log(twice(5));
// console.log(twice(10));
// ---------------------------------------------------------------------------

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
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // -> 7
console.log(add10(2)); // -> 12
