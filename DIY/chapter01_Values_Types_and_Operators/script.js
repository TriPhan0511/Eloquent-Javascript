// console.log(3 > 2); // true
// console.log(2 >= 3); // false

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// console.log(2 > 1 && 3 > 2); // true
// console.log(1 > 2 || 3 > 2); // true

// console.log(2 > 3 && 4 > 3); // false (short-circuit)
// console.log(3 > 2 || 2 > 4); // true (short-circuit)
// -----------------------------------------------------------

// Ternary operator (Conditional operator)
// console.log(true ? 1 : 2); // 1
// console.log(false ? 1 : 2); // 2
// -----------------------------------------------------------

// Automatic type conversion
// console.log(8 * null); // 0
// console.log('5' - 1); // 4
// console.log('5' + 1); // 51
// console.log('five' * 2); // NaN
// console.log(false == 0); // true
// -----------------------------------------------------------

// Short-circuiting of logical operators
// The || operator will return the value to its left when that can be converted to true and
// will return the value on its right otherwise.
console.log(null || 'user'); // user
console.log('Agnes' || 'user'); // Agnes

// 0, NaN and empty string ("") count as false
// while al the other values count as true.
console.log(0 || -1); // -1
console.log('' || '!?'); // !?

// The && operator works similarly but the other way around.
// When the value to its left is something that converts to false, it returns that value, and
// otherwise it returns the value in its right.
console.log(null && 'user'); // null
console.log('Agnes' && 'user'); // user
