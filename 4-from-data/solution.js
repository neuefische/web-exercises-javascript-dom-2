const elementsToRender = [
  {
    className: 'box',
    backgroundColor: 'lightgreen',
  },
  {
    className: 'circle',
    backgroundColor: 'lightseagreen',
  },
  {
    className: 'box',
    backgroundColor: 'lightgreen',
  },
  {
    className: 'circle',
    backgroundColor: 'lightseagreen',
  },
];

const button = document.querySelector('.button-add');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  elementsToRender.forEach((element) => {
    const box = document.createElement('div');
    box.classList.add(element.className);
    box.style.backgroundColor = element.backgroundColor;
    container.appendChild(box);
  });
});
