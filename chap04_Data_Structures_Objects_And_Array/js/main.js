// let listOfNumbers = [2, 3, 5, 7, 11];

// console.log(listOfNumbers);
// console.log(listOfNumbers.length); // 5
// console.log(listOfNumbers[0]); // 2
// console.log(listOfNumbers[4]); // 11
// console.log(listOfNumbers[5]); // undefined

// console.log(listOfNumbers[0]); // 2
// listOfNumbers[0] = 100;
// console.log(listOfNumbers[0]); // 100

// ACCESS PROPERTIES IN JAVASCRIPT
// console.log(listOfNumbers.length); // 5
// console.log(listOfNumbers['length']); // 5
// ----------------------------------------------------------------------------------

// METHODS
// let doh = 'Doh';
// console.log(typeof doh.toUpperCase); // function
// console.log(doh.toUpperCase()); // 'DOH'
// --------------------------------------------------

// TWO METHODS YOU CAN USE TO MANIPULATE ARRAYS
// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence); // [1, 2, 3, 4, 5]

// console.log(sequence.pop()); // 5
// console.log(sequence); // [1, 2, 3, 4]
// ----------------------------------------------------------------------------------

// OBJECTS
let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running'],
};

// console.log(day1); // {squirrel: false, events: ["pizza", "running"]}
// console.log(day1.squirrel); // false
// console.log(day1['events']); // ['pizza', 'running']
// console.log(day1.events[1]); // running

// console.log(day1.wolf); // undefined
// day1.wolf = false;
// console.log(day1.wolf); // false

// let description = {
//     work: 'Went to work',
//     'touched tree': 'Touched a tree',
// };

// console.log(description.work); // 'Went to work'
// console.log(description['touched tree']); // 'Touched a tree'
// console.log(description['work']);
// description['work'] = 'go out';
// console.log(description['work']);
// ------------------------------------------------------------------

// THE UNARY delete OPERATOR: when applied to an object property,
// will remove the named property from the object.
// let anObject = {
//     left: 1,
//     right: 2,
// };

// console.log(anObject); // {left: 1, right: 2}
// console.log(anObject.right); // 2
// delete anObject['right'];
// console.log(anObject.right); // undefined
// ------------------------------------------------------------------

// THE BINARY in OPERATOR: when appiled to a string and an object,
// tells you whether that object has a property with that name.
// let info = {
//     name: 'Tri Phan',
//     isDeveloper: true,
//     email: 'phanphutri@gmail.com',
// };

// let prop = 'name';
// let prop2 = 'age';
// console.log(prop in info); // true
// console.log(prop2 in info); // false

// if ('email' in info && info.email === 'phanphutri@gmail.com') {
//     console.log('Confirm');
// } else {
//     console.log('No email address');
// }
// ---------------------------------------------------------

// let anObject = {
//     left: undefined,
//     right: 'hello world',
// };

// console.log('left' in anObject); // true
// console.log('right' in anObject); // true
// delete anObject.right;
// console.log('right' in anObject); // false
// ------------------------------------------------------------------

// TO FIND OUT WHAT PROPERTIES AN OBJECT HAS,
// YOU CAN USE THE Object.keys() FUNCTION.
// console.log(Object.keys({ x: 0, y: 0, z: 2 })); // ['x', 'y', 'z']
// -----------------------------------------------

// let info = {
//     name: 'Tri Phan',
//     isDeveloper: true,
//     age: 37,
//     family: ['parents', 'younger sister', 'wife', 'son'],
// };

// let infoKeys = Object.keys(info); // ['name', 'isDeveloper', 'age', 'family']
// for (let i = 0; i < infoKeys.length; i++) {
//     let key = infoKeys[i];
//     console.log(info[key]);
// }

/**
 * // ->
 * Tri Phan
 * true
 * 37
 * ['parents', 'younger sister', 'wife', 'son']
 */
// ------------------------------------------------------------------

// There's an Object.assign() function
// that copies all properties from one object into another object
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA); // {a: 1, b: 3, c: 4}
