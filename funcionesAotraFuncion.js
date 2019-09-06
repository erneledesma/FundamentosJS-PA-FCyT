function imprimir(fn) {
    fn(); // Le pasamos una funcion por parametro;
}

var persona = {
    nombre: 'Luke',
    apellido: 'sky'
}

var miFuncion = function(){
    console.log("miFuncion"); // Funcion explicita
    
}

imprimir(miFuncion); // la llamamos aca
