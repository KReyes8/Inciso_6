/*
Karen Reyes Ramirez
Universidad Autónoma de Durango
Examen */
let currentIndex = 0; // Menciona la imagen actual //

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    showImage(currentIndex + 1); 
}, 3000);