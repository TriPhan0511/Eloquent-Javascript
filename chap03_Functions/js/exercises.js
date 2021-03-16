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

// let min = (num1, num2) => {
//     if (num1 < num2) {
//         return num1;
//     }
//     return num2;
// };
// ------------------------------------

// let min = (num1, num2) => {
//     return num1 < num2 ? num1 : num2;
// };

// Test
// console.log(min(10, 20)); // 10
// console.log(min);
// console.log(typeof min);
// --------------------------------------------------------------------------------------

/**
 * Exercise 02
 * RECURSION
 * The way to define whether a positive number is even or odd:
 *  - Zero is even
 *  - One is odd
 *  - For any other number N, its evenness is the same as N - 2.
 */

// function isEven(num) {
//     if (num == 0) {
//         return true;
//     }
//     if (num == 1 || num < 0) {
//         return false;
//     }
//     return isEven(num - 2);
// }
// ----------------------------

// SOLUTION FROM WRITER
// function isEven(n) {
//     if (n == 0) {
//         return true;
//     } else if (n == 1) {
//         return false;
//     } else if (n < 0) {
//         return isEven(-n);
//     } else {
//         return isEven(n - 2);
//     }
// }

// // Test
// console.log(isEven(0)); // true
// console.log(isEven(1)); // false
// console.log(isEven(50)); // true
// console.log(isEven(75)); // false
// console.log(isEven(-1)); // false
// console.log(isEven(-14)); // true
