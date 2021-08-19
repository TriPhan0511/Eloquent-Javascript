const MOUNTAINS = [
  { name: 'Everest', height: 8848.86, place: 'Nepal' },
  { name: 'K2', height: 8611, place: 'Pakistan' },
  { name: 'Kangchenjuga', height: 8611, place: 'India' },
  { name: 'Gangkhar Puensum', height: 7570, place: 'Bhutan' },
  { name: 'Ismoil Somoni Peak', height: 7495, place: 'Tajikistan' },
  { name: 'Langtang Ri', height: 7205, place: 'Nepal' },
];

// Defines a function creating a table
function buildTable(data) {
  const table = document.createElement('table');

  // Creates a table heading and appends it to the table
  const headRow = document.createElement('tr');
  Object.keys(data[0]).forEach((field) => {
    const headCell = document.createElement('th');
    headCell.textContent = field;
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);

  // Creates table rows and appends them to the table
  data.forEach((item) => {
    const row = document.createElement('tr');
    for (const [key, info] of Object.entries(item)) {
      const cell = document.createElement('td');
      cell.textContent = info;
      if (typeof info === 'number') {
        cell.style.textAlign = 'right';
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  });

  return table;
}

// Adds a DOMContentLoaded event handler to document
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#mountains').appendChild(buildTable(MOUNTAINS));
});
