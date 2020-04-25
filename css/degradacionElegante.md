# Degradacion elegante
es una condicional para evaluar si el navegador soporta cierta proipiedad en CSS, esto se hace a traes de __@support(){}__, y en caso de que el navegador la soporte aplicará el código dentro de la condicion de support

    
``` CSS
@supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba($color-black, .3);
    }

    // la propiedad backdrop-filter: blur(10px);, es para hacer que el fondo del popup tenga un desenfoque o blur
```