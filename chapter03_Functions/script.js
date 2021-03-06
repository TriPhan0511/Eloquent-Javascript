// FUNCTIONS
// Functions are the bread and butter of Javascript programming.
// The concept of wrapping a piece of program in a value has many uses.
// It gives us a way to structure a larger program, to reduce repetition,
// to associate names with subprograms, and to these subprograms from each other.
// -----------------------------------------------------------------------------------------

// 1. DEFINING A FUNCTION
// A function is a regular binding where the value of the binding is a function.

// For example, this code defines square to refer a function that
// produces the square of a given number.
// const square = function (x) {
//   return x * x;
// };

// console.log(square(12)); // 144

//  A function is created with an expression that starts with the keyword function.
// Functions have a set of parameters (in this case, only x) and a body, which
// contains the statements that are to be execuated when the function is called.

// The function body of a function created this way must always be wrapped in braces,
// even when it consists of only a single statement.

// A function can have multiple parameters or no parameters at all.

// In the following example, makeNoise does not list any parameter names,
// whereas power lists two

// const makeNose = function () {
//   console.log('Pling!');
// };

// // Calling the function makeNoise()
// makeNose();

// const power = function (base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };
// ------------------------------------------------

// const power = function (base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// };

// // Calling the function power
// console.log(power(2, 0)); // 1
// console.log(power(2, 1)); //2
// console.log(power(2, 2)); // 4
// console.log(power(2, 3)); // 8
// console.log(power(4, 2)); // 16

// Some functions produce a value, such as power and square, and some don't.
// such as makeNoise, whose only result is a side effect.

// A return statement determines the value the function returns. When control
// comes across such a statement, it immediately jumps out of the current function
// and gives the returned value to the code that called the function.

// A return keyword without an expression after it will cause the function to
// return undefined.
// Functions that don't have a return statement at all, such as makeNoise,
// similarly return undefined.

// Parameters to a function bahave like regular bindings, but their initial values
// are given by the caller of the function, not the code in the function itself.
// -----------------------------------------------------------------------------------------

/**
 * 2. BINDING AND SCOPES
 *
 * Each binding has a scope, which is the part of the program in which the binding is visible.
 * For bindings defined outside of any function or block, the scope is the whole program - you
 * can refer to such bindings wherever you want. These are called global.
 *
 * But bindings created for function parameters or declared inside a function can be referenced
 * only in that function, so they are known as local bindings.
 * Every time the function is called, new instances of these bindings are created.
 * This provide some isolation between functions - each function call acts in its
 * own little world (its local environment) and can often be understood without knowing
 * a lot about what's going on in the global environment.
 *
 * Bindings declared with let and const are in fact local to the block that they are delcared in,
 * so if you create one of those inside of a loop, the code before and after the loop cannot "see"
 * it. In pre-2015 Javascript, only functions created new scopes, so old-style bindings, created
 * with the var keyword, are visible throughout the whole function that they appear in - or throughout
 * the global scope, if they are not in a function.
 */

// Example
// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z); // 60
// }

// // y is not visible here
// console.log(x + z); // 40

/**
 * Each scope can "look out" into the scope around it, so x is visible inside the block in
 * the example.
 *
 * The exception is when multiple bindings have the same name - in that case, code can see only
 * the innnermost.
 * For example, when the code inside the halve function refers to n, it is
 * seeing its own n, not the gloabal n
 */

// let halve = function (n) {
//   return n / 2;
// };

// let n = 10;
// console.log(halve(100)); // 50
// console.log(n); // 10
// -----------------------------------------------------

/**
 * NESTED SCOPE
 *
 * Javascript distinguishes not just global and local bindings. Blocks and functions can be
 * created inside other functions and blocks, producing multiple degrees of locality.
 *
 * For example, this function - which outputs the ingredients needed to make a batch of hummus -
 * has another function inside it.
 */

// const hummus = function (factor) {
//   const ingredients = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit = unit + 's';
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };

//   ingredients(1, 'can', 'chickpeas');
//   ingredients(0.25, 'cup', 'tahini');
//   ingredients(0.25, 'cup', 'lemon juice');
//   ingredients(1, 'clove', 'garlic');
//   ingredients(2, 'tablespoon', 'olive oil');
//   ingredients(0.5, 'teaspoon', 'cumin');
// };

// // Calling the function hummus
// hummus(2);

/**
 * The code inside the ingredient function can see the factor binding from the outer function.
 * But its local bindings, such as unit or ingerdientAmount ae not visible in the outer function.
 *
 * The set of bindings visible inside a block is determined by the place of that block in the
 * program text. Each local scope can also see the local scopes that contain it, and all scopes
 * can see gloabl scope. This approach to binding visibility is called lexical scoping.
 */
// -----------------------------------------------------------------------------------------

/**
 * 3. FUNCTIONS AS VALUES
 *
 * A function binding usually simply acts as a name for a specific piece of the program.
 * Such a binding is defined once and never changed. This makes it easy to confuse the
 * function and its name.
 * But the two are different. A function value can do all the things that other values can
 * do - you can do it in an arbitrary expression, not just call it. It is possible to store
 * a function value in a new binding, pass it as an argument to a function, and so on.
 * Similarly, a binding that holds a function is still just a regular binding and can,
 * if not constant, be assigned a new value, like so:
 */

