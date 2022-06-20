//Cuando haga 'Click' en el boton de render que imprima la hora actual.
//RENDER
//Elemento
const renderBoton = document.querySelector("#js-render");
// const hoursElement = document.querySelector("js-minutes");
// const minutsElement = document.querySelector("js-seconts");
// const secondsElement = document.querySelector("js-seconds");
const [hoursElement, minutsElement, secondsElement] = Array.from(document.querySelectorAll('time > span')
);
//Evento
renderBoton.addEventListener('click', renderTime);
//Ejecución
function renderTime(event) {
  const now = new Date();

  hoursElement.innerText = now.getHours();
  minutsElement.innerText = now.getMinutes();
  secondsElement.innerText = now.getSeconds();

}

//Hay una función que se llama intervalo "setInterval()"
//acepata dos argumentos (que funcion va a llamar )(cada cuanto la va a llamar)

setInterval(renderTime, 1000);

//Para parar la funcion de arriba necesitamos otra funcion
//Elemento
const stopBoton = document.querySelector("#js-stop");
//Evento
stopBoton.addEventListener("click", renderTime);