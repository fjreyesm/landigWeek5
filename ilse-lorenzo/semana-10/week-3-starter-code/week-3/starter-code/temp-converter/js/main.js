/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function.
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/

'use strict';

Otro ejemplo
function convertirFahrenheit(valorFahrenheit) {
   const celsius = (valorFahrenheit - 32) / 1.8;
   return celsius;
 }

 function convertirCelsius(valorCelsius) {
   const farenheit = valorCelsius * 1.8 + 32;
   return farenheit;
 }

const inputTemperatura = document.getElementById('temperature');
const btnToCelsius = document.getElementById('fahrenheit_to_celsius');
const btnToFahrenheit = document.getElementById('celsius_to_fahrenheit');
const resultado = document.getElementById('result');

const temperatura = inputTemperatura.value;

btnToCelsius.addEventListener('click', function() {
  if (temperatura != null) {
    resultado.textContent = convertirFahrenheit(temperatura);
  } else {
    alert('Introduce la temperatura que deseas convertir.');
  }
});

btnToFahrenheit.addEventListener('click', function() {
  if (temperatura != null) {
    resultado.textContent = convertirCelsius(temperatura);
  } else {
    alert('Introduce la temperatura que deseas convertir.');
  }
});



Otro ejemplo

// Element
const temp = document.querySelector('#temperature');
const fahrenheitToCelsius = document.querySelector('#fahrenheit_to_celsius');
const celsiusToFahrenheit = document.querySelector('#celsius_to_fahrenheit');
const result = document.querySelector('#result');
const addNumber = parseInt(`${temp.value}`);

console.log(typeof addNumber);
console.log(temp.value);
console.log(addNumber);

// Function
const calcularFahrenheitToCelsius = function () {
  result.innerHTML = addNumber * 1.8 + 32;
};

const calcularCelsiusToFahrenheit = function () {
  result.innerHTML = (addNumber - 32) / 1.8;
  result.innerHTML = addNumber - 32 / 1.8;
};

// Event
fahrenheitToCelsius.addEventListener('click', calcularFahrenheitToCelsius);
celsiusToFahrenheit.addEventListener('click', calcularCelsiusToFahrenheit);




// Element
const temp = document.querySelector('#temperature');
const fahrenheitToCelsius = document.querySelector('#fahrenheit_to_celsius');
const celsiusToFahrenheit = document.querySelector('#celsius_to_fahrenheit');
const result = document.querySelector('#result');
const addNumber = parseInt(`${temp.value}`);

console.log(typeof addNumber);
console.log(temp.value);
console.log(addNumber);

// Function
const calcularFahrenheitToCelsius = function () {
  result.innerHTML = addNumber * 1.8 + 32;
};

const calcularCelsiusToFahrenheit = function () {
  result.innerHTML = (addNumber - 32) / 1.8;
};

// Event
fahrenheitToCelsius.addEventListener('click', calcularFahrenheitToCelsius);
celsiusToFahrenheit.addEventListener('click', calcularCelsiusToFahrenheit);