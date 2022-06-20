// elemento

const [clap, hihat, kick, openhat, boom, ride, snare, tom, tink] = Array.from(
  document.querySelectorAll("audio")
);

//evento
window.addEventListener("keyup", playSound);

//ejecuacion
function playSound(event) {
  const { keyCode } = event;
  console.log(keyCode);
  switch (keyCode) {
    case 65:
      clap.play();
      break;
    case 83:
      hihat.play();
      break;
    case 68:
      kick.play();
      break;
    case 70:
      openhat.play();
      break;
    case 71:
      boom.play();
      break;
    case 72:
      ride.play();
      break;
    case 74:
      snare.play();
      break;
    case 75:
      tom.play();
      break;
    case 76:
      tink.play();
      break;
  }
}
