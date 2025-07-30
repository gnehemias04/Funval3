// arrays

// let notas1 = [32, 100, 25, 78];
// let notas2 = [32, 100, 10, 8, 0];
// let notas3 = [32];
// let notas4 = [32, 77];
// let num = 0;
// let promedioValor = 0;

// for (i = 0; i < notas1.length; i++) {
//   let num = notas1[i];
// }

// function promedio(notas) {
//   for (i = 0; i < notas.length; i++) {
//     num += notas[i];
//   }
//   promedioValor = num / notas.length;

//   return promedioValor;
// }
// promedio(notas3);

// alert("el promedio es: " + promedioValor);

// let matriz = [
//   [28, 39, 90, 89],
//   [70, 32, 28, 18],
//   [10, 0, 15, 31],
//   [11, 23, 45, 67],
// ];

// let diagonal = 0;

// for (i = 0; i < matriz.length; i++) {
//   diagonal += matriz[i][i];
// }

// alert("el resultado es de: " + diagonal);

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];

let Argentino;
for (let index = 0; index < listaEstudiantes.length; index++) {
  Argentino = listaEstudiantes[index].nacionalidad;

  if (listaEstudiantes[index].nacionalidad == "argentina") {
    console.log(listaEstudiantes[index].nacionalidad);
  }
}

/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts /

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/ mostrar a todos los estudiantes q sean de Argentina */
