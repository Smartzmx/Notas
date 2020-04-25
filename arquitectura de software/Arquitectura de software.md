# Arquitectura de software, definiciones:

    "La estructura del sistema, compuesta por elementos de software, sus propiedades visibles y sus relaciones"
    Según: Software Architecture in practice (Bass, Clements & Kazman, 2003)

    "Conjunto de decisiones principales de diseño tomadas para el sistema"
    Según: Software Architecture: Foundations, Theory and Practice (Taylor, 2010)

    "(…) la arquitectura se reduce a las cosas importantes, cualesquiera que sean"
    Según: Patterns of Enterprise Application Architecture (Fowler, 2002)

## Estilos de arquitctura     
        1. Patrón en capas / Layered pattern
        2. Patrón cliente-servidor / Client-server pattern
        3. Patrón maestro-esclavo / Master-slave pattern
        4. Patrón de filtro de tubería / Pipe-filter pattern
        5. Patrón de corredor / Broker pattern
        6. Patrón de igual a igual / Peer-to-peer pattern
        7. Patrón de bus de eventos / Event-bus pattern
        8. Patrón modelo-vista-controlador / Model-view-controller pattern
        9. Patrón de pizarra / Blackboard pattern
        10. Patrón de intérprete / Interpreter pattern

        1. Patrón en capas / Layered pattern / Llamado y retorno
        Cada uno de los componentes hacen invocaciones a los componentes externos y estos retornan información.
        Este patrón se puede usar para estructurar programas que se pueden descomponer en grupos de subtareas, cada uno de los cuales se encuentra en un nivel particular de abstracción. Cada capa proporciona servicios a la siguiente capa superior.
        Las 4 capas más comúnmente encontradas de un sistema de información general son las siguientes.
        Capa de presentación (también conocida como capa UI)
        Capa de aplicación (también conocida como capa de servicio)
        Capa de lógica de negocios (también conocida como capa de dominio)
        Capa de acceso a datos (también conocida como capa de persistencia)

        Uso
        * Aplicaciones generales de escritorio.
        * Aplicaciones web de comercio electrónico.

        1.1- Programa y subrutinas --> Instrucciones secuenciales que el programa ejecutba una por una. Luego se hacian instrucciones de salto, de aqui surgieron las funciones que son bloques de codigo que podemos invocar en cualquier momento.

        1.2- Orientado a objetos --> la abstracción es mayor en comparación con el paradigma anterior, se usa para aplicaciones que ya sabemos que vamos a usar durante mucho tiempo. La abstracción ya no es la subrutina, ahora tenemos objetos que se hacen llamados entre si y esperan respuestas.


        2. Patrón cliente-servidor / Client-server pattern
        Este patrón consta de dos partes; Un servidor y múltiples clientes. El componente del servidor proporcionará servicios a múltiples componentes del cliente. Los clientes solicitan servicios del servidor y el servidor proporciona servicios relevantes a esos clientes. Además, el servidor continúa escuchando las solicitudes de los clientes.
        
        Uso
        * Aplicaciones en línea como correo electrónico, intercambio de documentos y banca.

        3. Patrón maestro-esclavo / Master-slave pattern
        Este patrón consta de dos partes; amo y esclavos. El componente maestro distribuye el trabajo entre componentes esclavos idénticos y calcula un resultado final a partir de los resultados que devuelven los esclavos.
        
        Uso
        * En la replicación de la base de datos, la base de datos maestra se considera la fuente autorizada y las bases de datos esclavas se sincronizan con ella.
        * Periféricos conectados a un bus en un sistema informático (unidades maestras y esclavas).

        4. Patrón de filtro de tubería / Pipe-filter pattern
        Este patrón puede usarse para estructurar sistemas que producen y procesan un flujo de datos. Cada paso de procesamiento está encerrado dentro de un componente de filtro. Los datos a procesar se pasan a través de tuberías. Estas tuberías se pueden usar para almacenamiento en búfer o para fines de sincronización.

        No estamos preocupados por la secuencia de ejecución sino por como los datos van a ir de un lugar a otro.
        
        Uso
        * Compiladores Los filtros consecutivos realizan análisis léxico, análisis, análisis semántico y generación de código.
        * Flujos de trabajo en bioinformática.
        * necesito una salida clara y se puede generar el proceso paso a paso a traves de filtros por ejemplo

        5. Patrón de corredor / Broker pattern
        Este patrón se utiliza para estructurar sistemas distribuidos con componentes desacoplados. Estos componentes pueden interactuar entre sí mediante invocaciones de servicios remotos. Un componente de intermediario es responsable de la coordinación de la comunicación entre los componentes.
        Los servidores publican sus capacidades (servicios y características) en un corredor. Los clientes solicitan un servicio del intermediario, y el intermediario redirige al cliente a un servicio adecuado desde su registro.
        
        Uso
        * Software de mensajería como Apache ActiveMQ, Apache Kafka, RabbitMQ y JBoss Messaging.

        6. Patrón de igual a igual / Peer-to-peer pattern
        En este patrón, los componentes individuales se conocen como pares. Los pares pueden funcionar como un cliente, solicitando servicios de otros pares y como un servidor, proporcionando servicios a otros pares. Un par puede actuar como cliente o como servidor o como ambos, y puede cambiar su función dinámicamente con el tiempo.
        
        Uso
        * Redes de intercambio de archivos como Gnutella y G2)
        * Protocolos multimedia como P2PTV y PDTP.

        7. Patrón de bus de eventos / Event-bus pattern
        Este patrón se ocupa principalmente de eventos y tiene 4 componentes principales; fuente de eventos, escucha de eventos, canal y bus de eventos. Las fuentes publican mensajes en canales particulares en un bus de eventos. Los oyentes se suscriben a canales particulares. Los oyentes reciben notificaciones de los mensajes que se publican en un canal al que se han suscrito anteriormente.
        
        Uso
        * Desarrollo de Android
        * Servicios de notificación

        8. Patrón modelo-vista-controlador / Model-view-controller pattern
        Este patrón, también conocido como patrón MVC, divide una aplicación interactiva en 3 partes como,
            modelo: contiene la funcionalidad y los datos principales
            vista: muestra la información al usuario (se puede definir más de una vista)
            controlador - maneja la entrada del usuario
        
        Esto se hace para separar las representaciones internas de información de las formas en que la información se presenta y se acepta del usuario. Desacopla los componentes y permite la reutilización eficiente del código.
        
        Uso
        * Arquitectura para aplicaciones Web en los principales lenguajes de programación.
        * Frameworks como Django y Rails.

        9. Patrón de pizarra / Blackboard pattern
        Este patrón es útil para problemas para los que no se conocen estrategias de solución deterministas. 
        
        El patrón de pizarra consta de 3 componentes principales.
            pizarra: una memoria global estructurada que contiene objetos del espacio de solución
            fuente de conocimiento - módulos especializados con su propia representación
            componente de control: selecciona, configura y ejecuta módulos.
        
        Todos los componentes tienen acceso a la pizarra. Los componentes pueden producir nuevos objetos de datos que se agregan a la pizarra. Los componentes buscan tipos particulares de datos en la pizarra y pueden encontrarlos mediante la coincidencia de patrones con la fuente de conocimiento existente.
        
        Uso
        * Reconocimiento de voz
        * Identificación y seguimiento de vehículos.
        * Identificación de la estructura de la proteína
        * La sonda señala la interpretación.

        10. Patrón de intérprete / Interpreter pattern
        Este patrón se utiliza para diseñar un componente que interpreta programas escritos en un lenguaje dedicado. Especifica principalmente cómo evaluar líneas de programas, conocidas como oraciones o expresiones escritas en un idioma en particular. La idea básica es tener una clase para cada símbolo del idioma.
        
        Uso
        * Lenguajes de consulta de bases de datos como SQL.
        * Lenguajes utilizados para describir protocolos de comunicación.

        Estilo: Centradas en datos

        Pizarron:
        El pizarrón es el núcleo de la arquitectura. Donde componentes externos a el se encargarán de procesar un dato y escribirlo en el pizarrón(Este funciona como centralizador). Cuando el pizarrón ya tiene todos los datos necesarios; el mismo podría generar una salida,Ejemplo: Sistema Fiscales

        Centrado en base de datos:
        Es un estilo común; Se trata de que una cantidad de componentes comparte una misma base de datos. de Ejemplo: aplicaciones que poseen comunicación por Internet.
        
        Sistema experto Basado en reglas:
        Este sistema no se ve muy seguido en aplicaciones modernas; un componente A (Tipo Cliente) consulta a uno B, donde este se encargará de tratar de entender si la petición del cliente es una consulta o regla. Para que el componente B logre resolver la petición se va a comunicar con un tercer componente © este trabajara como KDB: Knowledge DataBase.
    

        Estilo: Componentes Independientes

        Invocación Implícita:
            En este tipo de estilo, tendremos los compones y un bus de datos, donde los componentes se encargarán de publicar o escribir en el bus los datos y luego el bus se encargará de notificar esto a otros componentes. Componentes que estén interesados en saber que paso.
            El BUS de eventos posee dos familias grandes:
                - Publicar- Subscribir:
                    El componente Inicial publica un evento y otros componentes están suscritos.
                - Orientado a Servicios 2.0:
                    Tendrán un Bus Inteligente y este decide a quien le va a decir que hacer. Puede que un componente se encargue de publicar y otro a Subscribir

            Enterprise Service Bus (E.S.B.): Son buses inteligentes programables, Ellos tienen registrados componentes que el les va hablar o ellos le hablaran para indicarles que hacer. Un punto a denotar es que los componentes dentro del Bus no se comunican.

        Invocación Explícita:
            Vamos a tener componentes que se desarrollan separadamente pero se conocen entre si (Se desarrollan primero y luego se conectan). Ellos están desplegados independientemente y luego se encuentran en ejecución. Ellos se preguntan unos a otros que hay hacer hasta que el componente designado para esa tarea es alertado.

            Orientado a Servicios 1.0
