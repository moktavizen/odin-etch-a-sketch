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

  switch (target.id) {
    case "grid-input":
      if (target.value <= sideGridCountLimit) {
        removeGrid();
        renderGrid();
      }
      break;
  }
});

gridContainer.addEventListener("mouseover", (ev) => {
  const target = ev.target;

  if (target.className === "grid") {
    target.style.backgroundColor = "black";
  }
});
