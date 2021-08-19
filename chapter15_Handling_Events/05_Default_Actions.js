/** Default Actions */

/**
 * Many events have a default action associated with them. If you click a link,
 * you will be taken to the link's target. If you press the down arrow, the browser
 * will scroll the page down. If you right-click, you'll get a context menu. And so
 * on.
 *
 * For most types of events, the Javascript event handlers are called before the
 * default behavior takes place. If the handler doesn't want this normal behavior
 * to happen, typically because it has already taken care of handling the event, it
 * can call the preventDefault method on the event object.
 *
 * This can be used to implement your own keyboard shortcuts or context menu. It can
 * also be used to obnoxiously interfere with the behavior that users expect.
 *
 * For example, here is a link that cannot be followed:
 */

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  console.log('Nope.');
  event.preventDefault();
});

/**
 * Try not to do such thing unless you have really good reason to. It'll be
 * unpleasant for people who use your page when expected behavior is broken.
 */

/**
 * Depending on the browser, some events can't be intercepted at all. On
 * Chrome, for example, the keyboard shortcut to close the current tab
 * (CONTROL-W or COMMAND-W) cannot be handled by Javascript.
 */
