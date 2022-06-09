// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.
console.log("hola");
let repeticion = 1;
while (repeticion !== 0) {
  repeticion = 0;
  let opcion = prompt(
    "1-calculadora 2-calculadora avanzada 3-hipoteca 4-IMC 5-calculadora de viaje"
  );
  if (opcion === "1") {
    let x = parseFloat(prompt("primer numero"));
    let y = parseFloat(prompt("segundo numero"));
    let operacion = prompt("tipo de operacion + - * /");
    if (operacion === "+") {
      let resultado = x + y;
      alert(resultado);
    } else if (operacion === "-") {
      let resultado = x - y;
      alert(resultado);
    } else if (operacion === "*") {
      let resultado = x * y;
      alert(resultado);
    } else if (operacion === "/") {
      let resultado = x / y;
      alert(resultado);
    } else {
      alert("error introducir + - * /");
    }
  } else if (opcion === "2") {
    const opcion2 = prompt("1-raiz cuadrada 2-potencia");
    if (opcion2 === "1") {
      let numero = parseFloat(prompt());
      let resultado = Math.sqrt(numero);
      alert(resultado);
    } else if (opcion === "2") {
      let numero = parseFloat(prompt("base"));
      let numero2 = parseFloat(prompt("exponente"));
      let resultado = Math.pow(numero, numero2);
      alert(resultado);
    }
  } else if (opcion === "3") {
    alert("o god math problems must run away");
  } else if (opcion === "4") {
    let masa = parseFloat(prompt("introduce masa en kg"));
    let altura = parseFloat(prompt("introduce altura en m"));
    let imc = masa / Math.pow(altura, 2);
    alert(imc);
  } else if (opcion === "5") {
    alert("o god math problems must run away");
  } else {
    alert("please use 1,2,3,4,5");
  }
  repeticion = 1;
}
