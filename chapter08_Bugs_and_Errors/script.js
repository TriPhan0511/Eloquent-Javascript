// 'use strict';
// function Person(name) {
//   this.name = name;
// }

// let ferdinand = Person('Ferdinand');
// console.log(name);
// --------------------------------------------------------------------------

/**
 * 4. TESTING
 */
// function test(label, body) {
//   if (!body()) {
//     console.log(label);
//   }
// }

// test('convert Latin text to uppercase', () => {
//   return 'hello'.toUpperCase() == 'HELLO';
// });
// // Nothing happens

// test('convert Greek text to uppercase', () => 'Χαίρετε'.toUpperCase() == 'XAIPETE');
// // convert Greek text to uppercase

// ----------------------------------------------------------------------------------------------------

/**
 * 6. ERROR PROPAGATION
 */

// function promptNumber(question) {
//   let result = Number(prompt(question));
//   if (isNaN(result)) {
//     return null;
//   } else {
//     return result;
//   }
// }

// console.log(promptNumber('How many trees do you see?'));
// --------------------------------------------------------

// function promptNumber2(question) {
//   while (true) {
//     let result = Number(prompt(question));
//     if (!isNaN(result)) {
//       return result;
//     } else {
//       question = `Try again! ${question}`;
//     }
//   }
// }

// console.log(promptNumber2('How many trees do you see?'));
// ----------------

// function lastElement(array) {
//   if (array.length === 0) {
//     return { fail: true };
//   } else {
//     return { element: array[array.length - 1] };
//   }
// }

// let last = lastElement([]);
// console.log(last);
// fail

// let last2 = lastElement([1, 2, 3, 4, 5]);
// console.log(last2);
// // {element: 5}

// if (lastElement([]).element !== undefined) {
//   console.log(lastElement([]).element);
// }

// if (lastElement([1, 2, 3]).element !== undefined) {
//   console.log(lastElement([1, 2, 3]).element);
// }

// ----------------------------------------------------------------------------------------------------

/**
 * 7. EXCEPTION
 */

/**
 * When a function cannot proceed normally, what we would like to do is just stop
 * what we are doing and immediately jump to a place that knows how to
 * handle this problem. This is what exception handling does.
 *
 * Exceptions are a mechanism that makes it possible for code that runs into
 * a problem to raise (or throw) an exception. An exception can be any value.
 * Rasing onesomewhat resembles a super-charged return a function: it
 * jumps out of not just the current function but also its callers, all the way down
 * to the first call that started the current excution. This is called unwinding
 * the stack. An exception zooms down this stack, throwing away all the call contexts
 * it encounters.
 *
 * If exceptions always zoomed right down to the bottom of the stack, they
 * would not be much of use. They'd just provide a novel way to blow up your
 * program. Their power lies in the fact that you can set "obstacles" along the
 * stack to catch the exception as it is zooming down. Once you've caught an
 * exception, you can do something with it to address the problem and then
 * continue to run the program.
 *
 * Here's an example:
 */

// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() === 'left') {
//     return 'L';
//   }
//   if (result.toLowerCase() === 'right') {
//     return 'R';
//   }
//   throw new Error(`Invalid direction: ${result}`);
// }

// function look() {
//   if (promptDirection('Which way?') === 'L') {
//     return 'a house';
//   } else {
//     return 'two angry bears';
//   }
// }

// try {
//   console.log(`You see ${look()}`);
// } catch (error) {
//   // console.log(`Something goes wrong: ${error}`);
//   console.log(`Something goes wrong: ${error.stack}`);
// }

/**
 * The throw keyword is used to raise an exception. Catching one is done by
 * wrapping a piece of code in a try block, followed by the keyword catch.
 * When the code in the try block causes an exception to raised, the catch
 * block is evaluated, with the name in parentheses bound to the exception value.
 * After the catch block finishes- or if the try block finishes without problems - the
 * program proceeds beneath the entire try/catch statement.
 *
 * In this case, we used the Error constructor to create our exception value.
 * This is a standard Javascript constructor that creates an object with a message
 * property. In most Javascript environments, instance of this constructor also
 * gather some information about the call stack that existed when the exception was
 * created, a so-called stack trace. This information is stored in the stack property
 * and can be helpful hwen trying to debug a problem: it tells us the function
 * where the problem occured and which functions made the failing call.
 *
 * Note that the look function completely ignores the possibility that promptDirection
 * might go wrong. This is the big advantage of exceptions: error-handling code
 * is necessary only at the point where the error occurs and at the point where it
 * is handled. The function in between can forget all about it.
 *
 * Well, almost...
 */
