const fs = require('fs');
const ruta = require("./archivos/ruta.js");
let nuevoObjeto1 = {spanish:"gato",english:"cat"};
fs.readFile(ruta(), 'utf-8', (error, contenido) => {
    if (error) {
      console.error('Error al leer el archivo JSON:', error);
      return;
    }
    const arreglo = [];
    // Convertir el contenido del archivo en un objeto JavaScript
    const objetosExistentes = JSON.parse(contenido);
    objetosExistentes.push(nuevoObjeto1)
    // Agregar los nuevos objetos al arreglo existente
    
  
    // Convertir el objeto actualizado a formato JSON
    const nuevoContenidoJSON = JSON.stringify(objetosExistentes);
  
    // Escribir el contenido actualizado en el archivo JSON
    fs.writeFile(ruta(), nuevoContenidoJSON, 'utf-8', (error) => {
      if (error) {
        console.error('Error al escribir en el archivo JSON:', error);
        return;
      }
      console.log('Objetos agregados exitosamente al archivo JSON.');
    });
  });