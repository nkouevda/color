const container = document.getElementById('container');

const params = new URLSearchParams(window.location.search);

const getRandomColor = params.get('space') === 'hsl' ? getRandomHsl : getRandomRgb;

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

appendSplittableChild(container);
