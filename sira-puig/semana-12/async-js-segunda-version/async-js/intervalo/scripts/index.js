// Cuando haga clic en el boton de render
// que pinte en pantalla la hora actual

// Elementos
// const renderButton = document.querySelector('#js-render');
// const hoursElement = document.querySelector('#js-hours');
// const minutesElement = document.querySelector('#js-minutes');
// const secondsElement = document.querySelector('#js-seconds');

const [hoursElement, minutesElement, secondsElement] = Array.from(
  document.querySelectorAll('time > span'),
);

const [renderButton, playButton, stopButton] = Array.from(
  document.querySelectorAll('menu > button'),
);

// Evento
renderButton.addEventListener('click', renderTime);
playButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stopTime);

// Ejecucion
function renderTime(event) {
  const now = new Date();

  hoursElement.innerText =
    now.getHours() < 10 ? `0${now.getHours}` : now.getHours();
  minutesElement.innerText = now.getMinutes();
  secondsElement.innerText = now.getSeconds();
}

let intervalId;

function startTime(event) {
  intervalId = setInterval(renderTime, 1000);
}

function stopTime(event) {
  clearInterval(intervalId);
}

// setInterval(renderTime, 1000);
