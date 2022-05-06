// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
const x = parseFloat(prompt('dime un numero'));
const z =( prompt('dime la operacion'));
const y = parseFloat(prompt('dime el otro numero'));
// SUMA NORMAL
// SUMA NORMAL
// const x = parseFloat(prompt("dime un numero"));
// const y = parseFloat(prompt("dime el otro numero"))
// const suma = x + y;
// alert(suma);

// CALCULADORA-BÁSICA

if (z == "+") {
  const suma = x + y;
  alert(suma);
} else if (z == "-") {
  const resta = x - y;
  alert(resta);
} else if (z == "*") {
  const multiplicacion = x * y;
  alert(multiplicacion);
} else if (z == "/") {
  const division = x / y;
  alert(division);

  // CALCULADORA AVANZADA
} else if (z == "**") {
  const potencia = x ** y;
  alert(potencia);
} else if (z == "r") {
  const raiz =Math.sqrt(x);
  alert(raiz);
}




