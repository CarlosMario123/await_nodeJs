/*Ejercicio:
Escribe una función llamada obtenerInformacionUsuario que utilice async y await para obtener información 
del usuario desde dos fuentes diferentes: una promesa que resuelve el nombre del usuario y otra promesa que 
resuelve su edad. 
La función debe esperar a que ambas promesas s
e resuelvan y luego devolver un objeto con el nombre y la edad del usuario.*/ 

function obtenerNombre() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("John Doe"); // Resuelve el nombre después de 1 segundo
      }, 1000);
    });
  }
  
  function obtenerEdad() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(25); // Resuelve la edad después de 2 segundos
      }, 2000);
    });
  }
  
  async function obtenerInformacionUsuario() {
      let nombre =  await obtenerNombre();
      let edad = await obtenerEdad();
      return {"nombre": nombre,"edad": edad};
  }
  
  async function ejecutarEjercicio() {
    const usuario = await obtenerInformacionUsuario();
    console.log(usuario);
  }
  
  ejecutarEjercicio();
  