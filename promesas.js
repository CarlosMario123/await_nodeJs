// Función que retorna una promesa
function dividirNumeros(dividendo, divisor) {
    return new Promise((resolve, reject) => {
      // Verificar si el divisor es cero
      if (divisor === 0) {
        reject("Error: No se puede dividir entre cero.");
      } else {
        const resultado = dividendo / divisor;
        resolve(resultado);
      }
    });
  }
  
  // Utilizar la promesa
  dividirNumeros(10, 5)
    .then(resultado => {
      console.log("El resultado de la división es:", resultado);
    })
    .catch(error => {
      console.error("Ocurrió un error:", error);
    });
  
    dividirNumeros(5,10).then(resultado => {
         console.log(resultado)
    })


    
//otro ejemplo de promesas
    function sumarNumeros(num1, num2) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const suma = num1 + num2;
            resolve(suma);
          }, 2000);
        });
      }
      
      sumarNumeros(2, 3)
        .then(resultado => {
            console.log("suma asincrona");
          console.log("La suma es:", resultado);
        })
        .catch(error => {
          console.error("Ocurrió un error:", error);
        });
 

        //otro ejemplo
        function operacionesMatematicas(num1, num2, operacion) {
            return new Promise((resolve, reject) => {
              switch (operacion) {
                case "suma":
                  resolve(num1 + num2);
                  break;
                case "resta":
                  resolve(num1 - num2);
                  break;
                case "multiplicación":
                  resolve(num1 * num2);
                  break;
                case "división":
                  if (num2 !== 0) {
                    resolve(num1 / num2);
                  } else {
                    reject("No se puede dividir entre cero");
                  }
                  break;
                default:
                  reject("Operación no válida");
              }
            });
          }
          
          operacionesMatematicas(5, 2, "multiplicación")
            .then(resultado => {
              console.log("El resultado es:", resultado);
            })
            .catch(error => {
              console.error("Error:", error);
            });
          


  //otra promesa 
  function generarNumeroAleatorio(min, max) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(numeroAleatorio);
      }, 2000);
    });
  }    
  
  
  generarNumeroAleatorio(1,10).then(numeroAleatorio => {
    console.log("el numero aleatorio es: " + numeroAleatorio)
  }).catch(()=>{
     console.log("error")
  })

  //otra promesa

  function esNumeroPar(number) {
    return new Promise((resolve) => {
      const respuesta = number % 2 === 0;
      resolve(respuesta);
    });
  }
  
  esNumeroPar(10)
    .then(respuesta => {
      console.log(respuesta);
    });