## Metodologías:
    TRADICIONAL.- el objetivo es encontrar los problemas y diseñar una solución que ataque a estos problemas.(se da en una etapa de diseño)
    en el modelo tradicional falta el feedback (no tenemos feedback sobre las decisiones si no hasta que se implementa y se despliega la solución)

    ÁGILES.- el objetivo que la solución va ser evolutiva y se da paso a paso (se trata de momentos donde se puede evaluar nuestras decisiones)
        TRACER BULLETS esqueletos de solución, se plantea una prueba diciendo que la estructura que planteamos va a hacer algo, se implementa se mide y se evoluciona, sirve para hacer arquitectura iterativa mente


El Arquitecto de software va a conectar a las partes interesadas y los requerimientos de los mismos con la implementación del sistema.
Es decir tiene una visión global del proyecto en general y debe diseñar el software de tal manera que cumpla con los requerimientos de todas las partes interesadas.

Partes interesadas o Stakeholders:
    Cliente: Quiere tener su sistema respetando el presupuesto establecido y entregado a tiempo. Debará preocuparse por encontrar cuáles son los mayores riesgos y evitarlos.

    Manager: Querrá cumplir con los requerimientos del cliente y además tener la posibilidad de crear equipos que puedan autogestionarse y atacar diferentes partes del sistema de forma simultanea.

    Dev: Que sea fácil de implementar y mantener.

    Usuario: Que funcione, que haga lo que tiene que hacer cuando lo tenga que hacer.

    Tester QA: Que sea fácil de probar

