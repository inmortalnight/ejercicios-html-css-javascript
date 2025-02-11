let title = 'Opciones del menú del día:'
document.body.appendChild(document.createElement('h1')).innerText = title

//Opciones
let primerPlato = ["(Elegir el primer plato)", "Macarrones (2€)", "Crema de calabaza (3€)", "Ensalada mixta (2€)"]
let segundoPlato = ["(Elegir el segundo plato)", "Pollo asado con patatas (5€)", "Bacalao con arroz (6€)", "Entrecot a la parrilla (7€)"]
let postre = ["(Elegir el postre)", "Flan de huevo (2€)", "Natillas (2€)", "Macedonia de frutas (3€)"]

//Biblioteca de imagenes con alt y src
let imagenes = {
    'Default': 'katie-smith-uQs1802D0CQ-unsplash.jpg',
    'Macarrones': 'kenneth-mallia-jJNDQQjJr-Y-unsplash.jpg',
    'Crema de calabaza': 'elena-leya-vesMzw6ADMA-unsplash.jpg',
    'Ensalada mixta': 'jana-ohajdova-e5M1EJ8dhhg-unsplash.jpg',
    'Pollo asado con patatas': 'karyna-panchenko-FKPEUj2jZCQ-unsplash.jpg',
    'Bacalao con arroz': 'david-b-townsend-AnC569NdAJc-unsplash.jpg',
    'Entrecot a la parrilla': 'jose-ignacio-pompe-XY-V_o-ykuk-unsplash.jpg',
    'Flan de huevo': 'wafer-wan-11F0qFgYpiU-unsplash.jpg',
    'Natillas': 'max-griss-Wp7ZsJYWP0M-unsplash.jpg',
    'Macedonia de frutas': 'jo-sonn-zeFy-oCUhV8-unsplash.jpg'
}

//Crear interfez de opciones
//Función para crear las cajas de selección
count = 1
function crearOpciones(opciones) {
    let contenedor = document.createElement('div')
    contenedor.className = 'contenedor'
    contenedor.id = 'contenedor' + count

    let select = document.createElement('select')
    select.id = 'select' + count
    select.className = 'select'
    opciones.forEach(element => {
        let option = document.createElement('option')
        option.innerText = element
        select.appendChild(option)
    })
    contenedor.appendChild(select)
    document.body.appendChild(contenedor)
    count++
    
    return {select, contenedor};
}

//Interfaz de la imagen
//Función para configurar la imagen
function configurarImagen(alt, src, contenedor) {
    // Eliminar todas las imágenes existentes en el contenedor
    let imagenesEnContenedor = contenedor.getElementsByTagName('img');
    while (imagenesEnContenedor[0]) {
        imagenesEnContenedor[0].remove();
    }
    //Crear y agregar la imagen
    let imagen = document.createElement('img')
    imagen.src = src
    imagen.alt = alt
    imagen.width = 300
    imagen.height = 300

    contenedor.appendChild(imagen)
}

//Crear cajas de selección
const { select: selectPrimerPlato, contenedor: contenedor1 } = crearOpciones(primerPlato);
const { select: selectSegundoPlato, contenedor: contenedor2 } = crearOpciones(segundoPlato);
const { select: selectPostre, contenedor: contenedor3 } = crearOpciones(postre);

//Default
configurarImagen('Default', imagenes['Default'], contenedor1)
configurarImagen('Default', imagenes['Default'], contenedor2)
configurarImagen('Default', imagenes['Default'], contenedor3)

//Según la opción seleccionada, mostrar su imagen correspondiente e ir contando el total
let total = 0
selectPrimerPlato.addEventListener('change', function() {
    switch (this.value) {
        case 'Macarrones (2€)': 
            configurarImagen('Macarrones', imagenes['Macarrones'], contenedor1) 
            total = total + 2
            break
        case 'Crema de calabaza (3€)': 
            configurarImagen('Crema de calabaza', imagenes['Crema de calabaza'], contenedor1) 
            total = total + 3
            break
        case 'Ensalada mixta (2€)': 
            configurarImagen('Ensalada mixta', imagenes['Ensalada mixta'], contenedor1) 
            total = total + 2
            break
        default:
            configurarImagen('Default', imagenes['Default'], contenedor1)
            break
    }
})
selectSegundoPlato.addEventListener('change', function() {
    switch (this.value) {
        case 'Pollo asado con patatas (5€)':
            configurarImagen('Pollo asado con patatas', imagenes['Pollo asado con patatas'], contenedor2);
            total = total + 5
            break;
        case 'Bacalao con arroz (6€)':
            configurarImagen('Bacalao con arroz', imagenes['Bacalao con arroz'], contenedor2);
            total = total + 6
            break;
        case 'Entrecot a la parrilla (7€)':
            configurarImagen('Entrecot a la parrilla', imagenes['Entrecot a la parrilla'], contenedor2);
            total = total + 7
            break;
        default:
            configurarImagen('Default', imagenes['Default'], contenedor2);
            break;
    }
});

selectPostre.addEventListener('change', function() {
    switch (this.value) {
        case 'Flan de huevo (2€)':
            configurarImagen('Flan de huevo', imagenes['Flan de huevo'], contenedor3);
            total = total + 2
            break;
        case 'Natillas (2€)':
            configurarImagen('Natillas', imagenes['Natillas'], contenedor3);
            total = total + 2
            break;
        case 'Macedonia de frutas (3€)':
            configurarImagen('Macedonia de frutas', imagenes['Macedonia de frutas'], contenedor3);
            total = total + 3
            break;
        default:
            configurarImagen('Default', imagenes['Default'], contenedor3);
            break;
    }
});

//Checkbox aplicar descuento
let descuento = document.createElement('input')
descuento.type = 'checkbox'
descuento.id = 'descuento'
let descuentoLabel = document.createElement('label')
descuentoLabel.htmlFor = 'descuento'
descuentoLabel.innerText = 'Aplicar descuento del 10%'
document.body.appendChild(descuento)
document.body.appendChild(descuentoLabel)
descuento.addEventListener('change', function() {
    if (this.checked) {
        total = total - (total * 0.1)
    }
})

//Botón de enviar
let boton = document.createElement('button')
boton.innerText = '¡A comer!'
boton.className = 'button' 
document.body.appendChild(boton)

//Total a pagar al pulsar el boton
boton.addEventListener('click', function() {
    alert('Total a pagar: ' + parseFloat(total) + '€')
})