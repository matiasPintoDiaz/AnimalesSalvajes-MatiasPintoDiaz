//alert('HOLAaA');

//Consulta a la API local
const pregunta = async() => {
    const consulta = await fetch('./animales.json');
    const respuesta = await consulta.json();
    //console.log(respuesta);
    return respuesta;
}

//Retorna el animal que el usuario selecciona en el select
const animalActual = async(nombre) => {
    const animaless = await pregunta();
    
    const probando = animaless.animales.filter( (animal) => {
        return animal.name == nombre;
    });
    
    return probando;
}


//Para cambiar imagen a la vez que cambia el select
const selector = document.getElementById('animal');
selector.addEventListener('change', async() => {
    //console.log(selector.value);
    const animal = await animalActual(selector.value);
    //console.log(animal[0].imagen);
    const previo = document.getElementById('preview');
    previo.innerHTML = ''; //Permite que no se acumulen las imágenes
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/imgs/${animal[0].imagen}`);
    previo.append(img);
});