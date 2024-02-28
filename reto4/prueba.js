let numero = 7;
let arrayResultado = [];

if (numero % 2 === 0) {
    arrayResultado.push(numero)
    while (numero != 0) {
        numero = numero -2;
        arrayResultado.push(numero);
    }
    console.log(arrayResultado.reverse());
} else {
    numero = numero -1;
    arrayResultado.push(numero);
    while (numero != 0) {
        numero = numero -2;
        arrayResultado.push(numero);
    }
    console.log(arrayResultado.reverse());
}
