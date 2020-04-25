# EXECUTION CONTEXTS / CONTEXTO DE EJECUCIÓN
.- Es una caja o un contenedor que almacena variables y en él, __un pedazo de nuestro código es evaluado y ejecutado.__ (código que __NO__ está dentro de ninguna función.)

1.- Se crea el __Global Execution Context / Contexto de Ejecución Global__, en el navegador es la __ventana objeto__

2.- __Cada función crea su propio contexto de ejecución__, y se va apilando una encima de otra conforme la función lo requiere, esto es..., si una función (función padre) llama a otra función (función hijo), la segunda función(función hijo) se apilará arriba de la primera función (función padre) y este contexto existirá hasta que la función hijo devuelva algo, y así sucesivamente hasta llegar de nuevo a la venta objeto o contexto de ejecución global.

__Dentro de cada CONTEXTO DE EJECUCIÓN SE CREA EL HOISTING__


## HOISTING

1. __Crea la fase__
    A) Creación y encendido del objeto variable (VARIABLE OBJECT)
        Se crea el objeto de argumento, que contiene todos los argumentos que fueron pasados ​​al funcion.
        El código se escanea en __busca de declaraciones de funciones__: para cada función __sus propiedades se crean en el Objeto Variable, apuntando a la misma función.__
        El código se escanea en __busca de declaraciones de variables__: para cada variable __sus propiedades se crean en el Objeto Variable y se establecen sus valores como INDEFINIDO / UNDEFINED__

    B) Creación y encendido de la cadena de alcance (SCOPING CHAIN)
        El alcance responde las pregunta __"¿dónde podemos acceder a un determinada variable?"__
        __Cada nueva función crea un ámbito__: el espacio / entorno, en que las variables que define son accesibles.
        __Alcance léxico:__ una función que se encuentra léxicamente dentro de otra función __obtiene acceso al alcance de las funciones externas (FUNCIONES PADRES)__.

    C) Determine el valor de la variable __"this"__
        __En TODAS Las funciones regulares__ la palabra clave __this__ apunta al objeto global,(el objeto de la ventana, en el navegador).
        En los __MÉTODOS__ esta variable __apunta al OBJETO que está llamando el método.__
        La palabra clave __this NO TIENE UN VALOR ASIGNADO hasta una función donde está definido se LLAMA O EJECUTA realmente.__

2. __Ejecutar la fase__
    El código de la funcion que generó el contexto actual de ejecución y encendido se ejecuta línea por línea.

    