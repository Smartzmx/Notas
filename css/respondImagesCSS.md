
# Responsive Images en CSS.- 
Se utiliza para las imagenes de fondo, y se hace a traves de media queries pero incicando __(min-resolution: 192dpi)__, esto señala la resolucion de los dispositivos mac que tienen 192 pixeles por pulgada cuadrada, los cuales son de alta definición de retina.
    
``` CSS
@media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
            rgba($color-primary-light, 0.8),
            rgba($color-primary-dark, 0.8)),
        url(../img/hero.jpg);
    }

    // la condicion de media query es que la pantalla tenga una resolucion de al menos 192dpi y que el ancho de la pantalla sea de al menos 600 pixeles
    con la , señalamos como si fuera un or en un if

    // esta condicion only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),, es la misma que la primera solo que esta es para safari y firefox
```