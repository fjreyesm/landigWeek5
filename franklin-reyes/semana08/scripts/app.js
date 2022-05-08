// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
let calcular = true;
let tipo = 1;
1;
let i = 0;
do {
  let tipo = prompt("Desea realizar una operacion basica(1) o Avanzazada(2)");
  if (tipo == 1) {
    let operacion1 = prompt("Que operacion deseas realizar? ( + - * /)");
    let numero1 = parseInt(prompt("Introduce el primer operando"));
    let numero2 = parseInt(prompt("Introduce el segundo operando"));

    if (operacion1 == "+") {
      alert("El resultado de la suma es: " + (numero1 + numero2));
    } else if (operacion1 == "-") {
      alert("El resultado de la resta es: " + (numero1 - numero2));
    } else if (operacion1 == "*") {
      alert("El resultado de la multiplicación es: " + numero1 * numero2);
    } else if (operacion1 == "/") {
      alert("El resultado de la división es: " + numero1 / numero2);
    } else {
      alert("Operación no válida");
    }
  } else if (tipo == 2) {
    let operacion2 = prompt(
      "Que operacion deseas realizar? Potencia(1) o Raiz Cuadrada(2)"
    );
    if (operacion2 == 1) {
      let numero1 = parseInt(prompt("Introduce el primer operando"));
      let numero2 = parseInt(prompt("Introduce el segundo operando"));
      if (operacion2 == "1") {
        alert("El resultado de la resta es: " + Math.pow(numero1, numero2));
      }
    } else if (operacion2 == 2) {
      let numero1 = parseInt(prompt("A cual numero quieres calcular la raiz2"));
      alert("El resultado de la raiz cuadrada es: " + Math.sqrt(numero1));
    }
  }

  i++;
  let resp = prompt(" deseas hacer otra operacion? ( si/no)");
  if (resp == "no" || resp == "No" || resp == "NO") {
    calcular = false;
  }
} while (calcular);
