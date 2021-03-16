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
    squirrel: true,
    events: ['work', 'touched tree', 'pizza', 'running'],
};

//
// console.log(day1.squirrel); // true
// console.log(day1['squirrel']); // true

// console.log(day1.events); // ['work', 'touched tree', 'pizza', 'running']
// console.log(day1['events']); // ['work', 'touched tree', 'pizza', 'running']

// console.log(day1.events[0]); // work

console.log(day1.wolf); // undefined

day1.wolf = false;
console.log(day1.wolf); // false
