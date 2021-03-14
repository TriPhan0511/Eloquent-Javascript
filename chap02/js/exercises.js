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

// SOLUTION
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

document.addEventListener('DOMContentLoaded', fizzBuzz);
