// let titulo = document.getElementById("titulo");
// console.log(titulo);

// let lista = document.getElementsByTagName("ul");
// console.log(lista);

// let items = document.getElementsByClassName("precio");
// console.log(items);

// let parrafo = document.getElementsByTagName("p");
// console.log(parrafo);


// let titulo = document.getElementById("titulo")

// console.log(titulo.innerHTML);


// let precioTotal = document.getElementsByClassName("precio")

// console.log(precioTotal[0].innerHTML);
// console.log(precioTotal[1].innerHTML);
// console.log(precioTotal[2].innerHTML);


// let comentarioFinal = document.getElementsByTagName("p")

// console.log(comentarioFinal[0].innerHTML)

let titulo = document.getElementById("titulo");

console.log(titulo.innerHTML);


let precios = document.getElementsByClassName("precio");


const precioTotal = parseInt(precios[0].innerHTML) + parseInt(precios[1].innerHTML) + parseInt(precios[2].innerHTML)
console.log(precioTotal);


let comentarioFinal = document.getElementsByTagName("p");

console.log(comentarioFinal[0].innerHTML);