
const nombre = 'Deadpool';
const real = 'Wade Winston';

// La forma como se haría de forma tradicional
const normal = 'Nombre: ' + nombre + ' Nombre real: ' + real;

// Notación template literals
const template = `Nombre: ${ nombre } Nombre real: ${ real }`;

// Se obtiene el mismo resultado
console.log(normal);
console.log(template);
// Dentro de ${} se puede introducir cualquier tipo de operación en js
console.log( `1 + 1 es ${1 + 1}` );

// Útil para incrustar HTML
const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);






