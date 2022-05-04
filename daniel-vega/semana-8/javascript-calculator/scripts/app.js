// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
let answer = 'n';
let operation = 'a';
let operationType = 'a';
const operationChoices = ['SU', 'RE', 'MU', 'DI', 'PO', 'RA', 'HI', 'IM', 'VI'];

do {
  do {
    operation = null;
    operationType = prompt(
      '¿Qué tipo de operación vas a hacer? ( (N)ormales / (A)vanzadas ) ',
    );

    operationType = operationType.toUpperCase();

    if (operationType === 'N') {
      operation = prompt(
        `¿Qué operación deseas hacer?
      ( \(SU\)mar / \(RE\)star / \(MU\)ltiplicar / \(DI\)vidir / \(PO\)tencia / \(RA\)iz )`,
      );
    } else if (operationType === 'A') {
      operation = prompt(
        `¿Qué operación deseas hacer?
      ( \(HI\)poteca / \(IM\)c / \(VI\)aje )`,
      );
    } else {
      operation = 'e';
    }

    operation = operation.toUpperCase();

    if (!operationChoices.includes(operation)) {
      alert('¡Atención! Operacion no válida');
    }
  } while (!operationChoices.includes(operation));

  answer = prompt('¿Quieres hacer otra operación? (S/N) ');
  answer = answer.toUpperCase();
  if (answer === 'S') {
    alert('De acuerdo. ¡Vamos allá!');
  } else {
    alert('De acuerdo. ¡Hasta Otra!');
  }
} while (answer === 'S');
