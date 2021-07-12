const input = document.getElementById('buscar-pal');




input.addEventListener('change', () => {
    console.log(input.value);
});

input.addEventListener('keyup', () => {
    console.log(input.value);
    localStorage.setItem('nombre', input.value);
});






function autocompletado() {
    document.getElementById("demo").innerHTML = '';

    let listaDeDiscosBeatles = [
        "Please Please Me",
        "With the Beatles",
        "Introducing...The Beatles",
        "Meet the Beatles!",
        "The Beatles' Second Album",
        "A Hard Day's Night",
        "Something New",
        "Beatles for Sale",
        "Beatles '65",
        "The Early Beatles",
        "Beatles VI",
        "Help!",
        "Rubber Soul",
        "Yesterday and Today",
        "Revolver",
        "Sgt. Pepper's Lonely Hearts Club Band",
        "Magical Mistery Tour",
        "THE BEATLES",
        "Yellow Submarine",
        "Abbey Road"
    ];



    var pal = document.getElementById("buscar-pal").value;
    var tam = pal.length;
    for (indice in listaDeDiscosBeatles) {
        var nombre = listaDeDiscosBeatles[indice];
        var str = nombre.substring(0, tam);
        if (pal.length <= nombre.length && pal.length != 0 && nombre.length != 0) {
            if (pal.toLowerCase() == str.toLowerCase()) {
                var node = document.createElement("LI");
                var textnode = document.createTextNode(listaDeDiscosBeatles[indice]);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            } else {

            }
        }
    }
};

const section = document.querySelector('.resultados');

console.log(section);

let listaDeDiscosBeatles = [{
        id: 1,
        titulo: "Please Please Me",
        Publicación: 1963,
        Discográfica: 'Parlophone',
        Img: "./img/pleaseme.jpg"

    },
    {
        id: 2,
        titulo: "With the Beatles",
        Publicación: 1963,
        Discográfica: 'Parlophone',
        Img: "./img/Withthebeatlescover.jpeg"
    },
    {
        id: 3,
        titulo: "Introducing...The Beatles",
        Publicación: 1964,
        Discográfica: 'Vee-Jay Records',
        Img: "img/IntroducingtheBeatles.jpeg"
    },
    {
        id: 4,
        titulo: "Meet the Beatles!",
        Publicación: 1964,
        Discográfica: 'Capitol Records',
        Img: "./img/Meet_the_Beatles.jpeg"
    },
    {
        id: 5,
        titulo: "The Beatles' Second Album",
        Publicación: 1964,
        Discográfica: 'Capitol Records',
        Img: "./img/secondAlbum.jpeg"
    },
    {
        id: 6,
        titulo: "A Hard Day's Night",
        Publicación: 1964,
        Discográfica: 'Parlophone',
        Img: "./img/HardDayUK.jpeg"
    },
    {
        id: 7,
        titulo: "Something New",
        Publicación: 1964,
        Discográfica: 'Capitol Records',
        Img: "./img/somethingnew.jpeg"
    },
    {
        id: 8,
        titulo: "Beatles for Sale",
        Publicación: 1964,
        Discográfica: 'Parlophone',
        Img: "./img/beatlesforsale.jpg"
    },
    {
        id: 9,
        titulo: "Beatles '65",
        Publicación: 1965,
        Discográfica: 'Capitol Records',
        Img: "./img/beatles65.jpeg"
    },
    {
        id: 10,
        titulo: "The Early Beatles",
        Publicación: 1965,
        Discográfica: 'Capitol Records',
        Img: "./img/TheEarlyBeatlesalbumcover.jpeg"
    },
    {
        id: 11,
        titulo: "Beatles VI",
        Publicación: 1965,
        Discográfica: 'Capitol Records',
        Img: "./img/beatlesvi.jpeg"
    },
    {
        id: 12,
        titulo: "Help!",
        Publicación: 1965,
        Discográfica: 'Parlophone',
        Img: "./img/help.jpeg"
    },
    {
        id: 13,
        titulo: "Rubber Soul",
        Publicación: 1965,
        Discográfica: 'Parlophone',
        Img: "./img/rubber.jpeg"
    },
    {
        id: 14,
        titulo: "Yesterday and Today",
        Publicación: 1966,
        Discográfica: 'Capitol Records',
        Img: "./img/yesterdarandtoday.jpg"
    },
    {
        id: 15,
        titulo: "Revolver",
        Publicación: 1966,
        Discográfica: 'Capitol Records',
        Img: "./img/revolver.jpeg"
    },
    {
        id: 16,
        titulo: "Sgt. Pepper's Lonely Hearts Club Band",
        Publicación: 1967,
        Discográfica: 'Parlophone',
        Img: "./img/Pepper's.jpeg"
    },
    {
        id: 17,
        titulo: "Magical Mistery Tour",
        Publicación: 1967,
        Discográfica: 'Capitol Records',
        Img: "./img/magical.jpg"
    },
    {
        id: 18,
        titulo: "THE BEATLES",
        Publicación: 1968,
        Discográfica: 'Apple Records',
        Img: "./img/The_Beatles_album_cover.jpeg"
    },
    {
        id: 19,
        titulo: "Yellow Submarine",
        Publicación: 1969,
        Discográfica: 'Apple Records',
        Img: "./img/yellowsubmarine.jpeg"
    },
    {
        id: 20,
        titulo: "Abbey Road",
        Publicación: 1969,
        Discográfica: 'Apple Records',
        Img: "./img/abbeyroad.jpeg"
    }
];

for (let element of listaDeDiscosBeatles) {

    let div = document.createElement('div');

    div.className = 'card'

    div.innerHTML = `
    <h4>${element.titulo}</h4>
    <p>${element.Discográfica}</p>
    <p>${element.Publicación}</p>
    <button id=${element.id} class="btn btn-danger btn-spotify btnLista"><a href="https://www.youtube.com/watch?v=KQetemT1sWc&ab_channel=TheBeatlesVEVO">Play</a></button>
    <img class="row row-cols-3 row-cols-sm-3 g-4 card h-100 tarjeta card-body card-img-top card-text card-footer " src=${element.Img}>`


    console.log(div);

    section.appendChild(div);



};

const buttons = document.getElementsByClassName('btn-spotify');

const ListaFavoritos = [];
console.log(ListaFavoritos);

for (const button of buttons) {

    button.addEventListener('click', (event) => {
        const buttonClickeado = event.target;
        console.log(buttonClickeado.id);
        const discoPresionado = listaDeDiscosBeatles.find((discoSonando) => discoSonando.id === parseInt(buttonClickeado.id));
        localStorage.setItem('discoPresionado', JSON.stringify(discoPresionado));

        console.log('Escuchar Disco');

        ListaFavoritos.push(buttonClickeado);

    });

}



// const div = document.querySelector('.listaFavoritos');
// console.log(div);

// for (const _items of listaDeDiscosBeatles) {


//     let ul = document.createElement('ul');
//     ul.className = 'ListaItems';

//     ul.innerHTML =
//         `<li>${_items.titulo}</li>
//         <li>${_items.Discográfica}</li>
//         <li>${_items.Publicación}</li>`

//     console.log(ul);

//     div.appendChild(ul);

// }

const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector(".precio").textContent,
    cantidad: 1
}
if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1
}