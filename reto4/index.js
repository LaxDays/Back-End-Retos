const express = require('express');
const app = express();
const port = 3000;

/* Crea el endpoint /math/isEven con el metodo GET y que reciba un número como argumento de ruta. 
Devolver en la respuesta el json {even:true} si el número es par o {even: fasle} si no lo es.*/

app.get('/math/isEven/:num', (req, res) => {
    let {num} = req.params;

    const resultado = Math.round(num) % 2;

    const par = {
        even: "true"
    }
    const impar = {
        even: "false"
    }

    if(resultado === 0){
        res.send({data: par});
    } else {
        res.send({data: impar});
    }
})


/* Crea el endpoint /math/allEven con el metodo GET y que reciba un número como argumento de ruta. 
Devolver en la respuesta el JSON {even: [0,2,4,6,8...]} donde los elementos del array son los 
números pares desde 0 hasta el número recibido por argumento.*/
app.get('/math/allEven/:num', (req, res) => {
    let {num} = req.params;
    let numero = Math.round(num);
    let arrayResultado = [];

    if (numero % 2 === 0) {
        arrayResultado.push(numero);
        while (numero != 0) {
            numero = numero -2;
            arrayResultado.push(numero);
        }
        res.send({even: arrayResultado.reverse()});
    } else {
        numero = numero -1;
        arrayResultado.push(numero);
        while (numero != 0) {
            numero = numero -2;
            arrayResultado.push(numero);
        }
        res.send({even: arrayResultado.reverse()});
    }
})


app.listen(port, () => {
    console.log("Server is listening on port", port);
})