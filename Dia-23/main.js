/*EJEMPLO DE SINCRONIA */
// console.log("SINCRONIA");
// console.log(" ejemplo: haciendo compras");
// console.log("salir de casa hasta el mercado");
// console.log("agarrar arroz y el pollo");
// console.log("pagar");
// console.log("volver a casa con las compras");

/*EJEMPLO DE ASINCRONIA */
// console.log("ASINCRONIA");
// console.log(" ejemplo: preparando arroz y pollo al horno y limpiando la mesa");
// console.log("colocar pollo al horno");
// setTimeout(() => {
//   console.log("pollo listo");
// }, 5000);
// console.log("colocando el arroz a hervir");
// setTimeout(() => {
//   console.log("arroz listo");
// }, 3000);
// console.log("limpiar mesa");

/* ---------------Ejercicio-------------- */
let aprobados = document.querySelector("#aprobados");
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA

const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 50);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 

*/

listaEstudiantes
  .then((listaEstudiantes) => {
    console.log(listaEstudiantes);

    aprobados.innerHTML = `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
${listaEstudiantes[1].nombre}
<p class="font-normal text-gray-700 dark:text-gray-400">
${listaEstudiantes[1].notas}
</p>
</a>
`;
  })
  .catch((err) => {
    console.log(err);
  });
