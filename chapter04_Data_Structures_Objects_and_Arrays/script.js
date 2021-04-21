/**
 * CHAPTER 04
 * DATA STRUCTURES: OBJECTS AND ARRAYS
 *
 * Numbers, Booleans, and strings are the atoms that data structure are built from.
 * Many types of information require more than one atom, though.
 * Objects allow us to group values - including other objects - to build more
 * complex structures.
 */

/**
 * 1. DATA SETS
 *
 * Javascript provides a data type specifically for storing sequences of values.
 * It is called an array and is written as a list of values between square brackets, seperated
 * by commas.
 */

// Example
// let listOfNumbers = [2, 3, 5, 7];
// console.log(typeof listOfNumbers); // object
// console.log(listOfNumbers[0]); // 2
// console.log(listOfNumbers[2]); // 5
// console.log(listOfNumbers[2 - 1]); // 3
// console.log(listOfNumbers[100]); // undefined

/**
 * The notation for getting at the element inside an array also uses square brackets.
 * A pair of square brackets immediately after an expression, with another expression
 * inside of them, will look up the element in the left-hand expresssion that
 * corresponds to the index given by the expression in the brackets.
 *
 * The first index of an array is zero, not one. So the first element is retrieved
 * with listOfNumbers[0].
 * Think of the index as the amount of items to skip, couting dfrom the start of
 * the array.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 2. PROPERTIES
 */

// Example: Getting the length of a string
// We access the length property of the value in myString
// let myString = 'Hello, world';
// console.log(myString.length); // 12

// Example: the maximum function
// We access the length property named max in the Math object
// console.log(Math.max(1, 4, 2)); // 4

/**
 * Almost all Javascripts values have properties. The exception are null and undefined.
 * If you try to access a property on one of these nonvalues, you get an error.
 */
// undefined.length; // error
// null.length; // error

/**
 * The two main ways to acces properties in Javascript are with a dot and
 * with square brackets. Both value.x and value[x] access a property on value - but
 * not necessarily the same property. The difference is in how x is interpreted.
 * When using a dot, the word after the dot is the literal name of the property.
 * When using square brackets, the expression between the brackets is evaluated to get
 * the property name. Whereas value.x fetches the property of value named "x",
 * value[x] tries to evaluate the expression x and uses the result, converted to
 * a string, as the property name.
 *
 * So if you know that the property you are interested in is called color, you say
 * value.color. If you want to extract the property named by the value held in
 * the binding i, you say value[i]. Property names are strings. They can be any string,
 * but the dot notation works only with names that look like valid binding names. So if
 * you want to access a property named 2 or John Doe, you must use square brackets:
 * value[2] or value["John Doe"].
 */

/**
 * The elements in an array are stored as the array's properties, using numbers as
 * property names. Because you can't use the dot notation with numbers and usually
 * want to use a binding that holds the index anyway, you have to use the bracket
 * notation to get at them.
 *
 * The length property of an array tell ushow many elements it has. This property
 * name is a valid binding name, and we know its name in advance, so to find the length
 * of an array, you typically write array.length because that easier to write than
 * array["length"].
 */
// -----------------------------------------------------------------------------------------------

/**
 * 3. METHODS
 *
 * Both string and array values contain, in addition to the length property, a number of
 * properties that hold function values.
 */

// Example:
// let doh = 'Doh';
// console.log(typeof doh.toUpperCase); // function
// console.log(doh.toUpperCase()); // DOH

/**
 * Every string has a toUpperCase property. When called, it will return a copy of the string
 * in which all letters have been converted to uppercase.There is also toLowerCase, going
 * the other way.
 *
 * Interestingly, even though the call to toUpperCase does not pass any arguments,
 * the function somehow access to the string "Doh", the value whose property we called.
 */

/**
 * Properties that contain functions are generally called methods of the value they
 * belong to, as in "toUpperCase is a method of a string".
 */

// This example demonstrates two methods you can use to manipulate arrays:
// let sequence = [1, 2, 3];

// sequence.push(4);
// sequence.push(5);
// console.log(sequence); // [1, 2, 3, 4, 5]
// sequence.push(6, 7);
// console.log(sequence); // [1, 2, 3, 4, 5, 6, 7]

// console.log(sequence.pop()); // 7
// console.log(sequence); // [1, 2, 3, 4, 5, 6]

