/** Scroll Events */

/**
 * Whenever an element is scrolled, a "scroll" event is fired on it. This has various uses,
 * such as knowing what the user is currently looking at (for disabling off-screen animations
 * or sending spy report to your evil headquaters) or showing some indication of progress (by
 * highlighting part of a table of contents or showing a page number).
 */

/**
 * The following example draws a progress bar above the document and updates
 * it to fill up as ypu scroll down:
 */

// HTML:

/**
    <style>
      #progress {
        border-bottom: 2px solid blue;
        width: 0;
        position: fixed;
        top: 0;
        left: 0;
      }
    </style>

    <div id="progress"></div>
 */

// Javascript:

const bar = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - innerHeight;
  bar.style.width = `${(pageYOffset / max) * 100}%`;
});

/**
 * Giving an element a position of fixed acts much like an absolute postion
 * but also prevents it from scrolling with the rest of the document. The
 * effect is to make our progress bar stay at the top. Its width is changed
 * to indicate the current progress. We use % rather than px, as a unit when
 * setting the width so that the element is sized relative to the page width.
 */

/**
 * The global innerHeight binding give us the height of the window, which we
 * have to subtract from the total scrollable height - you can't keep scrolling
 * when you hit the bottom of the document. There's also an innerWidth for the
 * window width. By dividing pageYOffset, the current scroll position, by the
 * maximum scroll postion and multiplying by 100, we get the percentage for the
 * progress bar.
 */

/**
 * Calling preventDefault on a scroll event does not prevent the scrolling from
 * happening. In fact, the event handler is called after the scrolling takes place.
 */
