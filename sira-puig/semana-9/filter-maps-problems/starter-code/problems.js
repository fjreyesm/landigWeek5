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
  /*const cadena = array.filter((cadenas) => typeof cadenas === "string");
  tambien puedo crear un array y devolerlo*/
  return array.filter((cadenas) => typeof cadenas === "string");
}

// ? utilizando 'map' escribe una función que convierte un array de valores Farenheit a grados Celsius
// ? eg: convertirTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertirTemps(array) {
  const temp = array.map((mifuncion) => ((mifuncion - 32) * 5) / 9);
  return temp;
}

// ? utilizando 'map' escribe una función que devuelve el numero total de caracteres de cada elemento en un array de palabras
// ? eg: cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function cuentaCaracter(array) {
  //const cuentachar = array.map((mifuncion) => mifuncion.lenght);
  //return cuentachar;
  //si se hace con la variable local da error creo que porque map modifica el array
  return array.map((mifuncion) => mifuncion.length);
}

// ? utilizando 'filter' escribe una función que devuelve un array continendo solo valores falsos
// ? eg: contieneFalso([100, {}, [], 'Mike']) => false, contieneFalso([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function contieneFalso(array) {
  //const falso = array.filter((mifuncion) => !array);
  //return falso;
  //con variable local no funciona
  //return array.filter((array) => (array ? true : false));no funciona ternario

  return array.filter((mifuncion) => !mifuncion);
}

// ? utilizando un método array, escribe una función que devuelve los elementos string de un array que tengan un número determinado de caracteres o más
// ? eg: palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function palabrasDeLongitud(array, minLongitud) {
  return array.filter((mifuncion) => mifuncion.length >= minLongitud);
}

// ? utilizando en método array, escribe una función que convierte un array de medidas en strings, a un array de números
// ? eg: medidaANumero(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function medidaANumero(array) {
  //map transforma los elementos
  return array.map((mifuncion) => parseFloat(mifuncion.slice(0, -2)));
}

// ? utilizando `split` y `filter` escribe una función que cuenta el número de vocales en una frase
// ? eg: numeroDeVocales('Stay classy San Diego') => 6

function numeroDeVocales(string) {
  const minusc = string.toLowerCase(); //no soy capaz de integrar esta linea de codigo abajo
  const total = minusc
    .split("")
    .filter(
      (string) =>
        string === "a" ||
        string === "e" ||
        string === "i" ||
        string === "o" ||
        string === "u"
    ).length;

  return total;
  //return string.match(/[aeiou]/gi).length;
}

// ? utilizando `split`, `map` y `join`, escribe una función que hace mayuscula la primer letra de cada palabre en una frase
// ? eg: convertirATitulo('The lord of the rings') => 'The Lord Of The Rings'

function convertirATitulo(string) {
  let array = string.split(" ");
  let arraymayus = array.map((array) => {
    return array[0].toUpperCase() + array.slice(1);
  });

  return (string = arraymayus.join(" "));
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
