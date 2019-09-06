//
var persona = {
    nombre: "Pedro",
    apellido:"Salas",
    imprimirNombre: function() {
        console.log(this.nombre + " " + this.apellido);
        
    }
};

persona.imprimirNombre();