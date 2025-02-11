document.addEventListener('DOMContentLoaded', function() {
    //Repositorio
    const imagenes = [
        {img:'sirenita.jpg', link:'https://www.filmaffinity.com/es/film293814.html'}, 
        {img:'bellaybestia.jpg', link:'https://www.filmaffinity.com/es/film861877.html'},
        {img:'cenicienta.webp', link:'https://www.sensacine.com/peliculas/pelicula-182022/'}
    ];

    //Crear la disposición de la tabla	
    var div = document.createElement('div');
    var tabla = document.createElement('table');
    
    // Crear la primera fila (IMAGEN) y añadir a la tabla
    var row1 = document.createElement('tr');
    for (var i = 0; i < imagenes.length; i++) {
        var cell = document.createElement('td');
        var img = document.createElement('img');
        img.src = imagenes[i].img;
        img.alt = 'Imagen ' + (i + 1);
        cell.appendChild(img);
        row1.appendChild(cell);
    }
    tabla.appendChild(row1);
    
    // Crear la segunda fila (ENLACE)
    var row2 = document.createElement('tr');
    for (var i = 0; i < imagenes.length; i++) {
        var cell = document.createElement('td');
        var link = document.createElement('a');
        link.href = imagenes[i].link;
        link.appendChild(document.createTextNode('Enlace ' + (i + 1)));
        cell.appendChild(link);
        row2.appendChild(cell);
    }
    tabla.appendChild(row2);
    
    // Añadir la tabla al div y el div al body
    div.appendChild(tabla);
    document.body.appendChild(div);
});