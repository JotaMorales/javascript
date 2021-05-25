alert("La galleta de la suerte o de la fortuna es una especie de galleta de paredes delgadas y crujiente que ha sido horneada, en su interior lleva una pequeña tira de papel con palabras de sabiduría o profecías. Ingresa un numero del 1 al 10")
var respuesta = "si";

while (respuesta != 'no') {
    var numeroIngresado = parseInt(prompt('Piensa un numero del 1 al 10 0 escribi un no para terminar'));
    switch (numeroIngresado) {
        case 1:
            alert("Tendrás un día de alegrías y buenos momentos, disfrútalos como nunca.");
            break;
        case 2:
            alert("Concéntrate en lo que quieres lograr y ganaras. No lo olvides.");
            break;
        case 3:
            alert("El cielo sera tu limite, pues grandes acontecimientos te sucederán.");
            break;
        case 4:
            alert("Te sentirás feliz como un niño y veras al mundo con sus ojos.");
            break;
        case 5:
            alert("Confía en tu suerte, que es mucha y te rodeara de prosperidad.");
            break;
        case 5:
            alert("Hoy es el momento de explorar: no temas.");
            break;
        case 6:
            alert("Cuando busques lo que mas deseas, recuerda hacer tu mejor esfuerzo.");
            break;
        case 7:
            alert("Tu corazón estallara de alegría con la llegada de buenas noticias.");
            break;
        case 8:
            alert("Hoy seras reconocido por tus dones especiales y lograras ser feliz por muchas horas.");
            break;
        case 9:
            alert("Seras promovido en tu trabajo debido a tus logros y capacidades.");
            break;
        case 10:
            alert("Eres una persona a la que le gusta triunfar en la vida.");
            break;
        default:
            alert("GRACIAS POR JUGAR");
            respuesta = "no";
            break;
    }
}