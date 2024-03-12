function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;

let intervalId;

function colorSwitcher() {
  startBtn.addEventListener('click', onStart);
  stopBtn.addEventListener('click', onStop);

  function onStart() {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {
      const randomColor = getRandomHexColor();
      body.style.background = randomColor;
    }, 1000);
  }

  function onStop() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
  }
}
colorSwitcher();
