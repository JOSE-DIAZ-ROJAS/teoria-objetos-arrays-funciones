# [OBJETOS] 
## 1. CREACION DE OBJETOS
Se crea con  const y let, sirve para agrupar valores relacionados que pertenecen a dicho objeto.

```bash
const person = {
name : 'juan',
lastName : 'perez',
age : '30',
```
## 2. ACCEDER  A LOS VALORES
1. Se accede a las propiedades de un objeto con una simple notación de puntos

```bash

person.name; 
```
2. usando la desestructuracion de objetos
```bash
const person = {
name : 'juan',
lastName : 'perez',
age : '30',
};
const { name , account:{interbank},lastName} = person;
console.log(lastName);
console.log(name);
console.log(interbank);
```
## 3. AGREGAR VALORES
 Se puede agregar  valores usando el nombre del objeto seguido de la notacion de punto y el nombre de la nueva propiedad y finalmente igualando al valor de la nueva propiedad. ejem: 
 ```bash

person.nationality = 'peru';
```
## 4. MODIFICAR VALOR
se puede modificar el valor de la propiedad  de un objeto haciendo uso de la siguiente notacion:person.age = 20;
```bash
const person = {
name : 'juan',
lastName : 'perez',
age : '30',
person.age = 20;
```
## 5. ELIMINAR VALOR
Puedes eliminar una propiedad  mediante el operador delete, seguido del nombre del objeto y usando la notacion de punto para referirse a la propiedad  a eliminar.
```bash

delete person.edad;
```

## 6. CONGELAR OBJETOS
Esto no permite agregar,  eliminar, modificar los valores, se usa el metodo freeze.

```bash

Object.freeze(person);
```

## 7. SELLAR OBJETOS
Esto no permite agregar, eliminar,pero si permite modificar los valores, se usa metodo seal.

```bash

Object.seal(person);
```
## 8. UNIR OBJETOS
Es posible unir 2 objetos usando 2 metodos.

```bash
const unirObjetos = Object.assign(developer,diego);
console.log(unirObjetos); 

```

unir  objetos con spread operator
```bash
const unirObjetos2 = {...developer,...diego};
console.log(unirObjetos);
```
## 9. THIS EN OBJETO LITERAL
JavaScript tiene una palabra clave especial, this, que puedes usar dentro de un método para referirte al objeto actual. 
## 10. RECORRER OBJETOS
Se hace uso de las propiedades:
1. (object.keys) se obtiene un arreglo de las propiedades
2. (object.values) se obtiene un arreglo de los valores(object.values) se obtiene un arreglo de los valores
3. (object.entries) crea un array cuyos elementos son arrays [propiedad, valor] 

# [ARRAYS]
## 1. CREACION DE ARRAY
Para agrupar datos,los elementos son del mismo tipo de dato. Cada elemento tiene una pocisión (indice).ejem:
```bash
const phone = ['j11','s20','p8', '14promax'];
console.log(phone);
```
## 2. ACCEDER A LOS VALORES  DE UN ARRAYS
const x = [1, 2, 3, 4, 5];
1. usando la propiedad:
```bash
console.log(x[i]); // siendo i el indice
```
2. Desestructuracion de arrays
```bash
const [y, z , a] = x;
console.log(y); // 1
console.log(z); // 2
console.log(a); // 3
```
## 3. AGREGAR  y ELIMINAR VALORERS DE ALOS ARRAYS
const phone = ['j11','s20','p8', '14promax'];
console.log(phone);

1. mutabilidad(modifica el estado original)
```bash
phone.push('15promax'); // agrega un elemento al array original
console.log(phone); 
phone.pop('15promax');// elimina un elemento del array
console.log(phone);
```
2. inmutabilidad(no modifica el estado original, sino que crea una copia del original y le añade un nuevo elemento )
```bash
const nuevoarreglo = [...phone,'motog9']; // crea el nuevo arreglo con el nuevo elemento
console.log(phone);
console.log(nuevoarreglo);
```
## 6. ITERAR LOS ARRAYS
1. forma imperativa (paso apaso lo que se tiene que hacer para lograr la iteracion)
```bash
for(let i=0; i<values.length; i++){
console.log(values[0]);
}
```
 2. forma declarativa (no se conoce que hace el forEach pero lo hace la iteracion)
```bash
values.forEach((valore)=>{ console.log(valore);});
```
# [FUNCIONES]
Las funciones nos permiten recibir parametros, englobar logica y retornar un resultado.
## 1. FUNCIONES DECLARATIVAS
función clásica, tienen nombre, se puede llamar desde cualquier parte del código
```bash
function sumNum(a,b){

return a+b;
}
console.log(sumNum(2,8));
```
## 2. FUNCIONES EXPRESIVAS
No tienen nombre, 
Estas son funciones anónimas, se almacena en una variable para luego usarlo, se le puede
invocar lineas después de haberla declarado, pero no desde cualquier parte del código.
1. Función anónima Arrow function (función flecha)
```bash
const restNumbers = (num1 , num2)=>{ return num1-num2};
console.log(restNumbers(20,7));
```
2. Función anónima usando palabra reservada function
```bash
const producto = function(num1,num2){
return num1*num2;
};
console.log(producto(2,200));
```
```bash
let saludo = function(nombre){

return `hola ${nombre}`;
};
console.log(saludo("carlos"));
```

## 3. COMUNICACION ENTRE FUNCIONES
Comunicación entre funciones
```bash
function initApp() {
console.log('...iniciando App');
const user = 'jose';

(user? authenticated(user) : noAuthenticated());
};
function authenticated(userName){
console.log(`iniciaste sesion con: ${userName}`);
};
function noAuthenticated(){
console.log("no iniciaste sesion");
};
initApp();
```
