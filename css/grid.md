### CSS Grid.-

Nos permite generar layouts o distribuciones de contenido en nuestro sitio web de forma eficiente mediante cuadriculas compuesta por filas y columnas

__Conceptos Generales__
* Grid Conatiner: es una etiqueta que hace la función de contenedor o elemento padre, la cual, tiene asignado un display: grid;

* Grid Item: son los hijos directos de un Grid Container y quienes componen la cuadricula que podremos personalizar a nuestra preferencia

* Grid Line: son lineas invisibles divisoras horizontales y verticales dentro de la cuadricula.

* Grid Track: es un espacio entre dos lineas adyacentes, comúnmente llamadas filas y columnas.

* Grid Cell: es un espacio entre 2 filas adyacentes y 2 columnas adyacentes, comúnmente denominada como celda.

* Grid Area: es un espacio rodeado por 4 Grid Lines, el cual, puede ser desde 1 celda a varias.

* Grid Implícito - esta conformado por los elementos HTML que no están siendo contemplados por las filas y columnas definidas dentro de nuestro Grid Container siendo de tamaño automático según su contenido


__Uso y Propiedades__
Para disponer de todas las características que nos brinda CSS Grid primero debemos definir un Grid Container, es decir, definirle a una etiqueta que haga la función de contenedor en nuestro HTML un display de tipo grid. Cada uno de sus hijos directores (Grid Items) compondrán la cuadricula, lo que nos permitirá alinearlos a nuestro antojo.

body { 
	display: grid;
}

__grid-template__
Define el tamaño y disposición de filas y columnas que tendrá el Grid Container. Para definir una cuadricula simplemente colocamos el tamaño de cada una de sus filas y columnas separados por un espacio y las filas de columnas por una pleca (/).

body { 
	display: grid;
	grid-template: 500px 500PX / 200px 600px;
}

Aquí __estaríamos definiendo en el Grid Container__ una cuadricula de 2*2, 2 filas de 500 y 500 pixeles y 2 columnas de 200 y 600 pixeles.


__grid-template-rows:__ define únicamente la disposición de filas mediante su alto.

  __grid-template-rows:__ 500px 500px;


__grid-template-columns:__ define únicamente la disposición de columnas mediante su ancho.

  __grid-template-columns:__ 200px 600px;

__CONSEJOS DE USO__

Para definir el tamaño de las filas y columnas podemos utilizar cualquier unidad de medida, pero hay ciertos valores y funciones que nos pueden ayudar a hacerlo mas fácilmente:

__fracciones (fr)__ - es una unidad de medida exclusiva para CSS Grid que representa una fracción del espacio disponible en el contenedor de la cuadricula.

grid-template: 100px / 100px 1fr 3fr;

Define una cuadricula de 1*3, es decir, 1 fila de 100px y 3 columnas, la primera de 100px y las otras 2 de ancho flexible según el ancho restante en el Grid Container. La segunda columna tendrá un 25% del ancho restante y la tercera 3 veces mas en relación a la segunda, es decir, un 75% del ancho restante.

__auto__- define un tamaño automático para una fila o columna según el alto si es fila o ancho si es columna.

grid-template: 100px / auto auto;

Define una cuadricula de 1*2, es decir, 1 fila de 100px y 2 columnas de ancho definido por su contenido.

__repeat (cantidad, tamaño)__ - esta función nos permite repetir un valor x cantidad de veces.

grid-template: 100px / repeat(4, 250px);

Define una cuadricula de 1*4, es decir, con 1 fila y 4 columnas de 250px.

__repeat (auto-fill, tamaño)__ - si en vez de un numero llenamos la cantidad con el valor de auto-fill nos permitiría crear una cantidad de columnas o filas según quepan en el Grid Container con el tamaño definido.

grid-template: 100px / repeat(auto-fill, 250px);

Define una cuadricula con 1 fila de 100px y una cantidad de columnas basada en el ancho del contenedor, por ejemplo, si nuestro Grid Container fuese de 750px crearía una cuadricula de 1*3, es decir, con 3 columnas de 250px

__minmax ()__ - define un ancho flexible entre 2 números (ancho minimo y maximo) para una fila o columna.

