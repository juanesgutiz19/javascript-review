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

const getEmpleado = ( id ) => {

    
    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = ( id ) => {
    return new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario ) 
            ? resolve( salario )
            : reject( `No existe salario con id ${ id }` );
    });
}

const id = 4;

// Sin anidación
// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log(err) );


// getSalario(id)
//     .then( salario => console.log( salario ) )
//     .catch( err => console.log(err) );

// Promesas en cadena - Forma no legible (no recomendada)
// getEmpleado( id )
//     .then( empleado => {
//         getSalario( id )
//             .then( salario => {
//                 console.log('El empleado: ', empleado, ' tiene un salario de: ', salario);
//             })
//             .catch( err => console.log(err) )
//     })
//     .catch( err => console.log(err) )

// Promesas en cadena - Forma recomendada
let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        // Se retorna getSalario, al hacer esto no es necesario ejecutar el .then
        // Lo cual me permite concatenar otro then (el de abajo)
        // Con return se regresa una promesa
        return getSalario( id ) 
    })
    .then( salario => console.log( 'El empleado:', nombre, 'tiene un salario de:', salario ))
    .catch( err => console.log( err ) );