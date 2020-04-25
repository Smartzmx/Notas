# Funciones

__Las funciones son fracciones de código para reutilizarse__. Para definir una función se utiliza la palabra reservada `function`. 

En términos generales, una función es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursividad) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, y __la función siempre devuelve un valor__, aunque sea el que tiene por defecto = undefined, y se señala con la palabra __`return`__, la cual almomento de ejecutarse detiene o termina la función.

Delimitamos el cuerpo de la función usando llaves / curly brackets __`{ }`__. Los __parámetros de la función__ que son variables, objetos u otras funciones que se pasan a la función escribiéndolos entre paréntesis __`()`__, y cada parametro se separa por una __`,`__

Para llamar o __invocar una función solo se hace por su nombre y ()__

Las funciones son del tipo de dato complejo y por lo tanto podemmos decir que son objetos, por lo que una función es una instancia de un objeto.

__JavaScript es un lenguaje interpretado__, esto quiere decir que intentará ejecutar el código sin importar si los argumentos que se le pasen a la función estén invertidos o incluso incompletos.

## Tipos de funciones

### funciones Anónimas (sin nombre)

Ej:
```javascript
// convencional
var saludo = function(nombre) {
  return 'Hola ' + nombre;
}('Alejandro'); // al colocar parentesis al final de la función, y el parametro la estoy invocando.

console.log( saludo ); // Hola Alejandro

// con arrow function
let saludo2 = (nombre => `Hola ${nombre}`)('Alejandro'); // al encerrar a la función con los parentesis, estoy señalando que es una función anónima, y tambien la estoy invocando al final de la misma

console.log( saludo2 ); // Hola Alejandro
```

### Callbacks
Un callback es una función que se __pasa a otra función como un argumento__. Esta función se invoca, después, dentro de la función externa para completar alguna acción.

La función `yoCallbackName` es un _callback_. Dado que se pasan como os a otras funciones que las utilizan.

```javascript
function yoFn (laFnCallback) {
  let nombre = laFnCallback( Math.random() )
  console.log(`Soy el señor@ desarrollador y mi nombre real es: ${nombre}`)
}

function yoCallbackName (opt) {
  let optionStr = 'TOP SECRET'
  // Más random aún 
  if (opt >= Math.random()) { optionStr = 'Lo olvide ... :V' }
  return optionStr
}

yoFn(yoCallbackName)

/* -- Caso de ejemplo, tiene variaciones --
Soy el señor@ desarrollador y mi nombre real es: TOP SECRET
Soy el señor@ desarrollador y mi nombre real es: Lo olvide ... :V
*/

// otro ejemplo
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

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
```

### Closures
Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. 

__Una funcion hijo siempre tendrá acceso a los valores de los parametros de la funcion padre, auque la funcion padre ya este finalizada, esto gracias al scope chain.__

Un aspecto fundamental de un closure es que __es una función que retorna otras funciones.__

```javascript
function saludoPersonal(country) { 
  return function(name) {
    console.log(`Hola, mi nombre es ${name} y soy de ${country}`) // utilizamos el valor del parametro, aunque la función saludoPersonal ya este finalizada, al declarar la palabra return, la cual regresa otra funcion.
  }
}
const saludo1 = saludoPersonal('Perú')
const saludo2 = saludoPersonal('Colombia')
const saludo3 = saludoPersonal('Brasil')

saludo1('Carlos')
saludo2('Andrés')
saludo3('María')

// tambien funciona invocandola directamente sin guardar el primer valor en una variable

saludoPersonal('Peru')('Carlos') // Hola, mi nombre es Carlos y soy de Peru


// otro ejemplo
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);

// Otro ejemplo
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
```
___

### Funciones recursivas

Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

__Ejemplo 1:__
```javascript
function division_entera(dividendo, divisor) {
	if (dividendo < divisor) {
		return 0;
	}
  else {
		return 1 + division_entera(dividendo - divisor, divisor);
	}
}
```

__Ejemplo 2:__ Un factorial
```javascript
function Factorial (numero) {
  if (numero === 0) {
    return 1
  }
  return numero * Factorial(numero - 1)
}
```
___


### IIFE (Immediately Invoked Function Expressions)
.- se utilizan para ocultar la variable del scope un nivel abajo.

```javascript
// en este ejemplo declaramos una función anonima simple y despues la invocamos
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


// para hacerla del tipo de funcion IIFE, la envolvemos entre parentesis, y la volvemos anonima, y despues la auto invocamos
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score); // error, debido a que no podemos acceder al valor de la variable al estar declarada dentro de una funcion tipo IIFE

// pasandole parametros
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // true
```

