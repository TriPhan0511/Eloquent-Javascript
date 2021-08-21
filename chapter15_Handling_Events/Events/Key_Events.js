/** Key Event */

/**
 * When a key on the keyborad is pressed, your browser fires a "keydown" event.
 * When it is released, you get a "keyup" event.
 */
// window.addEventListener('keydown', (event) => {
//   if (event.key === 'v') {
//     document.body.style.background = 'violet';
//   }
// });

// window.addEventListener('keyup', (e) => {
//   if (e.key === 'v') {
//     document.body.style.background = '';
//   }
// });
// --------------------------------------------------------------------------------

// Another example:
// window.addEventListener('keydown', (event) => {
//   const key = event.key;
//   switch (key) {
//     case 'a':
//       console.log('Left');
//       break;
//     case 's':
//       console.log('Down');
//       break;
//     case 'd':
//       console.log('Right');
//       break;
//     case 'w':
//       console.log('Up');
//       break;
//   }
// });

/**
 * Despite its name, "keydown" fires not only when the key is physically pushed down.
 * When a key is pressed and held, the event fires again every time the key repeats.
 * Sometimes you have to be careful about this. For example, if you add a button to
 * the DOM when a key is pressed and remove it again when the key is released, you
 * might accidentally add hundreds of buttons when the key is held down longer.
 */

/**
 * The example looked at the key property of the event object to see which key the event
 * is about. This property holds a string that, for most keys, corresponds to the thing
 * that pressing that key would type. For special keys such as ENTER, it holds a string
 * that names the key ("Enter", is this case). If you hold SHIFT while pressing a key,
 * that might also influence the name of the key - "v" become "V", and "1" become "!",
 * if that is what pressing SHIFT-1 produces on your keyboard.
 */

// window.addEventListener('keydown', (event) => {
//   const key = event.key;
//   switch (key) {
//     case 'Enter':
//       console.log('Enter key');
//       break;
//     case 'Backspace':
//       console.log('Backspace key');
//       break;
//     case 'Tab':
//       console.log('Tab key');
//       break;

//     case '1':
//       console.log('1 key');
//       break;
//     case '!':
//       console.log('! key');
//       break;
//     case '@':
//       console.log('@ key');
//       break;

//     case 'V':
//       console.log('V (upper case) key');
//       break;
//   }
// });
// -------------------------------------------------------------------------------------------

/**
 * Modifier keys such as SHIFT, CONTROL, ALT, and META (COMMAND on Mac) generate key events
 * just like normal keys. But when looking for key combination, you can also find out whether
 * these keys held down by looking at the shiftKey, altKey, and metaKey properties of keyboard
 * and mouse events.
 */

// <p>Press Control-Space to continue</p>

// window.addEventListener('keydown', (event) => {
//   if (event.key === ' ' && event.ctrlKey) {
//     console.log('Continuing');
//   }
// });
// -------------------------------------------------------------------------------------------

/**
 * The DOM node where a key event originates depends on the element that has focus when the key
 * is pressed. Most nodes cannot have focus unless you give them a tabindex attribute, but things
 * like links, buttons, and form fields can. We'll come back to form fields in Chapter 18.
 * When nothing in particular has focus, document.body acts as the target node of key events.
 */

// document.body.addEventListener('keydown', (event) => {
//   console.log('------At body handler-------');
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
// });

// document.addEventListener('keydown', (event) => {
//   console.log('------At document handler-------');
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
// });

// window.addEventListener('keydown', (event) => {
//   console.log('------At window handler-------');
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
// });

// // ------At body handler-------
// // -> target <body>...</body>
// // -> currentTarget <body>...</body>

// // ------At document handler-------
// // -> target <body>...</body>
// // -> currentTarget #document

// // ------At window handler-------
// // -> target <body>...</body>
// // -> currentTarget Window
// -------------------------------------------------------------------------------------------

/**
 * When the user is typing text, using key events to figure out what is being typed
 * is problematic. Some platforms, most notably the virtual keyboard on Android phones,
 * don't fire key events. But even when you have an old-fashioned keyboard, some types
 * of text input don't match key presses in a straightforward way, such as input method
 * editor (IME) software used by people whose scripts don't fit on a keyboard, where
 * multiple key strokes are combined to create characters.
 */

/**
 * To notice when something was typed, elements that you can type into, such as the <input>
 * and <textarea> tags, fire "input" events whenever the user changes their content. To get
 * the actual content that was typed, it is best to ditectly read it from the focus field.
 * Chapter 18 will show how.
 */