/**
 * The push method adds values to the end of an array and the pop method does the opposite,
 * removing the last value in the array and returning it.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 4. OBJECTS
 */

/**
 * Values of the type object are arbitrary collection of properties.
 * One way to create an object is by using braces as an expression.
 */

// let day1 = {
//   squirrel: false,
//   events: ['work', 'touched tree', 'pizza', 'running'],
// };

// console.log(day1.squirrel); // false
// console.log(day1.wolf); // undefined
// day1.wolf = false;
// console.log(day1.wolf); // false

/**
 * Inside the braces, there is a list of properties separated by commas. Each property has
 * a name follwed by a colon and a value. When an object is written over multiple lines,
 * indenting it like in the example helps readability.
 *
 * Properties whose names aren't valid binding names or valid numbers have to be quoted.
 */

// let descriptions = {
//   work: 'Went to work',
//   'touched tree': 'Touched a tree',
// };

// console.log(descriptions.work); // Went to work
// console.log(descriptions['work']); // Went to work
// console.log(descriptions['touched tree']); // Touched a tree

/**
 * This means that braces have two meaning in Javascript.
 * At the start of a statement, they start a block of statements.
 * In any other position, they describe an object.
 * Fortunately, it is rarely useful to start a statement with an object in braces,
 * so the ambiguity between these two is not much a problem.
 */

/**
 * Reading a property that doesn't exist will give you the value undefined.
 */

/**
 * It is possible to assign a value to a property expression with the = operator.
 * This will replace the property's value if it already existed or create a new
 * property on the object if it didn't.
 */

/**
 * To briefly return to our tentacle model of bindings - property bindings are
 * similar. They grasp values, but other bindings and properties might be holding
 * on those same values. You may think of objects as octopuses with any number
 * of tentacles, each of which has a name tattooed on it.
 */

/**
 * The delete operator cuts off a tentacle from such an octopus. It is a unary operator
 * that, when appiled to an object property, will remove the named property from the object.
 * This is not common thing to do, but it is possible.
 */

// let anObect = {
//   left: 1,
//   right: 2,
//   center: undefined,
// };

// console.log(anObect.left); // 1

// delete anObect.left;
// console.log(anObect.left); // undefined

// console.log('left' in anObect); // false
// console.log('right' in anObect); // true

// console.log('center' in anObect); // true

/**
 * The binary in operator, when applied to a string and an object, tells you whether that
 * object has a property with that name.
 * The difference between setting a property to undefined and actually deleting it is that,
 * in the first case, the object still has the property (it just doesn't have a very interesting
 * value), whereas in the second case the property no longer present and in will return false.
 */

/**
 * To find out what properties an object has, you can use the Object.keys function.
 * You give it an object, and it returns an array of strings - the object's property names.
 */

// console.log(Object.keys({ x: 0, y: 0, z: 2 })); // ["x", "y, "z"]

/**
 * There's an Object.assign function that copies all properties from one object
 * into another.
 */

// let objectA = { a: 1, b: 2 };
// Object.assign(objectA, { b: 3, c: 4 });
// console.log(objectA); // {a: 1, b: 3, c: 4}

/**
 * Arrays, then, are just a kind of object specialized for storing sequences of things.
 * If you evaluate typeof [], it produces "object".
 * You can see them as long, flat octopuses with all their tentacles in a neat row,
 * labeled with numbers.
 */

// We will represent the journal that Jacques keeps as an array of objects

// let journal = [
//   { events: ['work', 'touched tree', 'pizza', 'running', 'television'], squirrel: false },
//   {
//     events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
//     squirrel: false,
//   },
//   { events: ['weekends', 'cycling', 'break', 'peanuts'], squirrel: true },
//   /* and so on... */
// ];
// -----------------------------------------------------------------------------------------------

/**
 * 5. MUTABILITY
 */

/**
 * The types of values discussed in ealier chapters, such as numbers, strings, and Boolean
 * are immutable - it is impossible to change values of those types. You can combine them and
 * new values from them, but when you take a specific string value, that value will always
 * remain the same. The text inside it cannot be changed.
 * If you have a string that contains "cat", it is not possible for other code to change a
 * character in your string to make it spell "rat".
 */

