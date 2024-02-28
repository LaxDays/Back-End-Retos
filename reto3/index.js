/*
Acceder a propiedades: Crea un objeto JSON que represente información 
sobre una persona (nombre, edad, ciudad, etc) y luego escribe una función
que tome ese objeto como parámetro e imprima en la consola alguna de sus propiedades
*/

let persona = {
    nombres:"Alan Alexis",
    apellidos: "Fuentes Carranza",
    sexo:"masculino",
    edad: 35,
    ciudad: "Hermosillo",
    estado: "Sonora"
}

accederPropiedad = (propiedad) => {console.log(persona[propiedad])}

accederPropiedad(process.argv[2]);


/*
Agregar propiedades: Crear un objeto JSON vacío y luego escribe una función que tome ese
objeto como parámetro y agregue una nueva propiedad y su valor.
*/

function Objeto(propiedad){
    this.propiedad = propiedad
}

agregarPropiedad = (agregado) =>{
    const objetoVacio = new Objeto (agregado);
    console.log(objetoVacio.propiedad);
}

agregarPropiedad(process.argv[2]);


/* Comprarar objetos: Define dos obetos JSON que representen información sobre productor
 (por ejemplo: nombre, precio, cantidad). Escribe una función que tome estos dos objetos 
 como parámetros y compare sus propiedades para determinar si son iguales o no.
 */
 


funcionParaCompararObjetos = (a, b) =>{
   let objeto1 = {
      nombre:"verdura",
      precio: 50,
      cantidad: 1
   } 
   let objeto2 = {
      nombre:"verdura",
      precio: 50,
      cantidad: 1
   }
   a = JSON.stringify(objeto1);
   b = JSON.stringify(objeto2);
   
   if (a === b) {
      console.log("Los objetos son iguales")
   } else {
      console.log("Los objetos son diferentes")
   }
   return 
}
funcionParaCompararObjetos(process.argv[2], process.argv[3]);
