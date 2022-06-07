window.addEventListener('keydown', playSound);
function playSound(event) {
  if (event.keyCode === 65) {
    let sound = document.querySelector('.clap-sound');
    sound.play();
  } else if (event.keyCode === 83) {
    let sound = document.querySelector('.hihat-sound');
    sound.play();
  } else if (event.keyCode === 68) {
    let sound = document.querySelector('.kick-sound');
    sound.play();
  } else if (event.keyCode === 70) {
    let sound = document.querySelector('.openhat-sound');
    sound.play();
  } else if (event.keyCode === 71) {
    let sound = document.querySelector('.boom-sound');
    sound.play();
  } else if (event.keyCode === 72) {
    let sound = document.querySelector('.ride-sound');
    sound.play();
  } else if (event.keyCode === 74) {
    let sound = document.querySelector('.snare-sound');
    sound.play();
  } else if (event.keyCode === 75) {
    let sound = document.querySelector('.tom-sound');
    sound.play();
  } else if (event.keyCode === 76) {
    let sound = document.querySelector('.tink-sound');
    sound.play();
  }
}
