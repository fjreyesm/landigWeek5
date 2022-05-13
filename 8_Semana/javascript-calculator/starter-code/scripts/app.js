// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
// Dejar al  usuario elegir la calculadora. Ejem (1-4)

// let number1 = parseFloat(prompt("Escribe un numero"));
// let operation = prompt("Qué operacion desea realizar + - * /");
// let number2 = parseFloat(prompt("Escribe otro numero"));

const typeOfCalc = parseFloat(
  prompt(`¿Qué calculadores necesitas: Básica (1) o Avanzada (2)?`)
);
let number1 = 0;
let operation = " ";
let number2 = 0;
let total = 0;

while (typeOfCalc != "salir") {
  //Calculadora Básica
  if (typeOfCalc === 1) {
    number1 = parseFloat(prompt("Escribe un numero"));
    operation = prompt("Qué operacion desea realizar + - * /");
    number2 = parseFloat(prompt("Escribe otro numero"));
    //Operaciones

    if (operation === "+") {
      total = number1 + number2;
      alert(total);
    } else if (operation === "-") {
      total = number1 + number2;
      alert(total);
    } else if (operation === "*") {
      total = number1 + number2;
      alert(total);
    } else if (operation === "/") {
      total = number1 + number2;
      alert(total);
    } else if ((operation !== "+", "-", "*", "/")) {
      alert("ERROR OPERATION");
      console.log("ERROR");
    }
  } else if (typeOfCalc === 2) {
    //Calculadora Avanzada
    //Operaciones Avanzadas

    if ((operation === "potencia", "**")) {
      number1 = parseFloat(prompt("Escribe un numero"));
      number2 = parseFloat(prompt("Escribe otro numero"));
      total = number1 ** number2;
      alert(total);
    } else if ((operation === "raiz cuadrada", "//")) {
      operation = prompt(
        "Qué operacion desea realizar: potencia(**) o raiz cuadrada(//)"
      );
      number1 = parseFloat(prompt("Escribe un numero"));
      total = Math.sqrt(number1);
      alert(total);
    } else if ((operation !== "potencia", "**", "raiz cuadrada", "//")) {
      alert("ERROR OPERATION");
    }
  } else {
    alert("ERROR");
  }
}
