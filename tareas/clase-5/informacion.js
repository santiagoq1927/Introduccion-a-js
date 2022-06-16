const $botonInformacion= document.querySelector('#informacion')
$botonInformacion.onclick = function(e){
  console.log("entro")
    let primerNombre = document.querySelector('#primer-nombre-usuario').value;
    let segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
    let apellidos = document.querySelector('#apellidos-usuario').value;
    let edad = Number(document.querySelector('#edad-usuario').value);
    let nombreCompleto = primerNombre + " " + segundoNombre + " " + apellidos 
    console.log(nombreCompleto + " Edad: " + edad)
    document.querySelector('#saludo').innerText="Bienvenido, " + nombreCompleto;
    document.querySelector('#inf-usuario').value="Nombre completo: " + nombreCompleto + " y edad: " + edad;
    return false;
}