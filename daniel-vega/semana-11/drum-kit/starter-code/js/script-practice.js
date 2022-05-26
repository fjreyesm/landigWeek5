// Ejercicio hecho en taller del jueves a las 21:00.
const [clap, hihat, kick, openhat, boom, ride, snare, tom, tink] = Array.from(
  document.querySelectorAll('audio'),
);

window.addEventListener('keyup', playSound);

function playSound(event) {
  const { keyCode } = event;
  console.log(keyCode);
  if (keyCode === '65') {
    clap.play();
  }
}
