"use script";

controls.addEventListener("click", function(e) {
  const element = e.target;
  const controls = e.currentTarget;
  const input = controls.firstElementChild;
  const amount = Number(input.value);
  if (element.dataset.action === "render") {
    createBoxes(amount);
  } else if (element.dataset.action === "destroy") {
    destroyBoxes();
  }
});

const createBoxes = amount => {
  const box = document.getElementById("boxes");
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.className = "new";
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomColor();
    box.append(div);
  }
};

const destroyBoxes = () => {
  const box = document.getElementById("boxes");
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
