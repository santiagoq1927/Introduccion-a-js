/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $numeroFamiliares = document.querySelector('#cantidad-integrantes');
    const numeroFamiliares = Number($numeroFamiliares.value);
    agregarIngrantes(numeroFamiliares);
    event.preventDefault();
};

document.querySelector('#analizar-edad').onclick = function(event) {
    var edad_integrantes = edades();
    var edad_mayor = maxima_edad(edad_integrantes);
    var edad_menor = minima_edad(edad_integrantes);
    var edad_promedio = promedio_edad(edad_integrantes);
    mostrarDatosCalcular();
    mostrarMayor(edad_mayor);
    mostrarMenor(edad_menor);
    mostrarPromedio(edad_promedio);
    event.preventDefault();
};

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $numeroFamiliares = document.querySelector('#cantidad-integrantes');
    const numeroFamiliares = Number($numeroFamiliares.value)
    agregarIngrantes(numeroFamiliares);
    event.preventDefault();
};

document.querySelector('#reset').onclick = function(event) {
    borrarIntegrantes();
    ocultarBotonCalculo();
    ocultarDatosCalcular();
    event.preventDefault();
};

document.querySelector('#salario').onclick = function(event) {
    mostrarCamposSalario();
    event.preventDefault();
};

document.querySelector('#siguiente-salario').onclick = function(event) {
    const $trabajadores = document.querySelector('#cantidad-salario');
    const trabajadores = Number($trabajadores.value);
    console.log(trabajadores);
    agregarTrabajadores(trabajadores);
    event.preventDefault();
};

document.querySelector('#analizar-salario').onclick = function(event) {
    mostrarCamposAnalisisSalario();
    var salarios_integrantes = salarios();
    var salario_prom = promedio_salario(salarios_integrantes);
    var salario_max = maximo_salario(salarios_integrantes);
    var salario_min = minimo_salario(salarios_integrantes);
    mostrarMayorSalario(salario_max);
    mostrarMenorSalario(salario_min);
    mostrarPromedioSalario(salario_prom);
    event.preventDefault();
};

document.querySelector('#ocultar-salario').onclick = function(event) {
    borrarSalarios();
    ocultarBotonAnalisisSalario();
    ocultarAnalisisSalario();
    event.preventDefault();
};

function mostrarMayorSalario(salario_mayor){
    document.querySelector('#mayor-salario').textContent=salario_mayor;
};
function mostrarMenorSalario(salario_menor){
    document.querySelector('#menor-salario').textContent=salario_menor;
};

function mostrarPromedioSalario(salario_promedio){
    document.querySelector('#promedio-salario').textContent=salario_promedio;
};

function mostrarCamposAnalisisSalario(){
    document.querySelector('#analisis-salario').className=' ';
};

function mostrarCamposSalario(){
    document.querySelector('#integrantes-salario').className=' ';
};

function borrarIntegrantes(){
    var edad_integrantes = document.querySelectorAll('.integrante input');
    console.log("edad: " +edad_integrantes);
    for(let i=0;i<edad_integrantes.length;i++){
        edad_integrantes[i].remove;
    }
};

function borrarSalarios(){
    var salario_int = document.querySelectorAll('.salarioA input');
    console.log("Salarios: " + salario_int);
    for(let i=0;i<salario_int.length;i++){
        salario_int[i].remove;
    }
};

function ocultarCampoAnalisisSalario(){
    document.querySelector('#analizar-salario').className='oculto';
};

function ocultarBotonAnalisisSalario(){
    document.querySelector('#analizar-salario').className='oculto';
};

function ocultarAnalisisSalario(){
    document.querySelector('#analisis-salario').className='oculto';
};

function ocultarCalcular(){
    document.querySelector('#analizar-edad').className='oculto';
};

function ocultarSalario(){
    document.querySelector('#salario').className='oculto';
};

function ocultarDatosCalcular(){
    document.querySelector('#analisis-edad').className='oculto';
};

function mostrarOcultarSalario(){
    document.querySelector('#ocultar-salario').className=' ';
};

function mostrarAnalizarSalario(){
    document.querySelector('#analizar-salario').className=' ';
};

function mostrarCalcular(){
    document.querySelector('#analizar-edad').className=' ';
};

