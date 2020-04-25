# GIT
Git es un __software de control de versiones diseñado__ por __Linus Torvalds__, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.

## Instalación.- https://git-scm.com/

## Comandos generales:
 * __git --version__ .- ver la version instalada.

* __git help__ .- explica de manera general que comandos existen y para que sirve cada uno de éstos.
git branch
* __git config__ .- 
  * __Grabar variables generales__:
    * email.- __git config --global user.email "smartzmx@gmail.com"__
    * usuario.- __git config --global user.name "smartzmx"__

  * __Crear atajos / alias para git:__
    * log.- __git config --global alias.lg "log --oneline --decorate --all --graph"__
    * status.- __git config --global alias.s "status -s -b"__
      Comentario.- git config --global alias. el nombre de mi comando, en este caso es lg y entre comillas el comando completo tradicional que quiero ligar a mi comando "log --oneline --decorate --all --graph"
          
  * Ver __que alias tenemos configurados__:
    * __git config -global -e__
    * __git config -l__
      
  * __Validar el registro de configuración__:
    * __git config --global e__

* __git init__ .- para __inicializar / crear un repositorio local__ / proyecto inicial en git.
  * Este comando se encargará de dos cosas: 
    * primero, __crear una carpeta .git__ donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto.
    * segundo, __crear un área en la memoria RAM, que conocemos como Staging__, que guardará temporalmente nuestros archivos (cuando ejecutemos git add .) y nos permitirá, más adelante, guardar estos cambios en el repositorio (git commit -m"...").

* __git status__ .- Saber si existen cambios o archivos nuevos que no han sido agregados al repositorio.
  * __git status -s__.- Forma resumida para ver los archivos que han sido modificados.
  * __git status -s -b__ es igual a __git branch__ .- Para saber __en que rama estamos trabajando.__

* __Ciclo de vida o estados de los archivos en Git:__
Cuando trabajamos con Git, nuestros archivos pueden vivir y moverse entre __4 diferentes estados__ :
  * __Archivos Tracked:__ Son los archivos que viven dentro de Git, __no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio__ gracias a los comandos git add y git commit.
  
  * __Archivos Staged:__ __Son archivos en Staging__. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. 
  
    __Git ya sabe de la existencia de estos últimos cambios pero todavía no han sido guardados definitivamente en el repositorio__ porque falta ejecutar el comando git commit.

  * __Archivos Unstaged:__ Entiendelos como archivos “Tracked pero Unstaged”. __Son archivos que viven dentro de Git pero no han sido afectados por el comando git add__ ni mucho menos por git commit. 
  
    __Git tiene un registro de estos archivos pero está desactualizado__, sus últimas versiones solo están guardadas en el disco duro.

  * __Archivos Untracked:__ Son archivos que __NO viven dentro de Git, solo en el disco duro__. Nunca han sido afectados por git add, así que Git no tiene registros de su existencia. 
   
    Podían ser los que tenemos clasificados como  __GIT IGNORE__
      1. Crear un archivo llamado ".gitignore"
      2. 2.- Agregar por cada linea los archivos / carpetas que deseemos ignorar
      3. 3.- git add .
      4. 4.- git commit -m "Creando el archivo .gitignore"
  
