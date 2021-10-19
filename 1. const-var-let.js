
// Var: Crea variables de forma global - ¡No usar nunca!
var saludo = 'Hola';

if ( true ) {
   var saludo = 'Hello';
}

// Se imprimirá 'Hello'
console.log( saludo );


// Let: Se tiene en cuenta el scope, por ejemplo en un if o en un ciclo - Usar siempre junto con const
let nombre = 'Wolverine';
let despedida = 'Adios';

if ( true ) {
   // Se pone en otro color nombre, porque la variable nunca se ha utilizado
   // Solo tiene sentido la variable dentro del if
   let nombre = 'Magneto';

   // Como no se está declarando una nueva variable, se va al scope superior a ver si la encuentra 
   despedida = 'Goodbye';
}

// Se imprimirá Wolverine
console.log(nombre);

// Se imprimirá Goodbye
console.log(despedida);


// Const: Similar a let, pero una constante no se puede declarar dos veces

const apellido = 'Gutiérrez';
const alimento = 'Pan';

if ( true ) {
   
   const apellido = 'Arroz';

   // Se comenta pues no se puede hacer
   // alimento = 'Goodbye';
}

// Se imprimirá Gutiérrez
console.log(apellido);

// Se imprimirá Pan
console.log(alimento);