/**
 * Objects work differently. You can change their properties, causing a single object value
 * to have different content at different times.
 *
 * When we have two numbers, 120 and 120, we can consider them precisely the same number,
 * whether or not they refer to the same physical bits.
 * With objects, there is a difference between having two references to the same object and
 * having two objects that contain the same properties.
 */

// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

// console.log(object1 == object2); // true
// console.log(object1 == object3); // false

// object1.value = 15;
// console.log(object2.value); // 15
// console.log(object3.value); // 10

/**
 * The object1 and object 2 bindings grasp the same object, which is why changing object1
 * also changes the value of object2. They are said to have the same identity. The binding
 * object3 points to a different object, which initially contains the same properties as
 * object1 but lives a separate life.
 */

/**
 * Bindings can also be changeable or constant, but this is separate from the way
 * their values behave. Even though number values don't change, you can use a let binding
 * to keep track of a changing number by changing the value the binding points at. Similarly,
 * though a const binding to an object can itself not be changed and will continue to point
 * at the same object, the contents of that object might change.
 */

// const score = { visitors: 0, home: 0 };
// // This is okay
// score.visitors = 1;
// // This isn't allowed
// score = { visitors: 1, home: 1 };

/**
 * When you compare objects with Javascript's == operator, it compares by identity:
 * it will produce true only if both objects are precisely the same value.
 * Comparing different objects will return false, even if they have identical
 * properties. There is no "deep" comparison operation built into Javascript,
 * which compares objects by content, but it is possible to write it yourself.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 8. ARRAY LOOP
 */

// Example
// let JOURNAL = [];

// Function: add entries into an array
// function addEntry(events, squirrel) {
//   JOURNAL.push({ events, squirrel });
// }

// Add some entries into JOURNAL
// addEntry(['peanuts', 'beer'], true);
// addEntry(['cycling', 'brushed teeth'], false);

// Loop over an array in classical Javascript
// for (let i = 0; i < JOURNAL.length; i++) {
//   let entry = JOURNAL[i];
//   // Do something with entry
//   console.log(entry.events);
// }

// The simpler way to wite a loop in modern Javascript
// for (let entry of JOURNAL) {
//   console.log(entry.events);
// }

/**
 * When a for loop looks like this, with the word of after a variable definition,
 * it will loop over the elements of the value given after of.
 * This works not only for arrays but also for strings and other data structures.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 10. FUTHER ARRAYOLOGY
 */

/**
 * Introducing some generally useful array methods.
 */

/**
 * 10.1 push, pop, unshift, shift
 * We saw push and pop, which add and remove elements at the end of an array.
 * The corresponding methods for adding and removing things at the start of
 * an array are called unshift and shift.
 */

// Example:
// let toDoList = [];

// // Function: add a task at the end of toDoList
// function remember(task) {
//   toDoList.push(task);
// }

// // Function: get a task at the start of toDoList and remove it
// function getTask() {
//   return toDoList.shift();
// }

// // Function: add a task at the start of toDoList
// function rememberUrgently(task) {
//   toDoList.unshift(task);
// }

// // Testing
// remember('Do housework');
// remember('Go out');
// // console.log(toDoList); // ["Do housework", "Go out"]

// console.log(getTask()); // Do housework
// console.log(toDoList); // ["Go out"]

// rememberUrgently('Do exercise');
// console.log(toDoList); // ["Do exercise", "Go out"]
// -----------------------------------------------------------------------

/**
 * 10.2 indexOf, lastIndexOf
 *
 * To search for a specific value, arrays provide an indexOf method.
 * The method searches through the array from the start to the end and returns the index
 * at which the requested value was found - or -1 if it wasn't found.
 *
 * To search from the end instead of the start, there's a similar method called lastIndexOf.
 *
 */

// Example:
// console.log([1, 2, 3, 2, 1].indexOf(2)); // 1
// console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // 3

/**
 * Both indexOf and lastIndexOf take an optional second argument that indicates where to
 * start searching.
 */

// Example:
// console.log([1, 2, 3, 2, 1].indexOf(2, 2)); // 3
// console.log([1, 3, 2, 3, 4, 5].lastIndexOf(3, 2)); // 1

/**
 * 10.3 slice
 *
 * This method takes start and end indices and returns an array that has only the elements
 * betwen them. The start index is inclusive, the end is exclusive.
 */

/**
 * When the end index is not given, slice will take all of the elements after the start index.
 * You can also omit the start index to copy entire array.
 */

