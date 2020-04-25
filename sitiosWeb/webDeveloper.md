
# Características de un buen desarrollador:
**Diseño responsivo.-**
   * Fluid layouts (Secuencia de diseño)
   * Media Queries
   * Responsive images
   * Correct properties units (margin/ padding/ fonts)
   * Desktop fisrt Vs mobile-first (enfoque de diseño)

**Mantenimiento y Escalabilidad de código** (Metodología BEM)
  * Limpio
  * Fácil de entender
  * Escalable
  * Reusable
  * Carpetas de archivos organizados
  * Definir clases con nombres relacionados a
  * Estructura HTML

    ## __BEM.- Block Element Modifier__
    * __Bloque:__ __componente independiente__ que es significativo por sí solo.
    * __Elemento:__ __parte de un bloque__ que __no tiene un significado independiente.__
    * __Modificador:__ una __versión diferente de un bloque o un elemento.__

**Desempeño del sitio web**
   * Less HTTP request
   * Less code
   * Compress code
   * Use a CSS preprocessor
   * Less images
   * Compress images


# Metodología para construir sitios web
1. Define el proyecto 
   1. Ver Metodología UX
2. Diseño y construccion del sitio web
   1. Comienza a construir tu sitio web, siguiendo todas las recomendaciones de diseño en CSS
   2. Al terminar el diseño del sitio web es necesario colocar los prefixed para cada navgador https://autoprefixer.github.io
3. Optimiza el sitio web
   1. Una vez terminado tu sitio web, optimiza su funcionamiento, tamaño de imagenes, videos, archivos, el objetivo es que cargue la pagina en el menor tiempo posible
   2. Emplea los tips de SEO
4. Lanzamiento
   1. Sube tu pagina a tu hosting en su respectivo dominio
5. Mantenimiento
   1. Monitorea las estadisticas de tu sitio web y haz cambios si es necesario
   2. Actualiza contenido a traves de blogs

# UX
  **Mandamientos del diseño de productos digitales:**
  1.  Nosotros no contamos como usuarios de nuestra app.
  2.  Pocas funciones bien resueltas, antes que muchas hechas a medias.
  3.  Ser general primero, particular luego.
  4.  Tomar ciertas decisiones por los usuarios; jerarquizar.
  5.  Conocer a nuestros usuarios.
  6.  Ahorrar pasos cuando se pueda y valga la pena.
  7.  Ser transparentes; que la interfaz le hable al usuario.
  8.  Generar, usar, reutilizar y respetar patrones.
  9.  Valerse de, y respetar los guidelines de cada sistema operativo y/o entorno.
  10. No tener callejones sin salidas.

