function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

button.addEventListener("click", onClick);

function onClick(event) {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
