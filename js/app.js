import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // El usuario dejo un campo vacio, mostrar error
        UI.divMensajes.textContent = "Error... todos los campos son obligatorios";
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }
    //Consultar nuestra API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}