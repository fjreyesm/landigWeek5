// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
const x = parseFloat(prompt('dime un numero'));
const z =( prompt('dime la operacion'));
const y = parseFloat(prompt('dime el otro numero'));

const suma = x + y;
const resta = x - y;
const multiplicacion = x * y;
const division = x / y;  

if (z =='+') {
  alert(suma)
} else if ( z =='-')    { 
  alert(resta)
} else if (z == '*')    {
  alert(multiplicacion)
} else if (z == '/')    {
  alert(division)
}


// SUMA NORMAL
// const x = parseFloat(prompt("dime un numero"));
// const y = parseFloat(prompt("dime el otro numero"))
// const suma = x + y;
// alert(suma);