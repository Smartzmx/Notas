# NodeJs
.-es un entorno de ejecución (run enviroment) para JavaScript construido con el motor de JavaScript V8 de Chrome.

## link descarga 
https://nodejs.org/es/ 

## npm 
Node package manager.- 
* permite instalar de manera rapida y sencilla paquetes o dependencias de desarrollo
    * webpack.- es un paquete de módulos estáticos para aplicaciones JavaScript modernas, lo cual se traduce en la optimización del funcionamiento del proyecto web.
    * babbel.- es una set de herramientas que se utiliza para convertir el código ECMAScript 2015+ o superior en una versión de JavaScript compatible con versiones anteriores.

* permite crear scripts

### npm init
inicializar un proyecto con npm, en el cual se crean los siguientes archivos y carpetas:
    * package.json.- archivo que contiene la información general del proyecto, dependencia de prueba y produccion, así como scripts
    * package-lock.json.- archivo con el arbol de todas las dependencias instaladas en el proyecto
    * node modules.- carpeta donde se almacenan todos los modulos de node instalados en el proyecto

### npm install
se corre cuando se baja un proyecto por primera vez y para que funcione correctamente debemos instalar todas las dependencias señaladas en el archivo package.json

### npm uninstall nombreDeLaDependencia --save (para dependencias de produccion de ese proyecto) --save-dev (para dependencias de desarrollo de ese proyecto) --global (para entorno global de la computadora) o -g que es lo mismo que --global
desinstalar una dependencia, el cual se ve reflejado en el archivo package.json

