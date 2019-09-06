// Los permiten expandir los tipos de objetos en funciones de 1ra clase
// Mejora el manejo de los objetos


function Persona(){
    this.nombre = "Juan";
    this.apellido = "Perdroza";
    this.edad = 42;
    this.pais = "Argentina"

    this.imprimirInfo = function() {
        console.log(`${this.nombre}${this.apellido}${this.edad}`);
        
    }
}

Persona.pais = "Cuba"

var er = new Persona();
console.log(er);
console.log(er.pais);




