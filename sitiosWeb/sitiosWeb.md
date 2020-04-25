# __HTML__.-
- Lenguaje de marcado
- A principios de los 80 apareció el **World Wide Web (WWW),** una red de “sitios” diseñada por **Tim Berners-Lee** y algunos **científicos del CERN** en Ginebra que pueden ser buscados y mostrados con un protocolo llamado **HyperText Transfer Protocol (HTTP).**

## Como funciona un sitio web:
1. **Load HTML.-** el navegador carga el archivo inicial de HTML (index.html)
2. **Parse HTML.-** el navegador decodifica el código HTML linea a linea
3. **DOM.-** el navegador genera el Document Object Model, documento que interpreta todas las relaciones entre los distintos elementos (etiquetas, clases, id, pseudo clases, pseudo elementos, etc)del sitio web, como un arbol genealogico de familia (padres e hijos y elementos)
4. **Load CSS.-** se carga el archivo principal de estilos CSS
5. **Parse CSS.-** el navegador decodifica el archivo principal de CSS linea a linea
   1. Elementos CSS.-
      1.  __Selector__ son todos los elementos de HTML. Ej:".my-class"
      2.   __Declaration block__ todo lo que esta dentro de las llaves {...}
      3.    __Declarations__ Ej: "color: blue;"
      4.    __Property__ Ej:"color:"
      5.    __Declared value__ Ej:"20px"

        Ej:
        `.my-class{
            color: blue;
            text-align: center;
            font-size: 20px;
        }`

    5.1. **Resuelve conflictos en las declaraciones tipo CSS** (conocido como cascadeo)
    
    **Cascade (cascadeo).-**
    Proceso de combinar distintas hojas e estilo y resolver confilctos entre las diferentes declaraciones y reglas CSS, cuando mas de una regla aplica para cierto elemnto HTML.

    **Tipos de fuentes de hojas de estilos:**
    * __Author declarations.-__ hoja de estilos generada por el desarrollador web.
    * __User declarations.-__ hoja de estilos generada por los usuarios, por ejemplo cambiar el tamaño de la letra de su navegador, etc.
    * __Default browser declarations.-__ estilos propios de cada browser

    **Criterios Reglas CSS.-**
    1. **Importancia / Peso.-**
        * User __!important__ declarations
        * Author __!important__ declarations
        * Author declarations
        * User declarations
        * Default browser declarations
    
    Si las propiedades de los selectores en conflicto, todos tuvieran el mismo peso de importancia, entonces se pasa al siguiente criterio __Nivel de especificación__
    
    2. **Nivel de especificación**
        * Inline styles
        * IDs
        * Clases, pseudo-classes, atributes
        * Elements, pseudo-elements


    Si los selectores en conflicto, todos tuvieran el mismo peso de importancia y el mismo peso de nivel de especificación, entonces se pasa al siguiente criterio __Orden__
    
    3. **Orden de los archivos de hojas de estilos**
    El último selector declarado es el que tiene el mayor peso y por tanto esa propiedad del selector es la que se aplicaría.

    5.2. **Procesa / calcula los valores finales de los valores CSS** de cada propiedad relacionada a cada elemento HTML, es importante señalar que todo se transforma a pixeles, sin importar la unidad definida en cada propiedad como pueden ser: porcentajes, rem, em, etc.

6. **CSSOM** (CSS Object Model) el navegador genera dicho documento CSSOM
7. **Render tree**.- en conjunto con el DOM y el CSSOM, el navegador genera el render tree.
8. **Website rendering**.- es el archivo del modelo visual del sitio web, en el cual cada navegador toma los elemntos y sus propiedades como position, float, box-model, etc; para generar el render del sitio web.