Con todo esto en mente el Arquitecto deberá tomar las mejores desiciones para que el impacto del diseño sea agradable para todas estas partes.

## Roles
Es importante que diferenciemos el ROL del puesto de trabajo, hay roles que pueden ser desarrollados por la misma persona.
    Experto del dominio: En una metodologia tradicional, es la persona a la que acudimos para entender las necesidades del negocio. En metodologias Agiles --> stakeholders.

    Analista: funcional/de negocio, la persona responsable de definir los requerimientos que van a llevar al software a u buen puerto. 
        En el caso de Agiles el dueño del producto es quien arma las historias y que nos acompaña en el proceso de construcción del software.

    Administrador de sistemas / DevOps: Es el rol de operaciones y desarrollo, son las personas responsables de la infraestructura que alojara nuestra aplicación.

    Equipo de desarrollo: QA / Testing se encargan de la evaluación de nuestro software, comprobar que lo que se esta haciendo es lo que se espera que se haga. 
        
    Desarrolladores involucrados en la construcción del software. Arquitecto, diseña la solución y analisis de los requerimientos, es un papel mas estrategico. La arquitectura emerja del trabajo de un equipo bien gestionado.

    Gestor del proyecto / facilitador: Llevan al equipo a través del proceso iterativo e incremental, entender lo que pasa con el equipo y motivar el avance en el desarrollo del producto.

