# Nodejs
Descargar mongo en dockers: docker run -d -p 27017:27017 --name mongodb mongo

docker images

docker ps -a

docker exec -it  mongo

show collections mostrar los archivos almacenados

crear tabla o ducmento: use nombreDelArchivo 
db.clase.insert({escuela: "Bedu"})
db.clase.insert({nombre: "Química", profesor: "Juan", alumnos: ["Andres", "Carlos"]})

crear un documento : db.nombreDelDocumento.insert({escuela:"Bedu"})

ver la información del documento: db.NombreDelDocumento.find() 
    para verlo de una manera más organizada: db.NombreDelDocumento.find().pretty()
    db.clase.find({profesor: "Juan"})
    
Busqueda con expresiones regulares:    
    db.clase.find({ "nombre": { $regex: "ca" } }) mientras tenga la cadena "ca" me trae esos resultados

    db.clase.find({ "nombre": { $regex: "MICA", $options: "i" } })

Eliminar documentos
db.clase.drop() se espera recibir un true

Para insertar y saber el id que se acaba de insertar
db.clase.insertOne({nombre: "Química", profesor: "Juan", alumnos: ["Andres", "Carlos"]})

Insertar varios registros 
db.clase.insertMany([
    {nombre: "Física", calificaciones: [{alumno: "Andres", calificacion: 90}, {alumno: "Carlos", calificacion: 75}]},
    {nombre: "Matematicas", calificaciones: [{alumno: "Andres", calificacion: 90}, {alumno: "Carlos", calificacion: 75}]}
])

Para manejar fechas en la consulta
db.clase.insert({fecha: new Date().toLocaleDateString()})

visualizar campos de manera descendente
db.alumnos.find().sort({nombre:1})

ver todos los registros de un solo campo
 db.alumnos.distinct("nombre")

 db.alumnos.find({edad: {$lt:25}},{nombre:"", edad:""})

  db.alumnos.find({edad: {$lt:25}},{nombre:"", edad:"", _id:0}) sin id

  Modificar registros:
  db.alumnos.update({nombre: "Carlos"}, {$set: {"edad": 27}})
  

