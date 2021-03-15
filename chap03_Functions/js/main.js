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

console.log('a', 'b', 122);
