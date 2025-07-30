// let boton = document.querySelector("#btn");

// boton.addEventListener("click", function (event) {
//   console.log("f");
//   if (
//     event.target.classList.contains(
//       "bg-[url(https://i.pinimg.com/564x/5b/47/22/5b4722ec6103e5c34254f45e071d4cf0.jpg)]"
//     )
//   ) {
//     event.target.classList.remove(
//       "bg-[url(https://i.pinimg.com/564x/5b/47/22/5b4722ec6103e5c34254f45e071d4cf0.jpg)]"
//     );
//     event.target.classList.add(
//       "bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3_MD5-es3dbrQfYFxjxeH2e5-FSICOqTKQ&s)]"
//     );
//     console.log("princesa");
//   } else {
//     event.target.classList.add(
//       "bg-[url(https://i.pinimg.com/564x/5b/47/22/5b4722ec6103e5c34254f45e071d4cf0.jpg)]"
//     );
//     event.target.classList.remove(
//       "bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3_MD5-es3dbrQfYFxjxeH2e5-FSICOqTKQ&s)]"
//     );
//     console.log("ogro");
//   }
// });
// let html = document.querySelector("html");
// let botonCambio = document.querySelector("#btn");
// let todo = document.querySelector("#todo");
// botonCambio.addEventListener("click", function () {
//   todo.classList.toggle("dark");
// });

// let img = document.querySelector("#princesa");
// img.addEventListener("click", function () {
//   img.setAttribute(
//     "src",
//     "https://w7.pngwing.com/pngs/804/38/png-transparent-fiona-princess-fiona-shrek-the-musical-donkey-lord-farquaad-shrek-fiona-thumbnail.png"
//   );
// });

// let form = document.querySelector("#formulario");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let obj = {};
//   let nombre = document.querySelector("#nombre");
//   let apellido = document.querySelector("#apellido");
//   let edad = document.querySelector("#edad");
//   let nacionalidad = document.querySelector("#nacionalidad");
//   console.log("formulario enviado por : " + nombre.value);
//   obj.nombre = nombre.value;
//   obj.apellido = apellido.value;
//   obj.edad = edad.value;
//   obj.nacionalidad = nacionalidad.value;

//   console.log(obj);
// });

// let contador = 0;
// let anterior = "";
// let opcionColor = document.querySelector("#selectorColor");

// opcionColor.addEventListener("change", function (e) {
//   let parrafo = document.querySelector("#colorTexto");
//   if (contador === 0) {
//     parrafo.classList.add(`text-${e.target.value}-700`);
//     anterior = `text-${e.target.value}-700`;
//     contador++;
//   } else {
//     parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
//     anterior = `text-${e.target.value}-700`;
//     contador++;
//   }
// });

let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");
let modal = document.querySelector("#modal");
let fondo = document.querySelector("#fondo");

abrir.addEventListener("click", function () {
  modal.classList.replace("hidden", "flex");
  fondo.classList.add("hidden");
});

cerrar.addEventListener("click", function () {
  modal.classList.add("hidden");
  fondo.classList.remove("hidden");
});

let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let pais = document.querySelector("#pais");
  console.log("formulario enviado por : " + nombre.value);
  obj.nombre = nombre.value;
  obj.edad = edad.value;
  obj.pais = pais.value;

  console.log(obj);
});
