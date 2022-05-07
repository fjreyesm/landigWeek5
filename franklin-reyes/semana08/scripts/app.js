// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
let calcular = true;
let tipo = 1;
let i = 0;
do {
  let tipo = prompt("Desea realizar una operacion basica(1) o Avanzazada(2)");
  if (tipo == 1) {
    let operacion = prompt("Que operacion deseas realizar? ( + - * /)");
  } else if (tipo == 2) {
    let operacion = prompt(
      "Que operacion deseas realizar?  Raiz Cuadrada(1) o Potencia(2)"
    );
  }

  let numero1 = parseInt(prompt("Introduce el primer operando"));
  let numero2 = parseInt(prompt("Introduce el segundo operando"));
  if (
    (operacion === "+") |
      (operacion === "-") |
      (operacion === "*") |
      (operacion === "/") |
      (operacion === "2") &&
    typeof numero1 === "number" &&
    typeof numero2 === "number"
  ) {
    if (operacion == "+") {
      alert("El resultado de la suma es: " + (numero1 + numero2));
    } else if (operacion == "-") {
      alert("El resultado de la resta es: " + (numero1 - numero2));
    } else if (operacion == "*") {
      alert("El resultado de la multiplicación es: " + numero1 * numero2);
    } else if (operacion == "/") {
      alert("El resultado de la división es: " + numero1 / numero2);
    } else if (operacion === "2") {
      alert("El resultado de la potencia es: " + Math.pow(numero1, numero2));
    }
  } else {
    alert("Operación no válida o alguno de los operandos no es un número");
  }
  i++;
  let resp = prompt(" deseas hacer otra operacion? ( si/no)");
  if (resp == "no" || resp == "No" || resp == "NO") {
    calcular = false;
  }
} while (calcular);
