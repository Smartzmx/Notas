Las bases de datos entran cuando hacemos la transición a medios digitales.

## Tipos de bases de datos:
Relacionales: En la industria hay varias compañías dedicadas a ser manejadoras de bases de datos relacionales como:
    SQL Server, Oracle, MariaDB, entre otras.

No relacionales: Todavía están avanzando y existen ejemplos muy distintos como:
    cassandra, elasticsearch, neo4j, MongoDB, firestore, entre otras.

## Servicios:
Auto administrados: Es la base de datos que instalas tú y te encargas de actualizaciones, mantenimiento, etc.

Administrados: Servicios que ofrecen las nubes modernas como Amazon, Google, Azure y no debes preocuparte por mantenimiento o actualizaciones.

## Historia de las Bases de Datos Relacionales
Las bases de datos surgen de la necesidad de conservar la información más allá de lo que existe en la memoria RAM.

Las bases de datos basadas en archivos eran datos guardados en texto plano, fáciles de guardar pero muy difíciles de consultar y por la necesidad de mejorar esto nacen las bases de datos relacionales. 

Su inventor Edgar Codd dejó ciertas reglas para asegurarse de que toda la filosofía de las bases de datos no se perdiera, estandarizando el proceso.

1. Regla de información. Toda la información de una base de datos relacional está representada explícitamente a nivel lógico y exactamente de un modo: Mediante valores en tablas.

2. Regla de acceso garantizado. Todos y cada uno de los datos de una base de datos relacional se garantiza que sean lógicamente accesibles recurriendo a una combinación de nombre de tabla, valor de clave primaria y nombre de columna.

3. Tratamiento sistemático de valores nulo. Los valores nulos (distinto de la cadena de caracteres vacía o de una cadena de caracteres en blanco y distinta del cero o de cualquier otro número) se soportan en los SGBD completamente relaciones para representar la falta de información y la información inaplicable de un modo sistemático e independiente del tipo de datos.

4. Catálogo en línea dinámico basado en el modelo relacional. La descripción de la base de datos se representa a nivel lógico del mismo modo que los datos ordinarios, de modo que los usuarios autorizados puedan aplicar a su interrogación el mismolenguaje relacional que aplican a los datos regulares.

5. Regla de sublenguaje completo de datos. Un sistema relacional puede soportar varios lenguajes y varios modos de uso terminal (por ejemplo, el modo de rellenar con blancos). Sin embargo, debe haber al menos un lenguaje cuyas sentencias sean expresables mediante alguna sintaxis bien definida, como cadenas de caracteres, y que sea completa en cuanto al soporte de todos los puntos siguientes:
4 14748 - Bases de Datos – Biblioteconomía. 2003-2004 Tema 2: Bases de Datos relacionales.
• Definición de datos.
• Definición de vista.
• Manipulación de datos (interactiva y por programa).
• Restricciones de integridad.
• Autorización.
• Fronteras de transacciones (comienzo, cumplimiento y vuelta atrás).

6. Regla de actualización de vista. Todas las vistas que sean teóricamente actualizables son también actualizables por el sistema.

7. Inserción, actualización y supresión de alto nivel. La capacidad de manejar una relación de base de datos o una relación derivada como un único operando se aplica, no solamente a la recuperación de datos, sino también a la inserción, actualización y supresión de los datos.

8. Independencia física de los datos. Los programas de aplicación y las actividades terminales permanecen lógicamente inalterados cualquiera que sean los cambios efectuados, ya sea a las representaciones de almacenamiento o a los métodos de acceso.

9. Independencia lógica de los datos. Los programas de aplicación y las actividades terminales permanecen lógicamente inalterados cuando se efectúen, sobre las tablas de base, cambios preservadores de la información de cualquier tipo que teóricamente permita alteraciones.

10. Independencia de integridad. Las restricciones de integridad específicas para una base de datos relacional particular deben ser definibles en el sublenguaje de datos relacional y almacenables en el catálogo, no en los programas de aplicación.

11. Independencia de distribución. Un SGBD relacional tiene independencia de distribución.

12. Regla de no subversión. Si un sistema relacional tiene un lenguaje de bajo nivel (un solo registro a la vez), ese bajo nivel no puede ser utilizado para subvertir o suprimir las reglas de integridad y las restricciones expresadas en el lenguaje relacional de nivel superior (múltiples registros a la vez). 

## Entidades y atributos
Una entidad es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Tienen atributos que son las cosas que los hacen ser una entidad y por convención se ponen en plural.

Los atributos compuestos son aquellos que tienen atributos ellos mismos.

Los atributos llave son aquellos que identifican a la entidad y no pueden ser repetidos. Existen:

Naturales: Son inherentes al objeto como el número de serie
Clave artificial: No es inherente al objeto y se asigna de manera arbitraria.
Entidades débiles: No pueden existir sin una entidad fuerte y se representan con un cuadrado con doble línea.

Identidades débiles por identidad: No se diferencian entre sí más que por la clave de su identidad fuerte.
Identidades débiles por existencia: Se les asigna una clave propia.