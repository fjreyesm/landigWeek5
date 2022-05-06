// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

function calculadoraUsuario(resultadoOperacion = 0) {
  let operacion;
  alert('Introduzca lo que desee calcular');
  let primerNumero = Number(parseFloat(prompt('Primer o primeros dígitos')));
  operacion = prompt('Tipo de operación');
  let segundoNumero = Number(parseFloat(prompt('Segundo o segundos dígitos')));

  if (operacion == '+') {
    resultadoOperacion = primerNumero + segundoNumero;
  } else if (operacion == '/') {
    resultadoOperacion = primerNumero / segundoNumero;
  } else if (operacion == '*') {
    resultadoOperacion = primerNumero * segundoNumero;
  } else if (operacion == '-') {
    resultadoOperacion = primerNumero - segundoNumero;
  } else if ((operacion = !null)) {
    resultadoOperacion = 'Error';
    alert('Introduzca una operación válida');
  } else if ((x = !null)) {
    resultadoOperacion = 'Error';
    alert('¡No ha introducido datos!');
  } else if ((y = !null)) {
    resultadoOperacion = 'Error';
    alert('¡No ha introducido datos!');
  }

  document.getElementById(
    'calcu',
  ).innerHTML = `Su resultado es: ${resultadoOperacion}`;
}

alert(resultado);
