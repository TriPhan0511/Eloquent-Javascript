/** Exercise 01 - Balloon */

/**
    
    Write a page that displays a balloon (using the balloon emoji, 🎈). When you
    press the up arrow, it should inflate (grow) 10 percent, and when you press the
    down arrow, it should deflate (shrink) 10 percent.
    You can control the size of text (emoji are text) by setting the font-size
    CSS property (style.fontSize) on its parent element. Remember to include a
    unit in the value—for example, pixels (10px).
    The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure
    the keys change only the balloon, without scrolling the page.

    When that works, add a feature where, if you blow up the balloon past a
    certain size, it explodes. In this case, exploding means that it is replaced with
    an 💥 emoji, and the event handler is removed (so that you can’t inflate or
    deflate the explosion).
 */

// --------------------------------------------------------------------------------------------------------------------

/** Use closure */

// Defines a function
function doBalloon(balloon) {
  let currentFontSize = Number(
    window.getComputedStyle(balloon).getPropertyValue('font-size').match(/\d+/)[0]
  );

  function inflate() {
    currentFontSize = currentFontSize * 1.1;
    balloon.style.fontSize = `${currentFontSize}px`;
    return currentFontSize;
  }

  function deflate() {
    currentFontSize = Math.max(15, currentFontSize * 0.9);
    balloon.style.fontSize = `${currentFontSize}px`;
  }

  return { inflate: inflate, deflate: deflate };
}

// Gets the reference of the paragraph that contains the balloon emoji
const balloon = document.querySelector('.balloon');

// Defines an object contains inflate and deflate functions
const actions = doBalloon(balloon);

// Defines a "keydown" handler
function handleKeydown(e) {
  let currentFontSize;
  if (e.key === 'ArrowUp') {
    currentFontSize = actions.inflate();
    if (currentFontSize >= 100) {
      this.removeEventListener('keydown', handleKeydown);
      balloon.textContent = '💥';
    }
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    actions.deflate();
    e.preventDefault();
  }
}

// Adds the handleKeydown callback to the document body
document.body.addEventListener('keydown', handleKeydown);
// --------------------------------------------------------------------------------------------------------------------

/** Solution from the author */

// let p = document.querySelector('.balloon');
// let size;
// function setSize(newSize) {
//   size = newSize;
//   p.style.fontSize = size + 'px';
// }
// setSize(20);

// function handleArrow(event) {
//   if (event.key == 'ArrowUp') {
//     if (size > 100) {
//       p.textContent = '💥';
//       document.body.removeEventListener('keydown', handleArrow);
//     } else {
//       setSize(size * 1.1);
//       event.preventDefault();
//     }
//   } else if (event.key == 'ArrowDown') {
//     setSize(size * 0.9);
//     event.preventDefault();
//   }
// }
// document.body.addEventListener('keydown', handleArrow);

console.log(getComputedStyle(balloon));

console.log(getComputedStyle(balloon).length);

console.log(getComputedStyle(balloon).getPropertyValue('font-family'));
console.log(getComputedStyle(balloon).fontFamily);

for (const prop of getComputedStyle(balloon)) {
  console.log(prop);
}
