let respuesta
    // let respuesta = prompt('Llego el HOT SALE!, encontraste lo que buscabas?');
console.log(respuesta);
if (respuesta == 'no') {
    alert('Que estas esperando!?');
} else if (respuesta == 'si') {
    console.log(respuesta);
    alert('Bienvenido!');
}


function cuotas(valorTotal, cantidadCuotas) {
    return valorTotal / cantidadCuotas;
}
if (respuesta == 'si') {

}


let totalIngresado //= parseInt(prompt('¿Cual es el valor del producto?'));
let cuotasIngresados //= parseInt(prompt('¿Cuantas cuotas quieres?'));
    //alert('El valor de cada cuota es $' + (cuotas(totalIngresado, cuotasIngresados)).toFixed(2));

const ArrayProductos = [];



class Producto {
    constructor(marca, temporada, talle, stock, precio) {
        this.marca = marca;
        this.temporada = temporada;
        this.talle = talle;
        this.stock = stock;
        this.precio = parseFloat(precio);
    }
    agregar() {
        for (const producto in this) {
            console.log(producto + ": " + this[producto]);
        }
    }

}



let producto1 = new Producto("camiseta Cardinals", 2021, 3, true, 2199.00);
let producto2 = new Producto("camiseta Cardinals", 2021, 4, true, 2199.00);
let producto3 = new Producto("camiseta Cardinals", 2021, 2, false, 2199.00);
let producto4 = new Producto("camiseta Estrella", 2020, 3, true, 1899.00);
let producto5 = new Producto("camiseta Estrella", 2020, 4, true, 1899.00);
let producto6 = new Producto("camiseta Estrella", 2020, 2, false, 1899.00);
let producto7 = new Producto("camiseta Velocidad y Resistencia", 2020, 3, true, 1799.00);
let producto8 = new Producto("camiseta Velocidad y Resistencia", 2020, 4, true, 1799.00);
let producto9 = new Producto("camiseta Velocidad y Resistencia", 2020, 2, false, 1799.00);
let producto10 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 3, true, 2199.00);
let producto11 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 4, true, 2199.00);
let producto12 = new Producto("camiseta Velocidad y Resistencia Vintage", 2019, 2, false, 2199.00);
let producto13 = new Producto("camiseta Bahiense del Norte", 2021, 3, true, 2199.00);
let producto14 = new Producto("camiseta Bahiense del Norte", 2021, 4, true, 2199.00);
let producto15 = new Producto("camiseta Bahiense del Norte", 2021, 2, false, 2199.00);
let producto16 = new Producto("camiseta Reconquista", 2020, 3, true, 1899.00);
let producto17 = new Producto("camiseta Reconquista", 2020, 4, true, 1899.00);
let producto18 = new Producto("camiseta Reconquista", 2020, 2, false, 1899.00);
let producto19 = new Producto("camiseta Fireballs", 2019, 3, true, 1799.00);
let producto20 = new Producto("camiseta Fireballs", 2019, 4, true, 1799.00);
let producto21 = new Producto("camiseta Fireballs", 2019, 2, false, 1799.00);
let producto22 = new Producto("camiseta Academia Muresull", 2019, 3, true, 1799.00);
let producto23 = new Producto("camiseta Academia Muresull", 2019, 4, true, 1799.00);
let producto24 = new Producto("camiseta Academia Muresull", 2019, 2, false, 1799.00);
let producto25 = new Producto("camiseta Campus Navallo-Agullo", 2021, 3, true, 2199.00);
let producto26 = new Producto("camiseta Campus Navallo-Agullo", 2021, 4, true, 2199.00);
let producto27 = new Producto("camiseta Campus Navallo-Agullo", 2021, 2, false, 2199.00);


producto12.agregar(Producto);

ArrayProductos.push(producto1);
ArrayProductos.push(producto2);
ArrayProductos.push(producto3);
ArrayProductos.push(producto4);
ArrayProductos.push(producto5);
ArrayProductos.push(producto6);
ArrayProductos.push(producto7);
ArrayProductos.push(producto8);
ArrayProductos.push(producto9);
ArrayProductos.push(producto10);
ArrayProductos.push(producto11);
ArrayProductos.push(producto12);
ArrayProductos.push(producto13);
ArrayProductos.push(producto14);








console.log(ArrayProductos);
const nuevoArray = ArrayProductos.length;
console.log(nuevoArray);


const off = [producto7, producto8, producto9, producto19, producto20, producto21];
const offSale = off.map(precios => precios.precio -= 199);
console.log(offSale);
console.log(off.length);

off.sort(function(a, b) {
    return b.talle - a.talle;
})
const encontrado = off.find(elemento => elemento.precio < 2100);
console.log(encontrado);

let preguntaDeTalle //= parseInt(prompt("Cual es tu talle?"));
if (preguntaDeTalle == 2) {
    alert("Hay stock")

}
const ingresado = ArrayProductos.find(function(item) {
    const talleBuscado = item.talle == 4;

    console.log(talleBuscado);

})






ArrayProductos.sort(function(a, b) {
    return a.precio - b.precio
})

