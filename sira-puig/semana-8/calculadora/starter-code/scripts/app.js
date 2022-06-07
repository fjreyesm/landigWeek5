// ! Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// !  Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

//aqui elegimos que calculadora usa
let control = 0;
do {
  let eleccion = parseInt(
    prompt(
      "Elige que calculadora necesitas: 1-Numérica 2-Hipoteca 3-IMC 4-Viaje"
    )
  );

  //4 calculadoras principales
  switch (eleccion) {
    case 1: //calculadora clasica
      let operacion = prompt(
        "Introduce la operación a realizar: + - * / potencia raiz cuadrada"
      );
      let num1;
      let num2;
      let resultado;
      switch (operacion) {
        case "+":
          num1 = parseFloat(prompt("Introduce un número: "));
          num2 = parseFloat(prompt("Introduce el segundo número:"));
          resultado = parseFloat(num1 + num2);
          //console.log(resultado);
          if (!isNaN(num1) && !isNaN(num2)) {
            alert("El resultado de la suma es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
        case "-":
          num1 = parseFloat(prompt("Introduce un número: "));
          num2 = parseFloat(prompt("Introduce el segundo número:"));
          resultado = parseFloat(num1 - num2);
          //console.log(resultado);
          if (!isNaN(num1) && !isNaN(num2)) {
            alert("El resultado de la resta es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
        case "*":
          num1 = parseFloat(prompt("Introduce un número: "));
          num2 = parseFloat(prompt("Introduce el segundo número:"));
          resultado = parseFloat(num1 * num2);
          //console.log(resultado);
          if (!isNaN(num1) && !isNaN(num2)) {
            alert("El resultado de la multiplicación es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
        case "/":
          num1 = parseFloat(prompt("Introduce un número: "));
          num2 = parseFloat(prompt("Introduce el segundo número:"));
          resultado = parseFloat(num1 / num2);
          //console.log(resultado);
          if (!isNaN(num1) && !isNaN(num2)) {
            alert("El resultado de la division es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
        case "potencia":
          num1 = parseFloat(prompt("Introduce un número: "));
          num2 = parseFloat(
            prompt("Introduce la potencia a la que deseas elevar el número:")
          );
          resultado = parseFloat(num1 ** num2);
          //console.log(resultado);
          if (!isNaN(num1) && !isNaN(num2)) {
            alert("El resultado de la potencia es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
        case "raiz cuadrada":
          num1 = parseFloat(prompt("Introduce un número: "));
          if (!isNaN(num1)) {
            let aux = 0;
            let raiz;
            raiz = num1 / 2;
            while (raiz != aux) {
              aux = raiz;
              raiz = (num1 / aux + aux) / 2;
            }
            resultado = parseFloat(raiz);

            alert("El resultado de la raiz cuadrada es: " + resultado);
          } else {
            alert("Introduce números por favor");
          }
          break;
      }
      break;
    case 2: // ### Calculadora de Hipoteca:
      // Calcula el pago mensual cuando se dan los otros variables como entrada.
      // Necesitas el `capital`, `tasa de interés anual` y el `numero de pagos`.
      let tasa = parseFloat(prompt("Introduce la tasa de interés anual:"));
      let pagos = parseInt(prompt("Introduce el numero de pagos:"));
      let capital = parseInt(prompt("Introduce el capital a amortizar: "));
      if (!isNaN(tasa) && !isNaN(pagos) && !isNaN(capital)) {
        tasa = tasa / 100 / 12; //interes por pago mensual
        const pmensual = capital / ((1 - (1 + tasa) ** -pagos) / tasa);
        alert("La cuota mensual a pagar sera de : " + pmensual);
      } else {
        alert("Introduce números por favor");
      }
      break;
    case 3: //Calculo IMC
      let peso;
      let altura;
      let imc;
      let sistema = parseInt(
        prompt("Introduzca el sistema de medida: 1-Métrico 2-Imperial")
      );
      switch (sistema) {
        case 1:
          peso = parseFloat(prompt("Introduzca peso en kg: "));
          altura = parseFloat(prompt("Introduzca altura en cm: "));
          //sistema metrico
          imc = peso / ((altura / 100) * (altura / 100));
          alert("Indice IMC: " + Number.parseFloat(imc).toFixed(2));
          break;
        case 2:
          //sistema imperial
          peso = parseFloat(prompt("Introduzca peso en libras: "));
          let altpies = parseFloat(prompt("Introduzca altura en pies: "));
          let altpulgadas = parseFloat(
            prompt("Introduzca altura en pulgadas: ")
          );
          altura = 2.54 * (altpies * 12 + altpulgadas); //pasar de sistema imperial a metrico
          imc = peso / ((altura / 100) * (altura / 100));
          alert("Indice IMC: " + Number.parseFloat(imc).toFixed(2));
          break;
        default:
          alert("No es un sistema de medidas contemplado");
      }
      break;
    case 4: //### Calculadora de Viaje:
      let distancia; //en millas
      let eficiencia; //eficiencia de combustible (kilometros por galón/mpg)//numero entero
      let precio; //precio por galon
      let velocidad; //mph Por cada MPH mas de 60 MPH, reduce las MPG por 2 MPG
      let tiempo;
      let coste;
      //resultado: tiempo y coste del viaje

      distancia = prompt("Introduce la distancia de tu viaje en millas");
      eficiencia = prompt("Introduce MPG: ");
      precio = prompt("Introduce precio del combustible: ");
      velocidad = prompt("Introduce velocidad: ");

      if (velocidad > 60) {
        eficiencia = eficiencia - 2;
        if (eficiencia != 0) {
          tiempo = distancia / velocidad; //tiempo necesario en realizar el viaje
          coste = (distancia / eficiencia) * precio; //coste total del viaje
          alert(
            "Tu viaje tardará " +
              tiempo +
              " horas" +
              " y costará " +
              coste +
              " USD"
          );
        } else {
          alert("No es un viaje eficiente");
        }
      } else {
        tiempo = distancia / velocidad; //tiempo necesario en realizar el viaje
        coste = (distancia / eficiencia) * precio;
        alert(
          "Tu viaje tardará " +
            tiempo +
            " horas" +
            " y costará " +
            coste +
            " USD"
        );
      }
      break;
    default:
      alert("No es una calculadora del sistema fistrooooooo");
      break;
  } //fin del switch para las 4 calculadoras principales
} while (control != 1); //bucle principal de las 4 calculadoras
