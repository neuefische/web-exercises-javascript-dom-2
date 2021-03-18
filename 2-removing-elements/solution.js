const button = document.querySelector(".button-add");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("click", () => {
    box.remove();
  });

  container.append(box);
});
