/** Load Event */

// window.addEventListener('DOMContentLoaded', (e) => {
//   console.log('Hello, world ', e.type);
// });

// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log('Aloha, everyone ', e.type);
// });

// // -> Aloha, everyone DOMContentLoaded
// // -> Hello, world DOMContentLoaded

/**
 * When a page finishes loading, the "load" event fires on the window and
 * the document body objects. This is often used ti schedule initialization actions
 * that require the whole document to have been built. Remember that the content of
 * <script> tags is run immediately when the tag is encountered. This may be too soon,
 * for example when the script need to do something with parts of the document that
 * appear after the <script> tag.
 */

/**
 * Elements such as images and script tags that load an external file also have
 * a "load" event that indicates the files they reference were loaded. Like the
 * focus-related events, loading events do not propagate.
 */

/**
  When a page is closed or navigated away from (for example, by following a
  link), a "beforeunload" event fires. The main use of this event is to prevent the
  user from accidentally losing work by closing a document. If you prevent the
  default behavior on this event and set the returnValue property on the event
  object to a string, the browser will show the user a dialog asking if they really
  want to leave the page. That dialog might include your string, but because
  some malicious sites try to use these dialogs to confuse people into staying on
  their page to look at dodgy weight loss ads, most browsers no longer display
  them.
 */

// Example 1: "load" event

window.addEventListener('load', (e) => {
  console.log(e.type);
});
// ---------------------------------------------------------------------

// Example 2: "DOMContentLoaded" event

// window.addEventListener('DOMContentLoaded', (e) => {
//   console.log('Hello, world ', e.type);
// });

// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log('Aloha, everyone ', e.type);
// });

// // -> Aloha, everyone DOMContentLoaded
// // -> Hello, world DOMContentLoaded
