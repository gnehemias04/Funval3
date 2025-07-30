// let participante = {
//   nombre: "juan",
//   edad: 25,
//   profesion: "tecnico en refrigeracion de elementos para la construccion",
//   ganador: true,
// };

// let mensaje =
//   participante.ganador === true
//     ? `felicidades ${participante.nombre} de ${participante.edad} anhos de edad de profesion ${participante.profesion} has ganado 1000000$`
//     : "Sigue participantdo";

// console.log(mensaje);

let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];
let tabla = document.querySelector("#tabla");

for (let i = 0; i < estudiantesFunval.length; i++) {
  let {
    nombre = "no ha respondido",
    pais = "no ha respondido",
    edad = "no ha respondido",
    mision = "no ha respondido",
  } = estudiantesFunval[i];

  tabla.innerHTML += `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${nombre}
      </th>
      <td class="px-6 py-4">
        ${pais}
      </td>
      <td class="px-6 py-4">
        ${edad}
      </td>
      <td class="px-6 py-4">
        ${mision}
      </td>
    </tr>`;
}
