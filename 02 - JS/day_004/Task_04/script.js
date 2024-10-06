const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
];

let curIndex = 0;
let intervalId;

const imgElement = document.getElementById("swiperImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function showImage(index) {
  imgElement.src = images[index];
}

function nextImage() {
  curIndex = (curIndex + 1) % images.length;
  showImage(curIndex);
}

function prevImage() {
  curIndex = (curIndex - 1 + images.length) % images.length;
  showImage(curIndex);
}

function startSlideshow() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 1000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
startBtn.addEventListener("click", startSlideshow);
stopBtn.addEventListener("click", stopSlideshow);

showImage(curIndex);
startSlideshow();
