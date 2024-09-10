
let numeros =[1, 3, 5]

console.log(numeros.length);  //debe mostrar en consola 3

//agregrar un dato al final

numeros.push(20)

console.log(numeros); //debe mostrar todos los elementos del arrgelo

//quitar el último dato
numeros.pop()
console.log(numeros);

// arreglos con distintos tipos de dato

let datos = ["Juan", true,20, 10.56]

let arreglo = []

arreglo[0] = 10
arreglo[1] ="Pedro"

console.log(arreglo);

//loops

for (let i=0;i<datos.length;i++){
    console.log(datos[i]);
}


//METODOS DE LOS ARREGLOS

//.reduce()
let suma = numeros.reduce((suma,valor)=>{
    return suma+valor
})

console.log(suma);

//.forEach()

let sumaArreglo = 0
numeros.forEach((numero)=>{
    sumaArreglo+=numero;
})

console.log(sumaArreglo);

//.filter()

let filtro = numeros.filter(numero =>{
    return numero <5
})
console.log(filtro);

//.map()

let mapeo = numeros.map(valor =>{
    return ("$"+valor*20 )
})
console.log(mapeo);