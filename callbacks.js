const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

$.get(lukeUrl, opts, function(luke){
    console.log(`Hola soy, ${luke.name}` );
    
}); 

// los callbacks son una funcion, que se va a pasar por parametro y 
// se va a ejecutar uan vez que termine la respuesta



