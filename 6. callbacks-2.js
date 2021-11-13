
/* Implementación lanzamiento de 10 dados con callbacks */
const doTask = ( iterations, callback ) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        /* Error, se ha sacado un 6 */
        /* Primer argumento de callback es el error */
        callback({
          error: true,
          message: "Se ha sacado un 6"
        });
        return;
      }
    }
    /* Termina bucle y no se ha sacado 6 */
    // No viene nada en error, solo se devuelve envía como argumento el result
    return callback(null, {
      error: false,
      value: numbers
    });
};

doTask(10, ( err, result ) => {
    if (err) {
      console.error( err.message );
      return;
    }
    console.log("Tiradas correctas: ", result.value);
});

// También es válido así:
// doTask(10, ( err, { value } ) => {
//   if (err) {
//     console.error( err.message );
//     return;
//   }
//   console.log("Tiradas correctas: ", value);
// });