en ES6, la forma de declarar funciones IIFE, es solo envolviendo esta dentro de llaves o curly brackets, debido al alcance de la forma de declarar las variables, en este caso con let

``` JavaScript
// para hacerla del tipo de funcion IIFE, la envolvemos entre parentesis, y la volvemos anonima, y despues la auto invocamos
{
    let score = Math.random() * 10;
    console.log(score >= 5);
}

//console.log(score); // error, debido a que no podemos acceder al valor de la variable al estar declarada dentro de una funcion tipo IIFE

// pasandole parametros
{function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}} // true
```
___


### Funciones de primera clase:
* Son almacenadas en una variable.
* Son pasadas como argumentos a otras funciones.
* Son devueltas por otras funciones.
* Son almacenadas en alguna estructura de datos.
* Mantienen sus propias propiedades y métodos.
___

## Formas de declarar una función

### Function Expression
  * No llevan nombre.
  * La función es declarada como una __VARIABLE__

Ej.
```JavaScript
var whatDoYouDo = function(job, firstName) {
    switch(job){
         case 'teacher':
            return firstName + ' teaches to code';
         case 'driver':
            return firstName + ' drives an uber in Guadalajara.';
         case 'designer':
            return firstName + ' designs beautiful web sites';
         default:
            return firstName + ' does something else.';     
    }
}

console.log(whatDoYouDo('designer', 'Alejandro')) //Alejandro designs beautiful web sites
console.log(whatDoYouDo('teacher', 'Alejandro')) // Alejandro teaches to code

```
__CUANDO SEÑALAMOS DENTRO DE LA FUNCION RETURN, USUALMENTE EL RESULTADO SE GUARDA EN UNA VARIABLE.__

### Function Declaration
  * SI lleva nombre
  * NO es declarada como una variable
Ej.
```JavaScript

function whatDoYouDo(job, firstName) {
    switch(job){
         case 'teacher':
            return firstName + ' teaches to code';
         case 'driver':
            return firstName + ' drives an uber in Guadalajara.';
         case 'designer':
            return firstName + ' designs beautiful web sites';
         default:
            return firstName + ' does something else.';     
    }
}
 
console.log(whatDoYouDo('designer', 'Alejandro')) //Alejandro designs beautiful web sites
console.log(whatDoYouDo('teacher', 'Alejandro')) // Alejandro teaches to code

```
__CUANDO SEÑALAMOS DENTRO DE LA FUNCION RETURN, USUALMENTE EL RESULTADO SE GUARDA EN UNA VARIABLE.__


### Arrow Functions ES6
Las funciones de flecha, o _arrow functions_ son una __nueva forma de definir funciones__ y hay distintas variantes en la sintaxis.

__Beneficios__ nueva sintaxis:
1. Menos código, que es más simple de interpretar.
2. No hay un nuevo 'This' dentro de las funciones.
3. No hay constructores, no tiene "new".
4. No puedes cambiar el valor del "This", aunque uses la función call(), apply() o bind().
5. No hay objeto "arguments".

__Características__ nueva sintaxis:
1. No hay creación de los siguientes objetos:__This, super, arguments, ni new.target__
2. No puede ser llamado o invocado con __new__
3. No hay un __prototype__, debido a que __no tiene un costructor__
4. No se puede cambiar el valor de __this__
5. No existe el objeto __arguments__
6. No pueden tener __nombres duplicados__ al momento de mandar __parámetros__

Ej:
```javascript

// Tradicional
var miFuncion2 = function(valor){
  return valor;
}

// Arrow function
let miFuncion1 = valor => valor;


// ambas funciones son excactamente iguales a nivel funcionamiento, ambas regresarán el valor que se le indique como parámetro.
console.log(miFuncion1(3));//3
console.log(miFuncion2(33));//33
```
Otro Ej:
```javascript
let fecha = new Date(),
hora = fecha.getHours()

// convencional
function saludarCompa(hr) {
  if (hr <= 5) {
    return 'No me jodas!!!'
  }
  else if (hr >= 6 && hr <= 11) {
    return 'Buenos días!!!'
  }
  else if (hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!'
  }
  else {
    return 'Buenas noches!!!'
  }
}
console.log( saludarCompa(hora) ) //Imprime el saludo dependiendo la hora del día

// con arrow function
const saludarCompa = hr => {
  if (hr <= 5) {
    return 'No me jodas!!!'
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos días!!!'
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!'
  } else {
    return 'Buenas noches!!!'
  }
}
console.log( saludarCompa(hora) ) //Imprime el saludo dependiendo la hora del día
```

#### Un solo parámetro

