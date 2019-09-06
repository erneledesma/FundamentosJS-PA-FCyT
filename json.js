

var objetoJS = {
    nombre: "Pedro",
    apellido: "Padilla",
    domicilio: "Rosario",
    numero: 171
};

console.log("Objeto literal", objetoJS);

var jsonString = JSON.stringify(objetoJS)
console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString)
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.apellido);

//ASincronismo JS