### Tipos de roles de acuerdo a metodologias:
    Desarrollo Tradiconal	                    Desarrollo en Cascada	                            Metodologías Ágiles
    Expertos del producto	                    Experto de dominio	                                Stakeholder
    Definen los alcances	                    Analista	                                        Product Owner
    Crean el producto	                        QA, Desarrollador, Arquitecto (aislados)	        Equipo de desarrollo
    Responsables de la Infraestructura	        Administrador de Sistemas	                        DevOps/SRE (Site Reliability Engineering)
    Gestionan/Entregan el proyecto	            Project/Product Manager	                            Facilitadores


## Proceso de Desarrollo
El proceso de desarrollo tradicional tiene etapas muy marcadas, que tienen entradas, procesos y salidas que funcionan como entradas de la siguiente etapa.

Etapas de desarrollo de software: Flujo lineal donde cada etapa tienen procesos, una entrada y salida.

### 1. Análisis de requerimientos
    Todo nace de un disparador que nos crea la necesidad de crear un artefacto o un sistema. Necesitamos entender cuál es el problema que queremos resolver. 
        Hay requerimientos de negocio.
        Requerimientos funcionales
        Requerimientos no funcionales.

    Se tiene un análisis del problema y una propuesta de diseño a la solución del problema. 
    En esta etapa el analista, arquitecto o equipo de desarrollo trabajan en conjunto para plantear cuales son las posibles soluciones a los problemas en diferentes alternativas como propuesta de valor: modelos, productos open source, documentación, frameworks.
        a Comprensión del problema
        b Abstracción
        c Modelado

    Entender el problema
        La parte más importante de entender el problema es: separar la comprensión del problema de la propuesta de solución, si no se entiende la diferencia entre estos dos puntos se tiende a solucionar problemas inexistentes y a hacer sobreingeniería.

        Problema:
        Detalla ¿que es lo que se va a resolver? (y qué no se va a resolver) sin entrar en detalles del “cómo”. -> (analisis del problema)
        El espacio del problema nos ayuda a entender que es lo que vamos a resolver y exactamente como imaginamos como esto va agregar un valor a nuestros usuarios sin entrar en detalle de cómo lo va a resolver el sistema.

            Aspectos que involucra el problema:
                Idea: ¿Qué queremos resolver?
                Criterios de éxito: ¿Cómo identificamos si estamos resolviendo el problema?
                Historias de usuario: Supuestos de historias de lo que va a ganar el usuario al utilizar la solución usando las características del problema a resolver.

        Solución:
        Brinda el detalle del ¿“cómo” se va a resolver?, reflejando los detalles del problema detectado y evitando resolver problemas que no se quiere o necesita resolver. --> (detalles técnicos)
        Se refleja en el espacio del problema y trata de resolverlo teniendo en cuenta todos los detalles técnicos necesarios.
            Consta de:
                Diseño: todo lo referente a la planificacion del software, desde diseño UI, UX hasta diseño de sistemas
                Desarrollo: escribir el codigo, configuraciones y contrataciones de servicios
                Evaluación: medir la eficiencia y eficacia del software frente al problema
                Criterios de aceptación: medir el impacto del software, no importa lo bueno que sea el problema si los usuarios no lo usan o no le ven uso
                Despliegue (deploy): lanzar el software en ambientes productivos (mercado) y empezar a mejorar las caracteristicas con un feedback loop (crear, medir, aprender)


