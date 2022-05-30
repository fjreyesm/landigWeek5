// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

let operator = prompt(
  'Introduzca el símbolo de la operación que desea ejecutar: \n  +    para sumar\n  -    para restar\n  *    para multiplicar\n   /    para dividir\n   **   para potencia\n    r    para raiz cuadrada\n',
);

let primerNumero = Number(parseFloat(prompt('Primer número')));

let segundoNumero = Number(parseFloat(prompt('Segundo número')));

switch (operator) {
  case '+':
    resultado = primerNumero + segundoNumero;
    break;
  case '-':
    resultado = primerNumero - segundoNumero;
    break;
  case '*':
    resultado = primerNumero * segundoNumero;
    break;
  case '/':
    resultado = primerNumero / segundoNumero;
    break;
  case '**':
    resultado = primerNumero ** segundoNumero;
    break;
  case 'r':
    resultado = Math.sqrt(primerNumero);
    break;
}

alert(resultado);
