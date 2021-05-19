var respuesta = prompt('Quiere registrarse?')
console.log(respuesta);
if (respuesta == 'si') {
    alert('Genial')
    var respuestaPositiva = prompt('Ingrese su nombre de usuario:')
    console.log(respuestaPositiva);
    var contrasena = prompt('Ingrese su contraseña:')
    console.log(contrasena);
    alert('Bienvenido');
} else if (respuesta == 'no') {
    alert('Hasta la próxima');
}




var respuesta = prompt('Quieres mirar esta pelicula?')
if (respuesta == 'no') {
    alert('Tu te lo pierdes');
} else {
    var edad = parseInt(prompt('Ingresa tu edad:'))
    if ((respuesta == 'si') && (edad >= 18)) {
        console.log(respuesta);
        alert('Disfruta la pelicula');
    } else if ((respuesta == 'si') && (edad <= 18)) {
        alert('Lo siento no tienes la edad suficiente');
    } else {
        alert('Ingresá una respuesta válida');
    }

}