const button = document.querySelector('.button-add');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  const box = document.createElement('div');
  const colorSelector = document.createElement('input');
  colorSelector.type = 'color';
  colorSelector.addEventListener('change', (event) => {
    box.style.background = event.target.value;
  });
  box.classList.add('box');
  box.appendChild(colorSelector);
  container.appendChild(box);
});
