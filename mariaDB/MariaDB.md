## Descargar imagen de mariadb
docker pull mariadb

## Configurar contenedor
docker run --name bedu -e MYSQL_ROOT_PASSWORD=bedu -p 3306:3306 -d mariadb

# Crear usuario para exportar base de datos y acceso remoto
docker exec -it c50a60f92c94 bash

bash-4.2# mysql -uroot -pbedu

CREATE USER 'bedu'@'%' IDENTIFIED BY 'bedu';

GRANT ALL PRIVILEGES ON * . * TO 'bedu'@'%';

## Acceder al contenedor
docker exec -it c50a60f92c94 mariadb -p

# Acceder al contenedor con soporte utf-8 "Caracteres del español"
docker exec -it -e LANG=C.UTF-8 c50a60f92c94 mariadb -p

# Mostrar BDs
SHOW DATABASES;

# Crear DB
CREATE DATABASE Biblioteca;

# Seleccionar DB
USE Biblioteca;

# Crear tabla
CREATE TABLE socios (
    socio_id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL DEFAULT 'Sin nombre',
    correo VARCHAR(45) NOT NULL,
    pais_id INT NOT NULL,
    provincia_id INT NOT NULL,
    PRIMARY KEY (socio_id)
);

CREATE TABLE provincias (
    provincia_id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    PRIMARY KEY (provincia_id)
);

CREATE TABLE paises (
    pais_id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    PRIMARY KEY (pais_id)
);

# Modificar tabla
ALTER TABLE socios ADD COLUMN direccion VARCHAR(45) NOT NULL AFTER correo;

# Insertar
insert into paises (nombre) values ("Mexico");
insert into paises (nombre) values ("Canada"), ("España"), ("USA");

insert into provincias (nombre) values ("Guadalajara"), ("Vancouver"), ("Madrid"), ("Texas");

insert into socios (nombre, correo, direccion, pais_id, provincia_id) values ("Andres Ramirez", "andres@gmail.com", "Lopez mateos", 1, 1);
insert into socios (nombre, correo, direccion, pais_id, provincia_id) values ("Carlos Cortes", "carlos@gmail.com", "Chapultepec", 1, 1);
insert into socios (nombre, correo, direccion, pais_id, provincia_id) values ("Lorena Saucedo", "lorena@gmail.com", "Burnaby", 2, 2);
insert into socios (nombre, correo, direccion, pais_id, provincia_id) values ("Vannessa Cortes", "vane@gmail.com", "Salamanca", 3, 3);

# Consultar
select * from socios;
select * from socios where socio_id = 1;
select count(*) from socios;
select nombre, correo from socios;
select nombre, correo from socios order by nombre asc|desc;
select nombre, correo from socios limit 1;
select pais_id, count(pais_id) as socios from socios group by pais_id; //AS
select * from socios where nombre like '%Cortes';
select s.nombre, s.direccion, p.nombre from socios s, paises p where s.pais_id = p.pais_id;

# Mostrar paises
select s.nombre, p.nombre as pais
from socios s, paises p
where s.pais_id = p.pais_id;

# Mostrar paises y provincias
select s.nombre, p.nombre as pais, o.nombre as provincia
from socios s, paises p, provincias o 
where s.pais_id = p.pais_id and o.provincia_id = s.provincia_id;

# Eliminar
delete from socios where socio_id = 1;

# Modificar la provincia con id 1
update provincias set nombre = "Zapopan" where provincia_id = 1;

# INNER JOIN
SELECT s.nombre, p.nombre as pais FROM socios s
INNER JOIN paises p 
ON s.pais_id = p.pais_id;

# LEFT JOIN
SELECT s.nombre, p.nombre as pais FROM socios s
LEFT JOIN paises p 
ON s.pais_id = p.pais_id;

# RIGHT JOIN
SELECT s.nombre, p.nombre as pais FROM paises p
RIGHT JOIN socios s 
ON s.pais_id = p.pais_id;

## EXPORTAR

mysqldump -u root -p123456 Bedu > bedu.sql

docker exec 8c574acb9793 /usr/bin/mysqldump -u root -pbedu biblioteca > backup.sql

## RESTAURAR

mysql -u root -p123456 Bedu < bedu.sql

cat backup.sql | docker exec -i 8c574acb9793 /usr/bin/mysql -u root -pbedu Biblioteca