// // Function square
// let square = function (x) {
//   return x * x;
// };

// // Function power
// let power = function (base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };

// // Calling functions
// console.log(square(2)); // 4
// console.log(power(4, 3)); // 64
// console.log(power(square(2), 3)); // 64
// ------------------------------------------------

// let power = function (base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };

// console.log(power(2, 4)); // 16

// power = function (num) {
//   return num * num * num;
// };

// console.log(power(2)); // 8
// -----------------------------------------------------------------------------------------

/**
 * 4. DECLARATION NOTATION
 *
 * There is a slightly shorter way to create a function binding. When the function
 * keyword is used at the start of a statement, it works differently.
 */

// function square(x) {
//   return x * x;
// }

// console.log(square(4)); // 16

/**
 * This is a function declaration. The statement defines the binding square and points it
 * at given function. It is slightly easier to write and doesn't require a semicolon after
 * the function.
 *
 * There is one subtlety with this form of function definition
 */

// console.log('The future says: ', future());

// function future() {
//   return "You'll never have flying cars.";
// }

/**
 * The preceding code works, even though the function is defined below the code that uses it.
 * Function delcarations are not part of the regular top-to-bottom flow control. They are
 * conceptually moved to the top of their scope and can be used by all the code in the scope.
 * This is sometimes useful because it offers the freedom to order code in a way that seems
 * meaningful, wihout worrying about having to define all functions before they are used.
 */
// -----------------------------------------------------------------------------------------

/**
 * 5. ARROW FUNCTIONS
 *
 * There's a third notation for functions, which looks very different from the others.
 * Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and
 * a greater-than character.
 */

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

// console.log(power(4, 2)); // 16

/**
 * The arrow comes after the list of parameters and is followed by the function's body.
 * It expresses something like "this input (the parameters) produces this result (the body)"
 *
 * When there is only one parameter name, you can omit the parentheses around the parameter
 * list. If the body is a sibgle expression, rather than a block in braces, that expression
 * will be returned from the function. So, these two definitions of square do the same thing:
 */

// let square1 = (x) => {
//   return x * x;
// };

// let square2 = (x) => x * x;

// // Calling the functions
// console.log(square1(3)); // 9
// console.log(square2(3)); // 9

/**
 * When an arrow function has no parameters at all, its parameter list is just an empty
 * set of parentheses.
 */

// const horn = () => console.log('Toot');

// horn(); // Toot
// -----------------------------------------------------------------------------------------

/**
 * 6. THE CALL STACK
 */

// function greet(who) {
//   console.log('Hello ' + who);
// }

// greet('Harry');
// console.log('Bye');
// -----------------------------------------------------------------------------------------

/**
 * 7. OPTIONAL ARGUMENT
 */

// Example:

// function square(x) {
//   return x * x;
// }

// console.log(square(4, true, 'aloha')); // 16

/**
 * Javascript is extremely broad-minded about the number of arguments you
 * pass to a function. If you pass to many, the extra ones are ignored.
 * If you pass too few, the missing parameters get assigned the value undefined.
 *
 * The downside of this is that it is possible - likely, even - that you'll
 * accidentally pass the wrong number of arguments to functions. And no one
 * will tell you aout it.
 *
 * The upside is that this behavior can be used to allow a function to be
 * called with different numbers of arguments.
 * For example, this minus function tries to imitate the - operator by
 * acting on either one or two arguments.
 */

// function minus(a, b) {
//   if (b === undefined) {
//     return -a;
//   } else {
//     return a - b;
//   }
// }

// console.log(minus(10)); // -10
// console.log(minus(10, 2)); // 8

/**
 * If you write an = operator after a parameter, followed by an expression, the
 * value of that expression will replace the argument when it is not given.
 *
 * For example, this version of power makes its second argument optional. If you
 * don't provide it or pass the value undefined, it will default to two, and the
 * function wil behave like square.
 */

// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(4, 3)); // 64
// console.log(power(4)); // 16
// console.log(power(4, undefined)); // 16
// -----------------------------------------------------------------------------------------

/**
 * 8. CLOSURE
 *
 * The ability to treat functions as values, combined with the fact that local bindings
 * are re-created every time a function is called, brings up an interesting question.
 * What happens to local bindings when the function call that created them is no longer active?
 *
 * The following code shows an example of this. It defines a function, wrapValue, that
 * creates a local binding. It then returns a function that accesses and returns this
 * local binding.
 */

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1()); // 1
// console.log(wrap2()); // 2

/**
 * This is allowed and works as you'd hope - both instances of a local binding can
 * still be accessed. This situation is a good demonstration of the fact that local
 * bindings are created anew for every call, and different calls can't trample on
 * one another's local binding.
 */

/**
 * This feature - being able to reference a specific instance of a local binding
 * in an enclosing scope - is called closure. A function that references bindings
 * from local scopes around it is called a closure. This behavior not only frees you
 * from having worry about lifetimes of bindings but also makes it possible to use
 * function values in some creative ways.
 */