Al crear una arrow function de un solo parámetro __no es necesario escribír los paréntesis__, __tampoco es necesario escribír las llaves__, esto se puede cuando la función es de una sola línea y devuelve un valor.

```javascript
// convencional
function saludo (nombre){
  return `Hola ${nombre}`
}
console.log( saludo('Carlos') ) //Imprime Hola Carlos

// con arrow function
const saludo = nombre => `Hola ${nombre}`;
console.log( saludo('Carlos') ) //Imprime Hola Carlos
```

#### Un solo parámetro pero con varias lineas de código en el cuerpo de la función

```javascript
// convencional
function saludo (nombre){
  var salida = 'Hola, ' + nombre;
  return salida;
}
console.log( saludo('Carlos') ) //Imprime Hola Carlos

// con arrow function
let saludo = nombre => {
  let salida = `Hola, ${nombre}`;
  return salida;
}
console.log( saludo('Carlos') ) //Imprime Hola Carlos
```

#### La función regrese un objeto literal

```javascript
// convencional
var obtenerLibro = function(id){
  return{ // regresa un objeto literal
    id:id,
    nombre:'Harry Potter'
  }
}

// con arrow function
let obtenerLibro2 = id => ({ id:id, nombre:'Harry Potter'}); // el colocar parentesis y luego llaves indica que va a regresar un objeto literal
```

#### Varios parámetros

Cuando la función tenga más de un parámetro __es necesario envolver el nombre de estos entre paréntesis__.

```javascript
// convencional
function sumar(a, b) {
  return a + b;
}
console.log( sumar(10, 9) ) //Imprime 19

// con arrow function
const sumar = (a, b) => a + b;
console.log( sumar(10, 9) ); //Imprime 19
```

#### Sin parámetros

Cuando la función no reciba parámetros también __son necesarios los paréntesis__.

```javascript
// convencional
function saludo() {
  return 'Hola a todos';
}
console.log( saludo() ); // Imprime Hola a todos

// con arrow function
const saludo = () => `Hola a todos`;
console.log( saludo() ); // Imprime Hola a todos
```

### This in arrow functions

```javascript
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() { // defino un método, el cual si tiene acceso a las propiedades del objeto a traves de la palabra this. pero si declaro un funcion dentro de esta función, esta ultima funcion no tendría acceso, lo cual es el caso la funcion que esta dentro del método addeventlistener
       var self = this; // declaro la variable self, para poder acceder a las propiedades del objeto, de otra forma this apunta al objeto global y no al objeto.
       document.querySelector('.green').addEventListener('click', function() { // la palabra clave this apunta al objeto global, ya que es una funcion regular, es por eso que utilizo el truco de declarar una variable en este caso self con el valor de this
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();
```

Mismo ejemplo anterior pero utilizando ES6, al declarar variables y arrow function en la funcion del método addeventlistener

```javascript
// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => { // al declarar la funcion como arrow function, estoy abriendo la posibilidad de acceder a las propiedades del objeto a traves de la palabra this
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
```
Que pasaría si declaramos tambien como arrow function el método clickMe, en este caso, al declararlo así, estaríamos diciendo que tuviera acceso al objeto global, por lo que no funcionaría

```javascript
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

```
___

## Parámetros / Argumentos.- 

Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro y cuando se pasa un dato primitivo.

>En JavaScript, cuando asignamos un valor a una variable, o pasamos un argumento a una función, este proceso siempre se hace “por valor” (_by value_ en inglés). Estrictamente hablando, JavaScript no nos ofrece la opción de pasar o asignar “por referencia” (_by reference_ en inglés), como en otros lenguajes. Lo interesante en nuestro caso, es que cuando una variable hace referencia a un objeto (``Object``, ``Array`` o ``Function``), el “valor” es la referencia en sí.

### Parámetros por valor o como referencia

son variables, objetivos u otra función; cada parametro se separa por comas.

Ej: cuando un __parametro es un objeto__:

``` JavaScript

function imprimir ( persona ){
    console.log( persona.nombre + " " + persona.apellido);
}

imprimir({ // estoy generando un objeto, el cual es el parámetro que utilizará la función imprimir
    nombre: "Juan",
    apellido: "Padilla"
}); // resultado: Juan Padilla
```

Ej: cuando el __parámetro es una función__: 

Un __callback__ es una función que se pasa a otra función como un argumento.

``` JavaScript    
function imprimir ( fn ){
    fn();
}

imprimir( function(){ // Defino una función sin nombre (anónima), la cual servirá de parámetro para la función imprimir
    console.log('Función anónima');
}); // resultado: Función anónima


//DEFINIENDO UNA FUNCIÓN PREVIAMENTE

function imprimir (fn){
    fn();
}

var miFuncion = function(){ // defino mi función sin nombre (anónima), ligada a una variable.
                    console.log('Función anónima');
                }
imprimir(miFuncion); // resultado: Función anónima
```

