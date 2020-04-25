# Números

Los operadores matemáticos más comunes son:
- suma ( + )
- resta ( - )
- multiplicación ( * )
- división ( / )

Al trabajar con decimales a veces se realizan operaciones adicionales para conseguir un resultado preciso, dado que JS no es tan preciso al guardar decimales. Ej:

```JavaScript
var precioDeVino = 29.90;
var total = ( precioDeVino * 100 * 3) / 100; // 89.7
```
* Redondear una operación se utiliza la función: `Math.round(total) // 90`
* Y para convertir de string a decimal: `parseFloat("200.09")`
___
