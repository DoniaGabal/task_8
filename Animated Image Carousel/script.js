document.addEventListener('DOMContentLoaded', function () {
    var index = 0;
    var totalImages = document.querySelectorAll('.carousel-images img').length;
    var imageWidth = document.querySelector('.carousel-images img').clientWidth;
    var carouselImages = document.querySelector('.carousel-images');

    function slideNext() {
        index++;
        if (index === totalImages) {
            index = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    document.querySelector('.next').addEventListener('click', slideNext);
});
