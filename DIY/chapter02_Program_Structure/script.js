// PROGRAM STRUCTURE

// 1. EXPRESSIONS AND STATEMENTS
// A fragment of code that produces a value is called an expression.
// Every value that is written literally (such as 22 or "psychoanalysis") is an expression.
// An expression between parentheses is also an expression, as is a binary operator applied to
// two expressions or a unary operator aplied to one.

// If an expression corresponds to a sentence fragment, a Javascript statement corresponds to
// a full sentence. A program is a list of statements.

// 2. BINDINGS
// To catch and hold values, Javascript provides a thing called binding, or variable:

// let caught = 5 * 5;
// console.log(caught); // 25

// After a binding has been defined, its name can be used as an expression.
// The value of such an expression is the value the binding currently holds.
// let ten = 10;
// console.log(ten * ten); // 100

// When a binding points at a value, that does not mean it is tied to that value forever.
// The = operator can be used at any time on existing binding to disconnect them from their
// current values and have them poin to a new value.

// let mood = 'light';
// console.log(mood); // light
// mood = 'dark';
// console.log(mood); // dark

// You should imagine bindings as tentacles, rather than boxes.
// They do not contain values; they grasp them - two bindings can refer to the same value.

// A program can access only the values that it still has a reference to.
// When you need to remmeber something, you grow a tentacle to hold on to it or
// you reattach one of your existing tentacles to it.

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt); // 105

// When you define a binding without giving it a value, the tantacle has nothing to grasp,
// so it ends in thin air.
// If you ask for the value of an empty binding, you'll get the value undefined.

// A single let statement may define multiple bindings. The difinitions must be separated by commas.

// let one = 1,
//   two = 2;
// console.log(one + two); // 3

// The words var and const can also be used to create bindings, in a way similar to let.
// We rarely use var in this book because it has some confusing properties.
// The word const stands for constant. It defines a constant binding, which points at the same
// value for as long as it lives. This is useful for bindings that give a name to a value so that
// you can easily refer to it later.

// 3. BINDING NAMES

// 4. THE ENVIRONMENT
// The collection of bindings and theri values hat exist at a given time is called the environment.
// When a program starts up, this environment is not empty. It always contains bindings that are
// part of the language standard, and most of the time, it also has bindings that provide ways to
// interact with the currently loaded website and to read mouse and keyboard input.

// 4. FUNCTIONS
// A lot of the values provided in the default environment have the type function.
// A function is a piece of program wrapped in a value. Such values can be applied in order to
// run the wrapped program

// For example, in a browser environment, the binding prompt holds a function that shows a little
// dialog box asking for user input. It is used like this:
// prompt('Enter passcode');

// Executing a function is called invoking, calling, or applying it.
// You can call a function by putting parentheses after an expression that
// produces a function value. Usually you'll directly use the name of the binding that
// holds the function.
// The values between the parentheses are given to the program inside the function.
// In the example, the prompt function uses the string that we give it as the text to
// show in the dialog box. Values given to functions are called arguments. Different functions
// might need a diggerent number or different types of arguments.

// 5. THE CONSOLE.LOG

// 6. RETURN VALUES
// Showing a dialog box or writing text to the screen is a side effect.
// A lot of functions are useful because of the side effects they produce.
// Functions may also produce values, in which case they don't need to have a side effect
// to be useful.

// For example, the function Math.max takes any amount of number arguments and
// give back the greatest.

// console.log(Math.max(2, 6)); // 6

// When a function produces a value, it is said to return that value.
// Anything that produces a value is an expression in Javascript, which means function
// calls can be used within larger expressions.
// Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

// console.log(Math.min(2, 6) + 10); // 12

// 7. CONTROL FLOW
// When your program contains more than one statement, the statements are executed as if
// they are a story, from top to bottom.

// This example program has two statements. The first one asks the user for a number, and the second,
// which is executed after the first, show the square of that number:
// let theNumber = Number(prompt('Pick a number'));
// console.log(`Your number is the square root of ${theNumber * theNumber}`);

// 8. CONDITIONAL EXECUTION
// Not all programs are straight roads. We may, for example, want to create a branching road,
// where the program takes the proper branch based on a situation at hand.
// This is called conditional execution

// Conditional execution is created with the if keyword in Javascript.
// In the simple case, we want some code to be executed if, and only if, a certain condition holds.
// We might, for example, want to show a square of the input only if the input is actually a number.

// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log(`Your number is the square root of ${theNumber * theNumber}`);
// }

// The if keyword executes or skips a statement depending on the value of a Bollean exppression.
// The deciding expression is written after the keyword, between parentheses,
// followed by the statement to execute.

// The Number.isNaN function is a standard Javascript function that returns true if the argument
// it is given is NaN.
// The Number function happens to return NaN when you give it
// a string that doesn't represent a valid number.

// The braces can be used to group any number of statements into a single a statement, called a block.

// You often won't just have code that executes when a condition holds true,
// but also code that handles the other case.
// You can use the else keyword , together with if, to create two separate,
// alternative execution paths.

// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log(`Your number is the square root of ${theNumber * theNumber}`);
// } else {
//   console.log("Why didn't you give me a number?");
// }

// If you have more than two paths to choose from , you can "chain" multiple
// if/else together. Here's an example:

// let theNumber = Number(prompt('Pick a number'));
// if (theNumber < 10) {
//   console.log('Small');
// } else if (theNumber < 100) {
//   console.log('Medium');
// } else {
//   console.log('Large');
// }

// 8. WHILE AND DO LOOPS
// Looping control flow allow us to go back to some point in the program where we were before and
// repeat it with our current program state.

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }

// A statement starting with the keyword while creates a loop.
// The word while is followed by an expression in parentheses and then a statement, much like if.
// The loop keeps entering that statement as long as the expression procduces a value
// that gives true when converted to Boolean.

// The number binding demonstrate the way a binding can track the progress of a program.
// Every time the loop repeats, number gets a value that is 2 more than its previous value.
// At the beginning of every repitition, it is compared with the number 12 to decide whether
// the program's work is finished.

// Example: Write a program that calculates and shows the value of 2 to the 10th power.

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result *= 2;
//   counter++;
// }
// console.log(result);

// A do loop is a control structure similar to a while loop.
// It differs only on one point: a do loop always execute its body at least once,
// and it starts testing whether it should stop only after the first execution.
// To reflect this, the test appears after the body of the loop.

// let yourName;
// do {
//   yourName = prompt("What's your name?");
// } while (!yourName);
// console.log(yourName);

// This program will force you enter a name.
// It will ask again and again until it gets something that is not an empty string.
// Applying the ! operator wil convert a value to Boolean type before negating it,
// and all strings except "" convert to true. This means the loop continues going
// round until you provide non-empty name.

// 9. INDENTING CODE

// if (false != true) {
//   console.log('That makes sense.');
//   if (1 < 2) {
//     console.log('No surprise there.');
//   }
// }

// 10. FOR LOOP
// Many loops follow the pattern shown in the while example. First a "counter"
// binding is created to track the progress of the loop. The comes a while loop,
// usually with a test expression that checks whether the counter has reached
// its end value. At the end of the loop body, the counter is updated to track progress.

// Because this pattern is so common, Javascript and similar language provide
// a slightly shorter and more comprehensive form, the for loop.

// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }

// The parentheses after a for keyword must contain two semicolons.
// The part before the first semicolon initialize the loop, usually by
// defining a binding.
// The second part is the expression that checks whether the loop mus continue.
// The final part updates the state of loop after every iteration.
// In most cases, this is shorter and clearer than a while construct.

// This is the code that computes 2 to the 10th power:

// let result = 1;
// for (let counter = 0; counter < 10; counter++) {
//   result *= 2;
// }
// console.log(result); // 1024

// 10. BREAKING OUT OF A LOOP
// Having the looping condition produce false is not only the way a loop can finish.
// There is a special statement called break that has the effect of immediately
// jumping out the enclosing loop.

// This program illustrates the break statement.
// It finds the first number that is both greater than or equal to 20 and
// divisible by 7.

// for (let current = 20; ; current++) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }

// The continue keyword is similar to break, in that it influences
// the progress of a loop.
// When continue is encountered in a loop body, control jumps out of
// the body and continue with the loop's next iteration.

// Example: continue in for loop

// for (let counter = 0; counter < 10; counter++) {
//   if (counter == 5) {
//     continue;
//   }
//   console.log(counter);
// }

// -> 1 2 3 4 6 7 8 9

// Example: continue in while loop

// let counter = 0;
// while (counter < 10) {
//   if (counter == 5) {
//     counter++; // NOTE
//     continue;
//   }
//   console.log(counter);
//   counter++;
// }

// -> 1 2 3 4 6 7 8 9

// 11. UPDATING BINDING SUCCINCTLY
// counter = counter + 2 -> counter += 2
// counter = counter + 1 -> counter += 1 -> counter++;
// counter = counter - 1 -> counter -= 1 -> counter--;

// for (let counter = 0; counter <= 12; counter += 2) {
//   console.log(counter);
// }

// 12. DISPATCHING ON A VALUE WITH SWITCH
// There is a construct called switch that is intended to express such a "dispatch"
// in a more direct way.
// Unfortunately, the syntax Javascript uses for this is somewhat awkward - a chain
// of if statement may look better.

// switch (prompt('What is the weather like?')) {
//   case 'rainy':
//     console.log('Remember to bring an umbrella.');
//     break;
//   case 'sunny':
//     console.log('Dress lightly.');
//     break;
//   case 'cloudy':
//     console.log('Go outside.');
//     break;
//   default:
//     console.log('Unknown weather type!');
//     break;
// }

// You may put any number of case labels inside the block opened by switch.
// The program will start executing at the label that corresponds to the value
// that switch was given, or at default if no matching value is found.
// It will continue executing , even across other labels, unitl it reaches a
// break statement.
