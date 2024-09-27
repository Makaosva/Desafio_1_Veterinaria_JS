const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  fs.readFile("./citas.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer archivo: ", err);
      return;
    }
    //Convertir el JSON en un arreglo
    const citas = JSON.parse(data);

    //Crear nuevo objeto con los datos del vehiculo
    const nuevaCita = {
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    };

    citas.push(nuevaCita);
    fs.writeFile("./citas.json", JSON.stringify(citas), (error) => {
      if (error) {
        console.error("Error al escribir en el archivo: ", err);
        return;
      } else {
        console.log("Cita registrada con Exito!!!!");
      }
    });
  });
};

const leer = () => {
    fs.readFile("./citas.json", "utf8", (err, data) => {
        if (err) {
          console.error("Error al leer archivo: ", err);
          return;
        }
        try {
          //te convierte el contenido del archivo JSON a un arreglo de JaveScript
          const citas = JSON.parse(data);
          console.log("Listado Citas");
          //Mostrando el listado en la consola
          console.log(citas);
        } catch (parseError) {
          console.error("Error al parsear el archivo JSON: ", parseError);
        }
      });
};

module.exports = { registrar, leer };
