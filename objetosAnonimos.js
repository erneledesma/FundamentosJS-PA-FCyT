// function imprimir( nombre) {
//     console.log(nombre);
    
// }

// imprimir({
//     nombre: "Belen",
//     apellido: "Paz" // Objeto anonimo
// });

function imprimir(persona){
    persona.nombre = "Maria";
    console.log(persona.nombre + " " + persona.apellido);
    // el orden de las declarion es importante
}

var obj = {
    nombre: 'Belen',
    apellido: 'Padilla'
}

imprimir(obj)

console.log(obj);
