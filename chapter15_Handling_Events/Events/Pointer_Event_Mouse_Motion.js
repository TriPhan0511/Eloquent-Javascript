/** Pointer Event - Mouse Motion */

/**
 * Every time the mouse pointer moves, a "mousemove" event is fired. This event
 * can be used to track the position of the mouse. A common situation in which
 * this is useful is when implementing some form of mouse dragging functionality.
 *
 * As an example, the following program displays a bar and sets up event handlers
 * so that dragging to the left or right on this bar makes it narrower or wider:
 */

// HTML:
/**
    <p>Drag the bar to change its width:</p>
    <div style="background: orange; width: 60px; height: 20px"></div>  
 */
/** Solution 1: */

// let lastX; // Tracks the last observed mouseX position
// const bar = document.querySelector('div');

// bar.addEventListener('mousedown', (e) => {
//   if (e.button === 0) {
//     lastX = e.clientX;
//     window.addEventListener('mousemove', moved);
//     e.preventDefault(); // Prevent selection
//   }
// });

// function moved(e) {
//   console.log(event.buttons);
//   if (e.buttons === 0) {
//     window.removeEventListener('mousemove', moved);
//   } else {
//     const dist = e.clientX - lastX;
//     const newWidth = Math.max(10, bar.offsetWidth + dist);
//     bar.style.width = `${newWidth}px`;
//     lastX = e.clientX;
//   }
// }
// ---------------------------------------------------------------------------------------

/* Another solution: Use closure */

// Get the reserence to the bar
const bar = document.querySelector('div');
// Adds the dragBar to the bar's mousedown handler
bar.addEventListener('mousedown', dragBar);

// Defines a function that handle the mousedown event on the bar element
function dragBar(e) {
  let lastX;
  const bar = this;
  if (e.button === 0) {
    lastX = e.clientX;
    window.addEventListener('mousemove', moved);
    e.preventDefault();
  }

  function moved(e2) {
    if (e2.buttons === 0) {
      window.removeEventListener('mousemove', moved);
    } else {
      const dist = e2.clientX - lastX;
      const newWidth = Math.max(10, bar.offsetWidth + dist);
      bar.style.width = `${newWidth}px`;
      lastX = e2.clientX;
    }
  }
}

/**
 * Note that the "mousemove" handler is registered on the whole window. Even if the mouse
 * goes outside of the bar during resizing, as long as the button is held we still want to
 * update its size.
 *
 * We must stop the bar when the mouse button is released. For that, we can use the buttons
 * property (note the plural), which tells us about the buttons that are currently held down.
 * When this is zero, no buttons are down.
 * When buttons are held, its value is the sum of the codes for those buttons - the left button
 * has code 1, the right button 2, and the middle one 4. With the left and right buttons held,
 * for example, the value of buttons be 3.
 *
 * Note that the order of these codes is different from the one used by button, where the
 * middle button came before the right one. As mentioned, consistency isn't really a strong point
 * of the browser's programming interface.
 */
