# import modules entre archivos js
.- la manera de importar dependencias o modulos entre archivos es la siguiente:

## Por defecto / default
si exportamos por defecto, tambien debemos importar por defecto

```JavaScript
import NombreDeLaVariable /* por convención debe de tener el mismo nombre con el que se exporto, utilizando UpperCamelCase */ from './test' //la ruta del archivo de donde se esta exportando, no necesitamos colocar la extensión js en este caso
```

## Por nombre / de manera específica
```JavaScript
import {nombreDeLaVariable} /* debe de tener el mismo nombre de la constante o variabe con la que se exporto */ from './test' //la ruta del archivo de donde se esta exportando, no necesitamos colocar la extensión js en este caso
```

## Global
```JavaScript

import * as testGlobal from './test'

import * /* al señalar el * estoy indicando todo */ as /* as me sirve para nombrar al nuevo objeto con el que accedere a las variables del archivo origen, de la misma forma en como accedo a las propiedades de un objeto, esto es con punto*/ nombreGeneralDelObjeto from './test' //la ruta del archivo de donde se esta exportando, no necesitamos colocar la extensión js en este caso
```

# export modules entre archivos js
.- la manera de exportar dependencias o modulos entre archivos es la siguiente:

## Por defecto / default
solo puede expoortarse por defecto __una sola vez por archivo__

__si exportamos por defecto, tambien debemos importar por defecto__

```JavaScript
export default nombreDelModulo //utilizando lowerCamelCase
```

## Por nombre / de manera específica
```JavaScript
export const x = i => i + 1 // en este caso el nombre de la variable es x, y con x debe de importarse
```
__si exportamos por nombre, tambien debemos importar por nombre__