grid-template: 100px / minmax(100px, 500px);

Define una cuadricula de 1*1, es decir, 1 fila de 100px y 1 columnas de 500px solo si el Grid Container tiene un ancho mínimo de 500px, en caso contrario, el ancho de la columna podrá achicarse hasta llegar a los 100px como mínimo.

__grid-gap__
Define un espaciado entre filas y columnas sin añadirlo a los bordes externos de la cuadricula. Puede recibir un valor para ambos o 2 valores separados, uno para filas y otro para columnas;

body { 
	display: grid;
	grid-template: 200px 200px / 200px 200px;
	grid-gap: 10px 5px;
}
Aquí estaríamos definiendo una separación de 10px entre las filas y de 5px entre las columnas de nuestro Grid.

__grid-row-gap__ define el espaciado entre filas.

grid-row-gap: 10px;

__grid-column-gap__ - define el espaciado entre columnas.

grid-column-gap: 5px;

__grid-row | grid-column__
Modifica el flujo normal de un Grid Item definiendo la fila | columna de comienzo y final, permitiendo también de esta manera definir cuantas filas | columnas abarcara.

Estos valores se definen mediante 2 números separados por una /, los cuales hacen referencia a la Grid Line de comienzo y final.

body { 
	display: grid;
	grid-template: 200px 200px / 200px 200px;
}

	.primer-hijo {
		grid-row: 1 / 3;
		grid-column: 2 / 3;
	}
Aquí estamos definiendo un Grid Container o cuadricula de 2*2, en la cual modificamos el flujo normal de uno de sus Grid Item que es una etiqueta con la clase “primer-hijo”. A este elemento le hemos dicho que abarque 2 filas, es decir, que comience desde la Grid Line #1 y termine en la #3 y que en su posición en columnas comience desde la Grid Line #2 y termine en la #3, es decir, se ubique en la 2da columna. El resultado se vería de la siguiente manera:

   1ra     2da     3ra
1ra |-------|-------|
    |       |   x   |
2da |-------|---x---|
    |       |   x   |
3ra |-------|-------|


__grid-row-start__ - define únicamente la Grid Line en filas de comienzo para un Grid Item.

grid-row-start: 1;

__grid-row-end__- define únicamente la Grid Line en filas hasta donde llegara un Grid Item.

grid-row-end: 3;

__grid-column-start__ - define únicamente la Grid Line en columnas de comienzo para un Grid Item.

grid-column-start: 2;

__grid-column-end__ - define únicamente la Grid Line en columnas hasta donde llegara un Grid Item.

grid-column-end: 3;

__CONSEJOS DE USO__

Para __definir la cantidad de filas o columnas__ que abarcara un Grid Item o en donde comenzara podemos utilizar ciertos valores que nos pueden ayudar a hacerlo mas fácilmente:

-1 - hace referencia a todas las filas existentes y lo podemos utilizar para indicarle a un Grid Item que abarque todas las columnas o filas de un contenedor.

grid-row: 1 / -1;

span - hace referencia directamente al numero de filas o columnas que abarcara y solo se puede utilizar con las propiedades grid-row y grid-column.

grid-row: span 3;

auto - define el final o inicio de una fila o columna de manera automática.

grid-column: 2 / auto;

__grid-auto-flow__
Define la dirección en donde se ubicaran los elemento que no estén definidos como filas y columnas dentro del Grid Container, es decir, el Grid Implicito, el cual, por defecto los ubica como filas (row).

body { 
	display: grid;
	grid-template: 200px 200px / 200px 200px;
	grid-auto-flow: column;
}
Aquí estamos definiendo una cuadricula de 2*2, con un tamaño especifico para un numero limitado(4) de hijos directos (Grid Item). En caso que el contenedor tuviese mas hijos de los que hemos definido los añadiría a la cuadricula en forma de filas como opción por defecto, pero en este caso hemos modificado el Grid Container para que los añada como columnas.

__grid-auto-columns__ - define el ancho de todas las posibles columnas no definidas en el Grid Container. grid-auto-columns: 100px;