// Example:
// console.log([0, 1, 2, 3, 4].slice(2, 4)); // [2,3]
// console.log([0, 1, 2, 3, 4].slice(2)); // [2, 3, 4]
// console.log([1, 2, 3, 4].slice()); // [1, 2, 3, 4]

/**
 * 10.4 concat
 * The concat method can be used to glue arrays together to create a new array,
 * similar to what the + operator does for strings.
 */

/**
 * The following example shows both concat and slice in action.
 * It takes an array and an index, and it returns a new array that is a copy of
 * the original array with the element at the given index removed.
 */

// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }

// console.log(remove(['a', 'b', 'c', 'd', 'e'], 2)); // ['a', 'b', 'd', 'e']

/**
 * If you pass concat an argument that not an array, that value will be added
 * to the new array as it if were a one-element array.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 11. STRINGS AND THEIR PROPERTIES
 *
 * Methods:
 * length, toUpperCase, toLowerCase,
 * slice, indexOf,
 * trim,
 * padStart,
 * split, join
 *
 */

/**
 * We can read properties like length and toUpperCase from string values. But if you try to add
 * a new property, it doesn't stick.
 */

// let kim = 'Kim';
// kim.age = 18;
// console.log(kim.age); // undefined

/**
 * Values of type string, number, and Boolean are not objects, and though the language doesn't
 * complain if you try to set new properties on them, it doesn't actually store those properties.
 * As mentioned earlier, such values are immutable and cannot be changed.
 *
 * But these types do have buit-in properties. Every string value has a number of methods.
 * Some very useful ones are slice and indexOf, which resemble the array methods of the same name.
 */

// console.log('coconuts'.slice(4, 7)); // nut
// console.log('coconut'.indexOf('u')); // 5

/**
 * One difference is that a string's indexOf can search for a string containing more than
 * one character, whereas the corresponding array method looks only for a single element.
 */

// console.log('one two three'.indexOf('ee')); // 11

/**
 * The trim method removes whitespaces (spaces, newlines, tabs, and similar characters) from
 * the start and end of a string.
 */

// let str = ' okay \n ';
// console.log(str);
// console.log(str.trim());

/**
 * The padStart method takes the desired length and padding character as arguments.
 */

// console.log(String(6).padStart(3, '0')); // 006

/**
 * You can split a string on every occurrence of another string with split and join it again
 * with join
 */
// let sentence = 'Secretarybirds specialize in stomping';
// let words = sentence.split(' ');
// console.log(words); // ['Secretary', 'specialize', 'in', 'stomping']
// console.log(words.join('. ')); // Secretary. specialize. in. stomping

/**
 * A string can be repeated with the repeat method, which creates a new string containing
 * multiple copies of the original string, glued together.
 */
// console.log('LA'.repeat(3)); // LALALA

/**
 * We have already seen the string type's length property.
 * Accessing the individual characters in a string looks like accessing array elements.
 */

// let string = 'abc';
// console.log(string.length); // 3
// console.log(string[1]); // b
// -----------------------------------------------------------------------------------------------

/**
 * 12. REST PARAMETERS
 */

/**
 * It can be useful for a function to accept any number of arguments. For example,
 * Math.max computes the maximum of all the arguments it is given.
 *
 * To write such a function, you put three dots before the function's last parameter.
 */

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return result;
// }

// console.log(max(4, 1, 9, -2));

/**
 * When such a function is called, the rest parameter is bound to an array containing
 * all further arguments. If there are other parameters before it, their values aren't
 * part of that array. When, as in max, it is the only parameter,
 * it will hold all arguments.
 *
 * You can use a similar three-dot notation to call a function
 * with an array of arguments.
 */

// let numbers = [5, 1, 7];
// console.log(max(...numbers)); // 7

/**
 * This "spreads" out the array into the function call, passing its elements as
 * separate arguments. It is possible to include an array like that along with
 * other arguments, as in max(9 ,...numbers, 2).
 *
 * Square bracket array notation similarly allows the triple-dot operator to
 * spread out another into a new array.
 */

// let words = ['never', 'fully'];
// console.log(['will', ...words, 'understand']); // ['will', 'never', 'fully', 'understand']
// -----------------------------------------------------------------------------------------------

/**
 * 13. THE MATH OBJECT
 */

