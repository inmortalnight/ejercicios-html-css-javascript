// Array con las imágenes de cada país
const imagenes = {
    "Francia": "chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    "Italia": "dan-novac-1naE8177_bI-unsplash.jpg",
    "Alemania": "marius-serban-iFtuhgn7fYs-unsplash.jpg",
    "Portugal": "nick-karvounis-Prb-sjOUBFs-unsplash.jpg",
    "España": "jorge-fernandez-salas-ChSZETOal-I-unsplash.jpg"
};

function cambiarDestino() {
    let select = document.getElementById("pais");
    let destino = document.getElementById("destino");
    let imagen = document.getElementById("imagen");

    let paisSeleccionado = select.value;

    if (paisSeleccionado) {
        destino.innerText = "Su destino es: " + paisSeleccionado;
        imagen.setAttribute("src", imagenes[paisSeleccionado]);
    } else {
        destino.innerText = "Selecciona un destino";
        imagen.setAttribute("src", "https://via.placeholder.com/600x300");
    }
}
