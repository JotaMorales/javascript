// window.addEventListener('DOMContentLoaded', function() {
//     console.log('Vanilla JS: el DOM esta listo');
// });

// console.log('run...');

// $(document).ready(function() {
//     console.log('El DOM esta listo');
// });

// $(document).ready(function() {
//     console.log('El DOM esta listo')
// });

// $(function() {
//     console.log('El DOM esta listo');
// });

// $(() => {
//     console.log('El DOM esta listo');
// });

// //Agregamos un botón al body como primer elemento
// $('body').prepend('<button id="btnjQuery">CLICK</button>');
// //Asociamos el evento click al botón creado
// on('click', function() {
//     console.log("Respuesta a un click");
// });
// $('#btnjQuery'). //Asociamos el evento doble click al botón creado
// $('#btnjQuery').on('dblclick', () => {
//     console.log("Respuesta al doble click");
// });



const productos = [
    { id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan", precio: 50 },
    { id: 4, nombre: "Flan", precio: 100 }
];

for (const producto of productos) {
    $("#app").append(`
    <div>
        <h4> Producto: ${producto.nombre}</h4>
        <b> $${producto.precio}</b>
        <button id="btn${producto.id}-LS">Guardar en LocalStorage</button>
        <button id="btn${producto.id}-SS">Guardar en SessionStorage</button>
    </div>`)

    $(`#btn${producto.id}-LS`).on('click', function() {
        localStorage.setItem(`${producto.nombre}`, JSON.stringify(producto))
    })

    $(`#btn${producto.id}-SS`).on('click', function() {
        sessionStorage.setItem(`${producto.nombre}`, JSON.stringify(producto))
    })
}