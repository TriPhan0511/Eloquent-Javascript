// let number = Number(prompt('Pick a number'));
// console.log(`The number is the square root of ${number * number}`);

// CONDITIONAL EXECUTION
// let num = Number(prompt('Pick a number'));
// if (!Number.isNaN(num)) {
//     console.log(`The number is the square root of ${num * num}`);
// } else {
//     console.log("Hey. Why didn't you give me a number?");
// }

// Chain multiple if/else pairs together
let num = Number(prompt('Pick a number'));
if (num < 10) {
    console.log('Small');
} else if (num < 100) {
    console.log('Medium');
} else {
    console.log('Large');
}
