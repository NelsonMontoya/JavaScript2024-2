
// con esto puedo cambiar la variable
let pi = 3.1416;

console.log(pi);

pi = 'Juan';

console.log(pi);
let price = 10;
let day = "Monday ";
//si day es igual a "Monday" hacelo siguiente
/**
 * si es verdad.  A price le resta 1.5
 * si es falso.  A price le suma 1.54
 */
day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(price);
//para saber el tipo de dato
console.log(typeof(day));

//funciones

//cuando hace sola cosa
//tiene parametros,como mínimo 2
const sumar = (n1,n2) => n1+n2;

//TIENE UN SOLO PARAMETRO
const restar = numero => 10-numero;

//cuando no hay parametros

const multiplicar =() => 10*20;

//cuando hace más validaciones

//tiene parametros,como mínimo 2
const sumarDos = (n1,n2) =>{
    let tipoN1 = typeof(n1);
    let tipoN2 = typeof(n2);

    return n1+n2;
} 

const restarDos = numero =>{
    numero >50 ? numero+=50: numero -10;
    return numero;
} 

//llamado
//sumar(6,5);
console.log(sumar('6',5));
console.log(restar('6',5));
console.log(sumarDos(6,5));
console.log(restarDos('hola'));

let nuevaFuncion = sumarDos;
console.log(nuevaFuncion(6,5));