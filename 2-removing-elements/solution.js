const button = document.querySelector('.button-add');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.addEventListener('click', () => {
    if (confirm('Do you really want to remove me?')) {
      box.remove();
    } else {
      alert('Thank you for keeping me!');
    }
  });
  container.appendChild(box);
});
