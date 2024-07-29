// import { nombre, bienVenida } from "./export/helper.js";
// import { superheroe, usuario } from "./export/datos.js";

import {
  nombre,
  bienVenida,
  superheroe,
  usuario,
  crearProducto,
} from "./export/index.js";
import activePromise from "./promesas/promesa.js";
// import { traerData } from "./promesas/fetch.js";
import { traerDataAsync } from "./promesas/async.js";

activePromise()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error));

// traerData();
console.log(await traerDataAsync());

bienVenida(nombre);

console.log("Hola mundo");

//Desestructuración
let ejemplo = ["Hola alumnos!", (mensaje) => console.log(mensaje), 34];

const [mensaje, saludar, num] = ejemplo;
console.log(num);
saludar(mensaje);

const { alias, habilidad } = superheroe;
console.log(`${alias} es reconocido por ${habilidad}`);

// const usuario = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

const {
  address: {
    geo: { lat },
    geo: { lng },
  },
} = usuario;
console.log(lat, lng);

//operador ternario
let isActive = false;
// if (isActive) {
//   console.log("Activado");
// } else {
//   console.warn("No está activado");
// }

console.log(isActive ? "Activado" : "No está activado");

let tenerSed = false;

console.log(tenerSed && "Tomar agua");

let mouse = crearProducto("Mouse", 500, "Logitech");
console.log(mouse);
