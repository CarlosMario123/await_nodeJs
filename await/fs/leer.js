const ruta = require("./archivos/ruta.js");
const fs = require("fs");


fs.readFile(ruta(), 'utf-8', (error, contenido) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
  } else {
    console.log('Contenido del archivo:', contenido);
  }
});