/**
 * As we've seenn, Math is a grab bag of number-related utility functions, such as
 * Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).
 *
 * The Math object is used as a container to group a bunch of related functionality.
 * There is only one Math object, and it is almost never useful as a value.
 * Rather, it provides a namespace so that all these functions and values do not
 * have to be global bindings.
 *
 * Having too many global bindings "pollutes" the namespace. The more names have been taken,
 * the more likely you are accidentally overwrite the value of some existing binding.
 * For example, it's not unlikely to want to name something max in one of your programs.
 * Since Javascript's built-in max function is tucked safely inside the Math object, we
 * don't have to worry about overwriting it.
 *
 * Many languages will stop you or at least warn you, when you are defining a binding with
 * a name that is already taken. Javascript does this for bindings you declared with let or
 * const but - perversely - not for standard bindings nor for bindings declared with var or
 * function.
 */

// Example: Do trigonometry
// function randomPointOnCircle(radius) {
//   let angle = Math.random() * 2 * Math.PI;
//   return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
// }

// console.log(randomPointOnCircle(2));
// {x: 1.9993188780800124, y: -0.05219218095538883}

/**
 * The previous example used Math.random. This is a function that returns a new
 * pseudorandom number between zero (inclusive) and one (exclusive) every time
 * you call it.
 */

// console.log(Math.random()); // 0.9717241335581308
// console.log(Math.floor(Math.random() * 10));

// let max = 15;
// console.log(Math.floor(Math.random() * max));
// -----------------------------------------------------------------------------------------------

/**
 * 14. DESTRUCTING
 */

/**
 * Let's go back to the phi function for a moment
 */

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2])
//     )
//   );
// }

/**
 * One of the reasons this function is awkward to read is that we have a binding pointing at
 * our array, but we'd prefer to have bindings for the elements of the array, that is,
 * let n00 = table[0] and so on. Fortunately, there is a succinct way to do this in Javascript.
 */

// Alternate way
// function phi([n00, n01, n10, n11]) {
//   return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
// }

/**
 * This is also for bindings create with let, var, or const. If you know the value you are
 * binding is an array, you can use square brackets to "look inside" of the value, binding
 * its contents.
 * A similar trick works for objects, using braces instead of square brackets.
 */

// let { name } = { name: 'Faraji', age: 23 };
// console.log(name); // Faraji

/**
 * Note that if you try to destructure null or undefined, you get an error, much as you would
 * if you directly try access a property of those values.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 15. JSON (Javascript Object Notation)
 */

/**
 * JSON looks similar to Javascript's way of writing arrays and objects, with a few restrictions.
 * All property names have to be surrounded by double quotes, and only simple data expressions
 * are allowed - no function calls, bindings, or anything that involves actual computation.
 * Comments are not allowed in JSON.
 */

// Example: A journal entry might look like this when represented as JSON data:
/**
 * {
 *    "squirrel" : false,
 *    "events": ["work", "touched tree", "pizza", "running"]
 * }
 */

/**
 * Javascript give us the function JSON.stringify and JSON.parse to convert data to and
 * from this format.
 * The first takes a Javascript value and returns a JSON-encoded string.
 * The second takes such a string and converts it to the value it encodes.
 */

// Example:
// let string = JSON.stringify({ squirrel: false, events: ['weekend'] });
// console.log(string); // {"squirrel": false, "events": ["weekend "]}
// console.log(JSON.parse(string).events); // ["weekend"]
// -----------------------------------------------------------------------------------------------

/**
 * SUMMARY
 */

/**
 * Objects and arrays (which are specific kind of object) provide ways to group several values
 * into a single value. Conceptually, this allows us to put a bunch of related things in a bag
 * and run around the bag, instead of wrapping our arms around all of the individual things
 * and trying to hold on them separately.
 */

/**
 * Most values in Javascript have properties, the exception being null and undefined.
 * Properties are accessed using value.prop or value["prop"].
 * Objects tend to use names for their properties and store more or less a fixed set of them.
 * Arrays, on the other hand, usually contain varying amounts of conceptually identical values
 * and use numbers (starting from 0) as the names of their properties.
 */

/**
 * There are some named properties in arrays, such as length and a number of methods.
 * Methods are functions that live in properties and (usually) act on the value they are
 * a property of.
 */

/**
 * You can iterate over arrays using a special kind of for loop - for (let element of array).
 *
 */
