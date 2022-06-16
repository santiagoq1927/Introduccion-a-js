// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

function sumar(numero1,numero2){
    let resultadoSuma = numero1 + numero2;
    return resultadoSuma;
}

function restar(numero1,numero2){
    let resultadoResta = numero1 - numero2;
    return resultadoResta;
}

function seleccionarOperacionAritmetica(operacionIndicada){
 
    if(operacionIndicada=="+"){
        let numero1 = Number(prompt("Ingrese primer valor para sumar"));
        let numero2 = Number(prompt("Ingrese segundo valor para sumar"));
        let resultadoSuma= sumar(numero1,numero2)
        console.log(`Resutlado de la suma entre ${numero1} y ${numero2} es ${resultadoSuma}`)
    }
    else if(operacionIndicada=="-"){
        let numero3 = Number(prompt("Ingrese primer valor para restar"));
        let numero4 = Number(prompt("Ingrese segundo valor para restar"));
        let resutladoResta= restar(numero3,numero4)
        console.log(`Resutlado de la ressta entre ${numero3} y ${numero4} es ${resutladoResta}`)
    }else{ 
        console.log("Operacion no valida");
    }
}

var opcion= prompt("Ingrese + para realizar suma. Ingrese - para realizar resta");
seleccionarOperacionAritmetica(opcion);

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

/*
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const operador = prompt('Ingrese + o -');
const numero1 = 1;
const numero2 = 2;

let resultado;
if (operador === '+') {
    resultado = sumar(numero1, numero2);
} else {
    resultado = restar(numero1, numero2);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
console.log(
    `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
);
*/
