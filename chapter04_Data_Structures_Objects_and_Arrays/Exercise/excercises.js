/**
 * EXERCISE 1: THE SUM OF A RANGE
 */

/**
 * The introduction of this book alluded to the following as a nice way to compute the sum of
 * a range of numbers:
 *    console.log(sum(range(1, 10)));
 *
 * Write a range function that takes two arguments, start and end, and returns an array
 * contaning all the numbers from the start up to (and including) end.
 *
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
 * Run the example program and see whether it does indeed return 55.
 *
 * As a bonus assigment, modify your range function to taken an optional third argument that
 * indicates the "step" value used when building the array. If no step is given, the elements
 * go up by increments of one, corresponding to the old behavior.
 * The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works
 * with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

// Function: Return an array from start and end
// function range(start, end, step = 1) {
//   let array = [];
//   if (step === 0) {
//     return array;
//   } else if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// // Function: Sum a range
// function sum(range) {
//   let result = 0;
//   for (let number of range) {
//     result += number;
//   }
//   return result;
// }

// Testing
// console.log(range(1, 5, 0)); // []
// console.log(range(1, 5)); // [1, 2, 3, 4, 5]
// console.log(range(1, 10, 3)); // [1, 4, 7, 10]
// console.log(range(5, 1, -1)); // [5, 4, 3, 2, 1]
// console.log(range(1, 5, -1)); // []
// console.log(range(10, 1, -2)); // [10, 8, 6, 4, 2]

// console.log(sum(range(1, 10))); // 55
// console.log(sum(range(10, 1, -1))); // 55
// console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
// console.log(range(5, 2, -1)); // [5, 4, 3, 2]
// ------------------------------------------------------------------

// SOLUTION FROM THE AUTHOR
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// Edited: Added if (step === 0)
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];
//   if (step === 0) {
//     return array;
//   }
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// function sum(array) {
//   let total = 0;
//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }

// Testing
// console.log(range(1, 5)); // [1, 2, 3, 4, 5
// console.log(range(1, 5, 2)); // [1, 3, 5]
// console.log(range(5, 1)); // [5, 4, 3, 2, 1]
// console.log(range(5, 1, -2)); // [5, 3, 1]
// console.log(range(1, 5, -2)); // []
// console.log(range(1, 5, 0)); // []
// console.log(range(5, 1, 0)); // []
// -------------------------------------------------------------------------------------

/**
 * EXERCISE 2: REVERSING AN ARRAY
 */

/**
 * Arrays have a reverse method that changes the array by inverting the order in which
 * its elements appear.
 *
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace.
 * The first, revserseArray, takes an array as argument and produces a new array
 * that has the same elements in the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument by reversing its elements. Neither may
 * use the standard reverse method.
 */

// // Function: takes an array as argument and produces a new array that has the same
// // elements in the inverse order.
// function reverseArray(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// // Function: Modifies the array given as argument by reversing its elements.
// function reverseArrayInPlace(array) {
//   let i = 0;
//   while (i < array.length - 1 - i) {
//     // Swap two elements (Destructuring assignment)
//     [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
//     i++;
//   }
//   return array;
// }

// Testing
// let array = [1, 2, 3, 4, 5];
// console.log(array); // [1, 2, 3, 4, 5]
// console.log(reverseArray(array)); // [5, 4, 3, 2, 1]
// console.log(array); // [1, 2, 3, 4, 5]

// let array = [1, 2, 3, 4, 5, 6];
// console.log(array); // [1, 2, 3, 4, 5]
// reverseArrayInPlace(array);
// console.log(array); // [5, 4, 3, 2, 1]
// --------------------------------------------------------------------

// SOLUTION FROM THE AUTHOR

// function reverseArray(array) {
//   let output = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     output.push(array[i]);
//   }
//   return output;
// }

// function reverseArrayInPlace(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     // Swap two elements
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }
// -------------------------------------------------------------------------------------

/**
 * EXERCISE 3: A LIST
 */

/**
 * Objects, as generic blobs of values, can be use to build all sorts of data structure.
 * A common structure is the list (not to be confused with array). A list is a nested set of
 * objects, with the first object holding a reference to the second, the second to the third,
 * and so on.
 */

// Example:
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

