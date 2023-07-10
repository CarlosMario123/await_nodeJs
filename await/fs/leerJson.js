const ruta = require("./archivos/ruta.js");
const fs = require("fs");
let archivo = "";
async function main(){

    try {
        const contenido = await new Promise((resolve, reject) => {
          fs.readFile(ruta(), 'utf-8', (error, contenido) => {
            if (error) {
              reject(error);
            } else {
              resolve(contenido);
            }
          });
        });
        console.log('Contenido del archivo:', contenido);
        archivo = contenido;
      } catch (error) {
        console.error('Error al leer el archivo:', error);
      }
       let objetos = JSON.parse(archivo);
       recorrerArchivo(objetos);
    }
main()

function recorrerArchivo(objetos){

        console.table(arreglo);
}
  