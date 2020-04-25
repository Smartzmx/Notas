# Variables

## Qué es?
Las variables son contenedores en los que puedes almacenar valores. 

## Cómo se usan?
Primero debes declarar la variable con la palabra clave __`var`__ (ES5),  y para ES6 se utiliza __`let`__ o __`const`__, seguida del nombre que le quieras dar:
`var nombreDeLaVariable;`
`let nombreDeLaVariable;`
`const nombreDeLaVariable;`, la cual siempre debe de ser definida con un valor que sabemos nunca va a cambiar.

## Diferencias entre let y var
__let, tiene un alcance de bloque,__ esto significa que solo existe dentro del bloque en el cual fue declarada; A diferencia de var, __var tiene un alcance de función__, esto es vive dentro de la funcion en la cual fue declarada.


## Reglas para definir una variable
Puedes __nombrar a una variable__ con casi cualquier nombre, pero hay algunas __restricciones__:

1. __No__ pueden contener en su definición __caracteres especiales__ como: acentos, tildes, arroba, dierresis, signos de (%, + / ! ´ ' @ ¨)
    __EXCEPCIÓN: $__
2. __No__ se pueden utilizar para definir variables o constantes las __palabras reservadas__ del lenguaje de programación utilizado.
3. __No__ podemos utilizar __números al inicio__ de la definición de variables o constantes, pero si en cualquier otro lugar de la palabra de la definición de la variable o constante.
4. Debe de tener un __nombre significativo__ de lo que va a contener o guardar.
5. Podemos __utilizar letras / números / guion bajo / $__ para definir las variables o constantes.

__JavaScript distingue entre mayúsculas y minúsculas__ — `miVariable` es una variable distinta a `mivariable`.

Para indicar que es ahí __donde termina la línea__ se coloca un  __punto y coma__ 

## Convencion al declarar variables
__CamelCase__ es una sugerencia o estandar para definir variables o constantes:
- __lowerCamelCase__ Inicia con minúscula y si tiene alguna otra palabra inicia con MAYÚSCULA, sin espacios. Usado para definir __variables (var y let), objetos y métodos.__
- __UpperCamelCase__ Inicia con MAYÚSCULA y si tiene alguna otra palabra inicia con MAYÚSCULA, sin espacios. Usado para defiir __clases__
- __NO APLICA__ para definir __CONSTANTES__, éstas se definen, __todo el nombre en MAYUSCULAS__

## Tipos de variables
- __var__ JS busca en todo el documento el valor de la variable, __independientemente de sí fue declarada antes o después__ de ser invocada por la función.

- __let__ obliga al programador a __definir previamente la variable__ antes de que JavaScript (JS) la necesite. El alcance __se reduce al bloque (las llaves) en el cual la variable fue declarada__. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, __no se puede volver a declarar en ninguna otra parte de la función.__

- __const__ al igual que let __se define en el contexto o alcance de un bloque__, a diferencia de let y var, las variables definidas como constantes (const), ya __no podrán ser modificadas ni declaradas nuevamente__, en ninguna otra parte de la función o el contexto en el que ya existen.

__La recomendación es reducir al mínimo el alcance de las variables, por lo que se debe usar let en lugar de var mientras sea posible.__

## Scope de una variable:
es el __ambito de una variable__, llamado scope en inglés, es la zona del programa en la que se define la variable.

- __Global__ si la variable es declarada __FUERA__ de una función o bloque de algún ciclo, ésta fue declarada en el scope GLOBAL.
        
Objeto global = window... por lo que todas las variables decalradas en este scope, se ligarán al objeto window.

- __Función__ si la variable es declarada __DENTRO__ de una función o bloque de algun ciclo, ésta fue declarada en el scope FUNCIÓN.

__Nota.- toda variable tiene el valor por defecto de undefined__


## Tipos de Datos de una variable:
__Primitivos:__
- __String.-__ una cadena de texto. Para indicar que la variable es una cadena, debes escribirlo entre comillas dobles o sencillas	
`var str = 'texto';`

- __Number.-__ un número. Los números no tienen comillas.
`var num = 10;`

- __Boolean.-__ tienen valor verdadero/falso. true/false son palabras especiales en JS, y no necesitan comillas.	
`var bol = true;`

- __Undefined.-__ toda variable tiene el valor por defecto de undefined.
`var und = undefined;`

- __null.-__ valor vacio.
`var nul = null;`

___
__Datos Compuestos:__
  * __Array.-__ una estructura que te permite almacenar varios valores en una sola referencia. 

  Llama a cada miembro del array así: miVariable[0], miVariable[1], etc.
  ``` JavaScript
  var miVariable = [1,'Bob','Steve',10];
  ```

  * __Object.-__ puede ser una colección de datos primitivos u otro objeto; dentro de los objetos se definen las propiedades, las cuales se separan por una coma.

  ``` JavaScript
  var obj = {
              numero: 10,
              texto: 'Nuevo texto',
              objHijo: { // aqui estoy definiendo un objeto dentro de otro objeto
              }
              };`
  ```

## Operators used in variables
  * Math.- son funciones de javascript para realizar las operaciones matematicas básicas: restar, multiplicar y dividir.
  * Logical.- son funciones de javascript para evaluar una condición (comparar dos valores y regresar un resultado): <, >, !=, <=, >=, ==, ===
  * Typeof.- es una funcion de JavaScript para definir el tipo de dato de una variable: string / number / boolean / null / undefined / object / array
    ``` JavaScript
    var obj = {
                numero: 10,
                texto: 'Nuevo texto',
                objHijo: { // aqui estoy definiendo un objeto dentro de otro objeto
                }
                };
    console.log(typeof obj) // object
    ```
## Operators Precedence & Associativity
Precedencia.- define el orden en que una operación o comparacion va a calcularse o ejecutarse primero, para calcular el vaor final de una declaración.
Asociatividad.- define si la operación o calculo va a iniciar de derecha a izquierda o de izquierda a derecha.

link table of precedence.- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

  ``` JavaScript
  var x, y;
  x = y = (3 + 5) * 3 / 2; // (3+5) = 8, ya que la agrupación con parentesis tiene la precedencia mayor de todos los operadores// 8 *3 = 24 // 24 / 2 = 12

  console.log(x,y) // 12, 12
  ```

## Tipos de comparaciones entre dos variables o valores
JavaScript tiene __comparaciones estrictas__ y __comparación abstracta__ o de __conversión de tipos__ . 

- Una __comparación estricta__ (por ejemplo, __``===``__) solo __es verdadera si los operandos son del mismo tipo y los contenidos coinciden__. 

- La __comparación abstracta__ más comúnmente utilizada (por ejemplo, __``==``__) __convierte los operandos al mismo tipo antes de hacer la comparación__. 

- Para las __comparaciones abstractas relacionales__ (p. Ej., __``<=``__), Los operandos __primero se convierten en primitivos__, y __luego en el mismo tipo__, antes de la comparación.

#### Igualdad (``==``)

El operador de igualdad __convierte los operandos__ __(si no son del mismo tipo)__, luego aplica una comparación estricta. __Si ambos operandos son objetos__, entonces JavaScript __compara las referencias internas__ que son iguales cuando los operandos se refieren al mismo objeto en la memoria.

```javascript
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 == object2 // false
0    == undefined  // false
null == undefined  // true
```

#### Identidad / igualdad estricta (``===``)

El operador de identidad devuelve verdadero si los operandos son estrictamente iguales __sin conversión de tipo__.
```javascript
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 // false
```

> "__Se recomienda usar el triple igual siempre que se este comparando variables.__"
---
