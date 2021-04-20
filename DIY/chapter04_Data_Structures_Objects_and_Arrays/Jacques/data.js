// let JOURNAL = []; // This binding has been declared in journal.js

// Function: Add an entry to the JOURNAL array (located in journal.js)
function addEntry(events, squirrel) {
  JOURNAL.push({ events, squirrel });
}

// Function: Compute correlation of an event
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2])
    )
  );
}

// Function: Make table for an event
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) {
      index += 1;
    }
    if (entry.squirrel) {
      index += 2;
    }
    table[index] += 1;
  }
  return table;
}

// Function: Find every type of event
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

// Log all the correlations
// for (let event of journalEvents(JOURNAL)) {
//   console.log(`${event}: ${phi(tableFor(event, JOURNAL))}`);
// }
// ---------------------------------------------------------------------

// // Filter the results to show correlations greater than 0.1 or less than -0.1
// for (let event of journalEvents(JOURNAL)) {
//   let correlation = phi(tableFor(event, JOURNAL));
//   if (correlation > 0.1 || correlation < -0.1) {
//     console.log(`${event}: ${correlation}`);
//   }
// }
// ---------------------------------------------------------------------

// Checking events has peanuts but not brushed teeth
for (let entry of JOURNAL) {
  if (entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')) {
    entry.events.push('peanuts teeth');
  }
}

console.log(phi(tableFor('peanuts teeth', JOURNAL)));
