const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let randomColor;
stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', e => {
  e.preventDefault();
  startButton.disabled = true;
  stopButton.disabled = false;
  randomColor = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(randomColor);
});
