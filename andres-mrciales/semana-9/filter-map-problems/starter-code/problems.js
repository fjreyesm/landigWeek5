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
  return array.filter((resultado) => typeof resultado === "string");
}

// ? utilizando 'map' escribe una función que convierte un array de valores Farenheit a grados Celsius
// ? eg: convertirTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertirTemps(array) {
  return array.map((resultado2) => (resultado2 - 32) / 1.8);
}

// ? utilizando 'map' escribe una función que devuelve el numero total de caracteres de cada elemento en un array de palabras
// ? eg: cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function cuentaCaracter(array) {
  return array.map((resultado3) => resultado3.length);
}

// ? utilizando 'filter' escribe una función que devuelve un array continendo solo valores falsos
// ? eg: contieneFalso([100, {}, [], 'Mike']) => false, contieneFalso([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function contieneFalso(array) {
  return array.filter((resultado4) => !resultado4);
}
// ? utilizando un método array, escribe una función que devuelve los elementos string de un array que tengan un número determinado de caracteres o más
// ? eg: palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function palabrasDeLongitud(array, minLongitud) {
  let newArray = array.filter((resultado5) => resultado5.length >= minLongitud);
  return newArray;
}

// ? utilizando en método array, escribe una función que convierte un array de medidas en strings, a un array de números
// ? eg: medidaANumero(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function medidaANumero(array) {
  return array.map((resultado6) => parseFloat(resultado6));
}

// ? utilizando `split` y `filter` escribe una función que cuenta el número de vocales en una frase
// ? eg: numeroDeVocales('Stay classy San Diego') => 6

function numeroDeVocales(string) {
  let arrayVocales = string.split("");

  let vocales = arrayVocales.filter(
    (resultado7) =>
      resultado7 === "a" ||
      resultado7 === "e" ||
      resultado7 === "i" ||
      resultado7 === "o" ||
      resultado7 === "u" ||
      resultado7 === "I" /*:( :(*/
  );
  return vocales.length;
}
// ? utilizando `split`, `map` y `join`, escribe una función que hace mayuscula la primer letra de cada palabre en una frase
// ? eg: convertirATitulo('The lord of the rings') => 'The Lord Of The Rings'

function convertirATitulo(string) {
  let array = string.split(" ");
  array = array.map((mayus) => {
    return mayus[0].toUpperCase() + mayus.substring(1).toLowerCase();
  });
  array = array.join(" ");
  return array;
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
