# Configurar contenedor
docker run -d -p 27017:27017 --name mongodb mongo

# Entrar al contenedor
docker exec -it 16eb8f4e8941 mongo

# Crear DB
use escuela

# # Mostrar colecciones
show collections

# Crear collecion
db.clase.insert({escuela: "Bedu"})
# Con arreglos
db.clase.insert({nombre: "Química", profesor: "Juan", alumnos: ["Andres", "Carlos"]})
# Eliminar colleccion
db.clase.drop()
# Con one para regresar el id
db.clase.insertOne({nombre: "Química", profesor: "Juan", alumnos: ["Andres", "Carlos"]})
# Con varios inserts
db.clase.insertMany([
    {nombre: "Física", calificaciones: [{alumno: "Andres", calificacion: 90}, {alumno: "Carlos", calificacion: 75}]},
    {nombre: "Matematicas", calificaciones: [{alumno: "Andres", calificacion: 90}, {alumno: "Carlos", calificacion: 75}]}
])
# Con date
db.clase.insert({fecha: new Date().toLocaleDateString()})
# Con timestamp
db.clase.insert({fecha: new Date()})

# Buscar
db.clase.find({nombre: "Química"})
db.clase.find({nombre: "Química", profesor: "Juan"})
## Like
# con %% al incio y al final
db.clase.find({ "nombre": { $regex: "ca" } })
# que sea exacto
# $ para el final 
# ^ para el inicio
db.clase.find({ "nombre": { $regex: "^Química$" } })
# Sin mayus
db.clase.find({ "nombre": { $regex: "MICA", $options: "i" } })
# en un arreglo
db.clase.find({alumnos: "Andres"})
# en un objeto
db.clase.find({"calificaciones.alumno": "Andres"})

# Más inserciones
db.alumnos.insertOne({grupo: "FS-01-2019"})
db.alumnos.insert({nombre: "Andres", edad: 26})
# Con array
db.alumnos.insert({nombre: "Carlos", edad: 24, materias: ["BD","FRONT"]})
db.alumnos.insert({nombre: "Lorena", edad: 25, materias: ["BD","BACK"]})
db.alumnos.insert({nombre: "Vannessa", edad: 17, materias: ["BD"]})

# Sort
db.alumnos.find().sort( { "nombre": 1 } ) 	-> Asc
db.alumnos.find().sort( { "nombre": -1 } ) 	-> Desc
# Count
db.alumnos.count({nombre: {$exists: true}})
# Agrupar
db.alumnos.distinct("nombre")
# Solo ciertos campos
db.alumnos.find({}, {nombre: "", edad: "", _id: 0 })

# Actualizar
db.alumnos.update({"nombre": "Andres"}, {$set: {"edad" : 27}})
db.alumnos.update({"nombre": "Andres"}, {$set: {"edad" : 25, "grupo":"FS-01-2019"}})
# Incrementar
db.alumnos.update({"nombre": "Andres"}, {$inc: {edad : 1}})

# Remover
db.alumnos.remove({nombre: "Lorena"})
# menor a 18
db.alumnos.remove({"edad":{$lt:18}})

# Exportar con docker
docker exec -i 03ee5926a618 mongoexport --db escuela --collection clase > backup.json
# Importar con docker
cat backup.json | docker exec -i 03ee5926a618 mongoimport --db escuela --collection clases