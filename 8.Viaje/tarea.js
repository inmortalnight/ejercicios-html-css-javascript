function startGame() {
    const play = confirm("¿Deseas jugar con JavaScript?");
    
    if (!play) {
        
        alert("¡Tú te lo pierdes!");

        const img = document.createElement('img');
        img.src = 'bye.png';
        img.alt = 'Imagen de despedida';
        img.style.width = '500px';

        document.body.appendChild(img);
        return; 
    }

    const elecc = prompt("¿Elige un destino: Francia, España o Portugal?").toLowerCase();

    switch (elecc) {
        case 'francia':
            const france = prompt("¿Paris, Marsella o Lyon?").toLowerCase();
            switch (france) {
                case 'paris':
                    alert("París es una ciudad increíble, famosa por su Torre Eiffel.");
                    
                    const pa1 = document.createElement('img');
                    pa1.src = 'pa1.jpg';
                    pa1.alt = 'Imagen de Paris';
                    pa1.style.width = '33.33vw';

                    const pa2 = document.createElement('img');
                    pa2.src = 'pa2.jpg';
                    pa2.alt = 'Imagen de Paris';
                    pa2.style.width = '33.33vw';
                    
                    const pa3 = document.createElement('img');
                    pa3.src = 'pa3.jpg';
                    pa3.alt = 'Imagen de Paris';
                    pa3.style.width = '33.33vw';
            
                    document.body.appendChild(pa1);
                    document.body.appendChild(pa2);
                    document.body.appendChild(pa3);

                    break;
                    
                case 'marsella':
                    alert("Marsella es una ciudad costera llena de historia.");
                    
                    const ma1 = document.createElement('img');
                    ma1.src = 'ma1.jpg';
                    ma1.alt = 'Imagen de Marsella';
                    ma1.style.width = '33.33vw';

                    const ma2 = document.createElement('img');
                    ma2.src = 'ma2.jpg';
                    ma2.alt = 'Imagen de Marsella';
                    ma2.style.width = '33.33vw';
                    
                    const ma3 = document.createElement('img');
                    ma3.src = 'ma3.jpg';
                    ma3.alt = 'Imagen de Marsella';
                    ma3.style.width = '33.33vw';
            
                    document.body.appendChild(ma1);
                    document.body.appendChild(ma2);
                    document.body.appendChild(ma3);

                    break;

                case 'lyon':
                    alert("Lyon es conocida por su gastronomía y su hermoso casco antiguo.");

                    const ly1 = document.createElement('img');
                    ly1.src = 'ly1.jpg';
                    ly1.alt = 'Imagen de Lyon';
                    ly1.style.width = '33.33vw';

                    const ly2 = document.createElement('img');
                    ly2.src = 'ly2.jpg';
                    ly2.alt = 'Imagen de Lyon';
                    ly2.style.width = '33.33vw';
                    
                    const ly3 = document.createElement('img');
                    ly3.src = 'ly3.jpg';
                    ly3.alt = 'Imagen de Lyon';
                    ly3.style.width = '33.33vw';
            
                    document.body.appendChild(ly1);
                    document.body.appendChild(ly2);
                    document.body.appendChild(ly3);

                    break;
                default:
                    alert("Opción no válida en Francia.");
                    break;
            }
            break;

        case 'españa':
            const spain = prompt("¿Playa o montaña?").toLowerCase();
            switch (spain) {
                case 'playa':
                    alert("Las playas de España son maravillosas, como las de la Costa Brava.");

                    const pla1 = document.createElement('img');
                    pla1.src = 'pla1.jpg';
                    pla1.alt = 'Imagen de Playa';
                    pla1.style.width = '33.33vw';

                    const pla2 = document.createElement('img');
                    pla2.src = 'pla2.jpg';
                    pla2.alt = 'Imagen de Playa';
                    pla2.style.width = '33.33vw';
                    
                    const pla3 = document.createElement('img');
                    pla3.src = 'pla3.jpg';
                    pla3.alt = 'Imagen de Playa';
                    pla3.style.width = '33.33vw';
            
                    document.body.appendChild(pla1);
                    document.body.appendChild(pla2);
                    document.body.appendChild(pla3);

                    break;
                case 'montaña':
                    alert("Las montañas en España, como los Pirineos, ofrecen vistas espectaculares.");

                    

                    const mo1 = document.createElement('img');
                    mo1.src = 'mo1.jpg';
                    mo1.alt = 'Imagen de Montaña';
                    mo1.style.width = '33.33vw';

                    const mo2 = document.createElement('img');
                    mo2.src = 'mo2.jpg';
                    mo2.alt = 'Imagen de Montaña';
                    mo2.style.width = '33.33vw';

            
                    document.body.appendChild(mo1);
                    document.body.appendChild(mo2);

                    break;
                default:
                    alert("Opción no válida en España.");

                    break;
            }
            break;

        case 'portugal':
            const portugal = prompt("¿Turismo, playa o montaña?").toLowerCase();
            switch (portugal) {
                case 'turismo':
                    alert("Lisboa es una ciudad fascinante con mucha historia.");

                    const tu1 = document.createElement('img');
                    tu1.src = 'tu1.jpg';
                    tu1.alt = 'Imagen de turismo';
                    tu1.style.width = '33.33vw';
            
                    document.body.appendChild(tu1);

                    break;
                case 'playa':
                    alert("El Algarve es famoso por sus hermosas playas.");

                    const popla1 = document.createElement('img');
                    popla1.src = 'popla1.jpg';
                    popla1.alt = 'Imagen de despedida';
                    popla1.style.width = '33.33vw';
            
                    document.body.appendChild(popla1);

                    break;
                case 'montaña':
                    alert("El santuario de Fátima y Nazaret en las montañas son sitios populares.");

                    const pomo1 = document.createElement('img');
                    pomo1.src = 'pomo1.jpg';
                    pomo1.alt = 'Imagen de despedida';
                    pomo1.style.width = '33.33vw';

                    const pomo2 = document.createElement('img');
                    pomo2.src = 'pomo2.jpg';
                    pomo2.alt = 'Imagen de despedida';
                    pomo2.style.width = '33.33vw';
            
                    document.body.appendChild(pomo1);
                    document.body.appendChild(pomo2);

                    break;
                default:
                    alert("Opción no válida en Portugal.");
                    break;
            }
            break;

        default:
            alert("Opción no válida. Por favor, elige entre Francia, España o Portugal.");
            break;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    startGame();
});
