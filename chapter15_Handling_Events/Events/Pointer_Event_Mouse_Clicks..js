/** Pointer Events | Mouse Clicks */

/**
 * Pressing a mouse button causes a number of events to fire. The "mousedown" and
 * "mouseup" events are similar to "keydown" and "keyup" and fire when the button
 * is pressed and released. These happen on the DOM nodes that are immediately below
 * the mouse pointer when the event occurs.
 *
 * After the "mouseup" event, a "click" event fires on the most specific node that
 * contained both the press and release of the button. For example, if I press down
 * the mouse button on one paragraph and then move the pointer to another paragraph
 * and release the button, the "click" event will happen on the element that contains
 * both those paragraphs.
 */

// // Example
// HTML:
/**
    <div>
      <p id="firstPara">This is the first paragraph.</p>
      <p id="secondPara">This is the second paragraph.</p>
    </div>
 */
// Javascript:
// const div = document.querySelector('div');
// const para1 = document.querySelector('#firstPara');
// const para2 = document.querySelector('#secondPara');

// para1.addEventListener('click', () => {
//   console.log('Para1 handler.');
// });

// para2.addEventListener('click', () => {
//   console.log('Para2 handler.');
// });

// div.addEventListener('click', () => {
//   console.log('Div handler');
// });

// // -> Press the mouse's button down on para1, drag, and release the button on para2, we will see:
// // -> Div handler
// --------------------------------------------------------------------------------------------------------------------

/**
 * If two clicks happen close together, a "dblclick" (double-click) event also fires,
 * after the second click event.
 */

// // Example
// window.addEventListener('click', () => {
//   console.log('Clicked');
// });

// window.addEventListener('dblclick', () => {
//   console.log('Double-clicked');
// });

// // -> Clicked
// // -> Clicked
// // -> Double-clicked
// --------------------------------------------------------------------------------------------------------------------

/**
 * To get precise information about the place where a mouse event happened,
 * you can look at its clientX and clientY properties, which contain the
 * event's coordinates (in pixels) relative to the top-left corner of the window,
 * or pageX and pageY, which relative to the top-left corner of the whole document
 * (which may be different when the window has been scrolled).
 */

/**
 * The following implements a primitive drawing program. Every time you click the document,
 * it adds a dot under your mouse pointer.
 */

// Style
/**
    <!-- Custom styles -->
    <style>
      body {
        height: 200px;
        background: beige;
      }

      .dot {
        height: 8px;
        width: 8px;
        border-radius: 4px;
        background: blue;
        position: absolute;
      }
    </style>
 */

window.addEventListener('click', (event) => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${event.pageX - 4}px`;
  dot.style.top = `${event.pageY - 4}px`;
  document.body.appendChild(dot);
});
