// function imprimir() {
//     for (var i = 0; i< 8000; i ++)
//   console.log("imprimio");
  
// }

// function presionoClick(){
//     console.log("Click en boton");
    
// }

// imprimir();

// Datos Primitivos 

// var number = true;
// var str = "texto";
// var bol = "tito";
// var und = undefined;
// var nul = null;

// console.log(num);

// var obj = {
//     numero: 10,
//     texto: "Nuevo texto",
//     apellido: "ledesma"
// }

// console.log(obj);


//acceder a un objeto por notacion de puntos
var persona = { 
    nombre: "Ernesto",
    apellido: "Ledesma",
    edad: 43,
    direccion : {
        ciudad: 'CDELU',
        domicilio: "Rosario 171",
        pais: "Argentina",

    }
}
// notacion por referencia
persona.edad.fechaNac = 10
persona.direccion.zipcode = 3260;
persona.direccion.domicilio = "Dr Scelzi 342"

console.log(persona.direccion.domicilio);
console.log(persona);


