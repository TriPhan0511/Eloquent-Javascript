/** Focus Events */

/**
 * When an element gains focus, the browser fires a "focus" event on it. When it
 * loses focus, the element gets a "blur" event.
 *
 * Unlike the event discussed earlier, these two events do not propagate. A handler
 * on a parent element is not notified when a child element gains or loses focus.
 *
 * The following example displays help text for the text field that currently has
 * focus:
 */

// HTML:
/**
    <p>Name: <input type="text" data-help="Your full name" /></p>
    <p>Age: <input type="text" data-help="Your age in years" /></p>
    <p id="help"></p>
*/

// Javascript:
// const fields = document.querySelectorAll('input');
// const help = document.querySelector('#help');

// for (const field of fields) {
//   field.addEventListener('focus', (e) => {
//     const text = e.target.getAttribute('data-help');
//     help.textContent = text;
//   });

//   field.addEventListener('blur', () => {
//     help.textContent = '';
//   });
// }
// -------------------------------------------------------------------------------------------

/**
 * The window object will receive "focus" and "blur" events when the user
 * move from or to the browser tab or window in which the document is shown.
 */

window.addEventListener('focus', (e) => {
  console.log(e.type);
});

window.addEventListener('blur', (e) => {
  console.log(e.type);
});
