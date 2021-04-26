// for (let script of SCRIPTS) {
//   // console.log(script);
// }
// script = SCRIPTS[0];
// // console.log(Object.keys(script));

// // console.log(script.name);
// // console.log(script.ranges);

// for (let range of script.ranges) {
//   console.log(range);
// }
// -----------------------------------------------------------------------------

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
// -----------------------------------------------------------------------------

/**
 * 5. FILTERING ARRAYS
 */

// Functions: Deep Comparison two objects
// function deepEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

//   if (a == null || typeof a != 'object' || b == null || typeof b != 'object') {
//     return false;
//   }

//   let keysA = Object.keys(a);
//   let keysB = Object.keys(b);

//   if (keysA.length != keysB.length) {
//     return false;
//   }

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// name, ranges, direction, year, living, link

// for (let script of livingScripts) {
//   console.log(`${script.name} - ${script.link}`);
// }
// --------------------------------------------------------------------------------------------

/**
 * To find the scripts in the data set that are still in use, the following function
 * might be helpful. It filters out the elements in an array that don't pass the test.
 */

// Function: Filter out the elements in an array that don't pass the test.
// function filter(array, test) {
//   let passed = [];
//   for (let element of array) {
//     if (test(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// let livingScripts_3 = filter(SCRIPTS, (script) => script.living);

// console.log(filter(SCRIPTS, (script) => script.living));

/**
 * The function uses the argument named test, a function value, to fill a "gap"
 * in the computation - the process of deciding which elements to collect.
 *
 * Note how the filter function, rather than deleting elements from the
 * existing array, builds up a new array with only the elements that pass the test.
 * This function is pure. It does not modify the array it is given.
 */

/**
 * Like forEach, filter is a standard array method. The example defined the
 * function only to show what it does internally. From now on, we'll use it
 * like this instead:
 */

// console.log(SCRIPTS.filter((s) => s.direction == 'ttb'));
// -----------------------------------------------------------------------------

/**
 * 6. TRANSFORMING WITH MAP
 */

/**
 * Say we have an array of objects representing scripts, produced by filtering the
 * SCRIPTS array somehow. But we want an array of names, which is easier to inspect.
 */

/**
 * The map method transforms an array by applying a function to all of its
 * elements and building a new array from the returned values. The new array
 * will have the same length as the input array, but its content will have been
 * mapped to a new form by the functions
 */

// function map(array, transform) {
//   let mapped = [];
//   for (let element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }

// let rtlScripts = SCRIPTS.filter((script) => script.direction == 'rtl');
// console.log(map(rtlScripts, (s) => s.name));

/**
 * Like forEach and filter, map is a standard array method.
 */

// let rtlScripts = SCRIPTS.filter((script) => script.direction == 'rtl');
// console.log(rtlScripts.map((s) => s.name));
// console.log(rtlScripts.map((s) => `Language: ${s.name}`));

// function map(array, test) {
//   let newArray = [];
//   for (let el of array) {
//     if (test(el)) {
//       newArray.push(el.name);
//     }
//   }
//   return newArray;
// }

// let ttbScripts = map(SCRIPTS, (script) => script.direction == 'ttb');
// console.log(ttbScripts);
// --------------------------------------------------------------------------------------

/**
 * 7. SUMMARIZING WITH REDUCE
 */

/**
 * Another common thing to do with arrays is to compute a single value from them.
 *
 * Our recurring example, summing a collection of numbers, is an instance of this.
 * Another example is finding the script with the most characters.
 */

/**
 * The higher-order operation that represents this pattern is called reduce (sometimes
 * also called fold). It builds a value by repeated taking a single element from the
 * array and combining it with the current value.
 *
 * When summing numbers, you'd start with the number zero and, for each element, add that
 * to the sum.
 *
 * The parameters to reduce are, apart from the array, a combining function and a start value.
 *
 * This function is a little less straightforward than filter and map.
 */

// function reduce(array, combine, start) {
//   let current = start;
//   for (let element of array) {
//     current = combine(current, element);
//   }
//   return current;
// }

// console.log(reduce(SCRIPTS, (a, b) => (a.ranges.length > b.ranges.length ? a : b), SCRIPTS[0]));
// {name: "Arabic", ranges: Array(57), direction: "rtl", year: 400, living: true, …}

/**
 * To use reduce (twice) to find the script with the most characters, we can
 * write something like this:
 */

// console.log(SCRIPTS[0].ranges);
/**
0: (2) [125184, 125259]
1: (2) [125264, 125274]
2: (2) [125278, 125280]
 */

// function characterCount(script) {
//   return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from);
//   }, 0);
// }

// console.log(characterCount(SCRIPTS[0]));
// (125259-125184) + (125274-125264) + (125280-125278) = 75 + 10 + 2 = 87

// console.log(SCRIPTS.reduce((a, b) => (characterCount(a) > characterCount(b) ? a : b)));

/**
 * The characterCount function reduces the ranges assigned to a script by summing
 * their sizes.
 * Note the use of destructing in the parameter list of the reducer function.
 * The second call to reduce then uses this to find the largest script by repeatedly
 * comparing two scripts and returning the larger one.
 */
// --------------------------------------------------------------------------------------

/**
 * 8. COMPOSABILITY
 */

/**
 * Higher-order functions start to shine when you need to compose operations.
 * As an example, let's write code that finds the average year of origin for living
 * and dead scripts in the dataset.
 */

console.log(SCRIPTS[0]);
