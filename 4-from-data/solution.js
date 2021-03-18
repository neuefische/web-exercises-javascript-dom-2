const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

const button = document.querySelector(".button-add");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  elementsToRender.forEach((elementData) => {
    const element = document.createElement("div");
    element.classList.add(elementData.className);
    element.style.backgroundColor = elementData.backgroundColor;

    container.append(element);
  });
});
