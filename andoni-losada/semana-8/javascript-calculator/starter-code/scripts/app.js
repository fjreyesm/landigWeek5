let opt = 0;
let num = 0;
while (parseInt(opt) != 99) {
  opt = parseInt(
    prompt(
      "                                       JAVASCRIPT - CALCULATOR\n\n###Calculadora Básica###\n1 - Suma\n2 - Resta\n3 - Multiplica\n4 - División\n###Calculadora Avanzada###\n5 - Potencia\n6 - Raiz cuadrada\n###Calculadora de Hipotéca###\n7 - Cálculo pago mensual\n###Calculadora de IMC###\n8 - Índice masa Corporal\n###Calculadora de viaje###\n9 - Coste y duración del viaje\n\n99 - Salir de la aplicación"
    )
  );

  if (opt === 1) {
    let num1 = parseFloat(prompt("Introduce número:"));
    let num2 = parseFloat(prompt("Introduce número:"));
    alert(num1 + num2);
  } else if (opt === 2) {
    num1 = parseFloat(prompt("Introduce número:"));
    num2 = parseFloat(prompt("Introduce número:"));
    alert(num1 - num2);
  } else if (opt === 3) {
    num1 = parseFloat(prompt("Introduce número:"));
    num2 = parseFloat(prompt("Introduce número:"));
    alert(num1 * num2);
  } else if (opt === 4) {
    num1 = parseFloat(prompt("Introduce número:"));
    num2 = parseFloat(prompt("Introduce número:"));
    alert(num1 / num2);
  } else if (opt === 5) {
    num1 = parseFloat(prompt("Introduce número:"));
    num2 = parseFloat(prompt("Introduce potencia:"));
    alert(num1 ** num2);
  } else if (opt === 6) {
    num1 = parseFloat(prompt("Introduce número:"));
    alert(Math.sqrt(num1));
  } else if (opt === 7) {
    let capital = parseFloat(prompt("Introduce capital:"));
    let interesAnual = parseFloat(prompt("Introduce interes anual (%):"));
    let numeroPagos = parseFloat(prompt("Introduce numero de pagos (meses):"));
    let numerador =
      (1 + interesAnual / 100) ** numeroPagos * capital * (interesAnual / 100);
    let denominador = (1 + interesAnual / 100) ** numeroPagos - 1;
    let pagoMensual = (numerador / denominador).toFixed(2);
    alert(`${pagoMensual} €`);
  } else if (opt === 8) {
    let tipoSistema = prompt(
      "Elige Sistema de cálculo\n\ni - Sistema Imperial\nm - Sistema métrico"
    ).toUpperCase();
    if (tipoSistema === "i" || tipoSistema === "I") {
      let peso = parseFloat(prompt("Intoduce tu peso (Libras):"));
      let altura = parseFloat(prompt("Intoduce tu altura (Pies):"));
      imc = (peso / altura ** 2).toFixed(2);
      alert(`Tú IMC es: ${imc}`);
    } else {
      peso = parseFloat(prompt("Intoduce tu peso (Kg):"));
      altura = parseFloat(prompt("Intoduce tu altura (m):"));
      imc = (peso / altura ** 2).toFixed(2);
      alert(`Tú IMC es: ${imc}`);
    }
    if (imc >= 18.5 && imc <= 24.99) {
      alert("Situación Normal");
    } else if (imc >= 25.0 && imc <= 29.99) {
      alert("Situación de sobrepeso");
    } else {
      alert("Situación de obesidad");
    }
  } else if (opt === 9) {
    let distancia = parseFloat(prompt("Distancia de viaje (Km):"));
    let eficiencia = parseFloat(
      prompt("Eficiencia de combustible (l/100 Km):")
    );
    let precioCombustible = parseFloat(prompt("Precio de combustible (€/l):"));
    let velocidad = parseFloat(prompt("Velocidad (Km/h):"));
    eficiencia = 100 / eficiencia; //Nº de Kms recorridos por 1 litro de combustible
    //Recalcula eficiencia
    const KMH = 120; //Limite velocidad arbitrario a partir del cual se aplica la reducción en la eficiencia
    let reduccionEficiencia = (velocidad - KMH) * 2; // Reduce la eficiencia 2 puntos por cada Km sobrepasado
    eficiencia = eficiencia - reduccionEficiencia;
    if (eficiencia <= 0) {
      alert(
        `Este viaje no es aconsejable a ${velocidad} Km/h\nExceso de consumo por Km`
      );
    }
    let duracionViaje = (distancia / velocidad).toFixed(2);
    let precioViaje = ((distancia / eficiencia) * precioCombustible).toFixed(2);
    alert(
      `Duración del viaje: ${duracionViaje} horas\nCosto del viaje: ${precioViaje}€`
    );
  }
}
