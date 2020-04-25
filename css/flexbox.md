
# Flexbox.-
1. Display: flex;(Padre)
   1. **flex-direction:** row / row-reverse / column / column-reverse
   2. **flex-wrap:** nowrap / wrap
   
   **flex-box:** row wrap (es igual a utilizar las propiedades por separado de flex-direction y flex-wrap)

2. Items (Hijos)
   1. **flex-basis:** define el **tamaño de un ítem** en términos del espacio que deja como espacio disponible.
   2. **flex-grow:** definida como un entero positivo, los ítems flex pueden **crecer en el eje principal** a partir de flex-basis.
   3. **flex-shrink:** controla como se **contrae**. Si no contamos con suficiente espacio en el contenedor para colocar los ítems y flex-shrink posee un valor entero positivo, el ítem puede contraerse a partir de flex-basis.
   
   **flex: initial;** el ítem se restablece con los valores iniciales de Flexbox. Es lo mismo que flex: 0 1 auto. En este caso el valor de flex-grow is 0, así que los ítems no crecerán más de su tamaño flex-basis . El valor flex-shrink es 1, así que los ítems pueden contraerse si es necesario en vez de salirse de los márgenes. El valor de flex-basis es auto. Los ítems pueden definir un tamaño en la dimensión del eje principal, o bien obtener su tamaño por el contenido del los mismos.

   1. **align-items:** alineará los ítems sobre el eje cruzado.
      * **Vertical** si flex-direction = row / row reverse
      * **Horizontal**, si flex-direction = column / column-reverse
        
      * **Valores:** stretch, flex-start, flex-end, center
  
   2. **justify-content:** es usada para alinear los ítems en el eje principal.
      * **Horizontal** si flex-direction = row / row reverse
      * **Vertical** si flex-direction = column / column-reverse  
        
      * **Valores:** stretch, flex-start, flex-end, center, space-around, space-between
