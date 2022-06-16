// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*function información(){
    const nombreMio = "santiago"
    const nombreAmigo = "daniel"
    let nombreUsuario = prompt("Ingrese nombre de usuario").toLowerCase()
    if(nombreUsuario===nombreMio){
        console.log(" Hola tocayo, Yo tambien me llamo " + nombreMio)
    }else if(nombreUsuario===nombreAmigo){
        console.log("Hola " + nombreUsuario + " Te llamas igual que mi amigo " + nombreAmigo)
    }else if(nombreUsuario.trim().length==0){
        console.log("No ingresaste nombre")
    }else{
        console.log("Nombres distintos")
    }
}
información();
*/
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*function edad(){
    const edadMia = 27;
    let edadUsuario = Number(prompt("Ingrese su edad:"))
    if(edadUsuario===edadMia){
        console.log("Tenemos edades iguales: " + edadMia)
    }else if(edadUsuario>edadMia){
        console.log("Eres mayor, mi edad es: " + edadMia)
    }else if(edadUsuario<edadMia){
        console.log("Eres menor, mi edad es: " + edadMia)
    }else{
        console.log("Edad fuera de rango")
    }
}
edad();
*/
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor8 a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.



function ingresoBar(){
    let documento = prompt("¿Tiene documento de identificacion? Ingrese: SI o NO ").toUpperCase();
    let edad = Number(prompt("Ingrese su edad"))
    if(documento == "SI" && edad>=18){
        console.log("Acceso consebido")
    }else if(documento== "NO" || edad<18 ){
        console.log("Ingreso no cencebido")
    }else{
        console.log("Respuesta no valida")
    }
}


ingresoBar()