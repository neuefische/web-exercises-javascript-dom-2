const button = document.querySelector(".button-add");
const container = document.querySelector(".container");

function createBox() {
  const box = document.createElement("div");
  box.classList.add("box");

  return box;
}

function createInput() {
  const input = document.createElement("input");
  input.type = "color";

  return input;
}

button.addEventListener("click", () => {
  const box = createBox();
  const input = createInput();

  input.addEventListener("input", () => {
    box.style.backgroundColor = input.value;
  });

  // Add input to the box
  box.append(input);
  // Add box to the container
  container.append(box);
});
