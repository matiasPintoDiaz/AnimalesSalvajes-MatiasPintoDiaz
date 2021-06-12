import { animalActual } from './providers.js';
import Animal from './animal.js';;

//alert('HOLAaA');

//Para cambiar imagen a la vez que cambia el select
const selector = document.getElementById('animal');
selector.addEventListener('change', async() => {
    const animal = await animalActual(selector.value);
    const previo = document.getElementById('preview');
    previo.innerHTML = ''; //Permite que no se acumulen las imágenes
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/imgs/${animal[0].imagen}`);
    previo.append(img);
});

//Botón agregar animal, se capturan todos los datos necesarios y se crea la instancia
const agregarAnimal = document.getElementById('btnRegistrar');
agregarAnimal.addEventListener('click', async(e) => {
    e.preventDefault();
    const animal = await animalActual(selector.value);
    console.log(animal);
    let nombre = animal[0].name;
    let edad = document.getElementById('edad').value;
    let img = animal[0].imagen;
    let comentarios = document.getElementById('comentarios').value;
    let sonido = animal[0].sonido;
    let animalListo = new Animal(nombre, edad, img, comentarios, sonido);
    //console.log(animalListo);
    mostrarTarjeta(animalListo);
    limpiarPantalla();
});

//Función para limpiar pantalla luego de agregar un animal
const limpiarPantalla = () => {
    $('#animal').prop('selectedIndex',0);
    $('#edad').prop('selectedIndex',0);
    document.getElementById('comentarios').value = '';
    document.getElementById('preview').innerHTML = '';
}

//Función para crear card de animal y ser mostrada por pantalla
const mostrarTarjeta = (animal) => {
    let animalCard = `<div class="tarjetas card" style="width: 10rem;">
                        <img class="card-img-top" src="./assets/imgs/${animal.getImg()}" alt="Card image cap">
                        <a href="#" class="btn btn-primary">Sonido</a>
                    </div>`;
    $('#Animales').append(animalCard);
}