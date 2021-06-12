//Consulta a la API local con función IIFE
const pregunta = ( () => {
    let consultaApi = async() => {
        const consulta = await fetch('./animales.json');
        const respuesta = await consulta.json();
        return respuesta;
    }
    //console.log(respuesta);
    return {
        respuestaAnimal: () => {
            return consultaApi();
        }
    }
})();

//Retorna el animal que el usuario selecciona en el select
const animalActual = async(nombre) => {
    const animaless = await pregunta.respuestaAnimal();
    //console.log(animaless);
    const probando = animaless.animales.filter( (animal) => {
        return animal.name == nombre;
    });
    
    return probando;
}

export{
    animalActual
}