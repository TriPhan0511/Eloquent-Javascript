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
// --------------------------------------------------------------------------------------

/**
 * Exercise 03
 * BEAN COUNTING
    You can get the Nth character, or letter, from a string by writing "string"[N].
    The returned value will be a string containing only one character (for example,
    "b"). The first character has position 0, which causes the last one to be found at
    position string.length - 1. In other words, a two-character string has length
    2, and its characters have positions 0 and 1.

    Write a function countBs that takes a string as its only argument and returns
    a number that indicates how many uppercase “B” characters there are in the
    string.
    Next, write a function called countChar that behaves like countBs, except
    it takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase “B” characters). Rewrite countBs to
    make use of this new function.
 */

// // Function
// function countBs(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         const chr = string[i];
//         if (chr === 'B') {
//             count++;
//         }
//     }
//     return count;
// }

// // Testing
// console.log(countBs('BaaBnn')); // 2
// console.log(countBs('BB3Bnn')); // 3
// console.log(countBs('BBbBnn')); // 3
// console.log(countBs('BBbBnnbbB')); // 4
// -------------------------------------------

// Function
// function countChar(string, char) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         const chr = string[i];
//         if (char === chr) {
//             count++;
//         }
//     }
//     return count;
// }

// // Testing
// console.log(countChar('AAAa', 'a')); // 1
// console.log(countChar('AaAAa', 'a')); // 2
// console.log(countChar('aAaAAabbbb', 'a')); // 3
// ------------------------------------------------------------

// SOLUTION FROM WRITER
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
