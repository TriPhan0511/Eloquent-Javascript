/** Event Bubbling */

/**
 * When an event is raised on an element, the event handler on that element is invoked.
 * The event handler on its parent element is then invoked and so on. So, the event
 * bubbles up the DOM tree.
 *
 * Not all events bubble though. For example, the "click" event on elements does bubble,
 * but the "focus" event doesn't. The bubbles property on the event handler parameter
 * tells us whether the event will bubble.
 */

// Example 1: Event bubbling

// HTML:
/**
  <div class="container">
    <button>Click me</button>
  </div>
*/

/**
 * So, if the button is clicked, the click event should bubble up to the div element.
 *
 * Let's handle the click event on the div element then:
 */

const div = document.querySelector('.container');
div.addEventListener('click', (e) => {
  console.log('target', e.target);
  console.log('currentTarget', e.currentTarget);
});

/**
 * If we click the button and look at the console output, we see the difference between
 * target and currentTarget:
 * 
    target <button>Click me</button>
    currentTarget <div class="container">...</div>
 * 
 */

/**
 * _  target is the root element that raised the event.
 * _  currentTarget is the element handling the event.
 */
