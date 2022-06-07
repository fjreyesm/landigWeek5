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

const var1 = document.querySelector("#temperature"); //tipo input
//querySelector devuelve el elemento que coincida con el selector id=temperature en HTML
const var2 = document.querySelector("#fahrenheit_to_celsius"); //tipo boton
//boton celsius_de este boton quiero su evento click
const var3 = document.querySelector("#celsius_to_fahrenheit"); //tipo boton
//boton fahrenhait_de este boton quiero su evento click

console.log(typeof var1); //es un objeto
console.log(var1.value); //valor introducido por el usuario

console.log(typeof var2); //es un objeto y puedo hacer uso ahora de su evento onclick
console.log(var2.value);

console.log(typeof var3); //es un objeto y puedo hacer uso ahora de su evento onclick
console.log(var3.value);

function celsius(valor) {
  //al definir funcion la variable entre parentesis es anonima
  const transf = (valor.value - 32) / 1.8;
  console.log(
    transf + "variable dentro de la funcion que contiene el cambio a celsius"
  );
  return transf;
}

function farenheit(valor) {
  const transf = 1.8 * valor.value + 32;
  console.log(
    transf + "variable dentro de la funcion que contiene el cambio a fahrenhet"
  );
  return transf;
}

const resul_celsius = celsius(var1); //debe verse en input y en result
const resul_fahren = farenheit(var1);

console.log(resul_celsius + " en grados celsius");
console.log(resul_fahren + " en grados fahrenheit");

//Cuando se activa el evento click, se llama a una función. Esta función se conoce como event handler o event listener.
//const var2 = document.querySelector("#fahrenheit_to_celsius");

//cuando pulso boton celsius debe convertir la temperatura introducida en input y mostrarala en result
var2.onclick = function (e) {
  console.log(e.target); //boton Id=fahrenheit to celsius
  console.log(e.target.innerHTML); //boton de F to C
  document.querySelector("#result").innerHTML = celsius(var1);
};

//cuando pulso boton celsius debe convertir la temperatura introducida en input y mostrarala en result
var3.onclick = function (e) {
  console.log(e.target);
  console.log(e.target.innerHTML);
  document.querySelector("#result").innerHTML = farenheit(var1);
};

//los bonus los dejo para mejoras que se me queman las albondigas
