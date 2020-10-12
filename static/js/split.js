const container = document.getElementById('container');

const params = new URLSearchParams(window.location.search);

const getRandomColor = params.get('space') === 'hsl' ? getRandomHsl : getRandomRgb;

const addSplitListener = target => {
  const listener = () => {
    appendSplittableChild(target);
    appendSplittableChild(target);
    target.removeEventListener('click', listener);
  };
  target.addEventListener('click', listener);
};

const appendSplittableChild = target => {
  const child = document.createElement('div');
  child.style.backgroundColor = getRandomColor();
  addSplitListener(child);
  target.appendChild(child);
};

appendSplittableChild(container);
