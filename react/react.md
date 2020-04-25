# react
.- es una libreria de Javascript

## Create app in react.- sirve para crear el proyecto y configurarlo
npx create-react-app nombreDeLaCarpetaDelProyecto.- npx (corre las liberias en la última versión)

__se corre este comando cada vez que se crea un nuevo proyecto__

## Librerias de React
* React DOM.- para aplicaciones web. __SOLO SE IMPORTA EN EL ARCHIVO INDEX.JS__
* React.- la libreria escencial para que funcione react.
* React native.- para hacer aplicaciones moviles.
* React srcipt.- es la libreria que contiene todos los comandos para funcione correctamente react.
* React Router(DOM).- es la libreria para poder utilizar la navegacion dentro del sitio web. (npm i --save react-router-dom)
ver documentación https://reacttraining.com/react-router/web/guides/quick-start 

*** Los Hooks solo funcionan cuando el compomente es declarado como funcion, NO FUNCIONA SI EL COMPONENETE ESTA DECLARADO COMO CLASE
Para identificar los HOOKS son los que importamos y comienzan como USE, ejemplo useState, useRouteMatch, useParams

## Scripts configurados por defecto
* npm start.- para inicializar el proyecto.
* npm test.- para hacer pruebas.
* npm build.- para mandarlo a producción, empaquetado para subir a produccion.
* npm eject.- muestra todos los archivos ocultos de la configuración. (No es recomendable ejecutarlo)

## Componentes
__Características__
* Son elementos que se repiten
* Son elementos que tienen una función en especial

__Llamar o enlazar un componente en el archivo app.js__
<List /> // es la manera de enlazar un componenete, en este caso el componente se llama List

## Estructura de archivos
1.- Crear una carpeta components
2.- dentro de la carpeta creamos un archivo .js __(por convencion se utiliza UPPER CAMEL CASE)__

## Importar modulos
__import React from 'react'__ 
import (para importar modulos) nombre de como se refiere a ese modulo (React) from (de) el nombre del modulo y se pone entre ' ' (react)

## Exportar modulos

### Exportar por defecto
.- no podemos exportar por defecto varias cosas
__export default nombreDeLa Constante__ 
__export default List__ // exportamos el modulo, no es necesario colocar la extension a menos que sea un archivo diferente a archivos js

```javascript
// Archivo List.js
const List = (props) => { // declaramos la constante List
    
    return ( // para que funcione se utiliza un parentesis para englobar el código JSX
        <div>
            Mi primer compomente
        </div>
    )
}

export default List // exportamos la constante por defecto

// Archivo App.js

import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import List from './components/List' // no es necesario colocar la extension a menos que sea un archivo diferente a archivos js

function App() {
  return (
    <List /> // es la manera de enlazar un componenete
  )
}

export default App;

```
___

### Exportar en específico
.- para exportar varias constantes 

```javascript
// Archivo List.js
import React from 'react' // import (para importar modulos) nombre de como se refiere a ese modulo (React) from (de) el nombre del modulo y se pone entre ' ' (react)

// el nombre del archivo es igual nombre de la constante
export const List = (props) => { // declaramos la constante List
    
    return ( // para que funcione se utiliza un parentesis para englobar el código JSX
        <div>
            Mi primer compomente
        </div>
    )
}

// Archivo App.js

import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {List} from './components/List' // no es necesario colocar la extension a menos que sea un archivo diferente a archivos js

function App() {
  return (
    <List /> // es la manera de enlazar un componenete
  )
}

export default App;

```