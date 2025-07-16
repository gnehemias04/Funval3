let  tacos = 1;
let pizza = 2;
let empanadas = 3;
let ensalada = 4;
let sopa = 5;

alert("Bienvenido al restaurante Don Baratón");

let seguir = "sí";


while (seguir.toLowerCase().startsWith("s")) {
  
    opcion = prompt(
    "Menú del día:\n" +
    "1. Tacos ------- precio: 20 c/u\n" +
    "2. Pizza ------- precio: 25 c/u\n" +
    "3. Empanadas --- precio: 5 c/u\n" +
    "4. Ensalada ---- precio: 15 c/u\n" +
    "5. Sopa------ precio: 10 c/u\n\n" +
    "Seleccioná una opción (1, 2, 3, 4 o 5):"
  );
  
  let cantidad = prompt("¿Cuántos platos querés?");
  
  alert("Elegiste " + cantidad + " unidad(es) de la opción " + opcion);

  seguir = prompt("¿Querés hacer otro pedido? (sí / no)");
}


function calcularTotal() {
  let total = 0;
  for (const producto in pedido) {
    const datos = pedido[producto];
    total += datos.precio * datos.cantidad;
  }
  return total;
}


function pedido (nombre){
     nombre =  prompt ("¿El pedido ira a nombre de quien?")
     alert (nombre + " Muchas gracias por comprar en Don Baraton!")
     return nombre;
}

function factura (total){
     alert ( "Gracias por comprar en Don baraton, el total es" + total)
     return total;
}

let total = 20;

console.log (pedido());
console.log (factura(total));