## Metodología UX:
   1. **Benchmarketing**
     * Encuestas a posibles usuarios
     * Competencia directa en internet
     * Recopilación y análisis de datos
  
   2. **Diagrama de flujo** del proceso de compra o uso de la app / sitio web por parte del usuario
     * Bloques / Sub-procesos
       * Detalles de cada bloque o subproceso
       * Tú como usuario que le mejorarías a lo que existe?
       * Qué te gustaría que existiera en el sub-proceso?
  
   3. **Proto-Personas**
      1. **Características del usuario ideal** o Representantes de los usuarios: (al menos 4 usuarios)
         1.  Edad / Tipo de trabajo / Ingreso promedio / Hobbies / Uso de redes sociales / Proactivo / Gusto por la tecnología / Muy organizado / Gusta salir de noche / Gusto por la naturaleza / Tiene pareja
      2.  Definir **objetivos de usar la App**
          1. Recopilar info de sus amigos o busquedas realizadas
          2. Organizar el itinerario.
          3. Agregar, eliminar, editar, compartir su itinerario facilmente.
          4. Comunicación remota entre amigos --videos / fotos y guardarlas como un chat--
      3.  Inventarar / Desarrollar **historias / relatos** de uso de la app de esos 4 usuarios.
      4. Definir **funcionalidades que la app** debería de tener:
         1. **Crear perfil** de cada usuario (público / privado)
            1. Guardar destinos
            2. Guardar planes
            3. Poder votar entre el grupo de personas que iran al viaje por destino
               1. Crear grupo
                  1. Invitar a amigos
                  2. Guardar chat / imagenes / videos
            4. Status de votaciones por destino
            5. Mapas de los destinos
               1. Rutas / Tiempos de trayecto por tipo de transporte / costos aproximados / transportes disponibles
            6. Ratings de los destinos y lugares por visitar
            7. Calendario
               1. Temporadas altas / bajas / clima / costos por temporada
            8. Reservaciones
               1. Compra en linea hoteles / pasajes avión y lugares / reservaciones de restaurants / lugares turisticos
            9.  Checklist
                1.  Antes de viajar
                2.  durante el viaje
                3.  Regreso a casa.
            10. Cargar documentos por destino
                1.  Boletos comprados digitalmente / reservaciones hechas / cancelaciones
         2.  Hacer una **red publica** para que otros usuarios puedan buscar / ver & copiar el plan de viaje de otro usuario si es que el usuario autor lo hace público.
         3.  Dar **ratings de los destinos y lugares visitados** como cierre de su viaje y para referencia de futuros viajeros.
             1.  Cargar fotos y comentarios
      5.  **Clasificar todas las funciones** del paso anterior en las siguientes:
          1.  Debe estar por fuerza **(Must)**
          2.  Podría estar **(Should)**
          3.  Sería bueno que lo tuviera **(Nice)**
   
   4.  Definir **interface / pantallas**
       1.  Definir los**valores / mensajes** que se pretende transmitir
           1.  Claro
           2.  Trabajo colaborativo
           3.  Ordenado
           4.  En tiempo real
           5.  Que sea visual
       2.  Definir **tipos de usuario**
           1.  Administradores del plan o grupo
           2.  Invitados personas que participarán en el viaje
           3.  Colaboradores personas que daran sugerencias
       3.  **Pantallas**
           1.  Crear perfil
           2.  Ingreso a su cuenta
               1.  Contenido / Dashboard del plan de viaje
                   1.  Explorar nuevos destinos
                       1.  Destinos
                       2.  Planes en proceso
                           1.  Proceso de votación y aprobación
                   2.  Planes futuros
                       1.  Planes aprobados
                           1.  Compartir invitados y colaboradores
                       2.  Reservaciones hechas
                           1.  Ordenadas por destino / fecha
                       3.  Cancelaciones hechas
                           1.  Ordenadas por destino / fecha
                       4.  Control de presupuesto
                           1.  Presupuesto Vs Gasto Acumulado
                   3.  Consulta de viajes realizados
                       1.  Recuerdos
                           1.  Fotos / Videos / comentarios
                       2.  Costo real del viaje
                           1.  Presupuesto Vs Gasto real
           3.  Definir las **acciones principales y secundarias de cada pantalla.**
               1.  Acciones principales.- a traves de botones, imagenes, con colores que sobresalgan del diseño
               2.  Acciones secundarias .- imagenes, botones, textos, menus ocultos, sin colores que sobresalgan del diseño.
           4.  Como presentar la información
               1.  Formato card.- cartas con la información basica, al hacer hover sobre alguna imagen
               2.  Carrusel
               3.  Acordeon
               4.  Modals, pantallas como pop up
           5.  Pantallas de bienvenida para usuarios sin mucha experiencia en la tecnología
               1.  Secuencia de pasos, con mensajes de felicitaciones para los siguientes pasos o de correccion en caso de algun error
               2.  Para pantallas sin informacion, lo importante es siempre darle una alternativa de accion al usuario. Ej. crear una nueva o crear basado en una plantilla
   
   5.  Wireframes / Bosetos (ver imagen de ejemplo)
       1.  **Utilizar el papel**
           1.  Barato / Rápido / Permite enfocarse en el diseño
       2.  Elegir una **pantalla principal de la app**
           1.  La que **tenga el mayor contenido**
           2.  Ser visual / ordenados / lo **valores / mensajes que definimos** para transmitir en el diseño
   
       3.  Por un lado del espacio para el diseño hacer anotaciones de los **elementos generales que contendrá**
   
       4.  Hacer al menos **dos alternativas**
   
       5.  Definir los **elementos en particular de cada seccion** del diseño:
           1.  Barra menu principal (Top): Settings / Nuevo / Logo usuario (avatar) / ingresar / Crear cuenta / Invitar / compartir
           2.  Hero / Banners.(50%-Top - aside-30%)- Nombre de la App / avatars de los usuarios top
           3.  Planes (Tabs 50%).- Nombre / avatar de quien lo agrego / Link / Mensaje pequeño / Ubicación.
               1.  Ver Plan.- (hover / modo card)
                   1.  Todos los elementos pero en grande y con un mapa.
           4.  Ciudades (Tabs 50%).- Imagen de la ciudad / Planes (lugares turisticos) / Ubicación / hoteles 
               1. Ver Ciudad.- (hover / modo modal-popup)
                   1. Todos los anteriores + / barra de busqueda / boton agregar plan / Mapa grande por un lado
           5. Mapa (aside superior 30%).- con los pines donde hay información por país / barra de busqueda por ciudad o pais para el filtrado del mapa
           6. Mensajes de los ultimos planes publicados (aside inf- 30%)

   6. **Boceto Digital / Prototipo**
      1. Programa Sketch / Marvel
         1. link para elegir colores: https://flatuicolors.com/
      2. Programa invision para publicarlo y poder hacer pruebas
   
   7. **Testeo con usuarios:**
      1. - Guión. Hay que definir el testeo:
         1. explicarle el objetivo del testeo, para que este lo más relajado posible y obtengamos una buena retroalimentación.
         2. Dale tareas para desarrollar en el prototipo Ej.crea tu usuario
   
      2. - Prototipo. 
         1. Que sea navegable
         2. Lo más real posible, contenido real o lo más real posible.
   
      3. - Compañero. 
         1. El encargado de tomar las notas necesarias / Observar / No habla!!!
         2. Graba la pantalla y el audio para posteriormente analizarlo.
   
      4.  - Usuarios. Para poder hacer el testeo.
          1.  Google forms para contactarlos
          2.  Calendly.com para agendar cita
          3.  Entre 6 y 15 usuarios.
          4.  Duración entre 30 y 45 minutos.
          5.  Denle un regalo o pago a cada usuario.
          6.  Tipos de usuarios.- contrates / extremos
   
   8.  **Tips**
       1.  Usa la **combinacion de tipografía sans-serif y serif,** google fonts te va la sugerencia 
       2.  Titulos son en colores más oscuros
           1.  Hacer una paleta de colores 5 colores lo recomendado
