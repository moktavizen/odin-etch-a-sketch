const container = document.querySelector(".container");

for (let i = 0; i < 576; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  container.appendChild(div);
}
