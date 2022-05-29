
//EVENTO window addEventListener, 
//que es una funcion de llamada, cuando hagamos un
//"KEYUP"(cuando suba la tecla)

window.addEventListener("keyup", TocaLaTecla);
//EJECUCION 
function TocaLaTecla(event) {
  console.log(event);
  const { keyCode } = event;
  //const keyCode=event.keyCode
  let clap;
  console.log(typeof keyCode);
  switch (keyCode) {
    case 65:
      clap = document.querySelector(".clap-sound");
      clap.play();
      break;
    case 83:
      hihat = document.querySelector(".hihat-sound");
      hihat.play();
      break;
    case 68:
      kick = document.querySelector(".kick-sound");
      kick.play();
      break;
    case 70:
      kick = document.querySelector(".openhat-sound");
      kick.play();
      break;
    case 71:
      kick = document.querySelector(".boom-sound");
      kick.play();
      break;
    case 72:
      kick = document.querySelector(".ride-sound");
      kick.play();
      break;
    case 74:
      kick = document.querySelector(".snare-sound");
      kick.play();
      break;
    case 75:
      kick = document.querySelector(".tom-sound");
      kick.play();
      break;
    case 76:
      kick = document.querySelector(".tink-sound");
      kick.play();
      break;
  }
}


