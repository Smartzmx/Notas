# Estructuras de control de flujo

Si se utilizan estructuras de control de flujo, los programas dejan de ser una sucesión lineal de instrucciones para convertirse en __programas inteligentes que pueden tomar decisiones__ en función del valor de las variables.

Para este caso es necesario un nuevo tipo de datos primitivos: el __booleano__, que determina si un valor es falso (`false`) o verdadero (`true`).

## Estructura ``if``

La estructura más utilizada en JavaScript y en la mayoría de lenguajes de programación es la estructura if. Se emplea para tomar decisiones en función de una condición. Su definición formal es:
```JavaScript
if ( condicion ) {
  ...
}
```

Si la condición se cumple (es decir, si su valor es ``true``) se ejecutan todas las instrucciones que se encuentran dentro de ``{...}``. Si la condición no se cumple (es decir,si su valor es ``false``) no se ejecuta ninguna instrucción contenida en ``{...}`` y el programa continúa ejecutando el resto de instrucciones del script.

Ej:
```JavaScript
var mostrarMensaje = true;

if(mostrarMensaje) {
  alert("Hola Mundo"); // Muestra la alerta "Hola Mundo"
}

var number = 30
if(number < 20) {
  alert("Pos no va"); // No muestra la alerta, dado que la condición no se cumple
}
```

## Estructura `if ... else`

En ocasiones, las decisiones que se deben realizar no son del tipo _"si se cumple la condición, hazlo; si no se cumple, no hagas nada"_. Normalmente las condiciones suelen ser del tipo _"si se cumple esta condición, hazlo; si no se cumple, haz esto otro"_.

Para este segundo tipo de decisiones, existe una variante de la estructura `if` llamada `if...else`. Su definición formal es la siguiente:

```JavaScript
if ( condicion ) {
  ...
}
else {
  ...
}
```

Si la condición se cumple (es decir, si su valor es ``true``) se ejecutan todas las instrucciones que se encuentran dentro del ``if()``. Si la condición no se cumple (es decir,si su valor es ``false``) se ejecutan todas las instrucciones contenidas en ``else { }``. 

Ej:
```JavaScript
var edad = 15;

if(edad >= 18) { // Este bloque no se ejecutará porque la condición es falsa
  alert("Eres mayor de edad");
}
else { // Ya que el if encadenado previo no se ejecuta este se ejecutará en reemplazo
  alert("Todavía eres menor de edad");
}
```

## Estructura `if ...else` in Ternary form
se coloca la condicion a evaluar, seguido del signo __`?`__, el cual señala que ahi se termina la condicion; luego se coloca el bloque de código en caso de que se cumpla la condición, para señalar el __`else`__ se señala con los signos de dos puntos __`:`__, seguida del bloque de código en caso de que la condición no se cumpla o sea falsa.

Ej:
```JavaScript
var firstName = 'John'
var age = 22


age >=18 ? console.log(firstName + ' drinks beer'): console.log(firstName + ' drinks juice') // Johns drinks beer
```

## Estructura `if...else if...else`

Una extensión del `if...else` es agregar sentencias intermedias encadenadas de `else if`. De este modo abarcar opciones continuas si las previas no se cumplen.

```javascript
if(numero == 5) {
  ...
}
else if(numero == 8) {
  ...
}
else if(numero == 20) {
  ...
}
else {
  ...
}
```
___

## Estructura `switch`

La estructura ``if...else`` se puede utilizar para realizar comprobaciones múltiples y tomar decisiones complejas. Sin embargo, si todas las condiciones dependen siempre de la misma variable, el código JavaScript resultante es demasiado redundante:

En estos casos, la estructura ``switch`` es la más eficiente, ya que está especialmente diseñada para manejar de forma sencilla __múltiples condiciones sobre la misma variable.__

El anterior ejemplo realizado con ``if...else`` se puede rehacer mediante ``switch``:

```javascript
switch(numero) {
  case 5:
    ...
    break;
  case 8:
    ...
    break;
  case 20:
    ...
    break;
  default:
    ...
    break;
}
```
___

## Estructura ``while``

La estructura __``while``__ permite crear bucles que se ejecutan __ninguna o más veces__, dependiendo de la condición indicada. 

El funcionamiento del bucle __``while``__ se resume en: __"mientras se cumpla la condición indicada, repite indefinidamente las instrucciones incluidas dentro del bucle"__.

