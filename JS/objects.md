# Objetos
Es un tipo de dato complejo que ha sido creado y que tiene ciertas propiedades, atributos o características que lo definen. Las __propiedades o atributos van entre llaves__ y __separados por comas.__

Un atributo se compone de una clave (_key_) y un valor (_value_), que se separan entre sí por dos puntos __`:`__. 

Los valores pueden ser de tipo __string, número, booleano, objetos o funciones__. Cada atributo está __separado del siguiente por una coma__. Un objeto puede tener todos los atributos que sean necesarios.

## Formas de declarar un objeto

__Literal Object:__

```javascript
var viejoFer = {
  //Clave: valor,
  nombre:'Fernando', // -----> 'nombre' es un atributo de el objeto 'viejoFer'
  apellido:'Noel', // -----> 'apellido' es un atributo de el objeto 'viejoFer'
  edad:18// -----> 'edad' es un atributo de el objeto 'viejoFer'
}
```

__New Object:__

```javascript
var viejoFer = new Object()

  viejoFer.nombre ='Fernando'; 
  viejoFer.apellido='Noel';
  viejoFer.edad = 18;

console.log(viejoFer); //{nombre:'Fernando',apellido:'Noel',edad:18}

```

## Formas de crear un objeto

__Function constructor de un objeto__

```javascript
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
```

__Object.create__

```javascript
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// con un solo argumento, el cual permite que herede las propiedades de la propiedad prototype y despues por separado se agregan las propiedades del objeto
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// señalando los dos argumentos del método create
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
```
___

## Crear Métodos en un Objeto
.- un método, es una funcion dentro de un objeto o clase.

Ej.
```javascript
var mark = {
    fullName: "Mark W.",
    mass: 90,
    height: 1.89,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }// Declaro una funcion dentro del objeto, lo cual se convierte en un método del objeto Mark, y al mismo tiempo genero y guardo el valor en una nueva propiedad llamada BMI
} 

var john = {
    fullName: "John M.",
    mass: 80,
    height: 1.70,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }// Declaro una funcion dentro del objeto, lo cual se convierte en un método del objeto John, y al mismo tiempo genero y guardo el valor en una nueva propiedad llamada BMI
}

console.log(john); //{ fullName: 'John M.',mass: 80,height: 1.7,calcBMI: [Function: calcBMI],BMI: 27.68166089965398}
console.log(mark); // {fullName: 'Mark W.',mass: 90,height: 1.89,calcBMI: [Function: calcBMI],BMI: 25.195263290501387}

// hago una estructura de control para evaluar que objeto tiene la mayor cantidad de BMI, utilizando directamente el método de calcBMI de cada objeto, ya que éste genera la propiedad bmi con su valor de cada objeto
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + " has higher BMI than Mark'\s");
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has higher BMI than John'\s");
} else {
    console.log(mark.fullName + " and " + john.fullName + " has the same BMI");
}
//John M. has higger BMI than Mark's
```
___

## Formas de acceder a las propiedades de un objeto / Alterar los valores de las propiedades de un objeto

### Punto:
La foma más común de  __acceder__ a los valores de las __PROPIEDADES de un objeto__, se __utiliza un punto__, después del nombre del objeto, y después del punto se especifica el nombre de la propiedad

```javascript
var obj = {
            numero: 10,
            texto: 'Nuevo texto',
            bjHijo: { 
            }
        }

var valorObj = obj.numero //10
console.log(valorObj); //10

obj.numero = 20;
console.log(obj.numero); //20
```

### Nombre de la propiedad como parametro de la función
Ej: Acceder Colocando directamente __el nombre de la propiedad del objeto en el parámetro de la función__
```javascript
// Dado que solo se requiere el nombre de persona, se podría desglosar así ->
var persona = {
    //Clave: valor,
    nombre:'Fernando', // -----> 'nombre' es un atributo de el objeto 'viejoFer'
    apellido:'Noel', // -----> 'apellido' es un atributo de el objeto 'viejoFer'
    edad:18// -----> 'edad' es un atributo de el objeto 'viejoFer'
}

function impNameObjeto( {nombre} ){
    return console.log(nombre.toUpperCase()); // FERNANDO
}

impNameObjeto(persona);

```

