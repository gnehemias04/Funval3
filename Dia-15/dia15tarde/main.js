// let estudiantes = [
//   {
//     nombre: "kevin",
//     pais: "Bolivia",
//   },
//   {
//     nombre: "Pablo",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Geraldine",
//     pais: "Peru",
//   },
//   {
//     nombre: "Gabriel",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Mario",
//     pais: "Argentina",
//   },
// ];

// let contenedor = document.querySelector("#contenedor-estudiantes");
// for (let i = 0; i < estudiantes.length; i++) {
//   if (estudiantes[i].pais == "Argentina") {
//     contenedor.innerHTML += `<a
//       href="#"
//       class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//     >
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         ${estudiantes[i].nombre}
//       </h5>
//       <p class="font-normal text-gray-700 dark:text-gray-400">
//         Pais de origen: ${estudiantes[i].pais}
//       </p>
//     </a>
//   `;
//   }
// }
function name(params) {}
/* trabajo MOSTRAR UNICAMENTE  A LOS ESTUDIANTES DE ARGENTINA DE FORMA DINAMICA */
let helado = document.querySelector("#lista");

const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];

index;
for (let = 0; index < array.length; index++) {
  const element = array[index];
}

for (let i = 0; i < productos.length; i++) {
  helado.innerHTML += `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    helado
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        precio
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        ID
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        stock
                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${productos[i].nombre}
                </th>
                <td class="px-6 py-4">
                    ${productos[i].precio}
                </td>
                <td class="px-6 py-4">
                   ${productos[i].id}
                </td>
                <td class="px-6 py-4">
                   ${productos[i].stock}
                </td>
                </td>
                <td class="px-6 py-4">
                   comprar
                </td>

            </tr>
        </tbody>
    </table>
</div>
`;
}

/*  Mostrar todos los productos en una lista.

Cada producto debe mostrar:

Nombre

Precio

Stock disponible

Botón "Comprar"*/
