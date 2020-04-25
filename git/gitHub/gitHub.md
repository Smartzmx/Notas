# GitHub
GitHub es una opción para alojar proyectos utilizando el sistema de control de versiones Git. GitHub sería la red social de código para los programadores, tu propio curriculum vitae.

## Link https://github.com/

## Comandos Git Local a Git Hub

* __git remote add origin la ruta del repositorio de github__ .- vincular el repositorio local con un repositorio remoto

  * git remote __-v__ .- Revisar los repositorios remotos que tenemos en nuestro repositorio local.

* __git push -u origin nombre de la rama__.- -u nos ayuda a que la próxima vez que queramos hacer un push no necesitemos especificar la rama
  
    __Nota:__ Subir cambios a producción / unir a la rama master.- ES ACONSEJABLE HACER UN TAG

* __tag__.-
    Variantes:
        __git tag -a nombre del tag -m " descripción del tag"__.- crear un tag
        __git tag -a nombre del tag # commit -m " descripción del tag"__ .-  Para agregar un tag a un commit en particular
        __git push --tags__ .- Subir los tags a github

* __git pull origin master__ .- bajar / actualizar todos los cambios del git remoto a git local

  * __git pull origin master --allow-unrelated-histories__ .- forza el proceso de fusionar los archivos del repositorio remoto con los archivos del repositorio local como si fuera un merge.

* __git clone la ruta que da github__ .- para clonar un repositorio. 
    __Nota:__ si le quiero cambiar el nombre a la carpeta que me baje solo coloco el nombre al final de la sentencia de git clone..

* __git remote remove origin__ .- Borrar el git remoto

* __git branch -a__ .- ver todas las ramas incluso las remotas

* __git branch -r__ .- ver solo las ramas remotas

* __git branch__ .- ver todas las ramas del git local

* __git remote prune origin__ .- para borrar la basura que quedo de las ramas del gitHub

* __git fetch__ .- Baja todos los archivos a nuestro repositorio local, __sin hacer un merge__
  
* __git grep la palabra a buscar__ .- busca en tu rama la palabra señalada:
  * Con __git grep -n__ color nos saldrá un output el cual nos dirá en qué línea está lo que estamos buscando, en este caso la palabra color
  * Con __git grep -c__ color nos saldrá un output el cual nos dirá cuántas veces se repite esa palabra, en este caso la palabra color, y en qué archivo.
  * Si queremos buscar cuántas veces utilizamos un atributo de HTML lo hacemos con __git grep -c__ "<p>".

* __git log "la palabra a buscar"__.- para buscar esa palabra en los commits

* __git blame nombre del archivo -c__ .- permite ver la historia de cambios del archivo señalando el usuario por cada linea
  *  __git blame nombre del archivo -l35.60 -c__ .- te muestra la historia de cambios por linea del archivo pero solo de la linea 35 a la 60

## Actualizar archivos Git local a GitHub
  1. __git fetch__ .- Baja todos los archivos a nuestro repositorio local, sin hacer un merge
  2. __git status__ .- Ver si hay algún cambio hecho en el repositorio local / remoto que falte actualizar
  3. __git pull__ .- unir las ramas de los cambios hechos en el repositorio remoto
  4. __git push__ .- para subir los cambios del repositorio local al remoto

## Clonar un repositorio de Github a Git local
  1. Hacer click en clone para obtener la ruta
  2. git clone la ruta nombre de la carpeta en tu git local

## Fork .- Crear copias de repositorio ajeno para hacer alguna contribución o trabajar directamente como si fuera un repositorio propio
  1. Hacer click en el tenedor .- Ya esta agregado a tu cuenta, y ya tienes acceso total a este repositorio

     * Opciones Fork.-
        Hacer click en pull request.- 
            Hacer un pull request, es como una rama adicional al repositorio original pero que los dueños de ese repositorio no saben que existe hasta que tu hacer un pull request para que acepten los cambios que tu consideras beneficos para el proyecto.
            
        El dueño lo evalua y te manda comentarios sobre los cambios o cierra tu pull request por que no le interesa tus cambios propuestos

  2. Actualizar el fork del repositorio original al de nosotros
     1. validar que estemos conectados .- __git remote -v__
     2. Ir al repositorio original y hacer click en el boton __clone, obtener el link__
     3. Ir a nuestra terminal .- 
        1. git remote add upstream link del repositorio original
        2. git remote -v .- deben aparecer 4
        3. git pull upstream master (el nombre de la rama descargar)
        4. editar commit
        5. confirmacion del merge
        6. git push para subir los cambios a nuestro repositorio remoto

