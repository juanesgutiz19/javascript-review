
// Declaración de objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// Forma tradicional para acceder a las propiedades de un objeto
// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;
// console.log( deadpool.getNombre() );

// En el argumento se desestructuran las propiedades del objeto
// Si no hay edad, la edad por defecto es 0
const imprimeHeroe = ({ nombre, apellido, poder, edad = 0 }) => {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad );
}

// imprimeHeroe( deadpool );

// Declaración de un arreglo
const heroes = ['Deadpool', 'Superman', 'Batman'];

// Forma tradicional para acceder a los valores del array
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Desestructuración de arreglos
const [ , , h3 ] = heroes;

// Se imprimirá Batman
// console.log( h3 );





