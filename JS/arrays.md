# Arrays
Los __arrays__ son estructuras que nos permiten organizar elementos (variables) dentro de una colección . Estos elementos pueden ser números, strings, booleanos, objetos, funciones, etc.

Los __arrays__ (arreglo o matrices) son objetos de tipo lista __cuyo prototipo tiene métodos__ para realizar operaciones de recorrido y mutación. 

## Crear un Array

```javascript
var frutas = ['Manzana', 'Banana']
console.log(frutas.length) // se imprime un: 2
```

## Modificar el valor en x posicion de un arreglo

```javascript
var frutas = ['Manzana', 'Banana']

frutas[0] = 'Peras';
console.log(frutas[0]); // Peras
```

## Acceder (por índice) a un elemento Array

```javascript
var primero = frutas[0] // Manzana
var ultimo = frutas[frutas.length - 1] // Banana
```

## Bucle sobre un Array (for / for of/ foreach)

Modo convencional
```javascript

// ES5

var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

// Manzana
// Banana
// 3
// Aguacate
// true



// ES6 for of loop
var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

for (const i of frutas) {
    console.log(i)
}

// Manzana
// Banana
// 3
// Aguacate
// true
```

Utilizando continue, el cual se utiliza dentro de los ciclos para hacer que ante una excepcion continue con el ciclo

```javascript

// ES5
var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

for (var i = 0; i < frutas.length; i++) {
    if (typeof frutas[i] !== 'string') continue
    console.log(frutas[i])
}
//Manzana
//Banana
//Aguacate


// ES6
for (const cur of frutas) {
    if (typeof cur !== 'string') {
        continue;
    }
    console.log(cur)
}
//Manzana
//Banana
//Aguacate
```

Utilizando break, el cual se utiliza dentro de los ciclos para hacer que ante una excepcion se salga o termine el ciclo

```javascript
var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

for (var i = 0; i < frutas.length; i++) {
    if (typeof frutas[i] !== 'string') break
    console.log(frutas[i])
}
//Manzana
//Banana
```

Usando el método interno de los arreglos:
```javascript
var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

frutas.forEach( function (elemento, indice, array) {
    console.log(elemento, indice)
})
// Manzana 0
// Banana 1

__________________________________________________

No podemos utilizar continue o break en foreach

var bills = [124, 48, 268];
var tips = [];
var fullAmount = [];

bills.forEach(function (elemento, indice, array) {
    if(elemento < 50) {
        tips.push(elemento * .2);
        fullAmount.push(elemento + (elemento * .2));
    } else if(elemento >= 50 && elemento < 200) {
        tips.push(elemento * .15);
        fullAmount.push(elemento + (elemento * .15));
    } else if (elemento >= 200) {
        tips.push(elemento * .1);
        fullAmount.push(elemento + (elemento * .1));
    }
})
console.log(tips);
console.log(fullAmount);
```

## Añadir elemento al final de un Array

```javascript
var nuevaLongitud = frutas.push('Naranja')
// ["Manzana", "Banana", "Naranja"]
```

## Eliminar elemento del final de un Array

```javascript
var ultimo = frutas.pop() // elimina Naranja del final
// ["Manzana", "Banana"]
```

## Añadir elemento al inicio de un Array

```javascript
var nuevaLongitud = frutas.unshift('Fresa') // añade al inicio
// ["Fresa", "Banana"]
```

## Eliminar elemento del inicio de un Array

```javascript
var primero = frutas.shift() // elimina Manzana del inicio
// ["Banana"]
```

## Encontrar el índice de un elemento en el Array / Validar si existe un elemento en el Arreglo

```javascript

// ES5
frutas.push('Mango')
// ["Fresa", "Banana", "Mango"]

var pos = frutas.indexOf('Banana')
// 1

var pos = frutas.indexOf('Aguacate')
//-1, debido a que cuando no encuentra el elemento señalado, lo marca como -1

_______________________________________________________
var frutas = ['Manzana', 'Banana']

var hayAguacates = frutas.indexOf('Aguacate') === -1 ? console.log('No hay aguacates en el arreglo de frutas')
    : console.log('Si hay Aguacates en el arreglo de frutas')
// No hay aguacates en el arreglo de frutas

// ES6 find / findIndex method's

var ages = [12, 17, 8, 21, 14, 11];

// ES5
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18)); // 3, posicion del arreglo

console.log(ages.find(cur => cur >= 18)); // el valor que es 21


```

## Eliminar un elemento con el índice de posición

```javascript
var elementoEliminado = frutas.splice(pos, 1) // así es como se elimina un elemento
// ["Fresa", "Mango"]
```

