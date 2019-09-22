const getRandomColor = function() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const addSplitListener = function(target) {
  const listener = function() {
    appendSplittableChild(target);
    appendSplittableChild(target);
    target.removeEventListener('click', listener);
  };
  target.addEventListener('click', listener);
};

const appendSplittableChild = function(target) {
  const child = document.createElement('div');
  child.style.backgroundColor = getRandomColor();
  addSplitListener(child);
  target.appendChild(child);
};

const container = document.getElementById('container');
appendSplittableChild(container);
