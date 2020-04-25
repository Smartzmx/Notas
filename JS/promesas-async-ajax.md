# Asincronismo

Antes de iniciar hablar del "asincronismo" en JS, es fundamental recordar la posibilidad de pasar __funciones__ como parámetros a otras funciones.

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama _EventLoop_.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman _callbacks_, y una vez que el navegador ha regresado con la respuesta, el _callback_ asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el _EventLoop_ quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.
___

# Cómo funciona el tiempo en JavaScript

En principio, cualquier tarea que se haya delegado al navegador a través de un _callback_, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. 

Por esta razón el tiempo de espera definido en funciones como __`setTimeout`__, no garantizan que el _callback_ se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

```javascript
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first();
```
___

# Promesas
* es un objeto que mantiene el rastreo de un cierto evento que paso o que va a pasar.
* tambien determina que paso, una vez concluido el evento.
* implementa el concepto de un valor futuro que esperamos.

## Estados de una promesa
* Pending (pendiente)
* Settled / Resolved (liquidado / resuelto).- dentro de este estado el resultado puede ser:
    * FullFilled (completo)
    * Rejected (rechazado)

## Declarando una promesa
Recordamos que la promesa debe ser retornada como parte de la función. También, la promesa se declara como `new Promise`, recibiendo una función como parámetro la cual debe a su vez posee como argumentos dos funciones: la primera en caso de que la promesa se resuelva correctamente y la segunda en caso de error.

```javascript
new Promise ( (resolve, reject) => {}) 
```
Como parametro __pasamos una función asincrona__, la cual va a ejecutarse una vez declarada la promesa. Toma como __parametros (resolve, reject)__, ya que esta función __informa a la promesa si la respuesta fue completa o rechazada.__

Una vez tengamos una respuesta, tenemos que indicar que hacer con esta.

## Consumiendo la promesa

### Then / catch

__Métodos Utilizados donde se declara que hacer con la resupuesta recibida de una promesa ES6__ lo que se conoce como consumir la promesa

* __Then__.- En caso de que recibimos una respuesta correcta.- Resolve(), y dentro de los parentesis colocamos lo que queremos hacer, puede ser un dato como un objeto o arreglo o incluso una función.

* __Catch__.- En caso de que recibimos una respuesta incorrecta.- Reject(), y dentro de los parentesis colocamos lo que queremos hacer con el error, usualmente es arrojar un mensaje.

Ejemplo de una promesa
```javascript

// Declarando la promesa
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// consumiendo la promesa

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas Schmedtmann');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error!!');
});
```
Otro ejemplo

```javascript
function asin (valor) {
  // declaración de la promesa.
  return new Promise( (resolve, reject) => {
    //se valida que el parámetro cumpla las condiciones
    if (typeof(valor) == 'number' & (valor % 2) === 0) {
      let potencia = Math.pow(valor, 2) // Esta sería la petición al servidor
      resolve( potencia )
    } 
    //si no se cumple la condición se manda un error.
    else {
      let error = new Error(`Error de ejecución. Valor era: ${valor}`)
      reject(error)
    }
  })
}

//========== Consiguiendo las respuestas ==========//
let numbers = ['Buenas', 2, 3, 4, 5, 6]
for(let index=0; index<numbers.length; index++){
  asin( numbers[index] )
  .then( respuesta => console.log(respuesta) )
  .catch( error => console.error(error) )
}

// 4
// 16
// 36
// Error: Error de ejecución. Valor era: Buenas
// Error: Error de ejecución. Valor era: 3
// Error: Error de ejecución. Valor era: 5
```


### async function / await
.- el método await solo puede ser utilizado dentro de la funcion async

_Async-await_ es la manera más simple y clara de realizar tareas asíncronas. Con `await` detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar `async` antes de la definición de la función.

__Método Utilizado donde se declara que hacer con la resupuesta recibida de una promesa ES10, lo que se conoce como consumir la promesa__

``` JavaScript

// Declarando la promesa
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// consumiendo las promesas ES10
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas Schmedtmann');
    console.log(related);

    return recipe;
}
getRecipesAW().then(result => console.log(`${result} is the best ever!`));
```

## AJAX.-
AJAX = Asynchronous JavaScript And XML.

AJAX __NO es un lenguaje de programación.__

AJAX solo usa una combinación de:
* Un objeto XMLHttpRequest integrado en el navegador __(para solicitar y/o enviar datos a un servidor web o API (Application Programming Interface))__
* JavaScript y HTML DOM __(para mostrar o usar los datos)__

AJAX es un nombre engañoso. Las aplicaciones AJAX pueden __usar XML para transportar datos__, pero es igualmente común transportar datos como __texto sin formato o texto JSON__.

AJAX __permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos__ con un servidor web detrás de escena. Esto __significa que es posible actualizar partes de una página web, sin volver a cargar toda la página.__

__Características:__
* Leer datos de un servidor web o API (Application Programming Interface): después de que la página se haya cargado
* Actualizar una página web sin volver a cargar la página
* Enviar datos a un servidor web: en segundo plano

__Cómo funciona AJAX__
1. Se produce un evento en una página web (se carga la página, se hace clic en un botón)
2. JavaScript crea un objeto XMLHttpRequest (GET / POST)
3. El objeto XMLHttpRequest envía una solicitud a un servidor web o API (Application Programming Interface)
4. El servidor procesa la solicitud.
5. El servidor envía una respuesta a la página web.
6. La respuesta es leída por JavaScript
7. La acción adecuada (como la actualización de la página) es realizada por JavaScript

Llamado AJAX
````Javascript
const descargarUsuarios = cantidad => new Promise ((resolve, reject) =>{

    // Psar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado AJAX
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api,true);

    //on load
    xhr.onload = () =>{
        if (xhr.status === 200){
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // On Error (opcional)

    xhr.onerror = error => reject(error);

    // Send a la base de datos o API
    xhr.send()

})

descargarUsuarios(20)
    .then( miembros =>{
    console.log(miembros)
    error => console.error(new Error('Hubo un error' + error))
    })
````

### fetch / AJAX
Otra forma de declarar una promesa es a traves de la función fetch()

En el siguiente ejemplo la función `fetch` retorna una promesa (internamente ya fue diseñada así). Las tres funciones `responseFn`,`personaFn` y `errorFn` son _callbacks_, dado que se pasan como argumentos a otras funciones que las utilizan.

```javascript
const URL = 'https://swapi.co/api'
const PEOPLE_URL = '/people/:id'
const NUM_PJs = 10

const responseFn = response => response.json()
const personaFn = persona => {console.log(`Hola yo soy ${persona.name}`)}
const errorFn = error => {console.error('Error: ', error)}

for (let index = 1; index < NUM_PJs; index++) {
  let URL_FULL = `${URL}${PEOPLE_URL.replace(':id', index)}`
  fetch( URL_FULL ) // Entrega una promesa
  .then( responseFn )
  .then( personaFn )
  .catch( errorFn )
}

/* -- El orden de respuesta no se conoce a priori --
Hola yo soy Luke Skywalker
Hola yo soy Darth Vader
Hola yo soy R2-D2
Hola yo soy Owen Lars
Hola yo soy R5-D4
Hola yo soy Beru Whitesun lars
Hola yo soy Leia Organa
Hola yo soy C-3PO
Hola yo soy Biggs Darklighter
*/
```
Otro ejemplo

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
___

### Async functions (try and catch) / AJAX 

```JavaScript
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

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});
```
