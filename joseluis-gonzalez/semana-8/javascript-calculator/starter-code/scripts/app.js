// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
let operar = true;
let x = 0;
while (operar && x < 10) {
  x = x + 1;
  // la variable x solo la uso en este caso para evitar que el bucle
  // se haga infinito por error.

  let primerOperador = prompt('introduce el primer operador');
  primerOperador = parseFloat(primerOperador);

  let tipoOperacion = prompt(
    'elije el tipo de operacion: +, -, *, /, p(potencias), ó r(raiz),',
  );

  let resultadoOperacion = 0;

  if (tipoOperacion === 'r') {
    resultadoOperacion = Math.sqrt(primerOperador);
    alert('resultado = ' + resultadoOperacion);
  } else {
    let segundoOperador = prompt('Introduce el segundo operador');
    segundoOperador = parseFloat(segundoOperador);
    if (tipoOperacion === '+') {
      resultadoOperacion = primerOperador + segundoOperador;
      alert('resultado = ' + resultadoOperacion);
    } else if (tipoOperacion === '-') {
      resultadoOperacion = primerOperador - segundoOperador;
      alert('resultado = ' + resultadoOperacion);
    } else if (tipoOperacion === '*') {
      resultadoOperacion = primerOperador * segundoOperador;
      alert('resultado = ' + resultadoOperacion);
    } else if (tipoOperacion === '/') {
      resultadoOperacion = primerOperador / segundoOperador;
      alert('resultado = ' + resultadoOperacion);
    } else if (tipoOperacion === 'p') {
      resultadoOperacion = primerOperador ** segundoOperador;
      alert('resultado = ' + resultadoOperacion);
    } else {
      alert('elije el tipo de operacion:  +, -, / y *');
    }
  }
  let otraOperacion = prompt('Desea realizar otra operación (Y/N)?');
  if (
    otraOperacion.toUpperCase() === 'Y' ||
    otraOperacion.toUpperCase() === 'S'
  ) {
    operar = true;
  } else operar = false;
}
alert('Adios');
