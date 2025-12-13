const container = document.querySelector(".container");

const sideGrid = 16;
const totalGridCount = 16 ** 2;

for (let i = 0; i < totalGridCount; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  container.appendChild(div);
}
