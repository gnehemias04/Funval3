// Funcionalidad básica:

// Implementa las funciones necesarias para que el usuario pueda:
// Ingresar dinero en la cuenta.
// Retirar dinero si el saldo es suficiente.
// Consultar el saldo actual de la cuenta.
// Validación:

// Asegúrate de que no se permita retirar dinero si el saldo no es suficiente.
// Debes mostrar mensajes adecuados para cada operación (como “Depósito exitoso”, “Saldo insuficiente”, etc.).
// Extensiones (opcional):

// Si lo consideras conveniente, puedes agregar funcionalidades adicionales, como un límite de retiro diario o un historial de transacciones.
// De

/*
1 crear variable donde guardar el saldo
2 crear 3 funciones para retirar depositar y consultar
3 crear un alert para bienvenida al banco y mostrar el saldo inicial de regalo $200 
4 un promt para preguntar lo que desea retirar depositar consultar
5 un prompt para preguntar la cantidad si desea retirar o depositar O mostrar el saldo en pantalla
6 colocar todo en un bucle para preguntar si desea cerrar sesion o seguir con alguna funcion.
*/
let cantidad = 0;
let saldo = 200;
let opcion;
let seguir;
alert("Bienvenido al BANCO DE ORO!");
let usuario = prompt("Cree un Usuario para usted");
alert(
  usuario +
    "! muchas gracias por crear su cuanta en BANCO DE ORO\n recibiras un dinero de regalo por la creacion de su cuenta"
);
alert("tu saldo actual es de: $" + saldo);
do {
  do {
    opcion = prompt(
      "Que operacion desea realizar? presiones: \n 1.Para Retirar saldo\n 2.Para Depositar saldo\n 3.Para Consultar saldo"
    );
    switch (opcion) {
      case "1":
        alert("Deseas hacer retirar dinero");
        break;
      case "2":
        alert("Deseas depositar dinero en tu cuenta");
        break;
      case "3":
        alert("tu saldo es de: " + saldo);
        break;
      default:
        alert("opcion invalida, elige de nuevo");
        break;
    }
  } while (opcion !== "1" && opcion !== "2" && opcion !== "3");
  if (opcion == "1") {
    cantidad = parseInt(prompt("ingrese la cantidad de dinero para retirar"));
    retirar(cantidad);
    alert("Tu saldo actual es de: " + saldo);
  } else {
    if (opcion == "2") {
      cantidad = parseInt(
        prompt("ingrese la cantidad de dinero para depositar")
      );
      depositar(cantidad);
      alert("Deposito exitoso \n Ahora tu saldo actual es de: " + saldo);
    }
    seguir = prompt("desea seguir haciendo operaciones?\n 1.Si\n2.No");
  }
} while (seguir === "si");

function retirar(cantidad) {
  if (cantidad > saldo) {
    alert("Operacion negada por saldo insuficiente");
  } else {
    saldo = saldo - cantidad;
  }
  return saldo;
}

function depositar(cantidad) {
  saldo = saldo + cantidad;
  return saldo;
}
function consultar(saldo) {
  alert("tu saldo actual es de : " + saldo);
}

function retirarhtml(cantidad) {
  cantidad = parseInt(prompt("ingresa la cantidad a retirar"));
  if (cantidad > saldo) {
    alert("Operacion negada por saldo insuficiente");
  } else {
    saldo = saldo - cantidad;
    alert("Retiro exitoso\n Tu saldo actual es de: $" + saldo);
  }
  return saldo;
}

function depositarhtml(cantidad) {
  cantidad = parseInt(prompt("ingresa la cantidad a depositar"));
  saldo = saldo + cantidad;
  alert("deposito exitoso\n Tu saldo actual es de: $" + saldo);
  return saldo;
}
function consultarhtml(saldo) {
  alert("tu saldo actual es de : " + saldo);
}
