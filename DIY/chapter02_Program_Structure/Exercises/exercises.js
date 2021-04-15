/**
 * Exercise 01
 * LOOPING A TRIANGLE
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * 
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

// let str = '';
// while (str.length < 7) {
//   str += '#';
//   console.log(str);
// }
// -------------------------------------------------------------

// Function: print a triangle
// let printATriangle = function () {
//   let str = '';
//   while (str.length < 7) {
//     str = str + '#';
//     console.log(str);
//   }
// };

// Calling the function
// printATriangle();
// ---------------------------------------------------------------------------------------------------

// SOLUTION FROM THE AUTHOR
// for (let line = '#'; line.length < 8; line += '#') {
//   console.log(line);
// }

// ---------------------------------------------------------------------------------------------------

/**
 * Exercise 02
 * FIZZBUZZ
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
 * and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that
 * are that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
 * divsible by only one of those).
 */

// Version 1
// let fizzBuzz1 = function () {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// Calling the function
// fizzBuzz1();

// Version 2
// let fizzBuzz2 = function () {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// Calling the function
// fizzBuzz2();
// ---------------------------------------------------------------------------------------------------

// SOLUTUON FROM THE AUTHOR
// for (let n = 1; n <= 100; n++) {
//   let output = '';
//   if (n % 3 == 0) {
//     output = 'Fizz';
//   }
//   if (n % 5 == 0) {
//     output += 'Buzz';
//   }
//   console.log(output || n);
// }

// ---------------------------------------------------------------------------------------------------

/**
 * Exercise 03
 * CHESSBOARD
 * Write a program that creates a string represents an 8x8 grid, using newline characters to
 * separate lines. At each position of the grid there is either a space or a "#" character.
 * The characters should form a chessboard.
 * 
 * Passing this string to console.log should show something like that:
 * 
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
  
  * When you have a program that generates this pattern, define a binding size = 8 and
  * change the program so that it works for any size, outputting a grid of the given 
  * width and height.
 */

// Function
// let printHash = function (size) {
//   size = Number(size);
//   for (let i = 0; i < size; i++) {
//     let str = '';
//     if (i % 2 == 0) {
//       for (let j = 0; j < size; j++) {
//         if (j % 2 == 0) {
//           str += ' ';
//         } else {
//           str += '#';
//         }
//       }
//     } else {
//       for (let j = 0; j < size; j++) {
//         if (j % 2 == 0) {
//           str += '#';
//         } else {
//           str += ' ';
//         }
//       }
//     }
//     console.log(str + '\n');
//   }
// };

// Calling the function
// printHash(8);
// ---------------------------------------------------

// // printEven
// let even = function (num) {
//   let str = '';
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       str += ' ';
//     } else {
//       str += '#';
//     }
//   }
//   return str;
// };

// // printOdd
// let odd = function (num) {
//   let str = '';
//   for (let i = 0; i < num; i++) {
//     if (i % 2 == 0) {
//       str += '#';
//     } else {
//       str += ' ';
//     }
//   }
//   return str;
// };

// // printHash2
// let printHash2 = function (size) {
//   for (let i = 0; i < size; i++) {
//     let str = '';
//     if (i % 2 == 0) {
//       str = even(size);
//     } else {
//       str = odd(size);
//     }
//     console.log(str + '\n');
//   }
// };

// // Calling the function
// printHash2(8);
// ---------------------------------------------------

// SOLUTION FROM THE AUTHOR
// let size = 8;
// let board = '';
// for (let x = 0; x < size; x++) {
//   for (let y = 0; y < size; y++) {
//     if ((x + y) % 2 == 0) {
//       board += ' ';
//     } else {
//       board += '#';
//     }
//   }
//   board += '\n';
// }
// console.log(board);