## Como trabajan las Empresas o Equipos con GitHub
  1. Un solo repositorio
  2. Crear una rama independiente por cada miembro del equipo
      1. Revisar el trabajo de otros compañeros
          1. git fetch
          2. git branch -a .- para ver todas las ramas del repositorio
          3. git checkout rama del compeñero .- para revisar su trabajo

      2. Aprobar los cambios de x compañero a la rama master
          * Opción 1
              1. git checkout master .- ir a la rama master
              2. git merge rama del compañero .- unir la rama del compañero a la rama master
              3. git push .- Subir los cambios al repositorio remoto
          
          * Opción 2
              1. git push origin rama del compañero
              2. estando en GitHub, hacer un pull request para que el dueño pueda aceptar los cambios de esa rama

## Interface web
  Code .- Muestra el contenido del repositorio
      Es importante poner una descripción de cada repositorio

  Topics .- Permite crear palabras claves que están relacionadas al proyecto o repositorio para que al momento de buscar algo en GitHub lo muestre en caso de ser publico

  Issues .- Para hacer preguntas / comunicarse con las personas administradoras de un repositorio

  Pull requests .- Solicita permiso para aceptar un pull requests de una persona que no tiene acceso al repositorio

  Projects .- Muestra el flujo del proyecto

  Wiki .- explica como funciona el repositorio

  Insights .- Tipos de información estadística / gráficas

  Settings .- Configuración del repositorio

  Watch .- Notifica los cambios realizado en el repositorio pendientes de aceptar

  Star .- es como los likes en facebook

  Fork .- Crear copias de repositorio ajeno para hacer alguna contribución o trabajar directamente como si fuera un repositorio propio; es como hacer un pull request, es como una rama adicional al repositorio original pero que los dueños de ese repositorio no saben que existe

  Interface dentro de un archivo.-
      RAW .-  Ver el archivo como un archivo de texto plano
      Blame .- Permite ver los usuarios que realizaron cambios a lo largo del tiempo
      History .- Permite ver en que commits en particular esta involucrado ese archivo y si hay comentarios ... cuantos

  Crear un archivo
  * en la rama master
    1. Editar el mensaje del commit
    2. Commit aceptado
  * en una rama nueva
      1. Editar el mensaje del commit
      2. Editar el nombre de la rama
      3. Proponer / Crear el archivo, para no afectar la rama principal y que sea revisado
      4. Colocar una descripción del nuevo archivo
      5. Hacer click en el boton crear pull request
         1. GitHub va a revisar si hay algún conflicto o no al querer unir las ramas, si lo hay hay que resolverlo manualmente
         2. Antes del siguiente paso, podemos hacer click en el link del commit y observar los cambios
            1. En cada linea del código podemos dejar comentarios, para hacer conversaciones en cada linea del código
               1. Opciones de comentarios:
                  * Comentar .- Solicitar retroalimentación o para poder dejar un comentario simple
                  * Aprobar .- Solicitar retroalimentación y aprobación para agregar ese archivo a la rama master
                  * Solicitar retroalimentación antes de unir el archivo a la rama master

      6. Elegir la opción del botón crear merge commit, es la mas recomendada
      7. Editar comentarios del commit
      8. Guardar y borrar la rama con la que se creo este archivo si es que ya no la necesitamos
   
  Renombrar archivo
  * Hacer click en editar
  * Editar commit
  * Guardar

  Borrar archivo
  * Hacer click en bote de basura
  * Editar commit
  * Guardar

  Tags / Realeses

  Tags
  * Señalar los cambios a traves de versiones en el proyecto o app
    *** ver documentación de versiones Semantic Versioning 2.0.0

  Realeses
  Es para hacer una explicación a mayor detalle de un tag, de hecho se convierte un tag a un realese, a través de editar tag

  * Prerealese .- Pendiente de autorizar para sacar la versión
  * Realese .- Listo para produccion como una versión

  Issue
  * Usos.- para crear y dar seguimiento a puntos a resolver / administrador de tareas.

  * Crear un issue.- presionar el botón New Issue

  * Cerrarlo.- Close issue

  * Re-abrirlo.- Re-open issue

  * Cerrar por completo un issue.- Lock conversation
      Solo los que sean colaboradores pueden desbloquear la conversación.

  * Ligar un issue o pull request a un commit .- git commit -am"Mensaje fixes #issue" 
      Palabras que ligan o señalan que el issue ya fue resuelto son:
          fixes / closes / resolves

  Labels
      Uso: para administrar de una mejor manera los issues

  Milestone.- son un grupo de issues, actividades, características o una fecha importante dentro de un periodo de tiempo.
  * Ejemplo.- 
    * Beta launch.- errores que necesitamos arreglar antes del lanzamiento.

    * Octubre.- Issues que nos gustaría que funcionaran en Octubre y es una excelente forma de mantener el enfoque.

    * Re-diseño.- issue relacionado al diseño del proyecto, es una excelente forma para mantener las ideas y trabajos enfocados en el mismo punto.
    * https://guides.github.com/features/issues/

  Agregar colaboradores a un repositorio.-
  * Settings
    *Collaborators
      * Buscarlo
        * Add Collaborators
          * Confirmar / Aceptar invitación por correo

  Eliminar un colaborador de un repositorio.-
  * Settings
    * Collaborators
      * Cruz de eliminar
  
  Nota: los cambios realizados por ese colaborador no se borran

  Asociar un commit a un issue
  * Selecciono el commit a afectar
  * Agrego un nuevo comentario y en el contenido del mensaje colo # y el número de issue al que lo quiero ligar / asociar.
  * Enviar commit

  Wiki.- es una sección donde se coloca documentación de ayuda para entender un poco mejor como funciona el proyecto
  * La primera pagina, siempre debe de llamarse Home
    * Se puede editar con código Markdown
  
  Nota: las wikis son publicas, esto es que cualquier persona puede modificar la información de las paginas wiki; simpre y cuando no este restringuido la configuración (settings) Restrict editing to collaborators only

  Proyectos.-
  * GitHub te permite administrar tus proyectos, creando y ligando con los issues tanto abiertos como cerrados

  * Puedes administrarlos como tú desees:
    * Por tareas / Por usuario / Por departamento / etc.

  GitHub Pages.- paginas web para tu organización
  * Pasos para crearla:
    * Opción 1.-
      1. Crear un nuevo repositorio
          * Tiene que tener el mismo nombre del usuario, seguido por .github.io
              Ejemplo: smartzmx.github.io

      2.  Opción 1.- 
          1.  Elegir un tema desde github:
              1. Agrego un tema a la pagina creada, de las predeterminadas
                * Settings
                  * Github Pages
                    * Add Theme

              2. Reviso archivos creados en mi estructura de mi pagina
                 * Code

          2. Formato HTML / CSS / JS
              1. Clonar mi repositorio a git local
                  git clone https//.... nombre de la carpeta
              2. git s .- para validar que este correcto
              3. Creo / copio mis archivos a la carpeta creada en el paso 1
              4. Subo mis archivos a github
                  1. git add .
                  2. git commit -m "Mensaje"
                  3. git push
              5. Reviso en GitHub que esten cargados los nuevos archivos
              6. Reviso mi github pages para validar que este correcto
                  1. settings
                  2. github pages, link de la pagina
    * Opción 2.-
      1. Ir al repositorio donde se quiere crear la página
      2. Settings
           * GitHub pages / seleccionar Source, qu es donde se van a colocar los archivos HTML / CSS / JS, de dicha página.
  
    Insights.- Pulse
      Ver información del proyecto / repositorio no mayor a un mes.
      * Otras opciones de Insight, muestra como estan trabajando los miembros del equipo, con estadística

  Gist.- crear una colección de códigos
        