// let total = 0,
//   count = 0;
// while (count <= 10) {
//   total += count;
//   count++;
// }
// console.log(total); // 55

// console.log(sum(range(1, 10))); // 55
// console.log(sum(range(1, 10, 3))); // 22
// console.log(sum(range(1, 10, 0))); // 0

// console.log(sum(range(10, 1))); // 55
// console.log(sum(range(10, 1, 3))); // 55
// console.log(sum(range(10, 1, -1))); // 55
// console.log(sum(range(10, 1, -3))); // 22

// console.log(sum(range(1, 10, -1))); // 55

// // Function
// function range(start, end, step = 1) {
//   let array = [];
//   if (step == 0) {
//     return array;
//   }
//   if (start < end) {
//     if (step < 0) {
//       step = -step;
//     }
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else {
//     if (step > 0) {
//       step = -step;
//     }
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// // Function
// function sum(array) {
//   let result = 0;
//   for (let value of array) {
//     result += value;
//   }
//   return result;
// }
// --------------------------------------------------------------------------------------

/**
 * 1. ABSTRACTION
 */

/**
 * Abstraction hide details and give us the ability to talk about problems at a higher
 * (or more abstract) level.
 */

// --------------------------------------------------------------------------------------

/**
 * 2. ABSTRACTING REPETITION
 */

/**
 * It is common for a program to do something a given number of times. You can write a
 * for loop for that, like this:
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/**
 * Can we abstract "doing something N times" as a function? Well, it's easy to write a
 * function that calls console.log N times.
 */

// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// repeatLog(10);

/**
 * But what if we want to do something other than logging the numbers?
 * Since "doing something" can be represented as a function and functions are just values,
 * we can pass our function as a function value.
 */

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// repeat(3, console.log);

/**
 * We don't have to pass a predefined function to repeat. Often, it is easier to create
 * a function value on the spot instead.
 */

// let labels = [];
// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });

// console.log(labels); // [Unit 1, Unit 2, Unit 3, Unit 4, Unit 5]
// --------------------------------------------------------------------------------------

/**
 * 3. HIGHER-ORDER FUNCTIONS
 */

/**
 * Functions that operate on other functions, either by taking them as arguments or
 * by returning them , are called higher-order functions.
 *
 * Since we have already seen that functions are regular values, there is nothing
 * particularly remarkable about the fact that such functions exist.
 *
 * The term comes from mathematics, where the distinction between functions and
 * other values is taken more seriously.
 */

/**
 * Higher-order functions allow us to abstract over actions, not just values.
 * They come in several forms. For example, we can have functions that create
 * new functions.
 */

// function greaterThan(n) {
//   return (m) => m > n;
// }

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11)); // true
// console.log(greaterThan10(9)); // false

/**
 * And we can have functions that change other functions
 */

// function noisy(f) {
//   return (...args) => {
//     console.log('calling with ', args);
//     let result = f(...args);
//     console.log('called with ', args, ' returned ', result);
//     return result;
//   };
// }

// console.log(noisy(Math.min)(4, 3, 2));

/**
 * We can even write functions that provide new types of control flow
 */

// // Function
// function unless(test, then) {
//   if (!test) {
//     then();
//   }
// }

// // Function
// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// repeat(3, (n) => {
//   unless(n % 2 == 1, () => {
//     console.log(n, ' is even');
//   });
// });

/**
 * There is a built in array method, forEach, that provides something like a for/of loop as
 * a higher-order function.
 */

// ['A', 'B'].forEach((l) => console.log(l));
// -> 1
// -> 2
// --------------------------------------------------------------------------------------

/**
 * 4. SCRIPT DATA SET
 */

/**
 * One area where higher-order functions shine is data processing. To process data, we'll need
 * some actual data. This chapter will use a data set about scripts - writing systems such as
 * Latin, Cyrillic, or Arabic.
 */

/**
 * Remember Unicode from Chapter 1, the system that assigns a number to each character in
 * written language? Most of these characters are associated with a specific script.
 * The standard contains 140 different scripts - 81 are still in use today, and 59 are historic.
 */
// --------------------------------------------------------------------------------------

/**
 * 5, 6, 7. STANDARD ARRAY METHODS: forEach, filter, map
 */

/**
 * forEach method:
 *
 * There is a built in array method, forEach, that provides something like a for/of loop as
 * a higher-order function.
 */

/**
 * filter method: Filtering array
 */

/**
 * map method: Transforming with map
 *
 * The map method transforms an array by applying a function to all of its
 * elements and building a new array from the returned values. The new array
 * will have the same length as the input array, but its content will have been
 * mapped to a new form by the functions
 */
