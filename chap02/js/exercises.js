/*
  Exercise 01
  LOOPING A TRIANGLE
  Write a loop that makes seven calls to console.log to output the following
  #
  ##
  ###
  ####
  #####
  ######
  #######
  
  It's maybe useful to know that you can find the length of a string by 
  writing .length after it

  Example:
  let abc = 'abc';
  console.log(abc.length); 
  // -> 3
*/

// let str = '#######';
// for (let index = 0; index < str.length; index++) {
//   console.log(str.slice(0, index + 1));
// }

// function printTriangle() {
//   let str = '#######';
//   for (let index = 0; index < str.length; index++) {
//     console.log(str.slice(0, index + 1));
//   }
// }

// document.addEventListener('DOMContentLoaded', printTriangle); // DOM ready function

// SOLUTION FROM WRITER
// for (let line = '#'; line.length < 8; line += '#') {
//   console.log(line);
// }

// -------------------------------------------------------------------------------------------

/*
  Exercise 02
  FIZZBUZZ
  Write a program that uses console.log to print all the numbers from 1 to 100,
  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  and for numbers divisible by 5 (and not 3), print "Buzz" instead.

    When you have that working, modify your program to print "FizzBuzz" for
    numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
    for numbers divisible by only one of those).

*/

// function fizzBuzz() {
//   for (let index = 1; index < 101; index++) {
//     // console.log(index);
//     if (index % 3 == 0) {
//       console.log('Fizz');
//     } else if (index % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(index);
//     }
//   }
// }

// new version
// function fizzBuzz() {
//   for (let num = 1; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//       console.log('FizzBuzz');
//     } else {
//       if (num % 3 == 0) {
//         console.log('Fizz');
//       } else if (num % 5 == 0) {
//         console.log('Buzz');
//       } else {
//         console.log(num);
//       }
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', fizzBuzz);

// SOLUTION FROM WRITER
// for (let n = 1; n <= 100; n++) {
//   let output = '';
//   if (n % 3 == 0 && n % 5 == 0) {
//     output = 'FizzBuzz';
//   } else {
//     if (n % 3 == 0) output = 'Fizz';
//     if (n % 5 == 0) output = 'Buzz';
//   }
//   console.log(output || n);
// }
// -------------------------------------------------------------------------------------------

/*
  Exercise 03
  CHESSBOARD
  Write a program that creates a string that represents an 8×8 grid, using newline
  characters to separate lines. At each position of the grid there is either a space
  or a "#" character. The characters should form a chessboard.
  Passing this string to console.log should show something like this:

   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #

  When you have a program that generates this pattern, define a binding size
  = 8 and change the program so that it works for any size, outputting a grid
  of the given width and height.
*/

// function printHash() {
//   let str = '';
//   let size = 8;
//   for (let i = 0; i < size; i++) {
//     if (i % 2 == 0) {
//       for (let j = 0; j < size; j++) {
//         if (j % 2 == 0) {
//           str += ' ';
//         } else {
//           str += '#';
//         }
//       }
//     } else {
//       for (let k = 0; k < size; k++) {
//         if (k % 2 == 0) {
//           str += '#';
//         } else {
//           str += ' ';
//         }
//       }
//     }
//     str += '\n';
//   }

//   console.log(str);
//   // console.log(0 % 2 == 0);
// }
// document.addEventListener('DOMContentLoaded', printHash);

// SOLUTION FROM WRITER
let size = 8;
let board = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
