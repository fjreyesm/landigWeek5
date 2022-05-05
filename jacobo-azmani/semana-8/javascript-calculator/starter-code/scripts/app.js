// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
function calculadoraUsuario() {
  let z, operacion;
  alert('Introduzca lo que desee calcular');
  let x = prompt('Primeros dígitos');
  operacion = prompt('Tipo de operación');
  let y = prompt('Segundos dígitos');

  if (operacion == '+') {
    z = Number(x) + Number(y);
  } else if (operacion == '/') {
    z = Number(x) / Number(y);
  } else if (operacion == '*') {
    z = Number(x) * Number(y);
  } else if (operacion == '-') {
    z = Number(x) - Number(y);
  } else if ((operacion = !null)) {
    z = 'Error';
    alert('Introduzca una operación válida');
  } else if ((x = !null)) {
    z = 'Error';
    alert('¡No ha introducido datos!');
  } else if ((y = !null)) {
    z = 'Error';
    alert('¡No ha introducido datos!');
  }

  return z;
}

let resultado = (document.getElementById(
  'calcu',
).innerHTML = `Resultado: ${calculadoraUsuario()}`);

/* document.getElementById('calcu').innerHTML =
  'Resultado:' + ' ' + calculadoraUsuario(); */

alert('Su resultado es' + ' ' + operacion);
