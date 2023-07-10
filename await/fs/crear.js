
const fs = require("fs");
const contenido = `{"nombre":"Juan","edad":30,"ciudad":"México"}`;
let ruta = 'C:/Users/car06/OneDrive/Escritorio/software/javascriptModerno/node/proyect_1/await/fs/archivos/archivo.json';


fs.writeFile(ruta, contenido, (error) => {
  if (error) {
    console.error('Error al crear el archivo:', error);
  } else {
    console.log('Archivo creado exitosamente.');
  }
});