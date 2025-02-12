document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'alessandro-sacchi-NUFnfYd09iI-unsplash.jpg', 
        'benjamin-voros-phIFdC6lA4E-unsplash.jpg',
        'jeremy-bishop-dR_q93lfaTw-unsplash.jpg',
        'john-towner-JgOeRuGD_Y4-unsplash.jpg',
        'kalen-emsley-Bkci_8qcdvQ-unsplash.jpg',
        'rohit-tandon-9wg5jCEPBsw-unsplash.jpg'
    ];

    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.querySelector('.thumbnails');

    if (images.length > 0) {
        mainImage.src = images[0];
    }

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Miniatura ${image}`;
        img.addEventListener('mouseover', () => {
            mainImage.src = image;
        });
        thumbnailsContainer.appendChild(img);
    });
});