### Valor por defecto en un Parámetro

__ECMAScript5__
__Opción1__
``` Javascript
function saludo( mensaje, tiempo){
  mensaje = mensaje || 'Hola Mundo'; // estoy señalando que el valor por defecto es "Hola Mundo", en caso de no recibir el parámetro de mensaje
  
  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);
}
saludo(); // Hola Mundo
saludo('Hola Fernando'); // Hola Fernando
```

__Opción2__
``` Javascript
function saludo( mensaje, tiempo){

  mensaje = ( typeof mensaje !== 'undefined')? mensaje: 'Hola Mundo2'; // creo un if corto, señalando que evalue el tipo de parámetro que recibe la función, 
                                                                       //en el cual si es diferente a undefined, entonces imprima el valor de la variable mensaje, 
                                                                       //si es igual, entonces Tome el mensaje por defecto 'Hola Mundo2'
  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);
}
saludo(); // Hola Mundo2
```

__ECMAScript6__
``` Javascript
function saludo( mensaje = 'Hola Mundo' , tiempo = 1500){ // al colocar un valor a alguno de los parámetros, estoy señalando que es un valor opcional, 
                                                          //en caso de que la funcion no reciba el parámetro
  setTimeout(function(){
    console.log( mensaje );
  }, tiempo);
}
saludo(); // Hola Mundo, y se ejecutará en 1.5 segundos
```

### Parámetro REST, indicado por `...`
Es indicado a través de __`...`__ seguido del nombre que le asignemos a dicho parámetro __en la declaración de una función__

Este parámetro se convierte en un __arreglo__ que contiene el resto de los parámetros pasados a la función, de ahi el nombre de __REST__

__Es lo opuesto a Spread operator__, el cual toma un arreglo y transforma cada elemento del arreglo en un parametro para la __función que estoy invocando__ NO DECLARANDO COMO LO HAGO EN REST OPERATOR

Se utiliza cuando no sabemos la cantidad de parametros que la función va a tener.

__Restricciones parámetro REST:__
1. Solo puede existir un parámetro REST por función
2. El parámetro REST debe de colocarse siempre como último parámetro

```Javascript
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);// para transformar los parametros a un arreglo
    
    // itero sobre el arreglo
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}


//isFullAge5(1990, 1999, 1965); 
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) { // al utilizar el REST operator, en automatico estoy creando un arreglo con todos los parametros
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
```

Que pasa cuando __tenemos un parametro de la función que es obligatorio y el resto de la cantidad de paremtros no lo sabemos__

```Javascript
// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1); // al indicar el 1, estamos indicando al método slice que comience a partir de la posicion 1 del arreglo

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6, solo pasamo el argumento separado por una coma
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
```

### Operador Spread 

Este operador __`spread`__ toma el valor de cada elemento de __un arreglo señalado como parámetro__ y __separa cada elemento del arreglo en un parámetro independiente__ para la __función que estoy invocando__

__ECMAScript5__
```Javascript
var num1 = 10,
    num2 = 30;

var max = Math.max(num1,num2);
console.log(max); // 30

//Supongamos que tenemos una gran cantidad de número, los cuales estan en un arreglo y queremo determinar el número máximo

var numeros =[1,5,10,20,100,234];

var max = Math.max.apply(Math, numeros);
console.log(max); // 234
```

__ECMAScript6__
```Javascript
let numeros =[1,5,10,20,100,234];

let max = Math.max(...numeros); // esta es la forma de invocar al operador __spread__
console.log(max); // 234
```

## Return.- 

Palabra reservada para especificar el resultado o expresion a evaluar de las funciones.

__¿Qué tipo de dato puede regresar una función?...__
    * Tipos primitivos (strings, numbers, booleans, null, undefined)
    * Funciones
    * Objetos

Ej: __Regresa un número__ aleatorio entre 0 y 1
``` JavaScript
    function obtenerAleatorio(){
        return Math.random(); // regresa un número aleatorio entre 0 y 1
    }

    console.log( obtenerAleatorio() );
```

Ej: __Regresa un string__:
``` JavaScript
function obtenerNombre(){
    return "Juan"; // regresa el texto "Juan"
}

console.log(obtenerNombre() + " Padilla"); // Juan Padilla
```

