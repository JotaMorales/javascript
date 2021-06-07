// cuotas = prompt("Ingresa el monto para calcular el valor de las cuotas");

// function prompt() {
//     resultado = numeroIngresado / 6;
// }



// cuotasSinInteres();

montoTotal = prompt("Ingrese el monto para saber el calculo de cuotas");

function calculadora(montoTotal, operacion) {
    switch (operacion) {
        case "3":
            return montoTotal / 3;

        case "6":
            return montoTotal / 6;

        case "9":
            return montoTotal / 9;

        case "12":
            return montoTotal / 12;

        default:
            return 0;

    }
}
console.log(calculadora(1200, "12"));

function cuotas(valorTotal, cantidadCuotas) {
    return valorTotal / cantidadCuotas;
}

let totalIngresado = parseInt(prompt('¿Cual es el valor total?'));
let cuotasIngresados = parseInt(prompt('¿Cuantas cuotas quieres?'));

alert('El valor de cada cuota es $' + cuotas(totalIngresado, cuotasIngresados));