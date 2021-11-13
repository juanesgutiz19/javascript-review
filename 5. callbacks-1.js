
// Callback: Función que se va a ejecutar después en cierto punto del tiempo

// setTimeout( () => {
//     console.log('Hola Mundo');
// } , 1000 );

// Callback es una función que voy a llamar eventualmente 
// Es una función que se manda como argumento a otra función
const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback( user );
    }, 1500 )

}

// Al pasar el segundo y medio, se llama al callback y este recibe el usuario
getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});

// Se obtiene el mismo resultado
// getUsuarioByID( 10, ( { id, nombre } ) => {
//     console.log( id );
//     console.log( nombre.toUpperCase() );
// });