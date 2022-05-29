
//EVENTO window addEventListener,
//que es una funcion de llamada, cuando hagamos un
//"KEYUP"(cuando suba la tecla)

// window.addEventListener("keyup", playsound);
// //EJECUCION
// function playsound(event) {
//   console.log(event);
//   const { keyCode } = event;
//   //const keyCode=event.keyCode
//   let clap;
//   console.log(typeof keyCode);
//   switch (keyCode) {
//     case 65:
//       clap = document.querySelector(".clap-sound");
//       clap.play();
//       break;
//     case 83:
//       hihat = document.querySelector(".hihat-sound");
//       hihat.play();
//       break;
//     case 68:
//       kick = document.querySelector(".kick-sound");
//       kick.play();
//       break;
//     case 70:
//       kick = document.querySelector(".openhat-sound");
//       kick.play();
//       break;
//     case 71:
//       kick = document.querySelector(".boom-sound");
//       kick.play();
//       break;
//     case 72:
//       kick = document.querySelector(".ride-sound");
//       kick.play();
//       break;
//     case 74:
//       kick = document.querySelector(".snare-sound");
//       kick.play();
//       break;
//     case 75:
//       kick = document.querySelector(".tom-sound");
//       kick.play();
//       break;
//     case 76:
//       kick = document.querySelector(".tink-sound");
//       kick.play();
//       break;
//   }
// }


// convertir sonidos en un array
const [clap, hihat, kick, openhat, boom, ride, snare, tom, tink] = Array.from( document.querySelectorAll("audio"));

window.addEventListener("keyup", playSound);

function playSound(e) {
  const { keyCode } = e;

  if (keyCode === 65) {
    clap.play();
  } else if (keyCode === 83) {
    hihat.play();
  } else if (keyCode === 68) {
    kick.play();
  } else if (keyCode === 70) {
    openhat.play();
  } else if (keyCode === 71) {
    boom.play();
  } else if (keyCode === 72) {
    ride.play();
  } else if (keyCode === 74) {
    snare.play();
  } else if (keyCode === 75) {
    tom.play();
  } else if (keyCode === 76) {
    tink.play();

  }
}



