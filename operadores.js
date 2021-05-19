console.log('Inicio');

//var nombre = prompt('Ingrese nombre');
//var apellido = prompt('Ingrese apellido');

//if (nombre != "coder" && apellido != "coder") {
//  console.log('No te llamas coderhouse')
//} else {
//  console.log('te llamas coderhouse');
//}

//var nombre = prompt('Nombre');

//if (nombre != '') {
//  console.log('Tu nombre es valido');
//} else {
// console.error('Error');
//}

//var nombre = prompt('Ingrese nombre');
//var apellido = prompt('Ingrese apellido');

//if (nombre != "" && apellido != "") {
//   console.log('Nombre y apellido validos')
//} else {
//  console.error('Error nombre o apellido vacios');
//}

var telefono = prompt('Ingrese telfono');
var email = prompt('Ingrese email');

if (telefono != "" || email != "") {
    console.log('Telefono o email valido');
} else {
    console.error('Telefono o email vacios');
}

//or and

var nombre = prompt('Ingrese nombre');
var nombreValido = nombre != "";
var tuNombreEsCoder = nombre == "CODER" || nombre == "coder";

if (nombre != "" && (nombre == "CODER" || nombre == 'coder')) {
    console.log('Nombre valido y es coder o CODER');

} else {
    console.error('Error: nombre invalido');
}