* __git add .__ .- Nos permite __mover archivos del Untracked o Unstaged al estado Staged.__
  * __git add "*.txt"__ .- Agrega todos los archivos .txt de todo el proyecto.
  * __git add ".txt"__ .- Agrega UNICAMENTE los archivos .txt del directorio o carpeta en la que estamos.
  * __git add .__ .- Agrega todos los archivos de todo el proyecto.
  * __git add <lista_de_archivos>__ .- agrega todos los archivos que listemos entre los signos menor y mayor que.
  * __git add pdfs/*.pdf__ .- Agrega todos los archivos pdf que estan dentro de la carpeta pdfs.
  * __git add pdf/__ .- Agrega todos los archivos dentro de la carpeta pdf, sin importar su extensión.
  * __git add -u__ .- actualiza todos los archivos. 

* __git commit -m " "__ .- Nos permite __mover archivos de Staged a Tracked__ y a su vez __registrar un comentario__, es como si tomáramos una foto de como esta el proyecto en ese momento.
  * __git commit -am "mensaje"__ .- Agrega todos los archivos nuevos o modificados, al mismo tiempo que generamos un commit; es igual a realizar git add. y después git commit -m "Mensaje"
  * __git commit -amend" -m "Mensaje"__ .- modifica el mensaje del último commit

* __git checkout__.-
  * __git checkout -- Nombre_del_archivo.md__.- Recuperar la versión de cambios guardada anterior inmediata en el ultimo commit.
    * __git checkout número_del_commit Nombre_del_archivo.md__ .- muestra como estaba el archivo en este commit

  * __git checkout nombre_dela_rama__.- Cambiarse de rama, la última palabra del comando es la ramma a la que se desea ir.

  * __git checkout -b nombre de la rama__ .- Crea y accede a la nueva rama creada.
  
* __git log__.- Ver el historial de los commits creados en el repositorio / proyecto.
  * Variantes:
    * __git log --oneline__ .- Ver el historial de los commits creados pero en forma resumida.
    * __git log --oneline--decorate--all--graph__.- Ver el historial de los commits creados pero en forma resumida y con formato de viñetas.
    * __git log "la palabra a buscar"__.- para buscar esa palabra en los commits

* __git reflog__ .- Ver el historial TOTAL de cambios de nuestro repositorio o proyecto

* __gitk__ .- es una representación visual de la historia del repositorio

* __git reset__.- Excluir un archivo o carpeta en particular de cuando agrege con la función git add al staged
  * Variantes:
    * __git reset HEAD README.md__ .- HEAD es la rama y después el nombre del archivo a sacar del staged y devolverlo a su estado anterior. 
    * __git reset --soft HEAD^__ .- Agregar las modificaciones hechas a los archivos que nos faltaron incluir en el ultimo commit y de esta forma quedan en el ultimo commit.
    * __git reset --mixed fbbce5a__ .- Eliminar los commits desde un punto en este caso sería el commit fbbce5a.
    * __git reset --hard fbbce5a__ .- Eliminar los cambios realizados en los archivos hasta el punto que elijamos en un commit, en este caso fbbce5a / También sirve para volver a un punto en el tiempo del proyecto aunque lo hayamos borrado. __git reflog__ para identificar ese punto y aplicamos __git reset --hard 13c8862__, en este caso es el punto 13c8862.

* __git show nombre del archivo__.- muestra todos los cambios realizados en este archivo

* __git diff__ .- Indica que cambios hubo en los archivos entre el commit anterior y el momento actual ANTES de subirlo al staged a través de git add.
  
  * git diff __--staged__ .- Indica que cambios hubo en los archivos entre el commit anterior y el momento actual DESPUÉS de subirlo al staged a través de git add.

  * git diff __commit-uno commit-dos.__- Indica que cambios hubo entre el commit-uno y commit dos.

* __git mv__ .- Para mover / cambiar nombre de un archivo, es recomendable hacerlo desde git para que mantengamos la historia del archivo.

    * Fuera de git:
      * 1.- Renombramos el archivo.
      * 2.- git s para identificar que lo detecte git.
      * 3.- git add .
      * 4.- git commit -m "Mensaje"

    * Por medio de la terminal:
      * git mv .- git mv nombre anterior nombre nuevo
      * git add .
      * git commit -m "Mensaje"
  
* __git rm__ .- __git rm nombre_del_archivo__ a borrar
  *** con el __comando git rm borramos el archivo pero lo dejamos en el staged,__ por lo que falta __agregar un commit para concluirlo__, git add -u, git commit -m "Estamos seguros de borrar el archivo"
  * __git rm --force__: Elimina los archivos de Git y del disco duro. 
  
* __git tag__ .- Etiquetas del proyecto o repositorio, te permite generar versiones descargables, ejemplo versiones del proyecto o aplicación.
      
* __git tag__ .- Para ver todos los tags grabados en ese proyecto o repositorio.
      
  * Crear un tag:
    * git tag -a nombre del tag  -m "descripción del tag"
    * git tag nombre del tag.
    * git tag -a nombre del tag #de commit que queremos afectar -m "descripción del tag"
      
  * Borrar un tag:
    * git tag -d nombre del tag a borrar.

    * Borrar un tag del __repositorio remoto__: 
      * git tag -d nombre-del-tag
      * git push origin :refs/tags/nombre-del-tag

  * git show-refs --tags .- ver a que commit esta ligado los tags que existen

  * git push origin --tags .-Publicar un tag en el repositorio remoto
  
* __git branch__.- 
      
  * Crear una nueva rama:
    * git branch nombre de la rama.

  * Crear y moverse en un solo paso a la nueva rama creada:
    * git checkout -b nombre de la rama

  * Visualizar las ramas existentes:
    *  git branch

  * Ir a una rama en específico:
    * git checkout nombre de la rama.

  * Unir dos ramas:
    * Fast- Forward:
      1. Ir a la rama master.- git checkout master
      2. git merge rama 2
      3. git log para validar que se hayan unido las ramas

        Cuando hay conflicto:
            Editamos el archivo manualmente y creamos un commit.

  * Borrar ramas:
    * git branch -d nombre de la rama.
    * git branch .- para verificarlo.

* __git stash / WIP (Work In Progress)__.-
  * Variantes:
    * git stash list .- Ver todos los stash (WIP)
    * git stash list --stat .- Da mas información de cada uno de los stash guardados
    * git show stash .- Da también buena información de los stash, pero solo del último registro del stash
    * git show stash@{0} .- especifica el stash a consultar la info {0}.
    * git stash branch nombre de la rama.- crea una nueva rama con el satsh.

* __git cherry-pick #commit(de la otra rama)__ que quieres agregar a la rama en la que te encuentras

* __git shortlog__ .- ver cuantos commits ha hecho cada miembro del equipo
  * git shortlog -sn .- muestra los nombres de los usuarios
  * git shortlog -sn --all .- muestra todos los commits incluso los borrados
  * git shortlog -sn --all --no-merges .- sin incluir los merges

## Crear un proyecto / repositorio.-
  1. Situarse en la carpeta donde esta el proyecto guardado
  2. Ir a la terminal y aplicar los siguienets comandos
    2.1. git init
    2.2. git add.
    2.3. git commit -m "Inicio del proyecto / primer commit / etc."

## Actualización de archivos
 1. git status.- para saber que archivos son los que se modificaron.
 2. git add. para agregar todos los archivos al staged y poder crear el nuevo commit.
     Comandos relacionados:
         git reset .- Excluir algún archivo o carpeta de los archivos que agregue.
         git diff .- Indica que cambios hubo en los archivos entre el commit anterior y el momento actual ANTES de subirlo al staged a través de git add.
         git diff --staged .- Indica que cambios hubo en los archivos entre el commit anterior y el momento actual DESPUÉS de subirlo al staged a través de git add.
         git checkout -- README.md .- Regresa el archivo a como estaba guardado en el commit anterior inmediato.

 3. git commit .m "Mensaje"
     Variantes:
         git commit -am "Mensaje" .- Agrega los archivos modificados en un solo paso (git add . y git commit -m"...")
         git commit --amend -m"Mensaje correcto" .- Modificar el mensaje del ultimo commit

## Revisar diferencias entre los archivos comunes de dos ramas
  * git diff rama 1 rama 2

