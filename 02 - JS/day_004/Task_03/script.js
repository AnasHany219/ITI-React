let timer;
let time = 0;
let isRunning = false;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  if (isRunning) return;

  isRunning = true;

  startBtn.classList.add("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.remove("active");

  const startTime = Date.now() - time;

  timer = setInterval(() => {
    time = Date.now() - startTime;

    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    millisecondsEl.innerHTML = formatTime(milliseconds);
  }, 10);
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(timer);

  startBtn.classList.remove("active");
  stopBtn.classList.add("active");
  resetBtn.classList.remove("active");
}

function resetTimer() {
  time = 0;
  isRunning = false;
  clearInterval(timer);

  hoursEl.innerHTML = "00";
  minutesEl.innerHTML = "00";
  secondsEl.innerHTML = "00";
  millisecondsEl.innerHTML = "00";

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");
  resetBtn.classList.add("active");
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
