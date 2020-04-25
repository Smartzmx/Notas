# Tipos de comparaciones entre dos variables o valores
JavaScript tiene __comparaciones estrictas__ y __comparación abstracta__ o de __conversión de tipos__ . 

- Una __comparación estricta__ (por ejemplo, __``===``__) solo __es verdadera si los operandos son del mismo tipo y los contenidos coinciden__. 

- La __comparación abstracta__ más comúnmente utilizada (por ejemplo, __``==``__) __convierte los operandos al mismo tipo antes de hacer la comparación__. 

- Para las __comparaciones abstractas relacionales__ (p. Ej., __``<=``__), Los operandos __primero se convierten en primitivos__, y __luego en el mismo tipo__, antes de la comparación.

## Falsy values: 0, NaN, undefined, '', null

## Truthy: all the values that are not falsy

```javascript
var height

if (height){
  console.log('Variable is defined')
} else{
  console.log('Variable has NOT been defined')
}
//Variable has NOT been defined, because, the variable height has been just declared, but not defined, it does not have a value.

_______________
// para el caso donde la variable es igual a cero, en teoria tendría que ser falsa la condicion, pero, estamos colocando el operador or para señalar que lo tome como si fuera verdadera la condicion a evaluar
var height = 0

if (height || height === 0){
  console.log('Variable is defined')
} else{
  console.log('Variable has NOT been defined')
}

//Variable is defined
```

## Igualdad (``==``)

El operador de igualdad __convierte los operandos__ __(si no son del mismo tipo)__, luego aplica una comparación estricta. __Si ambos operandos son objetos__, entonces JavaScript __compara las referencias internas__ que son iguales cuando los operandos se refieren al mismo objeto en la memoria.

```javascript
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 == object2 // false
0    == undefined  // false
null == undefined  // true
```

## Identidad / igualdad estricta (``===``)

El operador de identidad devuelve verdadero si los operandos son estrictamente iguales __sin conversión de tipo__.
```javascript
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 // false
```

> "__Se recomienda usar el triple igual siempre que se este comparando variables.__"
---
