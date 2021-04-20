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
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
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

// TESTING

// Function: addEntry
// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
// addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
// addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

// Function: phi
// console.log(phi([76, 9, 4, 1])); // 0.068599434

// Function: tableFor
// let table = tableFor('pizza', JOURNAL);
// console.log(table); // [76, 9, 4, 1]
// -----------------------------------------------------------------------------------------

// Finding all of events
let eventArray = [];
for (let i = 0; i < JOURNAL.length; i++) {
  let events = JOURNAL[i].events;
  for (let j = 0; j < events.length; j++) {
    let event = events[j];
    if (!eventArray.includes(event)) {
      eventArray.push(event);
    }
  }
}
// console.log(eventArray);

// Compute individual correlation of event and append it into an array
let arr = [];
for (let i = 0; i < eventArray.length; i++) {
  let event = eventArray[i];
  // Create a table for each event
  let table = tableFor(event, JOURNAL);
  // Compute correlation of each event
  let val = phi(table);
  // Append event name and correlation into arr
  arr.push({ eventName: event, cor: val });
}
console.log(arr);

let max = arr[0].cor;
let maxEventName = arr[0].eventName;
for (let i = 0; i < arr.length; i++) {
  let entry = arr[i];
  if (entry.cor > max) {
    max = entry.cor;
    maxEventName = entry.eventName;
  }
}
console.log(`Event Name: ${maxEventName}, Correlation: ${max}`);
