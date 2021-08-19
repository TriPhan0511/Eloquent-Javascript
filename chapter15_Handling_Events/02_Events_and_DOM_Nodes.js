// const button = document.querySelector('button');

// function once() {
//   console.log('Done.');
//   button.removeEventListener('click', once);
// }

// button.addEventListener('click', once);
// ---------------------------------------------------------------------

/** Another version: Uses this keyword */

// Defines a callback function
function once() {
  console.log('Done!');
  this.removeEventListener('click', once);
}

// Gets the reference of the button
const button = document.querySelector('button');

// Adds an event listener to the button
button.addEventListener('click', once);
