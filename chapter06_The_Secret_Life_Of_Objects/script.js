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

// let blackRabbit = { type: 'black' };
// speak.call(blackRabbit, 'Aloha, world');
// -> The black rabbit says 'Aloha, world'

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
// -----------------------------------------------------------------------------------------------

/**
 * 4. CLASSES
 */

/**
 * Javascript's prototype system can be interpreted as a somewhat informal take on
 * an object-oriented concept called classes. A class defines the shape of a type
 * of object - what methods and properties it has. Such an object is called an instance
 * of the class.
 *
 * Prototypes are useful for defining properties for which all instances of a class
 * share the same value, such as methods. Properties that differ per instance,
 * such as our rabbits' type property, need to be stored directly in the objects themselves.
 *
 * So to create an instance of a given class, you have to make an object that derives from
 * the proper prototype, but you also have to make sure it, itself, has the properties that
 * instances of this class are supposed to have. This is what a constructor function does.
 */

// Prototype of rabbits
// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   },
// };

// Constructor
// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// let whiteRabbit = makeRabbit('white');

// console.log(typeof whiteRabbit); // object
// console.log(whiteRabbit.type); // white
// whiteRabbit.speak('Kekeke');
// console.log(typeof whiteRabbit.speak); // function
// console.log(typeof whiteRabbit.type); // string

/**
 * Javascript provides a way to make defining this type of function easier.
 * If you put the keyword new in front of a function call, the function is treated
 * as a constructor. This means that an object with the right prototype is
 * automatically created, bound to this in the function, and returned at the end
 * of the function.
 *
 * The prototype object used when constructing objects is found by taking the
 * prototype property of the constructor function.
 */

// Constructor
// function Rabbit(type) {
//   this.type = type;
// }

// // Create prototype for Rabbit
// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// // Create a new instance of Rabbit
// let weirdRabbit = new Rabbit('weird');

// weirdRabbit.speak('hello, world');
// -> The weird rabbit says 'hello, world'

/**
 * Constructors (all functions, in fact) automatically get a property named prototype,
 * which by default holds a plain, empty object that derives from Object.prototype.
 * You can overwrite it with a new object if you want. Or you can add properties to
 * the existing object, as the example does.
 */

/**
 * By convention, the names of constructors are capitalized so thay they can easily
 * be distinguished from other functions.
 */

/**
 * It is imortant to understand the distinction between the way a prototype
 * is associated with a constructor (through its prototype property) and
 * the way objects have a prototype (which can be found with Object.getPrototypeOf).
 *
 * The actual prototype of a constructor is Function.prototype since constructors
 * are functions. Its prototype property holds the prototype used for instances
 * created through it.
 */

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// -> true
// -----------------------------------------------------------------------------------------------

/**
 * 5. CLASS NOTATION
 */

/**
 * So Javascript classes are constructor functions with a prototype property. That
 * is how they work, and until 2015, that was how you had to write them.
 *
 * These days, we have a less awkward notation
 */

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit('killer');
// let blackRabbit = new Rabbit('black');

// killerRabbit.speak('heyyo');
// blackRabbit.speak('hungry!');

/**
 * The class keyword starts a class declaration, which allow us define a constructor
 * and set of methods all in a single place.
 * Any number of methods may be written inside the declaration's braces.
 * The one named constructor is treated specially. It provides the actual constructor
 * function, which will be bound to the name Rabbit.
 * The others are packaged into that constructor's prototype. Thus, the earlier class
 * declaration is equivalent to the constructor definition from the previous section.
 * It just looks nicer.
 */

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// // -> true
// console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// // -> true

/**
 * Class declarations currently allow only methods - properties that hold functions - to
 * be added to the prototype. This can be somewhat inconvenient when you want to save
 * a non-function value in there. The next version of the language will probably improve
 * this. For now, you can create such properties by directly manipulating the prototype
 * after you've defined the class.
 *
 * Like function, class can be used both in statements and in expressions.
 * When used as an expression, it doesn't define a binding but just produces the
 * constructor as a value. You are allowed to omit the class name in a class expression.
 */

// let object = new (class {
//   getWord() {
//     return 'hello';
//   }
// })();

// console.log(object.getWord());
// --------------------------------------------------------

class Animal {
  constructor(type) {
    this.type = type;
  }

  moving(how) {
    console.log(`The ${this.type} moves by ${how}`);
  }
}

let fish = new Animal('Fish');
// fish.moving('Swimming');
// fish.breathing('nose');

// console.log(typeof Animal); // function
// console.log(typeof fish); // object

Animal.prototype.breathing = function (what) {
  console.log(`The ${this.type} breath by ${what}`);
};
// fish.breathing('nose');

console.log(Object.getPrototypeOf(fish) == Animal.prototype); // true
