/**
 * EXERCISE 01:  MINIMUM
 *
 * Write a function that takes two arguments and return their minimum
 */

// Function: Find minimum between two numbers
// function min(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// // Test
// console.log(min(1, 1)); // 1
// console.log(min(1, 2)); // 1
// console.log(min(2, 1)); // 1
// console.log(min(1.2, 4.5)); // 1.2
// ------------------------------------------

// SOLUTION FRON THE AUTHOR
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// ----------------------------------------------------------------------------------------------

/**
 * EXERCISE 02: RECURSION
 *
 * We've seen that % (the remainder operator) can be used to test whether a number is even or
 * odd by using % 2 to see whether it's divisible by two.
 *
 * Here's another way to define whether a positive while number is even or odd:
 *  Zero is even
 *  One is odd
 *  For any other number N, its evenness is the same as N - 2.
 *
 * Define a recursive function isEven corresponding to this description. The function should
 * accept a single parameter (a positive, whole number) and return a Boolean.
 *
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
 */

// Function
// function isEven(number) {
//   if (number < 0) {
//     number = -number;
//   }
//   if (number === 0) {
//     return true;
//   }
//   if (number === 1) {
//     return false;
//   }
//   return isEven(number - 2);
// }

// -----------------------------------------

// SOLUTION FROM THE AUTHOR
// function isEven(n) {
//   if (n == 0) {
//     return true;
//   } else if (n == 1) {
//     return false;
//   } else if (n < 0) {
//     return isEven(-n);
//   } else {
//     return isEven(n - 2);
//   }
// }

// // Test
// console.log(isEven(0)); // true
// console.log(isEven(1)); // false
// console.log(isEven(50)); // true
// console.log(isEven(75)); // false

// console.log(isEven(-1)); // false
// ----------------------------------------------------------------------------------------------

/**
 * EXERCISE 03: BEAN COUNTING
 *
 * You can get the Nth character, or letter, from a string by writing "string"[N].
 * The returned value will be a string contain only one character (for example, "b").
 * The first character has position 0, which causes the last one can be found at
 * position string.length - 1. In other words, a two-character string has length 2,
 * and its characters have positions 0 and 1.
 *
 * Write a function countBs that takes a string as its only argument and returns a number
 * that indicates how many uppercase "B" characters there are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it takes
 * a second argument that indicates the character that is to be counted (rather than
 * counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
 *
 */

// Function
// function countBs(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'B') {
//       count++;
//     }
//   }
//   return count;
// }

// Rewrite function countBs
// function countBs(string) {
//   return countChar(string, 'B');
// }

// // Test
// console.log(countBs('Hello')); // 0
// console.log(countBs('Bell')); // 1
// console.log(countBs('acB')); // 1
// console.log(countBs('acb')); // 0
// console.log(countBs('BacbB')); // 2
// console.log(countBs('zaBBBcbB')); // 4

// function countChar(string, char) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// ---------------------------------------------------------

// SOLUTION FRON THE AUTHOR
// Function
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

// Function
function countBs(string) {
  return countChar(string, 'B');
}

// Test
console.log(countBs('BBC')); // 2
console.log(countChar('kakkerlak', 'k')); // 4
