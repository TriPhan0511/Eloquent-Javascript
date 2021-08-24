/** Timers */

/**
 * We saw the setTimeout function in Chapter 11. It schedules another function
 * to be called later, after a given number of milliseconds.
 *
 * Sometimes you need to cancel a function you have scheduled. This is done by
 * storing the value returned by setTimeout and calling clearTimeout on it.
 */

// const bombTimer = setTimeout(() => {
//   console.log('BOOM');
// }, 500);

// if (Math.random() < 0.5) {
//   console.log('Defused.');
//   clearTimeout(bombTimer);
// }
// -------------------------------------------------------------------------------------------------

/**
 * A similar set of functions, setInterval and clearInterval, are used to set timers
 * that should repeat every X milliseconds.
 */

let ticks = 0;
const clock = setInterval(() => {
  console.log('Tick', ticks++);
  if (ticks === 10) {
    clearInterval(clock);
    console.log('Stop.');
  }
}, 500);
