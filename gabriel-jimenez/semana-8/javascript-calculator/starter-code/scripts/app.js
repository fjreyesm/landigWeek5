// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

console.log("working!");
let option = prompt(
  "Choose the operation: addition (+), subtraction (-), multiplication (*), division (/), exponentiation (**), square root (sqrt), mortgage calculation (mortgage), body mass index calculation (BMI) and travel calculation (travel)."
);

let firstValue = null;
let secondValue = null;
let result = null;
let presentValue = null;
let annualInterestRate = null;
let numberOfPeriods = null;
let measurementOption = null;
let height = null;
let weight = null;
let distance = null;
let efficiency = null;
let price = null;
let speed = null;

switch (option) {
  case "+":
    console.log("The chosen operation is addition (+).");
    alert("The chosen operation is addition (+).");
    firstValue = Number(prompt("Introduce the first value."));
    secondValue = Number(prompt("Introduce the second value."));
    console.log(
      "The introduced values are " + firstValue + " and " + secondValue + "."
    );
    result = firstValue + secondValue;
    console.log(
      "The operation has been completed and the result is " + result + "."
    );
    alert("The result of the operation is " + result + ".");
    break;
  case "-":
    console.log("The chosen operation is subtraction (-).");
    alert("The chosen operation is subtraction (-).");
    firstValue = Number(prompt("Introduce the first value."));
    secondValue = Number(prompt("Introduce the second value."));
    console.log(
      "The introduced values are " + firstValue + " and " + secondValue + "."
    );
    result = firstValue - secondValue;
    console.log(
      "The operation has been completed and the result is " + result + "."
    );
    alert("The result of the operation is " + result + ".");
    break;
  case "*":
    console.log("The chosen operation is multiplication (*).");
    alert("The chosen operation is multiplication (*).");
    firstValue = Number(prompt("Introduce the first value."));
    secondValue = Number(prompt("Introduce the second value."));
    console.log(
      "The introduced values are " + firstValue + " and " + secondValue + "."
    );
    result = firstValue * secondValue;
    console.log(
      "The operation has been completed and the result is " + result + "."
    );
    alert("The result of the operation is " + result + ".");
    break;
  case "/":
    console.log("The chosen operation is division (/).");
    alert("The chosen operation is division (/).");
    firstValue = Number(prompt("Introduce the first value."));
    secondValue = Number(prompt("Introduce the second value."));
    console.log(
      "The introduced values are " + firstValue + " and " + secondValue + "."
    );
    result = firstValue / secondValue;
    console.log(
      "The operation has been completed and the result is " + result + "."
    );
    alert("The result of the operation is " + result + ".");
    break;
  case "**":
    console.log("The chosen operation is exponentiation (**).");
    alert("Operation: exponentiation (**).");
    firstValue = Number(prompt("Introduce the base."));
    secondValue = Number(prompt("Introduce the exponent."));
    console.log("Values: " + firstValue + " and " + secondValue + ".");
    result = firstValue ** secondValue;
    console.log("Result: " + result + ".");
    alert("The result of the operation is " + result + ".");
    break;
  case "sqrt":
    console.log("Operation: square root (sqrt).");
    alert("The chosen operation is square root (sqrt).");
    firstValue = Number.parseFloat(prompt("Introduce the value."));
    console.log("Value: " + firstValue + ".");
    result = Math.sqrt(firstValue);
    console.log("Result: " + result + ".");
    alert("The result of the operation is " + result + ".");
    break;
  case "mortgage":
    console.log("Operation: mortgage calculator.");
    alert("The chosen operation is mortgage calculator.");
    presentValue = Number.parseFloat(prompt("Introduce the present value."));
    console.log("Present value: " + presentValue + ".");
    annualInterestRate = Number.parseFloat(
      prompt("Introduce the annual interest rate.")
    );
    console.log("Annual interest rate: " + annualInterestRate + ".");
    numberOfPeriods = Number.parseFloat(
      prompt("Introduce the number of periods.")
    );
    console.log("Number of periods: " + numberOfPeriods + ".");
    result =
      presentValue *
      ((annualInterestRate * (1 + annualInterestRate) ** numberOfPeriods) /
        ((1 + annualInterestRate) ** numberOfPeriods - 1));
    console.log("Result: " + result + ".");
    alert("Your monthly payment is " + result + ".");
    break;
  case "BMI":
    console.log("Operation: body mass index calculation.");
    alert("The chosen operation is body mass index calculation.");
    measurementOption = prompt(
      "Choose between metric (met) or imperial (imp) system."
    );
    switch (measurementOption) {
      case "met":
        console.log("Measurement system: metric.");
        alert("The chosen measurement system is metric.");
        height = Number.parseFloat(prompt("Introduce your height in meters."));
        console.log("Height : " + height + " m.");
        weight = Number.parseFloat(
          prompt("Introduce your weight in kilograms.")
        );
        console.log("Weight: " + weight + " kg.");
        result = weight / height ** 2;
        console.log("Result: " + result + ".");
        alert("Your body mass index (BMI) is: " + result.toFixed(2) + ".");
        break;
      case "imp":
        console.log("Measurement system: imperial.");
        alert("The chosen measurement system is imperial.");
        height = Number.parseFloat(prompt("Introduce your height in feet."));
        console.log("Height : " + height + " ft.");
        weight = Number.parseFloat(prompt("Introduce your weight in pounds."));
        console.log("Weight: " + weight + " lb.");
        result = (weight * 703) / (height * 12) ** 2;
        console.log("Result: " + result + ".");
        alert("Your body mass index (BMI) is: " + result.toFixed(2) + ".");
        break;
    }
  case "travel":
    console.log("Operatio: travel calculation.");
    alert("The chosen operation is travel calculation.");
    distance = Number.parseFloat(prompt("Introduce the distance."));
    console.log("Distance: " + distance + ".");
    measurementOption = prompt(
      "Choose between metric (met) or imperial (imp) system."
    );
    switch (measurementOption) {
      case "met":
        console.log("Measurement system: metric.");
        alert("The chosen measurement system is metric.");
    }
}
