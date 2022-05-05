// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

// Imports
// Using decimal.js given by Pedro in certain operations. Rounded to two decimals in others.

// Variables
let answer = 'n';
let operation = 'a';

// Functions
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
    'II',
    'VI',
    'VM',
  ];
  do {
    operationLocal = null;
    operationTypeLocal = prompt(
      '¿Qué tipo de operación vas a hacer? ( (N)ormales / (A)vanzadas )',
    );

    operationTypeLocal = operationTypeLocal.toUpperCase();

    if (operationTypeLocal === 'N') {
      operationLocal = prompt(
        `¿Qué operación deseas hacer?
      ( (SU)mar / (RE)star / (MU)ltiplicar / (DI)vidir / (PO)tencia / (RA)íz )`,
      );
    } else if (operationTypeLocal === 'A') {
      operationLocal = prompt(
        `¿Qué operación deseas hacer?
      ( (HI)poteca / (IM)c / IMC en medidas Imperoales (II) / (VI)aje / Viaje en Millas (VM) )`,
      );
    } else {
      operationLocal = 'e';
    }

    operationLocal = operationLocal.toUpperCase();

    if (!operationChoicesLocal.includes(operationLocal)) {
      alert('¡Atención! Operacion no válida.');
    }
  } while (!operationChoicesLocal.includes(operationLocal));
  return operationLocal;
}

function operationRepeatInput() {
  let answerLocal = null;
  do {
    answerLocal = prompt('¿Quieres hacer otra operación? (S/N)');
    answerLocal = answerLocal.toUpperCase();
    if (answerLocal === 'S') {
      alert('De acuerdo. ¡Vamos allá!');
    } else if (answerLocal === 'N') {
      alert('De acuerdo. ¡Hasta Otra!');
    } else {
      answerLocal = null;
    }
  } while (answerLocal === null);

  return answerLocal;
}

