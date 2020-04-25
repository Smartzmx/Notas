
## The 7 -1 Pattern__
  * 7 carpetas diferentes para archivos Sass parciales
    * base
    * components
    * layout
    * pages
    * themes
    * abstracts
    * vendors

  * 1 archivo Sass principal para importar todos los demás archivos en una hoja de estilo CSS compilada.
___

## SASS / SCSS
SASS es un préprocesador de CSS, una extensión de CSS que agrega potencia y elegancia al lenguaje básico.

### instalación SASS
1. Instalar node.js
2. Ir a terminal:
   1. validar instalacion de node: node -v
   2. validar instalacion de npm:  npm -v
   3. npm init .- se va generar un archivo json, donde se va a configurar la información del proyecto
   4. npm install node-sass --save-dev : para generar otro archivo json a raiz de la instalacion del preprocesador SASS
   5. Configurar compile sass.- 
      1. Abrir archivo package.json
      2. agregar en seccion scripts "compile:sass":"node-sass sass/main.scss css/main.css -w"
   6. Abrir termianl y correr comando: npm run compile:sass 

* Pre-procesadores de CSS
  * SASS
  * LESS
  * SCSS

* Variables
  Usualmente se utilizan para: 
  * colores
  * fuentes
  * margens / paddings

__Caracteristicas SASS.-__
  *__Variables:__ para valores reutilizables como colores, tamaños de fuente, espaciado, etc.

  * __Nesting (Anidamiento):__ para anidar selectores uno dentro del otro, lo que nos permite escribir menos código.

  * __Operators (Operadores):__ para operaciones matemáticas dentro de CSS.

  * __Import (Parciales e importaciones):__ para escribir CSS en diferentes archivos e importarlos todos en un solo archivo.

  * __Mixins:__ para escribir piezas reutilizables de código CSS.

  * __Functions (Funciones):__ similares a las mixinas, con la diferencia de que producen un valor que puede ser usado.

  * __Extends (Extensiones):__ para hacer que diferentes selectores hereden declaraciones que son comunes a todos ellos.

  * __Control directives (Directivas de control):__ para escribir código complejo utilizando condicionales y bucles.