### Utilizando corchetes
Ej: Acceder con la __Opción de corchetes.-__ se utiliza cuando __no sabemos que campo vamos a necesitar__
```javascript
var obj = {
    numero: 10,
    texto: 'Nuevo texto',
    bjHijo: { 
    }
}

var campo = 'texto'; // defino una variable llamada campo por si necesito cambiar el nombre de la propiedad a obtener

console.log( obj[campo]); //Nuevo Texto

obj['numero'] = 20;
console.log(obj.numero); //20
```


## Copiar objetos

### Como se comportan al momento de copiar los datos Primitivos vs Datos Complejos (Objectos, funciones)

#### Valores Primitivos

Los valores primitivos, almacenan la información en la variable, mientras que los objetos solo almacenan la referencia en memoria, es por eso que al copia un objeto solo se copia la refrencia pero no el objeto como tal.

```javascript
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23
console.log(b); // [ 1, 2, 3, 4 ]
```

#### Asignando valores complejos

Pero cuando asignamos valores __NO primitivos o complejos__ (`Object`, `Array` o `Function`), JavaScript copia “__la referencia__”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.

```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // [ 1, 2, 3, 4 ]
console.log(b); // [ 1, 2, 3, 4 ]
```
__Para romper esa referencia, se utiliza el operador `spread`__

Cuando los objetos se pasan como una referencia, estos __se modifican fuera de la función.__ Para solucionar esto __en caso de que no se quiera este cambio__, entonces se puede __crear un objeto diferente__. Esto lo podemos hacer __utilizando el operador `spread`, el cual se indica colocando tres puntos antes del nombre de objeto que se desea copiar__. Ej `...persona`:

```javascript
let persona = {
    name: 'theName',
    age: 20
  };

let persona2 = persona;

persona2.name = 'Alejandro'; // este valor modifica el valor de la propiedad name del objeto persona

console.log(persona); //{name: "Alejandro", age: 20}
console.log(persona2); //{name: "Alejandro", age: 20}, debido a que el valor se pasa por referencia y no por valor
```

__Rompiendo la referencia__
```javascript
let persona = {
    name: 'theName',
    age: 20
  };

let persona2 = {...persona}; // estoy señalando que quiero crear una copia del objeto persona y nombrarlo como un nuevo objeto llamada persona2, sin ligar sus valores como referencia sino como valores

persona2.name = 'Alejandro'; // este valor afecta únicamente al valor de la propiedad name del objeto persona2

console.log(persona); //{name: "theName", age: 20}
console.log(persona2); //{name: "Alejandro", age: 20}
```
___

__En funciones__

```javascript
// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj); 

console.log(age); //27
console.log(obj.city); // San Francisco
```
___

### Copiar Objetos con el Operador spread

```javascript
let persona1 = {
  nombre: 'theName',
  edad: 20
};

let persona2 = {
  nomnre:'Alejandro',
  edad:39,
  direccion:'Jesus Garcia 2933, 44670',
  conduce:true,
  vehiculo:true,
  vegetariano:false,
  casado:false
}; 

persona1 = { 
  ...persona2, // uso el operador spread, para señalar que quiero pasar todas las propiedades del objeto persona2 al objeto persona1
  ...persona1 // indico con el operador spread que quiero conservar las propiedades del objeto persona1
}

console.log(persona1); //{nombre: "theName", edad: 20, direccion:"Jesus Garcia 2933 44670", consuce:true, vehiculo:true, vegetariano:false, casado:false}
console.log(persona2); //{nombre: "Alejandro", edad: 39, direccion:"Jesus Garcia 2933 44670", consuce:true, vehiculo:true, vegetariano:false, casado:false}
```
___

### Métodos Bind, call and apply de un objeto

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


// Another cool example
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

### Asignación / copia por _destructuring_ (_destructuring assignment_)

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

# CODING CHALLENGE

--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

```javascript
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
```


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


```javascript
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
```