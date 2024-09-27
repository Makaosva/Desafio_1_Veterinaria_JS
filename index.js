const { registrar, leer } = require("./operaciones");

const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if (operacion === "registrar") {
  if (enfermedad) {
    registrar(nombre, edad, animal, color, enfermedad);
  } else {
    console.log("Debes ingresar todos los datos del registro");
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operacion no reconocida");
}
