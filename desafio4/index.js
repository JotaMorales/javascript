// desafio complementario

alert('Calculemos el IVA en tus productos seleccionados');

function iva(precio) {
    const IVA = 0.21;
    return (precio * IVA) + precio;
};

const precioCosto = parseInt(prompt('Ingrese el precio del producto'));
const precioCalculado = iva(precioCosto);

alert('El precio del producto con IVA: ' + precioCalculado);