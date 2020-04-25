
# Problemáticas del desarrollo de software profesional
A la hora de hacer aplicaciones y proyectos de software nos podemos encontrar con varios problemas, estos problemas los podemos agrupar en tres categorías:

## Construir: Escribir código, que compile, etc. (localmente).

Problemas al construir
* Dependencias de desarrollo (Nativas del SO o librerías)
* Versiones de entornos de ejecución
* Equivalencia de entornos de desarrollo
* Equivalencia con entornos productivos
* Versiones/compatibilidad 3rd party

## Distribuir: Llevar la aplicación a los distintos entornos y en los distintos servidores.

Problemas al distribuir
* Output de build heterogéneo
* Acceso a servidores productivos
* Ejecución nativa vs virtualizada
* Serverless

## Ejecutar: Que funcione la aplicación como debería.

Problemas al ejecutar
* Dependencias de aplicación
* Compatibilidad de sistema operativo
* Disponibilidad de servicios externos
* Recursos de hardware

# ¿Qué es Docker?
Es un sistema que se maneja con contenedores, esto nos permite crear un estándar y aislamiento de los procesos.

# Maquinas virtuales
Una computadora corriendo dentro de otra computadora.
La ventaja de esta lógica es que se coge todo un entorno de ejecución, se empaqueta, se envía a otra computadora, se corre y se emula.

# Problemas de Maquinas Virtuales

## Pesadas
En el orden de los GB - SO entero, muchas dependencias.
Muchas VMs en el mismo host suelen repetirse en lo que contienen - Mismo SO, mismas dependencias por cada VM (son independientes).

## Administración costosa
Una VM tiene que ser administrada como cualquier otra computadora: patching, updated, etc.
Hay que administrar la seguridad interna entre apps.

## Lentas
Correr nuestro código en una VM implica no sólo arrancar nuestras aplicaciones, sino también esperar el boot de la VM en sí.

# ¿Qués es un contenedor en Docker?

Los contenedores son el __concepto fundamental al hablar de docker.__
Un contenedor __es una entidad lógica.__
Es una __agrupación de procesos que se ejecutan de forma nativa__ como cualquier otra aplicación en la máquina host o SO.
Los __procesos que se definen para un contenedor, solo pueden vivir en el contexto de ese contenedor__.
Los procesos __usarán solo los recursos que el contenedor defina__, estan limitados por sus recursos.
Los procesos __corren de forma nativa en máquinas linux, lo único que se comparte es el kernel__. por eso en ambientes productivos se usa linux con docker.
__No son máquinas virtuales.__

# Características de un contenedor:
## Versátiles
En el __orden de los MB.__
__Tienen todas las dependencias que necesitan__ para funcionar correctamente.
Funcionan igual en cualquier lado.
comparten el sistema base en el que corre, pues no ejecutan un sistema operativo completo.

## Eficientes
__Comparten archivos inmutables con otros contenedores.__
__Sólo se ejecutan procesos__, no un SO completo.

## Aislados
__Lo que pasa en el contenedor queda en el contenedor.__
No pueden alterar su entorno de ejecución (a menos que explícitamente se indique lo contrario).
Si fallan los procesos se quedan aislados y no se involucran con el entorno en el que se están ejecutando.

# Arquitectura de Docker
* Tiene una __arquitectura de cliente-servidor__.
* El servidor es un daemon que esta corriendo en mi maquina y el cliente es otro programa que también esta corriendo en mi maquina.
* Cuando escribimos docker y damos enter, estamos usando el cliente, y este por detrás le habla al daemon (servicio de docker).
* No es necesario que el daemon este corriendo en mi maquina, desde mi cliente puedo hablarle a un daemon que este corriendo en otra maquina.
* Básicamente lo que pasa cuando ejecutamos docker run: mi cliente le habla al daemon, el daemon hizo todo lo demás, se trajo la definición, creo el contenedor, mostró el output.

# Estados de docker

__docker ps__ .- para ver estado de los contenedores