function mostrarSalario(){
    document.querySelector('#salario').className=' ';
};

function mostrarDatosCalcular(){
    document.querySelector('#analisis-edad').className=' ';
};

function mostrarMayor(edad_mayor){
    document.querySelector('#mayor-edad').textContent=edad_mayor;
};
function mostrarMenor(edad_menor){
    document.querySelector('#menor-edad').textContent=edad_menor;
};

function mostrarPromedio(edad_promedio){
    document.querySelector('#promedio-edad').textContent=edad_promedio;
};

function maxima_edad(edad_integrantes){
    var edad_mayor=0;
    for(let i=0;i<edad_integrantes.length;i++){
        if(edad_integrantes[i]>edad_mayor){
            edad_mayor=edad_integrantes[i];
        }
    }
    return edad_mayor;
};

function minima_edad(edad_integrantes){
    var edad_menor=0;
    edad_menor=edad_integrantes[0];
    for(let i=1;i<edad_integrantes.length;i++){
        if(edad_integrantes[i]<edad_menor){
            edad_menor=edad_integrantes[i];
        }
    }
    return edad_menor;
};

function promedio_edad(edad_integrantes){
    var edad_promedio=0;
    for(let i=0;i<edad_integrantes.length;i++){
        edad_promedio=edad_promedio+edad_integrantes[i];
    }
    edad_promedio=edad_promedio/edad_integrantes.length;
    return edad_promedio;
};

function edades(){
    var edades=[];
    var edad_integrantes = document.querySelectorAll('.integrante input');
    for(let i=0;i<edad_integrantes.length;i++){
        /*if(edad_integrantes[i] === ""){
            continue;
        }*/
        edades.push(Number(edad_integrantes[i].value));
    }
    return edades;
};

function agregarIngrantes(integrantes){
    mostrarCalcular();
    mostrarSalario();
    for(let i=0;i<integrantes;i++){
        const $div = document.createElement('div');
        $div.className='integrante';
        const $lblIntegrante = document.createElement('label');
        $lblIntegrante.textContent="Integrante # " + (i+1) + ": "
        const $txtIntegrante = document.createElement('input');
        document.querySelector('#integrantes').appendChild($div);
        $div.appendChild($lblIntegrante);
        $div.appendChild($txtIntegrante);
    }
    
};

function agregarTrabajadores(trabajadores){
    mostrarOcultarSalario();
    mostrarAnalizarSalario();
    console.log("integrantes adentro " + trabajadores)
    for(let i=0;i<trabajadores;i++){
        const $divIntegrantes = document.createElement('div');
        $divIntegrantes.className='salarioA';
        const $lblIntegranteSalario = document.createElement('label');
        $lblIntegranteSalario.textContent="Salario anual, integrante # " + (i+1) + ": "
        const $txtIntegranteSalario = document.createElement('input');
        document.querySelector('#integrantesSalario').appendChild($divIntegrantes);
        $divIntegrantes.appendChild($lblIntegranteSalario);
        $divIntegrantes.appendChild($txtIntegranteSalario);
    }
    
};

function maximo_salario(salario_integrantes){
    var salario_mayor=0;
    for(let i=0;i<salario_integrantes.length;i++){
        if(salario_integrantes[i]>salario_mayor){
            salario_mayor=salario_integrantes[i];
        }
    }
    return salario_mayor;
};

function minimo_salario(salario_integrantes){
    var salario_menor=0;
    salario_menor=salario_integrantes[0];
    for(let i=1;i<salario_integrantes.length;i++){
        if(salario_integrantes[i]<salario_menor){
            salario_menor=salario_integrantes[i];
        }
    }
    return salario_menor;
};

function promedio_salario(salario_integrantes){
    var salario_promedio=0;
    for(let i=0;i<salario_integrantes.length;i++){
        salario_promedio=salario_promedio+salario_integrantes[i];
    }
    salario_promedio=salario_promedio/salario_integrantes.length;
    return salario_promedio;
};

function salarios(){
    console.log("Entra a metodo de salario");
    var salarios=[];
    var salario_integrantes = document.querySelectorAll('.salarioA input');
    for(let i=0;i<salario_integrantes.length;i++){
        salarios.push(Number(salario_integrantes[i].value));
    }
    return salarios;
};





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
