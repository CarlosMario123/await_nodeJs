function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("¡Datos obtenidos!"); // Resolvemos la promesa después de 1 segundo
      }, 1000);
    });
  }
  
  //manera 1 para esperar una promesa
  async function miFuncion() {
    console.log("Comenzando...");
   await obtenerDatos().then(datos => {
        console.log(datos);
    })
    //const resultado = await obtenerDatos(); // Esperamos a que la promesa se resuelva
    //console.log(resultado);
    console.log("Terminado.");
  }

  async function miFuncion2() {
    console.log("Comenzando2...");
    const resultado = await obtenerDatos(); // Esperamos a que la promesa se resuelva
    console.log(resultado);
    console.log("Terminado.");
  }
  
  async function principal(){
    await miFuncion();
    miFuncion2();
  }
  principal()
  