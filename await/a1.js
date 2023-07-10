//ejemplo 1

function obtenerDatos1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos 1"); // Resolvemos la promesa después de 1 segundo
      }, 1000);
    });
  }
  
  function obtenerDatos2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos 2"); // Resolvemos la promesa después de 2 segundos
      }, 2000);
    });
  }
  
  async function miFuncion() {
    console.log("Comenzando...");
    
    const resultado1 = await obtenerDatos1(); // Esperamos a que la primera promesa se resuelva
    console.log(resultado1);
    
    const resultado2 = await obtenerDatos2(); // Esperamos a que la segunda promesa se resuelva
    console.log(resultado2);
    
    console.log("Terminado.");
  }
  
  miFuncion();
  