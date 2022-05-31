window.addEventListener("keydown", playSound);
function playSound(event) {
  if (event.keyCode === 65) {
    /*a*/
    console.log("hola");
    let clap = document.querySelector(".clap-sound");
    clap.play();
  } else if (event.keyCode === 83) {
    let clap = document.querySelector(".hihat-sound");
    clap.play();
  } else if (event.keyCode === 68) {
    let clap = document.querySelector(".kick-sound");
    clap.play();
  } else if (event.keyCode === 70) {
    let clap = document.querySelector(".openhat-sound");
    clap.play();
  } else if (event.keyCode === 71) {
    let clap = document.querySelector(".boom-sound");
    clap.play();
  } else if (event.keyCode === 72) {
    let clap = document.querySelector(".ride-sound");
    clap.play();
  } else if (event.keyCode === 74) {
    let clap = document.querySelector(".snare-sound");
    clap.play();
  } else if (event.keyCode === 75) {
    let clap = document.querySelector(".tom-sound");
    clap.play();
  } else if (event.keyCode === 76) {
    let clap = document.querySelector(".tink-sound");
    clap.play();
  }
}
