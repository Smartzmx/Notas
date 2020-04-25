# Responsive design Vs Responsive Image.-
Responsive designs es que el sitio web sea responsivo en base al dispositivo en el que se este desplagando el mismo, y responsiove image son las imagenes que se adaptan al tamaño del dispositivo en el cual se estan desplegando, utilizando unidades de % o vh, vw, pero no solo es eso, sino tambien, estan involucradas en el performance o rendimiento del sitio web, para evitar cargar imagenes muy pesadas para dispositivos de baja resolucion o dispositivos moviles

* __Opciones para usar responsive images__
    * __Cambio de resolución__.- la misma imagen pero con al menos dos versiones de la misma en distintas resolucion, lo cual impacta en el tamaño de la misma.
    * __Cambio de densidad__.- lo que implica la mayor cantidad de pixeles por pulgada cuadrada que tiene la imagen, a mayor densidad mayor peso. 
      *  Baja resolucion se refiere a que la pantalla utiliza un pixel de la pantalla para mostrar un mismo pixel de la imagen, a menudo se les llama imagenes 1x
      * Alta resolución, se refiere a dispositivos como los smartsphones o pantallas de mac que tienen una alta resolucion o resolucion de retina, y se les conoce como imagenes 2x, debido a que utilizan 2 pixeles del dispositivo o pantalla para mostrar un pixel de la imagen, por lo que el tamaño de la imagen deberá ser el doble del tamaño del contenedor donde se va a mostrar.
   * __Art direction o Direccion de arte__.- se refiere a mostrar una imagen para cada diseño en base al dispositivo, esto es para el diseño de dispositivos moviles se muestra una imagen o la imagen recortada solo mostrando el enfoque principal y para el diseño de dispositivos de escritorio se muestra otra imagen o la imagen completa.


__* Etiquetas HTML para responsive images__
  * __Picture__.- permite cargar dos mas fuentes de imagenes (SRCSET), y la etiqueta __img__ se utiliza para dar una alernativa en caso de que el browser no soporte la etiqueta srcset y/o se utilice un atributo de __media query__
    
    * Dentro de Picture, se utiliza la etiqueta __source o img__, con las propiedad __SRCSET__, la cual permite cargar dos o mas imagenes en base a su tamaño o resolución (DENSITY SWITCHING / RESOLUTION SWITCHING), y __se debe especificar__ la __densidad lo cual es atraves de 1x__ para baja resolucion y __2x para alta resolución__
      * Dentro de las etiquetas source o img, se exiten otras propiedades para señalar cuando presentar una imagen u otra (ART DIRECTION) comos son:
        * __media__, la cual es igual a media queries en CSS
        * __sizes__, la cual permite especificar el ancho de una imagen

Ej.- en este ejemplo __(ART DIRECTION)__ estamos señalando al navegador que en dispositivos menores a 600 pixeles de ancho, utilice la imagen de la etiqueta source, y que en base a la resolucion del dispositivo tome la imagen de baja resolución 1x o la imagen de alta resolución 2x. Y para dispositivos mayores a 600pixeles utilice la imagen de la etiqueta img, con el mismo criterio de resolución.

``` HTML
<picture class="footer__logo">
    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" 
    media="(max-width: 37.5em)"> 
    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" 
    alt="Full logo" src="img/logo-green-2x.png"> 
</picture>
```

Ej.- en este ejemplo __(DENSITY SWITCHING)__ estamos señalando al navegador el ancho de cada imagen para que en base a éste el navegador decida que imaen utilizar, esto es colocando el valor junto con la letra w, para especificar que es el ancho

``` HTML
<div class="composition">

    <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Photo 1"
          class="composition__photo composition__photo--p1"
          src="img/nat-1-large.jpg">
          
    <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Photo 2"
          class="composition__photo composition__photo--p2"
          src="img/nat-2-large.jpg">

    <img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Photo 3"
          class="composition__photo composition__photo--p3"
          src="img/nat-3-large.jpg">
          
          <!--para dispositivos menores a 56.25em, la imagen tomará un 20% de la ancho 
          de la pantalla (vw), 
          
          para dispositivos menores de 37.5em, la imagen tomará el 30% del ancho 
          de la pantalla
          
          para otros casos tomará 300px
          
          ** en caso de no soportar el atributo srcset entrará el atributo src-->
</div>
```