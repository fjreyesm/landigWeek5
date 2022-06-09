const [clap, hihat, kick, openhat, boom, ride, snare, tom, tink] = Array.from(
  document.querySelectorAll("audio")
);

window.addEventListener("keyup", playSound);

function playSound(event) {
  const { keyCode } = event;
  console.log(keyCode);
  if (keyCode == "65") {
    clap.play();
  } else if (keyCode == "83") {
    hihat.play();
  } else if (keyCode == "68") {
    kick.play();
  } else if (keyCode == "70") {
    openhat.play();
  } else if (keyCode == "71") {
    boom.play();
  } else if (keyCode == "72") {
    ride.play();
  } else if (keyCode == "74") {
    snare.play();
  } else if (keyCode == "75") {
    tom.play();
  } else if (keyCode == "76") {
    tink.play();
  }
}
