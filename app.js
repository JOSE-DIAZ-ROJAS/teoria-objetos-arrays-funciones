const person = {
    name : 'juan',
    lastName : 'perez',
    age : '30',
    
    account : {
        bcp : '20102092190',
        interbank : 6788293292,   
        tarjeta:{
            basica: 'blanco',
            premium: 'black',
        },
    
    },
    jobTitle : 'Full stack developer',
    };

    console.log(person.age);
    console.log(person.jobTitle);
    console.log(person.account.interbank);
    console.log(person.account.bcp);
// Agregar valotrres a un objeto
    console.log(person);
    person.nationality = 'peru';
    console.log(person);

// Eliminar valores de objetos
delete person.nationality;
console.log(person.account.interbank);

// Desestructuracion de objetos

const { name , account:{interbank,tarjeta:{premium}}, lastName} = person;
 console.log(lastName);
 console.log(name);
 console.log(interbank);
 console.log(premium);

 // desestructuracion de arrays
 const x = [1, 2, 3, 4, 5];
const [y, z , a] = x;
console.log(y); // 1
console.log(z); // 2
console.log(a); // 3

// congelar objetos
Object.freeze(person);
person.name = 'jose';
console.log(person); // juan

// unir objetos
const developer ={
name: "diego",
lastName: "cueva",
age: "30",
};

const diego = {
jobTitle : "frontend",
company: "utp",
};

const unirObjetos = Object.assign(developer,diego);
console.log(unirObjetos);

const unirObjetos2 = {...developer,...diego};
console.log(unirObjetos);


// palabra reservada this en objetos literales
const pc = {
so: 'windows',
ssd: '256G',
ram : "16G",
procesador: "intel 5700G",
tvideo : "4100 Nvidia",
};
 // RECORRER OBJETOS
//  (object.keys()) se obtiene un arreglo de las propiedades

let claves = Object.keys(pc); // se obtiene el array de propiedades
console.log(claves); // muestro el array
console.log(claves[0]); // se puede acceder  a las propiedades(elementods del array)

for (let i=0; i<claves.length; i++){  // se recorre dicho arreglo
 let clave = claves[i];
 console.log(clave);
 //console.log(pc[clave]);
}

// (object.values()) se obtiene un arreglo de los valores
let valores = Object.values(pc);
console.log(valores);
console.log(valores[1]);

for(let i=0; i<valores.length; i++){
let valor = valores[i];
console.log(valor);
}

// (object.entries()) crea  un array cuyos elementos son arrays  [propiedad, valor] 
// [[prop1,val1],[prop2,val2],[prop3,val3],[pro4,val4]]
let propvals = Object.entries(pc);
console.log(propvals);
console.log(propvals[4]);

for(let i=0;i<propvals.length;i++){
let propval = propvals[i];
console.log(propval);
}

// (usando boocle for...in)
   for(let clave in pc){
console.log(pc[clave]);
   }

// (usando object.entries() con un forEach())

Object.entries(pc).forEach(([hola,mundo])=>{console.log(mundo);});

// (usando object.entries() con for.....of
for(const[key,value] of Object.entries(pc)){
console.log(key);
};
//--------------------------ARRAYS-------------------------------------
// para agrupar datos,los elementos son del mismo tipo de dato. Cada elemento tiene una pocision (indice)
const values =["diego", "jose", "juan"]; // posiciones 0,1,2
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);

//forma imperativa (paso apaso lo que se tiene que hacer para lograr la iteracion)
for(let i=0; i<values.length; i++){
    console.log(values[0]);
}

// forma declarativa (no se conoce que hace el forEach pero lo hace la iteracion)

values.forEach((valore)=>{ console.log(valore);});

// En la mayoria de casos se usa arreglos de objetos
const arrobjects =[{id:1,
                    nombre:'jose'}, 
                   {id:2,
                    nombre:'juan'},
                   {id:3,
                    nombre:'diego'}
                  ];

console.log(arrobjects[2].id);

arrobjects.forEach((arrobject)=>{console.log(arrobject);})

//agregar elementos  a un array

const phone = ['j11','s20','p8', '14promax'];
console.log(phone);

//mutabilidad(modifica el estado original)
phone.push('15promax'); // agrega un elemento al array original
console.log(phone); 
phone.pop('15promax');// elimina un elemento del array
console.log(phone);

//inmutabilidad(no modifica el estado original, sino que crea una copia del original y le añade un nuevo elemento )
const nuevoarreglo = [...phone,'motog9'];
console.log(phone);
console.log(nuevoarreglo);



// --------------------FUNCIONES----------------------

// las funciones nos permite englobar logica
//----------------------DECLARATIVA------------------

//funcion clasica, tienen nombre, se puede llamar desde cualquier parte del codigo)
function sumNum(a,b){

    return a+b;
}
console.log(sumNum(2,8));

//-------------------------EXPRESIVA---------------
//no tienen nombre, no se pueden llamar desde cualquier parte del codigo
//Estas son funciones anonimas, se almacena en una variable para luego usarlo, se le puede
//invocar lineas despues de haberla declarado, pero no  desde cualquier parte del codigo.

// 1. Funcion anonima Arrow function (funcion flech)
const restNumbers = (num1 , num2)=>{ return num1-num2};
console.log(restNumbers(20,7));

// 2. funcion anonima usando palabra reservada function

const producto = function(num1,num2){
return num1*num2;
};
console.log(producto(2,200));


let saludo = function(nombre){

    return `hola ${nombre}`;
};
console.log(saludo("carlos"));



// argumentos y parametros que se le puede asiganar a una funcion
function message(name, lastName){
return `mi nombre es:${name} y mi apellido: ${lastName}.`
}
console.log(message('joseph','diaz'));


function promedio(v=[a,b,c,d]){
let inicial = 0;
let sumconinicial = v.reduce((acumulador,currentvalue)=> acumulador+currentvalue,inicial);
return sumconinicial/v.length;
};

console.log(promedio(v=[20,4,6,8]));


//comunicacion entre funcionese
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