__docker ps -a__ .-para ver estado de los contenedores ya ejecutados y existentes / Para listar todos los contenedores de Docker

__docker ps -aq__ .-para ver la lista de id de containers

__docker inspect <id hexadecimal del conenedor>__ .-para ver la metadata de un contenedos

__docker inspect <nombre del contenedor>__ .-para ver la metadata de un contenedos

__docker inspect -f "{{json .<elemento en json>}}" <nombre del contenedor>__ .-para ver una metadata en particular aplicar un filtro

__docker rename <nombre del contenedor actual> <nuevo nombre>__ .-para renombrar contenedor

__docker run --name <nombra a asignar> <nombre del contenedor a correr>__ .-para correr el contenedor y asignar un nombre al mismo

__docker logs <nombre del contenedor>__ .-para ver output de los contenedores (o logs en el contenedor)

__docker rm <nombre del contenedor>__ .-para eliminar contenedor en particular

__docker rm <id del contenedor>__ .-para eliminar contenedor en particular

__docker rm $(docker ps -aq)__ .-para eliminar todos los conenedores ejecutados

__docker run ...__ .-para crear un contenedor

__docker run -it ...__ .-para crear un contenedor y 

__docker run --detach --name server nginx__
–detach : Si el contenedor que se ejecutará tiene un proceso con output o en modo interactivo, lo deshabilita, devuelve el control de la terminal al host.

El puerto del contenedor está aislado hasta que de forma explícita se indique que lo exponga.
__docker run --detach --name server -p 8080:80 nginx__
-p 8080:80 : publish - le decimos que puerto de nuestra máquina host estará atado (binded) al puerto 80 del contenedor
Con ésta forma de iniciar el contenedor ya podemos tener acceso al servidor web nginx.

# Datos con Docker: Volumes
A pesar de que no es lo más divertido que tiene Docker, esta herramienta nos permite recuperar datos que podíamos dar por perdido.

Existen tres maneras de hacer permanencia de datos:
* Bind mount

* Volume: es un área manejada por docker que el resto de los procesos de la computadora no deberían tocar.
    
Comandos Volume:
    __docker volume ls__ .-lista todos los volúmenes existentes.
    __docker volume rm nombreVolume__ .-borra volumen
    __docker volume prune__ .-borra todos lo volúmenes.
    __docker volume create dbdata__ .-crea un volumen
    __docker run -d --name db --mount src=dbdata,dst=/data/db mongo__ .-creamos la imagen de mongo y montamos el volumen anteriormente creado.

* tmpfs mount

# Imágenes
 
Las imágenes son un componente fundamental de Docker y sin ellas los contenedores no tendrían sentido. Estas imágenes son fundamentalmente plantillas o templates.

Algo que debemos tener en cuenta es que las imágenes no van a cambiar, es decir, una vez este realizada no la podremos cambiar.

Cada capa es una pequeña diferencia con la anterior, funciona algo similar a git.

## Comandos imagen

__docker pull <repositorio>:<versión>__ .-Traer una imagen

__docker image ls__ .- Listar imágenes. 
Este comando nos muestra el repositorio al que pertenece, su tag, la versión, su id, la fecha de creación y su peso.

__docker image rm <nombre>__ .-Eliminar una imágen

Las imágenes al componerse de capas, conforme las versiones de una imagen progresen lo único que bajara docker serán las capas nuevas.
 
Si una capa existe en nuestro sistema no la baja.
 
Si creamos una imagen nueva con capas que ya existen, docker solo crea una referencia lógica a estas capas.

## Construyendo nuestras propias imágenes
Vamos a crear nuestras propias imágenes, necesitamos un archivo llamado __DockerFile__ que es la ““receta”” que utiliza Docker para crear imágenes.

__Es importante que el DockerFile siempre empiece con un ““FROM”” sino, no va a funcionar.__

El flujo para construir en Docker siempre es así:
Dockerfile – **build **–> Imágen – run --> Contenedor

Hacer build
docker build -t ubuntu:platzi . 
El punto representa el contexto de el comando docker build que usa mientras hace el build. Es el directorio donde se encuentra nuestro Dockerfile

