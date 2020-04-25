
# Programación Orientada a Objetos en JavaScript

La programación orientada a objetos es un paradigma de programación que utiliza la abstracción para crear modelos basados ​​en el mundo real. Utiliza diversas técnicas de paradigmas previamente establecidas, incluyendo la modularidad, polimorfismo y encapsulamiento. Hoy en día, muchos lenguajes de programación (como Java, JavaScript, C#, C++, Python, PHP, Ruby y Objective-C) soportan programación orientada a objetos (POO).

La programación orientada a objetos puede considerarse como el diseño de software a través de un conjunto de objetos que cooperan, a diferencia de un punto de vista tradicional en el que un programa puede considerarse como un conjunto de funciones, o simplemente como una lista de instrucciones para la computadora. En la programación orientada a objetos, __cada objeto es capaz de recibir mensajes, procesar datos y enviar mensajes a otros objetos.__ Cada objeto puede verse como una pequeña máquina independiente con un papel o responsabilidad definida.


## Programación basada ​​en prototipos JavaScript

__La programación basada ​​en prototipos es un estilo de programación orientada a objetos__ en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.

JavaScript tiene varios objetos incluidos en su núcleo, como Math, Object, Array, String, etc. __Cada objeto en JavaScript es una instancia del objeto ``Object``, por lo tanto,hereda todas sus propiedades y métodos.__

### Terminología

- __Clase__: Define las características del Objeto.
- __Objeto__: Una instancia o copia de una Clase.
- __Propiedad__: Una característica del Objeto, como el color.
- __Método__: Una capacidad del Objeto, como caminar, son las funciones del objeto.
- __Constructor__: Es un método llamado en el momento de la creación de instancias.
- __Herencia__: Una Clase u Objeto puede heredar características de otra Clase.
- __Encapsulamiento__: Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
- __Abstracción__: La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
- __Polimorfismo__: Diferentes Clases podrían definir el mismo método o propiedad.
___

### Clase

__JavaScript es un lenguaje basado en prototipos__ que no contiene ninguna declaración de clase, como se encuentra, por ejemplo, en C++ o Java.

### Formas de declarar una clase 
Una manera de definir una clase es mediante una __declaración de clase.__

Para declarar una __`clase`__, se utiliza la palabra reservada __class__ y un __nombre para la clase__, siguiendo __UpperCamelCase__

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

__Alojamiento de clases__

Una importante diferencia entre las declaraciones de funciones y las declaraciones de clases es que las __declaraciones de funciones son alojadas__ y las __declaraciones de clases no lo son__. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otra modo el ejemplo de código siguiente arrojará un ``ReferenceError``:

```javascript
const p = new Rectangle() // ReferenceError
class Rectangle {} // Debería ir antes
```

Otra manera de definir una clase es mediante una __expresión de clase.__

Las clases __son "funciones especiales",__ como las expresiones de funciones y declaraciones de funciones.

En el ejemplo siguiente se define una nueva clase llamada ``Persona``.

```javascript
function Persona() { }
```

Las expresiones de clase pueden ser __nombradas o anónimas__. El _nombre dado a la expresión de clase nombrada es local_ dentro del cuerpo de la misma.

```javascript
// Anónima
var Poligono = class {
  constructor(alto, ancho) {
    this.alto = alto
    this.ancho = ancho
  }
};

// Nombrada
var Poligono = class Poligono {
  constructor(alto, ancho) {
    this.alto = alto
    this.ancho = ancho
  }
};
```

### Cuerpo de la clase y definición de métodos

El contenido de una __clase__ es la parte que se encuentra entre las llaves `{}`. Este es el lugar se definen los __miembros de clase__, como los __métodos__ o __constructores__.

#### Constructor.- al utilizar Declaraciones de clases

El método__ ``constructor``__ es un método especial para crear e inicializar un objeto creado con una ``clase``. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene más de una ocurrencia del método ``constructor``, se arrojará un _Error_ ``SyntaxError``.

Un __constructor__ puede usar la _palabra reservada_ __super__ para llamar al __constructor__ de una _superclase_


#### Métodos estáticos

La _palabra clave_ `static` define un método estático para una clase. __Los métodos estáticos son llamados sin instanciar su clase__ y __no__ pueden ser llamados mediante una instancia de clase (en otras palabras, _se llaman desde la clase y no desde un objeto_). Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

```javascript
class Punto = {
  constructor ( x , y ){
    this.x = x
    this.y = y
  }

  static distancia ( a , b){
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.sqrt ( dx * dx + dy * dy )
  }
}

const p1 = new Punto(5, 5)
const p2 = new Punto(10, 10)

console.log (Punto.distancia(p1, p2)) // 7.0710678118654755
```

### El objeto.- Instancias (ejemplo de clase)

Para crear un nuevo ejemplo de un objeto ``obj`` utilizamos la declaración ``new obj``, asignando el resultado (que es de tipo ``obj``) a una variable para tener acceso más tarde.

En el siguiente ejemplo se define una clase llamada ``Persona`` y creamos dos __instancias__ (``persona1`` y ``persona2``).

```javascript
function Persona() { }

var persona1 = new Persona()
var persona2 = new Persona()
```

Una clase puede ser llamada o invocada __con o sin__ la palabra reservada __`new`__ 

#### __Hacer la invocación `CON NEW`__, el valor de __`this`__ dentro de la función __es un nuevo objeto__ y ese nuevo objeto es retornado
Ej:
```javascript
function Persona(nombre){
  this.nombre = nombre;
 }

var persona = new Persona('Alejandro');
console.log(persona); //Persona {nombre: "Alejandro"}
```

#### __Hacer la invocación `SIN NEW`__, es como llamar una __función simple__, la cual va a __regresar lo que este señalado en la misma.__
Ej:
```javascript

var nombre = 'Juan'; // declaro una variable con el mismo nombre, que el nombre de la propiedad

function Persona(nombre){
  this.nombre = nombre;
 }

var persona = Persona('Alejandro'); // invoco la clase / función llamada Persona, asignandola a la variable persona, pero como una función simple
console.log(persona); //undefined, debido a que en la clase / función Persona no esta señalado que regrese algo, solo se esta declarando la propiedad nombre

*** si revisamos en consola el valor de la variable nombre, va a arrojar Alejandro, en lugar de Juan, debido a que el objeto `this` esta apuntando al `objeto global window`
```

#### Validación para saber si la invocacion de la clase o función fue o no con la palabra reservada `new`

__ECMAScript5__
```javascript
function Persona(nombre){

  if(this instanceof Persona){ // creo una validación donde señalo que si el objeto 'this', es una instancia de la clase Persona, entonces
    this.nombre = nombre; // que herrede la propiedad de la clase
  } else{
    throw new Error('Esta función debe ser utilizada con la palabra reservada "new"'); // que genere un error
  }

  this.nombre = nombre;
 }

var persona = new Persona('Alejandro');
var noEsPersona = Persona.call(persona, 'Alejandro'); // la función call es una función que tiene como primer parametro 
                                                      // el elemento que queremos trabajar como objeto this
                                                      // pero esta forma puede generar errores en algunas funciones.
```
__ECMAScript6__

__NEW.TARGET__.- es una __metapropiedad de un no-objeto, que provee información adicional relacionada con su procedencia (como el new)__

Cuando el __constructor__, de una clase es llamada, __new.target se llena con el operador new__

Si la función "call()" es ejecutada, "new.target", no estará definida ya que no se ejecuto el constructor.

```javascript
function Persona(nombre){ 

  if(typeof new.target !== 'undefined'){ // creo una validación donde evaluo si la meta-propiedad "new.target", es diferente de "undefined", entonces
    this.nombre = nombre; // que herrede la propiedad de la clase
  } else{
    throw new error('Esta función debe ser utilizada con la palabra reservada "new"'); // que genere un error
  }

  this.nombre = nombre;
 }

var persona = new Persona('Alejandro');
var noEsPersona = Persona.call(persona, 'Alejandro'); // app.js:184 Uncaught Error: Esta función debe ser utilizada con la palabra reservada "new"
```
___

### El constructor.- al utilizar Expresiones de clases (funciones)

__El constructor es llamado en el momento de la creación de la instancia__ (el momento en que se crea la instancia del objeto). 

El constructor __es un método de la clase__. En JavaScript, la función sirve como el constructor del objeto, por lo tanto, __no hay necesidad de definir explícitamente un método constructor__. Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.
 
__El constructor se usa para establecer las propiedades del objeto o para llamar a los métodos__ para preparar el objeto para su uso.

En el siguiente ejemplo, el constructor de la clase ``Persona`` muestra un mensaje en consola que dice (__Una instancia de persona__) cuando se crea la instancia de la clase __`Persona`.__

```javascript
function Persona() {
  console.log('Una instancia de Persona')
}

var persona1 = new Persona()
var persona2 = new Persona()
```

### La propiedad (atributo del objeto)

__Las propiedades son variables contenidas en la clase__, cada instancia del objeto tiene dichas propiedades. 

__Las propiedades deben establecerse a la propiedad prototipo de la clase (función), para que la herencia funcione correctamente.__

Para trabajar con __propiedades dentro de la clase__ se utiliza la palabra reservada __`this`__, que se refiere al objeto actual. 
El acceso (lectura o escritura) a una propiedad desde fuera de la clase se hace con la sintaxis: __NombreDeLaInstancia.Propiedad__. 

__Desde dentro de la clase__ la sintaxis es __`this.Propiedad`__ que se utiliza __para obtener o establecer el valor de la propiedad__.

En el siguiente ejemplo definimos la propiedad ``primerNombre`` de la clase ``Persona`` y la definimos en la creación de la instancia.

```javascript
function Persona(firstName) {
  this.primerNombre = firstName;
}

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastián");

// Muestra el primer nombre de persona1
console.log('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
console.log('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Sebastián"
```

### Los métodos

__Los métodos siguen la misma lógica que las propiedades, la diferencia es que son funciones y se definen como funciones.__ 

Llamar a un método es similar a acceder a una propiedad,pero se agrega __`()` al final del nombre del método__, posiblemente con argumentos.

En el siguiente ejemplo se define y utiliza el método ``diHola()`` para la clase ``Persona``.

```javascript
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
  console.log('Hola, Soy ' + this.primerNombre)
};

var persona1 = new Persona("Alicia")
var persona2 = new Persona("Sebastián")

// Llamadas al método diHola de la clase Persona.
persona1.diHola() // muestra "Hola, Soy Alicia"
persona2.diHola() // muestra "Hola, Soy Sebastián"
```

### Herencia - usando prototipos
La herencia en JS __funciona a traves y gracias a la propiedad Prototype__, la cual tiene cada uno de los objetos (arrays, objects, functions) creados en JS; esto __NO aplica para el tipo de dato primitivo (number, strings, booleans, null, undefined)__

__La herencia es una manera de crear una clase como una versión especializada de una o más clases__ (JavaScript sólo permite herencia simple). 
La clase especializada comúnmente se llama hija o secundaria, y la otra clase se le llama padre o primaria. 
En JavaScript __la herencia se logra mediante la asignación de una instancia__ de la clase primaria a la clase secundaria, __y luego se hace la especialización.__

__Todos las propiedades o métodos que queremos que se hereden de una clase a otra, se asignan a la propiedad Prototype__

En el siguiente ejemplo se define la clase Estudiante como una clase secundaria de Persona. Luego se re-define el método `sayHello()` y se agrega el método `sayBye()`.

```javascript
// Definimos el constructor Persona
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

// Agregamos un par de métodos a Persona.prototype
Persona.prototype.caminar = function() {
  alert("Estoy caminando!");
};
Persona.prototype.diHola = function(){
  alert("Hola, Soy" + this.primerNombre);
};

// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura) {
  // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
  // ha establecido correctamente durante la llamada
  Persona.call(this, primerNombre);

  //Inicializamos las propiedades específicas de Estudiante
  this.asignatura = asignatura;
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
// Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype 
// Esto es incorrecto por varias razones, y no menos importante que no le estamos pasando nada
// a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
// es arriba, donde llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias a Estudiante
Estudiante.prototype.constructor = Estudiante;

// Reemplazar el método "diHola"
Estudiante.prototype.diHola = function(){
  alert("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
};

// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function() {
  alert("¡ Adios !");
};

// Ejemplos de uso
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola();    // muestra "Hola, Soy Carolina. Estoy estudianto Física Aplicada."
estudiante1.caminar();   // muestra "Estoy caminando!"
estudiante1.diAdios();   // muestra "¡ Adios !"

// Comprobamos que las instancias funcionan correctamente
alert(estudiante1 instanceof Persona);      // devuelve true
alert(estudiante1 instanceof Estudiante);   // devuelve true
```

#### Cambiando de contexto o alcance al llamar un método de otra clase (prestarse métodos entre clases) (call, bind, apply)

El contexto (o alcance) de una función es por lo general, __window__. Así que en ciertos casos, cuando intentamos referirnos a `this` en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de un método de una clase:
- Usando el método `.bind()`, enviamos la referencia o parametro de la función sin ejecutarla, pasando el contexto o ambito como parámetro. Cualquier parámetro adicional se coloca luego seguido de comas.
- Usando el método `.call()`, ejecutamos inmediatamente la función con el contexto indicado. Cualquier parámetro adicional se coloca luego seguido de comas.
- Usando el método `.apply()`, es similar a `.call()` pero los parámetros adicionales se pasan como un arreglo de valores

Ej: 
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

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
```

otro Eje:
``` Javascript
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

Un modo extra es pasar el contexto del `this` requerido a una variable local y usar ésta dentro del nuevo contexto. Los programadores y _frameworks_ tienden a usar la variable `self` en reemplazo `let self = this`
___

#### Encapsulación

En el ejemplo anterior, Estudiante no tiene que saber cómo se aplica el método caminar() de la clase Persona, pero, sin embargo, puede utilizar ese método. La clase Estudiante no tiene que definir explícitamente ese método, a menos que queramos cambiarlo. Esto se denomina la encapsulación, por medio de la cual cada clase hereda los métodos de su elemento primario y sólo tiene que definir las cosas que desea cambiar.

#### Abstracción

Un mecanismo que permite modelar la parte actual del problema de trabajo. Esto se puede lograr por herencia (especialización) o por composición. JavaScript logra la especialización por herencia y por composición al permitir que las instancias de clases sean los valores de los atributos de otros objetos.

La clase Function de JavaScript hereda de la clase de Object (esto demuestra la especialización del modelo) y la propiedad Function.prototype es un ejemplo de Objeto (esto demuestra la composición)

#### Polimorfismo

Al igual que todos los métodos y propiedades están definidas dentro de la propiedad prototipo, las diferentes clases pueden definir métodos con el mismo nombre. Los métodos están en el ámbito de la clase en que están definidos. Esto sólo es verdadero cuando las dos clases no tienen una relación primario-secundario (cuando uno no hereda del otro en una cadena de herencia).

---

### Herencia - Subclases con extends

La palabra clave `extends` es usada en _declaraciones de clase o expresiones de clase_ para crear una clase hija.

```javascript
class Animal = {
  constructor(nombre) {
    this.nombre = nombre
  }
  hablar() {
    console.log(this.nombre + ' hace un ruido.')
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + ' ladra.')
  }
}
```

También se pueden extender las clases tradicionales basadas en funciones:

```javascript
function Animal (nombre) {
  this.nombre = nombre
}

Animal.prototype.hablar = function () {
  console.log(this.nombre + ' hace un ruido.')
}

class Perro extends Animal {
  ladrar() {
    console.log(this.nombre + ' ladra')
  }
}

var p = new Perro('Mitzie')
p.hablar();
```

#### Llamadas a súper-clase con super

La palabra clave __super__ es usada para llamar funciones del objeto padre.

```javascript
class felino {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + ' hace ruido');
  }
}

class lion extends felino {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' ronronea');
  }
}

var miGatito = new lion('reyLeón')
miGatito.nombre // reyLeón
miGatito.hablar()
// reyLeon hace ruido
// reyLeon ronronea
```