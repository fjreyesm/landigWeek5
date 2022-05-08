// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
let result;
const operator = prompt(
  'Introduzca la operacón ( ya sea +, -, *, / o potencia (**)',
);
const number1 = parseFloat(prompt('Introduzca primer número: '));
const number2 = parseFloat(prompt('Introduzca segundo número: '));
switch (operator) {
  case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;
  case '**':
    result = number1 ** number2;
    console.log(`${number1} ** ${number2} = ${result}`);
    break;
}
alert(`${number1} ${operator} ${number2} = ${result}`);
console.log(`${number1} ${operator} ${number2} = ${result}`);
alert('¿Desea realizar otra operación?');
location.reload();
