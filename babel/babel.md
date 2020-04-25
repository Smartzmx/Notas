# babel

## install
* npm install --save-dev @babel/core @babel/preset-env babel-loader

* npm install --save core-js@3 regenerator-runtime

## Configuración

### babel-loader
abrir el archivo webpack.config.js y agregar la siguiente configuración

dicha configuración esta agregada como modules
````javascript
const path = require('path') // importamos el modulo de path para crear una ruta absoluta

const HtmlWebpackPlugin = require('html-webpack-plugin') // importamos el paquete html-webapck-plugin

module.exports = {
    // entry es la ruta del archivo donde va a buscar todas las dependencias en este caso de javascript juntar todos los archivos de js en este caso y lo va comprimir y consolidar_
    //(empaquetar) en uno solo archivo. podemos especificar uno o mas archivos, ya que también aplica para archivos tipo css,_
    //jpg y png
   entry: ['./src/js/index.js'], // ./ significa que estamo en el mismo nivel de carpeta
   // output, señala donde va a colocar el archivo que de como resultado de ese agrupamiento o empaquetamiento
   output: {
       path: path.resolve(__dirname,'dist'),
       filename:'js/bundle.js'
   },
   // configurando el paquete devServer, en el cual contentBase, es la ruta donde se encuentra la carpeta que subiremos_
   //al servisor web / hosting
   devServer: {
       contentBase:'dist'
   },
   plugins: [
       new HtmlWebpackPlugin({
           filename:'index.html', // es el nombre del archivo que se va a generar ante cualquier cambio
           template:'./src/index.html' // es la ruta donde va a tomar el archivo para indezarlo a la carpeta dist
       })
   ],
   module: { 
        rules:[ // en este arreglo vamos a cargar todos los loaders que necesitamos, los loaders son los paquetes que transforman un 
                //código a otro, por ejemplo SASS, o en este caso babel core
            {
                test: /\.js$/, // esto es una expression regular, que lo que hace en este caso es evaluar todos los archivos con terminación js
                exclude: /node_modules/, // esto es una expression regular, que lo que hace en este caso es excluir a la carpeta de node_modules,_
                                        // ya que ahi se encuentran archivos js, y no queremos que tome esos archivos
                use: {
                    loader:'babel-loader'
                }
            }
        ]
   }
}
````
## babel/preset-env

creamos el archivo __.babelrc__ en raiz del proyecto, con la siguiente configuración:

````javascript
{
    "presets": [
        ["@babel/env", {
            "useBuiltIns": "usage",
            "corejs": "3",
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}

````

