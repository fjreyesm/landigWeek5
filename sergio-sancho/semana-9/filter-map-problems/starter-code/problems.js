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

function soloStrings(array) {return array.filter((word) => typeof word == 'string');}

// ? utilizando 'map' escribe una función que convierte un array de valores Farenheit a grados Celsius
// ? eg: convertirTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertirTemps(array) {return array.map((temperaturas) => (temperaturas-32)*5/9);}

// ? utilizando 'map' escribe una función que devuelve el numero total de caracteres de cada elemento en un array de palabras
// ? eg: cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function cuentaCaracter(array) { return array.map((elemento) => elemento.length);}

// ? utilizando 'filter' escribe una función que devuelve un array continendo solo valores falsos
// ? eg: contieneFalso([100, {}, [], 'Mike']) => false, contieneFalso([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function contieneFalso(array) {return array.filter((valor) => Boolean(valor) == false);}

// ? utilizando un método array, escribe una función que devuelve los elementos string de un array que tengan un número determinado de caracteres o más
// ? eg: palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function palabrasDeLongitud(array, minLongitud) {return array.filter((elemento) => elemento.length  >= minLongitud)}

// ? utilizando en método array, escribe una función que convierte un array de medidas en strings, a un array de números
// ? eg: medidaANumero(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function medidaANumero(array) {return array.map((medidas) => parseFloat(medidas)) ;}

// ? utilizando `split` y `filter` escribe una función que cuenta el número de vocales en una frase
// ? eg: numeroDeVocales('Stay classy San Diego') => 6
// He usado match porque resolverlo comparando uno a uno y el operador || hacía daño a la vista 
// El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
// El flag g sirve para que considere todas las ocurrencias, el flag i para que considere  mayúsculas y minúsculas.

function numeroDeVocales(string) {return (string.split("").filter((string) => string.match(/[aeiou]/gi)).length ;}

// ? utilizando `split`, `map` y `join`, escribe una función que hace mayuscula la primer letra de cada palabre en una frase
// ? eg: convertirATitulo('The lord of the rings') => 'The Lord Of The Rings'


function convertirATitulo(string) {return string.split(" ").map((string) => string.charAt(0).toUpperCase()+string.slice(1))
string.join(" ");
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
