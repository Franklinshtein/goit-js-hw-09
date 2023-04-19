const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener('click', function () {
  timer = setInterval(changeColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  console.log('Start');
});

stopBtn.addEventListener('click', function () {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  console.log('Stop');
});
