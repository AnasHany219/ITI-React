const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const generateBtn = document.getElementById("generateBtn");
const colorPicker = document.getElementById("colorPicker");
let selectedColor = colorPicker.value;

colorPicker.addEventListener("input", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  selectedColor = colorPicker.value;
});

generateBtn.addEventListener("click", () => {
  const numberOfCircles = getRandomInt(5, 15);
  for (let i = 0; i < numberOfCircles; i++) {
    const radius = getRandomInt(10, 40);
    const x = getRandomInt(radius, canvas.width - radius);
    const y = getRandomInt(radius, canvas.height - radius);
    drawCircle(x, y, radius, selectedColor);
  }
});

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