Hacer push de una imagen
Para subir nuestra imagen a docker hub primero debemos hacer login con:

docker login
y para subir nuestra imagen hacemos:

docker push <repositorio>:<tag>
si queremos retagear nuestra imagen para subirla, podemos usar el comando:

docker tag <nombre_tag_actual> <usuario/nombre_tag_nuevo> 

## Comprendiendo el sistema de capas
Tres Alternativas para ver el contenido de una imagen de docker:
* usar commando docker history
contra: poco legible
* encontrar el dockerfile en dockerhub
contra: vemos lo que contiene, mas no lo que se modifico con respecto a la anterior
* usar dive

Para comprender la estructura de sus capas podemos verlo desde el archivo Dockerfile. En hub.docker.com podemos ver éste archivo de las imágenes públicas.
Con el comando: docker history nombreImagen -> podemos ver información acerca de las capas de la imagen.
Con el flag “–no-trunc” del comando history podemos ver más detalles pero no es muy cómodo para ver la información.
Opción cómoda: https://github.com/wagoodman/dive
Las capas de docker son inmutables, cada cambio en la imagen se trata como una capa nueva.

# Docker networking: colaboración entre contenedores
docker network ls : lista las redes que existen en docker.

Redes por defecto en docker:

* bridge: red por defecto, o red puente, se solia usar con la instrucción link, la cual permitia enlazar contenedores a travez de la red. Sin embargo esta red esta en desuso.
* host: ADVERTENCIA el uso de esta interfaz es de cuidado. Permite que el contenedor use la red por defecto de la maquina host. Es sensible a que si el contendor abre algun puerto, esto se ve replicado en la maquina host, generando asi posibles vulnerabilidades.
* none: es similar al dev/null o hoyo negro de los sistemas unix. En este caso nos permite especificar que el contenedor no tiene salida o permiso para acceder o ser accedido por red.


docker network create --attachable < nombre del contenedor /> : crea una red.
“–attachable” permite que en un futuro otro contenedor se conecte a esta red.
docker run -d --name db mongo : corre contenedor mongo
docker network connect < nombre del contenedor /> db : conecta el contenedor mongo a la red creada.
docker network inspect < nombre del contenedor /> : inspecciona las características de la red creada.
docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test anturyapp10 : corre el contenedor de nuestra app, con una variable de entorno para nuestra app.
docker network connect < nombre del contenedor /> app : conectamos nuestro contenedor de nuestra app a la red creada.
Ahora podemos conectarnos desde nuestra app a la BD mongo en otro contenedor.

__Docker-compose__: la herramienta todo-en-uno
Docker compose es una herramienta que nos permite describir de forma declarativa la arquitectura de nuestra aplicación, utiliza composefile (docker-compose.yml).

Un servicio puede tener más de un contenedor.
depends on: -db -> indica que el servicio depende de otro servicio llamado db, así que debe inicializar primero el servicio del cual depende.
docker-compose up : corre todo con un solo comando (red virtual, contenedores, etc)

comandos docker compose:
docker-compose up -d : inicia los servicios sin atarnos al output.
docker-compose ps : muestra los servicios corriendo.
docker-compose exec app bash : ejecuta el bash del contenedor.
docker-compose down : elimina todos los servicios, contenedores, redes.


Docker-compose como herramienta de desarrollo
imagen del balanceador de carga
https://hub.docker.com/r/jwilder/nginx-proxy

url del ejemplo : http://167.71.102.229/

Abajo el docker-compose.yml
```` javascript
version: "3"

services:

  app:
    build : .
    environment:
      MONGO_URL: "mongodb://db:27017/test"
      VIRTUAL_HOST: 167.71.102.229
    depends_on:
      - db
    ports:
      - "3000"
    volumes:
      - .:/usr/src
      - /usr/src/node_modules

  db:
    image: mongo

  nginx:
    image: jwilder/nginx-proxy
    ports:
      - "80:80"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
````