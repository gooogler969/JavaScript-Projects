//select varibles
const display = document.querySelector(".display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//set default settings
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnig = false;

//start button logic
startBtn.addEventListener("click", () => {
  if (!isRunnig) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunnig = true;
  }
});

//start button logic
stopBtn.addEventListener("click", () => {
  if (isRunnig) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunnig = false;
  }
});

//start button logic
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunnig = false;
  display.textContent = "00:00:00:00";
});

//time settings
function update() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (100 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
