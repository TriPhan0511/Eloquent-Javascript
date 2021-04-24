/**
 * LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */

/**
 * 1. STRICTLY EQUALITY USING ===
 * ("strict equality", "identity", "triple equals")
 */

/**
 * Strict equality compares two values for equality. Neither value is implicitly converted to some
 * other value before being compared.
 * If the values have different types, the values are considered unequal.
 * If the value have the same type, are not numbers, and have the same value,
 * they're considered equal.
 * Finally, if both values are numbers, they're considered equal if they're both not NaN and
 * are the same value, or if one is +0 and one is -0.
 */

let num = 0;
let obj = new String('0');
let str = '0';
let str2 = '0';

// console.log(num === num); // true
// console.log(obj === obj); // true
// console.log(str === str); // true

// console.log(num === obj); // false
// console.log(num === str); // false
// console.log(obj === str); // false

// console.log(null === undefined); // false
// console.log(obj === null); // false
// console.log(obj === undefined); // false

/**
 * Strict equality is almost always the correct comparison operation to use.
 * For all values except numbers, it uses the obvious semantics: a value is only equal to itself.
 * For numbers it uses slightly different semantics to gloss over two different edge cases.
 * The first is that floating point zero is either positively or negatively signed. This is
 * useful in representing certain mathematical solutions, but as most situations don't care about
 * the difference between +0 and -0, strict equality treat them as the same value.
 * The second is that floating point includes the concept of a not-a-number value, NaN,
 * to represent the solution to certain ill-defined mathematical problems: negative infinity
 * added to positive infinity, for example. Strict equality treats NaN as unequal to every
 * other value -- including itself. (The only case in which (x !== x)) is true is when x is NaN.)
 */
