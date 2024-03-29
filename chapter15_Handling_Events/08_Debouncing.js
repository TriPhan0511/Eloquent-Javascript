/** Debouncing */

/**
 * Some types of events have the potential to fire rapidly, many times in a row (the "mousemove" and
 * "scroll" events, for example). When handling such events, you must be careful not to do anything
 * too time-consuming or your handler will take up so much time that interaction with the document
 * starts to fell slow.
 *
 * If you do need to do something nontrivial in such handler, you can use setTimeout to make sure
 * you are not doing it too often. This is usually called debouncing the event. There are several
 * slightly different approaches to this.
 */

/**
 * In the first example, we want to react when user has typed something, but we don't want to do it
 * immediately for every input event. When they are typing quickly, we just want to wait until a
 * pause occurs. Instead of immediately performing an action in the event handler, we set a timeout.
 * We also clear the previous timeout (if any) so that when events occur close together (closer than
 * our timeout delay), the timeout from the previous event will be canceled.
 */

// HTML:
/**
    <textarea cols="30" rows="10">Type something here...</textarea> 
*/

// const textarea = document.querySelector('textarea');
// let timeout;

// textarea.addEventListener('input', () => {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     console.log('Typed!');
//   }, 500);
// });

/**
 * Giving an undefined value to clearTimeout or calling it on a timeout that
 * has already fired has no effect. Thus, we dont' have to be careful about
 * when to call it, and we simpply do so for every event.
 */
// -------------------------------------------------------------------------------------------------------

/**
 * We can use a slightly difference pattern if we want to space responses so that
 * they're separated by at least a certain length of time but want to fire them
 * during a series of events, not just afterward. For example, we might want to
 * respond to "mousemove" events by showing the current coordinates of the mouse
 * but only every 250 milliseconds.
 */

let scheduled = null;
window.addEventListener('mousemove', (e) => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = e;
});
