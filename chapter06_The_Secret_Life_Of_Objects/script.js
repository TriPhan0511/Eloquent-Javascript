// Object declaration
// let obj = {
//   key1: 'value1',
//   key2: ['value2', 'value3'],
//   key3: [
//     ['value4', 'value5'],
//     ['value6', 'value7'],
//   ],
//   key4: {
//     anotherKey1: 'anotherValue1',
//     anotherKey2: ['anotherValue2', 'anotherValue3'],
//   },
// };

// Access to object
// console.log(obj);

// List all keys of an object
// console.log(Object.keys(obj)); // ["key1", "key2", "key3", "key4"]

// Access to a value of an object using bracket
// console.log(obj['key1']); // value1

// Access to a value of an object using dot notation
// console.log(obj.key1); // value1

// console.log(obj.key2); // ["value2", "value3"]
// console.log(obj.key2[1]); // value3

// console.log(obj.key3);
/**
 * [["value4", "value5"], ["value6", "value7"]]
 */

// console.log(obj.key3[0]); // ["value4", "value5"]
// console.log(obj.key3[1][1]); // value7

// console.log(obj.key4);
/**
 * {anotherKey1: "anotherValue1", anotherKey2: ["anotherValue2", "anotherValue3"]}
 */

// console.log(obj.key4.anotherKey1); // "anotherValue1"
// console.log(obj.key4.anotherKey2[1]); // "anotherValue3"

// Add more properties to the object
// obj.key5 = ['value8', 'value9'];
// console.log(obj.key5); // ["value8", "value9"]

/**
 * In programming culture, we have a thing called object-oriented programming,
 * a set of techniques that use objects (and related concepts) as the central principle
 * of program organization.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 1. ENCAPSULATION
 */

/**
 * The core idea in object-oriented programming is to divide programs into smaller
 * pieces and make each piece responsible for managing its own state.
 *
 * This way, some knowledge about the way a piece of the program works can
 * be kept local to that piece. Someone working on the rest of the program does
 * not have to remmeber or even be aware of that knowledge. Whenever these
 * local details change, only the code directly aroud it needs to be updated.
 *
 * Different pieces of such a program interact with each other through
 * intefaces, limited sets of functions or bindings that provide useful functionality
 * at more abstract level, hiding their precise implementation.
 *
 * Such program pieces are modeled using objects. Their interface consist of a
 * specific set of methods and properties. Properties that are part of the interface
 * are called public. The others, which outside code should not be touching,
 * are called private.
 *
 * Many languages provide a way to distinguish private and public properties
 * and prevent outside code from accessing the private ones altogether.
 * Javascript, once again taking the minimalist approach,
 * does not - not yet at least. There is work underway to add this to the language.
 *
 * Even though the language doesn't have this distinction built in, Javascript
 * programmer are successful using this idea. Typically, the available interface
 * is described in documentation or comment. It is also common to put an
 * underscore (_) character at the start of property namesto indicate that those
 * properties are private.
 *
 * Separating interface from implementation is a great idea. It is usually called
 * encapsulation.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 2. METHODS
 */

/**
 * Methods are nothing than properties that hold function values.
 * This is a simple method:
 */

// let rabbit = {};

// rabbit.speak = function (line) {
//   console.log(`The rabbit says ${line}`);
// };

// rabbit.speak("I'm alive."); // The rabbit says I'm alive.

/**
 * Usually a method needs to do something with the object it was called on.
 *
 * When a function is called as method - looked up as a property and
 * immediately called, as in object.method() - the binding called this
 * in its body automatically points at the object that it was called on.
 */

// function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = { type: 'white', speak };
// let hungryRabbit = { type: 'hungry', speak };

// whiteRabbit.speak(`Oh my ears and whiskers, how late it's getting!`);
// -> The white rabbit says 'Oh my ears and whiskers, how late it's getting'

// hungryRabbit.speak('I could use a carrot right now.');
// -> The hungry rabbit says 'I could use a carrot right now.'

/**
 * You can think of this as an extra parameter that is passed in a different way.
 * If you want to pass it explicitly, you can use a function's call method,
 * which takes the this value as its first argument and treat further arguments
 * as normal parameters.
 */

// speak.call(hungryRabbit, 'Burp!');
// -> The hungry rabbit says 'Burp!'

/**
 * Since each function has its own this binding, whose value depends on the
 * way it is called, you cannot refer to the this of the wrapping scope in a
 * regular function defined with the function keyword.
 *
 * Arrow functions are different - they do not bind their own this but can see
 * the this binding of the scope around them. Thus, you can do something like
 * the following code, which references this from inside a local function:
 */

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }

// normalize.call({ coords: [0, 2, 3], length: 5 });
// -> [0, 0.4, 0.6]

/**
 * If I had written the argument to map using the function keyword, the code
 * doesn't work.
 */
// -----------------------------------------------------------------------------------------------

/**
 * 3. PROTOTYPES
 */

// let empty = {};
// console.log(empty.toString);
// -> f toString() { [native code] }

// console.log(empty.toString());
// -> [object Object]

/**
 * I pulled a property out of an empty object. Magic!
 *
 * Well, not really. I have simply been withholding information about the way
 * Javascript objects work. In addition to their set of properties, most objects
 * also have a prototype.
 *
 * A prototype is another object that is used as a fallback source of properties.
 * When a object gets a request for a property that it does not have, its prototype
 * will be searched for the property, then the prototype's prototype, and so on.
 */

/**
 * So who is the prototype of that empty object? It is the great ancestral prototype,
 * the entity behind almost all objects, Object.prototype.
 */

// console.log(Object.getPrototypeOf({}) == Object.prototype);
// -> true

// console.log(Object.getPrototypeOf(Object.prototype));
// -> null

/**
 * As you guess, Object.getPrototypeOf returns the prototype of an object.
 *
 * The prototype relations of Javascript objects form a tree-shaped structure,
 * and at the root of this structure sits Object.prototype. It provides a few methods
 * that show up in all objects, such as toString, which converts an object to a string
 * representation.
 */

/**
 * Many objects don't directly have Object.prototype as their prototype but
 * instead have another object that provides a different set of default properties.
 *
 * Functions derive from Function.prototype, and arrays derive from Array.prototype
 */

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// // -> true

// console.log(Object.getPrototypeOf([]) == Array.prototype);
// // -> true

/**
 * Such a prototype object will itself have a prototype, often Object.prototype,
 * so that it still indirectly provides methods like toString.
 */

/**
 * You can use Object.create to create an object with a specific prototype.
 */

// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}`);
//   },
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEEEE!');
// -> The killer rabbit says 'SKREEEEE!'

/**
 * A property like speak(line) in an object expression is a shorthand way of
 * defining a method. It creates a property called speak and gives it a function
 * as its value.
 */

/**
 * The "proto" rabbit acts as a container for the properties that are shared by all
 * rabbits. An individual rabbit object, like the killer rabbit, contains properties
 * that apply only to itself - in this case its type - and derives shared properties
 * from its prototype.
 */
