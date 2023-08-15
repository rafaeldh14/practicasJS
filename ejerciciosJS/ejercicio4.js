//Ejercicio 4: Verificación de contraseña
//Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado.

function ejercicio4() {
let contrasena = prompt("Ingrese su contrasena");

if (contrasena === "secreto123") {
    alert("Acceso concedido");
}if (contrasena === null || contrasena !== "secreto123") {
    alert("Acceso denegado");
}
}