/**
 * A nice thing about lists is that they can share parts of their structure.
 * For example, if I create two new values {value: 0, rest: list} and
 * {value: -1, rest: list} (with list referring to the binding defined earlier),
 * they are both independent lists, but they share the structure that makes up
 * their last three elements. The original list is also still a valid three-element list.
 */

/**
 * Write a function arrayToList that builds up a list structure like the one shown when
 * given [1, 2, 3] as argument. Also write a listToArray function that produces an array
 * from list. Then add a helper function prepend, which takes an element and a list and
 * creates a new list that adds the element to the front of the input list, and nth, which
 * takes a list and a number and returns the element at the given position in the list
 * (with zero referring to the first element) or undefined when there is no such element.
 * If you haven't already, also write a recursive version of nth.
 */

// // Function: Builds up a list structure from an array
// function arrayToList(array) {
//   let list = {};
//   while (array.length != 0) {
//     list.value = array[0];
//     array.shift();
//     if (array.length === 0) {
//       list.rest = null;
//     } else {
//       list.rest = arrayToList(array);
//     }
//   }
//   return list;
// }

// // Function: Produces an array from a list
// function listToArray(list) {
//   let array = [];
//   while (list != null) {
//     array.push(list.value);
//     list = list.rest;
//   }
//   return array;
// }

// // Function: takes an element and a list and creates a new list that adds the element
// // to the front of the input list.
// function prepend(element, list) {
//   let newList = {};
//   newList.value = element;
//   newList.rest = list;
//   return newList;
// }

// // Function
// function nth(list, number) {
//   let count = 0;
//   while (list != null) {
//     if (count === number) {
//       return list.value;
//     } else {
//       count++;
//       list = list.rest;
//     }
//   }
//   return undefined;
// }

// // Testing
// // let list = arrayToList([10, 20]);
// // console.log(list);

// // let array = listToArray(list);
// // console.log(array);

// // let list = { value: 10, rest: { value: 20, rest: null } };
// // let newList = prepend(300, list);
// // console.log(newList);

// let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// console.log(nth(list, 0)); // 1
// console.log(nth(list, 1)); // 2
// console.log(nth(list, 2)); // 3
// console.log(nth(list, 4)); // undefined
// console.log(nth(list, -1)); // undefined
// console.log(nth(list, 10)); // undefined
// ----------------------------------------------

/**
 * SOLUTION FROM THE AUTHOR
 */

// Function: Builds up a list structure from an array
// function arrayToList(array) {
//   list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// }

// Function: Produces an array from a list
// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// Function: takes an element and a list and creates a new list that adds the element
// function prepend(value, list) {
//   return { value, rest: list };
// }

// Function: Takes a list and a number and returns the element at the given position
// in the list (with zero referring to the first element) or undefined when there is no such element.
// function nth(list, n) {
//   if (!list) {
//     return undefined;
//   } else if (n == 0) {
//     return list.value;
//   } else {
//     return nth(list.rest, n - 1);
//   }
// }

// Testing
// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([1, 2, 3]))); // [1, 2, 3]
// console.log(prepend(200, arrayToList([10, 20])));

// console.log(nth(arrayToList([1, 2, 3]), 0)); // 1
// console.log(nth(arrayToList([1, 2, 3]), 1)); // 2
// console.log(nth(arrayToList([1, 2, 3]), 2)); // 3
// console.log(nth(arrayToList([1, 2, 3]), 3)); // undefined
// -------------------------------------------------------------------------------------

/**
 * EXERCISE 4: DEEP COMPARISON
 */

/**
 * The == operator compares objects by identity. But sometimes you'd prefer to compare
 * the values of their actual properties.
 *
 * Write a function deepEqual that takes two values and returns true only if they are
 * the same value or are objects with the same properties, where the values of
 * the properties are equal when compared with a recursive call to deepEqual.
 *
 * To find out whether values should compared directly (use the === operator for that)
 * or have their properties compared, you can use the typeof operator. If it produces
 * "object" for both values, you should do a deep comparison. But you have to take one
 * silly exception into account: because of a historical accident, typeof null also
 * produces "object".
 *
 * The Object.keys function mwill be useful when you need to go over the properties of
 * objects to compare them.
 */