Ej: __Regresa un Boolen__:
``` JavaScript
function esMayor05(){
    var num = obtenerAleatorio();
    if( num > 0.5){
        return 'El número aleatorio: ' + num + 'si es mayor: ' + true;
    } else{
        return 'El número aleatorio: ' + num + 'si es menor: ' + false;
    }
}
console.log( esMayor05());
```

Ej: __Regresa un objeto__:
``` JavaScript
function crearPersona( nombre, apellido ){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona( 'Maria','Paz');
```

Ej: __Regresa una función__:
``` JavaScript
function crearFuncion(){

    return function( nombre ){
        console.log('Me creó ' + nombre);

        return function(){
            console.log('Segunda Función')
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();

// otro ejemplo

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
```
___

## Métodos Bind, call and apply de una funcion
.- son métodos que se utilizan para __prestar métodos entre objetos__

```javascript
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // el método call, tiene como primer argumento el objeto This, esto es a que objeto apuntara para tomar los valores señalados como This, en este caso los tamará del objeto emily.

//john.presentation.apply(emily, ['friendly', 'afternoon']); // este método es igual al método call, pero en éste se pasan como segundo argumento un arreglo, el cual es este caso no aplica debido a que el metodo presentation no tiene este tipo de argumentos.
```

__Método bind__, a lo que __se le conocce como Carring__, y tiene las siguientes características:
* Regresa una función por lo tanto es recomendable crear una variable para almacenar dicha función y poder utilizarla luego.
* No ejecuta la función inmediatamente, por lo que podemos pasar argumentos a medias, esto es si la funcion espera dos argumentos, con este método podemos pasarle un solo argumento y al momento de invocarla pasarle el otro argumento.

```javascript
var johnFriendly = john.presentation.bind(john, 'friendly'); // declaramos la variable johnFriendly, y en método bind, el primer argumento es el objeto al que apuntara, y el segundo argumento depende de la cantidad de argumentos del método original

johnFriendly('morning'); // en este caso solo pasamos el argumento falatante del método presentation 
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Otro ejemplo pero en este caso en lugar de apuntar a un objeto literal, apuntamos a una función
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
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // apuntamos con this a la misma función
console.log(ages);
console.log(fullJapan);
```
## Default Parameters

```javascript
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) { // declaro una constructor function
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName; // señalo los parametros por default, con un ternario de if
    nationality === undefined ? nationality = 'american' : nationality = nationality; // señalo los parametros por default, con un ternario de if
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

console.log(john)
/* SmithPerson {
  firstName: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  nationality: 'american'
} */

console.log(emily)
/* SmithPerson {
  firstName: 'Emily',
  lastName: 'Diaz',
  yearOfBirth: 1983,
  nationality: 'spanish'
} */
```

# Challenge

``` JavaScript
// Declaro mi funcion para crear preguntas
(function() { // declaro y encierro mi código en una función tipo IIFE, para encapsular mi código y que funcione para cualquiera que quiera utilizar mi código, aunque tenga variables con el mismo nobre

    // Creo la funcion para crear las preguntas
    var Questions = function(question, answerOptions, correctAnswer) {
        this.question = question,
            this.answerOptions = answerOptions,
            this.correctAnswer = correctAnswer
    }

    // creo el método desplegar pregunta, basado en la funcion Question, con la propiedad prototype para que se pueda heredar entre objetos
    Questions.prototype.displayQuestion = function () {
        console.log(this.question) // despligo la pregunta

        // despliego las posibles respuestas
        for (var i = 0; i < this.answerOptions.length; i++) {
            console.log(i + ':' + this.answerOptions[i])
        }
    }

    // creo un  método para verificar la respuesta obtenida del usuario
    Questions.prototype.checkAnswer = function (answerUser) {
        if (answerUser === this.correctAnswer) {
            console.log('Correct answer')
        } else {
            console.log('Wrong answer')
        }
    }

    // Creo las preguntas como objetos en base a la funcion Questions, pasansole los parametros necesarios
    var q1 = new Questions('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0)

    var q2 = new Questions('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Questions('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    // creo un arreglo para almacenar todas las preguntas
    var questionsArray = [q1, q2, q3]

    // creo una variable donde de manera aleatoria me de el número de pregunta a desplegar
    var randomQuestion = Math.floor(Math.random() * questionsArray.length)
    console.log(randomQuestion)

    // en base al número de pregunta generado, ejecuto la función displayQuestion
    questionsArray[randomQuestion].displayQuestion()

    // creo un prompt para que el usuario teclee el número de respuesta
    var answerRecieved = parseInt(prompt('Please, Select the correct number answer')) // lo convierto a número, debido a que puse que fuera una comparación estricta

    questionsArray[randomQuestion].checkAnswer(answerRecieved)
})()
```

