// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.



let primeraCifra = parseInt(window.prompt("Introduce la primera cifra"));
let segundaCifra = parseInt(window.prompt("Introduce la segunda cifra"));
let operacion = window.prompt('Introduce la operación(+ , - , * , / , ** , raíz cuadrada');
/*if (operacion === '+') {
//    console.log ('resultado =' + primeraCifra + segundaCifra);
//}
  //  else if (operacion === '-') {
        console.log ('resultado =' + primeraCifra - segundaCifra);
    }
    else if (operacion === '*') {
        console.log ('resultado =' + primeraCifra * segundaCifra);
    }
    else (operacion === '/') {
        console.log ('resultado =' + primeraCifra / segundaCifra);
}
*/
switch (operacion) {
    case "+":
        console.log ('resultado =' + (primeraCifra + segundaCifra));
        break;
    case "-":
        console.log ('resultado =' + (primeraCifra - segundaCifra));
        break;
    case "*":
        console.log ('resultado =' + (primeraCifra * segundaCifra));
        break;
    case "/":
        console.log ('resultado =' + (primeraCifra / segundaCifra));
        break;
    case "**":
        console.log ('resultado =' + (primeraCifra ** segundaCifra));
        break;
    case "raíz cuadrada":
        console.log ('resultado =' + (Math.sqrt(primeraCifra)));
        break;
}
    // Calculadora de hipoteca    
   let capital = parseInt(window.prompt("Capital"));
   let tasaDeInteresAnual = parseInt(window.prompt("Tasa de interés anual"));
   tasaDeInteresAnual = parseFloat(tasaDeInteresAnual/100)
   let numeroDePagos = parseInt(window.prompt("Número de pagos"));
   let pagoMensual = capital / ((1 - (1 + tasaDeInteresAnual) ** -numeroDePagos) / tasaDeInteresAnual);
   console.log('Pago mensual : '+ pagoMensual);