// ----------------------------------------------------------------------------------------------------

/**
 * CLEANING UP AFTER EXCEPTIONS
 */

/**
 * The effect of an exception is another kind of control flow. Every action that
 * might cause an exception, which is pretty much every function call and property
 * access, might cause control suddenly leave your code.
 *
 * This means when code has several side effects, even if its "regular" control flow
 * looks like they'll always all happen,an exception might prevent some of them
 * from taking place.
 *
 * Here is some really bad banking code
 */

// const accounts = {
//   a: 100,
//   b: 0,
//   c: 20,
// };

// function getAccount() {
//   let accountName = prompt('Enter an account name');
//   if (!accounts.hasOwnProperty(accountName)) {
//     throw new Error(`No such account: ${accountName}`);
//   }
//   return accountName;
// }

// function transfer(from, amount) {
//   if (accounts[from] < amount) {
//     return;
//   }
//   accounts[from] -= amount;
//   accounts[getAccount()] += amount;

//   // try {
//   //   accounts[getAccount()] += amount;
//   //   accounts[from] -= amount;
//   // } catch (error) {
//   //   console.log('Some thing goes wrong: ' + error);
//   // }
// }

// // Testing
// // transfer('a', 10);
// transfer('c', 50);

// console.log(`a: ${accounts['a']}`);
// console.log(`b: ${accounts['b']}`);
// console.log(`c: ${accounts['c']}`);

/**
 * The transfer function tranfers a sum of monney from a given account to
 * another, asking for the name of the other account in the process. If given an
 * invalid account name, getAccount throws an exception.
 *
 * But transfer first removes the money from the account and then calls
 * getAccount before it adds it to another account. If it is broken off by an
 * exception at that point, it'll just make money disappear.
 *
 * That code could have been written a little more intelligently, for example by
 * calling getAccount before it starts moving money around. But often problems
 * like this occur in more subtle ways. Even functions that don't look like they
 * will throw an exception might do so in exceptional circumstances or when they
 * contain a programmer mistake.
 *
 * One way to address this is to use fewer side effects. Again, a programming
 * style that computes new values instead of changing existing data helps. If a
 * piece of code stops running in the middle of creating a new value, no one ever
 * sees the half-finished value, and there is no problem.
 *
 * But that isn't always practical. So there is another feature that try statements
 * have. They may be followed by a finally block either of or in addition to
 * a catch block. A finally block says "no matter what happens, run this code
 * after trying to run the code in the try block."
 */

// const accounts = {
//   a: 100,
//   b: 0,
//   c: 20,
// };

// function getAccount() {
//   let accountName = prompt('Enter an account name');
//   if (!accounts.hasOwnProperty(accountName)) {
//     throw new Error(`No such account: ${accountName}`);
//   }
//   return accountName;
// }

// function transfer(from, amount) {
//   if (accounts[from] < amount) {
//     return;
//   }
//   let progress = 0;
//   try {
//     accounts[from] -= amount;
//     progress = 1;
//     accounts[getAccount()] += amount;
//     progress = 2;
//   } finally {
//     if (progress === 1) {
//       accounts[from] += amount;
//     }
//   }
// }

// // function transfer(from, amount) {
// //   if (accounts[from] < amount) {
// //     return;
// //   }
// //   let progress = 0;
// //   try {
// //     accounts[from] -= amount;
// //     progress = 1;
// //     accounts[getAccount()] += amount;
// //     progress = 2;
// //   } catch (error) {
// //     console.log(`Something goes wrong: ${error}`);
// //   } finally {
// //     if (progress === 1) {
// //       accounts[from] += amount;
// //     }
// //     console.log(`a: ${accounts['a']}`);
// //     console.log(`b: ${accounts['b']}`);
// //     console.log(`c: ${accounts['c']}`);
// //   }
// // }

// // Testing
// transfer('a', 10);

/**
 * This version of the function tracks its progress, and if, when leaving, it notices
 * that it was aborted at a point where it had created an inconsistent program state,
 * it repairs the damage it did.
 *
 * Note that even though the finally code is run when an exception is thrown
 * in the try block, it does not interfere with the exception. After the finally
 * block runs, the stack continues unwinding.
 *
 * Writing a program that operate reliably even when exceptions pop up in unexpected
 * places is hard. Many people simple don't bother, and because exceptions are typically
 * reserved for exceptional circumstances, the problem may occur so rarely that it is
 * never even noticed. Whether that is a good thing or a really bad thing on how much
 * damage the software will do when it fails.
 */
