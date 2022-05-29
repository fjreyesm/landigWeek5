//elemento
//capturar con query la clase de cada keycode.
//window
//evento
window.addEventListener("keyup", playSoundByLetter);
//escuchar la ventana el keyup
//obtener la pulsacion que el humano realizo

//ejecucion
function playSoundByLetter(event) {
  console.log(event);
  //const keyCode=event.keyCode;
  const { keyCode } = event;
  let clap;
  console.log(typeof keyCode);
  switch (keyCode) {
    case 65:
      clap = document.querySelector(".clap-sound");
      clap.play();
      break;
    case 83:
      clap = document.querySelector(".hihat-sound");
      clap.play();
      break;
    case 68:
      clap = document.querySelector(".kick-sound");
      clap.play();
      break;
    case 70:
      clap = document.querySelector(".openhat-sound");
      clap.play();
      break;
    case 71:
      clap = document.querySelector(".boom-sound");
      clap.play();
      break;
    case 72:
      clap = document.querySelector(".ride-sound");
      clap.play();
      break;
    case 74:
      clap = document.querySelector(".snare-sound");
      clap.play();
      break;
    case 75:
      clap = document.querySelector(".tom-sound");
      clap.play();
      break;
    case 76:
      clap = document.querySelector(".tink-sound");
      clap.play();
      break;
  }
}

//keycode devuelve la data-key para capturar el audio element

//scwith para cada tecla y. addEventlistener a una variable y hacer el audioElement play

//capturar el audio que se relaciona con la pulsacion
//adaptar a esto:
//document.addEventListener("keydown", (event) => {
//const keyName = event.key;
// alert("keydown event\n\n" + "key: " + keyName);
//});
