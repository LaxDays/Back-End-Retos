//Suma de números pares:
 addPairs = (num) => {
    let count = 0;
    for (let i= 0; i <= num; i+= 2) {
        count += i;
    }
    return count;
}
console.log(addPairs(6));



//Contar vocales
contarVocales = (texto) => {
    return texto.replace(/[^aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '').length;
}
console.log(contarVocales("Hola ¿cómo estás?"));
