# Plantillas de cadena de texto:
Una forma más avanzada de plantillas de cadenas de texto son aquellas que contienen una función de postprocesado.
Con ellas es posible modificar la salida de las plantillas, usando una función. 

El __primer argumento__ contiene un __array__ con las cadenas de texto de la __plantilla__ ("Ese " y " es un " en el ejemplo). 
El __segundo y subsiguientes argumentos__ con los valores procesados ( ya cocinados ) de las __valores de las variables de la plantilla__ (en este caso "Mike" y "28"). 

Finalmente, la función devuelve la __cadena de texto manipulada.__

El nombre "tag" de la función no es nada especial, se puede usar cualquier nombre de función en su lugar.

__Tags predeterminados:__ 
- __raw__.- el método  String.raw() permite crear cadenas de texto en crudo tal como serían generadas por la función por defecto de plantilla, concatenando sus partes.

```Javascript
var str = String.raw`¡Hola\n${2+3}!`;
// "¡Hola\n5!"

str.length;
// 9

str.split('').join(',');
// "¡,H,o,l,a,\,n,5,!"
```

__Nota:__ los tags solo funcionan con templates literal (plantillas de cadenas de texto), lo cuales usan la sintaxis de acento grave __``__

```JavaScript
var persona = 'Mike';
var edad = 28;

function myTag(strings, expPersona, expEdad)
{
  var str0 = strings[0]; // "Ese "
  var str1 = strings[1]; // " es un "

  // Hay tecnicamente un String después
  // la expresión final (en nuestro ejemplo)
  // pero es vacia (""), asi que se ignora.
  // var str2 = strings[2];

  var strEdad;
  if (expEdad > 99)
  {
    strEdad = 'viejo';
  }
  else
  {
    strEdad = 'joven';
  }

  // Podemos incluso retornar un string usando una plantilla de cadena de texto
  return `${str0}${expPersona}${str1}${strEdad}`;
}

var salida = myTag`Ese ${ persona } es un ${ edad }`;

console.log(salida);
// Ese Mike es un joven
```
---