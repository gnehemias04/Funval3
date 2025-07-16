/*1. un comentario */

/* 2.
un 
comentario en 
varias 
lineas
 */
/*
let nombre= "gabriel";
let edad= 21;
let joven= true;


console.log (nombre);
console.log (edad);
console.log (joven);

console.log (typeof nombre);
console.log (typeof edad);
console.log (typeof joven)

nombre = "nehemias"
edad = 22
joven = false;


nombre = 22;
edad = false;
joven = "si lo es"

const masculino = true;
const origen = "argentino";
const mayorDeEdad = 18; 

/*
const masculino = false;
const origen = "brasil";
const mayorDeEdad = 15; */


/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas
/*
let a = 7;
let b = 2;
let c = 1;

let resultado
 
let nombre = "gabriel"
let apellido = "rengifo"


resultadoSuma = a + b;
/*resultado = 9 */
/*
NombreCompleto = nombre + " " + apellido; /* Concatenacion */

/*NombreCompleto =  gabriel rengifo*/

/* Resta */
//resultadoResta = a - b;
/*resultado = 5 */

/* divison */
//resultadoDivision = c / b;
/*resultado = 0.5 */

/* multiplicacion */
//resultadoMultiplicacion = a * c;
/*resultado = 7 */

/* Potencia */
//resultadoPotencia = a ** b;
/*resultado = 49 */

/* Modulo */
//resultadoModulo = a % b;
/*resultado = 1 */

//comparacion1 = a >= b;//true
//comparacion2 = a != b;  //true
//comparacion3 = a > b; //true


//comparacion6 = a !== b; //false
//comparacion7 = a == b; // false
//comparacion8 = a === b; // false
//comparacion9 = a < b;//false
//comparacion10 = a <= b;//false


// let permisoMama = true;
// let permisoPapa = false;
// edad = 28;


// if ((permisoMama || permisoPapa) && edad>=18){
//     console.log ("puedo salir a bailar")
// }
// else{
//     console.log("me quedo en casa")
// }


//  // 7735 

// let diaN = 11
// let mesN = 5
// let anhoN = 2004

// let dia = 15;
// let mes = 7;
// let anho = 2025

// let resAnho = anho - anhoN

// let resMes = mes - mesN 

// let resDia = dia -diaN



// if (resAnho >= 1)
//     { resAnho = resAnho * 365 
// }

// if (resMes >= 1) {
//     resMes = resMes * 30;
// }
// else { 
//     if (resMes <= -1){
//     resMes = (mesN - mes) * 30;
// }
// }


// console.log(resMes)

// console.log ("han pasado", resAnho + resMes + resDia)





// let fecha = new Date("2004-05-11");
// let hoy = new Date("2025-07-15");

// let diferenciaMs = hoy - fecha;

// let dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

// console.log ("han pasado", dias);


//  let factorial = (prompt ("ingresa un numero") );
//  factorial = parseInt(factorial)

//  let resultado = 1;

// for (let i=1; i<=factorial; i++){
//     console.log (i)
//     resultado = factorial * i; 
// }

// console.log (resultado)

// console.log (factorial);


// let suma = 0
// for (let i = 1; i <= 100; i++) {
//   suma += i;
// }
// console.log("Suma total:", suma);

// let n = 10
// // let multiplicacion = 1;
// for(let i=1;i<=n;i++){
//     console.log (i*5)
// }

// let numero = 10;
// let resultado = 1;
// for (let i = 1; i <= numero; i++) {
//   resultado *= i;
// }
// console.log(resultado);

let palabra = "hola";
for (let i = 0; i < palabra.length; i++) {
  console.log(palabra[i]);
}
