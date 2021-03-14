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
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // ->60
}

// y is not visible heare
console.log(x + z); // -> 40