const CatalogoProductos = [{
        id: 1,
        titulo: "Camiseta Cardinals",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/cardinals.jpeg ",
    },
    {
        id: 2,
        titulo: "Camiseta Estrella",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1899.00',
        img: "./img/estrella.jpeg "
    },
    {
        id: 3,
        titulo: "Camiseta Velocidad y Resistencia Vintage",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/velocidad.jpeg "

    },
    {
        id: 4,
        titulo: "Camiseta Velocidad y Resistencia",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/velocidad2.jpeg "
    }, {
        id: 5,
        titulo: "Camiseta Bahiense del Norte",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/bdn.jpeg "
    }, {
        id: 6,
        titulo: "Camiseta Reconquista",
        temporada: 2020,
        talle: 3,
        stock: true,
        precio: '$ 1899.00',
        img: "./img/reconquista.jpeg "
    }, {
        id: 7,
        titulo: "Camiseta Fireballs",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/Fireballs.jpg"
    }, {
        id: 8,
        titulo: "Camiseta Academia Muresull",
        temporada: 2019,
        talle: 3,
        stock: true,
        precio: '$ 1799.00',
        img: "./img/futbol1.jpeg "
    },
    {
        id: 9,
        titulo: "Camiseta Campus Navallo-Agullo",
        temporada: 2021,
        talle: 3,
        stock: true,
        precio: '$ 2199.00',
        img: "./img/FullSizeRender-1.jpg "
    }
];


const section = document.querySelector('.contenedor-catalogo');

console.log(section);

for (const element of CatalogoProductos) {

    let div = document.createElement('div');

    div.className = 'contenedor-carritocliente';
    div.innerHTML = `<div data-aos="flip-up">
    <img class="row row-cols-1 row-cols-md-3 g-4 card h-100 tarjeta card-body card-img-top card-text card-footer " src=${element.img}>
    <h2>${element.titulo}</h2>
    <input class="talle-input" placeholder="Talle" type="number">
    <p>${element.precio}</p>
    <button id=${element.id} class="btn btn-danger agregarCarrito">Agregar al Carrito</button>
    </div>`

    console.log(div);

    section.appendChild(div);

};


const ListaCompras = [];

const buttons = document.getElementsByClassName('agregarCarrito');

console.log(ListaCompras);
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
    JSON.stringify(ListaCompras);
};

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const buttonClickeado = event.target;
        console.log(buttonClickeado.id);
        const itemPresionado = CatalogoProductos.find((id) => id.id === parseInt(buttonClickeado.id));
        localStorage.setItem('itemPresionado', JSON.stringify(itemPresionado));
        itemPresionado.agregado = true;

        console.log('Item agregado');

        ListaCompras.push(itemPresionado)
    });
    guardarLocal(button.id, JSON.stringify(button));
};


const productos = JSON.parse(localStorage.getItem('lista'));

const mostrarProductos = () => {
    for (const itemPresionados of ListaCompras) {
        $("#Carrito").append(`<div class="contenedor-carrito-item card">
            <img class="imagenCarrito" src=${itemPresionados.img}
            <h4>${itemPresionados.titulo}</h4>
            <p class="precio">Precio: ${itemPresionados.precio}</p>
            <p class="precio">${itemPresionados.temporada}</p>
            <button  class="btn btn-danger btn-sm" id="btn1">Eliminar</button>
            </div>`)

        $("#btn1").click(() => {

            $(".contenedor-carrito-item").trigger("remove");
            console.log("#btn1");
        });


    }
};
mostrarProductos();

///Definiciones de clases
class Producto {
    constructor(id, marca, modelo, descripcion, precio, categoria, urlFoto) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.urlFoto = urlFoto;
    }
}

class LineaProducto { //representa una entidad que incluye una referencia al producto y su cantidad
    constructor(idProducto, cantidad) {
        this.idProducto = idProducto;
        this.cantidad = cantidad;
    }
}

///Busca los productos desde un JSON y luego los muestra en pantalla. Tambien dibuja el carrito
async function getProductos() {
    // arrProductos = await (await fetch("../productos.json")).json(); /// para trabajar localmente
    arrProductos = await (await fetch("https://raw.githubusercontent.com/Facundojimenez/armaTuPc/main/productos.json")).json();

    //Creacion de articulos iterando el array de productos
    arrProductos.forEach((producto) => {
        const divCard = document.createElement("div");
        let mensajeBoton;
        ///en la primera carga de la pagina busco a cada producto en el carrito y cambio el mensaje del botón dependiendo de si lo encontró o no
        if (carrito.find(lineaProd => lineaProd.idProducto == producto.id) === undefined) {
            mensajeBoton = "Agregar al carrito";
        } else {
            mensajeBoton = "Agregar más";
        }
        divCard.classList.add("col", "mb-4");
        divCard.innerHTML = `<div class="card h-100 producto">
                                    <img src="${producto.urlFoto}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="precio">$${producto.precio}</h5>
                                        <h5 class="card-title">${producto.marca} ${producto.modelo}</h5>
                                        <p class="card-text">${producto.descripcion}</p>
                                        <div class="inputCantidadContainer">
                                            <label for="cantidad1">Cantidad</label>
                                            <input type="number" class="form-control my-2" value="1" min="1">
                                        </div>
                                        <button class="btn btn-primary btn-lg btn-block" type="button" idproducto="${producto.id}">${mensajeBoton}</button>
                                    </div>
                                </div>`;
        $("#listadoProductos").append(divCard);
        //agrego evento al boton de añadir producto / actualizar cantidad
        $(`.card-body button[idproducto='${producto.id}']`).on("click", agregarAlCarrito);
    })
    actualizarCarrito();
}

