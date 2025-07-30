const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];
/* 1- recorre todos los productos dentro del array
y muestra el nombre y precio*/
productos.forEach((e) => console.log(e.nombre, e.precio));
/* 2.1- guarda todos los nombre de los productos en un
array llamado productosDisponibles usando map*/
let productosDisponibles = productos.map((e) => e.nombre);
console.log(productosDisponibles);
/* 2.2- Dice si un producto esta disponible usando includes
devuelve  un valor booleano*/
console.log(productosDisponibles.includes("Iphone"));
console.log(productosDisponibles.includes("Laptop"));
/* 3- crea un array que guarda los nombres de los
productos y sus precios aplicando 10% de descuento*/
let ProductosConDescuento = productos.map((e) => {
  return {
    nombre: e.nombre,
    precio: e.precio * 0.9,
  };
});
console.log(ProductosConDescuento);
/* 4- Cree un array que guarda los productos que su
precio sea menor a 100$ usando filter*/
let baratos = productos.filter((e) => e.precio <= 100);
console.log(baratos);
/* 5- Muestra los primer 2 productos con slice*/
console.log(productos.slice(0, 2));
/* 6- Ordena los productos de menor a mayor con sort*/
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);
/* 7- reverse deja los productos en estado reverso
de como estavan anteriormente, como estaban ordenados
de menor a mayor ahora estan de mayor a menor*/
let reverso = productos.reverse();
console.log(reverso);
