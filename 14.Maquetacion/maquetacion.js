//Crear cabecera

const cabecera = document.createElement('div')
cabecera.className = 'cabecera'
//Logo
const logo = document.createElement('img')
logo.src = 'logo-azul-marino-viajes.jpg'
logo.id = 'logo'
//Barra de navegación
const navbar = document.createElement('nav')
navbar.id = 'navbar'
const parts = ['Inicio', 'Nosotros', 'Servicios', 'Contacto']
for (const part of parts) {
    const element = document.createElement('a')
    element.innerText = part
    element.href = '#'+part
    navbar.appendChild(element)
}
//Insertar al html
cabecera.appendChild(logo)
cabecera.appendChild(navbar)
document.body.appendChild(cabecera)


//Crear titular y sección 2

//Crear sección1, titular
const sec1 = document.createElement('div')
sec1.className = 'seccion1'
const img1 = document.createElement('img')
img1.src = 'articulos-808572.jpg'
img1.id = 'imgTitular'
const column = document.createElement('div')
const tit1 = document.createElement('h3')
tit1.innerText = 'Este es el titular del div de texto'
tit1.id = 'titulo1'
const intro1 = document.createElement('p')
intro1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Duis aute irure dolor in reprehenderit in voluptate velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa. Officia deserunt mollit anim id est laborum.'
intro1.id = 'parrafo1'
const button1 = document.createElement('button')
button1.innerText = 'Ver más'
//Insertar al html
sec1.appendChild(img1)
column.appendChild(tit1)
column.appendChild(intro1)
column.appendChild(button1)
sec1.appendChild(column)
document.body.appendChild(sec1)
//Crear sección 2
const sec2 = document.createElement('div')
sec1.className = 'seccion1'
const tit2 = document.createElement('h4')
tit2.innerText = 'Este es el titular de la sección 2'
tit2.id = 'titulo2'
const img2 = document.createElement('img')
img2.src = 'foto6 (2).jpg'
//Insertar al html 
sec2.appendChild(tit2)
sec2.appendChild(img2)
document.body.appendChild(sec2)


//Entradas y botones
imgEntradas = [
    'Viajes_Donde_Viajes_3.jpg', 
    'kayak-valencia.jpeg', 
    '600x400_viajes-lujo-FOTO-1-White-Dessert-experiencia-Polo-Norte-en-jet-privaso.jpg'
]
const entradas = document.createElement('div')
entradas.className = 'entradas'
for(i=0;i<3;i++){
    const caja = document.createElement('div')
    caja.className = 'caja'
    const imagen = document.createElement('img')
    imagen.src = imgEntradas[i]
    const entrada = document.createElement('p')
    entrada.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    const button = document.createElement('button')
    button.innerText = 'Comprar'
    caja.appendChild(imagen)
    caja.appendChild(entrada)
    caja.appendChild(button)
    entradas.appendChild(caja)
}
document.body.appendChild(entradas)