/**
 * With a slightly change, we can turn the previous example into a way to
 * create functions that multiply by an arbitrary amount.
 */

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5)); // 10
// console.log(twice(10)); // 20

/**
 * The explicit local binding from the wrapValue example isn't really needed
 * since a parameter is itself a local binding.
 */

/**
 * A good mental model is to think of function values as containing both the code
 * in their body and the environment in which they are created, not the environment
 * in which it is called.
 */

/**
 * In the example, multiplier is called and creates an environment in which
 * its factor parameter is bound to 2. The function value it returns, which is
 * stored in twice, remembers this environment. So when that is called, it
 * multiplies its argument by 2.
 */
// -----------------------------------------------------------------------------------------

/**
 * 9. RECURSION
 *
 * It is perfectly okay for a function to call itself, as long as it doesn't do it so often
 * that is overflow the stack.
 *
 * A function that calls itself is called recursive.
 * Recursion allows some functions to be written in a different style.
 */

// Example: An alternative implement for power
// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3)); // 8

/**
 * But this implementation has one problem: in typical Javascript
 * implementation, it's about three times slower than the looping
 * version. Running through a simple loop is generally cheaper than
 * calling a function multiple times.
 */
// -----------------------------------------------------------------------------------------

/**
 * 10. GROWING FUNCTIONS
 */

/**
 * Example: We want to write a program that prints two numbers: the numbers of cows and
 * chickens on a farm, with the words Cows and Chickens after them and zero padded before
 * both numbers so that they are always three digits long.
 *
 * 007 Cows
 * 011 Chickens
 *
 * This ask for a function of two arguments - the number of cows and
 * the number of chickens
 */

// // Function
// function printFarmInventory(cows, chickens) {
//   let cowsStr = `${toStr(cows)} Cows`;
//   let chickensStr = `${toStr(chickens)} Chickens`;
//   return `${cowsStr}\n${chickensStr}`;
// }

// // Function
// function toStr(number) {
//   let str = '';
//   if (number < 10) {
//     return `00${number}`;
//   } else if (number < 100) {
//     return `0${number}`;
//   } else {
//     return number;
//   }
// }
// ------------------------------------------------------------

// Version 1:
// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(`${cowString} Cows`);

//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = '0' + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }
// -----------------------------------------------------------

// Version 2:
// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = '0' + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, 'Cows');
//   printZeroPaddedWithLabel(chickens, 'Chickens');
//   printZeroPaddedWithLabel(pigs, 'Pigs');
// }
// -----------------------------------------------------------

// Version 3:
// function zeroPad(number, width) {
//   let string = String(number);
//   while (string.length < width) {
//     string = '0' + string;
//   }
//   return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//   console.log(`${zeroPad(cows, 3)} Cows`);
//   console.log(`${zeroPad(chickens, 3)} Chickens`);
//   console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// Calling the function
// printFarmInventory(7, 11, 999);
// printFarmInventory(7, 11, 3);
// -----------------------------------------------------------------------------------------

/**
 * 11. FUNCTIONS AND SIDE EFFECT
 *
 * Functions can be roughly divided into those that are called for their side effects and
 * those that are called for their return value. (Though it is definitely also possible
 * to both have side effects and return a value.)
 */

/**
 * The first helper function in the farm example, printZeroPaddedWithLabel, is called for
 * its side effect: it prints a line. The second version, zeroPad, is called for its
 * return value. It is no coincidence that the second is useful in more situations than
 * the first. Functions that create values are easier to combine in new ways than functions
 * directly perform side effect.
 */

/**
 * A pure function is a specific kind of value-producing function that not only has no
 * side effects but also doesn't rely on side effects from other code - for example,
 * it doesn't read global bindings whose value might change.
 *
 * A pure function has the pleasant property that, when called with the same arguments,
 * it always produces the same value 9and doesn't do anything else). A call to such
 * a function can be substituted by its return value without changing the meaning of
 * the code. When you not sure that a pure function is working correctly, you can test
 * it by simply calling it and know that if it works in that context, it will work in
 * any context. Nonpure functions tend to require more scaffolding to test.
 */
// -----------------------------------------------------------------------------------------

/**
 * SUMMARY
 *
 * The function keyword, when used as an expression, can create a function value.
 * When used as statement, it can be used to declare a binding and give it a function as
 * its value. Arrow functions are yet another way to create fucntions
 */

// // Define f to hold a function value
// const f = function (a) {
//   console.log(a + 2);
// };

// // Declare g to be a function
// function g(a, b) {
//   return a * b * 3.5;
// }

// // A less verbose function value
// let h = (a) => a % 3;

/**
 * A key aspect in understanding functions is understanding scopes. Each block
 * creates a new scope. Parameters and bindings declared in a given scope are local
 * and not visible from the outside. Bindings declared with var behave differntly -
 * they end up in the nearest function scope or the global scope.
 */

// ----------------------------------------------------------------------------------------
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

// Calling the function
printFarmInventory(1, 22, 333);