__grid-auto-rows__ - define el alto de todas las posibles filas no definidas en el Grid Container. grid-auto-rows: 100px;

__grid-template-areas__
Define multiples Grid Area dentro del Grid Container, mediante un nombre personalizado para cada una de ellas, las cuales, nos permitirán modificar de manera dinámica la ubicación y cuantas filas o columnas abarcaran nuestros Grid Items en la cuadricula.

Para definir un Grid Area en nuestra cuadricula utilizamos comillas("") para indicar una fila y adentro definimos las columnas mediante un nombre personalizado o un punto(.) para que la celda valla vacía, y los valores los separamos con un espacio.

body {
	display: grid;
	grid-template: 100px calc(100vh - 200px) 100px / 1fr 1fr;
	grid-template-areas: "menu menu" "contenido publicaciones" ". footer"
}
Aquí estamos definiendo una cuadricula de 3*2 , en la cual, asignamos multiples Grid Areas identificadas con 4 nombres diferentes y un punto (celda vacía) que llenaran la cuadricula cuando los asignemos a los hijos directos (Grid Item) del Grid Container.

__grid-area__ - asigna un Grid Area mediante su nombre a un Grid Item, y se usa en conjunto para poder trabajar con la propiedad grid-template-areas.

	.hijo-menu {
		grid-area: menu;
	}
	.hijo-contenido {
		grid-area: contenido;
	}
	.hijo-publicaciones {
		grid-area: publicaciones;
	}
	.hijo-footer {
		grid-area: footer;
	}
Aquí estamos asignando las Grid Areas que declaramos en el Grid Container a cada uno de los Grid Items, quedando como resultado lo siguiente:

|---------------||---------------|
|              menu              |
|---------------||---------------|
|               ||               |
|   contenido   || publicaciones |
|               ||               |
|---------------||---------------|
|               ||    footer     |
|---------------||---------------|

__align-content | justify-content__
Define la distribución de las filas / columnas que componen el Grid Container, permitiendo alinear estos elementos de manera simétrica en su espacio vertical / horizontal.

Para definir el tipo de alineación de nuestros Grid Items podemos utilizar cualquiera de los siguientes valores:

__flex-start__- ubica la cuadricula al inicio de su espacio vertical (arriba) si la propiedad es align-content o al inicio de su espacio horizontal (izquierda) si la propiedad es justify-content.

__flex-end__ - ubica la cuadricula al final de su espacio vertical (abajo) si la propiedad es align-content o al final de su espacio horizontal (derecha) si la propiedad es justify-content.

__center__ - ubica la cuadricula centrada en su espacio vertical si la propiedad es align-content o en su espacio horizontal si la propiedad es justify-content.

__space-around__ - ubica los Grid Items a lo largo de todo el espacio mediante un espaciado que se suma entre cada fila si la propiedad es align-content o entre cada columna si la propiedad es justify-content.

__space-evenly__ - ubica los Grid Items a lo largo de todo el espacio mediante un espaciado del mismo ancho entre cada fila si la propiedad es align-content o entre cada columna si la propiedad es justify-content.

__space-between__ - ubica los Grid Items a lo largo de todo el espacio mediante un espaciado del mismo ancho entre cada fila o columna pero solamente interno, es decir, sin añadirlo a los extremos de las filas si la propiedad es align-content o de las columnas si la propiedad es justify-content.

__align-items | justify-items__
Define la distribución de los elementos contenidos en los Grid Items permitiendo alinear estos elementos de manera simétrica en su espacio vertical / horizontal.

__Cualquiera de estas 2 propiedades se definen en el Grid Container__ y les podemos asignar los siguientes valores:

__flex-start__ - ubica los elementos al inicio de su espacio vertical (arriba) si la propiedad es align-items o al inicio de su espacio horizontal (izquierda) si la propiedad es justify-items.

__flex-end__- ubica los elementos al final de su espacio vertical (abajo) si la propiedad es align-items o al final de su espacio horizontal (derecha) si la propiedad es justify-items.

__center__ - ubica los elementos centrados en su espacio vertical si la propiedad es align-items o en su espacio horizontal si la propiedad es justify-items.

