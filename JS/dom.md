# DOM
Document Object Model

## Cambiar el valor de un elemento HTML
Se utiliza el objeto __document__, y su método __querySelector__, en el cual se señala el elemento a manipular __a traves de el nombre de la clase o id__; y con el método __textContent cambiamos el valor en texto plano__ del elemento seleccionado.

__IMPORTANTE.-__ el método querySelector, __solo va a manipular al primer elemento que tenga la clase o id__

Existe otro método para cambiar el contenido de un elemento HTML, __innerHTML__, en el cual __se le deben de colocar las etiquetas o tags HTML y su valor, como si fuera un STRING__

```javascript
document.querySelector('#id').textContent = 5
document.querySelector('.clase').innerHTML = '<div>5</div>'
```

## Cambiar el valor de un atributo de CSS
Se utiliza el objeto __document__, y su método __querySelector__, en el cual se señala el elemento a manipular __a traves de el nombre de la clase o id__; y con el método __style__ seguido de la __propiedad a cambiar__ y por último se especifica __su nuevo valor para dicha propiedad, ésta SIEMPRE como un string__

__IMPORTANTE.-__ el método querySelector, __solo va a manipular al primer elemento que tenga la clase o id__

```javascript
document.querySelector('#id').style.display = 'none'
```

## Cambiar el valor de un atributo de una etiqueta HTML
Se utiliza el objeto __document__, y su método __querySelector__, en el cual se señala el elemento a manipular __a traves de el nombre de la clase o id__; y se utiliza el método __src__, para despues especificar __su nuevo valor para dicho atributo del elemento HTML, en este caso una etiqueta img se le está cambiando la ruta señalada en su propiedad o atributo src__

__IMPORTANTE.-__ el método querySelector, __solo va a manipular al primer elemento que tenga la clase o id__

```javascript
document.querySelector('.dice').src = 'dice-1.png';

// En el caso de que la ruta sea una variable podemos utilizarlo de la siguiente manera:

var dice = Math.floor(Math.random() * 6) + 1;

var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
```

## Leer u Obtener el valor de un elemento HTML
Declaramos una variable para guardar ese valor, despues definimos esa variable utilizando el objeto __document__, y su método __querySelector__, en el cual se señala el elemento a manipular __a traves de el nombre de la clase o id__; y con el método __textContent__ del elemento seleccionado.

__IMPORTANTE.-__ el método querySelector, __solo va a manipular al primer elemento que tenga la clase o id__

```javascript
var x = document.querySelector('#id').textContent
var y = document.querySelector('.clase').innerHTML
```

## Eventos
Se utiliza el objeto __document__, y su método __querySelector__, en el cual se señala el elemento a manipular __a traves de el nombre de la clase o id__; y con el método __addEventListener__ especificamos el tipo de evento que va disparar la función __IMPORTANTE (SOLO ESPECIFICAMOS EL NOMBRE DE LA FUNCIÓN)__, la cual es una funcion __callback__ (una función que se pasa a otra función como un argumento), __o podemos decarar una función ANONIMA__ (función sin nombre), en cuanto el evento sea activado

__IMPORTANTE.-__ el método querySelector, __solo va a manipular al primer elemento que tenga la clase o id__

__IMPORTANTE.-__ se recomienda utilizar la opcion de función anonima para los eventos, ya que solo van a existir dentro del ambito declarado.

```javascript
document.querySelector('#id').addEventListener('click',nombreDeLaFuncion)

document.querySelector('#id').addEventListener('click', function(){
    
})

```

# Agregar o remover una clase de un elemento HTML

__Utilizando el método add o remove__
.- el cual solo agrega o remueve la clase bajo cierto evento.

```javascript
document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
```

__Utilizando el método toogle__
.- el cual evalua en automático si el elemento tiene o no dicha clase; y si la tiene la remueve; si no la tiene la agrega; esto es util cuando queremos que en base a un evento agrege o remueva de todos los elemntos la clase active.

```javascript
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
```
