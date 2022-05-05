// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
var x = parseInt(prompt("please enter the first number :"));
let y = parseInt(prompt("please enter the second number"));
let z = prompt("what calulation do you want to do?");
let rest;
if (z === "+") {
  rest = x + y;
  alert(rest);
} else if (z === "*") {
  rest = x * y;
  alert(rest);
} else if (z === "-") {
  rest = x - y;
  alert(rest);
} else {
  rest = x / y;
  alert(rest);
}
