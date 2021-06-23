// let usuario = prompt("Ingrese tu nombre y apellido");

// localStorage.setItem()

localStorage.setItem('nombre', prompt('Cual es tu nombre?'));
localStorage.setItem('apellido', prompt('Cual es tu apellido?'));
sessionStorage.setItem('fecha', prompt('¿Cual es la fecha de hoy?'));

let nombre = localStorage.getItem('nombre');
let apellido = localStorage.getItem('apellido');
let fecha = sessionStorage.getItem('fecha');

console.log('Hola' + ' ' + nombre + ' ' + apellido + ',hoy es ' + fecha);