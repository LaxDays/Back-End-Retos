//Comprobar número primo: Crea una función que determine si un número dado es primo o no.

numeroPrimo = (numero) => {
    if (numero <= 1) return console.log("Este número no es primo");
    let contador = 0;
    for (let i = 1; i <= numero; i++){
        if(numero % i === 0) contador++;
    }    
    return contador === 2 ? "Número primo" : "No número primo";
}
console.log(numeroPrimo(process.argv[2]));



/*Calcular el área de un triángulo: define una función que calcule el área de un triangulo 
dado su base y altura.*/
areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

console.log(areaTriangulo(process.argv[2], process.argv[3]));
