# CSS.- Responsive Design
1. __Fluid grid.-__ todos los elementos deben de estar en unidades relativas para que puedan crecer segun el dispositivo, esto significa __NO usar unidades absolutas como pixeles.__ 

    __*** Utiliza % en lugar de px para todas las longitudes relacionadas con el diseño.__

   1. Float (Todos los navegadores los soportan) usar grid system
   2. Flexbox
   3. CSS Grid

* __Unidades CSS__
   * __em__ se miden __en relación con su tamaño de la fuente principal__, si se usa __para especificar el tamaño de fuente.__
  * __em__ se miden __en relación con el tamaño de fuente actual__, si se usa __para especificar longitudes__;
  * __rem__ siempre se mide en relación con el __tamaño de fuente raíz del documento__
  * __Los navegadores__ especifican un __tamaño de fuente raíz__ para cada página __(generalmente 16px)__
  * Los __porcentajes y los valores relativos__ siempre se __convierten a píxeles__;
    * Los porcentajes se miden en relación con el __tamaño de fuente de sus padres__, si se usan __para especificar el tamaño de fuente__
    * Los porcentajes se miden en relación con __el ancho de sus padres__, si se usan __para especificar longitudes__
  * __vh y vw__ son simplemente __medidas porcentuales de la altura y el ancho de la ventana gráfica o display.__

2. __Flexible images.-__ todas los contenedores y las misma imagenes deben de estar en unidades relativas
3. __Media queries.-__ para cambiar los estilos en ciertos anchos de ventana gráfica (puntos de interrupción o quiebre), lo que nos permite crear diferentes versiones de nuestro sitio web para diferentes anchos.

# Herencias CSS:
  * __La herencia pasa__ los valores de algunas propiedades específicas __de padres a hijos.__
  * Las __propiedades relacionadas con el texto se heredan__: font-family (familia de la fuente), font-size (tamaño de fuente), color, etc.
  * El __valor calculado__ de una propiedad __es lo que se hereda__, no el valor declarado.
  * La herencia de una propiedad __solo funciona si no esta declarado el valor para esa propiedad__.
  * La palabra clave __inherit__ (heredar) __forza la herencia en una determinada propiedad.__
  * La palabra clave __inicial__ __restablece una propiedad a su valor inicial.__
