/**
 * EXERCISE 0: FLATTENING
 */

/**
 * Use the reduce method in combination with the concat method to "flatten"
 * an array of arrays into a single array that has all the elements of
 * the original arrays.
 */

// let arrays_1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, 10, 11],
// ];

// console.log(
//   arrays_1.reduce((output, [...rest]) => {
//     for (let element of rest) {
//       output.push(element);
//     }
//     return output;
//   })
// );

let arrays_2 = [
  [1, 2],
  [
    [3, 4],
    [5, 6],
  ],
  [7, 8, 9],
];

console.log(
  arrays_2.reduce((output, [...values]) => {
    for (let val of values) {
      output.push(val);
    }
    return output;
  })
);
// [1, 2, [3, 4], [5, 6], 7, 8, 9];
