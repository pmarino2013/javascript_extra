import { Producto } from "./datos.js";
let nombre = "José";

const bienVenida = (name) => {
  console.log(`Bienvenid@ ${name}`);
};

function crearProducto(name, pricing, owner) {
  let newProduc = new Producto(name, pricing, owner);

  return newProduc;
}

export { nombre, bienVenida, crearProducto };
