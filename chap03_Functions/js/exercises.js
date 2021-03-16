/**
 * Exercise 01
 * MINIMUM
 * Write a function min that takes two arguments and return their minimum.
 */

// function min(num1, num2) {
//     let result = num1;
//     if (num1 > num2) {
//         result = num2;
//     }
//     return result;
// }
// ------------------------------------

// function min(num1, num2) {
//     if (num1 < num2) {
//         return num1;
//     }
//     return num2;
// }
// ------------------------------------

// function min(num1, num2) {
//     return num1 < num2 ? num1 : num2;
// }

// Test
// console.log(min(1, 2)); // 1
// console.log(min(1, 2)); // 1
// console.log(min(2, 1)); // 1
// console.log(min(1, -100)); // -100
// console.log(min(2, 5)); // 2
// // --------------------------------------------------------------------------------------

// let min = (num1, num2) => {
//     if (num1 < num2) {
//         return num1;
//     }
//     return num2;
// };
// ------------------------------------

let min = (num1, num2) => {
    return num1 < num2 ? num1 : num2;
};

// Test
// console.log(min(10, 20)); // 10
// console.log(min);
// console.log(typeof min);
