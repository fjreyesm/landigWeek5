// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

//Variables
let answerLocal = 'n';
let operation = 'a';

//Functions
function operationInput() {
  let operationLocal = 'a';
  let operationTypeLocal = 'a';
  const operationChoicesLocal = [
    'SU',
    'RE',
    'MU',
    'DI',
    'PO',
    'RA',
    'HI',
    'IM',
    'VI',
  ];
  do {
    operationLocal = null;
    operationTypeLocal = prompt(
      '¿Qué tipo de operación vas a hacer? ( (N)ormales / (A)vanzadas ) ',
    );

    operationTypeLocal = operationTypeLocal.toUpperCase();

    if (operationTypeLocal === 'N') {
      operationLocal = prompt(
        `¿Qué operación deseas hacer?
      ( \(SU\)mar / \(RE\)star / \(MU\)ltiplicar / \(DI\)vidir / \(PO\)tencia / \(RA\)iz )`,
      );
    } else if (operationTypeLocal === 'A') {
      operationLocal = prompt(
        `¿Qué operación deseas hacer?
      ( \(HI\)poteca / \(IM\)c / \(VI\)aje )`,
      );
    } else {
      operationLocal = 'e';
    }

    operationLocal = operationLocal.toUpperCase();

    if (!operationChoicesLocal.includes(operationLocal)) {
      alert('¡Atención! Operacion no válida');
    }
  } while (!operationChoicesLocal.includes(operationLocal));
  return operationLocal;
}

function operationRepeatInput() {
  let answerLocal = 'n';
  answerLocal = prompt('¿Quieres hacer otra operación? (S/N) ');
  answerLocal = answerLocal.toUpperCase();
  if (answerLocal === 'S') {
    alert('De acuerdo. ¡Vamos allá!');
  } else {
    alert('De acuerdo. ¡Hasta Otra!');
  }
  return answerLocal;
}

function basicOperations() {
  let number1,
    number2 = 0;
  switch (operation) {
    case 'SU':
      number1 = parseFloat(prompt('Introduzca el primer valor: '));
      number2 = parseFloat(prompt('Introduzca el valor a sumar: '));
      alert('El resultado de la suma es ' + (number1 + number2));
      break;
    case 'RE':
      number1 = parseFloat(prompt('Introduzca el primer valor: '));
      number2 = parseFloat(prompt('Introduzca el valor a restar: '));
      alert('El resultado de la resta es ' + (number1 - number2));
      break;
    case 'MU':
      number1 = parseFloat(prompt('Introduzca el multiplicando: '));
      number2 = parseFloat(prompt('Introduzca el multiplicador: '));
      alert('El resultado de la multiplicación es ' + number1 * number2);
      break;
    case 'DI':
      number1 = parseFloat(prompt('Introduzca el dividendo: '));
      number2 = parseFloat(prompt('Introduzca el divisor: '));
      if (number2 === 0) {
        alert('El resultado de la división es ∞ porque el divisior es 0.');
      } else {
        alert('El resultado de la división es ' + number1 / number2);
      }
      break;
    case 'PO':
      number1 = parseFloat(prompt('Introduzca la base: '));
      number2 = parseFloat(
        prompt('Introduzca el exponente (Se redondea al alza): '),
      );
      number2 = Math.ceil(number2);
      alert('El resultado de la potencia es ' + number1 ** number2);
      break;
    case 'RA':
      number1 = parseFloat(prompt('Introduzca el radicando: '));
      number2 = parseFloat(
        prompt('Introduzca el índice (se redondea al alza): '),
      );
      number2 = Math.ceil(number2);
      if (number2 < 1) {
        alert('Error: El índice de una raíz no puede ser inferior a 1.');
      } else if (number1 < 0 && number2 % 2 === 0) {
        alert(`El resultado de la raiz no existe en números reales.
        La base es negativa y el índice es par.`);
      } else {
        alert('El resultado de la raíz es ' + number1 ** (1 / number2));
      }
      break;
  }
}

// MAIN
do {
  operation = operationInput();

  if (
    operation === 'SU' ||
    operation === 'RE' ||
    operation === 'MU' ||
    operation === 'DI' ||
    operation === 'PO' ||
    operation === 'RA'
  ) {
    basicOperations();
  }

  answer = operationRepeatInput();
} while (answer === 'S');
