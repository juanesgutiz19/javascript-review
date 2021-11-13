
const array = [1, 2, 3, 4, 5, 6];

// foreach: ejecuta la función indicada una vez por cada elemento del array
// Se recorre el array, se muestra tanto el índice como el valor.
array.forEach(( item, index ) => {
    console.log(item, index);
});

// map: crea un nuevo array con los resultados de la llamada a la función 
// indicada aplicados a cada uno de sus elementos.

const twoAdded = array.map( num => num + 2 );
console.log(twoAdded);

// filter: crea un nuevo array con todos los elementos que cumplan la 
// condición implementada por la función dada.

const filtered = array.filter( num => num > 2 );
console.log(filtered);

// reduce: aplica una función a un acumulador y a cada valor de un array 
// (de izquierda a derecha) para reducirlo a un único valor

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum);

const numbers = [2,4,6,8,10];

// acc: Acumulador, operaciones que haga se guardan ahí
// item: Elemento actual que es está siendo recorrido por la función reduce
// index: Índice del elemento actual
// arr: Arreglo iterado
// numbers.reduce( (acc, item, index, arr)  => {

// });

// Segundo parámetro: Valor inicial del acc
let res = numbers.reduce( (acc, item)  => {
    return acc = acc + item;
}, 0);

console.log(res);

const strings = ['Mi', 'nombre', 'es', 'Marcos'];

res = strings.reduce( (acc, item) => {
    // El valor inicial de acc es 'Mi'
    return acc += + ' ' + item ;
});

console.log(res);

res = strings.reduce( (acc, item) => {
    // El valor inicial de acc es 'Mi'
    return acc += + ' ' + item ;
}, 'Hola!');

console.log(res);

// Con objetos 

const objs = [
    {nombre: 'Marcos', edad: 15},
    {nombre: 'Lena', edad: 10}
];

res = objs.reduce( (acc, item) =>{
    return acc += item.edad;
}, 0);

console.log(res);

// some: verifica si algún elemento de 
// un array cumple con el test implementado por la 
// función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.

console.log('SOME');
const largeNum = array.some( num => num > 4 );

console.log(largeNum);

const smallNum = array.some( num => num <= 0 );
console.log(smallNum);

// every:  verifica si todos los elementos en el arreglo pasan la prueba 
// implementada por la función dada.

const lessThanTen = array.every( num => num < 10 );
console.log(lessThanTen);

