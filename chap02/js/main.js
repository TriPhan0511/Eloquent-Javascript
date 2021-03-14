// let number = Number(prompt('Pick a number'));
// console.log(`The number is the square root of ${number * number}`);
//-----------------------------------------------------------------------------------

// CONDITIONAL EXECUTION
// let num = Number(prompt('Pick a number'));
// if (!Number.isNaN(num)) {
//     console.log(`The number is the square root of ${num * num}`);
// } else {
//     console.log("Hey. Why didn't you give me a number?");
// }

// Chain multiple if/else pairs together
// let num = Number(prompt('Pick a number'));
// if (num < 10) {
//     console.log('Small');
// } else if (num < 100) {
//     console.log('Medium');
// } else {
//     console.log('Large');
// }
//-----------------------------------------------------------------------------------

// WHILE AND DO LOOPS

// WHILE LOOPS
// let number = 0;
// while (number < 12) {
//     console.log(number);
//     number += 2;
// }

// Calculate and show the value of 2 to the 10th power
// let counter = 0;
// let result = 1;
// while (counter < 10) {
//     result *= 2;
//     counter++;
// }
// console.log(`Result: ${result}`);

// DO LOOPS
// let yourName;
// do {
//   yourName = prompt('Your name');
// } while (!yourName);
// console.log(yourName);
//-----------------------------------------------------------------------------------

// FOR LOOPS
// for (let number = 0; number < 10; number = number + 2) {
//   console.log(number);
// }

// for (let number = 0; number < 10; number += 2) {
//   console.log(number);
// }

// Calculate and show the value of 2 to the 10th power
// let result = 1;
// for (let index = 0; index < 10; index++) {
//   result *= 2;
// }
// console.log(result);
//-----------------------------------------------------------------------------------

// BREAKING OUT OF A LOOP
// Find the first number is both greater than 20 and divisible by 7
// for (let number = 20; ; number++) {
//   if (number % 7 == 0) {
//     console.log(number);
//     break;
//   }
// }
//-----------------------------------------------------------------------------------

// DISPATCHING ON A VALUE WITH SWITCH
let weather = prompt("What's the weather like?");
switch (weather) {
  case 'rainy':
    console.log('Remmeber to bring an umbrella');
    break;
  case 'sunny':
    console.log('Dress lightly');
  // break;
  case 'cloudy':
    console.log('Go outside');
    break;
  default:
    console.log('Unkown weather type!');
    break;
}
