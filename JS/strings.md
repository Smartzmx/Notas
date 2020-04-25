# Strings
Los __strings__ son cadenas de texto. Para indicar que se está usando una cadena de texto se debe colocar las comillas dobles o sencillas.

## Algunos métodos muy usados en strings:
- __toUpperCase__, que sirve para transformar un string a __mayúsculas.__
- __toLowerCase__, transforma el string a __minúsculas.__
- __charAt__, sirve par obtener un __carácter especifico__ según su posición en la cadena de texto.
- __substr__, obtiene una subcadena de la cadena principal de acuerdo a los dos parámetros que indican:
    _Paramétros o Argumentos_
        1. Posición de carácter de inicio sobre la cadena principal.
        2. Cantidad de caracteres a tomar.
- __startswith__, indica si un string inicia con los caracteres de otro string, regresando true o false según sea el caso.
- __endsWith__, indica si un string termina con los caracteres de otro string, regresando true o false según sea el caso.
- __includes__, determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, retornando true o false según corresponda.

## Atributos o Propiedades de los strings:
- __length__, que nos indica la cantidad de caracteres que tiene un string.
- __String.prototype__, se utiliza para añadir propiedades o métodos a todas las instancias de una clase.

## Concatenar dos o más strings:__
- __el símbolo (+)__ 
- __simbolo acento grave ``seguido de ${nombre de la variable}__ ECMA6

```JavaScript ES5
var nombre = 'Alejandro';
var apellido = 'Suárez Maldonado';

var nombreCompleto1 = nombre + ' ' + apellido; // Alejandro Suárez Maldonado
var nombreCompleto2 = nombre + " " + apellido; // Alejandro Suárez Maldonado
```
## Literal Templates ES6
```JavaScript
var nombreCompleto3 = `El nombres es: ${nombre} ${apellido}`; // El nombre es: Alejandro Suárez Maldonado
```
