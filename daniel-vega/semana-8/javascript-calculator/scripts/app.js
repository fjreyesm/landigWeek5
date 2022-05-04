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

do {
  operation = operationInput();

  answer = operationRepeatInput();
} while (answer === 'S');
