const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


    function obtenerPersonaje(id, callback) {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

        $.get(url,opts, function(persona) {
            console.log(`Hola soy, ${persona.name}` );
    
            if (callback) {
                callback() // aca le pasamos el callback
            }
        });


    };

    obtenerPersonaje(1, function(){
        obtenerPersonaje(2, function(){
            obtenerPersonaje(3, function(){
                obtenerPersonaje(4, function(){
                    obtenerPersonaje(5, function(){
            
                    })
                })
            })
            
        })
    })



    



    


// los callbacks son una funcion, que se va a pasar por parametro y 
// se va a ejecutar uan vez que termine la respuesta

