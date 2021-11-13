
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

// Arreglo de objetos de salarios
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = ( id, callback ) => {

    // Solo va a extraer el nombre si el empleado con el id correpondiente existe
    const empleado = empleados.find( e => e.id === id )?.nombre

    if ( empleado ) {
        callback( null, empleado );
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = ( id, callback ) => {

    // Solo va a extraer el salario si el salario con el id correpondiente existe
    const salario = salarios.find( s => s.id === id )?.salario;

    if ( salario ) {
        callback( null, salario );
    } else {
        callback( `No existe salario para el id ${ id }` );
    }

}

const id = 2;

// Callback hell son callbacks anidados, esto puede hacer que el código sea poco legible y difícil de mantener
getEmpleado( id, ( err, empleado ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {

        if ( err ) {
            console.log('ERROR!');
            return console.log(err);
        }
    
        console.log('El empleado:', empleado, 'tiene un salario de:', salario )
    })

})