__stretch__ - los elementos cubren todo el espacio que tienen disponible verticalmente si la propiedad es align-items o horizontalmente si la propiedad es justify-items.

Para __alinear un Grid Item de manera individual__ podemos utilizar las siguientes propiedades:

__align-self__ - ubica los elementos de un Grid Item especifico en su espacio vertical.

__justify-self__ - ubica los elementos de un Grid Item especifico en su espacio horizontal.


## Activar la cuadrícula CSS-Grid
1. Definir en el contenedor padre (container) las siguientes propiedades:
     * __display:__
       * __inline-grid__	Establece una cuadrícula con ítems en línea, de forma equivalente a inline-block.
       * __grid__	Establece una cuadrícula con ítems en bloque, de forma equivalente a block.
     * __grid-template-columns y grid-template-rows__, que sirven para __indicar las dimensiones de cada celda__ de la cuadrícula, diferenciando entre columnas y filas
       * __grid-template-columns__	[c1] [c2] ...
       * __grid-template-row__	[f1] [f2] ...
  
       * __repeat()__ para indicar repetición de valores, indicando el número de veces que se repiten y el tamaño en cuestión, se utilizan en __grid-tempalte-colum y grid-template-row__
         *  repeat([núm de veces], [valor o valores]);
  
        Nota: __grid-auto-columns y grid-auto-rows__ para darle un __tamaño automático a las celdas de la cuadrícula.__ 
  
     * __Unidades nuevas en CSS Grid__
        * __fr__: Unidad fracción restante, es muy similar al %
  
      * __Grid por áreas__.- es posible __indicar el nombre y posición concreta de cada área__ de una cuadrícula.
        * __grid-template-areas__	Indica la disposición de las áreas __en el grid padre o contenedor__. Cada texto entre comillas simboliza una fila.
        * __grid-area__	Indica el nombre del área __para referenciar al grid-template-area del contenedor padre__. __grid-area se usa sobre ítems hijos del grid.__
      * __Grid con huecos / margins__.- Para especificar los huecos (espacio entre celdas podrían ser los margins) podemos utilizar las propiedades __grid-column-gap y/o grid-row-gap__
        * __grid-column-gap__	Establece el TAMAÑO de los huecos entre columnas (líneas verticales).
        * __grid-row-gap__	Establece el TAMAÑO de los huecos entre filas (líneas horizontales).
        * __grid-gap__.- es el atajo __grid-gap: filas columnas__
  
      * __Posicionar el contenedor padre.-__
        * __justify-content__	Distribuye los elementos en el eje __horizontal.__ 
          * __Valores:__ start | end | center | stretch | space-around | space-between | space-evenly
        * __align-content__	Distribuye los elementos en el eje __vertical.__
          * __Valores:__ start | end | center | stretch | space-around | space-between | space-evenly
  
      * __Posicionar a los items (hijos).-__
        * __justify-items__	Distribuye los elementos en el eje __horizontal.__ 
          * __Valores:__ start | end | center | stretch | space-around | space-between | space-evenly
        * __align-items__	Distribuye los elementos en el eje __vertical.__
          * __Valores:__ start | end | center | stretch | space-around | space-between | space-evenly
        * En el caso de que queramos que uno de los ítems hijos tengan una distribución diferente al resto, aplicamos la propiedad __justify-self__ o __align-self__ __sobre el ítem hijo en cuestión__, sobreescribiendo su distribución.
2. Propiedades para ítems hijos
   * __justify-self__	Altera la justificación del ítem hijo en el eje __horizontal__.
   * __align-self__	Altera la alineación del ítem hijo en el eje __vertical__.
   * __grid-area__	Indica un nombre al área especificada, para su utilización __con grid-template-areas__.
  
 * Posición de los hijos de la cuadrícula __donde va a comenzar o terminar una fila o columna__.
   * __grid-column-start__	Indica en que columna empezará el ítem de la cuadrícula.
   * __grid-column-end__	Indica en que columna terminará el ítem de la cuadrícula.
   * __grid-row-start__	Indica en que fila empezará el ítem de la cuadrícula.
   * __grid-row-end__	Indica en que fila terminará el ítem de la cuadrícula.
