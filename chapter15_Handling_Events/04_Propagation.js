/** Propagation */

/**
 * For most event types, handlers registered on nodes with children will also
 * receive events that happen in the children. If a button inside a paragraph
 * is clicked, event handlers on the paragraph will also see the click event.
 *
 * But if both the paragraph and button have a handler, the more specific
 * handler - the one on the button - gets to go first. The event is said to
 * propagate outward, from the node where it happened to that node's parent node
 * and on to root of the document. Finally, after all handlers registered on a
 * specific node have had their turn, handlers registered on the whole window
 * get a chance to respond to the event.
 *
 * At any point, an event handler can call the stopPropagation method on the
 * event object to prevent handlers further up from receiving the event. This
 * can be useful when, for example, you have a button inside another clickable
 * element and you don't want clicks on the button to activate the outer element's
 * click behavior.
 */

/**
 * The following example registers "mousedown" handlers on both a button and
 * the paragraph around it. When clicked with the right mouse button, the handler
 * for the button calls stopPropagation, which will prevent the handler on the
 * paragraph from running. When the button is clicked with another mouse button,
 * both handlers will run.
 */

// // HTML:
// // <p>A paragraph with a <button>button</button>.</p>

// const para = document.querySelector('p');
// const button = document.querySelector('button');

// // para.addEventListener('mousedown', () => {
// //   console.log('Handler for paragraph.');
// // });

// // Uses the target property of the event object
// para.addEventListener('mousedown', (event) => {
//   if (event.target === para) {
//     console.log('Handler for paragraph.');
//   }
// });

// button.addEventListener('mousedown', (event) => {
//   console.log('Handler for button.');
//   if (event.button === 2) {
//     event.stopPropagation();
//   }
// });

/**
 * Most event objects have a target property that refers to the node where they originated.
 * You can use this property to ensure that you're not accidentally handling something that
 * propagated up from a node you do not want to handle.
 *
 * It is also possible to use the target property to cast a wide net for a specific type
 * of event. For example, if you have a node containing a long list of buttons, it may be
 * more convenient to register a single click handler on the outer node and have it use
 * the target property to figure out whether a button was clicked, rather than register
 * individual handlers on all the buttons.
 */

document.body.addEventListener('click', (event) => {
  console.log('Clicked', event.target.textContent);
});
// ------------------------------------------------------------

// // Another example:

// document.body.addEventListener('click', (event) => {
//   const buttons = document.querySelectorAll('button');
//   for (const button of buttons) {
//     if (button === event.target) {
//       button.style.backgroundColor = 'red';
//     } else {
//       button.style.backgroundColor = '';
//     }
//   }
// });
