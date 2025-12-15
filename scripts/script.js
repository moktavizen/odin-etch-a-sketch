const gridInput = document.querySelector("#grid-input");
const gridContainer = document.querySelector(".container");

const renderGrid = () => {
  const sideGridCount = gridInput.value;
  const totalGridCount = sideGridCount ** 2;
  const gridContainerWidth = 480;
  const gridWidth = gridContainerWidth / sideGridCount;

  for (let i = 0; i < totalGridCount; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.id = `grid-${i}`;
    div.style.width = `${gridWidth}px`;
    div.style.height = `${gridWidth}px`;
    gridContainer.appendChild(div);
  }
};

renderGrid();

const frame = document.querySelector(".frame");
const sideGridCountLimit = 100;

const removeGrid = () => {
  gridContainer.replaceChildren();
};

frame.addEventListener("change", (ev) => {
  const target = ev.target;

  if (target.id === "grid-input" && target.value <= sideGridCountLimit) {
    removeGrid();
    renderGrid();
  }
});

let isRGB = false;
const gridForm = document.querySelector(".grid-form");

frame.addEventListener("click", (ev) => {
  const target = ev.target;

  switch (target.id) {
    case "rgb-button":
      if (isRGB) {
        isRGB = false;
        target.textContent = "RGB: Off";
      } else {
        isRGB = true;
        target.textContent = "RGB: On";
      }
      break;
    case "clear-button":
      if (gridInput.value > sideGridCountLimit) {
        gridForm.requestSubmit();
        break;
      }
      removeGrid();
      renderGrid();
      break;
  }
});

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + "," + b + ")";
};

gridContainer.addEventListener("mouseover", (ev) => {
  const target = ev.target;

  if (target.className === "grid") {
    const style = target.style;

    style.backgroundColor = isRGB ? getRandomRGB() : "black";

    if (style.opacity < 1) {
      style.opacity = +style.opacity + 0.2;
    }
  }
});
