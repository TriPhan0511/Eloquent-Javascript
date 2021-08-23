/** stopPropagation */

/**
 * Recall to the event bubbling. This is the process of executing event handler on an element,
 * and then its parent and then its parent's parent...
 *
 * The stopPropagation method is available in an event parameter object. When called in event handler,
 * its stops the bubbling process.
 *
 *
 */

// Example 1: stopPropagation

// HTML:
/**
    <div class="container">
      <button class="btn">Click me</button>
    </div>
 */

// // Javascript:
// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');

// container.addEventListener('click', (e) => {
//   console.log('container click', e);
// });

// button.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('button click', e);
// });

/**
 * When user click the button, the event handler on the div container won't be invoked.
 */
// ------------------------------------------------------------------------------------------------------------

// Example 2.1: stopImmediatePropagation

/** Let's add a second event handler to the button: */

// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');

// container.addEventListener('click', (e) => {
//   console.log('container click', e);
// });

// button.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('button click 1', e);
// });

// // Adds a second event handler to the button
// button.addEventListener('click', (e) => {
//   e.stopImmediatePropagation();
//   console.log('button click 2', e);
// });

// // -> button click 1
// // -> button click 2

/**
 * When the user clicks the button, this time both button handlers are invoked with the div
 * container's handler still not reached.
 */

/**
 * What if we want to prevent the second handler on the button from being invoked?
 * Well, this is what stopImmediatePropagation does:
 */

// // Example 2.2: stopImmediatePropagation
// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');

// container.addEventListener('click', (e) => {
//   console.log('container click', e);
// });

// button.addEventListener('click', (e) => {
//   e.stopImmediatePropagation();
//   console.log('button click 1', e);
// });

// // Adds a second event handler to the button
// button.addEventListener('click', (e) => {
//   console.log('button click 2', e);
// });

// // -> button click 1

/**
 * So, stopImmediatePropagation stops other event handlers on the element from being executed and
 * prevents the event from bubbling up.
 */
// ------------------------------------------------------------------------------------------------------------

/** Event capturing */

/**
 * Event capturing is an event phase that happens before the bubbling phase. In this process,
 * the event goes down the DOM tree from the window to the target element. We can attach
 * event handlers to the capturing phase rather than bubbling phase using the capture option:
 */

// Example 3.1: Event capturing
// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');

// container.addEventListener(
//   'click',
//   (e) => {
//     console.log('container click', e);
//   },
//   { capture: true }
// );

// button.addEventListener('click', (e) => {
//   console.log('button click', e);
// });

// // -> container click
// // -> button click

// (If therei s no {capture: true}, the result will be: button click first, then container later.)

/**
 * If a user click the button, we see that it is the container div that handles event first.
 */
// ------------------------------------------------------------------------------------------------------------

/**
 * stopPropagation works in the capturing phase as it does in the bubbling phase - it stops
 * other event handlers later in the phase  from being executed.
 *
 * Let's add stopPropagation to container div handler:
 */

// // Example 3.2: Event capturing and stopPropagation method
// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');

// container.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation();
//     console.log('container click', e);
//   },
//   { capture: true }
// );

// button.addEventListener('click', (e) => {
//   console.log('button click', e);
// });

// // -> container click

/**
 * If a user clicks the button, we see that only the container div is executed.
 *
 * So, even if other event handlers are in the bubbling phase, they will not be executed. This is because
 * the capturing phase is before the bubbling phase, and stopPropagation will prevent handlers later in
 * the proces, regardless of which phase it is in.
 */
// ------------------------------------------------------------------------------------------------------------

/** Wrap Up */

/**
 * stopPropagation allows other event handlers on the same element to be executed,
 * while stopImmediatePropagation prevents this.
 *
 * stopPropagation and stopImmediatePropagation prevent event handlers later in the
 * capturing and bubbling phases from being executed.
 */
