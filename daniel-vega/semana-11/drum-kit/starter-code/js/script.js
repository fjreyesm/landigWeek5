const playSound = function (event) {
  let audioKey = document.querySelector(
    `audio[data-key = '${event.keyCode.toString()}']`,
  );
  if (audioKey != null) {
    audioKey.play();
  }
};

window.addEventListener('keyup', playSound);
