# MVC
Modelo Vista Controlador

* Modelo.- información relacionada a acceso a servidores & bases de datos.
* Vista.- interface de usuario
* Controlador.- modulo donde se controlan tanto los eventos generados por el cliente en la interface, así como, las llamadas, actualizaciones y respuestas por parte del servidor y bases de datos.

## Arquitectura MVC
* es donde se define el alcance del proyecto.
* se realizan las etapas de planeación, desarrollo y pruebas.
* se lanza a producción.

## Estructura de carpetas MVC
1. Dentro de la carpeta js, se crean las carpeta de modelos (models) y vistas (views)
2. Dentro de la carpeta modelos (models), se crean los archivos relacioados a configuraciones de servidores, y bases de datos.
    Por convencion se utiliza UpperCamelCase para nombrar los archivos.
3. Dentro de la carpeta vistas (views), se crean los archivos relacioados a la interface de usuario.
    Por convencion se utiliza lowwerCamelCase para nombrar los archivos.
4. El archivo index.js se utilizará como el controlador.

## Controller

* EventListeners