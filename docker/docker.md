////////////////////////////////////////////
### Imagenes

## Listar
docker images

## Buscar
docker search mysql

## Descargar 1.- (primer paso)
docker pull mysql

## Eliminar
docker rmi "id_imagen" -f

////////////////////////////////////////////
### Contenedores

## Listar
docker ps -a

## Detener
docker stop "id_contenedor"

## Encender
docker start "id_contenedor"

## Eliminar
docker rm "id_contenedor" -f (con el -f detiene la ejecución y elimina el contenedor)

////////////////////////////////////////////
## MySQL / MARIADB

## Configurar contenedor
# --name -> nombre del contenedor
# -e -> definir variables
# -p -> definir puerto
# -d -> ejecutarse oculto
docker run --name bedu -e MYSQL_ROOT_PASSWORD=bedu -p 3306:3306 -d mysql
docker run --name bedu -e MYSQL_ROOT_PASSWORD=bedu -p 3306:3306 -d mariadb

## Acceder
# -it -> agregar dos variables
#    -i ->  mantener abierto el proceso
#    -t ->  dar salida
#    -p ->  esperar contraseña

docker exec -it "id_contenedor" mysql -p
docker exec -it 5bcbaed560f1 mariadb -p
docker exec -it -e LANG=C.UTF-8 5bcbaed560f1 mariadb -p // en esta parte estoy especificando el  lenguaje UTF-8 para que acepte acentos
docker ps -a (para ver el id del contenedor y validar el status de si esta encndido o no)

solo MARIADB:
show databases;
+--------------------+   
| Database           |   
+--------------------+   
| information_schema |   
| mysql              |   
| performance_schema |
+--------------------+  

create database nombreDeLaBaseDeDatos

create table nombreDeLaTabla

ej: CREATE TABLE socios (
socio_id INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL DEFAULT 'Es default', email VARCHAR(45) NOT NULL,
pais_id INT NOT NULL,
provincia_id INT NOT NULL,
PRIMARY KEY (socio_id)
);

Modificar tabla
ALTER TABLE socios ADD COLUMN address VARCHAR(45) NOT NULL AFTER provincia_id;

Mostrar las características de la tabla
desc nombreDeLaTabla;

Insertar registros
INSERT INTO socios (nombre, email, pais_id, provincia_id, address) values ('Andres Ramirez', 'andres@gmail.com', 1, 1, 'Zapopan');

ver los registros de cada abla
select * from nombreDeLaTabla;

saber cuenos registros hay en la tabla
select count(*) from socios

hacer consultas:
select * from nombreDeLaTabla where condición;
select * from socios where pais_id = 1;
select * from socios where pais_id = 1 and address = 'Zapopan';
select * from socios where email like '%@gmail.com';
select pais_id, count(pais_id) from socios group by pais_id;
select * from socios order by pais_id asc  limit 3;

Eliminar datos
Primero es aconsejable hacer una consulta para verificar los datos que arroja la consulta sean los que realmente queremos borrar
Segundo reemplazar select * por delete
Tercero validar que el registro este borrado 

Ej.
select * from socios where socio_id = 5;
delete  from socios where socio_id = 5;
select * from socios where socio_id = 5;

Consultas mas complejas:
select aliasDeLaTabla1.nombreDelCampo, aliasDeLaTabla2.nombreDelCampo as nombreDeComoRenombroLaTabla2 from nombreDeLaTabla1, nombreDeLaTabla2 where condicion a evaluar ( aliasDeLaTabla1.nombreDelCampos = aliasDeLaTabla2.nombreDelCampo);
select s.nombre, p.nombre as pais from socios s, paises p where s.provincia_id = p.provincia_id;

select s.nombre, p.nombre as pais from socios s inner join  paises p on s.pais_id = p.pais_id;
select s.nombre, p.nombre as pais from socios s left join  paises p on s.pais_id = p.pais_id; 
select s.nombre, p.nombre as pais from socios s right join  paises p on s.pais_id = p.pais_id;

# Configurar acceso remoto "Workbench"
docker exec -it "id_contenedor" bash

bash-4.2# mysql -uroot -ppassword

CREATE USER 'bedu'@'%' IDENTIFIED BY 'bedu';

GRANT ALL PRIVILEGES ON * . * TO 'bedu'@'%';

////////////////////////////////////////////
## Mongo

docker pull mongo

docker run -d -p 27017:27017 --name mongodb mongo

docker exec -it mongodb bash

bash:/# mongo

////////////////////////////////////////////
### Carpetas compartidas

## Crear Carpeta
mkdir carpetaCompartida

## Agregar archivos

## Entrar en la carpeta
cd carpetaCompartida

## Crear contenedor
docker run --name ubuntuFolder -it -v "$(pwd)":/root/recursos ubuntu

# Arrancar contenedor
docker start "id_contenedor"

# Entrar al contenedor
docker exec -it "id_contenedor" /bin/bash

////////////////////////////////////////////
### DOCKERFILES

## Crear carpeta 
mkdir ubuntuTest

## Entrar a la carpeta
cd ubuntuTest/

## Crear Dockerfile
touch Dockerfile

## Escribir en el archivo
nano Dockerfile

## Agregar instrucciones

# Descarga la imagen de Ubuntu 14.04
FROM ubuntu:14.04

# Actualiza la imagen base de Ubuntu 14.04
RUN apt-get update

# Definir ambiente de entorno
ENV DEBIAN_FRONTEND noninteractive

# Instalar Git
RUN apt-get -qqy install git


## Crear imagen

# .   Ditectorio actual
# -t  Nombre y/o etiqueta 
docker build -t ubuntu_test:miEtiqueta .

# Listar imagenes
docker images

# Crear contenedor
docker run -it --name ubuntuDockerFile "id_imagen"

# Arrancar contenedor
docker start "id_contenedor"

# Entrar al contenedor
docker exec -it "id_contenedor" /bin/bash