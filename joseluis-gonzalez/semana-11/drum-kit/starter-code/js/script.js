window.addEventListener('keydown', playSound);

function playSound(event) {
  if (event.keyCode === 65) {
    keyPresionada = '65';
    var mediaElem = document.querySelector('audio[data-key="65"]');
    mediaElem.play();
  }
  if (event.keyCode === 83) {
    keyPresionada = '83';
    var mediaElem = document.querySelector('audio[data-key="83"]');
    mediaElem.play();
  }
  if (event.keyCode === 68) {
    keyPresionada = '68';
    var mediaElem = document.querySelector('audio[data-key="68"]');
    mediaElem.play();
  }
  if (event.keyCode === 70) {
    keyPresionada = '70';
    var mediaElem = document.querySelector('audio[data-key="70"]');
    mediaElem.play();
  }
  if (event.keyCode === 71) {
    keyPresionada = '71';
    var mediaElem = document.querySelector('audio[data-key="71"]');
    mediaElem.play();
  }
  if (event.keyCode === 72) {
    keyPresionada = '72';
    var mediaElem = document.querySelector('audio[data-key="72"]');
    mediaElem.play();
  }
  if (event.keyCode === 74) {
    keyPresionada = '74';
    var mediaElem = document.querySelector('audio[data-key="74"]');
    mediaElem.play();
  }
  if (event.keyCode === 75) {
    keyPresionada = '75';
    var mediaElem = document.querySelector('audio[data-key="75"]');
    mediaElem.play();
  }
  if (event.keyCode === 76) {
    keyPresionada = '76';
    var mediaElem = document.querySelector('audio[data-key="76"]');
    mediaElem.play();
  }
}
