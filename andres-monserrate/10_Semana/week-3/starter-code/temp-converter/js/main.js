("use strict");
/* 1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
  Note: Equation to convert F to C:
  C = (F - 32) / 1.8
  Test your function.*/

//Defino la funcion para lo grados CELSIUS
function convertToCelsius(valueFahrenheit) {
  const celsius = (valueFahrenheit - 32) / 1.8;
  console.log(`Grados ${celsius} ºCelsius`);
  return celsius;
}

/* 2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
  Note: Equation to convert C to F:
  F = 1.8 * C + 32
  Test your function.*/

//Defino la funcion para lo grados FAHRENHEIT
function convertToFahrenheit(valueCelsius) {
  const fahrenheit = valueCelsius * 1.8 + 32;
  console.log(`Grados ${fahrenheit} ºFahtenheit`);
  return fahrenheit;
}

//COMPROBACIÓN DE LAS TEMPERATURAS
function checkTemperatures(temperature) {
  console.log(temperature);
  if (temperature != null || !isNaN) {
    return true;
  } else {
    alert("El valor no es válido");
    return false;
  }
}

// /* BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
// 	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.
// 	(Hint: read about the document.querySelector() method.)
// 	2.  Set the appropriate function to run when each button is clicked.
// 		(Hint: read about the addEventListener() method.)*/

// /* BONUS 2: Display the result of each calculation in the browser window rather than in the console:
// 	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
// BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
// */

//Defino las var para tomar elementos del DOM
const inputTemperature = document.getElementById("temperature");
const btnToCelsius = document.getElementById("fahrenheit_to_celsius");
const btnToFahrenheit = document.getElementById("celsius_to_fahrenheit");
const results = document.getElementById("result");

btnToCelsius.addEventListener("click", function () {
  if (checkTemperatures(inputTemperature.value)) {
    results.textContent =
      "The result is " + convertToFahrenheit(inputTemperature.value);
  }
});

btnToFahrenheit.addEventListener("click", function () {
  if (checkTemperatures(inputTemperature.value)) {
    results.innerText =
      "The result is " + convertToCelsius(inputTemperature.value);
  }
});