### 2. Diseño de la solución: 
    Análisis profundo de los problemas para trabajar en conjunto y plantear posibles soluciones. 
        El resultado de esto debe ser el detalle de la solución, a través de requerimientos, modelado, etc.

    Una vez que entendemos el espacio del problema y el espacio de la solución, vamos a entrar a analizar los requerimientos de nuestro sistema.

    #### Tipos de Requerimientos:
        Requerimientos de producto: Los podemos dividir en 3.
            * Capa de requerimientos de negocio, son reglas del negocio que alimentan los requerimientos del negocio.
            * Capa de usuario, tienen que ver en cómo el usuario se desenvuelve usando el sistema, qué atributos del sistema se deben poner por encima de otros.
            * Capa Funcional, se ven alimentados por requerimientos del sistema, ¿qué cosas tienen que pasar operativamente?
                Esta capa se ve afectada por las restricciones que pueden afectar operativamente a lo funcional.

        Requerimientos de proyecto: Tienen que ver más con el rol de gestor de proyectos, se usan para dar prioridad a los requerimientos del producto.
            Estos dos mundos de requerimientos hablan de las prioridades del equipo de trabajo del proyecto.

        Requerimientos de producto:
            * Requerimientos funcionales: Tienen que ver con las historias de usuarios, que hablan sobre específicamente lo que hace el sistema, por ejemplo que usuario ingrese al sistema.
            * Requerimientos no funcionales: son aquellos que agregan cualidades al sistema, por ejemplo que el ingreso de ese usuario sea de manera segura.

    #### Riesgos
        Los riesgos son importantes para priorizarlos y atacarlos en orden y asegurar que las soluciones arquitectónicas que propongamos resuelvan los problemas más importantes.
            Intenta tratar los riesgos con posibles escenarios de fracaso y que pasaría en caso de que ese riesgo se haga real.

            Tipos de Riesgos:
                Riesgos de ingeniería: Relacionados con el análisis, diseño e implementacion.
                Riesgo de proyecto: relacionados con la planificación, secuencionamiento de trabajo, entregas, tamaños de equipo etc.

            Como identificar los riesgos:
                En la toma de requerimientos --> dificultad / complejidad
                En los atributos de calidad (son las expectativas de usuario ante la funcionalidad de un producto) --> incertidumbre, cuanto mas incertidumbra hay, mas alto es el riesgo.
                Conocimiento del dominio --> Riesgo prototípico, son aquellos que podemos atacar de forma estándar.

            Una vez que tenemos los riesgos identificados, debemos priorizarlos, recuerda que no es necesario mitigarlos todos, debemos siempre tener en cuenta y dar prioridad a aquellos riesgos que ponen en peligro la solución que se esta construyendo.

    #### Restricciones
        Las restricciones en el contexto de un proceso de desarrollo de software se refiere a las restricciones que limitan las opciones de diseño o implementaciones disponibles al desarrollar.
            Los SH nos pueden poner limitaciones relacionadas con su contexto de negocio, limitaciones legales.
            También hay limitaciones técnicas relacionadas con integraciones con otros sistemas.
            El ciclo de vida del producto va a agregar limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.
        
        El arquitecto debe balancear entre los requerimiento y las restricciones.

    #### Idoneidad funcional
        Es un concepto que conecta lo que el usuario quiere hacer con el sistema con como están implementadas las funciones que permiten hacer eso que el usurio quiere hacer.

        Hay tres sub características:
        -Completitud funcional
        Cuan completa está la implementación con respecto a lo que se espera que haga el sistema. Se mide mirando cuales son los requerimientos funcionales que no pidieron contra los que ya están implementados.

        -Exactitud funcional
        Cuan preciso es el sistema para implementar lo que está implementando. Se compara el resultado esperado con el resultado obtenido.

        -Pertinencia funcional
        Cuan alineado está lo que se implementó con lo que se necesita. Se mide comparando cuántos objetivos se cumplieron y cuantos esperamos que se peudan cumplir.

### 3. Desarrollo y evaluación
    Implementación de la solución, para garantizar que lo que se esta construyendo es lo que se espera. 
        Al finalizar esta etapa tendremos un artefacto de software.

    Los programadores desarrollan, implementan, evalúan, ejecutan tests para garantizar la solución de lo que se espera. Los criterios de aceptación de la solución necesitan un set de requerimientos necesarios para ser la conexión entre la etapa anterior y la de desarrollo y evaluación. Al finalizar esta etapa obtendremos un artefacto de software.
        a) Solución detallada
        b) Programación e integración
        c) Automatización de pruebas

### 4. Despliegue
    Aquí vamos a necesitar de infraestructura y de roles de operación para poder poner el artefacto a disponibilidad.

    En esta etapa se necesita de la infraestructura, roles de operación para poder dárselo al usuario final. Un ejemplo puede ser una aplicación de WEB alojada en un servidor o una app móvil alojada en una app store.
        a) Artefacto de Software
        b) Infraestructura
        c) Operaciones

### 5. Mantenimiento y Evolución
    Desarrollo + despliegue + mantenimiento, en esta etapa estamos atentos a posible mejoras que se hacen al sistema. 
        En esta etapa el software se mantiene hasta que el software ya deja de ser necesario.

    Se esta atento a la detección de errores y cualquier nueva funcionalidad a desarrollar para realizar cambios en la aplicación y volver a poner a disponibilidad del usuario. Es decir en esta etapa se mantiene el software hasta que se considere lo contrario.
        a) Software disponible
        b) Arreglos de errores
        c) Nuevas funcionalidades
        d) Sistema deprecado.

