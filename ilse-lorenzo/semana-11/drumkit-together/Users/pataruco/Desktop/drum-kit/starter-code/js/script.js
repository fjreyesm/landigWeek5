//const div = document.querySelector('#es-un-id');

//const contenidoDeData = div.dataset.queLindaLaClaseDeHoy;
//console.log({ contenidoDeData });

// Escuchar la ventana el keyup
// Obtener la pulsación que el humano realizó
// Capturar el audio que se relaciona con la pulsación

// Elemento
// window
// Evento
//window.addEventListener('keyup', playSoundByLetter);
// Ejecución

//function playSoundByLetter(event) {
  // const keyCode = event.keyCode;
//  const { keyCode } = event;
//}

const playSound = function (event) {
  let audioKey = document.querySelector(
    `audio[data-key = '${event.keyCode.toString()}']`,
  );
  if (audioKey != null) {
    audioKey.play();
  }
};

window.addEventListener('keyup', playSound);
