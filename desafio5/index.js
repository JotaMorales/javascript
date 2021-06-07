// function Auto(marca, año, puertas, combustible) {
//     this.marca = marca;
//     this.año = año;
//     this.puertas = puertas;
//     this.combustible = combustible;
// }

// const auto1 = {
//     marca: "BMW",
//     año: 2019,
//     puertas: 3,
//     combustible: "premium"
// };

// const Automovil = new Auto("BMW", 2019, 3, "premiun");

// console.log(auto1)
// console.log(Automovil);

class Auto {
    constructor(marca, año, puertas, combustible) {
        this.marca = marca;
        this.año = año;
        this.puertas = puertas;
        this.combustible = combustible;
    }
    mostrar() {
        for (const propiedad in this) {
            console.log(propiedad + ": " + this[propiedad]);
        }
    }
}

const auto1 = new Auto("BMW", 2019, 3, "premiun");

console.log(auto1);
auto1.mostrar();