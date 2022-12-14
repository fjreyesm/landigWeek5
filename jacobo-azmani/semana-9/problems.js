/* eslint-disable no-unused-vars */

// ? Debajo hay una función de demonstración para practicar ejecutando pruebas automatizadas.
// ? Añade la declaración 'return []' a la función, guarda el archivo.
// ? Ejecuta las pruebas con el commande dentro de tu terminal 'npm run test'
// ? Ahora debes ver que esta prueba de demonstración esta pasando en el informe de salida.
function demo(array) {
  return [];
}

// ? utilizando 'filter' escribe una función que devuelve todos los elementos string dentro de un array
// ? eg: soloStrings([10, 'Mike', '23', NaN, 'elefante']) => ['Mike', '23', 'elefante']

function soloStrings(array) {
  const resultados = array.filter((item) => typeof item === 'string');
  return resultados;
}

// ? utilizando 'map' escribe una función que convierte un array de valores Farenheit a grados Celsius
// ? eg: convertirTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertirTemps(array) {
  let resultados = [];
  array.map((item) => {
    resultados.push((item - 32) * (5 / 9));
  });
  return resultados;
}

// ? utilizando 'map' escribe una función que devuelve el numero total de caracteres de cada elemento en un array de palabras
// ? eg: cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function cuentaCaracter(array) {
  let resultados = [];
  array.map((item) => {
    resultados.push(item.length);
  });
  return resultados;
}

// ? utilizando 'filter' escribe una función que devuelve un array continendo solo valores falsos
// ? eg: contieneFalso([100, {}, [], 'Mike']) => false, contieneFalso([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function contieneFalso(array) {
  const resultados = array.filter((item) => Boolean(item) === false);
  return resultados;
}

// ? utilizando un método array, escribe una función que devuelve los elementos string de un array que tengan un número determinado de caracteres o más
// ? eg: palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function palabrasDeLongitud(array, minLongitud) {
  const resultados = array.filter(
    (item) => typeof item === 'string' && item.length >= minLongitud,
  );
  return resultados;
}

// ? utilizando en método array, escribe una función que convierte un array de medidas en strings, a un array de números
// ? eg: medidaANumero(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function medidaANumero(array) {
  let resultados = [];
  array.map((item) => {
    const arraySeparado = item.split('cm');
    resultados.push(parseFloat(arraySeparado[0]));
  });
  return resultados;
}

// ? utilizando `split` y `filter` escribe una función que cuenta el número de vocales en una frase
// ? eg: numeroDeVocales('Stay classy San Diego') => 6

function numeroDeVocales(string) {
  const soloVocales = string
    .split('')
    .filter(
      (item) =>
        item === 'a' ||
        item === 'A' ||
        item === 'e' ||
        item === 'E' ||
        item === 'i' ||
        item === 'I' ||
        item === 'o' ||
        item === 'O' ||
        item === 'u' ||
        item === 'U',
    );
  return soloVocales.length;
}

// ? utilizando `split`, `map` y `join`, escribe una función que hace mayuscula la primer letra de cada palabre en una frase
// ? eg: convertirATitulo('The lord of the rings') => 'The Lord Of The Rings'

function convertirATitulo(string) {
  const arrayPalabras = string.split(' ');
  let resultados = [];
  arrayPalabras.map((string) =>
    resultados.push(string.charAt(0).toUpperCase() + string.slice(1)),
  );
  return resultados.join(' ');
}

// ! por favor no cambies lo de abajo ✋

module.exports = {
  demo,
  soloStrings,
  convertirTemps,
  cuentaCaracter,
  contieneFalso,
  palabrasDeLongitud,
  medidaANumero,
  numeroDeVocales,
  convertirATitulo,
};
