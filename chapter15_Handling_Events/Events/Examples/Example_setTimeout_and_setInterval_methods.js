/** setTimeout and setInterval methods */

/** 1.1. Window setTimeOut() method */

/**
 * The setTimeout() method calls a function or evaluates an expression after a
 * specified number of milliseconds.
 *
 * Syntax: setTimeOut(function, time)
 *
 *
 * _  time in millisecond (1000ms = 1s)
 * _  The function is only executed once. If you need to repeat execution, use the setInterval() method.
 * _  Use the clearTimeout() method to prevent the function from running.
 *
 * _ Return value: A number, representing the ID value of the timer that is set.
 *    Use this value with the clearTimeout() method to cancel the timer.
 */

// Example: Display a message after 3 seconds.

// // Way 1:
// setTimeout(() => {
//   console.log('Hello, world');
// }, 3000);
// ---------------------------------------------------------------

// // Way 2:
// setTimeout(displayMessage, 3000);

// function displayMessage() {
//   console.log('Aloha, everyone!');
// }
// ---------------------------------------------------------------

// // Way 3:
// setTimeout(() => {
//   displayMessage('David');
// }, 3000);

// function displayMessage(name) {
//   console.log(`Good morning, ${name}`);
// }
// ------------------------------------------------------------------------------------------------------------------------

/** 1.2. Window clearTimeout() method */

/**
 * The clearTimeout() method clears a timer set with the setTimeout() method.
 * The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
 *
 * myVar = setTimeout(function, time);
 *
 * Then, if the function has not already been executed, you will be able to stop the execution
 * by calling the clearTimeout() method.
 */

// // Example 1:
// // After 3 seconds, the message "Hello, world!" will appear.
// // If we want to stop that execution, we can call the clearTimeout() method.

// let displayMessage = setTimeout(() => {
//   console.log('Hello, world!');
// }, 3000);

// // Calls the clearTimeout() method if we want to stop the timer set by the setTimeout() method.
// clearTimeout(displayMessage);
// ---------------------------------------------------------------

// Example 2:
// Click button "Start" to display a message.
// Click button "Stop" if you want to cancel the displaying.

// HTML:
/**
    <button id="start" type="button">Start</button>
    <button id="stop" type="button">Stop</button>
*/

// Javascript:

// Way 1: Use a global variable

// // Gets the references of two button elements
// const startBtn = document.querySelector('#start');
// const stopBtn = document.querySelector('#stop');

// Declare a global variable
// let message;

// // Adds "click" event handlers to these buttons
// startBtn.addEventListener('click', displayMessage);
// stopBtn.addEventListener('click', stopDisplayMessage);

// // Defines callback functions
// function displayMessage() {
//   // Tests
//   console.log('Starting');

//   message = setTimeout(() => {
//     console.log('Aloha');
//   }, 1000);
// }

// function stopDisplayMessage() {
//   // Tests
//   console.log('Ending');

//   clearTimeout(message);
// }
// ------------------------------------------------------------------------

// Way 2: Use closure and IIFE (Immediately Invoked Function Expression)

// // Gets the references of two button elements
// const startBtn = document.querySelector('#start');
// const stopBtn = document.querySelector('#stop');

// // Defines a object contains callback functions
// const actions = (function () {
//   let message;

//   function displayMessage() {
//     message = setTimeout(() => {
//       console.log('Aloha');
//     }, 1000);
//   }

//   function stopDisplayMessage() {
//     clearTimeout(message);
//   }

//   return { display: displayMessage, stop: stopDisplayMessage };
// })();

// // Adds "click" event handlers to these button
// startBtn.addEventListener('click', actions.display);
// stopBtn.addEventListener('click', actions.stop);
// ------------------------------------------------------------------------

// // Way 3: Use a Map construct

// // Gets the references of two button elements
// const startBtn = document.querySelector('#start');
// const stopBtn = document.querySelector('#stop');

// const actions = (function () {
//   let message;
//   const map = new Map();

//   function displayMessage() {
//     // Tests
//     console.log('Starting');

//     message = setTimeout(() => {
//       console.log('Aloha');
//     }, 1000);
//   }

//   function stopDisplayMessage() {
//     // Tests
//     console.log('Ending');

//     clearTimeout(message);
//   }

//   map.set('display', displayMessage);
//   map.set('stop', stopDisplayMessage);

//   return map;
// })();

// startBtn.addEventListener('click', actions.get('display'));
// stopBtn.addEventListener('click', actions.get('stop'));
// ------------------------------------------------------------------------------------------------------------------------

/** 2.1. Window setInterval() method */

/**
 * The setInterval() method calls a function or evaluate an expression at specified intervals (milliseconds)
 *
 * The setInterval() method will continue calling the function clearInterval() method is called,
 * or the window is closed.
 *
 * The ID value returned by setInterval() method is used to as the parameter for the clearInterval() method.
 *
 * Syntax: setInterval(function, time)
 *
 * _  1000ms = 1s
 * _  To execute a function only once, after a specified number of milliseconds, use the setTimeout method.
 */
// ----------------------------------------------------------------------------------------------------------------------------

/** 2.2. Window clearInterval() method */

/**
 * The clearInterval() method clears the timer set with the setInterval() method.
 *
 * The ID value returned by setInterval() method is used as the parametr for the clearInterval() method.
 *
 * Note: To be able use the clearInterbal() method, you must use a variable when creating the interval method:
 * 
      let myVar = setInterval(function, time);
 * 
 * Then you will be able to stop the execution by calling the clearInterval() method.
 *    
      clearInterval(myVar)
 */

// Example 1:
// let message = setInterval(() => {
//   console.log('Good morning!');
// }, 2000);

// clearInterval(message);
// ----------------------------------------------------------------------------

// Example 2:
// let message = setInterval(() => {
//   console.log('Hello');
//   clearInterval(message);
// }, 2000);
// ----------------------------------------------------------------------------

// Example 3: Use closure, IIFE, and object

// Gets the references of button elements
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

// Defines an object contains two callback functions
const actions = (function () {
  let message;

  function displayMessage() {
    message = setInterval(() => {
      console.log('Hello, everyone!');
    }, 2000);
  }

  function stopDisplayMessage() {
    clearInterval(message);
  }

  return { display: displayMessage, stop: stopDisplayMessage };
})();

// Adds "click" event handlers to the buttons
startBtn.addEventListener('click', actions.display);
stopBtn.addEventListener('click', actions.stop);
