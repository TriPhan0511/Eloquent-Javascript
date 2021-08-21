// Example 1: event parameter
// const button = document.querySelector('button');
// button.addEventListener('mousedown', (event) => {
//   if (event.button == 0) {
//     console.log('Left clicked');
//   } else if (event.button === 1) {
//     console.log('Middle clicked');
//   } else if (event.button === 2) {
//     console.log('Right clicked.');
//   }
// });
// ---------------------------------------------------------------------------

// Example 2: Propagation
// const para = document.querySelector('p');
// const button = document.querySelector('button');

// para.addEventListener('click', (event) => {
//   console.log('This is paragraph handler. Run 2nd');
//   event.stopImmediatePropagation();
// });

// button.addEventListener('click', (event) => {
//   console.log('This is button handler. Run 1st');
// });

// document.body.addEventListener('click', () => {
//   console.log('Body handler. Run 3rd.');
// });

// document.addEventListener('click', () => {
//   console.log('Document handler. Run 4th.');
// });
// ---------------------------------------------------------------------------

// Example 3: preventDefault method of event parameter
// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//   event.preventDefault();
// });
