let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

// Handling swipe gestures
let startX = 0;
let distance = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
}, false);

document.addEventListener('touchmove', function(e) {
    distance = startX - e.touches[0].clientX;
}, false);

document.addEventListener('touchend', function() {
    if (distance > 50) {
        // Swiped left
        moveSlide(1);
    } else if (distance < -50) {
        // Swiped right
        moveSlide(-1);
    }
}, false);