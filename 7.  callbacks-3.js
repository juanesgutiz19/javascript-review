
// Arreglo de objetos de empleados
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const getEmpleado = ( id, callback ) => {

    // Se busca el empleado que tenga como id lo que se manda como parámetro
    const empleado = empleados.find( e => e.id === id );

    
    if ( empleado ) {
        // Si empleado existe, el primer argumento de callback es null ya que no es un error, el segundo argumento es el empleado
        callback( null, empleado );
    } else {
        // Se devuelve el error, el cual es un string
        callback(`Empleado con id ${ id } no existe`);
    }
}

getEmpleado( 10, ( err, empleado ) => {

    // Si hay un error, este se muestra, además se retorna para no seguir ejecutándose la aplicación
    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    // Si no hay error, simplemente se muestra el empleado correspondiente
    console.log('Empleado existe!');
    console.log(empleado);
})








