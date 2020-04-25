# Webpack
.- es un empaquetador de módulos estáticos para aplicaciones JavaScript modernas, lo cual se traduce en la optimización del funcionamiento del proyecto web.

## Instalar
* npm install webpack --save-dev // este es el paquete de webpack

* npm install webpack-cli --save-dev // este es el paquete de webpack para tener una interface de comando de linea (CLI)

* npm install webpack-dev-server --save-dev // este es el paquete de webpack que correra ante cualquier cambio el script __npm run dev__, __ver configuracion dev-server__

* npm install html-webpack-plugin --save-dev // este plugin, nos permite inyectar el contendido del archivo html que esta en la carperta de src (carpeta de desarrollo) al index.html que esta en la carpeta dist(carperta de produccion), ver __configuración html-webpack-plugin__

los instalamos solo como una dependencia de desarrollo, ya que no se requiere como dependencia de producción

## Configuración
creamos el archivo en raiz "webpack.config.js"

```JavaScript
const path = require('path') // importamos el modulo de path para crear una ruta absoluta

module.exports = {
    // entry es la ruta del archivo donde va a buscar todas las dependencias en este caso de javascript para ir a cada archivo y juntar todos los archivos de js en este caso y empaquetarlo o consolidarlo en uno solo archivo.

    //podemos especificar uno o mas archivos, ya que también aplica para archivos tipo css, jpg y png
   entry: ['./src/js/index.js'], // ./ significa que estamo en el mismo nivel de carpeta
   // output, señala donde va a colocar el archivo que de como resultado de ese agrupamiento o empaquetamiento
   output: {
       path: path.resolve(__dirname,'dist'),
       filename:'js/bundle.js'
   },
   mode:'development' // esto lo podemos configurar en este archivo o en el archivo package.json en los scripts, lo cual es lo recomendado
}
```

```JavaScript
const path = require('path') // importamos el modulo de path para crear una ruta absoluta

module.exports = {
    // entry es la ruta del archivo donde va a buscar todas las dependencias en este caso de javascript para ir a cada archivo y juntar todos los archivos de js en este caso y empaquetarlo o consolidarlo en uno solo archivo.

    //podemos especificar uno o mas archivos, ya que también aplica para archivos tipo css, jpg y png
   entry: ['./src/js/index.js'], // ./ significa que estamo en el mismo nivel de carpeta
   // output, señala donde va a colocar el archivo que de como resultado de ese agrupamiento o empaquetamiento
   output: {
       path: path.resolve(__dirname,'dist'),
       filename:'js/bundle.js'
   }
}
```
## run webpack (Para hacer prueba de que este configurado correctamente)
npm run webpack

Otra forma es __crear un script dentro del archivo package.json__ y corre el script __npm run dev__
```JavaScript
{
  "name": "forkyfy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack" // script creado
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  },
  "dependencies": {
    "core-js": "^3.6.4",
    "regenerator-runtime": "^0.13.3"
  }
}
```

__Resultado de correr el script de webpack.__- se creo el archivo __bundle.js__
```JavaScript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/js/test.js\");\n// Global app controller\r\n\r\n\r\n\r\nconsole.log(`I'm imported ${_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} from another module`)\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('imported module')\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (23);\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });
```
Finalmente:
__Crear un archivo index.html__, para __conectar el archivo bundle.js__ y __abrirlo en el browser y ver si corre correctamente__

## build script
````JavaScript
{
  "name": "forkyfy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development", // agrege la configuración del modo de prueba o desarrollo
    "build":"webpack --mode production" // cree el script de produccion, el cual a diferencia del de pruebas comprime el archivo bundle.js
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  },
  "dependencies": {
    "core-js": "^3.6.4",
    "regenerator-runtime": "^0.13.3"
  }
}
````
archivo bundle.js comprimido o minificado
````javascript

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t),console.log("imported module");console.log("I'm imported 23 from another module")}]);

````

## Configuracion dev-server
instalación: npm install webpack-dev-server --save-dev

abrir el archivo webpack.config.js y agregar la siguiente configuración:

````javascript
const path = require('path') // importamos el modulo de path para crear una ruta absoluta

module.exports = {
    // entry es la ruta del archivo donde va a buscar todas las dependencias en este caso de javascript juntar todos los archivos de js en este caso y lo va comprimir y consolidar_
    //(empaquetar) en uno solo archivo. podemos especificar uno o mas archivos, ya que también aplica para archivos tipo css,_
    //jpg y png
   entry: ['./src/js/index.js'], // ./ significa que estamo en el mismo nivel de carpeta
   // output, señala donde va a colocar el archivo que de como resultado de ese agrupamiento o empaquetamiento
   output: {
       path: path.resolve(__dirname,'dist'),// la carpeta dist, debe de ser igual a la señalada en la del devServer.contentBase
       filename:'js/bundle.js'
   },
   // configurando el paquete devServer, en el cual contentBase, es la ruta donde se encuentra la carpeta que subiremos_
   //al servisor web / hosting
   devServer: {
       contentBase:'dist' // la carpeta dist, debe de ser igual a la señalada en la del devServer.contentBase
   }
}
````
Crear otro script para correr este paquete devServer

* Abrir archivo package.json y crear un nuevo script 

````javascript
{
  "name": "forkyfy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open" // por convencion este script se llama start, y corre en mode de desarrollo_
                                                            // y open es para que nos abra el navegador
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.3"
  },
  "dependencies": {
    "core-js": "^3.6.4",
    "regenerator-runtime": "^0.13.3"
  }
}

````
Probamos corriendo el script __npm run start__ y debe abrir el navegador con los últimos cambios

## Configuración html-webpack-plugin
````javascript
const path = require('path') // importamos el modulo de path para crear una ruta absoluta

const HtmlWebpackPlugin = require('html-webpack-plugin') // importamos el paquete html-webapck-plugin

module.exports = {
    // entry es la ruta del archivo donde va a buscar todas las dependencias en este caso de javascript juntar todos los archivos de js en este caso y lo va comprimir y consolidar_
    //(empaquetar) en uno solo archivo. podemos especificar uno o mas archivos, ya que también aplica para archivos tipo css,_
    //jpg y png
   entry: ['./src/js/index.js'], // ./ significa que estamo en el mismo nivel de carpeta
   // output, señala donde va a colocar el archivo que de como resultado de ese agrupamiento o empaquetamiento
   output: {
       path: path.resolve(__dirname,'dist'),
       filename:'js/bundle.js'
   },
   // configurando el paquete devServer, en el cual contentBase, es la ruta donde se encuentra la carpeta que subiremos_
   //al servisor web / hosting
   devServer: {
       contentBase:'dist'
   },
   plugins: [
       new HtmlWebpackPlugin({
           filename:'index.html', // es el nombre del archivo que se va a generar ante cualquier cambio
           template:'./src/index.html' // es la ruta donde va a tomar el archivo para indezarlo a la carpeta dist
       })
   ]

}

````
para probarlo corremos __npm run dev__, lo cual debe de crear el archivo index.html en la carpeta dist