function makeOperations() {
  let number1,
    number2,
    number3,
    number4,
    number5,
    number6 = 0;
  switch (operation) {
    case 'SU':
      number1 = parseFloat(prompt('Introduzca el primer valor:'));
      number2 = parseFloat(prompt('Introduzca el valor a sumar:'));
      number3 = Decimal(String(number1 + number2)).toFixed();
      if (Number.isNaN(number3)) {
        alert('Error en alguno de los valores.');
      } else alert('El resultado de la suma es: ' + number3);
      break;
    case 'RE':
      number1 = parseFloat(prompt('Introduzca el primer valor:'));
      number2 = parseFloat(prompt('Introduzca el valor a restar:'));
      number3 = Decimal(String(number1 - number2)).toFixed();
      if (Number.isNaN(number3)) {
        alert('Error en alguno de los valores.');
      } else alert('El resultado de la resta es: ' + number3);
      break;
    case 'MU':
      number1 = parseFloat(prompt('Introduzca el multiplicando:'));
      number2 = parseFloat(prompt('Introduzca el multiplicador:'));
      number3 = Decimal(String(number1 * number2)).toFixed();
      if (Number.isNaN(number3)) {
        alert('Error en alguno de los valores.');
      } else alert('El resultado de la multiplicación es: ' + number3);
      break;
    case 'DI':
      number1 = parseFloat(prompt('Introduzca el dividendo:'));
      number2 = parseFloat(prompt('Introduzca el divisor:'));
      if (number2 === 0) {
        alert('El resultado de la división es ∞ porque el divisior es 0.');
      } else {
        number3 = Decimal(String(number1 / number2)).toFixed();
        if (Number.isNaN(number3)) {
          alert('Error en alguno de los valores.');
        } else alert('El resultado de la división es: ' + number3);
      }
      break;
    case 'PO':
      number1 = parseFloat(prompt('Introduzca la base:'));
      number2 = parseFloat(
        prompt('Introduzca el exponente <Se redondea al alza>:'),
      );
      number2 = Math.ceil(number2);
      number3 = Decimal(String(number1 ** number2)).toFixed();
      if (Number.isNaN(number3)) {
        alert('Error en alguno de los valores.');
      } else alert('El resultado de la potencia es: ' + number3);
      break;
    case 'RA':
      number1 = parseFloat(prompt('Introduzca el radicando:'));
      number2 = parseFloat(
        prompt('Introduzca el índice <se redondea al alza>:'),
      );
      number2 = Math.ceil(number2);
      if (number2 < 1) {
        alert('Error: El índice de una raíz no puede ser inferior a 1.');
      } else if (number1 < 0 && number2 % 2 === 0) {
        alert(`El resultado de la raiz no existe en números reales.
        La base es negativa y el índice es par.`);
      } else {
        number3 = Decimal(String(number1 ** (1 / number2))).toFixed();
        if (Number.isNaN(parseFloat(number3))) {
          alert('Error en alguno de los valores.');
        } else alert('El resultado de la raíz es: ' + number3);
      }
      break;
    case 'HI':
      number1 = parseFloat(prompt('Introduzca el capital <positivo>:'));
      number2 = parseFloat(prompt('Introduzca el interés anual <positivo>:'));
      number3 = parseFloat(
        prompt(
          'Introduzca el número de pagos <positivo y se redonde al alza>:',
        ),
      );

      /*
      number1 = Present Value
      number2 = Anual Interest
      number3 = Number of Periods
      number4 = Monthly Interest
      number5 = Result
       */

      if (
        number1 < 0 ||
        number2 < 0 ||
        number3 < 0 ||
        Number.isNaN(number1 * number2 * number3)
      )
        number4 = NaN;
      if (Number.isNaN(number4)) {
        alert('Error en los datos introducidos.');
      } else {
        number4 = parseFloat((number2 / 12 / 100).toPrecision(5));
        number5 = Decimal(
          String(
            ((number4 * (number4 + 1) ** number3) /
              ((number4 + 1) ** number3 - 1)) *
              number1,
          ),
        ).toFixed(2);
        alert('El pago mensual es: ' + number5 + '€.');
      }
      break;
    case 'IM':
      // Height
      number1 = parseFloat(
        prompt('Introduzca la altura en CM o M <positivo>:'),
      ).toFixed(2);
      if (number1 > 3) number1 = number1 / 100;
      if (number1 < 0.5 || number1 > 3) number1 = NaN;
      // Weight
      number2 = parseFloat(
        prompt('Introduzca el peso en KG <positivo>:'),
      ).toFixed(2);
      if (number2 < 2 && number > 640) number2 = NaN;
      // Jon Brower Minnoch's weight was 635KG, from wikipedia. 🤨
      if (Number.isNaN(number1 * number2)) number3 = NaN;

      if (Number.isNaN(number3)) {
        alert('Error en los datos introducidos.');
      } else {
        number3 = (number2 / number1 ** 2).toFixed(2);
        alert('El Índice de Masa Corporal es: ' + number3);
      }
      break;
    case 'II':
      // Height
      number1 = parseFloat(
        prompt('Introduzca la altura en pulgadas(inches) <positivo>:'),
      ).toFixed(2);
      if (number1 < 19.685 || number1 > 118.11) number1 = NaN;
      // Weight
      number2 = parseFloat(
        prompt('Introduzca el peso en libras(pounds) <positivo>:'),
      ).toFixed(2);
      if (number2 < 4.40925 && number > 1410.96) number2 = NaN;
      // Jon Brower Minnoch's weight was 635KG, from wikipedia. 🤨
      if (Number.isNaN(number1 * number2)) number3 = NaN;

      if (Number.isNaN(number3)) {
        alert('Error en los datos introducidos.');
      } else {
        number3 = (703 * (number2 / number1 ** 2)).toFixed(2);
        alert('El Índice de Masa Corporal es: ' + number3);
      }
      break;
    case 'VI':
      number1 = parseFloat(
        prompt('Introduzca la distancia en KM <positivo>:'),
      ).toFixed(2);
      number2 = parseFloat(
        prompt('Introduzca la eficiencia de combustible (KPL) <positivo>:'),
      ).toFixed(2);
      number3 = parseFloat(
        prompt(
          'Introduzca el precio por Litro de combustible (PPL) <positivo>:',
        ),
      ).toFixed(2);
      number4 = parseFloat(
        prompt('Introduzca la velocidad en KM por hora (KMPH) <positivo>:'),
      ).toFixed(2);
      if (
        number1 < 0 ||
        number2 < 0 ||
        number3 < 0 ||
        number4 < 0 ||
        number4 > 160 ||
        Number.isNaN(number1 * number2 * number3 * number4)
      )
        number5 = NaN;

      // number1 = Distance
      // number2 = kpl
      // number3 = price
      // number4 = speed
      // 100mph limit speed seems reasonable enough.
      // number5 = time (distance / speed)
      // number6 = price (distance / mpg) * price

      if (Number.isNaN(number5)) {
        alert('Error en los datos introducidos.');
      } else {
        if (number4 > 96.5606) number2 = number2 - (number4 - 96.5606) / 2;
      }
      number5 = (number1 / number4).toFixed(2);
      number6 = ((number1 / number2) * number3).toFixed(2);
      alert(`Tu viaje durará ${number5} Hora(s) y costará ${number6}€.`);
      break;
    case 'VM':
      number1 = parseFloat(
        prompt('Introduzca la distancia en Millas <positivo>:'),
      ).toFixed(2);
      number2 = parseFloat(
        prompt('Introduzca la eficiencia de combustible (MPG) <positivo>:'),
      ).toFixed(2);
      number3 = parseFloat(
        prompt(
          'Introduzca el precio por galón de combustible (PPG) <positivo>:',
        ),
      ).toFixed(2);
      number4 = parseFloat(
        prompt('Introduzca la velocidad en millas por hora (MPH) <positivo>:'),
      ).toFixed(2);
      if (
        number1 < 0 ||
        number2 < 0 ||
        number3 < 0 ||
        number4 < 0 ||
        number4 > 100 ||
        Number.isNaN(number1 * number2 * number3 * number4)
      )
        number5 = NaN;

      // number1 = Distance
      // number2 = mpg
      // number3 = price
      // number4 = speed
      // 100mph limit speed seems reasonable enough.
      // number5 = time (distance / speed)
      // number6 = price (distance / mpg) * price

      if (Number.isNaN(number5)) {
        alert('Error en los datos introducidos.');
      } else {
        if (number4 > 60) number2 = number2 - (number4 - 60) / 2;
      }
      number5 = (number1 / number4).toFixed(2);
      number6 = ((number1 / number2) * number3).toFixed(2);
      alert(`Tu viaje durará ${number5} Hora(s) y costará ${number6}€.`);
      break;
  }
}

// MAIN
do {
  operation = operationInput();
  makeOperations();
  answer = operationRepeatInput();
} while (answer === 'S');
