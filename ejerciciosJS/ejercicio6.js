//Ejercicio 6: Decisión de beca
//Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
let nombre6 = "";
let edad6 = "";
let pais = "";
let departamento = "";


function becas() {
    nombre6 = prompt("Ingrese su nombre");
    edad6 = parseInt(prompt("Ingrese su edad"));
    pais = prompt("Ingrese su pais").toLowerCase();
    departamento = prompt("Ingrese su departamento").toLowerCase();

    if (edad6 > 18 && pais === "canada" && departamento === "toronto") {
        alert("Felicitaciones,"+ nombre6 + " Usted aplica para Beca");
    }else{
    alert("Lo sentimos, Usted no aplica para Beca");}
  }

