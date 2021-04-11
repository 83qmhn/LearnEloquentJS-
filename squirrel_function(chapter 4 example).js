let JOURNAL = [];

// the function to store the journal and status
function addEntry(events, squirrel) {
  JOURNAL.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

// the function to  calculate correlation between two events
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
  (table[0] + table[1]) *
  (table[1] + table[3]) *
  (table[0] + table[2]));
  }

// the function to generate a table containing passed event
function tableFor(event, journal) {
  let table = [0,0,0,0];
  // loop through the journal for the first object
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) {index += 1;}
    if(entry.squirrel) {index += 2;}
    table[index] += 1;
  }
  return table
}

// find every type of events in the journal
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

// loop through all the events to calculate the correlation
// between events and turning into a squirrel
// due to the size of the sample, the calculation is not accurate
// the complete dataset can be found in the online book
// anyway, the code is designed to filter the events of high correlation
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1 ) {
    console.log(event + ':', correlation);
  }
}

// test what events causes the transformation
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

// console.log(JOURNAL);
// console.log(tableFor('work', JOURNAL));
// console.log(journalEvents(JOURNAL));
