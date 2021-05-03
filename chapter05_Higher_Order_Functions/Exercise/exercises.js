/**
 * EXERCISE 1: FLATTENING
 */

/**
 * Use the reduce method in combination with the concat method to "flatten"
 * an array of arrays into a single array that has all the elements of
 * the original arrays.
 */

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(
//   arrays.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
//   })
// );

/**
 * SOLUTION FROM THE AUTHOR
 */
// console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// -------------------------------------------------------------------------------------------

/**
 * EXERCISE 2: YOUR OWN LOOP
 */

/**
 * Write a higher-order function loop that provides something like a for loop statement.
 * It takes a value, a test function, an update function, and a body function.
 * Each iteration, it first runs the test function on the current loop value and
 * stops if that returns false. Then it calls the body function, giving it the
 * current value. Finally, it calls the update function to create a new value and
 * starts from the beginning.
 *
 * When defining the function, you can use a regular loop to do the actual looping.
 */

// function loop(value, test, update, body) {
//   while (test(value)) {
//     body(value);
//     value = update(value);
//   }
// }

// Testing
// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );

/**
 * SOLUTION FROM THE AUTHOR
 */

// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }
// -------------------------------------------------------------------------------------------

/**
 * EXERCISE 3: EVERYTHING
 */

/**
 * Analogous to the some method , arrays also have an every method. This one
 * returns true when the given function returns true for every element in the
 * array. In a way, some is a version of the || operator that acts on arrays, and
 * every is like the && operator.
 *
 * Implement every as a function that takes an array and a predicate function
 * as parameters. Write two versions, one using a loop and one using the some method.
 */

// Using a loop
// function every(array, test) {
//   for (let element of array) {
//     if (!test(element)) {
//       return false;
//     }
//   }
//   return true;
// }

// Testing
// let array = [1, 2, 3, 4, 5];

// console.log(every(array, (n) => n <= 5)); // true
// console.log(every(array, (n) => n > 2)); // false
// ----------------------------------------------------------------------

/**
 * SOLUTION FROM THE AUTHOR
 */

// Using a loop
// function every(array, predicate) {
//   for (let element of array) {
//     if (!predicate(element)) {
//       return false;
//     }
//   }
//   return true;
// }

// Using the some method
// function every(array, predicate) {
//   return !array.some((element) => !predicate(element));
// }
// -------------------------------------------------------------------------------------------

/**
 * EXERCISE 4: DOMINANT WRITING DIRECTION
 */

/**
 * Write a function that computes the dominant writing direction in a string of text.
 * Remember that each script object has a direction property that can be "ltf" (left to right),
 * "rtl" (right to left), or "ttb" (top to bottom).
 *
 * The dominant direction is the direction of a majority of the characters that have a script
 * associated with them. The characterScript and countBy functions defined earlier in the chapter
 * are probably useful here.
 */

// Function: Finding the script from code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// Testing
// console.log(characterScript(121));

// Function
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// Testing
console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