Evidentemente, las variables que controlan la condición deben modificarse dentro del propio bucle, ya que de otra forma, la condición se cumpliría siempre y el bucle ``while`` se repetiría indefinidamente.

El siguiente ejemplo utiliza el bucle __``while``__ para sumar todos los números menores o iguales que otro número.

```javascript
var resultado = 0;
var numero = 100;

var i = 0;

while(i <= numero) {
  resultado += i;
  i++;
}
alert(resultado);
```
___

## Estructura ``do...while``

El bucle de tipo ``do...while`` es muy similar al bucle ``while``, salvo que en este caso __siempre__ se ejecutan las instrucciones del bucle __al menos la primera vez.__ 

De esta forma, __como la condición se comprueba después de cada repetición__, la __primera vez siempre se ejecutan__ las instrucciones del bucle. 

Es importante no olvidar que después del __``while()``__ se debe añadir el carácter __``;``__ (al contrario de lo que sucede con el bucle __``while``__ simple).

Utilizando este bucle se puede calcular fácilmente el factorial de un número:

```javascript
var resultado = 1;
var numero = 5;

do {
  resultado *= numero;  // resultado = resultado * numero
  numero--;
} while(numero > 0);

console.log(resultado);
```

En el código anterior, el _resultado_ se multiplica en cada repetición por el valor de la variable _numero_.
En cada repetición se decrementa el valor de esta variable numero. 
La condición del bucle ``do...while`` es que el valor de numero sea mayor que ``0``, ya que el factorial de un número multiplica todos los números menores o iguales que él mismo, pero hasta el número ``1`` (el factorial de 5 por ejemplo es ``5 x 4 x 3 x 2 x 1 = 120``).
___

## Estructura ``for``

La estructura __``for``__ permite realizar repeticiones (también llamadas bucles) de una forma muy sencilla. 

```javascript
for(inicialización; condición; actualización) {
  ...
}
```

La idea del funcionamiento de un bucle __`for`__ es la siguiente: 
__"mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición"__.

- La "_inicialización_" es la zona en la que se establece los valores iniciales de las variables que controlan la repetición.
- La "_condición_" es el único elemento que decide si continua o se detiene la repetición.
- La "_actualización_" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

```javascript
var mensaje = "Hola, estoy dentro de un bucle";

for(var i = 0; i < 5; i++) {
  console.log(mensaje);
}
// Hola, estoy dentro de un bucle
// Hola, estoy dentro de un bucle
// Hola, estoy dentro de un bucle
// Hola, estoy dentro de un bucle
// Hola, estoy dentro de un bucle

```

Utilizando continue, el cual se utiliza dentro de los ciclos para hacer que ante una excepcion continue con el ciclo

```javascript
var frutas = ['Manzana', 'Banana', 3, 'Aguacate', true]

for (var i = 0; i < frutas.length; i++) {
    if (typeof frutas[i] !== 'string') continue
    console.log(frutas[i])
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
___

## Estructura ``for...in``

Una estructura de control derivada de __`for`__ es la estructura __`for...in`__. 

Su definición exacta implica el uso de objetos, por ahora, solamente se va a presentar la estructura __`for...in`__ adaptada a su uso en __arrays__.

Si se quieren recorrer todos los elementos que forman un array, la estructura `for...in` es la forma __más eficiente de hacerlo__, como se muestra en el siguiente ejemplo:

```javascript
var days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(index in days) {
  console.info(days[index]);
}
```
La variable que se indica como índice es la que se puede utilizar dentro del bucle ``for...in`` para acceder a los elementos del array. 
De esta forma, en la primera repetición del bucle la variable `index` vale `0` y en la última vale `6`.

Esta estructura de control es la más adecuada para recorrer _arrays_ (y objetos), ya que evita tener que indicar la inicialización y las condiciones del bucle ``for`` simple y funciona correctamente cualquiera que sea la longitud del array.

---

## Try / catch for Async functions AJAX
.- Maneja los errores de las llamadas __Asincronas__ realizadas a una API o servidor web

```javascript
async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
        alert(error);
    }
}
getWeatherAW(2487956);
```
## then / catch AJAX
.- Maneja los errores de las llamadas __SINCRONAS__ realizadas a una API o servidor web

```JavaScript
function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);
```