// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para tomar la entrada del usuario.

// * Escribe tu código debajo.

// Inicializar variables: numero1, numero2, operador

// Envío mensaje numero1 y capturar número1

//Envio mensaje solicitando operador

// Solicito numero

let total = 0;
let numero = 0;
let operation = ' ';

while (numero < 10) {
  numero = parseFloat(prompt('Dime Número'));
  console.log('Número' + numero);

  operation = prompt('Dime operador +, -, /, *, =');
  console.log('Operation' + operation);

  switch (operation) {
    case '=':
      
    case '+':
      total = total + numero
      break

    case '-':
      total = numero - total
      break 

    case '*':
      if (total == 0) { 
        total = numero
      }
      total = total * numero
      break 

    case '/':
      if (total == 0) { 
        total = numero
      }
      total = numero / total
      break 

      //default: break
  }
  if (operation == '=') {
   //alert(total);
    window.alert(total);
    exit
  }
  operation = ' ';
  numero = 0;
}






