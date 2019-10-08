const container = document.getElementById('container');

const size = 12;
const numRows = Math.round(window.innerHeight / size);
const numColumns = Math.round(window.innerWidth / size);

for (let i = 0; i < numRows; ++i) {
  const row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);

  for (let j = 0; j < numColumns; ++j) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.backgroundColor = getRandomColor();
    row.appendChild(cell);
  }
}
