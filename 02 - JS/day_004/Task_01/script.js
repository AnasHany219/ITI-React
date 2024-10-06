var circles = document.querySelectorAll(".circle");
var current = 0;
var curInterval;

function start() {
  curInterval = setInterval(() => {
    for (var i = 0; i < circles.length; i++) {
      circles[i].classList.remove("active");
      if (i === current) circles[i].classList.add("active");
    }
    current = (current + 1) % circles.length;
  }, 1000);
}

function stop() {
  clearInterval(curInterval);
}

for (let i = 0; i < circles.length; i++) {
  const circle = circles[i];

  circle.addEventListener("mouseenter", () => {
    stop();
    for (let j = 0; j < circles.length; j++) {
      circles[j].classList.remove("active");
    }
    circle.classList.add("active");
    current = i + 1;
  });

  circle.addEventListener("mouseleave", () => {
    start();
  });
}

start();
