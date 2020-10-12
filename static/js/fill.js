const container = document.getElementById('container');

const params = new URLSearchParams(window.location.search);

const size = parseInt(params.get('size') || "24");
const numRows = Math.round(window.innerHeight / size);
const numColumns = Math.round(window.innerWidth / size);

const getRandomColor = params.get('space') === 'hsl' ? getRandomHsl : getRandomRgb;

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
