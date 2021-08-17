/** Layout */

/**
 * The offsetWidth and offsetHeight properties give you the space the element takes up in pixels.
 *
 * Similarly, clientWidth and clientHeight give you the size of the space inside the element,
 * ignoring border width.
 */

// Example:

// <p style="border: 3px solid red">I'm boxed in</p>

// const para = document.querySelector('p');
// console.log(`clientHeight: ${para.clientHeight}`);
// // -> clientHeight: 18
// console.log(`offsetHeight: ${para.offsetHeight}`);
// // -> offsetHeight: 24
// ------------------------------------------------------------------------------------------------------------------

/**
 * The most effetive way to find the precise position of an lement on the screen
 * is the getBoudingClientRect method. It returns an object with top, bottom,
 * left, and right properties. indicating the pixel positions of the sides of
 * the element relative to the top left of the screen.
 * If you want them relative to the whole document, you must add the current
 * scroll postion, which you can find in the pageXOffset and pageYOffset bindings.
 *
 * Laying out a document can be quite a lot of work. In the interest of speed,
 * browser engines do not immediately re-layout a document everytime you change it
 * but wait as long as they can. When a Javascript propgram that changed the document
 * finishes running, the browser will have to compute a new layout to draw the
 * changed document to the screen. When a program ask for the posisiton or size of
 * something by reading properties such as offsetHeight or calling getBoundingClientRect,
 * providing correct information also requires computing a layout.
 */

/**
 * A program that repeatedly alternates between reading DOM layout information
 * and changing the DOM forces a lot of layout computations to happen and will
 * consequently run very slowly.
 * The following code is an example of this. It contains two different programs
 * that build up a line ox X characters 2,000 pixels wide and measures the time
 * each one takes.
 */

// Example:

// <p><span id="one"></span></p>
// <p><span id="two"></span></p>

// Defines a function named time
function time(name, action) {
  const start = Date.now(); // Current time in milliseconds
  action();
  console.log(`${name} took ${Date.now() - start} ms.`);
}

// Calls the function time
time('naive', () => {
  const target = document.getElementById('one');
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode('X'));
  }
});
// -> naive took 32ms.

time('clever', () => {
  const target = document.getElementById('two');
  target.appendChild(document.createTextNode('XXXXX'));
  const total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = 'X'.repeat(total);
});
// -> clever took 1ms.