## Eliminar elementos con el índice de posición

```javascript
var vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales)
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

var pos = 1, n = 2;
var elementosEliminados = vegetales.splice(pos, n)
// así es como se eliminan elementos, n define la cantidad de elementos a eliminar,
// de esa posición(pos) en adelante hasta el final del array.

console.log(vegetales)
// ["Repollo", "Zanahoria"] (el array original ha cambiado)
console.log(elementosEliminados)
// ["Nabo", "Rábano"]
```

## Transformar un Node List en un arreglo

```javascript
const boxes = document.querySelectorAll('.box'); // esto regresa un node list

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes); // regresa un arreglo

// creo un ciclo para cambiar el color de fondo de cada elemento que contenga la clase box
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes); // trasforma un node list a un arreglo

// creo un ciclo para cambiar el color de fondo de cada elemento que contenga la clase box
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

```

## Copiar un Array

No podemos utilizar brek o continue al utilizar este método, en su lugar utilizamos el ciclo for

```javascript
var copiaSuperficial = frutas.slice() // esta es la forma de crear una copia
// ["Fresa", "Mango"]
```

## Filtrar un array

Para filtrar siempre se necesita establecer una condición. 
El método `.filter()` crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un _array_ vacío.

```javascript
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## Transformar un array `.map()` ("mapeo")

El método `.map()` itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

No podemos utilizar brek o continue al utilizar este método, en su lugar utilizamos el ciclo for

```javascript
var numbers = [1, 5, 10, 15];
let doubles = numbers.map(x => x * 2)
// numbers is still [1, 5, 10, 15]
// doubles is now [2, 10, 20, 30]

numbers = [1, 4, 9];
let roots = numbers.map( num => Math.sqrt(num) )
// numbers is still [1, 4, 9]
// roots is now [1, 2, 3]
```

## Reducir `.reduce()`

El método `.reduce()` aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

Revisar un poco más de los parámetros de la función en: [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce#Sintaxis)

```javascript
[1, 3, 5, 7, 11].reduce( (acumulador, nuevoValor) => acumulador + nuevoValor, 10 )

// Primera llamada
acumulador = 11, nuevoValor = 1

// Segunda llamada
acumulador = 14, nuevoValor = 3

// Tercera llamada
acumulador = 19, nuevoValor = 5

// Cuarta llamada
acumulador = 26, nuevoValor = 7

// Quinta llamada
acumulador = 37, nuevoValor = 11

// el array sobre el que se llama a reduce siempre es el objeto [1,3,5,7,11] 
// Valor Devuelto: 37
```

## Asignación / copia por _destructuring_ (_destructuring assignment_)

La sintaxis de _destructuring assignment_ es una expresión de JavaScript que hace posible la __extracción de datos de arreglos u objetos__ usando una sintaxis que __equivale a la construcción de arreglos y objetos literales__.

__Object destructuring__
```javascript
// Convencional
var edad = persona.edad

// Destructuranto
var { edad } = persona
```

```JavaScript
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// Asigna nuevos nombres de variable
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true  
```

__Crear y asignar el valor de cada elemento de un arreglo en variables individualesa traves de Destructuring__
En este ejemplo queremos extraer y asignar cada elemento del arreglo en una variable, esta es la forma en que lo haríamos en ES5

```JavaScript
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
```
ES6
```JavaScript
// de esta forma estamos extrayendo cada elemento del arreglo y asignandolo a una variable individual 
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

//Tambien ocurre con objetos
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// Podemos asignarle el nombre de la variable con la sig. sintaxis
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// Uso comun de Destructuring, una funcion que regresa un objeto / arreglo
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]; // regresa un arreglo
}

// aplicamos destructuring, para guardar el valor de cada elemento del arreglo en variables individuales
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

```
___

### Métodos Bind, call and apply de un arreglo

```javascript
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
```

## Spread operator
se utiliza para pasar un arreglo como parametros individuales en una función

```javascript
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); // 81

//ES5
var ages = [18, 30, 12, 21]; // tengo este arreglo
var sum2 = addFourAges.apply(null, ages); // lo paso como parametros utilizando el método apply
console.log(sum2);


//ES6
const sum3 = addFourAges(...ages); // utilizamos el spread operator
console.log(sum3); // 81

// otro ejemplo, donde unimos dos argumentos que son del tipo arreglo
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// otro ejemplo con node list
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); // Convierto un node list a un array con el método from y corro un ciclo con forEach para iterar sobre cada elemento, cambiando su color
```