//--- FUNCIONES DE CARRITO ---

function agregarAlCarrito(evento) {
    const idProductoLlamador = parseInt(evento.target.getAttribute("idproducto"));
    const cantidadUnidades = parseInt(evento.target.parentNode.querySelector(".inputCantidadContainer input").value);

    const existe = carrito.some(producto => producto.idProducto == idProductoLlamador);
    if (existe) {
        const productos = carrito.map(producto => {
            if (producto.idProducto === idProductoLlamador) {
                producto.cantidad = producto.cantidad + cantidadUnidades;
            }
            return producto; // retorna el objeto que no esta aún en el carrito 
        });
        carrito = [...productos];
        console.log(carrito)
    } else {
        carrito.push(new LineaProducto(idProductoLlamador, cantidadUnidades));
        console.log(carrito)
    }
    evento.target.innerHTML = "Agregar más";
    actualizarCarrito();
}

//Eliminacion de elemento en el carrito (botón Quitar)

function eliminarDelCarrito(evento) {
    const idProductoLlamador = parseInt(evento.target.getAttribute("idproducto"));
    const lineaProductoEncontrada = carrito.find(lineaProd => lineaProd.idProducto == idProductoLlamador);
    const indiceLinea = carrito.indexOf(lineaProductoEncontrada);
    carrito.splice(indiceLinea, 1);
    actualizarCarrito();

    ///ahora reseteo el texto de "actualizar cantidad" a "agregar al carrito"
    $(`#listadoProductos [idproducto='${idProductoLlamador}']`).text("Agregar al carrito");
}

//Vuelve a dibujar el carrito y a actualizar los importes totales y demás detalles.

function actualizarCarrito() {
    let subtotal = 0;
    const listadoCarrito = document.getElementById("listadoCarrito");
    listadoCarrito.innerHTML = "";


    ///actualizo la info del local storage
    localStorage.setItem("productosCarrito", JSON.stringify(carrito));

    carrito.forEach((linea) => {
        productoAsociado = arrProductos.find(producto => producto.id === linea.idProducto);
        elementoLista = document.createElement("li");
        elementoLista.classList.add("media", "productoCarrito", "row", "my-2", "py-2");
        elementoLista.innerHTML = `<img class="mr-1 col-3 col-md-3 p-0" src="${productoAsociado.urlFoto}">
                                    <div class="media-body col-6 col-md-7">
                                        <h5 class="mt-0 mb-1">${productoAsociado.marca} ${productoAsociado.modelo}</h5>
                                        <h6>x${linea.cantidad} unidad/es</h6>
                                    </div>
                                    <div class="col-3 col-md-2 text-right">
                                        <h6 class="my-1">$${productoAsociado.precio}</h6>
                                        <button class="btn btn-sm btn-danger" type="button" idproducto="${productoAsociado.id}">Quitar</button>
                                    </div>`
        listadoCarrito.appendChild(elementoLista);
        ///agrego evento al boton de quitar
        $(`.productoCarrito button[idproducto='${productoAsociado.id}']`).on("click", eliminarDelCarrito);
        subtotal += productoAsociado.precio * linea.cantidad;
    });

    ///si el carrito está vacio, entonces muestro un mensaje con un h5
    if (carrito.length === 0) {
        const mensajeCarritoVacio = document.createElement("h5");
        mensajeCarritoVacio.innerText = "Todavia no agregaste productos a tu carrito";
        listadoCarrito.appendChild(mensajeCarritoVacio);
    }

    //Actualizo el HTML de los detalles
    arrayDetalles = document.querySelectorAll(".resumenDetalles .col");
    arrayDetalles[0].innerHTML = "$" + subtotal;
    arrayDetalles[1].innerHTML = "$" + parseInt(subtotal * 0.21);
    arrayDetalles[2].innerHTML = "$" + parseInt(subtotal * 1.21);
}

///Cargo el carrito con la info en local storage
const infoCarritoExistente = JSON.parse(localStorage.getItem("productosCarrito"));
let carrito = infoCarritoExistente;
if (infoCarritoExistente == null) {
    carrito = [];
}

///animación para agrandar y achicar la letra en el botón de "confirmar pedido"
$(".resumenDetalles button").on("click", () => {
    $(".resumenDetalles button").animate({ fontSize: "1.3rem" })
        .animate({ fontSize: "1.2rem" });
});

let arrProductos = getProductos();