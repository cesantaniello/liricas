import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if(resultado.lyrics){
                    const {lyrics} = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`
                }else{
                    UI.divMensajes.textContent = 'La canción no existe, prueba con otra búsqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }

            })
    }
}

export default API;