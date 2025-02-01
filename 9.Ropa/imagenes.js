// Mostrar imagenes de prendas según que se elija dentro del repertorio disponible

// Repertorio de prendas
const imagenes = {
    "bufanda": "sama-hosseini-z5UuOcQjXCY-unsplash.jpg",
    "camiseta": "faith-yarn-Wr0TpKqf26s-unsplash.jpg", 
    "pantalones": "matthew-moloney-YeGao3uk8kI-unsplash.jpg",
    "vestido": "mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg",
    "zapatillas": "usama-akram-kP6knT7tjn4-unsplash.jpg"
};

// Solicitar prenda al usuario
let prenda = prompt("¿Cuál prenda te gustaría usar? Opciones: zapatillas, bufanda, camiseta, pantalones, vestido");

// Mostrar imagen de la prenda elegida
if (imagenes[prenda]) {
    let img = document.createElement('img')
    img.src = imagenes[prenda]
    img.alt = prenda
    img.style.width = '33.33vw'
    document.body.appendChild(img)
} else {
    alert("Prenda no encontrada. Por favor, elige una opción válida.");
}