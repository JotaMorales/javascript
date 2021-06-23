// INGRESAMOS PRODUCTOS A NUESTRO HTML
const misProductos = [
    {
        titulo :'Celular Samsung',
        precio : 35000,
        img : 'https://via.placeholder.com/400'
    },
    {
        titulo:'Celular Xiaomi',
        precio:65000,
        img : 'https://via.placeholder.com/400'
    },
    {
        titulo:'Celular Motorola',
        precio:42000,
        img : 'https://via.placeholder.com/400'
    },
    {
        titulo:'Celular Iphone',
        precio:97000,
        img : 'https://via.placeholder.com/400'
    },
    {
        titulo:'Celular Huawei',
        precio:100000,
        img : 'https://via.placeholder.com/400'
    }



];




const section = document.querySelector('.contenedor');

console.log(section);

for(let element of misProductos){
    
    let div = document.createElement('div');

    div.className = 'card '

    div.innerHTML = `
    <img class="img-fluid center" src=${element.img}>
    <h2>${element.titulo}</h2>
    <p>${element.precio}</p>
    <button class="btn btn-danger">Agregar al carrito</button>`

    console.log(div);

    section.appendChild(div);

}

//////////// LISTADO DE ALUMNOS PRESENTES 
// El sistema debe permitir:
// 1 Ingresar la cantidad de alumnos presentes (por prompt)
// 2 Ingresar nombre, apellido y edad de cada uno
//3 Mostrar la lista de alumnos con todos los datos en el HTML (ul > li (datos del alumno))


const listaAlumnos= [];

let condicion = true

class Alumnos {
    constructor(nombre,apellido,edad){
        this.nombre=nombre,
        this.apellido=apellido,
        this.edad=parseInt(edad)
    }
}

do{

   let nombre = prompt("Ingresa el nombre del alumno");
   let apellido = prompt("Ingresa el apellido del alumno");
   let edad = prompt('Ingresa la edad del alumno');

   let AlumnoPresente = new Alumnos(nombre,apellido,edad);

   listaAlumnos.push(AlumnoPresente)

   condicion = confirm('Quieres seguir agregando alumnos?')
    

   
}while (condicion != false)


const section = document.querySelector('.contenedor');

const ul = document.createElement('ul');

for(let alumno of listaAlumnos){

    let li = document.createElement('li')
    li.className='clase'
    li.innerHTML = `<p class="clase">${alumno.nombre}</p>
    <p>${alumno.apellido}</p>
    <p>${alumno.edad}</p>`

    ul.appendChild(li)

    section.appendChild(ul)

}

// ASCII ALT96 `
