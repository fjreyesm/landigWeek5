// Cuando le doy a render
// imprimo algo en pantalla

// Cuando le doy a play
// imprimo algo en pantalla con una demora

// elemento
const span = document.querySelector('p > span');

const [renderButton, playButton, stopButton, boomButton] = Array.from(
  document.querySelectorAll('button'),
);
// evento

renderButton.addEventListener('click', renderString);
playButton.addEventListener('click', playTimer);
stopButton.addEventListener('click', stopTimer);
// boomButton.addEventListener('click', renderBoomSync);
boomButton.addEventListener('click', renderBoomAsync);

// ejecucion
let stringToprint = '💣';

function renderString(event) {
  span.innerText = stringToprint;
}

// let timerId = undefined;
let timerId;

function playTimer(event) {
  timerId = setTimeout(renderString, 3000);
}

function stopTimer(event) {
  clearTimeout(timerId);
}

// ⚠️ ESTO ESTA MAL! LA CORRECTA FORMA ES LA LINEA 45
// const renderBombAndExplosion = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(renderString());
//   }, 2000);
// });

const renderBombAndExplosion = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(renderString());
    }, 2000);
  });
};

function renderBoomSync(event) {
  renderString();
  stringToprint = '💥';
  renderBombAndExplosion()
    .then()
    .catch((error) => console.error('error', error));
}

async function renderBoomAsync(event) {
  renderString();
  stringToprint = '💥';

  try {
    await renderBombAndExplosion();
  } catch (error) {
    console.error('error', error);
  }
}
